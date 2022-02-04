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
const unambiguous = __importStar(require("eslint-module-utils/unambiguous"));
const fs_1 = __importDefault(require("fs"));
const typedTokenHelpers_1 = require("../typedTokenHelpers");
const nestModuleAstParser_1 = require("./nestModuleAstParser");
const nestProviderAstParser_1 = require("./nestProviderAstParser");
const implementsForInjectablesThatAreNotProvided = new Set([
    "CanActivate",
    "NestInterceptor",
    "PipeTransform",
    "NestMiddleware", //(isMiddleware)
]);
const NestProvidedInjectableMapper = {
    mapDefaultSource(sourceGlob, currentWorkingDirectory) {
        if (sourceGlob && typeof sourceGlob === "string") {
            return [sourceGlob];
        }
        if (sourceGlob && Array.isArray(sourceGlob)) {
            return sourceGlob;
        }
        return [currentWorkingDirectory];
    },
    parseFileList(files, context) {
        const moduleMaps = new Map();
        files
            .map((f) => NestProvidedInjectableMapper.mapAllProvidedInjectables(typedTokenHelpers_1.typedTokenHelpers.parseStringToAst(NestProvidedInjectableMapper.readFileContents(f.filename), f.filename, context), f.filename))
            // eslint-disable-next-line @typescript-eslint/unbound-method
            .filter(NestProvidedInjectableMapper.notEmpty)
            .forEach((m) => moduleMaps.set(m[0], m[1]));
        return moduleMaps;
    },
    notEmpty(value) {
        if (value === null || value === undefined)
            return false;
        return true;
    },
    readFileContents(path) {
        return fs_1.default.readFileSync(path, { encoding: "utf8" });
    },
    isNestInjectableThatIsNeverProvided(node) {
        for (const implementsClass of node.implements || []) {
            if (implementsForInjectablesThatAreNotProvided.has(implementsClass.expression.name)) {
                return true;
            }
        }
        return false;
    },
    mapAllProvidedInjectables(ast, path) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!unambiguous.isModule(ast)) {
                return null;
            }
            let nestModuleMap = null;
            const foundNestModuleClass = nestModuleAstParser_1.nestModuleAstParser.findNestModuleClass(ast);
            if (foundNestModuleClass) {
                nestModuleMap = nestModuleAstParser_1.nestModuleAstParser.mapNestModuleDecorator(foundNestModuleClass, path);
            }
            const foundProviderObject = nestProviderAstParser_1.nestProviderAstParser.findNestProviderObjectsProperty(nestProviderAstParser_1.nestProviderAstParser.findNestProviderObject(ast), "provide");
            if (foundProviderObject) {
                nestModuleMap = nestProviderAstParser_1.nestProviderAstParser.mapNestProviderObject(foundProviderObject, path);
            }
            return nestModuleMap;
        }
        catch (error) {
            console.error("parse error:", path, error);
            // m.errors.push(error);
            // return m; // can't continue
            return null;
        }
    },
};
exports.default = NestProvidedInjectableMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdFByb3ZpZGVkSW5qZWN0YWJsZU1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9uZXN0TW9kdWxlcy9uZXN0UHJvdmlkZWRJbmplY3RhYmxlTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLDZFQUErRDtBQUcvRCw0Q0FBb0I7QUFDcEIsNERBQXVEO0FBSXZELCtEQUEwRDtBQUMxRCxtRUFBOEQ7QUFFOUQsTUFBTSwwQ0FBMEMsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUN2RCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0IsRUFBRSxnQkFBZ0I7Q0FDckMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSw0QkFBNEIsR0FBRztJQUNqQyxnQkFBZ0IsQ0FDWixVQUF5QyxFQUN6Qyx1QkFBK0I7UUFFL0IsSUFBSSxVQUFVLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQzlDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QjtRQUVELElBQUksVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekMsT0FBTyxVQUFVLENBQUM7U0FDckI7UUFFRCxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsYUFBYSxDQUNULEtBQXNCLEVBQ3RCLE9BQThDO1FBRTlDLE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFzQyxDQUFDO1FBQ2pFLEtBQUs7YUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNQLDRCQUE0QixDQUFDLHlCQUF5QixDQUNsRCxxQ0FBaUIsQ0FBQyxnQkFBZ0IsQ0FDOUIsNEJBQTRCLENBQUMsZ0JBQWdCLENBQ3pDLENBQUMsQ0FBQyxRQUFRLENBQ2IsRUFDRCxDQUFDLENBQUMsUUFBUSxFQUNWLE9BQU8sQ0FDVixFQUNELENBQUMsQ0FBQyxRQUFRLENBQ2IsQ0FDSjtZQUNELDZEQUE2RDthQUM1RCxNQUFNLENBQUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDO2FBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ1gsVUFBVSxDQUFDLEdBQUcsQ0FDVixDQUFDLENBQUMsQ0FBQyxDQUFXLEVBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBK0IsQ0FDckMsQ0FDSixDQUFDO1FBRU4sT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUNELFFBQVEsQ0FBUyxLQUFvQjtRQUNqQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN4RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUN6QixPQUFPLFlBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG1DQUFtQyxDQUMvQixJQUErQjtRQUUvQixLQUFLLE1BQU0sZUFBZSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ2pELElBQ0ksMENBQTBDLENBQUMsR0FBRyxDQUN6QyxlQUFlLENBQUMsVUFBa0MsQ0FBQyxJQUFJLENBQzNELEVBQ0g7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELHlCQUF5QixDQUNyQixHQUFxQixFQUNyQixJQUFZO1FBRVosSUFBSTtZQUNBLDhEQUE4RDtZQUU5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztZQUV6QixNQUFNLG9CQUFvQixHQUN0Qix5Q0FBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLG9CQUFvQixFQUFFO2dCQUN0QixhQUFhLEdBQUcseUNBQW1CLENBQUMsc0JBQXNCLENBQ3RELG9CQUFvQixFQUNwQixJQUFJLENBQ1AsQ0FBQzthQUNMO1lBQ0QsTUFBTSxtQkFBbUIsR0FDckIsNkNBQXFCLENBQUMsK0JBQStCLENBQ2pELDZDQUFxQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxFQUNqRCxTQUFTLENBQ1osQ0FBQztZQUNOLElBQUksbUJBQW1CLEVBQUU7Z0JBQ3JCLGFBQWEsR0FBRyw2Q0FBcUIsQ0FBQyxxQkFBcUIsQ0FDdkQsbUJBQW1CLEVBQ25CLElBQUksQ0FDUCxDQUFDO2FBQ0w7WUFFRCxPQUFPLGFBQWEsQ0FBQztTQUN4QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNDLHdCQUF3QjtZQUN4Qiw4QkFBOEI7WUFDOUIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Q0FDSixDQUFDO0FBRUYsa0JBQWUsNEJBQTRCLENBQUMifQ==