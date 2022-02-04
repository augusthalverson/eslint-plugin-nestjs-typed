"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_at_your_own_risk_1 = require("eslint/use-at-your-own-risk");
const isFilteredPath_1 = __importDefault(require("./isFilteredPath"));
// eslint-disable-next-line unicorn/no-static-only-class
class FileEnumeratorWrapper {
}
FileEnumeratorWrapper.enumerateFiles = (sourceGlobs, extensions, filterFromPaths) => {
    const fileEnumerator = new use_at_your_own_risk_1.FileEnumerator({
        extensions,
    });
    const iterator = fileEnumerator.iterateFiles(sourceGlobs);
    return FileEnumeratorWrapper.mapEnumeratedFiles(iterator, filterFromPaths);
};
FileEnumeratorWrapper.mapEnumeratedFiles = (paths, filterFromPaths) => {
    return [...paths]
        .map(({ filePath, ignored, }) => ({
        ignored,
        filename: filePath,
    }))
        .filter((file) => {
        return !isFilteredPath_1.default.test(file.filename, filterFromPaths);
    });
};
exports.default = FileEnumeratorWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUVudW1lcmF0aW9uV3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9maWxlcy9maWxlRW51bWVyYXRpb25XcmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBS3FDO0FBQ3JDLHNFQUE4QztBQUU5Qyx3REFBd0Q7QUFDeEQsTUFBTSxxQkFBcUI7O0FBQ2hCLG9DQUFjLEdBQUcsQ0FDcEIsV0FBcUIsRUFDckIsVUFBb0IsRUFDcEIsZUFBeUIsRUFDVixFQUFFO0lBQ2pCLE1BQU0sY0FBYyxHQUFHLElBQUkscUNBQWMsQ0FBQztRQUN0QyxVQUFVO0tBQ2IsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUUxRCxPQUFPLHFCQUFxQixDQUFDLGtCQUFrQixDQUMzQyxRQUFRLEVBQ1IsZUFBZSxDQUNsQixDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUssd0NBQWtCLEdBQUcsQ0FDeEIsS0FBd0IsRUFDeEIsZUFBeUIsRUFDVixFQUFFO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNaLEdBQUcsQ0FDQSxDQUFDLEVBQ0csUUFBUSxFQUNSLE9BQU8sR0FJVixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ0gsT0FBTztRQUNQLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUMsQ0FDTDtTQUNBLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2IsT0FBTyxDQUFDLHdCQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFHTixrQkFBZSxxQkFBcUIsQ0FBQyJ9