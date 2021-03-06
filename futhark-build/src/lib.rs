use std::{
    error::Error,
    ffi::OsString,
    fmt,
    path::{Path, PathBuf},
    process::Command,
};

use fmt::{Display, Formatter};

pub struct Build {
    futhark_binary: OsString,
    backend: Backend,
    file: PathBuf,
    configure_cc: Box<dyn Fn(&mut cc::Build, Backend) -> Result<(), GeneratorError>>,
    configure_bindgen:
        Box<dyn Fn(bindgen::Builder, Backend) -> Result<bindgen::Builder, GeneratorError>>,
}

impl Build {
    /// Create a new builder which will compile a futhark file.
    pub fn new<P: Into<PathBuf>>(file: P) -> Self {
        Build {
            file: file.into(),
            backend: Backend::C,
            futhark_binary: OsString::from("futhark"),
            configure_cc: Box::new(default_configure_cc),
            configure_bindgen: Box::new(default_configure_bindgen),
        }
    }

    /// Set the backend to generate code for.
    pub fn backend(&mut self, backend: Backend) -> &mut Self {
        self.backend = backend;
        self
    }

    /// Override the executable to invoke the Futhark compiler (`futhark` by
    /// default).
    pub fn futhark<S>(&mut self, executable: S) -> &mut Self
    where
        S: Into<OsString>,
    {
        self.futhark_binary = executable.into();
        self
    }

    /// An escape hatch for when you need to do extra configuration to make sure
    /// the C code generated by `futhark` compiles.
    pub fn configure_cc<F>(&mut self, configure: F) -> &mut Self
    where
        F: Fn(&mut cc::Build, Backend) -> Result<(), GeneratorError> + 'static,
    {
        self.configure_cc = Box::new(configure);
        self
    }

    /// An escape hatch for when you need to tweak how the Rust bindings are
    /// generated.
    pub fn configure_bindgen<F>(&mut self, configure: F) -> &mut Self
    where
        F: Fn(bindgen::Builder, Backend) -> Result<bindgen::Builder, GeneratorError> + 'static,
    {
        self.configure_bindgen = Box::new(configure);
        self
    }

    pub fn generate<P>(&self, out_dir: P) -> Result<(), GeneratorError>
    where
        P: AsRef<Path>,
    {
        let out_dir = out_dir.as_ref();
        let name = self.name()?;
        let raw_c_destination = out_dir.join(name);

        self.compile_futhark(&raw_c_destination)?;
        self.compile_c(&raw_c_destination, out_dir, name)?;
        self.generate_bindings(&raw_c_destination, out_dir, name)?;

        Ok(())
    }

    fn name(&self) -> Result<&str, GeneratorError> {
        self.file
            .file_stem()
            .and_then(|s| s.to_str())
            .ok_or(GeneratorError::BadFilename)
    }

    fn compile_futhark(&self, raw_c_destination: &Path) -> Result<(), GeneratorError> {
        let output = self
            .command(&raw_c_destination)
            .output()
            .map_err(GeneratorError::Command)?;

        if output.status.success() {
            Ok(())
        } else {
            Err(GeneratorError::FutharkCompilationFailed(output))
        }
    }

    fn command(&self, raw_c_destination: &Path) -> Command {
        let mut cmd = Command::new(&self.futhark_binary);

        match self.backend {
            Backend::C => cmd.arg("c"),
            Backend::Cuda => cmd.arg("cuda"),
            Backend::OpenCL => cmd.arg("opencl"),
        };

        cmd.arg("-o")
            .arg(raw_c_destination)
            .arg("--library")
            .arg(&self.file);

        cmd
    }

    fn compile_c(
        &self,
        raw_c_destination: &Path,
        out_dir: &Path,
        name: &str,
    ) -> Result<(), GeneratorError> {
        let c_src = raw_c_destination.with_extension("c");

        let mut build = cc::Build::new();

        build.file(c_src).out_dir(out_dir).warnings(false);

        (self.configure_cc)(&mut build, self.backend)?;

        build.try_compile(name).map_err(GeneratorError::CompileC)
    }

    fn generate_bindings(
        &self,
        raw_c_destination: &Path,
        out_dir: &Path,
        name: &str,
    ) -> Result<(), GeneratorError> {
        let c_header = raw_c_destination.with_extension("h");

        let builder = bindgen::builder()
            .header(c_header.display().to_string())
            .whitelist_function("futhark_.*");

        let builder = (self.configure_bindgen)(builder, self.backend)?;

        let bindings = match builder.generate() {
            Ok(b) => b,
            Err(()) => return Err(GeneratorError::BindgenFailed),
        };

        let dest = out_dir.join(name).with_extension("rs");
        bindings
            .write_to_file(&dest)
            .map_err(|e| GeneratorError::WriteFile {
                error: e,
                filename: dest,
            })
    }
}

#[derive(Debug, Copy, Clone, PartialEq)]
pub enum Backend {
    C,
    Cuda,
    OpenCL,
}

impl Default for Backend {
    fn default() -> Self {
        Backend::C
    }
}

#[derive(Debug)]
#[non_exhaustive]
pub enum GeneratorError {
    Command(std::io::Error),
    CompileC(cc::Error),
    FutharkCompilationFailed(std::process::Output),
    BindgenFailed,
    BadFilename,
    WriteFile {
        error: std::io::Error,
        filename: PathBuf,
    },
    PkgConfig {
        error: pkg_config::Error,
        library: &'static str,
    },
    Other(Box<dyn std::error::Error>),
}

impl Display for GeneratorError {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        match self {
            GeneratorError::Command(_) => {
                write!(f, "Unable to start the futhark compiler. Is it installed?")
            }
            GeneratorError::BadFilename => write!(f, "The futhark file did not have a UTF-8 name"),
            GeneratorError::FutharkCompilationFailed(output) => {
                write!(f, "Futhark compilation failed with {}", output.status)
            }
            GeneratorError::CompileC(_) => {
                write!(f, "Unable to compile the C code generated by futhark")
            }
            GeneratorError::BindgenFailed => write!(f, "Bindgen failed"),
            GeneratorError::WriteFile { filename, .. } => {
                write!(f, "Unable to write to \"{}\"", filename.display())
            }
            GeneratorError::PkgConfig { library, .. } => write!(
                f,
                "Unable to use pkg-config to discover compiler args for {}",
                library
            ),
            GeneratorError::Other(other) => write!(f, "{}", other),
        }
    }
}

impl Error for GeneratorError {
    fn source(&self) -> Option<&(dyn Error + 'static)> {
        match self {
            GeneratorError::Command(io) => Some(io),
            GeneratorError::BadFilename => None,
            GeneratorError::FutharkCompilationFailed(_) => None,
            GeneratorError::CompileC(e) => Some(e),
            GeneratorError::BindgenFailed => None,
            GeneratorError::WriteFile { error, .. } => Some(error),
            GeneratorError::PkgConfig { error, .. } => Some(error),
            GeneratorError::Other(other) => Some(&**other),
        }
    }
}

pub fn default_configure_cc(build: &mut cc::Build, backend: Backend) -> Result<(), GeneratorError> {
    match backend {
        Backend::C => {}
        Backend::Cuda => {
            link_to_native_library(build, "nvrtc")?;
            link_to_native_library(build, "cuda")?;
            link_to_native_library(build, "cudart")?;
        }
        Backend::OpenCL => link_to_native_library(build, "OpenCL")?,
    }

    Ok(())
}

fn link_to_native_library(build: &mut cc::Build, name: &'static str) -> Result<(), GeneratorError> {
    let library = pkg_config::Config::new()
        .cargo_metadata(true)
        .env_metadata(true)
        .probe(name)
        .map_err(|e| GeneratorError::PkgConfig {
            error: e,
            library: name,
        })?;

    for lib in &library.include_paths {
        build.include(lib);
    }
    for (name, value) in &library.defines {
        build.define(name, value.as_deref());
    }

    Ok(())
}

pub fn default_configure_bindgen(
    builder: bindgen::Builder,
    backend: Backend,
) -> Result<bindgen::Builder, GeneratorError> {
    match backend {
        Backend::Cuda => include_native_library(builder, "cuda"),
        _ => Ok(builder),
    }
}

fn include_native_library(
    mut builder: bindgen::Builder,
    name: &'static str,
) -> Result<bindgen::Builder, GeneratorError> {
    let library = pkg_config::Config::new()
        .cargo_metadata(true)
        .env_metadata(true)
        .probe(name)
        .map_err(|e| GeneratorError::PkgConfig {
            error: e,
            library: name,
        })?;

    for lib in &library.include_paths {
        builder = builder.clang_arg(format!("-I{}", lib.display()));
    }

    Ok(builder)
}
