/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
    const [currentValue, setCurrentValue] = useState(() => {
        const value = urlParamsAsObject(window.location.search);

        return value?.q;
    });
    const debouncedCurrentValue = useDebounce(currentValue, 250);

    const formOnChangeHandler = async (event: ChangeEvent<HTMLFormElement>) => {
        const element = event.target;
        const { value } = element || {};

        setCurrentValue(value.trim());
    };

    useEffect(() => {
        if (debouncedCurrentValue || debouncedCurrentValue === "") {
            const isValueEmpty = validations.isEmpty(debouncedCurrentValue);
            const searchObject = {
                q: debouncedCurrentValue,
            };
            const search = objectAsUrlParams(searchObject);

            const payloadValue = {
                searchValue: isValueEmpty ? undefined : debouncedCurrentValue,
            };
            dispatch(setSearchValue(payloadValue));
            window.history.pushState({}, "", isValueEmpty ? window.location.pathname : search);
        }
    }, [debouncedCurrentValue, dispatch]);

    return (
        <Form
            customEventHandler={formOnChangeHandler}
            customSubmitHandler={undefined}
            disableForm={undefined}
            resetForm={undefined}
            submitButtonDisabled={undefined}
            {...formData}
            postFormWithApiCall
            postData={undefined}
        />
    );
}

export default SearchFornm;
