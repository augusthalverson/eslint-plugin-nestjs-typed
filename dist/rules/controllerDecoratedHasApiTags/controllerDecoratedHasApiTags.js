"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldUseApiTagDecorator = void 0;
const createRule_1 = require("../../utils/createRule");
const typedTokenHelpers_1 = require("../../utils/typedTokenHelpers");
const shouldUseApiTagDecorator = (node) => {
    const hasControllerDecorator = typedTokenHelpers_1.typedTokenHelpers.nodeHasDecoratorsNamed(node, ["Controller"]);
    const hasApiTagDecorator = typedTokenHelpers_1.typedTokenHelpers.nodeHasDecoratorsNamed(node, [
        "ApiTags",
    ]);
    return hasControllerDecorator && !hasApiTagDecorator;
};
exports.shouldUseApiTagDecorator = shouldUseApiTagDecorator;
const rule = (0, createRule_1.createRule)({
    name: "controllers-should-supply-api-tags",
    meta: {
        docs: {
            description: "Controllers should supply an ApiTag to make swagger UI easier to navigate",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            shouldUseApiTagDecorator: `Controllers should use @ApiTags decorator. This makes it much easier to navigate swagger UI.`,
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            ClassDeclaration(node) {
                if ((0, exports.shouldUseApiTagDecorator)(node)) {
                    context.report({
                        node: node,
                        messageId: "shouldUseApiTagDecorator",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlckRlY29yYXRlZEhhc0FwaVRhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcnVsZXMvY29udHJvbGxlckRlY29yYXRlZEhhc0FwaVRhZ3MvY29udHJvbGxlckRlY29yYXRlZEhhc0FwaVRhZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsdURBQWtEO0FBQ2xELHFFQUFnRTtBQUV6RCxNQUFNLHdCQUF3QixHQUFHLENBQ3BDLElBQStCLEVBQ3hCLEVBQUU7SUFDVCxNQUFNLHNCQUFzQixHQUFHLHFDQUFpQixDQUFDLHNCQUFzQixDQUNuRSxJQUFJLEVBQ0osQ0FBQyxZQUFZLENBQUMsQ0FDakIsQ0FBQztJQUVGLE1BQU0sa0JBQWtCLEdBQUcscUNBQWlCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFO1FBQ3RFLFNBQVM7S0FDWixDQUFDLENBQUM7SUFFSCxPQUFPLHNCQUFzQixJQUFJLENBQUMsa0JBQWtCLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBYlcsUUFBQSx3QkFBd0IsNEJBYW5DO0FBRUYsTUFBTSxJQUFJLEdBQUcsSUFBQSx1QkFBVSxFQUFDO0lBQ3BCLElBQUksRUFBRSxvQ0FBb0M7SUFDMUMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsV0FBVyxFQUNQLDJFQUEyRTtZQUMvRSxXQUFXLEVBQUUsS0FBSztZQUNsQixvQkFBb0IsRUFBRSxLQUFLO1NBQzlCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sd0JBQXdCLEVBQUUsOEZBQThGO1NBQzNIO1FBQ0QsTUFBTSxFQUFFLEVBQUU7UUFDVixjQUFjLEVBQUUsS0FBSztRQUNyQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNELGNBQWMsRUFBRSxFQUFFO0lBRWxCLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILGdFQUFnRTtZQUNoRSxnQkFBZ0IsQ0FBQyxJQUErQjtnQkFDNUMsSUFBSSxJQUFBLGdDQUF3QixFQUFDLElBQUksQ0FBQyxFQUFFO29CQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNYLElBQUksRUFBRSxJQUFJO3dCQUNWLFNBQVMsRUFBRSwwQkFBMEI7cUJBQ3hDLENBQUMsQ0FBQztpQkFDTjtZQUNMLENBQUM7U0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVILGtCQUFlLElBQUksQ0FBQyJ9