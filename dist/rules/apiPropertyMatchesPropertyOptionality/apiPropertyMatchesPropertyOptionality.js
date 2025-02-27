"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldUseOptionalDecorator = exports.shouldUseRequiredDecorator = void 0;
const createRule_1 = require("../../utils/createRule");
const typedTokenHelpers_1 = require("../../utils/typedTokenHelpers");
const shouldUseRequiredDecorator = (node) => {
    const hasOptionalDecorator = typedTokenHelpers_1.typedTokenHelpers.nodeHasDecoratorsNamed(node, ["ApiPropertyOptional"]);
    const isOptionalPropertyValue = typedTokenHelpers_1.typedTokenHelpers.isOptionalPropertyValue(node);
    return hasOptionalDecorator && !isOptionalPropertyValue;
};
exports.shouldUseRequiredDecorator = shouldUseRequiredDecorator;
const shouldUseOptionalDecorator = (node) => {
    const hasRequiredDecorator = typedTokenHelpers_1.typedTokenHelpers.nodeHasDecoratorsNamed(node, ["ApiProperty"]);
    const isOptionalPropertyValue = typedTokenHelpers_1.typedTokenHelpers.isOptionalPropertyValue(node);
    return hasRequiredDecorator && isOptionalPropertyValue;
};
exports.shouldUseOptionalDecorator = shouldUseOptionalDecorator;
const rule = (0, createRule_1.createRule)({
    name: "api-property-matches-property-optionality",
    meta: {
        docs: {
            description: "Properties should have correct @ApiProperty decorators",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            shouldUseOptionalDecorator: `Property marked as optional should use @ApiPropertyOptional decorator`,
            shouldUseRequiredDecorator: `Property marked as required should use @ApiProperty decorator`,
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            PropertyDefinition(node) {
                if ((0, exports.shouldUseOptionalDecorator)(node)) {
                    context.report({
                        node: node,
                        messageId: "shouldUseOptionalDecorator",
                    });
                }
                if ((0, exports.shouldUseRequiredDecorator)(node)) {
                    context.report({
                        node: node,
                        messageId: "shouldUseRequiredDecorator",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpUHJvcGVydHlNYXRjaGVzUHJvcGVydHlPcHRpb25hbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlcy9hcGlQcm9wZXJ0eU1hdGNoZXNQcm9wZXJ0eU9wdGlvbmFsaXR5L2FwaVByb3BlcnR5TWF0Y2hlc1Byb3BlcnR5T3B0aW9uYWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsdURBQWtEO0FBQ2xELHFFQUFnRTtBQUV6RCxNQUFNLDBCQUEwQixHQUFHLENBQ3RDLElBQWlDLEVBQzFCLEVBQUU7SUFDVCxNQUFNLG9CQUFvQixHQUFHLHFDQUFpQixDQUFDLHNCQUFzQixDQUNqRSxJQUFJLEVBQ0osQ0FBQyxxQkFBcUIsQ0FBQyxDQUMxQixDQUFDO0lBRUYsTUFBTSx1QkFBdUIsR0FDekIscUNBQWlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEQsT0FBTyxvQkFBb0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELENBQUMsQ0FBQztBQVpXLFFBQUEsMEJBQTBCLDhCQVlyQztBQUVLLE1BQU0sMEJBQTBCLEdBQUcsQ0FDdEMsSUFBaUMsRUFDMUIsRUFBRTtJQUNULE1BQU0sb0JBQW9CLEdBQUcscUNBQWlCLENBQUMsc0JBQXNCLENBQ2pFLElBQUksRUFDSixDQUFDLGFBQWEsQ0FBQyxDQUNsQixDQUFDO0lBRUYsTUFBTSx1QkFBdUIsR0FDekIscUNBQWlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEQsT0FBTyxvQkFBb0IsSUFBSSx1QkFBdUIsQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFaVyxRQUFBLDBCQUEwQiw4QkFZckM7QUFFRixNQUFNLElBQUksR0FBRyxJQUFBLHVCQUFVLEVBQUM7SUFDcEIsSUFBSSxFQUFFLDJDQUEyQztJQUNqRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUU7WUFDRixXQUFXLEVBQ1Asd0RBQXdEO1lBQzVELFdBQVcsRUFBRSxLQUFLO1lBQ2xCLG9CQUFvQixFQUFFLEtBQUs7U0FDOUI7UUFDRCxRQUFRLEVBQUU7WUFDTiwwQkFBMEIsRUFBRSx1RUFBdUU7WUFDbkcsMEJBQTBCLEVBQUUsK0RBQStEO1NBQzlGO1FBQ0QsTUFBTSxFQUFFLEVBQUU7UUFDVixjQUFjLEVBQUUsS0FBSztRQUNyQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNELGNBQWMsRUFBRSxFQUFFO0lBRWxCLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILGdFQUFnRTtZQUNoRSxrQkFBa0IsQ0FBQyxJQUFpQztnQkFDaEQsSUFBSSxJQUFBLGtDQUEwQixFQUFDLElBQUksQ0FBQyxFQUFFO29CQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLFNBQVMsRUFBRSw0QkFBNEI7cUJBQzFDLENBQUMsQ0FBQztpQkFDTjtnQkFDRCxJQUFJLElBQUEsa0NBQTBCLEVBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ1gsSUFBSSxFQUFFLElBQUk7d0JBQ1YsU0FBUyxFQUFFLDRCQUE0QjtxQkFDMUMsQ0FBQyxDQUFDO2lCQUNOO1lBQ0wsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBRUgsa0JBQWUsSUFBSSxDQUFDIn0=