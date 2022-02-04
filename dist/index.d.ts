declare const configuration: {
    rules: {
        "api-property-matches-property-optionality": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldUseOptionalDecorator" | "shouldUseRequiredDecorator", never[], {
            PropertyDefinition(node: import("@typescript-eslint/types/dist/ast-spec").PropertyDefinition): void;
        }>;
        "injectable-should-be-provided": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"injectableInModule" | "controllersInModule", never[], {
            ClassDeclaration(node: import("@typescript-eslint/types/dist/ast-spec").ClassDeclaration): void;
            "Program:exit"(): void;
        }>;
        "provided-injected-should-match-factory-parameters": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"mainMessage", never[], {
            VariableDeclarator(node: import("@typescript-eslint/types/dist/ast-spec").VariableDeclarator): void;
        }>;
        "controllers-should-supply-api-tags": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldUseApiTagDecorator", never[], {
            ClassDeclaration(node: import("@typescript-eslint/types/dist/ast-spec").ClassDeclaration): void;
        }>;
        "api-method-should-specify-api-response": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldSpecifyApiResponse", never[], {
            MethodDefinition(node: import("@typescript-eslint/types/dist/ast-spec").MethodDefinition): void;
        }>;
        "api-enum-property-best-practices": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"needsEnumNameAdded" | "needsTypeRemoved" | "enumNameShouldMatchType", never[], {
            VariableDeclaration(node: import("@typescript-eslint/types/dist/ast-spec").Node): void;
        }>;
        "api-property-returning-array-should-set-array": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldSetArrayPropertyTrue" | "shouldSetArrayPropertyFalse", never[], {
            PropertyDefinition: (node: import("@typescript-eslint/types/dist/ast-spec").Node) => void;
        }>;
        "should-specify-forbid-unknown-values": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldSpecifyForbidUnknownValues", never[], {
            NewExpression(node: import("@typescript-eslint/types/dist/ast-spec").Node): void;
            VariableDeclarator(node: import("@typescript-eslint/types/dist/ast-spec").Node): void;
        }>;
        "param-decorator-name-matches-route-param": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"paramIdentifierDoesntNeedColon" | "paramIdentifierShouldMatch", never[], {
            Decorator(node: import("@typescript-eslint/types/dist/ast-spec").Decorator): void;
        }>;
        "validated-non-primitive-property-needs-type-decorator": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldUseTypeDecorator", never[], {
            PropertyDefinition(node: import("@typescript-eslint/types/dist/ast-spec").PropertyDefinition): void;
        }>;
        "validate-nested-of-array-should-set-each": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"shouldSetEachPropertyTrue" | "shouldSetEachPropertyFalse", never[], {
            PropertyDefinition: (node: import("@typescript-eslint/types/dist/ast-spec").Node) => void;
        }>;
        "all-properties-are-whitelisted": import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"missing-property-decorator", never[], {
            ClassDeclaration(node: import("@typescript-eslint/types/dist/ast-spec").ClassDeclaration): void;
        }>;
    };
    configs: {
        recommended: {
            parser: string;
            parserOptions: {
                sourceType: string;
            };
            rules: {
                "@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters": string;
                "@darraghor/nestjs-typed/injectable-should-be-provided": (string | {
                    src: string[];
                    filterFromPaths: string[];
                })[];
                "@darraghor/nestjs-typed/api-property-matches-property-optionality": string;
                "@darraghor/nestjs-typed/api-method-should-specify-api-response": string;
                "@darraghor/nestjs-typed/controllers-should-supply-api-tags": string;
                "@darraghor/nestjs-typed/api-enum-property-best-practices": string;
                "@darraghor/nestjs-typed/api-property-returning-array-should-set-array": string;
                "@darraghor/nestjs-typed/should-specify-forbid-unknown-values": string;
                "@darraghor/nestjs-typed/param-decorator-name-matches-route-param": string;
                "@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator": string;
                "@darraghor/nestjs-typed/validate-nested-of-array-should-set-each": string;
                "@darraghor/nestjs-typed/all-properties-are-whitelisted": string;
            };
        };
        "no-swagger": {
            parser: string;
            parserOptions: {
                sourceType: string;
            };
            rules: {
                "@darraghor/nestjs-typed/api-property-matches-property-optionality": string;
                "@darraghor/nestjs-typed/api-method-should-specify-api-response": string;
                "@darraghor/nestjs-typed/controllers-should-supply-api-tags": string;
                "@darraghor/nestjs-typed/api-enum-property-best-practices": string;
                "@darraghor/nestjs-typed/api-property-returning-array-should-set-array": string;
            };
        };
    };
};
export = configuration;
