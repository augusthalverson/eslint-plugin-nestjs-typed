declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"missing-property-decorator", never[], {
    ClassDeclaration(node: import("@typescript-eslint/types/dist/ast-spec").ClassDeclaration): void;
}>;
export default rule;
