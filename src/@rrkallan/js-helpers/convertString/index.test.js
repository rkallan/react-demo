import { convertToGivenSeparator, camelCase, capitalizeFirstLetterWord, ucFirst } from "./index";

describe("Helpers convertString - convertToGivenSeparator", () => {
    test(`Testing helpers/convertString - convertToGivenSeparator() => value must be converted to space separeted`, async () => {
        const data = "skyBridgeAPI";

        const result = await convertToGivenSeparator(data);
        const expectedResult = "Sky Bridge API";

        expect(result).toStrictEqual(expectedResult);
    });
    test(`Testing helpers/convertString - convertToGivenSeparator() => value must be converted to camelCase`, async () => {
        const data = "sky-bridge-API";

        const result = await convertToGivenSeparator(data, "");
        const expectedResult = "SkybridgeAPI";

        expect(result).toStrictEqual(expectedResult);
    });
    test(`Testing helpers/convertString - convertToGivenSeparator() => value must be undefined`, async () => {
        const data = ["skyBridgeAPI"];

        const result = await convertToGivenSeparator(data);
        const expectedResult = undefined;

        expect(result).toStrictEqual(expectedResult);
    });
});

describe("Helpers convertString - camelCase", () => {
    test(`Testing helpers/convertString - camelCase() => value must be converted to camelCase`, async () => {
        const data = "sky-bridge-API";

        const result = await camelCase(data);
        const expectedResult = "skyBridgeAPI";

        expect(result).toStrictEqual(expectedResult);
    });

    test(`Testing helpers/convertString - camelCase() => value must be undefined`, async () => {
        const data = ["skyBridgeAPI"];

        const result = await camelCase(data);
        const expectedResult = undefined;

        expect(result).toStrictEqual(expectedResult);
    });
});

describe("Helpers convertString - capitalizeFirstLetterWord", () => {
    test(`Testing helpers/convertString - capitalizeFirstLetterWord() => words as camelCase seperated by space and each first character Capitalized`, async () => {
        const data = "skyBridgeAPI";

        const result = await capitalizeFirstLetterWord(data);
        const expectedResult = "Sky Bridge API";

        expect(result).toStrictEqual(expectedResult);
    });
    test(`Testing helpers/convertString - capitalizeFirstLetterWord() => words as dashed seperated by space and each first character Capitalized`, async () => {
        const data = "sky-Bridge-API";

        const result = await capitalizeFirstLetterWord(data);
        const expectedResult = "Sky Bridge API";

        expect(result).toStrictEqual(expectedResult);
    });
    test(`Testing helpers/convertString - capitalizeFirstLetterWord() => words as underscore seperated by space and each first character Capitalized`, async () => {
        const data = "sKy_Bridge_API";

        const result = await capitalizeFirstLetterWord(data);
        const expectedResult = "S Ky Bridge API";

        expect(result).toStrictEqual(expectedResult);
    });
    test(`Testing helpers/convertString - capitalizeFirstLetterWord() => words is not a string return value is undefined`, async () => {
        const data = ["skyBridgeAPI"];

        const result = await capitalizeFirstLetterWord(data);
        const expectedResult = undefined;

        expect(result).toStrictEqual(expectedResult);
    });
});
describe("Helpers convertString - ucFirst", () => {
    test(`Testing helpers/convertString - ucFirst() => convertToSpace must be converted to space separeted`, async () => {
        const data = "sky bridge API";

        const result = await ucFirst(data);
        const expectedResult = "Sky bridge API";

        expect(result).toStrictEqual(expectedResult);
    });
    test(`Testing helpers/convertString - ucFirst() => value is not a string return value is undefined`, async () => {
        const data = ["sky Bridge API"];

        const result = await ucFirst(data);
        const expectedResult = undefined;

        expect(result).toStrictEqual(expectedResult);
    });
});
