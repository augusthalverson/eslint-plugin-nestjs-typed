"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedTokenHelpers = void 0;
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
const parser_1 = require("@typescript-eslint/parser");
const typescript_1 = __importDefault(require("typescript"));
const tsutils_1 = require("tsutils");
const tsutils = __importStar(require("tsutils"));
exports.typedTokenHelpers = {
    decoratorsThatCouldMeanTheDevIsValidatingAnArray: [
        "IsArray",
        "ArrayMinSize",
        "ArrayMinSize",
        "ArrayContains",
        "ArrayNotContains",
        "ArrayNotEmpty",
        "ArrayUnique",
    ],
    isTypeArrayTypeOrUnionOfArrayTypes(node, parserService, checker) {
        var _a, _b, _c;
        if (((_c = (_b = (_a = node) === null || _a === void 0 ? void 0 : _a.typeAnnotation) === null || _b === void 0 ? void 0 : _b.typeAnnotation) === null || _c === void 0 ? void 0 : _c.type) === experimental_utils_1.TSESTree.AST_NODE_TYPES.TSArrayType) {
            return true;
        }
        const nodeType = this.getNodeType(node, parserService, checker);
        if (checker.isArrayType(nodeType)) {
            return true;
        }
        for (const t of (0, tsutils_1.unionTypeParts)(nodeType)) {
            if (!checker.isArrayType(t)) {
                return false;
            }
        }
        return true;
    },
    getNodeType(node, parserService, checker) {
        const tsNode = parserService.esTreeNodeToTSNodeMap.get(node);
        return exports.typedTokenHelpers.getConstrainedTypeAtLocation(checker, tsNode);
    },
    expressionNodeIsArrayType(node, parserService, checker) {
        const nodeType = this.getNodeType(node, parserService, checker);
        return checker.isArrayType(nodeType);
    },
    getPropertyValueEqualsExpected(firstArgument, propertyName, expectedValue) {
        let didMatchExpectedValues = false;
        if (firstArgument !== undefined) {
            const foundPropertyOfName = firstArgument.properties.find((p) => p.key
                .name === propertyName);
            didMatchExpectedValues =
                foundPropertyOfName !== undefined &&
                    foundPropertyOfName
                        .value.value === expectedValue;
        }
        return didMatchExpectedValues;
    },
    getConstrainedTypeAtLocation(checker, node) {
        const nodeType = checker.getTypeAtLocation(node);
        const constrained = checker.getBaseConstraintOfType(nodeType);
        return constrained !== null && constrained !== void 0 ? constrained : nodeType;
    },
    nodeHasDecoratorsNamed(n, decoratorNames) {
        const decorators = this.getDecoratorsNamed(n, decoratorNames);
        return decorators.length > 0;
    },
    getDecoratorsNamed(n, decoratorNames) {
        var _a;
        const decorators = (_a = n.decorators) === null || _a === void 0 ? void 0 : _a.filter((d) => decoratorNames.includes(d.expression
            .callee.name));
        return decorators || [];
    },
    parseStringToAst(code, path, context) {
        return (0, parser_1.parse)(code, {
            filePath: path,
            range: true,
            tokens: true,
            loc: true,
            ...context.parserOptions,
        });
    },
    isEnumType(type) {
        // if for some reason this returns true...
        if (tsutils.isTypeFlagSet(type, typescript_1.default.TypeFlags.Enum))
            return true;
        if (tsutils.isTypeFlagSet(type, typescript_1.default.TypeFlags.EnumLike))
            return true;
        // it's not an enum type if it's an enum literal type
        if (tsutils.isTypeFlagSet(type, typescript_1.default.TypeFlags.EnumLiteral) &&
            !type.isUnion())
            return false;
        // get the symbol and check if its value declaration is an enum declaration
        const symbol = type.getSymbol();
        if (symbol == null)
            return false;
        const { valueDeclaration } = symbol;
        return (valueDeclaration != null &&
            valueDeclaration.kind === typescript_1.default.SyntaxKind.EnumDeclaration);
    },
    isOptionalPropertyValue(node) {
        var _a, _b, _c;
        const isUndefinedType = ((_c = (_b = (_a = node.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation) === null || _b === void 0 ? void 0 : _b.types) === null || _c === void 0 ? void 0 : _c.find((t) => t.type === experimental_utils_1.AST_NODE_TYPES.TSUndefinedKeyword)) !== undefined;
        const isOptionalPropertyValue = node.optional || isUndefinedType || false;
        return isOptionalPropertyValue;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWRUb2tlbkhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvdHlwZWRUb2tlbkhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUkrQztBQUUvQyxzREFBZ0Q7QUFDaEQsNERBQTRCO0FBQzVCLHFDQUF1QztBQUN2QyxpREFBbUM7QUFDdEIsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixnREFBZ0QsRUFBRTtRQUM5QyxTQUFTO1FBQ1QsY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixhQUFhO0tBQ2hCO0lBQ0Qsa0NBQWtDLENBQzlCLElBQW1CLEVBQ25CLGFBQTZCLEVBQzdCLE9BQXVCOztRQUV2QixJQUNJLENBQUEsTUFBQSxNQUFBLE1BQUMsSUFBb0MsMENBQUUsY0FBYywwQ0FDL0MsY0FBYywwQ0FBRSxJQUFJLE1BQUssNkJBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUNwRTtZQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUEsd0JBQWMsRUFBQyxRQUFRLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekIsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxXQUFXLENBQ1AsSUFBbUIsRUFDbkIsYUFBNkIsRUFDN0IsT0FBdUI7UUFFdkIsTUFBTSxN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