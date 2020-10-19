(function() {var implementors = {};
implementors["aho_corasick"] = [{"text":"impl&lt;S&gt; UnwindSafe for AhoCorasick&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AhoCorasickBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; UnwindSafe for FindIter&lt;'a, 'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; UnwindSafe for FindOverlappingIter&lt;'a, 'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, R, S&gt; UnwindSafe for StreamFindIter&lt;'a, R, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Match","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MatchKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl&lt;'s, 'h&gt; UnwindSafe for FindIter&lt;'s, 'h&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Searcher","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MatchKind","synthetic":true,"types":[]}];
implementors["ansi_term"] = [{"text":"impl UnwindSafe for Prefix","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Infix","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Suffix","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Style","synthetic":true,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized&gt; UnwindSafe for ANSIGenericString&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as ToOwned&gt;::Owned: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized&gt; UnwindSafe for ANSIGenericStrings&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as ToOwned&gt;::Owned: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Colour","synthetic":true,"types":[]}];
implementors["bindgen"] = [{"text":"impl UnwindSafe for CodegenConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bindings","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClangVersion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CargoCallbacks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AliasVariation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EnumVariation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MacroTypeVariation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RustTarget","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EnumVariantCustomBehavior","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EnumVariantValue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IntKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MacroParsingBehavior","synthetic":true,"types":[]}];
implementors["cc"] = [{"text":"impl UnwindSafe for Build","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Tool","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VsVers","synthetic":true,"types":[]}];
implementors["cexpr"] = [{"text":"impl&lt;I&gt; UnwindSafe for Error&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl&lt;'ident&gt; UnwindSafe for IdentifierParser&lt;'ident&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EvalResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CChar","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Token","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Kind","synthetic":true,"types":[]}];
implementors["clang_sys"] = [{"text":"impl UnwindSafe for CXCodeCompleteResults","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXComment","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXCompletionResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXCursor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXCursorAndRangeVisitor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXFileUniqueID","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxAttrInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxBaseClassInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxCXXClassDeclInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxContainerInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxDeclInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxEntityInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxEntityRefInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxIBOutletCollectionAttrInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxImportedASTFileInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxIncludedFileInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxLoc","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxObjCCategoryDeclInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxObjCContainerDeclInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxObjCInterfaceDeclInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxObjCPropertyDeclInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxObjCProtocolRefInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXIdxObjCProtocolRefListInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXPlatformAvailability","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXSourceLocation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXSourceRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXSourceRangeList","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXString","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXStringSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXTUResourceUsage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXTUResourceUsageEntry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXUnsavedFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CXVersion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IndexerCallbacks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Functions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SharedLibrary","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Clang","synthetic":true,"types":[]}];
implementors["clap"] = [{"text":"impl&lt;'a, 'b&gt; !UnwindSafe for App&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b&gt; !UnwindSafe for Arg&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ArgGroup&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ArgMatches&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for OsValues&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SubCommand&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Values&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AppSettings","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ArgSettings","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Shell","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]}];
implementors["env_logger"] = [{"text":"impl&lt;'a&gt; UnwindSafe for Env&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Logger","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Target","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WriteStyle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Filter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Timestamp","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Style","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for StyledValue&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Formatter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Color","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TimestampPrecision","synthetic":true,"types":[]}];
implementors["futhark"] = [{"text":"impl&lt;D&gt; UnwindSafe for Array&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as ArrayBase&gt;::Ctx: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as ArrayBase&gt;::Raw: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FutharkError","synthetic":true,"types":[]}];
implementors["futhark_build"] = [{"text":"impl !UnwindSafe for Build","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Backend","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for GeneratorError","synthetic":true,"types":[]}];
implementors["glob"] = [{"text":"impl !UnwindSafe for Paths","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for GlobError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PatternError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Pattern","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MatchOptions","synthetic":true,"types":[]}];
implementors["humantime"] = [{"text":"impl UnwindSafe for FormattedDuration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Duration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Timestamp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Rfc3339Timestamp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["libloading"] = [{"text":"impl UnwindSafe for Library","synthetic":true,"types":[]},{"text":"impl&lt;'lib, T&gt; UnwindSafe for Symbol&lt;'lib, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Library","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Symbol&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["log"] = [{"text":"impl&lt;'a&gt; !UnwindSafe for Record&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for RecordBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Metadata&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for MetadataBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetLoggerError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParseLevelError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Level","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LevelFilter","synthetic":true,"types":[]}];
implementors["memchr"] = [{"text":"impl&lt;'a&gt; UnwindSafe for Memchr&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Memchr2&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Memchr3&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["nom"] = [{"text":"impl UnwindSafe for CompareResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Needed","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for Err&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; UnwindSafe for VerboseError&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VerboseErrorKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl&lt;I, E, F&gt; UnwindSafe for ParserIterator&lt;I, E, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Endianness","synthetic":true,"types":[]}];
implementors["peeking_take_while"] = [{"text":"impl&lt;'a, I, P&gt; !UnwindSafe for PeekingTakeWhile&lt;'a, I, P&gt;","synthetic":true,"types":[]}];
implementors["pkg_config"] = [{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Library","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl UnwindSafe for TokenStream","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LexError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Span","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Punct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ident","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TokenTree","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Delimiter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Spacing","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IntoIter","synthetic":true,"types":[]}];
implementors["quick_error"] = [{"text":"impl&lt;X, E&gt; UnwindSafe for Context&lt;X, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["regex"] = [{"text":"impl UnwindSafe for RegexSetBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatches","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatchesIntoIter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SetMatchesIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaptureLocations","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for CaptureMatches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r&gt; UnwindSafe for CaptureNames&lt;'r&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Captures&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Match&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for Matches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for NoExpand&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Regex","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; !UnwindSafe for ReplacerRef&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for Split&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for SplitN&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 't&gt; UnwindSafe for SubCaptureMatches&lt;'c, 't&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexSetBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Match&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Regex","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for Matches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for CaptureMatches&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for Split&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r, 't&gt; !UnwindSafe for SplitN&lt;'r, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'r&gt; UnwindSafe for CaptureNames&lt;'r&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaptureLocations","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for Captures&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 't&gt; UnwindSafe for SubCaptureMatches&lt;'c, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; !UnwindSafe for ReplacerRef&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'t&gt; UnwindSafe for NoExpand&lt;'t&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegexSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatches","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetMatchesIntoIter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SetMatchesIter&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl UnwindSafe for Parser","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParserBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnicodeWordError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Span","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Position","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WithComments","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Comment","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Alternation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Concat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassPerl","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassAscii","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassBracketed","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetUnion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetBinaryOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Assertion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Repetition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaptureName","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SetFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Flags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlagsItem","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ast","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LiteralKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpecialLiteralKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HexLiteralKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Class","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassPerlKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassAsciiKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicodeKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicodeOpKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetItem","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassSetBinaryOpKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AssertionKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlagsItemKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Flag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParserBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Parser","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Printer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaseFoldError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Hir","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicode","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ClassUnicodeIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassUnicodeRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassBytes","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ClassBytesIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClassBytesRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Repetition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HirKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Class","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Anchor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WordBoundary","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RepetitionRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literals","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Printer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TranslatorBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Translator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8Range","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8Sequences","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8Sequence","synthetic":true,"types":[]}];
implementors["rustc_hash"] = [{"text":"impl UnwindSafe for FxHasher","synthetic":true,"types":[]}];
implementors["shlex"] = [{"text":"impl&lt;'a&gt; UnwindSafe for Shlex&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["strsim"] = [{"text":"impl UnwindSafe for StrSimError","synthetic":true,"types":[]}];
implementors["termcolor"] = [{"text":"impl UnwindSafe for StandardStream","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for StandardStreamLock&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BufferedStandardStream","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BufferWriter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Buffer","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; UnwindSafe for NoColor&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; UnwindSafe for Ansi&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorSpec","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParseColorError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorChoice","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Color","synthetic":true,"types":[]}];
implementors["textwrap"] = [{"text":"impl UnwindSafe for HyphenSplitter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NoHyphenation","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; UnwindSafe for Wrapper&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; UnwindSafe for IntoWrapIter&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'w, 'a, S&gt; UnwindSafe for WrapIter&lt;'w, 'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["thread_local"] = [{"text":"impl&lt;T&gt; !UnwindSafe for CachedIntoIter&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for CachedIterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for IntoIter&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;Send + UnwindSafe&gt; UnwindSafe for CachedThreadLocal&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send + UnwindSafe&gt; UnwindSafe for ThreadLocal&lt;T&gt;","synthetic":false,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V&gt; UnwindSafe for VecMap&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; !UnwindSafe for VacantEntry&lt;'a, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; !UnwindSafe for OccupiedEntry&lt;'a, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; UnwindSafe for Iter&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; !UnwindSafe for IterMut&lt;'a, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; UnwindSafe for Keys&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; UnwindSafe for Values&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; !UnwindSafe for ValuesMut&lt;'a, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; UnwindSafe for IntoIter&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; UnwindSafe for Drain&lt;'a, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, V&gt; !UnwindSafe for Entry&lt;'a, V&gt;","synthetic":true,"types":[]}];
implementors["which"] = [{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Path","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CanonicalPath","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorKind","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()