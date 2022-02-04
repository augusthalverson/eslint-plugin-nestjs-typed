import { TSESTree } from "@typescript-eslint/types";
export declare const shouldUseApiResponseDecorator: (node: TSESTree.MethodDefinition) => boolean;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldSpecifyApiResponse", never[], {
    MethodDefinition(node: TSESTree.MethodDefinition): void;
}>;
export default rule;
