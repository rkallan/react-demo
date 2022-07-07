import { camelCase } from "../convertString";
import { validations } from "../validations";
import getType from "../getType";

const castString = (value, commaSeparatedToArray = true) => {
    const isJSONString = validations.isJSONString(value);

    if (isJSONString === true) return JSON.parse(value);

    const valueTrimmed = value.trim();

    if (commaSeparatedToArray && value.includes(",")) {
        const valueAsArray = value.split(",").map((item) => castString(item));

        return valueAsArray;
    }

    if (valueTrimmed === "Infinity") return Infinity;
    if (valueTrimmed === "NaN") return NaN;
    if (valueTrimmed === "undefined") return undefined;

    return valueTrimmed;
};

const urlParamsAsObject = (urlPathOrHref = window.location.href, keyAsCamelCase = true) => {
    if (getType(urlPathOrHref) !== "string" || !urlPathOrHref) return {};

    const locationOrgin = window.location.origin;
    const url = new URL(urlPathOrHref, locationOrgin);
    const urlParams = url.searchParams;

    const paramsAsObject = {};
    urlParams.forEach((paramValue, paramKey) => {
        const key = keyAsCamelCase ? camelCase(paramKey) : paramKey;
        const value = castString(paramValue);

        if (Object.prototype.hasOwnProperty.call(paramsAsObject, key)) {
            const previousValue = paramsAsObject[key];
            const previousValueIsEmpty = validations.isEmpty(previousValue);

            if (previousValueIsEmpty) {
                paramsAsObject[key] = value;
                return;
            }

            const previousValueType = getType(paramsAsObject[key]);
            const valueType = getType(value);

            if (previousValueType === "object" && valueType === "object") {
                const newObjectValue = {
                    ...previousValue,
                    ...value,
                };

                paramsAsObject[key] = newObjectValue;
                return;
            }

            if (previousValueType === "array" && valueType === "array") {
                const newArrayValue = [...new Set([...previousValue, ...value])];
                paramsAsObject[key] = newArrayValue;
                return;
            }

            const newValue = [...new Set([...[previousValue, value]])];
            paramsAsObject[key] = newValue.length === 1 ? value : newValue;
            return;
        }

        paramsAsObject[key] = value;
    });

    return paramsAsObject;
};

const objectAsUrlParams = (data, addQuestionMark = true, addPrefix = true) => {
    if (getType(data) !== "object" || !Object.keys(data).length) return "";

    const urlParams = new URLSearchParams();

    Object.keys(data).forEach((key) => {
        const value = data[key];
        if (!["", "null", "undefined", undefined, null].includes(value)) {
            const urlValue = getType(value) === "object" ? JSON.stringify(value) : value;
            urlParams.append(key, urlValue);
        }
    });

    urlParams.sort();
    const urlSearchAsString = urlParams.toString();

    if (validations.isEmpty(urlSearchAsString)) return "";

    const prefixUrlSearch = addQuestionMark ? "?" : "&";
    const urlSearch = `${addPrefix ? prefixUrlSearch : ""}${urlSearchAsString}`;

    return decodeURIComponent(urlSearch);
};

export { urlParamsAsObject, objectAsUrlParams };
