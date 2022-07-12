import { useEffect, useState } from "react";

const getScrollY = () => window.scrollY || document.documentElement.scrollTop || Math.abs(document.body.getBoundingClientRect().top);
const getScrollX = () => window.scrollX || document.documentElement.scrollLeft || Math.abs(document.body.getBoundingClientRect().left);

type TypeUseScrollPosition = {
    scrollPositionY: number;
    scrollPositionX: number;
};

const useScrollPosition = (): TypeUseScrollPosition => {
    const [scrollPositionY, setScrollPositionY] = useState(() => getScrollY());
    const [scrollPositionX, setScrollPositionX] = useState(() => getScrollX());

    useEffect(() => {
        const updatePosition = () => {
            setScrollPositionY(window.pageYOffset);
            setScrollPositionX(window.pageXOffset);
        };

        window.addEventListener("scroll", updatePosition);

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return { scrollPositionY, scrollPositionX };
};

export default useScrollPosition;
