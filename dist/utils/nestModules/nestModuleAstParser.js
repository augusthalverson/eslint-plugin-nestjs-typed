"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestModuleAstParser = void 0;
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
const NestProvidedInjectablesMap_1 = require("./models/NestProvidedInjectablesMap");
exports.nestModuleAstParser = {
    findNestModuleClass(ast) {
        var _a;
        for (const n of ast.body) {
            // find class declaration even if it's inside an export
            if (n.type === experimental_utils_1.AST_NODE_TYPES.ClassDeclaration &&
                n.decorators &&
                n.decorators.length > 0) {
                return n;
            }
            if ((n.type === experimental_utils_1.AST_NODE_TYPES.ExportNamedDeclaration ||
                n.type === experimental_utils_1.AST_NODE_TYPES.ExportDefaultDeclaration) &&
                ((_a = n.declaration) === null || _a === void 0 ? void 0 : _a.type) === experimental_utils_1.AST_NODE_TYPES.ClassDeclaration) {
                return n.declaration;
            }
        }
        return null;
    },
    mapNestModuleDecorator(n, path) {
        var _a;
        // The nest module decorator is called "Module"
        const moduleDecorator = (_a = n.decorators) === null || _a === void 0 ? void 0 : _a.find((d) => d.expression
            .callee.name === "Module");
        if (moduleDecorator) {
            const mappedControllerElements = this.mapModuleDecoratorOptionProperty(moduleDecorator, "controllers");
            const mappedProviderElements = this.mapModuleDecoratorOptionProperty(moduleDecorator, "providers");
            const nestModuleMap = [
                path,
                new NestProvidedInjectablesMap_1.NestProvidedInjectablesMap(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                mappedControllerElements, mappedProviderElements),
            ];
            return nestModuleMap;
        }
        return null;
    },
    mapModuleDecoratorOptionProperty(moduleDecorator, propertyName) {
        const optionProperty = moduleDecorator.expression
            .arguments[0].properties.find((p) => p.key.name ===
            propertyName);
        if (optionProperty) {
            return new Set(optionProperty
                .value.elements.map((element) => element.name));
        }
        return new Set();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdE1vZHVsZUFzdFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9uZXN0TW9kdWxlcy9uZXN0TW9kdWxlQXN0UGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhFQUErRTtBQUMvRSxvRkFBK0U7QUFFbEUsUUFBQSxtQkFBbUIsR0FBRztJQUMvQixtQkFBbUIsQ0FDZixHQUFxQjs7UUFFckIsS0FBSyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ3RCLHVEQUF1RDtZQUN2RCxJQUNJLENBQUMsQ0FBQyxJQUFJLEtBQUssbUNBQWMsQ0FBQyxnQkFBZ0I7Z0JBQzFDLENBQUMsQ0FBQyxVQUFVO2dCQUNaLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDekI7Z0JBQ0UsT0FBTyxDQUFDLENBQUM7YUFDWjtZQUVELElBQ0ksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLG1DQUFjLENBQUMsc0JBQXNCO2dCQUM3QyxDQUFDLENBQUMsSUFBSSxLQUFLLG1DQUFjLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3ZELENBQUEsTUFBQSxDQUFDLENBQUMsV0FBVywwQ0FBRSxJQUFJLE1BQUssbUNBQWMsQ0FBQyxnQkFBZ0IsRUFDekQ7Z0JBQ0UsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQXNCLENBQ2xCLENBQTRCLEVBQzVCLElBQVk7O1FBRVosK0NBQStDO1FBQy9DLE1BQU0sZUFBZSxHQUFHLE1BQUEsQ0FBQyxDQUFDLFVBQVUsMENBQUUsSUFBSSxDQUN0QyxDQUFDLENBQUMsRUFBRSxFQUFFLENBRUcsQ0FBQyxDQUFDLFVBQXNDO2FBQ3BDLE1BQ1IsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUMxQixDQUFDO1FBQ0YsSUFBSSxlQUFlLEVBQUU7WUFDakIsTUFBTSx3QkFBd0IsR0FDMUIsSUFBSSxDQUFDLGdDQUFnQyxDQUNqQyxlQUFlLEVBQ2YsYUFBYSxDQUNoQixDQUFDO1lBQ04sTUFBTSxzQkFBc0IsR0FDeEIsSUFBSSxDQUFDLGdDQUFnQyxDQUNqQyxlQUFlLEVBQ2YsV0FBVyxDQUNkLENBQUM7WUFFTixNQUFNLGFBQWEsR0FBRztnQkFDbEIsSUFBSTtnQkFDSixJQUFJLHVEQUEwQjtnQkFDMUIsOERBQThEO2dCQUM5RCx3QkFBd0IsRUFDeEIsc0JBQXNCLENBQ3pCO2FBQ0osQ0FBQztZQUNGLE9BQU8sYUFBYSxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELGdDQUFnQyxDQUM1QixlQUFtQyxFQUNuQyxZQUFvQjtRQUVwQixNQUFNLGNBQWMsR0FDZixlQUFlLENBQUMsVUFBaUQ7YUFDN0QsU0FBUyxDQUFDLENBQUMsQ0FDbkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDQSxDQUF1QixDQUFDLEdBQTJCLENBQUMsSUFBSTtZQUMxRCxZQUFZLENBQ25CLENBQUM7UUFFRixJQUFJLGNBQWMsRUFBRTtZQUNoQixPQUFPLElBQUksR0FBRyxDQUVMLGNBQStDO2lCQUMzQyxLQUNSLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDVixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUUsT0FBK0IsQ0FBQyxJQUFJLENBQ3JELENBQ0osQ0FBQztTQUNMO1FBRUQsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDSixDQUFDIn0=