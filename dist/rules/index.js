"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const injectableShouldBeProvided_1 = __importDefault(require("./injectablesShouldBeProvided/injectableShouldBeProvided"));
const ProviderInjectedShouldMatchFactory_1 = __importDefault(require("./providerInjectedShouldMatchFactory/ProviderInjectedShouldMatchFactory"));
const apiPropertyMatchesPropertyOptionality_1 = __importDefault(require("./apiPropertyMatchesPropertyOptionality/apiPropertyMatchesPropertyOptionality"));
const controllerDecoratedHasApiTags_1 = __importDefault(require("./controllerDecoratedHasApiTags/controllerDecoratedHasApiTags"));
const apiMethodsShouldSpecifyApiResponse_1 = __importDefault(require("./apiMethodsShouldSpecifyApiResponse/apiMethodsShouldSpecifyApiResponse"));
const apiEnumPropertyBestPractices_1 = __importDefault(require("./apiEnumPropertyBestPractices/apiEnumPropertyBestPractices"));
const apiPropertyReturningArrayShouldSetArray_1 = __importDefault(require("./apiPropertyReturningArrayShouldSetArray/apiPropertyReturningArrayShouldSetArray"));
const shouldSpecifyForbidUnknownValuesRule_1 = __importDefault(require("./shouldSpecifyForbidUnknownValues/shouldSpecifyForbidUnknownValuesRule"));
const paramDecoratorNameMatchesRouteParam_1 = __importDefault(require("./paramDecoratorNameMatchesRouteParam/paramDecoratorNameMatchesRouteParam"));
const validateNonPrimitiveNeedsDecorators_1 = __importDefault(require("./validate-non-primitves-needs-type-decorator/validateNonPrimitiveNeedsDecorators"));
const validateNestedOfArrayShouldSetEach_1 = __importDefault(require("./validateNestedOfArrayShouldSetEach/validateNestedOfArrayShouldSetEach"));
const allPropertiesAreWhitelisted_1 = __importDefault(require("./allPropertiesAreWhitelisted/allPropertiesAreWhitelisted"));
const allRules = {
    "api-property-matches-property-optionality": apiPropertyMatchesPropertyOptionality_1.default,
    "injectable-should-be-provided": injectableShouldBeProvided_1.default,
    "provided-injected-should-match-factory-parameters": ProviderInjectedShouldMatchFactory_1.default,
    "controllers-should-supply-api-tags": controllerDecoratedHasApiTags_1.default,
    "api-method-should-specify-api-response": apiMethodsShouldSpecifyApiResponse_1.default,
    "api-enum-property-best-practices": apiEnumPropertyBestPractices_1.default,
    "api-property-returning-array-should-set-array": apiPropertyReturningArrayShouldSetArray_1.default,
    "should-specify-forbid-unknown-values": shouldSpecifyForbidUnknownValuesRule_1.default,
    "param-decorator-name-matches-route-param": paramDecoratorNameMatchesRouteParam_1.default,
    "validated-non-primitive-property-needs-type-decorator": validateNonPrimitiveNeedsDecorators_1.default,
    "validate-nested-of-array-should-set-each": validateNestedOfArrayShouldSetEach_1.default,
    "all-properties-are-whitelisted": allPropertiesAreWhitelisted_1.default,
};
exports.default = allRules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcnVsZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwSEFBa0c7QUFDbEcsaUpBQW1JO0FBQ25JLDBKQUFrSTtBQUNsSSxrSUFBMEc7QUFDMUcsaUpBQXlIO0FBQ3pILCtIQUF1RztBQUN2RyxnS0FBd0k7QUFDeEksbUpBQXVIO0FBQ3ZILG9KQUFnSTtBQUNoSSw0SkFBb0k7QUFDcEksaUpBQXlIO0FBQ3pILDRIQUFvRztBQUVwRyxNQUFNLFFBQVEsR0FBRztJQUNiLDJDQUEyQyxFQUN2QywrQ0FBcUM7SUFDekMsK0JBQStCLEVBQUUsb0NBQTBCO0lBQzNELG1EQUFtRCxFQUMvQyw0Q0FBNEM7SUFDaEQsb0NBQW9DLEVBQUUsdUNBQTZCO0lBQ25FLHdDQUF3QyxFQUNwQyw0Q0FBa0M7SUFDdEMsa0NBQWtDLEVBQUUsc0NBQTRCO0lBQ2hFLCtDQUErQyxFQUMzQyxpREFBdUM7SUFDM0Msc0NBQXNDLEVBQUUsOENBQWdDO0lBQ3hFLDBDQUEwQyxFQUN0Qyw2Q0FBdUM7SUFDM0MsdURBQXVELEVBQ25ELDZDQUFtQztJQUN2QywwQ0FBMEMsRUFDdEMsNENBQWtDO0lBQ3RDLGdDQUFnQyxFQUFFLHFDQUEyQjtDQUNoRSxDQUFDO0FBRUYsa0JBQWUsUUFBUSxDQUFDIn0=