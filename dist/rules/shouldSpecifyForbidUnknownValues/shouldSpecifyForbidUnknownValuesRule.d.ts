import { TSESTree } from "@typescript-eslint/types";
export declare const isValidationPipeNewExpression: (node: TSESTree.Node) => boolean;
export declare const checkObjectExpression: (os: TSESTree.ObjectExpression) => boolean;
export declare const shouldTriggerNewExpressionHasProperty: (node: TSESTree.Node) => boolean;
export declare const shouldTriggerForVariableDecleratorExpression: (node: TSESTree.Node) => boolean;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldSpecifyForbidUnknownValues", never[], {
    NewExpression(node: TSESTree.Node): void;
    VariableDeclarator(node: TSESTree.Node): void;
}>;
export default rule;
