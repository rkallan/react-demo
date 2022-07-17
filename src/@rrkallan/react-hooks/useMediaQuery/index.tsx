import { useEffect, useState, useCallback } from "react";
import getType from "@rrkallan/js-helpers/getType";

const getMatches = (query: string): boolean => {
    if (getType(window) !== "undefined") return window.matchMedia(query).matches;

    return false;
};

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => getMatches(query));

    const handleChange = useCallback(() => setMatches(getMatches(query)), [query]);

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
