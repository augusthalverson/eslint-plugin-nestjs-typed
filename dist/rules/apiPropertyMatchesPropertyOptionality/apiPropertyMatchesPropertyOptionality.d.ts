import { TSESTree } from "@typescript-eslint/types";
export declare const shouldUseRequiredDecorator: (node: TSESTree.PropertyDefinition) => boolean;
export declare const shouldUseOptionalDecorator: (node: TSESTree.PropertyDefinition) => boolean;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldUseOptionalDecorator" | "shouldUseRequiredDecorator", never[], {
    PropertyDefinition(node: TSESTree.PropertyDefinition): void;
}>;
export default rule;
