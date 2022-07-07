import { validations } from "../validations";

const getValueOfElement = {
    input: ({ element, convertValue }) => {
        if (!element) return undefined;

        const elementType = element.type;
        const value = element.value?.trim();

        switch (elementType) {
            case "radio":
                if (element.checked) return validations.isJSONString(value) ? JSON.parse(value) : value;
                break;
            case "checkbox":
                return convertValue[element.checked];
            default:
                if (validations.isEmpty(value)) return undefined;
                return validations.isJSONString(value) ? JSON.parse(value) : value;
        }

        return undefined;
    },

    textarea: (element) => {
        if (element) {
            const value = element.value?.trim() || undefined;

            if (validations.isEmpty(value)) return undefined;

            return value;
        }

        return undefined;
    },

    select: (element) => {
        if (element && element.type && element.type === "select-one" && element.value) {
            const valueAsString = element.value;
            return validations.isJSONString(valueAsString) ? JSON.parse(valueAsString) : valueAsString;
        }
        if (element && element.type && element.type === "select-multiple") {
            const value = [];
            const selected = element.selectedOptions;

            selected.forEach((option) => {
                const optionValue = validations.isJSONString(option.value) ? JSON.parse(option.value) : option.value;
                value.push(optionValue);
            });

            if (validations.isEmpty(value)) return undefined;

            return value;
        }

        return undefined;
    },

    button: (element) => {
        if (element) {
            const valueAsString = element.value?.trim() || undefined;

            if (validations.isEmpty(valueAsString)) return undefined;

            return validations.isJSONString(valueAsString) ? JSON.parse(valueAsString) : valueAsString;
        }
        return undefined;
    },
};

export default getValueOfElement;
