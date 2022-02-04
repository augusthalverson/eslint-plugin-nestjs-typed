"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestProviderAstParser = void 0;
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
const NestProvidedInjectablesMap_1 = require("./models/NestProvidedInjectablesMap");
exports.nestProviderAstParser = {
    mapNestProviderObject(n, path) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const propertyName = n.value.name;
        if (propertyName) {
            return [
                path,
                new NestProvidedInjectablesMap_1.NestProvidedInjectablesMap(new Set(), new Set([propertyName])),
            ];
        }
        return null;
    },
    findNestProviderObjectsProperty(providerDeclaration, propertyName) {
        if (providerDeclaration) {
            const foundProviderProperty = providerDeclaration.init.properties.find((p) => 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            p.key
                .name === propertyName);
            return foundProviderProperty;
        }
        return null;
    },
    findNestProviderObject(ast) {
        var _a;
        for (const n of ast.body) {
            if ((n.type === experimental_utils_1.AST_NODE_TYPES.ExportNamedDeclaration ||
                n.type === experimental_utils_1.AST_NODE_TYPES.ExportDefaultDeclaration) &&
                ((_a = n.declaration) === null || _a === void 0 ? void 0 : _a.type) === experimental_utils_1.AST_NODE_TYPES.VariableDeclaration) {
                const providerDeclaration = n.declaration.declarations.find((d) => {
                    var _a, _b, _c;
                    return d.type === experimental_utils_1.AST_NODE_TYPES.VariableDeclarator &&
                        ((_c = (_b = (_a = d.id.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation) === null || _b === void 0 ? void 0 : _b.typeName) === null || _c === void 0 ? void 0 : _c.name) === "Provider";
                });
                return providerDeclaration;
            }
        }
        return undefined;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdFByb3ZpZGVyQXN0UGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL25lc3RNb2R1bGVzL25lc3RQcm92aWRlckFzdFBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4RUFBK0U7QUFDL0Usb0ZBQStFO0FBRWxFLFFBQUEscUJBQXFCLEdBQUc7SUFDakMscUJBQXFCLENBQ2pCLENBQW9CLEVBQ3BCLElBQVk7UUFFWiw4REFBOEQ7UUFDOUQsTUFBTSxZQUFZLEdBQUksQ0FBQyxDQUFDLEtBQTZCLENBQUMsSUFBSSxDQUFDO1FBQzNELElBQUksWUFBWSxFQUFFO1lBQ2QsT0FBTztnQkFDSCxJQUFJO2dCQUNKLElBQUksdURBQTBCLENBQzFCLElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUMxQjthQUNKLENBQUM7U0FDTDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwrQkFBK0IsQ0FDM0IsbUJBQTRELEVBQzVELFlBQW9CO1FBRXBCLElBQUksbUJBQW1CLEVBQUU7WUFDckIsTUFBTSxxQkFBcUIsR0FDdkIsbUJBQW1CLENBQUMsSUFDdkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDRiw4REFBOEQ7WUFDNUQsQ0FBdUIsQ0FBQyxHQUEyQjtpQkFDaEQsSUFBSSxLQUFLLFlBQVksQ0FDWixDQUFDO1lBQ3ZCLE9BQU8scUJBQXFCLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0Qsc0JBQXNCLENBQ2xCLEdBQXFCOztRQUVyQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDdEIsSUFDSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssbUNBQWMsQ0FBQyxzQkFBc0I7Z0JBQzdDLENBQUMsQ0FBQyxJQUFJLEtBQUssbUNBQWMsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDdkQsQ0FBQSxNQUFBLENBQUMsQ0FBQyxXQUFXLDBDQUFFLElBQUksTUFBSyxtQ0FBYyxDQUFDLG1CQUFtQixFQUM1RDtnQkFDRSxNQUFNLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDdkQsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7b0JBQ0YsT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLG1DQUFjLENBQUMsa0JBQWtCO3dCQUM1QyxDQUFBLE1BQ0ksTUFDSSxNQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYywwQ0FDYixjQUdULDBDQUFFLFFBQ04sMENBQUUsSUFBSSxNQUFLLFVBQVUsQ0FBQTtpQkFBQSxDQUM3QixDQUFDO2dCQUNGLE9BQU8sbUJBQW1CLENBQUM7YUFDOUI7U0FDSjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FDSixDQUFDIn0=