use std::{
    ffi::CStr,
    fmt::{self, Display, Formatter},
    os::raw::{c_char, c_int},
};

/// An error returned by all Futhark C functions.
#[derive(Debug, Clone, PartialEq)]
pub struct FutharkError {
    pub code: c_int,
    pub error_message: Option<String>,
}

impl FutharkError {
    pub unsafe fn from_last_error(
        code: c_int,
        last_error: *const c_char,
    ) -> Self {
        if last_error.is_null() {
            return FutharkError {
                code,
                error_message: None,
            };
        }

        let error_message = CStr::from_ptr(last_error).to_string_lossy();

        FutharkError {
            code,
            error_message: Some(error_message.into_owned()),
        }
    }
}

impl Display for FutharkError {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        match &self.error_message {
            Some(error) => write!(
                f,
                "Call failed with return code {}: {}",
                self.code, error
            ),
            None => write!(f, "Call failed with return code {}", self.code),
        }
    }
}

impl std::error::Error for FutharkError {}
