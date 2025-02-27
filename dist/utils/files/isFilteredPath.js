"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line unicorn/no-static-only-class
class IsFilteredPath {
}
IsFilteredPath.test = (path, filteredStrings) => {
    if (!path) {
        return false;
    }
    const hasFoundFilter = filteredStrings === null || filteredStrings === void 0 ? void 0 : filteredStrings.some((setting) => {
        return new RegExp(`(${setting})`).test(path);
    });
    return hasFoundFilter || false;
};
exports.default = IsFilteredPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNGaWx0ZXJlZFBhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZmlsZXMvaXNGaWx0ZXJlZFBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBd0Q7QUFDeEQsTUFBTSxjQUFjOztBQUNULG1CQUFJLEdBQUcsQ0FDVixJQUF3QixFQUN4QixlQUFxQyxFQUM5QixFQUFFO0lBQ1QsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNQLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsTUFBTSxjQUFjLEdBQUcsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLElBQUksQ0FBQyxDQUFDLE9BQWUsRUFBRSxFQUFFO1FBQzdELE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sY0FBYyxJQUFJLEtBQUssQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFHTixrQkFBZSxjQUFjLENBQUMifQ==