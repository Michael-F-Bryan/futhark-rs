use crate::FutharkError;
use std::{
    ops::Deref,
    os::raw::{c_char, c_int},
};

/// A wrapper struct containing a `futhark_context`.
pub trait Context {
    /// The `futhark_context` type used by the generated bindings.
    type Raw;

    /// Get a pointer to the underlying context type.
    fn raw(&self) -> *mut Self::Raw;

    unsafe fn last_error(&self) -> *const c_char;

    unsafe fn sync(&self) -> c_int;

    /// A helper method for converting an error code into a [`FutharkError`],
    /// using [`Context::last_error()`] to extract the error message.
    #[track_caller]
    fn check_error(&self, code: c_int) -> Result<(), FutharkError> {
        if code == 0 {
            return Ok(());
        }

        unsafe {
            let last_error = self.last_error();
            Err(FutharkError::from_last_error(code, last_error))
        }
    }

    /// A helper method for converting an error code into a [`FutharkError`],
    /// using [`Context::last_error()`] to extract the error message.
    #[track_caller]
    fn null_check<T>(&self, ptr: *mut T) -> Result<(), FutharkError> {
        if ptr.is_null() {
            unsafe {
                let last_error = self.last_error();
                Err(FutharkError::from_last_error(-1, last_error))
            }
        } else {
            Ok(())
        }
    }
}

impl<Ptr, C> Context for Ptr
where
    Ptr: Deref<Target = C>,
    C: Context,
{
    type Raw = C::Raw;

    fn raw(&self) -> *mut Self::Raw { (**self).raw() }

    unsafe fn last_error(&self) -> *const c_char { (**self).last_error() }

    unsafe fn sync(&self) -> c_int { (**self).sync() }
}
