declare const allConfigs: {
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
export default allConfigs;
