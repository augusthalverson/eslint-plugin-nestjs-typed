"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldUseApiResponseDecorator = void 0;
const createRule_1 = require("../../utils/createRule");
const typedTokenHelpers_1 = require("../../utils/typedTokenHelpers");
const shouldUseApiResponseDecorator = (node) => {
    const hasApiMethodDecorator = typedTokenHelpers_1.typedTokenHelpers.nodeHasDecoratorsNamed(node, ["Get", "Post", "Put", "Delete", "Patch", "Options", "Head", "All"]);
    const hasApiResponseDecorator = typedTokenHelpers_1.typedTokenHelpers.nodeHasDecoratorsNamed(node, [
        "ApiResponse",
        "ApiOkResponse",
        "ApiCreatedResponse",
        "ApiAcceptedResponse",
        "ApiNoContentResponse",
        "ApiMovedPermanentlyResponse",
        "ApiFoundResponse",
        "ApiBadRequestResponse",
        "ApiUnauthorizedResponse",
        "ApiTooManyRequestsResponse",
        "ApiNotFoundResponse",
        "ApiInternalServerErrorResponse",
        "ApiBadGatewayResponse",
        "ApiConflictResponse",
        "ApiForbiddenResponse",
        "ApiGatewayTimeoutResponse",
        "ApiGoneResponse",
        "ApiMethodNotAllowedResponse",
        "ApiNotAcceptableResponse",
        "ApiNotImplementedResponse",
        "ApiPreconditionFailedResponse",
        "ApiPayloadTooLargeResponse",
        "ApiRequestTimeoutResponse",
        "ApiServiceUnavailableResponse",
        "ApiUnprocessableEntityResponse",
        "ApiUnsupportedMediaTypeResponse",
        "ApiDefaultResponse",
    ]);
    return hasApiMethodDecorator && !hasApiResponseDecorator;
};
exports.shouldUseApiResponseDecorator = shouldUseApiResponseDecorator;
const rule = (0, createRule_1.createRule)({
    name: "api-method-should-specify-api-response",
    meta: {
        docs: {
            description: "Api methods should at least specify the expected OK response with @ApiOkResponse. But also add any error responses that might not be expected (e.g. 429)",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            shouldSpecifyApiResponse: `A method decorated with @Get, @Post etc. should specify the expected ApiResponse e.g. @ApiOkResponse(type: MyType)`,
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            MethodDefinition(node) {
                if ((0, exports.shouldUseApiResponseDecorator)(node)) {
                    context.report({
                        node: node,
                        messageId: "shouldSpecifyApiResponse",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpTWV0aG9kc1Nob3VsZFNwZWNpZnlBcGlSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlcy9hcGlNZXRob2RzU2hvdWxkU3BlY2lmeUFwaVJlc3BvbnNlL2FwaU1ldGhvZHNTaG91bGRTcGVjaWZ5QXBpUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsdURBQWtEO0FBQ2xELHFFQUFnRTtBQUV6RCxNQUFNLDZCQUE2QixHQUFHLENBQ3pDLElBQStCLEVBQ3hCLEVBQUU7SUFDVCxNQUFNLHFCQUFxQixHQUFHLHFDQUFpQixDQUFDLHNCQUFzQixDQUNsRSxJQUFJLEVBQ0osQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQ3RFLENBQUM7SUFFRixNQUFNLHVCQUF1QixHQUFHLHFDQUFpQixDQUFDLHNCQUFzQixDQUNwRSxJQUFJLEVBQ0o7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyx1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0IsaUJBQWlCO1FBQ2pCLDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsaUNBQWlDO1FBQ2pDLG9CQUFvQjtLQUN2QixDQUNKLENBQUM7SUFFRixPQUFPLHFCQUFxQixJQUFJLENBQUMsdUJBQXVCLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBMUNXLFFBQUEsNkJBQTZCLGlDQTBDeEM7QUFFRixNQUFNLElBQUksR0FBRyxJQUFBLHVCQUFVLEVBQUM7SUFDcEIsSUFBSSxFQUFFLHdDQUF3QztJQUM5QyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUU7WUFDRixXQUFXLEVBQ1AsMEpBQTBKO1lBQzlKLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLG9CQUFvQixFQUFFLEtBQUs7U0FDOUI7UUFDRCxRQUFRLEVBQUU7WUFDTix3QkFBd0IsRUFBRSxvSEFBb0g7U0FDako7UUFDRCxNQUFNLEVBQUUsRUFBRTtRQUNWLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFFbEIsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsZ0VBQWdFO1lBQ2hFLGdCQUFnQixDQUFDLElBQStCO2dCQUM1QyxJQUFJLElBQUEscUNBQTZCLEVBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ1gsSUFBSSxFQUFFLElBQUk7d0JBQ1YsU0FBUyxFQUFFLDBCQUEwQjtxQkFDeEMsQ0FBQyxDQUFDO2lCQUNOO1lBQ0wsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBRUgsa0JBQWUsSUFBSSxDQUFDIn0=