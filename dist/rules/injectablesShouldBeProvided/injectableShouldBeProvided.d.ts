import { TSESTree } from "@typescript-eslint/experimental-utils";
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"injectableInModule" | "controllersInModule", never[], {
    ClassDeclaration(node: TSESTree.ClassDeclaration): void;
    "Program:exit"(): void;
}>;
export default rule;
