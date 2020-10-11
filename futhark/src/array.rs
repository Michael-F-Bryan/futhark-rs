use crate::{Context, FutharkError};
use std::{
    fmt::{self, Debug, DebugStruct, Formatter},
    mem::ManuallyDrop,
    os::raw::c_int,
    rc::Rc,
};

/// Basic information about a Futhark array, and functions for manipulating it.
pub trait ArrayBase {
    /// The C type used to represent arrays with this type.
    type Raw;
    /// The `futhark_context` type arrays with this [`ArrayBase`] can be used
    /// with.
    type Ctx: Context;

    /// Free the underlying array.
    ///
    /// # Safety
    ///
    /// The provided `raw` pointer must point to a valid array.
    #[must_use = "Don't forget to check the error code"]
    unsafe fn free(
        ctx: *mut <Self::Ctx as Context>::Raw,
        raw: *mut Self::Raw,
    ) -> c_int;

    /// Format the array's properties so they can be displayed to the user.
    ///
    /// This is a workaround for not being able to specialise [`Debug`] in
    /// stable Rust.
    #[doc(hidden)]
    fn format_array(array: &Array<Self>, f: &mut DebugStruct)
    where
        Self: Sized,
    {
        f.field("raw", &format_args!("{:p}", array.raw));
    }
}

/// An array that lets you access the items inside it.
pub trait ExtractableArray: ArrayBase {
    /// The type used to represent an array's shape (e.g.  `[usize; 2]` for a
    /// 2D array).
    type Shape: AsRef<[usize]> + AsMut<[usize]> + Default;
    /// The item a buffer would contain.
    type Item: Copy;

    /// Get a reference to the array containing this array's shape.
    ///
    /// # Safety
    ///
    /// This must return a pointer to an `i64` array with the same length as
    /// [`ExtractableArray::Shape`].
    unsafe fn shape(
        ctx: *mut <Self::Ctx as Context>::Raw,
        raw: *mut Self::Raw,
    ) -> *const i64;

    /// Copy the contents of this array to a buffer.
    ///
    /// # Safety
    ///
    /// The buffer must have space for the entire array's contents. This can
    /// be calculated as the product of the [`ExtractableArray::Shape`] lengths.
    #[must_use = "Don't forget to check the error code"]
    unsafe fn to_vec(
        ctx: *mut <Self::Ctx as Context>::Raw,
        raw: *mut Self::Raw,
        buffer: *mut Self::Item,
    ) -> c_int;
}

/// A smart pointer to a Futhark array.
pub struct Array<D: ArrayBase> {
    raw: *mut D::Raw,
    ctx: Rc<D::Ctx>,
}

impl<D: ArrayBase> Array<D>
where
    D: ArrayBase,
{
    /// Create a new [`Array`] from the underlying futhark type and a
    /// reference-counted pointer to the context.
    pub fn from_ptr(raw: *mut D::Raw, ctx: Rc<D::Ctx>) -> Self {
        Array { raw, ctx }
    }

    /// Get a raw pointer to the underlying Futhark array.
    pub fn raw(&self) -> *mut D::Raw { self.raw }

    /// Explicitly free the [`Array`], retrieving any errors that may have
    /// occurred.
    pub fn destroy(self) -> Result<(), FutharkError> {
        unsafe {
            // First, we want *complete* control over what gets dropped and
            // when.
            let mut array = ManuallyDrop::new(self);

            // Next, free the array's memory
            let ret = D::free(array.ctx.raw(), array.raw);
            // and check its result (note: we don't want to return yet, so no
            // "?")
            let result = array.ctx.check_error(ret);

            // make sure we decrement the context's reference count
            std::ptr::drop_in_place(&mut array.ctx);

            // only now can we return the result
            result
        }
    }
}

impl<D: ArrayBase> Array<D>
where
    D: ExtractableArray,
{
    pub fn shape(&self) -> D::Shape {
        unsafe {
            let shape = D::shape(self.ctx.raw(), self.raw);
            let mut buffer = D::Shape::default();

            for (i, dim) in buffer.as_mut().iter_mut().enumerate() {
                *dim = shape.offset(i as isize).read() as usize;
            }

            buffer
        }
    }

    /// Extract the values this [`Array`] contains.
    pub fn to_vec(&self) -> Result<Vec<D::Item>, FutharkError> {
        unsafe {
            // This is the first time we're accessing the data, so we'll need to
            // sync with the GPU.
            let ret = self.ctx.sync();
            self.ctx.check_error(ret)?;

            // Allocate a suitably sized buffer
            let item_size = std::mem::size_of::<D::Item>();
            let size: usize = self.shape().as_ref().iter().copied().product();
            let mut buffer = Vec::with_capacity(size * item_size);

            // then fill it.
            let ret = D::to_vec(self.ctx.raw(), self.raw, buffer.as_mut_ptr());
            //
            self.ctx.check_error(ret)?;

            // The buffer has now been initialized so it's safe
            buffer.set_len(size);

            Ok(buffer)
        }
    }
}

impl<D> Drop for Array<D>
where
    D: ArrayBase,
{
    fn drop(&mut self) {
        unsafe {
            let ret = D::free(self.ctx.raw(), self.raw);

            // If freeing the memory fails (e.g. the GPU driver returned an
            // error) we need a way to tell the user. We don't want to trigger a
            // double-panic, though, because that'll crash the program.
            if !std::thread::panicking() {
                self.ctx.check_error(ret).unwrap();
            }
        }
    }
}

impl<D: ArrayBase> Debug for Array<D> {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        let type_name = format!("Array<{}>", std::any::type_name::<D>());
        let mut f = f.debug_struct(&type_name);

        D::format_array(self, &mut f);

        f.field("ctx", &format_args!("{:p}", self.ctx.raw()))
            .finish()
    }
}
