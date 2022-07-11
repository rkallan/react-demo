import { useState, useLayoutEffect } from "react";

const convertUnit = ({ data, unit = "rem", includeUnit = true }) => {
    const divideValue = unit === "rem" ? 16 : 1;
    const newData = Object.fromEntries(
        Array.from(Object.keys(DOMRect.prototype), (key) => {
            const valueCalculated = data[key] / divideValue || 0;
            const value = includeUnit ? `${valueCalculated}${unit}` : valueCalculated;

            return [key, value];
        })
    );
    return newData;
};

function useBoundingClientRect({ element, delay = 100, includeUnit = true }) {
    const [boundingClientRect, setBoundingClientRect] = useState(() => element?.current?.getBoundingClientRect());

    useLayoutEffect(() => {
        let timeoutId = null;
        let ignore = false;

        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const clientRect = element?.current?.getBoundingClientRect() || {};
                const value = convertUnit({ data: clientRect, includeUnit });

                setBoundingClientRect(value);
            }, delay);
        };

        if (!ignore) resizeListener();
        if (!ignore) window.addEventListener("resize", resizeListener);

        return () => {
            ignore = true;
            window.removeEventListener("resize", resizeListener);
        };
    }, [delay, element, includeUnit]);

    return boundingClientRect;
}

export default useBoundingClientRect;
