import { TSESTree } from "@typescript-eslint/types";
import ArraySetResultModel from "./arraySetResultModel";
export declare const shouldSetArrayProperty: (node: TSESTree.PropertyDefinition) => ArraySetResultModel;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldSetEachPropertyTrue" | "shouldSetEachPropertyFalse", never[], {
    PropertyDefinition: (node: TSESTree.Node) => void;
}>;
export default rule;
