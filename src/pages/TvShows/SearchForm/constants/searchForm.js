import { store } from "Store";

const unsubscribe = store.subscribe(() => {});

store.subscribe(() => {});

const searchForm = () => {
    const { tvShows } = store.getState();
    const { search } = tvShows;
    return {
        attributes: {
            method: "get",
            name: "search-tv-shows-form",
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
                        defaultValue: search.value || undefined,
                        disabled: false,
                        node: "input",
                    },
                ],
            },
        ],
        test: store.getState(),
    };
};

export default searchForm;

export { unsubscribe };
