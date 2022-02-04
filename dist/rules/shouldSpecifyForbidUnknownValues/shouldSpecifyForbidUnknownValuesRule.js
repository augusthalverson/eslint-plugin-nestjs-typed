"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldTriggerForVariableDecleratorExpression = exports.shouldTriggerNewExpressionHasProperty = exports.checkObjectExpression = exports.isValidationPipeNewExpression = void 0;
const createRule_1 = require("../../utils/createRule");
const isValidationPipeNewExpression = (node) => {
    const newExpression = node;
    const callee = newExpression === null || newExpression === void 0 ? void 0 : newExpression.callee;
    if (callee && callee.name === "ValidationPipe") {
        return true;
    }
    return false;
};
exports.isValidationPipeNewExpression = isValidationPipeNewExpression;
const checkObjectExpression = (os) => {
    var _a;
    if (!os) {
        return false;
    }
    const forbidUnknownValuesProperty = (_a = os === null || os === void 0 ? void 0 : os.properties) === null || _a === void 0 ? void 0 : _a.find((p) => p.key.name ===
        "forbidUnknownValues");
    // property is not present. this is wrong.
    if (os && !forbidUnknownValuesProperty) {
        return true;
    }
    // property is explicitly false. this is wrong.
    const isPropertyValueExplicitlyFalse = (forbidUnknownValuesProperty === null || forbidUnknownValuesProperty === void 0 ? void 0 : forbidUnknownValuesProperty.value).raw ===
        "false";
    if (isPropertyValueExplicitlyFalse) {
        return true;
    }
    // otherwise ignore this. we don't know the value.
    return false;
};
exports.checkObjectExpression = checkObjectExpression;
const shouldTriggerNewExpressionHasProperty = (node) => {
    var _a;
    // only look at ValidationPipe expressions
    if (!(0, exports.isValidationPipeNewExpression)(node)) {
        return false;
    }
    const newExpression = node;
    // the default new ValidationPipe() seems to prevent the attack so we ignore calls with no parameters
    // we also ignore parameters that are not explicit object expressions
    if (((_a = newExpression.arguments) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
        newExpression.arguments[0].type !== "ObjectExpression") {
        return false;
    }
    const argument = newExpression === null || newExpression === void 0 ? void 0 : newExpression.arguments[0];
    return (0, exports.checkObjectExpression)(argument);
};
exports.shouldTriggerNewExpressionHasProperty = shouldTriggerNewExpressionHasProperty;
const shouldTriggerForVariableDecleratorExpression = (node) => {
    // if the developer hasn't annotated the object we can't continue to check these rules correctly (we don't know if anonymous objects need to have any props)
    const variableDeclarator = node;
    const asExpression = variableDeclarator === null || variableDeclarator === void 0 ? void 0 : variableDeclarator.init;
    const typeAnnotation = asExpression === null || asExpression === void 0 ? void 0 : asExpression.typeAnnotation;
    const typeName = typeAnnotation === null || typeAnnotation === void 0 ? void 0 : typeAnnotation.typeName;
    if (typeName === undefined || typeName.name !== "ValidationPipeOptions") {
        return false;
    }
    // otherwise check the object expression is what we want
    return (0, exports.checkObjectExpression)(asExpression.expression);
};
exports.shouldTriggerForVariableDecleratorExpression = shouldTriggerForVariableDecleratorExpression;
const rule = (0, createRule_1.createRule)({
    name: "validation-pipe-should-use-forbid-unknown",
    meta: {
        docs: {
            description: "ValidationPipe should use forbidUnknownValues: true to prevent attacks. See https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18413",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            shouldSpecifyForbidUnknownValues: `ValidationPipe should use forbidUnknownValues: true to prevent attacks if setting you're setting any options. See https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18413`,
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            NewExpression(node) {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const result = (0, exports.shouldTriggerNewExpressionHasProperty)(node);
                if (result) {
                    context.report({
                        node: node,
                        messageId: "shouldSpecifyForbidUnknownValues",
                    });
                }
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            VariableDeclarator(node) {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const result = (0, exports.shouldTriggerForVariableDecleratorExpression)(node);
                if (result) {
                    context.report({
                        node: node,
                        messageId: "shouldSpecifyForbidUnknownValues",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdWxkU3BlY2lmeUZvcmJpZFVua25vd25WYWx1ZXNSdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3J1bGVzL3Nob3VsZFNwZWNpZnlGb3JiaWRVbmtub3duVmFsdWVzL3Nob3VsZFNwZWNpZnlGb3JiaWRVbmtub3duVmFsdWVzUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx1REFBa0Q7QUFFM0MsTUFBTSw2QkFBNkIsR0FBRyxDQUFDLElBQW1CLEVBQVcsRUFBRTtJQUMxRSxNQUFNLGFBQWEsR0FBRyxJQUE4QixDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxNQUE2QixDQUFDO0lBQzVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQVBXLFFBQUEsNkJBQTZCLGlDQU94QztBQUNLLE1BQU0scUJBQXFCLEdBQUcsQ0FDakMsRUFBNkIsRUFDdEIsRUFBRTs7SUFDVCxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxNQUFNLDJCQUEyQixHQUFHLE1BQUEsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLFVBQVUsMENBQUUsSUFBSSxDQUNwRCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ0EsQ0FBdUIsQ0FBQyxHQUEyQixDQUFDLElBQUk7UUFDMUQscUJBQXFCLENBQ1AsQ0FBQztJQUN2QiwwQ0FBMEM7SUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQywyQkFBMkIsRUFBRTtRQUNwQyxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsK0NBQStDO0lBQy9DLE1BQU0sOEJBQThCLEdBQ2hDLENBQUMsMkJBQTJCLGFBQTNCLDJCQUEyQix1QkFBM0IsMkJB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