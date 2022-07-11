import { useState, useEffect, useCallback } from "react";
import { validations, getCurrentUrlSearchAsObject, setSearchPageParam } from "@rrkallan/js-helpers";

const usePagination = (data, itemsPerPage = 10, prefixSearchParam = undefined) => {
    const [totalItems, setTotalItems] = useState(() => data?.length || 0);
    const [totalPages, setTotalPages] = useState(() => Math.ceil(totalItems / itemsPerPage));
    const [currentPage, setCurrentPage] = useState(() => 1);
    const [endNumber, setEndNumber] = useState(() => Math.min(currentPage * itemsPerPage, totalItems));
    const [startNumber, setStartNumber] = useState(() => Math.max(currentPage * itemsPerPage - itemsPerPage + 1, 1));
    const [searchParamKeyPage] = useState(() => (prefixSearchParam ? `${prefixSearchParam}Page` : "page"));

    const setPaginatorValues = useCallback(
        ({ page }) => {
            if (page) {
                const param = {
                    [searchParamKeyPage]: page,
                };
                setCurrentPage(() => page);
                setSearchPageParam(param);
            }
        },
        [searchParamKeyPage]
    );

    const jump = useCallback(
        (value) => {
            const pageNumber = (validations.number(value, true) && parseInt(value, 10)) || undefined;
            const page = Math.min(Math.max(1, pageNumber), totalPages);

            setPaginatorValues({ page });
        },
        [setPaginatorValues, totalPages]
    );

    const prev = () => {
        const page = currentPage > 1 ? Math.max(currentPage - 1, 1) : currentPage;

        setPaginatorValues({ page });
    };

    const next = () => {
        const page = currentPage < totalPages ? currentPage < totalPages && Math.min(currentPage + 1, totalPages) : currentPage;

        setPaginatorValues({ page });
    };

    const first = () => {
        const page = 1;

        setPaginatorValues({ page });
    };

    const last = () => {
        const page = totalPages;

        setPaginatorValues({ page });
    };

    const currentData = useCallback(() => {
        const begin = startNumber - 1;
        const end = endNumber;
        const tempPageData = data.slice(begin, end);
        const pageData = tempPageData.map((item, index) => {
            const tempItem = {
                ...item,
                position: startNumber + index,
            };
            return tempItem;
        });

        return pageData;
    }, [data, endNumber, startNumber]);

    useEffect(() => {
        if (currentPage) {
            const end = Math.min(currentPage * itemsPerPage, totalItems);
            const start = Math.max(currentPage * itemsPerPage - itemsPerPage + 1, 1);

            setStartNumber(start);
            setEndNumber(end);
        }
    }, [currentPage, itemsPerPage, totalItems]);

    useEffect(() => {
        const items = data?.length || 0;
        const tempTotalPages = Math.ceil(items / itemsPerPage);
        setCurrentPage((pageNumber) => {
            return pageNumber > tempTotalPages ? tempTotalPages : pageNumber || 1;
        });
        setTotalItems(() => items);
        setTotalPages(() => tempTotalPages);
    }, [data, itemsPerPage]);

    useEffect(() => {
        const currentUrlSearchAsObject = getCurrentUrlSearchAsObject();
        const page = currentUrlSearchAsObject[searchParamKeyPage];

        if (page) jump(page);
    }, [jump, searchParamKeyPage]);

    return { next, prev, first, last, jump, currentData, currentPage, totalPages, totalItems, startNumber, endNumber };
};

export default usePagination;
