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
Object.defineProperty(exports, "__esModule", { value: true });
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
const classValidator = __importStar(require("class-validator"));
const createRule_1 = require("../../utils/createRule");
const CLASS_VALIDATOR_DECORATOR_NAMES = new Set(Object.keys(classValidator));
const rule = (0, createRule_1.createRule)({
    name: "all-properties-are-whitelisted",
    meta: {
        docs: {
            description: "Enforce all properties are whitelisted",
            recommended: "error",
            requiresTypeChecking: false,
        },
        messages: {
            "missing-property-decorator": "Property has no class-validator decorator (use @Allow() if you don't need a validation)",
        },
        type: "problem",
        schema: {},
    },
    defaultOptions: [],
    create: function (context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            ClassDeclaration(node) {
                var _a;
                const withDecorator = [];
                const withoutDecorator = [];
                for (const element of node.body.body) {
                    if (element.type !== experimental_utils_1.AST_NODE_TYPES.PropertyDefinition) {
                        continue;
                    }
                    const hasDecorator = (_a = element.decorators) === null || _a === void 0 ? void 0 : _a.some((decorator) => decorator.expression.type ===
                        experimental_utils_1.AST_NODE_TYPES.CallExpression &&
                        decorator.expression.callee.type ===
                            experimental_utils_1.AST_NODE_TYPES.Identifier &&
                        CLASS_VALIDATOR_DECORATOR_NAMES.has(decorator.expression.callee.name));
                    if (hasDecorator) {
                        withDecorator.push(element);
                    }
                    else {
                        withoutDecorator.push(element);
                    }
                }
                if (withDecorator.length > 0 && withoutDecorator.length > 0) {
                    for (const element of withoutDecorator) {
                        context.report({
                            node: element,
                            messageId: "missing-property-decorator",
                        });
                    }
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsUHJvcGVydGllc0FyZVdoaXRlbGlzdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3J1bGVzL2FsbFByb3BlcnRpZXNBcmVXaGl0ZWxpc3RlZC9hbGxQcm9wZXJ0aWVzQXJlV2hpdGVsaXN0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXFFO0FBRXJFLGdFQUFrRDtBQUNsRCx1REFBa0Q7QUFFbEQsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLEdBQUcsQ0FDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUF3QixDQUFDLENBQ3hDLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxJQUFBLHVCQUFVLEVBQUM7SUFDcEIsSUFBSSxFQUFFLGdDQUFnQztJQUN0QyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUU7WUFDRixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFdBQVcsRUFBRSxPQUFPO1lBQ3BCLG9CQUFvQixFQUFFLEtBQUs7U0FDOUI7UUFDRCxRQUFRLEVBQUU7WUFDTiw0QkFBNEIsRUFDeEIseUZBQXlGO1NBQ2hHO1FBQ0QsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsRUFBRTtLQUNiO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUNyQixPQUFPO1lBQ0gsZ0VBQWdFO1lBQ2hFLGdCQUFnQixDQUFDLElBQUk7O2dCQUNqQixNQUFNLGFBQWEsR0FBeUIsRUFBRSxDQUFDO2dCQUMvQyxNQUFNLGdCQUFnQixHQUF5QixFQUFFLENBQUM7Z0JBQ2xELEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2xDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxtQ0FBYyxDQUFDLGtCQUFrQixFQUFFO3dCQUNwRCxTQUFTO3FCQUNaO29CQUNELE1BQU0sWUFBWSxHQUFHLE1BQUEsT0FBTyxDQUFDLFVBQVUsMENBQUUsSUFBSSxDQUN6QyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQ1YsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJO3dCQUNyQixtQ0FBYyxDQUFDLGNBQWM7d0JBQ2pDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUk7NEJBQzVCLG1DQUFjLENBQUMsVUFBVTt3QkFDN0IsK0JBQStCLENBQUMsR0FBRyxDQUMvQixTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ25DLENBQ1IsQ0FBQztvQkFDRixJQUFJLFlBQVksRUFBRTt3QkFDZCxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUMvQjt5QkFBTTt3QkFDSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ2xDO2lCQUNKO2dCQUNELElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDekQsS0FBSyxNQUFNLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDWCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsNEJBQTRCO3lCQUMxQyxDQUFDLENBQUM7cUJBQ047aUJBQ0o7WUFDTCxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFDLENBQUM7QUFFSCxrQkFBZSxJQUFJLENBQUMifQ==