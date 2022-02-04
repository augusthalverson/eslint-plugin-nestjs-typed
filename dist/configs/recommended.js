"use strict";
module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: { sourceType: "module" },
    rules: {
        //  "nestjs-typed/api-methods-have-documentation": "error",
        "@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters": "error",
        "@darraghor/nestjs-typed/injectable-should-be-provided": [
            "error",
            {
                src: ["src/**/*.ts"],
                filterFromPaths: ["node_modules", ".test.", ".spec."],
            },
        ],
        "@darraghor/nestjs-typed/api-property-matches-property-optionality": "error",
        "@darraghor/nestjs-typed/api-method-should-specify-api-response": "error",
        "@darraghor/nestjs-typed/controllers-should-supply-api-tags": "error",
        "@darraghor/nestjs-typed/api-enum-property-best-practices": "error",
        "@darraghor/nestjs-typed/api-property-returning-array-should-set-array": "error",
        "@darraghor/nestjs-typed/should-specify-forbid-unknown-values": "error",
        "@darraghor/nestjs-typed/param-decorator-name-matches-route-param": "error",
        "@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator": "error",
        "@darraghor/nestjs-typed/validate-nested-of-array-should-set-each": "error",
        "@darraghor/nestjs-typed/all-properties-are-whitelisted": "error",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb21tZW5kZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlncy9yZWNvbW1lbmRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQVM7SUFDTCxNQUFNLEVBQUUsMkJBQTJCO0lBQ25DLGFBQWEsRUFBRSxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUM7SUFDckMsS0FBSyxFQUFFO1FBQ0gsMkRBQTJEO1FBQzNELDJFQUEyRSxFQUN2RSxPQUFPO1FBQ1gsdURBQXVELEVBQUU7WUFDckQsT0FBTztZQUNQO2dCQUNJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDcEIsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDeEQ7U0FDSjtRQUNELG1FQUFtRSxFQUMvRCxPQUFPO1FBQ1gsZ0VBQWdFLEVBQzVELE9BQU87UUFDWCw0REFBNEQsRUFBRSxPQUFPO1FBQ3JFLDBEQUEwRCxFQUFFLE9BQU87UUFDbkUsdUVBQXVFLEVBQ25FLE9BQU87UUFDWCw4REFBOEQsRUFBRSxPQUFPO1FBQ3ZFLGtFQUFrRSxFQUM5RCxPQUFPO1FBQ1gsK0VBQStFLEVBQzNFLE9BQU87UUFDWCxrRUFBa0UsRUFDOUQsT0FBTztRQUNYLHdEQUF3RCxFQUFFLE9BQU87S0FDcEU7Q0FDSixDQUFDIn0=