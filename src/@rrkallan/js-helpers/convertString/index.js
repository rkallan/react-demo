import getType from "../getType";

const ucFirst = (value) => {
    if (getType(value) !== "string") return undefined;

    const valueTrimmed = value.trim();
    const valueFirstCharacter = valueTrimmed.charAt(0).toUpperCase();
    const valueWithoutFirstCharacter = valueTrimmed.slice(1);
    const newValue = `${valueFirstCharacter}${valueWithoutFirstCharacter}`;

    return newValue;
};

const convertToGivenSeparator = (value, seperator = " ") => {
    if (getType(value) !== "string") return undefined;

    const convertedValue = value
        .replace(/[^a-zA-Z0-9]+/g, seperator)
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/([0-9])([^0-9])/g, "$1-$2")
        .replace(/([^0-9])([0-9])/g, "$1-$2")
        .replace(/-+/g, seperator);

    return ucFirst(convertedValue);
};

const camelCase = (value) => {
    if (getType(value) !== "string") return undefined;

    const valueConvertedToSpace = convertToGivenSeparator(value);
    return valueConvertedToSpace
        .split(/\s/gi)
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return ucFirst(word);
        })
        .join("");
};

const capitalizeFirstLetterWord = (words) => {
    if (getType(words) !== "string") return undefined;

    const wordsConvertedToSpace = convertToGivenSeparator(words);

    return wordsConvertedToSpace
        .split(/\s/gi)
        .map((word) => ucFirst(word))
        .join(" ");
};

const htmlStringToPlain = (htmlString) => {
    if (getType(htmlString) !== "string") return undefined;

    const plainString = htmlString.replace(/(<([^>]+)>)/gi, "");

    return plainString;
};

const camelCaseToTitleCase = (value) => {
    if (getType(value) !== "string") return undefined;

    const newValue = value.replace(/([A-Z])/g, (match) => ` ${match}`).replace(/^./, (match) => match.toUpperCase());

    return newValue;
};

const clearEmptyCharsOnBothEnds = (value) => {
    if (getType(value) !== "string") return undefined;

    const newValue = value.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");

    return newValue;
};

const convertToUrlFriendly = (value) => {
    if (getType(value) !== "string") return undefined;

    const newValue = value
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\W+(?!$)/g, " ")
        .replace(/\W+($)/, "")
        .trim()
        .replace(/\s/g, "-")
        .toLowerCase();

    return newValue;
};

export {
    convertToGivenSeparator,
    camelCase,
    capitalizeFirstLetterWord,
    ucFirst,
    htmlStringToPlain,
    camelCaseToTitleCase,
    clearEmptyCharsOnBothEnds,
    convertToUrlFriendly,
};
