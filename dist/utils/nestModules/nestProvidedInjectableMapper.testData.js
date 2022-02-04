"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleMappingTestData = exports.fakeContext = exports.fakeFilePath = void 0;
const NestProvidedInjectablesMap_1 = require("./models/NestProvidedInjectablesMap");
exports.fakeFilePath = "fake/path.ts";
exports.fakeContext = {
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: { globalReturn: false },
        sourceType: "module",
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
};
exports.moduleMappingTestData = [
    {
        moduleCode: `import { Module } from "@nestjs/common";

    @Module({
        controllers: [MyController],
        providers: [
            MyProvider,
            MyInjectable,
        ],
        imports: [MyExternalModule, MySecondModule],
        exports: [MyInjectable],
    })
    export class MyModule {}`,
        expectedMapping: [
            exports.fakeFilePath,
            new NestProvidedInjectablesMap_1.NestProvidedInjectablesMap(new Set(["MyController"]), new Set(["MyProvider", "MyInjectable"])),
        ],
    },
    {
        moduleCode: `import { Provider } from "@nestjs/common";
import { MyOtherInjectable } from "./config/MyOtherInjectable";

export const MyOtherInjectableProvider: Provider = {
    provide: MyOtherInjectable,
    useFactory: async (
        config: MyService
    ): Promise<MyOtherInjectable> => {
        return new MyOtherInjectable()
    },
    inject: [MyService],
};`,
        expectedMapping: [
            exports.fakeFilePath,
            new NestProvidedInjectablesMap_1.NestProvidedInjectablesMap(new Set([]), new Set(["MyOtherInjectable"])),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdFByb3ZpZGVkSW5qZWN0YWJsZU1hcHBlci50ZXN0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9uZXN0TW9kdWxlcy9uZXN0UHJvdmlkZWRJbmplY3RhYmxlTWFwcGVyLnRlc3REYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLG9GQUErRTtBQUNsRSxRQUFBLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDOUIsUUFBQSxXQUFXLEdBQUc7SUFDdkIsYUFBYSxFQUFFO1FBQ1gsV0FBVyxFQUFFLElBQW1CO1FBQ2hDLFlBQVksRUFBRSxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUM7UUFDbkMsVUFBVSxFQUFFLFFBQVE7S0FDTjtJQUNsQiw4REFBOEQ7Q0FDMUQsQ0FBQztBQUNJLFFBQUEscUJBQXFCLEdBQUc7SUFDakM7UUFDSSxVQUFVLEVBQUU7Ozs7Ozs7Ozs7OzZCQVdTO1FBQ3JCLGVBQWUsRUFBRTtZQUNiLG9CQUFZO1lBQ1osSUFBSSx1REFBMEIsQ0FDMUIsSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUN6QixJQUFJLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUMxQztTQUNKO0tBQ0o7SUFDRDtRQUNJLFVBQVUsRUFBRTs7Ozs7Ozs7Ozs7R0FXakI7UUFDSyxlQUFlLEVBQUU7WUFDYixvQkFBWTtZQUNaLElBQUksdURBQTBCLENBQzFCLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUNYLElBQUksR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUNqQztTQUNKO0tBQ0o7Q0FDSixDQUFDIn0=