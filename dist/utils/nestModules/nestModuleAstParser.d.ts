import { TSESTree } from "@typescript-eslint/experimental-utils";
import { NestProvidedInjectablesMap } from "./models/NestProvidedInjectablesMap";
export declare const nestModuleAstParser: {
    findNestModuleClass(ast: TSESTree.Program): TSESTree.ClassDeclaration | null;
    mapNestModuleDecorator(n: TSESTree.ClassDeclaration, path: string): Array<string | NestProvidedInjectablesMap> | null;
    mapModuleDecoratorOptionProperty(moduleDecorator: TSESTree.Decorator, propertyName: string): Set<string>;
};
