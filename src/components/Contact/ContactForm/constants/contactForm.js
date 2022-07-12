const contactForm = {
    attributes: {
        method: "get",
        name: "contact-form",
        autoComplete: "off",
        "data-required": true,
        action: undefined,
        noValidate: true,
    },
    fieldsets: [
        {
            id: 1,
            caption: null,
            disabled: false,
            form: null,
            name: null,
            variant: "row",
            elements: [
                {
                    id: 1,
                    name: "name",
                    title: "Name",
                    type: "text",
                    required: true,
                    validationTypes: {
                        hasMinimalAndMaximalCharacters: { minCharacters: 2, maxCharacters: 256 },
                    },
                    defaultValue: undefined,
                    disabled: false,
                    node: "input",
                },
                {
                    id: 2,
                    name: "email",
                    title: "Emailaddress",
                    type: "email",
                    required: true,
                    validationTypes: {
                        hasMinimalAndMaximalCharacters: { minCharacters: 2, maxCharacters: 256 },
                        email: {},
                    },
                    defaultValue: undefined,
                    disabled: false,
                    node: "input",
                },
            ],
        },

        {
            id: 2,
            caption: null,
            disabled: false,
            form: null,
            name: null,
            variant: "column",
            elements: [
                {
                    id: 3,
                    name: "message",
                    title: "Message",
                    required: true,
                    validationTypes: {
                        hasMinimalAndMaximalCharacters: { minCharacters: 2, maxCharacters: 2048 },
                    },
                    defaultValue: undefined,
                    disabled: false,
                    node: "textarea",
                },
            ],
        },
        {
            id: 3,
            caption: null,
            disabled: false,
            form: null,
            name: null,
            variant: "row-reverse",
            elements: [
                {
                    id: 1,
                    node: "button",
                    type: "submit",
                    text: "Submit",
                    children: <span>Send</span>,
                    disabled: true,
                },
            ],
        },
    ],
};

export default contactForm;
