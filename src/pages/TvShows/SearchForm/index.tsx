/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState, ChangeEvent } from "react";
import loadable from "@loadable/component";
import Loading from "@rrkallan/ui-library/Loading";
import { objectAsUrlParams, urlParamsAsObject, validations } from "@rrkallan/js-helpers";
import { useDebounce } from "@rrkallan/react-hooks";
import { useAppDispatch } from "Store/hooks";
import { setSearchValue } from "features/TvShows/tvShowsSlice";
import formData from "./constants/searchForm";

const Form = loadable(() => import(/* webpackChunkName: "LoginForm" */ "@rrkallan/ui-library/Form"), {
    fallback: <Loading />,
});

function SearchFornm(): JSX.Element {
    const dispatch = useAppDispatch();
    const searchFormData = formData();
    const [currentValue, setCurrentValue] = useState((): string | undefined => undefined);
    const debouncedCurrentValue = useDebounce(currentValue, 500);

    const formOnChangeHandler = async (event: ChangeEvent<HTMLFormElement>) => {
        const element = event.target;
        const { name, value } = element || {};

        setCurrentValue(`${name}:${value.trim()}`);
    };

    useEffect(() => {
        if (debouncedCurrentValue || validations.isEmpty(debouncedCurrentValue)) {
            const currentUrlSearch = window.location.search;
            const currentUrlSearchAsObject = urlParamsAsObject(currentUrlSearch);
            const [key, value] = debouncedCurrentValue?.split(":") || [];

            const searchObject = {
                ...currentUrlSearchAsObject,
                [key]: value ?? currentUrlSearchAsObject[key],
            };
            const search = objectAsUrlParams(searchObject);
            const isSearchCurrentUrlSearch = search === currentUrlSearch;

            const payloadValue = {
                searchValue: searchObject.q,
            };

            dispatch(setSearchValue(payloadValue));

            if (!isSearchCurrentUrlSearch) window.history.pushState({}, "", !search ? window.location.pathname : search);
        }
    }, [debouncedCurrentValue, dispatch]);

    return (
        <Form
            customEventHandler={formOnChangeHandler}
            customSubmitHandler={undefined}
            disableForm={undefined}
            resetForm={undefined}
            submitButtonDisabled={undefined}
            {...searchFormData}
            postFormWithApiCall
            postData={undefined}
        />
    );
}

export default SearchFornm;
