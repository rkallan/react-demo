import getValueOfElement from "../getValueOfElement";
import getType from "../getType";

const serializeForm = (form, formObjectData) => {
    const formData = {
        formName: formObjectData.attributes.name || null,
        action: formObjectData.attributes.action || null,
        postData: {},
    };

    formData.postData = Array.prototype.slice.call(form.elements).reduce((data, item) => {
        const { type, name } = item;
        const tempData = data;
        if (item && name && !["submit", "reset", "button"].includes(type)) {
            const elementObject =
                formObjectData.elements.find((element) => {
                    return element.name === name && `${element.name}-${element.id}` === item.id;
                }) || undefined;
            const hasSameNameItems = formObjectData.elements.filter((element) => element.name === name).length > 1;

            const nodeName = item.nodeName.toLowerCase();
            const required = elementObject?.readOnly || item.disabled || item.readOnly ? false : elementObject?.required === true;
            const validationTypes = required ? elementObject?.validationTypes : undefined;
            const convertValue = elementObject?.convertValue || {};

            if (tempData[name]) tempData[name].valueKey += 1;

            if (!tempData[name]) {
                tempData[name] = {
                    type,
                    name,
                    elementType: nodeName,
                    required,
                    validationTypes,
                    valueKey: 1,
                    values: undefined,
                };

                if (hasSameNameItems || type === "checkbox") tempData[name].values = elementObject?.valueKey ? {} : [];
            }

            if (getType(getValueOfElement[nodeName]) === "function") {
                const value = getValueOfElement[nodeName]({ element: item, convertValue });

                if (["checkbox", "radio"].includes(type) && value === undefined) return tempData;

                if (nodeName === "select" && type === "select-multiple") {
                    tempData[name].values = value;
                    return tempData;
                }

                if (hasSameNameItems || (nodeName === "input" && type === "checkbox")) {
                    if (getType(tempData[name].values) === "object") {
                        const valueKey = getType(elementObject?.valueKey) === "string" ? elementObject?.valueKey : tempData[name].valueKey;
                        tempData[name].values[valueKey] = value;
                    }

                    if (getType(tempData[name].values) === "array") tempData[name].values.push(value);

                    return tempData;
                }

                if (getType(tempData[name].values) === "undefined") tempData[name].values = value;
                return tempData;
            }
        }
        return tempData;
    }, {});

    return formData;
};

export default serializeForm;
