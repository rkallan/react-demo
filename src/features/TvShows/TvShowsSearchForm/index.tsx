import { useEffect, useState, ChangeEvent } from "react";
import loadable from "@loadable/component";
import Loading from "@rrkallan/ui-library/Loading";
import { objectAsUrlParams, urlParamsAsObject, validations } from "@rrkallan/js-helpers";
import { useDebounce, useIsFirstRender } from "@rrkallan/react-hooks";
import { useAppDispatch } from "Store/hooks";
import { setSearchValue } from "features/TvShows/tvShowsSlice";
import formData from "./constants/searchForm";

const Form = loadable(() => import(/* webpackChunkName: "Form" */ "@rrkallan/ui-library/Form"), {
    fallback: <Loading />,
});

function TvShowsSearchForm(): JSX.Element {
    const dispatch = useAppDispatch();
    const isFirstRender = useIsFirstRender();
    const searchFormData = formData();
    const [currentValue, setCurrentValue] = useState((): string | undefined => undefined);
    const debouncedCurrentValue = useDebounce(currentValue, 500);

    const formOnChangeHandler = (event: ChangeEvent<HTMLFormElement>) => {
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
                page: isFirstRender ? currentUrlSearchAsObject.page : undefined,
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
    }, [debouncedCurrentValue, dispatch, isFirstRender]);

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

export default TvShowsSearchForm;
