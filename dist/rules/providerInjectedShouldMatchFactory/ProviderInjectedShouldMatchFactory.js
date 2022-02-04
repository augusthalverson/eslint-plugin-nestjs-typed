"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasMismatchedInjected = void 0;
const createRule_1 = require("../../utils/createRule");
// eslint-disable-next-line unicorn/import-style
//import util from "util";
const nestProviderAstParser_1 = require("../../utils/nestModules/nestProviderAstParser");
const hasMismatchedInjected = (node) => {
    var _a, _b, _c, _d, _e, _f;
    // should be a nest provider - note this doesn't check the Provider used is an import actually from nest. Assumes nest Provider. Will change if this is annoying:)
    const isNestProvider = ((_c = (_b = (_a = node.id.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation) === null || _b === void 0 ? void 0 : _b.typeName) === null || _c === void 0 ? void 0 : _c.name) === "Provider";
    if (!isNestProvider) {
        return false;
    }
    // count number of factory params
    const factoryParameterCount = (_e = ((_d = nestProviderAstParser_1.nestProviderAstParser.findNestProviderObjectsProperty(node, "useFactory")) === null || _d === void 0 ? void 0 : _d.value).params) === null || _e === void 0 ? void 0 : _e.length;
    // Count number of injected params
    const injectedParameter = (_f = nestProviderAstParser_1.nestProviderAstParser.findNestProviderObjectsProperty(node, "inject")) === null || _f === void 0 ? void 0 : _f.value;
    const injectedParameterCount = injectedParameter
        ? injectedParameter.elements.length
        : 0;
    // is there a mismatch?
    return injectedParameterCount !== factoryParameterCount;
};
exports.hasMismatchedInjected = hasMismatchedInjected;
const rule = (0, createRule_1.createRule)({
    name: "provided-injected-should-match-factory-parameters",
    meta: {
        docs: {
            description: "The injected items in a provider should typically match the parameters to the factory method used",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            mainMessage: `The injected items don't match the factory method parameters, did you forget to add one?`,
        },
        schema: [],
        type: "problem",
    },
    defaultOptions: [],
    create(context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            VariableDeclarator(node) {
                if ((0, exports.hasMismatchedInjected)(node)) {
                    context.report({
                        node: node,
                        messageId: "mainMessage",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJJbmplY3RlZFNob3VsZE1hdGNoRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlcy9wcm92aWRlckluamVjdGVkU2hvdWxkTWF0Y2hGYWN0b3J5L1Byb3ZpZGVySW5qZWN0ZWRTaG91bGRNYXRjaEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdURBQWtEO0FBQ2xELGdEQUFnRDtBQUNoRCwwQkFBMEI7QUFDMUIseUZBQW9GO0FBRTdFLE1BQU0scUJBQXFCLEdBQUcsQ0FDakMsSUFBaUMsRUFDMUIsRUFBRTs7SUFDVCxrS0FBa0s7SUFDbEssTUFBTSxjQUFjLEdBQ2hCLENBQUEsTUFDSSxNQUNBLE1BQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLDBDQUNoQixjQUdULDBDQUFFLFFBQ0YsMENBQUUsSUFBSSxNQUFLLFVBQVUsQ0FBQztJQUUzQixJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsaUNBQWlDO0lBQ2pDLE1BQU0scUJBQXFCLEdBQUcsTUFBQSxDQUMxQixNQUFBLDZDQUFxQixDQUFDLCtCQUErQixDQUNqRCxJQUFJLEVBQ0osWUFBWSxDQUNmLDBDQUFFLEtBQ04sQ0FBQSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDO0lBRWpCLGtDQUFrQztJQUNsQyxNQUFNLGlCQUFpQixHQUNuQixNQUFBLDZDQUFxQixDQUFDLCtCQUErQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsMENBQy9ELEtBQTRDLENBQUM7SUFFdkQsTUFBTSxzQkFBc0IsR0FBRyxpQkFBaUI7UUFDNUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUix1QkFBdUI7SUFDdkIsT0FBTyxzQkFBc0IsS0FBSyxxQkFBcUIsQ0FBQztBQUM1RCxDQUFDLENBQUM7QUFyQ1csUUFBQSxxQkFBcUIseUJBcUNoQztBQUVGLE1BQU0sSUFBSSxHQUFHLElBQUEsdUJBQVUsRUFBQztJQUNwQixJQUFJLEVBQUUsbURBQW1EO0lBQ3pELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLFdBQVcsRUFDUCxtR0FBbUc7WUFDdkcsV0FBVyxFQUFFLEtBQUs7WUFDbEIsb0JBQW9CLEVBQUUsS0FBSztTQUM5QjtRQUNELFFBQVEsRUFBRTtZQUNOLFdBQVcsRUFBRSwwRkFBMEY7U0FDMUc7UUFDRCxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxTQUFTO0tBQ2xCO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFFbEIsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsZ0VBQWdFO1lBQ2hFLGtCQUFrQixDQUFDLElBQWlDO2dCQUNoRCxJQUFJLElBQUEsNkJBQXFCLEVBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ1gsSUFBSSxFQUFFLElBQUk7d0JBQ1YsU0FBUyxFQUFFLGFBQWE7cUJBQzNCLENBQUMsQ0FBQztpQkFDTjtZQUNMLENBQUM7U0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVILGtCQUFlLElBQUksQ0FBQyJ9