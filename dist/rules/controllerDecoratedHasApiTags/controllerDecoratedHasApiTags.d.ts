import { TSESTree } from "@typescript-eslint/types";
export declare const shouldUseApiTagDecorator: (node: TSESTree.ClassDeclaration) => boolean;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldUseApiTagDecorator", never[], {
    ClassDeclaration(node: TSESTree.ClassDeclaration): void;
}>;
export default rule;
