import { TSESTree } from "@typescript-eslint/experimental-utils";
export declare const hasMismatchedInjected: (node: TSESTree.VariableDeclarator) => boolean;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"mainMessage", never[], {
    VariableDeclarator(node: TSESTree.VariableDeclarator): void;
}>;
export default rule;
