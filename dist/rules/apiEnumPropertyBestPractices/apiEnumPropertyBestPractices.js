"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.needsEnumNameMatchingEnumType = exports.hasEnumSpecifiedCorrectly = void 0;
const createRule_1 = require("../../utils/createRule");
const typedTokenHelpers_1 = require("../../utils/typedTokenHelpers");
const enumTestResultModel_1 = require("./enumTestResultModel");
const noChangesRequiredResult = new enumTestResultModel_1.EnumTestResultModel({
    needsEnumAdded: false,
    needsEnumNameAdded: false,
    needsEnumNameToMatchEnumType: false,
    needsTypeRemoved: false,
});
const hasEnumSpecifiedCorrectly = (node, isEnumType) => {
    // is this an enum
    if (!isEnumType) {
        return noChangesRequiredResult;
    }
    // is this decorated with api documentation
    const decorators = typedTokenHelpers_1.typedTokenHelpers.getDecoratorsNamed(node, ["ApiPropertyOptional", "ApiProperty"]);
    if (decorators.length === 0) {
        return noChangesRequiredResult;
    }
    // check if there is an enum property in the provided options (enums should specify the enum property)
    const firstArgument = decorators[0].expression
        .arguments[0];
    if (!firstArgument) {
        return new enumTestResultModel_1.EnumTestResultModel({
            needsEnumAdded: true,
            needsEnumNameAdded: true,
            needsEnumNameToMatchEnumType: false,
            needsTypeRemoved: false,
        });
    }
    const enumProperty = firstArgument.properties.find((p) => p.key.name ===
        "enum");
    // check if there is a type: property in the provided options (enums shouldn't specify type)
    const hasTypeProperty = firstArgument.properties.find((p) => p.key.name ===
        "type") !== undefined;
    // check if there is an enumName: property in the provided options (enums should specify a name)
    const enumNameProperty = firstArgument.properties.find((p) => p.key.name ===
        "enumName");
    return new enumTestResultModel_1.EnumTestResultModel({
        needsEnumAdded: enumProperty === undefined,
        needsEnumNameAdded: enumNameProperty === undefined,
        needsEnumNameToMatchEnumType: (0, exports.needsEnumNameMatchingEnumType)(enumNameProperty, enumProperty),
        needsTypeRemoved: hasTypeProperty,
    });
};
exports.hasEnumSpecifiedCorrectly = hasEnumSpecifiedCorrectly;
const needsEnumNameMatchingEnumType = (enumNameProperty, enumProperty) => {
    // if enum props aren't specified we don't care about this scenario
    if (enumNameProperty === undefined || enumProperty === undefined) {
        return false;
    }
    const isEnumNameMatchingEnumType = enumNameProperty.value.value ===
        enumProperty.value.name;
    return !isEnumNameMatchingEnumType;
};
exports.needsEnumNameMatchingEnumType = needsEnumNameMatchingEnumType;
const rule = (0, createRule_1.createRule)({
    name: "api-enum-property-best-practices",
    meta: {
        docs: {
            description: "Enums should use the best practices for api documentation",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            needsEnumNameAdded: `Properties with enum should also specify an enumName property to keep generated models clean`,
            needsTypeRemoved: `Properties with enum should not specify a type property`,
            enumNameShouldMatchType: `The enumName should match the enum type provided`,
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        return {
            VariableDeclaration(node) {
                context.report({
                    node: node,
                    messageId: "enumNameShouldMatchType",
                });
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpRW51bVByb3BlcnR5QmVzdFByYWN0aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlcy9hcGlFbnVtUHJvcGVydHlCZXN0UHJhY3RpY2VzL2FwaUVudW1Qcm9wZXJ0eUJlc3RQcmFjdGljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdURBQWtEO0FBQ2xELHFFQUFnRTtBQUNoRSwrREFBMEQ7QUFFMUQsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLHlDQUFtQixDQUFDO0lBQ3BELGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGtCQUFrQixFQUFFLEtBQUs7SUFDekIsNEJBQTRCLEVBQUUsS0FBSztJQUNuQyxnQkFBZ0IsRUFBRSxLQUFLO0NBQzFCLENBQUMsQ0FBQztBQUVJLE1BQU0seUJBQXlCLEdBQUcsQ0FDckMsSUFBbUIsRUFDbkIsVUFBbUIsRUFDQSxFQUFFO0lBQ3JCLGtCQUFrQjtJQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2IsT0FBTyx1QkFBdUIsQ0FBQztLQUNsQztJQUVELDJDQUEyQztJQUMzQyxNQUFNLFVBQVUsR0FBRyxxQ0FBaUIsQ0FBQyxrQkFBa0IsQ0FDbkQsSUFBbUMsRUFDbkMsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLENBQUMsQ0FDekMsQ0FBQztJQUVGLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyx1QkFBdUIsQ0FBQztLQUNsQztJQUVELHNHQUFzRztJQUN0RyxNQUFNLGFBQWEsR0FBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBc0M7U0FDdEUsU0FBUyxDQUFDLENBQUMsQ0FBOEIsQ0FBQztJQUMvQyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2hCLE9BQU8sSUFBSSx5Q0FBbUIsQ0FBQztZQUMzQixjQUFjLEVBQUUsSUFBSTtZQUNwQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLDRCQUE0QixFQUFFLEtBQUs7WUFDbkMsZ0JB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