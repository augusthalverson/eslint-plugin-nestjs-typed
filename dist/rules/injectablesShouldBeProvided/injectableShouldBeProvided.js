"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createRule_1 = require("../../utils/createRule");
const fileEnumerationWrapper_1 = __importDefault(require("../../utils/files/fileEnumerationWrapper"));
const nestProvidedInjectableMapper_1 = __importDefault(require("../../utils/nestModules/nestProvidedInjectableMapper"));
const typedTokenHelpers_1 = require("../../utils/typedTokenHelpers");
let listFilesToProcess;
let nestModuleMap;
const findModuleMapping = (classNAme, propertyName, nestModuleMap) => {
    for (const entry of nestModuleMap.values()) {
        if (entry[propertyName].has(classNAme)) {
            return entry;
        }
    }
    return undefined;
};
// super fragile types but whatevs
const checkNode = (node, decoratorName, propertyName, messageId, context) => {
    var _a;
    if (nestProvidedInjectableMapper_1.default.isNestInjectableThatIsNeverProvided(node)) {
        return;
    }
    if (typedTokenHelpers_1.typedTokenHelpers.nodeHasDecoratorsNamed(node, [decoratorName])) {
        const name = (_a = node.id) === null || _a === void 0 ? void 0 : _a.name;
        if (!name) {
            return;
        }
        const foundMap = findModuleMapping(name, propertyName, nestModuleMap);
        if (foundMap) {
            return;
        }
        // couldn't find map so error
        context.report({
            node: node,
            messageId: messageId,
        });
    }
};
function initialiseModuleMappings(sourcePath, filterFromPaths, context) {
    const mappedSource = nestProvidedInjectableMapper_1.default.mapDefaultSource(sourcePath, process.cwd());
    listFilesToProcess = fileEnumerationWrapper_1.default.enumerateFiles(mappedSource, [".ts"], filterFromPaths);
    nestModuleMap = nestProvidedInjectableMapper_1.default.parseFileList(listFilesToProcess, context);
}
const rule = (0, createRule_1.createRule)({
    name: "injectable-should-be-provided",
    meta: {
        docs: {
            description: "Public api methods should have documentation",
            recommended: false,
            requiresTypeChecking: false,
        },
        messages: {
            injectableInModule: `Classes marked as Injectable must be added to a module's providers. If you added it already but this error still shows in your editor, please change one character in the injectable file to poke your eslint plugin.`,
            controllersInModule: `Classes marked as Controller must be added to a module's controllers. If you added it already but this error still shows in your editor, please change one character in the controller file to poke your eslint plugin.`,
        },
        schema: [
            {
                properties: {
                    src: {
                        description: "files/paths to be analyzed (only for provided injectable or controller)",
                        type: "array",
                        minItems: 1,
                        items: {
                            type: "string",
                            minLength: 1,
                        },
                    },
                    filterFromPaths: {
                        description: "strings to exclude from checks (only for provided injectable or controller)",
                        type: "array",
                        minItems: 1,
                        items: {
                            type: "string",
                            minLength: 1,
                        },
                    },
                },
            },
        ],
        type: "problem",
    },
    defaultOptions: [],
    create(context) {
        const { src, filterFromPaths,
        // ignoreExports = [],
        // missingExports,
        // unusedExports,
         } = context.options[0] || {};
        if (nestModuleMap === undefined || nestModuleMap.size === 0) {
            initialiseModuleMappings(src, filterFromPaths, context);
        }
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            ClassDeclaration(node) {
                checkNode(node, "Injectable", "providers", "injectableInModule", context);
                checkNode(node, "Controller", "controllers", "controllersInModule", context);
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Program:exit"() {
                // map the source to a mapping thing
                // if not undefined set it to the mapping set
                const mappedProvidedInjectables = nestProvidedInjectableMapper_1.default.mapAllProvidedInjectables(context.getSourceCode().ast, context.getFilename());
                if (mappedProvidedInjectables !== null) {
                    nestModuleMap.set(mappedProvidedInjectables[0], mappedProvidedInjectables[1]);
                }
            },
        };
    },
});
exports.default = rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0YWJsZVNob3VsZEJlUHJvdmlkZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcnVsZXMvaW5qZWN0YWJsZXNTaG91bGRCZVByb3ZpZGVkL2luamVjdGFibGVTaG91bGRCZVByb3ZpZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsdURBQWtEO0FBQ2xELHNHQUE2RTtBQUM3RSx3SEFBZ0c7QUFHaEcscUVBQWdFO0FBRWhFLElBQUksa0JBQWtCLENBQUM7QUFDdkIsSUFBSSxhQUFzRCxDQUFDO0FBRTNELE1BQU0saUJBQWlCLEdBQUcsQ0FDdEIsU0FBaUIsRUFDakIsWUFBeUMsRUFDekMsYUFBc0QsRUFDaEIsRUFBRTtJQUN4QyxLQUFLLE1BQU0sS0FBSyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUN4QyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxLQUFLLENBQUM7U0FDaEI7S0FDSjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLGtDQUFrQztBQUNsQyxNQUFNLFNBQVMsR0FBRyxDQUNkLElBQStCLEVBQy9CLGFBQTBDLEVBQzFDLFlBQXlDLEVBQ3pDLFNBQXVELEVBQ3ZELE9BRUMsRUFDSCxFQUFFOztJQUNBLElBQ0ksc0NBQTRCLENBQUMsbUNBQW1DLENBQUMsSUFBSSxDQUFDLEVBQ3hFO1FBQ0UsT0FBTztLQUNWO0lBQ0QsSUFBSSxxQ0FBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO1FBQ2pFLE1BQU0sSUFBSSxHQUFHLE1BQUEsSUFBSSxDQUFDLEVBQUUsMENBQUUsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPO1NBQ1Y7UUFDRCxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxJ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