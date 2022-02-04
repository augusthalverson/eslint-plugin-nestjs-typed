import { TSESTree } from "@typescript-eslint/types";
export declare const shouldTrigger: () => boolean;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldUseTypeDecorator", never[], {
    PropertyDefinition(node: TSESTree.PropertyDefinition): void;
}>;
export default rule;
