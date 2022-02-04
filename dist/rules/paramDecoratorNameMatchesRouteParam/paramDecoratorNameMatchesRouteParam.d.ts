import { TSESTree } from "@typescript-eslint/types";
declare type ResultModel = {
    hasColonInName: boolean;
    paramNameNotMatchedInPath: boolean;
};
export declare const parsePathParts: (decorator: TSESTree.Decorator) => string[];
/**
 * nestjs allows for paths with _+?()*
 * this rule doesn't support parsing those so we'll just pass
 */
export declare const hasPathPartsAnyRegexParams: (pathPartsToCheck: string[]) => boolean;
/**
 * Checks if there is a matching path part for the paramName
 * @param paramName
 * @param pathPartsToCheck
 * @returns
 */
export declare const isParameterNameIncludedInAPathPart: (paramName: string, pathPartsToCheck: string[]) => boolean;
export declare const shouldTrigger: (decorator: TSESTree.Decorator) => ResultModel;
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"paramIdentifierDoesntNeedColon" | "paramIdentifierShouldMatch", never[], {
    Decorator(node: TSESTree.Decorator): void;
}>;
export default rule;
