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
    var _a, _b, _c;
    const decorators = typedTokenHelpers_1.typedTokenHelpers.getDecoratorsNamed(node, [
        "ApiPropertyOptional",
        "ApiProperty",
    ]);
    if (decorators.length === 0) {
        return new arraySetResultModel_1.default(false, false);
    }
    // There should only be one of these apiproperty decorators so we just grab the parameter to decorator at index 0
    const firstArgumentToDecorator = decorators[0].expression.arguments[0];
    const hasIsArraySetInOptions = typedTokenHelpers_1.typedTokenHelpers.getPropertyValueEqualsExpected(firstArgumentToDecorator, "isArray", true);
    // handle string[] or Array<string>
    const isArrayType = ((_b = ((_a = node.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation)
        .typeName) === null || _b === void 0 ? void 0 : _b.name) === "Array";
    const isTypescriptArrayType = ((_c = node.typeAnnotation) === null || _c === void 0 ? void 0 : _c.typeAnnotation.type) === types_1.AST_NODE_TYPES.TSArrayType;
    const isAnArrayLikeType = isArrayType || isTypescriptArrayType;
    return new arraySetResultModel_1.default(isAnArrayLikeType && !hasIsArraySetInOptions, !isAnArrayLikeType && hasIsArraySetInOptions);
};
exports.shouldSetArrayProperty = shouldSetArrayProperty;
const rule = (0, createRule_1.createRule)({
    name: "api-property-returning-array-should-set-array",
    meta: {
        docs: {
            description: "Properties of array should set array",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            shouldSetArrayPropertyTrue: `Property returning array should set array option property true`,
            shouldSetArrayPropertyFalse: `Property not returning array should not set array option property true`,
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
                        messageId: "shouldSetArrayPropertyFalse",
                    });
                }
                if (shouldSetArrayResults.isArrayShouldBeSetTrue) {
                    context.report({
                        node: node,
                        messageId: "shouldSetArrayPropertyTrue",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpUHJvcGVydHlSZXR1cm5pbmdBcnJheVNob3VsZFNldEFycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3J1bGVzL2FwaVByb3BlcnR5UmV0dXJuaW5nQXJyYXlTaG91bGRTZXRBcnJheS9hcGlQcm9wZXJ0eVJldHVybmluZ0FycmF5U2hvdWxkU2V0QXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQWtFO0FBQ2xFLHVEQUFrRDtBQUNsRCxxRUFBZ0U7QUFDaEUsZ0ZBQXdEO0FBRWpELE1BQU0sc0JBQXNCLEdBQUcsQ0FDbEMsSUFBaUMsRUFDZCxFQUFFOztJQUNyQixNQUFNLFVBQVUsR0FBRyxxQ0FBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7UUFDMUQscUJBQXFCO1FBQ3JCLGFBQWE7S0FDaEIsQ0FBQyxDQUFDO0lBRUgsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPLElBQUksNkJBQW1CLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsaUhBQWlIO0lBQ2pILE1BQU0sd0JBQXdCLEdBQzFCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUNqQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQThCLENBQUM7SUFFNUMsTUFBTSxzQkFBc0IsR0FDeEIscUNBQWlCLENBQUMsOEJBQThCLENBQzVDLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsSUFBSSxDQUNQLENBQUM7SUFDTixtQ0FBbUM7SUFDbkMsTUFBTSxXQUFXLEdBQ2IsQ0FBQSxNQUNJLENBQUMsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxjQUEyQyxDQUFBO1NBQzVELFFBQ1IsMENBQUUsSUFBSSxNQUFLLE9BQU8sQ0FBQztJQUN4QixNQUFNLHFCQUFxQixHQUN2QixDQUFBLE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsY0FBYyxDQUFDLElBQUksTUFBSyxzQkFBYyxDQUFDLFdBQVcsQ0FBQztJQUM1RSxNQUFNLGlCQUFpQixHQUFHLFdBQVcsSUFBSSxxQkFBcUIsQ0FBQztJQUUvRCxPQUFPLElBQUksNkJBQW1CLENBQzFCLGlCQUFpQixJQUFJLENBQUMsc0JBQXNCLEVBQzVDLENBQUMsaUJBQWlCLElBQUksc0JBQXNCLENBQy9DLENBQUM7QUFDTixDQUFDLENBQUM7QUFyQ1csUUFBQSxzQkFBc0IsMEJBcUNqQztBQUVGLE1BQU0sSUFBSSxHQUFHLElBQUEsdUJBQVUsRUFBQztJQUNwQixJQUFJLEVBQUUsK0NBQStDO0lBQ3JELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsV0FBVyxFQUFFLEtBQUs7WUFDbEIsb0JBQW9CLEVBQUUsS0FBSztTQUM5QjtRQUNELFFBQVEsRUFBRTtZQUNOLDBCQUEwQixFQUFFLGdFQUFnRTtZQUM1RiwyQkFBMkIsRUFBRSx3RUFBd0U7U0FDeEc7UUFDRCxNQUFNLEVBQUUsRUFBRTtRQUNWLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFFbEIsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsZ0VBQWdFO1lBQ2hFLGtCQUFrQixFQUFFLENBQUMsSUFBbUIsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLHFCQUFxQixHQUFHLElBQUEsOEJBQXNCLEVBQ2hELElBQW1DLENBQ3RDLENBQUM7Z0JBRUYsSUFBSSxxQkFBcUIsQ0FBQyx1QkFBdUIsRUFBRTtvQkFDL0MsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDWCxJQUFJLEVBQUUsSUFBSTt3QkFDVixTQUFTLEVBQUUsNkJBQTZCO3FCQUMzQyxDQUFDLENBQUM7aUJBQ047Z0JBQ0QsSUFBSSxxQkFBcUIsQ0FBQyxzQkFBc0IsRUFBRTtvQkFDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDWCxJQUFJLEVBQUUsSUFBSTt3QkFDVixTQUFTLEVBQUUsNEJBQTRCO3FCQUMxQyxDQUFDLENBQUM7aUJBQ047WUFDTCxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFDLENBQUM7QUFFSCxrQkFBZSxJQUFJLENBQUMifQ==