import getType from "../getType";
import { camelCase, ucFirst } from "../convertString";
import { validations } from "../validations";

const convertObjectKeys = async ({ data, convertType = "camelCase" }) => {
    const dataIsType = getType(data);
    if (validations.isEmpty(data) || !["object", "array"].includes(dataIsType)) return data;

    if (dataIsType === "array") {
        const newDataArray = await data.reduce(async (previousData, currentData) => {
            const tempData = await previousData;
            const convertedCurrentData = await convertObjectKeys({ data: currentData, convertType });
            tempData.push(convertedCurrentData);
            return tempData;
        }, Promise.resolve([]));

        return newDataArray;
    }

    if (dataIsType === "object") {
        const dataKeys = Object.keys(data) || [];
        const newData = await dataKeys.reduce(async (previousData, currentKey) => {
            const tempData = await previousData;
            const value = data[currentKey];
            const valueIsType = getType(value);
            const keyConverted = ["lowerCase", "upperCase"].includes(convertType)
                ? currentKey[`to${ucFirst(convertType)}`]()
                : camelCase(currentKey);

            if (["string"].includes(valueIsType) && validations.number(value, true)) {
                const splittedValue = value.split(".");
                const hasDecimals = splittedValue.length === 2;
                const isLastDigitZero = hasDecimals ? splittedValue[1][splittedValue[1].length - 1] === "0" : false;

                if (hasDecimals && isLastDigitZero) {
                    tempData[keyConverted] = value;
                    return tempData;
                }

                if (hasDecimals) {
                    tempData[keyConverted] = parseFloat(value);
                    return tempData;
                }

                tempData[keyConverted] = parseInt(value, 10);
                return tempData;
            }

            if (["string"].includes(valueIsType)) {
                tempData[keyConverted] =
                    validations.isJSONString(value) && !["content", "text", "title"].includes(keyConverted) ? JSON.parse(value) : value;
                return tempData;
            }

            if (["object", "array"].includes(valueIsType)) {
                tempData[keyConverted] = await convertObjectKeys({ data: value, convertType });
                return tempData;
            }

            tempData[keyConverted] = value;

            return tempData;
        }, Promise.resolve({}));

        return newData;
    }

    return data;
};

export default convertObjectKeys;
