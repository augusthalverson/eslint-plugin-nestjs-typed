import { ParserServices, TSESTree } from "@typescript-eslint/experimental-utils";
import { RuleContext } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import ts from "typescript";
export declare const typedTokenHelpers: {
    decoratorsThatCouldMeanTheDevIsValidatingAnArray: string[];
    isTypeArrayTypeOrUnionOfArrayTypes(node: TSESTree.Node, parserService: ParserServices, checker: ts.TypeChecker): boolean;
    getNodeType(node: TSESTree.Node, parserService: ParserServices, checker: ts.TypeChecker): ts.Type;
    expressionNodeIsArrayType(node: TSESTree.Expression, parserService: ParserServices, checker: ts.TypeChecker): boolean;
    getPropertyValueEqualsExpected(firstArgument: TSESTree.ObjectExpression, propertyName: string, expectedValue: string | number | bigint | boolean | RegExp | null): boolean;
    getConstrainedTypeAtLocation(checker: ts.TypeChecker, node: ts.Node): ts.Type;
    nodeHasDecoratorsNamed(n: TSESTree.ClassDeclaration | TSESTree.PropertyDefinition | TSESTree.MethodDefinition, decoratorNames: string[]): boolean;
    getDecoratorsNamed(n: TSESTree.ClassDeclaration | TSESTree.PropertyDefinition | TSESTree.MethodDefinition, decoratorNames: string[]): TSESTree.Decorator[];
    parseStringToAst(code: string, path: string, context: Readonly<RuleContext<never, never[]>>): TSESTree.Program;
    isEnumType(type: ts.Type): boolean;
    isOptionalPropertyValue(node: TSESTree.PropertyDefinition): boolean;
};
