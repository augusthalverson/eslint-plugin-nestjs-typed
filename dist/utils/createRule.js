"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRule = void 0;
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
// Note - cannot migrate this to an import statement because it will make TSC copy the package.json to the dist folder
// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
//const {version} = require("../../package.json");
// eslint-disable-next-line new-cap
exports.createRule = experimental_utils_1.ESLintUtils.RuleCreator(
// (name) =>
//     `https://github.com/darraghoriordan/eslint-plugin-nestjs-typed/blob/v${
//         version as string
//     }/packages/eslint-plugin/docs/rules/${name}.md`
() => `https://github.com/darraghoriordan/eslint-plugin-nestjs-typed/blob/main/README.md`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jcmVhdGVSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhFQUFrRTtBQUVsRSxzSEFBc0g7QUFDdEgscUZBQXFGO0FBQ3JGLGtEQUFrRDtBQUNsRCxtQ0FBbUM7QUFDdEIsUUFBQSxVQUFVLEdBQUcsZ0NBQVcsQ0FBQyxXQUFXO0FBQzdDLFlBQVk7QUFDWiw4RUFBOEU7QUFDOUUsNEJBQTRCO0FBQzVCLHNEQUFzRDtBQUN0RCxHQUFHLEVBQUUsQ0FDRCxtRkFBbUYsQ0FDMUYsQ0FBQyJ9