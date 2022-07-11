import apiCall from "./apiCall";
import convertObjectKeys from "./convertObjectKeys";
import {
    convertToGivenSeparator,
    camelCase,
    capitalizeFirstLetterWord,
    ucFirst,
    htmlStringToPlain,
    camelCaseToTitleCase,
    clearEmptyCharsOnBothEnds,
    convertToUrlFriendly,
} from "./convertString";
import getDayDifference from "./date";
import {
    isAttributeValueExistingInArray,
    replaceElementAttributeValue,
    getParentElementWithAttribute,
    getParentElementWithAttributeValue,
    getChildElementsWithState,
    setElementState,
    setStylesOnElement,
    setAttributesOnElement,
    enableDisableElements,
    getSiblings,
} from "./element";
import { downloadBlob, downloadXbrlFile } from "./fileDownload";
import { flattenObject, flattenArray } from "./flattenObject";
import { getRandomInt, getRandomAlphanumericInsensitive } from "./getRandom";
import getType from "./getType";
import getValueOfElement from "./getValueOfElement";
import { getLatLngCenterPoint, getDistanceBetweenPoints, getLatLngByAddress } from "./googleMaps";
import getIconClassBasedOnExtension from "./iconClass";
import keyEvent from "./keyEvent";
import { mimeTypeExtension, getExtensionForMimeType, getMimeTypeForExtension } from "./mimeTypeExtensions";
import { roundNearest, roundDown, roundUp } from "./roundNumber";
import serializeForm from "./serializeForm";
import {
    urlParamsAsObject,
    objectAsUrlParams,
    getCurrentUrlSearchAsObject,
    getNewUrlSearchAsObjectAndString,
    setSearchPageParam,
} from "./urlParams";
import { validations, formPostValidation, getValidationTypes, isElementValid } from "./validations";
import { getStorageItem, setStorageItem, removeStorageItem, clearStorage } from "./webStorageData";

export {
    apiCall,
    convertObjectKeys,
    convertToGivenSeparator,
    camelCase,
    capitalizeFirstLetterWord,
    ucFirst,
    htmlStringToPlain,
    camelCaseToTitleCase,
    clearEmptyCharsOnBothEnds,
    convertToUrlFriendly,
    getDayDifference,
    isAttributeValueExistingInArray,
    replaceElementAttributeValue,
    getParentElementWithAttribute,
    getParentElementWithAttributeValue,
    getChildElementsWithState,
    setElementState,
    setStylesOnElement,
    setAttributesOnElement,
    enableDisableElements,
    getSiblings,
    downloadBlob,
    downloadXbrlFile,
    flattenObject,
    flattenArray,
    getType,
    getRandomInt,
    getRandomAlphanumericInsensitive,
    getValueOfElement,
    getLatLngCenterPoint,
    getDistanceBetweenPoints,
    getLatLngByAddress,
    getIconClassBasedOnExtension,
    keyEvent,
    mimeTypeExtension,
    getExtensionForMimeType,
    getMimeTypeForExtension,
    roundNearest,
    roundDown,
    roundUp,
    serializeForm,
    urlParamsAsObject,
    objectAsUrlParams,
    getCurrentUrlSearchAsObject,
    getNewUrlSearchAsObjectAndString,
    setSearchPageParam,
    validations,
    formPostValidation,
    getValidationTypes,
    isElementValid,
    getStorageItem,
    setStorageItem,
    removeStorageItem,
    clearStorage,
};
