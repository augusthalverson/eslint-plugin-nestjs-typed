import { TSESTree } from "@typescript-eslint/types";
import { EnumTestResultModel } from "./enumTestResultModel";
export declare const hasEnumSpecifiedCorrectly: (node: TSESTree.Node, isEnumType: boolean) => EnumTestResultModel;
export declare const needsEnumNameMatchingEnumType: (enumNameProperty: TSESTree.Property, enumProperty: TSESTree.Property) => boolean;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"needsEnumNameAdded" | "needsTypeRemoved" | "enumNameShouldMatchType", never[], {
    VariableDeclaration(node: TSESTree.Node): void;
}>;
export default rule;
