import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import { serializeForm, formPostValidation, apiCall, getType, convertObjectKeys } from "@rrkallan/js-helpers";
import { useDebounce } from "@rrkallan/react-hooks";
import Loading from "@rrkallan/ui-library/Loading";

import styles from "./resources/styles/form.module.scss";

const InputTypeText = loadable(() => import(/* webpackChunkName: "InputTypeText" */ "@rrkallan/ui-library/FormElements/InputfieldText"), {
    fallback: <Loading />,
});

const SliderButton = loadable(() => import(/* webpackChunkName: "SliderButton" */ "@rrkallan/ui-library/FormElements/SliderButton"), {
    fallback: <Loading />,
});

const Button = loadable(() => import(/* webpackChunkName: "Button" */ "@rrkallan/ui-library/FormElements/Button"), {
    fallback: <Loading />,
});

const Textarea = loadable(() => import(/* webpackChunkName: "Textarea" */ "@rrkallan/ui-library/FormElements/Textarea"), {
    fallback: <Loading />,
});

function Form({
    attributes,
    customEventHandler,
    customSubmitHandler,
    fieldsets,
    disableForm,
    postFormWithApiCall,
    resetForm,
    submitButtonDisabled,
    postData,
}) {
    const [formElements, setFormElements] = useState([]);
    const [buttonElements, setButtonElements] = useState([]);
    const [formData, setFormData] = useState([]);
    const [currentValue, setCurrentValue] = useState();
    const [clearValue, setClearValue] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(submitButtonDisabled);
    const [resetDisabled, setResetDisabled] = useState(true);
    const debouncedCurrentValue = useDebounce(currentValue, 150);

    const formValidation = useCallback(() => {
        let hasError = 0;

        if (!formElements.length) hasError += 1;

        formElements.forEach((element) => {
            if (element?.hasAttribute("state") && element?.getAttribute("state") !== "isValid") hasError += 1;
        });

        if (clearValue) setSubmitDisabled(true);

        if (!clearValue) setSubmitDisabled(!!hasError);
    }, [formElements, clearValue]);

    const setElementsToState = (formObject, updateElements = false) => {
        const totalElements = formElements.length + buttonElements.length;
        if (formObject && (totalElements !== formObject.elements.length || updateElements)) {
            const tempObject = [...formObject.elements].reduce(
                (dataObject, element) => {
                    const tempDataObject = dataObject;
                    const { type } = element;
                    const tagName = element.tagName.toLowerCase();

                    if (element && (tagName === "button" || ["submit", "reset", "button"].includes(type)))
                        tempDataObject.buttons.push(element);

                    if (element && !["fieldset", "button"].includes(tagName) && !["submit", "reset", "button"].includes(type))
                        tempDataObject.elements.push(element);

                    return tempDataObject;
                },
                { elements: [], buttons: [] }
            );

            setButtonElements(tempObject.buttons);
            setFormElements(tempObject.elements);

            const data = fieldsets.reduce(
                (dataObject, fieldset) => {
                    const tempDataObject = dataObject;
                    const { elements } = fieldset || {};

                    tempDataObject.elements.push(...elements);

                    return tempDataObject;
                },
                { attributes, elements: [] }
            );

            setFormData(data);

            formValidation();
        }
    };

    const setDisabledAttributeOnFieldsets = (disabled = true) => {
        fieldsets.map((fieldset) => {
            const currentFieldset = fieldset;
            currentFieldset.disabled = disabled;

            return disabled;
        });
    };

    const handleFormInValid = (errorMessages) => {
        const error = getType(errorMessages) === "object" ? Object.values(errorMessages) : [errorMessages];
        const response = {
            ok: false,
            error,
        };

        setDisabledAttributeOnFieldsets(false);

        return response;
    };

    const formApiCall = async ({ formPostUrl, data, method }) => {
        const response = await apiCall({ url: formPostUrl, method, body: data });
        const contentType = response?.headers?.get("content-type")?.split(";")?.shift();
        const isJsonResponse = contentType === "application/json";
        const responseData = isJsonResponse
            ? await response.json()
            : { error: { message: "System error contact your system administrator" } };
        const responseDataConverted = await convertObjectKeys({ data: responseData });

        if (!response.ok) return handleFormInValid(responseDataConverted?.error);

        return responseDataConverted;
    };

    const getResponse = async (formObject, data) => {
        if (postFormWithApiCall) {
            const { method } = formObject;
            const formPostUrl = formObject.action;

            const response = await formApiCall({ formPostUrl, data, method });

            return response;
        }

        return {
            ok: true,
            status: 200,
            data,
        };
    };

    const disableButtons = useCallback(() => {
        setSubmitDisabled(true);
        setResetDisabled(true);
    }, []);

    const resetFormElements = useCallback(() => setClearValue(true), []);

    const onResetHandler = () => {
        disableButtons();
        resetFormElements();
    };

    const onEventHandler = (event) => {
        const formElement = event?.target;
        const formObject = formElement?.form;
        const formElementValue = formElement?.value || "";
        const updateElementsInState = getType(customEventHandler) === "function" ? customEventHandler(event) : false;

        if (clearValue) setClearValue(false);
        if (currentValue !== formElementValue) setCurrentValue(formElementValue);

        if (resetDisabled && event.type === "change") setResetDisabled(false);

        setElementsToState(formObject, updateElementsInState);
    };

    const convertDataForAPI = (postDataObject) => {
        const convertedData = Object.keys(postDataObject).reduce((data, key) => {
            const newData = {
                ...data,
                [key]: postDataObject[key].values,
            };

            return newData;
        }, {});

        return convertedData;
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        document.activeElement.blur();

        disableButtons();
        setDisabledAttributeOnFieldsets(true);

        const formObject = event.currentTarget || event.target;
        const formObjectData = serializeForm(formObject, formData);
        const postDataObject = { ...postData, ...formObjectData.postData };
        const errorMessages = formPostValidation(postDataObject);

        if (errorMessages) {
            const errorResponse = handleFormInValid(errorMessages);

            if (customSubmitHandler) customSubmitHandler(errorResponse);
            return;
        }

        const data = convertDataForAPI(postDataObject);
        const response = getResponse(formObject, data);

        formObject.reset();

        if (customSubmitHandler) customSubmitHandler(response);

        setDisabledAttributeOnFieldsets(false);
        setClearValue(true);
    };

    useEffect(() => {
        if ((debouncedCurrentValue || debouncedCurrentValue === "") && formElements) formValidation();
    }, [debouncedCurrentValue, formElements, formValidation]);

    useEffect(() => {
        if (formElements) formValidation();
    }, [formElements, formValidation]);

    useEffect(() => {
        setSubmitDisabled(submitButtonDisabled);
    }, [submitButtonDisabled]);

    useEffect(() => {
        if (resetForm) {
            disableButtons();
            resetFormElements();
        }
    }, [disableButtons, resetForm, resetFormElements]);

    return (
        <form
            {...attributes}
            onSubmit={onSubmitHandler}
            onReset={onResetHandler}
            onChange={onEventHandler}
            onFocus={onEventHandler}
            onBlur={onEventHandler}
        >
            {fieldsets?.map((fieldset) => {
                const { elements, disabled } = fieldset;
                const disabledFieldset = disableForm || disabled || false;

                return (
                    <fieldset key={fieldset.id} className={styles.container} disabled={disabledFieldset}>
                        <div className={styles.unit} variant={fieldset.variant || null}>
                            {elements.map((formElement) => {
                                const { id, node, ...element } = formElement;
                                element.disabled = disabledFieldset || element.disabled;

                                switch (node) {
                                    case "input":
                                        return <InputTypeText key={id} id={id} {...element} clearValue={clearValue} />;
                                    case "slider":
                                        return <SliderButton key={id} id={id} {...element} clearValue={clearValue} />;
                                    case "textarea":
                                        return <Textarea key={id} id={id} {...element} clearValue={clearValue} />;
                                    case "button":
                                        if (element.type === "submit") element.disabled = submitDisabled;

                                        if (element.type === "reset") element.disabled = resetDisabled;

                                        return <Button key={id} id={id} {...element} />;
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </fieldset>
                );
            })}
        </form>
    );
}

Form.defaultProps = {
    customEventHandler: undefined,
    customSubmitHandler: undefined,
    disableForm: false,
    postFormWithApiCall: true,
    resetForm: false,
    submitButtonDisabled: true,
    postData: undefined,
};

Form.propTypes = {
    attributes: PropTypes.shape({}).isRequired,
    customEventHandler: PropTypes.func,
    customSubmitHandler: PropTypes.func,
    fieldsets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    disableForm: PropTypes.bool,
    postFormWithApiCall: PropTypes.bool,
    resetForm: PropTypes.bool,
    submitButtonDisabled: PropTypes.bool,
    postData: PropTypes.shape({}),
};

export default Form;
