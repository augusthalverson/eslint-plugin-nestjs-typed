"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldTrigger = void 0;
/* eslint-disable unicorn/prevent-abbreviations */
const types_1 = require("@typescript-eslint/types");
const createRule_1 = require("../../utils/createRule");
const typedTokenHelpers_1 = require("../../utils/typedTokenHelpers");
const eslint_utils_1 = require("@typescript-eslint/experimental-utils/dist/eslint-utils");
const classValidatorDecorators_1 = require("../../utils/classValidatorDecorators");
const primitiveTypes = new Set([
    types_1.AST_NODE_TYPES.TSStringKeyword,
    types_1.AST_NODE_TYPES.TSBooleanKeyword,
    types_1.AST_NODE_TYPES.TSNumberKeyword,
]);
const shouldTrigger = () => {
    return true;
};
exports.shouldTrigger = shouldTrigger;
const rule = (0, createRule_1.createRule)({
    name: "validated-non-primitive-property-needs-type-decorator",
    meta: {
        docs: {
            description: "A non-primitve property with validation should probably use a @Type decorator",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            shouldUseTypeDecorator: "A non-primitve property with validation should probably use a @Type decorator",
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        const parserServices = (0, eslint_utils_1.getParserServices)(context);
        const typeChecker = parserServices.program.getTypeChecker();
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            PropertyDefinition(node) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                // if it's an array get the element type
                let mainType;
                const isAnArray = typedTokenHelpers_1.typedTokenHelpers.isTypeArrayTypeOrUnionOfArrayTypes(node, parserServices, typeChecker);
                // this is getting very messy
                if (isAnArray) {
                    const mainTypeInShortArray = (_c = (_b = (_a = node.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation) === null || _b === void 0 ? void 0 : _b.elementType) === null || _c === void 0 ? void 0 : _c.type;
                    if (!mainTypeInShortArray) {
                        // try to get the type of Array<type> syntax
                        const foundParams = (_f = (_e = (_d = node.typeAnnotation) === null || _d === void 0 ? void 0 : _d.typeAnnotation) === null || _e === void 0 ? void 0 : _e.typeParameters) === null || _f === void 0 ? void 0 : _f.params;
                        if (foundParams && foundParams.length === 1) {
                            mainType = foundParams[0].type;
                        }
                    }
                    else {
                        mainType = mainTypeInShortArray;
                    }
                }
                else {
                    mainType = (_h = (_g = node.typeAnnotation) === null || _g === void 0 ? void 0 : _g.typeAnnotation) === null || _h === void 0 ? void 0 : _h.type;
                }
                // if this couldn't be found we don't understand the AST
                if (!mainType) {
                    return;
                }
                // property is a primitive type - no need to validate
                const isNodeTypePrimitive = primitiveTypes.has(mainType);
                if (isNodeTypePrimitive) {
                    return;
                }
                // property is a union with primitive type - no need to validate
                const isNodeAUnionWithAPrimitive = mainType === types_1.AST_NODE_TYPES.TSUnionType &&
                    ((_k = ((_j = node.typeAnnotation) === null || _j === void 0 ? void 0 : _j.typeAnnotation).types) === null || _k === void 0 ? void 0 : _k.some((x) => primitiveTypes.has(x.type)));
                if (isNodeAUnionWithAPrimitive) {
                    return;
                }
                // if this is an enum we don't need a type decorator
                const mappedNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                const objectType = typeChecker.getTypeAtLocation(mappedNode);
                if (typedTokenHelpers_1.typedTokenHelpers.isEnumType(objectType)) {
                    return;
                }
                // We have to make an assumption here. We assume that
                // if there is a validation decorator on the property, this is an input DTO.
                // And for input DTOs they should specify types.
                // property has a validation decorator but not IsEnum
                // (we don't care about un-validated properties and enums don't need Type())
                const foundClassValidatorDecorators = typedTokenHelpers_1.typedTokenHelpers.getDecoratorsNamed(node, classValidatorDecorators_1.classValidatorDecorators.filter((x) => x !== "IsEnum"));
                if (foundClassValidatorDecorators.length === 0) {
                    return;
                }
                // ok so does the property have Type decorator? it probably should
                const foundTypeDecorator = typedTokenHelpers_1.typedTokenHelpers.getDecoratorsNamed(node, ["Type"]);
                if (foundTypeDecorator.length === 0) {
                    context.report({
                        node: node,
                        messageId: "shouldUseTypeDecorator",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOb25QcmltaXRpdmVOZWVkc0RlY29yYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcnVsZXMvdmFsaWRhdGUtbm9uLXByaW1pdHZlcy1uZWVkcy10eXBlLWRlY29yYXRvci92YWxpZGF0ZU5vblByaW1pdGl2ZU5lZWRzRGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBa0Q7QUFDbEQsb0RBQWtFO0FBQ2xFLHVEQUFrRDtBQUNsRCxxRUFBZ0U7QUFDaEUsMEZBQTBGO0FBQzFGLG1GQUE4RTtBQUU5RSxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUMzQixzQkFBYyxDQUFDLGVBQWU7SUFDOUIsc0JBQWMsQ0FBQyxnQkFBZ0I7SUFDL0Isc0JBQWMsQ0FBQyxlQUFlO0NBQ2pDLENBQUMsQ0FBQztBQUNJLE1BQU0sYUFBYSxHQUFHLEdBQVksRUFBRTtJQUN2QyxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFGVyxRQUFBLGFBQWEsaUJBRXhCO0FBRUYsTUFBTSxJQUFJLEdBQUcsSUFBQSx1QkFBVSxFQUFDO0lBQ3BCLElBQUksRUFBRSx1REFBdUQ7SUFDN0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsV0FBVyxFQUNQLCtFQUErRTtZQUNuRixXQUFXLEVBQUUsS0FBSztZQUNsQixvQkFBb0IsRUFBRSxLQUFLO1NBQzlCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sc0JBQXNCLEVBQ2xCLCtFQUErRTtTQUN0RjtRQUNELE1BQU0sRUFBRSxFQUFFO1FBQ1YsY0FBYyxFQUFFLEtBQUs7UUFDckIsSUFBSSxFQUFFLFlBQVk7S0FDckI7SUFDRCxjQUFjLEVBQUUsRUFBRTtJQUVsQixNQUFNLENBQUMsT0FBTztRQUNWLE1BQU0sY0FBYyxHQUFHLElBQUEsZ0NBQWlCLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsTUFBTSxXQUFXLEdBQUcsY0FBYyxD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