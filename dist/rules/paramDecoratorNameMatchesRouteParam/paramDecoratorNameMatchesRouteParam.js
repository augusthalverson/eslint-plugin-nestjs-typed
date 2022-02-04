"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldTrigger = exports.isParameterNameIncludedInAPathPart = exports.hasPathPartsAnyRegexParams = exports.parsePathParts = void 0;
const createRule_1 = require("../../utils/createRule");
const nestRequestMethodDecoratorNames = new Set([
    "Get",
    "Post",
    "Put",
    "Delete",
    "Patch",
    "Options",
    "Head",
    "All",
]);
const parsePathParts = (decorator) => {
    var _a;
    const decoratorArgument = (_a = decorator === null || decorator === void 0 ? void 0 : decorator.expression) === null || _a === void 0 ? void 0 : _a.arguments[0];
    if ((decoratorArgument === null || decoratorArgument === void 0 ? void 0 : decoratorArgument.type) === "Literal") {
        return [decoratorArgument.raw];
    }
    if ((decoratorArgument === null || decoratorArgument === void 0 ? void 0 : decoratorArgument.type) === "ArrayExpression") {
        return decoratorArgument.elements.map((x) => x.raw);
    }
    if ((decoratorArgument === null || decoratorArgument === void 0 ? void 0 : decoratorArgument.type) === "ObjectExpression") {
        return decoratorArgument.properties
            .filter((x) => {
            var _a, _b;
            return ((_b = (_a = x) === null || _a === void 0 ? void 0 : _a.key) === null || _b === void 0 ? void 0 : _b.name) === "path";
        })
            .map((x) => x.value.raw);
    }
    return [];
};
exports.parsePathParts = parsePathParts;
/**
 * nestjs allows for paths with _+?()*
 * this rule doesn't support parsing those so we'll just pass
 */
const hasPathPartsAnyRegexParams = (pathPartsToCheck) => {
    // prettier-ignore
    // eslint-disable-next-line no-useless-escape
    const specialCharacterRegex = new RegExp("([\?\+\*\_\(\)])");
    return pathPartsToCheck.some((pathPart) => {
        return specialCharacterRegex.test(pathPart);
    });
};
exports.hasPathPartsAnyRegexParams = hasPathPartsAnyRegexParams;
/**
 * Checks if there is a matching path part for the paramName
 * @param paramName
 * @param pathPartsToCheck
 * @returns
 */
const isParameterNameIncludedInAPathPart = (paramName, pathPartsToCheck) => {
    return pathPartsToCheck.some((pathPart) => {
        return (
        // note to reader: this might be better as a regex. feel free to open a pr!
        pathPart === `":${paramName}"` ||
            pathPart === `':${paramName}'` ||
            pathPart.includes(`/:${paramName}/`) ||
            pathPart.includes(`/:${paramName}"`) ||
            pathPart.includes(`":${paramName}/`) ||
            pathPart.includes(`/:${paramName}'`) ||
            pathPart.includes(`':${paramName}/`));
    });
};
exports.isParameterNameIncludedInAPathPart = isParameterNameIncludedInAPathPart;
const shouldTrigger = (decorator) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (!decorator) {
        return {
            hasColonInName: false,
            paramNameNotMatchedInPath: false,
        };
    }
    // grab the param name
    const paramName = (_b = (_a = decorator.expression) === null || _a === void 0 ? void 0 : _a.arguments[0]) === null || _b === void 0 ? void 0 : _b.value;
    // if there's no param name get out of here
    if (!paramName || paramName === "") {
        return {
            hasColonInName: false,
            paramNameNotMatchedInPath: false,
        };
    }
    // param names don't need the colon
    if (paramName.startsWith(":")) {
        return {
            hasColonInName: true,
            paramNameNotMatchedInPath: false,
        };
    }
    let pathPartsToCheck = [];
    // grab any controller path parts
    const controllerDecorator = (_h = (_g = (_f = (_e = (_d = (_c = decorator.parent) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.parent) === null || _e === void 0 ? void 0 : _e.parent) === null || _f === void 0 ? void 0 : _f.parent) === null || _g === void 0 ? void 0 : _g.decorators) === null || _h === void 0 ? void 0 : _h.find((d) => {
        var _a;
        return (((_a = d.expression
            .callee) === null || _a === void 0 ? void 0 : _a.name) === "Controller");
    });
    pathPartsToCheck = pathPartsToCheck.concat((0, exports.parsePathParts)(controllerDecorator));
    // grab any api method path parts from method decorator
    const methodDefinition = (_k = (_j = decorator.parent) === null || _j === void 0 ? void 0 : _j.parent) === null || _k === void 0 ? void 0 : _k.parent;
    const methodDecorator = (_l = methodDefinition === null || methodDefinition === void 0 ? void 0 : methodDefinition.decorators) === null || _l === void 0 ? void 0 : _l.find((d) => {
        var _a;
        return nestRequestMethodDecoratorNames.has((_a = d.expression
            .callee) === null || _a === void 0 ? void 0 : _a.name);
    });
    pathPartsToCheck = pathPartsToCheck.concat((0, exports.parsePathParts)(methodDecorator));
    const shouldIgnoreThisSetOfRoutes = (0, exports.hasPathPartsAnyRegexParams)(pathPartsToCheck);
    if (shouldIgnoreThisSetOfRoutes) {
        return {
            hasColonInName: false,
            paramNameNotMatchedInPath: false,
        };
    }
    // check that the param name is in one path part
    return {
        hasColonInName: false,
        paramNameNotMatchedInPath: !(0, exports.isParameterNameIncludedInAPathPart)(paramName, pathPartsToCheck),
    };
};
exports.shouldTrigger = shouldTrigger;
const rule = (0, createRule_1.createRule)({
    name: "param-decorator-name-matches-route-param",
    meta: {
        docs: {
            description: 'Param decorators with a name parameter e.g. Param("myvar") should match a specified route parameter - e.g. Get(":myvar")',
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            paramIdentifierDoesntNeedColon: "You don't need to specify the colon (:) in a Param decorator",
            paramIdentifierShouldMatch: 'Param decorators with identifiers e.g. Param("myvar") should match a specified route parameter - e.g. Get(":myvar")',
        },
        schema: [],
        hasSuggestions: false,
        type: "suggestion",
    },
    defaultOptions: [],
    create(context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Decorator(node) {
                var _a, _b;
                if (((_b = (_a = node.expression) === null || _a === void 0 ? void 0 : _a.callee) === null || _b === void 0 ? void 0 : _b.name) !== "Param") {
                    return;
                }
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const result = (0, exports.shouldTrigger)(node);
                if (result.paramNameNotMatchedInPath) {
                    context.report({
                        node: node,
                        messageId: "paramIdentifierShouldMatch",
                    });
                }
                if (result.hasColonInName) {
                    context.report({
                        node: node,
                        messageId: "paramIdentifierDoesntNeedColon",
                    });
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1EZWNvcmF0b3JOYW1lTWF0Y2hlc1JvdXRlUGFyYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcnVsZXMvcGFyYW1EZWNvcmF0b3JOYW1lTWF0Y2hlc1JvdXRlUGFyYW0vcGFyYW1EZWNvcmF0b3JOYW1lTWF0Y2hlc1JvdXRlUGFyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsdURBQWtEO0FBT2xELE1BQU0sK0JBQStCLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDNUMsS0FBSztJQUNMLE1BQU07SUFDTixLQUFLO0lBQ0wsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1QsTUFBTTtJQUNOLEtBQUs7Q0FDUixDQUFDLENBQUM7QUFFSSxNQUFNLGNBQWMsR0FBRyxDQUFDLFNBQTZCLEVBQVksRUFBRTs7SUFDdEUsTUFBTSxpQkFBaUIsR0FBRyxNQUFDLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxVQUFzQywwQ0FDdEUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQSxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxJQUFJLE1BQUssU0FBUyxFQUFFO1FBQ3ZDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQztJQUNELElBQUksQ0FBQSxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxJQUFJLE1BQUssaUJBQWlCLEVBQUU7UUFDL0MsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNqQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUUsQ0FBc0IsQ0FBQyxHQUFHLENBQ3JDLENBQUM7S0FDTDtJQUNELElBQUksQ0FBQSxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxJQUFJLE1BQUssa0JBQWtCLEVBQUU7UUFDaEQsT0FBTyxpQkFBaUIsQ0FBQyxVQUFV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