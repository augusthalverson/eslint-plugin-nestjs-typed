import { EslintFile, FilePath } from "eslint/use-at-your-own-risk";
declare class FileEnumeratorWrapper {
    static enumerateFiles: (sourceGlobs: string[], extensions: string[], filterFromPaths: string[]) => Array<FilePath>;
    static mapEnumeratedFiles: (paths: Array<EslintFile>, filterFromPaths: string[]) => Array<FilePath>;
}
export default FileEnumeratorWrapper;
