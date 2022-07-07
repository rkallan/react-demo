import { urlParamsAsObject } from "@rrkallan/js-helpers";

const search = urlParamsAsObject(window.location.search);

const searchForm = {
    attributes: {
        method: "get",
        name: "search-movies-form",
        autoComplete: "off",
        "data-required": true,
        action: process.env.REACT_APP_API_SHOWS_SEARCH,
        noValidate: true,
    },
    fieldsets: [
        {
            id: 1,
            caption: null,
            disabled: false,
            form: null,
            name: null,
            elements: [
                {
                    id: 1,
                    name: "q",
                    title: "Search tv shows by title",
                    type: "search",
                    required: false,
                    validationTypes: {
                        hasMinimalAndMaximalCharacters: { minCharacters: 2, maxCharacters: 256 },
                    },
                    defaultValue: search?.q || undefined,
                    disabled: false,
                    node: "input",
                },
            ],
        },
    ],
};

export default searchForm;
