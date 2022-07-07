/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useLayoutEffect } from "react";

function useBoundingClientRect({ element, delay = 100 }) {
    const [boundingClientRect, setBoundingClientRect] = useState(() => element?.current?.getBoundingClientRect());

    useLayoutEffect(() => {
        let timeoutId = null;
        const convertUnit = ({ data, unit = "rem" }) => {
            const divideValue = unit === "rem" ? 16 : 1;
            const newData = Object.fromEntries(
                Array.from(Object.keys(DOMRect.prototype), (key) => {
                    const value = `${data[key] / divideValue}${unit}`;
                    return [key, value];
                })
            );
            return newData;
        };
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const clientRect = element?.current?.getBoundingClientRect() || {};
                const value = convertUnit({ data: clientRect });
                setBoundingClientRect(value);
            }, delay);
        };

        const clientRect = element?.current?.getBoundingClientRect() || {};
        const value = convertUnit({ data: clientRect });

        window.addEventListener("resize", resizeListener);
        setBoundingClientRect(value);

        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, [delay, element]);

    return boundingClientRect;
}

export default useBoundingClientRect;
