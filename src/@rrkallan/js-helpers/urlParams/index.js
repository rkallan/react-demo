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
        const tempValue = data[key];
        if (!["", "null", "undefined", undefined, null].includes(tempValue)) {
            const urlValue = getType(tempValue) === "object" ? JSON.stringify(tempValue) : tempValue;
            const value = getType(urlValue) === "string" ? urlValue.replace(/\s+/g, " ") : urlValue;

            urlParams.append(key, value);
        }
    });

    urlParams.sort();
    const urlSearchAsString = urlParams.toString();

    if (validations.isEmpty(urlSearchAsString)) return "";

    const prefixUrlSearch = addQuestionMark ? "?" : "&";
    const urlSearch = `${addPrefix ? prefixUrlSearch : ""}${urlSearchAsString}`;

    return decodeURIComponent(urlSearch);
};

const getCurrentUrlSearchAsObject = () => {
    const currentUrlSearch = window.location.search;
    const currentUrlSearchAsObject = urlParamsAsObject(currentUrlSearch);

    return currentUrlSearchAsObject;
};

const getNewUrlSearchAsObjectAndString = (data) => {
    const currentUrlSearchAsObject = getCurrentUrlSearchAsObject();
    const searchObject = {
        ...currentUrlSearchAsObject,
        ...data,
    };
    const search = objectAsUrlParams(searchObject);

    return {
        searchObject,
        search,
    };
};

const setUrlSearchParam = (data) => {
    const currentUrlSearch = window.location.search;
    const { search } = getNewUrlSearchAsObjectAndString(data);
    const isSearchCurrentUrlSearch = search === currentUrlSearch;
    if (!isSearchCurrentUrlSearch) window.history.pushState({}, "", search || window.location.pathname);
};

const getReplaceChar = () => {
    const replaceChar = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        ẞ: "SS",
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ϊ: "I",
        Ϋ: "Y",
        ā: "a",
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        ū: "u",
        Ā: "A",
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        Ū: "U",
        Ќ: "K",
        ќ: "k",
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        Є: "e",
        І: "I",
        Ї: "I",
        є: "e",
        ї: "i",
        ґ: "g",
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        ё: "e",
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        ş: "s",
        Ş: "S",
        İ: "I",
        ğ: "g",
        Ğ: "G",
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
    };

    return {
        replaceChar,
        replaceCharForRexExp: Object.keys(replaceChar).join("|"),
    };
};

const getStringAsUrlfriendly = (value) => {
    const { replaceChar, replaceCharForRexExp } = getReplaceChar();

    const regExpReplaceChar = new RegExp(replaceCharForRexExp, "g");

    const urlFriendly = value
        .toLowerCase()
        .replace(regExpReplaceChar, (character) => replaceChar[character])
        .replace(/[.,;:~!@#$%^&*()_±§='"`\-\[\]\{\}\<\>\s]+/g, "-")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");

    return urlFriendly;
};

export {
    urlParamsAsObject,
    objectAsUrlParams,
    getCurrentUrlSearchAsObject,
    getNewUrlSearchAsObjectAndString,
    setUrlSearchParam,
    getStringAsUrlfriendly,
};
