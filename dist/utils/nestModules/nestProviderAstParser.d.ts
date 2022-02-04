import { TSESTree } from "@typescript-eslint/experimental-utils";
import { NestProvidedInjectablesMap } from "./models/NestProvidedInjectablesMap";
export declare const nestProviderAstParser: {
    mapNestProviderObject(n: TSESTree.Property, path: string): Array<string | NestProvidedInjectablesMap> | null;
    findNestProviderObjectsProperty(providerDeclaration: TSESTree.VariableDeclarator | undefined, propertyName: string): TSESTree.Property | null;
    findNestProviderObject(ast: TSESTree.Program): TSESTree.VariableDeclarator | undefined;
};
