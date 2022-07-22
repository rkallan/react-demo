import { useState, useEffect, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { validations, roundDown } from "@rrkallan/js-helpers";
import { usePagination, useBoundingClientRect } from "@rrkallan/react-hooks";
import styles from "./resources/styles/pagination.module.scss";

function Pagination({
    getPageContent,
    data = [],
    prefixSearchParam,
    itemsPerPage = 16,
    showing = Pagination.defaultProps.showing,
    buttonPrevText = Pagination.defaultProps.buttonPrevText,
    buttonNextText = Pagination.defaultProps.buttonNextText,
    buttonFirstText = Pagination.defaultProps.buttonFirstText,
    buttonLastText = Pagination.defaultProps.buttonLastText,
    scrollToTop = false,
}) {
    const paginationNumberRef = useRef();
    const { width } = useBoundingClientRect({ element: paginationNumberRef, delay: 5, includeUnit: false }) || {};
    const { totalPages, totalItems, startNumber, endNumber, currentPage, currentData, ...paginated } = usePagination(
        data,
        itemsPerPage,
        prefixSearchParam
    );
    const [pages, setPages] = useState(() => (!!totalPages && [...Array(totalPages).keys()].map((page) => page + 1)) || 0);
    const [showMaxPageLinks, setShowMaxPageLinks] = useState(() => 0);
    const [beginPageNumber, setBeginPageNumber] = useState(() => 0);
    const [lastPageNumber, setLastPageNumber] = useState(() => 0);
    const [charLengthTotalPages] = useState(() => {
        const charLength = parseFloat(totalItems).toString().length;
        return charLength < 2 ? 2 : charLength;
    });

    const onClickHandlerPagination = (event) => {
        const { value } = event.currentTarget;

        if (validations.number(value, true)) paginated.jump(value);

        if (["first", "last", "next", "prev"].includes(value)) paginated[value]();
    };

    useLayoutEffect(() => {
        const possibleMaxPageLinks = roundDown(width / (1 + (charLengthTotalPages + 1) * 0.5)) || 0;
        const isPossibleMaxPageLinksOdd = !!(possibleMaxPageLinks % 2);
        const maxPageLinks = possibleMaxPageLinks - !isPossibleMaxPageLinksOdd;

        setShowMaxPageLinks(maxPageLinks);
    }, [charLengthTotalPages, width]);

    useEffect(() => {
        setPages(() => (!!totalPages && [...Array(totalPages).keys()].map((page) => page + 1)) || 0);
    }, [totalPages]);

    useEffect(() => {
        const divededNumber = roundDown(showMaxPageLinks / 2);
        let beginNumber = currentPage <= divededNumber ? 1 : currentPage - divededNumber;
        let lastNumber = currentPage >= totalPages - divededNumber ? totalPages : currentPage + divededNumber;

        if (beginNumber + showMaxPageLinks > totalPages) beginNumber = totalPages - showMaxPageLinks + 1;
        if (lastNumber < showMaxPageLinks) lastNumber = showMaxPageLinks;

        setBeginPageNumber(beginNumber);
        setLastPageNumber(lastNumber);
    }, [currentPage, showMaxPageLinks, totalPages]);

    useEffect(() => {
        if (scrollToTop) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }

        getPageContent(currentData());
    }, [getPageContent, currentData, scrollToTop]);

    if (!totalPages && !pages) return null;

    return (
        <section className={styles.container}>
            <nav className={styles.navigation}>
                {pages?.length > 1 && (
                    <>
                        <ul className={styles.unit} variant="text">
                            <li className={styles.item}>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={onClickHandlerPagination}
                                    value="first"
                                    disabled={currentPage === 1 ? "disabled" : undefined}
                                    variant="text"
                                    title="Go to first page"
                                >
                                    {buttonFirstText}
                                </button>
                            </li>
                            <li className={styles.item}>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={onClickHandlerPagination}
                                    value="prev"
                                    disabled={currentPage === 1 ? "disabled" : undefined}
                                    variant="text"
                                    title="Go to previous page"
                                >
                                    {buttonPrevText}
                                </button>
                            </li>
                        </ul>

                        <ul
                            className={styles.unit}
                            variant={["number", `charLength-${charLengthTotalPages}`].join(" ")}
                            ref={paginationNumberRef}
                        >
                            {pages.map((page) => {
                                const itemState =
                                    (page >= beginPageNumber && page <= lastPageNumber) || pages.length < showMaxPageLinks
                                        ? "visible"
                                        : "hidden";

                                return (
                                    <li key={page} className={styles.item} state={itemState}>
                                        <button
                                            className={styles.button}
                                            type="button"
                                            onClick={onClickHandlerPagination}
                                            value={page}
                                            state={page === currentPage ? "is-active" : undefined}
                                            disabled={page === currentPage ? "disabled" : undefined}
                                            variant="number"
                                            title={`Go to page ${page}`}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul className={styles.unit} variant="text">
                            <li className={styles.item}>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={onClickHandlerPagination}
                                    value="next"
                                    disabled={currentPage === totalPages ? "disabled" : undefined}
                                    variant="text"
                                    title="Go to next page"
                                >
                                    {buttonNextText}
                                </button>
                            </li>
                            <li className={styles.item}>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={onClickHandlerPagination}
                                    value="last"
                                    disabled={currentPage === totalPages ? "disabled" : undefined}
                                    variant="text"
                                    title="Go to last page"
                                >
                                    {buttonLastText}
                                </button>
                            </li>
                        </ul>
                    </>
                )}
            </nav>

            <div className={styles.info}>
                <span className={styles.text}>
                    {showing
                        .replace("%pagination.from%", startNumber)
                        .replace("%pagination.to%", endNumber)
                        .replace("%pagination.total%", totalItems)}
                </span>
            </div>
        </section>
    );
}

Pagination.defaultProps = {
    buttonPrevText: "Previous",
    buttonNextText: "Next",
    buttonLastText: "Last",
    buttonFirstText: "First",
    showing: "showing %pagination.from% to %pagination.to% of total %pagination.total%",
    data: [],
    itemsPerPage: 16,
    prefixSearchParam: undefined,
    scrollTo: false,
};

Pagination.propTypes = {
    getPageContent: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    buttonPrevText: PropTypes.string,
    buttonNextText: PropTypes.string,
    buttonLastText: PropTypes.string,
    buttonFirstText: PropTypes.string,
    showing: PropTypes.string,
    itemsPerPage: PropTypes.number,
    prefixSearchParam: PropTypes.string,
    scrollTo: PropTypes.bool,
};

export default Pagination;
