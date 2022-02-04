"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldSetArrayProperty = void 0;
const types_1 = require("@typescript-eslint/types");
const createRule_1 = require("../../utils/createRule");
const typedTokenHelpers_1 = require("../../utils/typedTokenHelpers");
const arraySetResultModel_1 = __importDefault(require("./arraySetResultModel"));
const shouldSetArrayProperty = (node) => {
    var _a, _b, _c, _d;
    const decorators = typedTokenHelpers_1.typedTokenHelpers.getDecoratorsNamed(node, [
        "ValidateNested",
    ]);
    if (decorators.length === 0) {
        return new arraySetResultModel_1.default(false, false);
    }
    const firstArgumentToDecorator = (_a = decorators[0].expression) === null || _a === void 0 ? void 0 : _a.arguments[0];
    const hasEachSetInOptions = typedTokenHelpers_1.typedTokenHelpers.getPropertyValueEqualsExpected(firstArgumentToDecorator, "each", true);
    // handle string[] or Array<string>
    const isArrayType = ((_c = ((_b = node.typeAnnotation) === null || _b === void 0 ? void 0 : _b.typeAnnotation)
        .typeName) === null || _c === void 0 ? void 0 : _c.name) === "Array";
    const isTypescriptArrayType = ((_d = node.typeAnnotation) === null || _d === void 0 ? void 0 : _d.typeAnnotation.type) === types_1.AST_NODE_TYPES.TSArrayType;
    const isAnArrayLikeType = isArrayType || isTypescriptArrayType;
    return new arraySetResultModel_1.default(isAnArrayLikeType && !hasEachSetInOptions, !isAnArrayLikeType && hasEachSetInOptions);
};
exports.shouldSetArrayProperty = shouldSetArrayProperty;
const rule = (0, createRule_1.createRule)({
    name: "validate-nested-of-array-should-set-each",
    meta: {
        docs: {
            description: "If you set ValidateNested() on an array, you should set {each: true} in the options",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            shouldSetEachPropertyTrue: `ValidateNested should have {each: true} when used on an array`,
            shouldSetEachPropertyFalse: `ValidateNested should not have {each: true} when used on non-arrays. Note: If this is a custom array class please ignore this suggestion, you should validate each in that case.`,
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            PropertyDefinition: (node) => {
                const shouldSetArrayResults = (0, exports.shouldSetArrayProperty)(node);
                if (shouldSetArrayResults.isArrayShouldBeSetFalse) {
                    context.report({
                        node: node,
                        messageId: "shouldSetEachPropertyFalse",
                    });
                }
                if (shouldSetArrayResults.isArrayShouldBeSetTrue) {
                    context.report({
                        node: node,
                        messageId: "shouldSetEachPropertyTrue",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOZXN0ZWRPZkFycmF5U2hvdWxkU2V0RWFjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlcy92YWxpZGF0ZU5lc3RlZE9mQXJyYXlTaG91bGRTZXRFYWNoL3ZhbGlkYXRlTmVzdGVkT2ZBcnJheVNob3VsZFNldEVhY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQWtFO0FBQ2xFLHVEQUFrRDtBQUNsRCxxRUFBZ0U7QUFDaEUsZ0ZBQXdEO0FBRWpELE1BQU0sc0JBQXNCLEdBQUcsQ0FDbEMsSUFBaUMsRUFDZCxFQUFFOztJQUNyQixNQUFNLFVBQVUsR0FBRyxxQ0FBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7UUFDMUQsZ0JBQWdCO0tBQ25CLENBQUMsQ0FBQztJQUVILElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxJQUFJLDZCQUFtQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNoRDtJQUVELE1BQU0sd0JBQXdCLEdBQUcsTUFDN0IsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQ2pCLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQThCLENBQUM7SUFFN0MsTUFBTSxtQkFBbUIsR0FDckIscUNBQWlCLENBQUMsOEJBQThCLENBQzVDLHdCQUF3QixFQUN4QixNQUFNLEVBQ04sSUFBSSxDQUNQLENBQUM7SUFDTixtQ0FBbUM7SUFDbkMsTUFBTSxXQUFXLEdBQ2IsQ0FBQSxNQUNJLENBQUMsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxjQUEyQyxDQUFBO1NBQzVELFFBQ1IsMENBQUUsSUFBSSxNQUFLLE9BQU8sQ0FBQztJQUN4QixNQUFNLHFCQUFxQixHQUN2QixDQUFBLE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsY0FBYyxDQUFDLElBQUksTUFBSyxzQkFBYyxDQUFDLFdBQVcsQ0FBQztJQUM1RSxNQUFNLGlCQUFpQixHQUFHLFdBQVcsSUFBSSxxQkFBcUIsQ0FBQztJQUUvRCxPQUFPLElBQUksNkJBQW1CLENBQzFCLGlCQUFpQixJQUFJLENBQUMsbUJBQW1CLEVBQ3pDLENBQUMsaUJBQWlCLElBQUksbUJBQW1CLENBQzVDLENBQUM7QUFDTixDQUFDLENBQUM7QUFuQ1csUUFBQSxzQkFBc0IsMEJBbUNqQztBQUVGLE1BQU0sSUFBSSxHQUFHLElBQUEsdUJBQVUsRUFBQztJQUNwQixJQUFJLEVBQUUsMENBQTBDO0lBQ2hELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLFdBQVcsRUFDUCxxRkFBcUY7WUFDekYsV0FBVyxFQUFFLEtBQUs7WUFDbEIsb0JBQW9CLEVBQUUsS0FBSztTQUM5QjtRQUNELFFBQVEsRUFBRTtZQUNOLHlCQUF5QixFQUFFLCtEQUErRDtZQUMxRiwwQkFBMEIsRUFBRSxrTEFBa0w7U0FDak47UUFDRCxNQUFNLEVBQUUsRUFBRTtRQUNWLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFFbEIsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsZ0VBQWdFO1lBQ2hFLGtCQUFrQixFQUFFLENBQUMsSUFBbUIsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLHFCQUFxQixHQUFHLElBQUEsOEJBQXNCLEVBQ2hELElBQW1DLENBQ3RDLENBQUM7Z0JBRUYsSUFBSSxxQkFBcUIsQ0FBQyx1QkFBdUIsRUFBRTtvQkFDL0MsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDWCxJQUFJLEVBQUUsSUFBSTt3QkFDVixTQUFTLEVBQUUsNEJBQTRCO3FCQUMxQyxDQUFDLENBQUM7aUJBQ047Z0JBQ0QsSUFBSSxxQkFBcUIsQ0FBQyxzQkFBc0IsRUFBRTtvQkFDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDWCxJQUFJLEVBQUUsSUFBSTt3QkFDVixTQUFTLEVBQUUsMkJBQTJCO3FCQUN6QyxDQUFDLENBQUM7aUJBQ047WUFDTCxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFDLENBQUM7QUFFSCxrQkFBZSxJQUFJLENBQUMifQ==