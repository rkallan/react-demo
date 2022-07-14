/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import loadable from "@loadable/component";
import { useAppDispatch } from "Store/hooks";
import { setAssignmentsFilter } from "features/Clients/clientsSlice";
import { getCurrentUrlSearchAsObject, setUrlSearchParam } from "@rrkallan/js-helpers";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/filterClients.module.scss";

const Select = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Select"), {
    fallback: <Loading />,
});

const clientSelectProperties = {
    label: {
        for: "select-client",
        text: "Select client",
    },
    attributes: {
        placeholder: "Select client",
        name: "clientId",
        multiple: false,
        "data-required": false,
    },
    optionGroup: [
        {
            id: 1,
            title: "Select client",
            options: [
                { text: "all clients", id: 0, attributes: { value: "" } },
                { text: "Bol.com", id: 1, attributes: { value: 1 } },
                { text: "Kempen", id: 2, attributes: { value: 2 } },
                { text: "Philips", id: 3, attributes: { value: 3 } },
                { text: "Gemeente Museum", id: 4, attributes: { value: 4 } },
                { text: "Florensis", id: 5, attributes: { value: 5 } },
                { text: "Microsoft", id: 6, attributes: { value: 6 } },
                { text: "O’Neill", id: 7, attributes: { value: 7 } },
                { text: "BE Lightning", id: 8, attributes: { value: 8 } },
                { text: "CHOCOMEL", id: 9, attributes: { value: 9 } },
                { text: "JBL", id: 10, attributes: { value: 10 } },
                { text: "Zalando", id: 11, attributes: { value: 11 } },
                {
                    text: "KONINKLIJKE BIBLIOTHEEK",
                    id: 12,
                    attributes: { value: 12 },
                },
                { text: "LIBERTY GLOBAL", id: 13, attributes: { value: 13 } },
                { text: "ARLA", id: 14, attributes: { value: 14 } },
            ],
        },
    ],
};
const categorySelectProperties = {
    label: {
        for: "select-category",
        text: "Select category",
    },
    attributes: {
        placeholder: "Select category",
        name: "categoryId",
        multiple: false,
        "data-required": false,
    },
    optionGroup: [
        {
            id: 1,
            title: "Select category",
            options: [
                { text: "all category", id: 0, attributes: { value: "" } },
                {
                    text: "E-commerce",
                    id: 1,
                    attributes: {
                        value: 1,
                    },
                },
                {
                    text: "Finance",
                    id: 2,
                    attributes: {
                        value: 2,
                    },
                },
                {
                    text: "House",
                    id: 3,
                    attributes: {
                        value: 3,
                    },
                },
                {
                    text: "Culture",
                    id: 4,
                    attributes: {
                        value: 4,
                    },
                },
                {
                    text: "Remaining",
                    id: 5,
                    attributes: {
                        value: 5,
                    },
                },
                {
                    text: "E-commerce",
                    id: 6,
                    attributes: {
                        value: 6,
                    },
                },
                {
                    text: "Fashion",
                    id: 7,
                    attributes: {
                        value: 7,
                    },
                },
                {
                    text: "Travel",
                    id: 8,
                    attributes: {
                        value: 8,
                    },
                },
            ],
        },
    ],
};

function FilterClients(): JSX.Element {
    const dispatch = useAppDispatch();
    const [searchParams] = useState(() => getCurrentUrlSearchAsObject());

    const selectEventHandler = (data: any) => {
        const currentUrlSearchAsObject = getCurrentUrlSearchAsObject();
        currentUrlSearchAsObject[data.name] = data.value;
        setUrlSearchParam(currentUrlSearchAsObject);
        dispatch(setAssignmentsFilter({ filter: currentUrlSearchAsObject }));
    };

    useEffect(() => {
        if (searchParams) dispatch(setAssignmentsFilter({ filter: searchParams }));
    }, [dispatch, searchParams]);

    return (
        <section className={styles.container}>
            <div className={styles.unit}>
                <div className={styles.item}>
                    <div className={styles.label}>
                        <label htmlFor={clientSelectProperties.label.for}>Show client(s)</label>
                    </div>
                    <Select
                        label={clientSelectProperties.label}
                        attributes={clientSelectProperties.attributes}
                        optionGroup={clientSelectProperties.optionGroup}
                        variant={undefined}
                        defaultValue={searchParams.clientId}
                        clearValue={undefined}
                        customEventHandler={selectEventHandler}
                    />
                </div>
                <div className={styles.item}>
                    <div className={styles.label}>
                        <label htmlFor={categorySelectProperties.label.for}>Show category(s)</label>
                    </div>
                    <Select
                        label={categorySelectProperties.label}
                        attributes={categorySelectProperties.attributes}
                        optionGroup={categorySelectProperties.optionGroup}
                        variant={undefined}
                        defaultValue={searchParams.categoryId}
                        clearValue={undefined}
                        customEventHandler={selectEventHandler}
                    />
                </div>
            </div>
        </section>
    );
}

export default FilterClients;
