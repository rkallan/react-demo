import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import { ucFirst } from "@rrkallan/js-helpers";

import styles from "./resources/styles/checkbox.module.scss";

interface CheckboxPropsInterface {
    id: number;
    title: string;
    name: string;
    value?: boolean;
    defaultValue?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    clearValue?: boolean;
    updateValue?: boolean;
}

const Icons = loadable(() => import(/* webpackChunkName: "MainRoutes" */ "@rrkallan/ui-library/Icons"), {
    fallback: <Loading />,
});

function Checkbox({
    id,
    title,
    name,
    value = false,
    defaultValue = false,
    disabled = false,
    readOnly = false,
    clearValue = false,
    updateValue = false,
}: CheckboxPropsInterface): JSX.Element {
    const [isChecked, setIsChecked] = useState((): boolean => value);

    useEffect(() => {
        if (clearValue) setIsChecked(defaultValue);
    }, [clearValue, defaultValue]);

    useEffect(() => {
        if (updateValue) setIsChecked(value);
    }, [updateValue, value]);

    return (
        <div className={styles.container}>
            <input
                id={`${name}-${id}`}
                className={styles.input}
                name={name}
                type="checkbox"
                defaultChecked={isChecked}
                disabled={disabled}
                readOnly={readOnly}
            />
            <label className={styles.label} htmlFor={`${name}-${id}`}>
                <div className={styles.checkbox}>
                    <Icons icon="check" svgProps={undefined} noContainer={undefined} variant="full-width" />
                </div>
                {!!title && <div className={styles.text}>{ucFirst(title)}</div>}
            </label>
        </div>
    );
}

export default Checkbox;
