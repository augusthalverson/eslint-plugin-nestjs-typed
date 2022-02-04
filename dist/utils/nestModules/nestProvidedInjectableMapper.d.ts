import { TSESTree } from "@typescript-eslint/experimental-utils";
import { RuleContext } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import { FilePath } from "eslint/use-at-your-own-risk";
import { NestProvidedInjectablesMap } from "./models/NestProvidedInjectablesMap";
declare const NestProvidedInjectableMapper: {
    mapDefaultSource(sourceGlob: string | string[] | undefined, currentWorkingDirectory: string): string[];
    parseFileList(files: Array<FilePath>, context: Readonly<RuleContext<never, never[]>>): Map<string, NestProvidedInjectablesMap>;
    notEmpty<TValue>(value: TValue | null): value is TValue;
    readFileContents(path: string): string;
    isNestInjectableThatIsNeverProvided(node: TSESTree.ClassDeclaration): boolean;
    mapAllProvidedInjectables(ast: TSESTree.Program, path: string): Array<string | NestProvidedInjectablesMap> | null;
};
export default NestProvidedInjectableMapper;
