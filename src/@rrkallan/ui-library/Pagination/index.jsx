import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { validations } from "@rrkallan/js-helpers";
import { usePagination } from "@rrkallan/react-hooks";
import styles from "./resources/styles/pagination.module.scss";

function Pagination({
    getPageContent,
    data = [],
    itemsPerPage = 16,
    showing = Pagination.defaultProps.showing,
    buttonPrevText = Pagination.defaultProps.buttonPrevText,
    buttonNextText = Pagination.defaultProps.buttonNextText,
}) {
    const { totalPages, totalItems, startNumber, endNumber, currentPage, currentData, ...paginated } = usePagination(data, itemsPerPage);
    const [pages, setPages] = useState(() => (!!totalPages && [...Array(totalPages).keys()].map((page) => page + 1)) || 0);

    const onClickHandlerPagination = (event) => {
        const { value } = event.currentTarget;

        if (!validations.number(value).error) {
            paginated.jump(parseInt(value, 10));
            return undefined;
        }

        paginated[value]();
        return undefined;
    };

    useEffect(() => {
        setPages(() => (!!totalPages && [...Array(totalPages).keys()].map((page) => page + 1)) || 0);
    }, [totalPages]);

    useEffect(() => {
        getPageContent(currentData());
    }, [getPageContent, currentData]);

    if (!totalPages && !pages) return null;

    return (
        <section className={styles.container}>
            {pages?.length > 1 && (
                <nav className={styles.navigation}>
                    <div className={styles.unit} variant="text">
                        <button
                            className={styles.button}
                            type="button"
                            onClick={onClickHandlerPagination}
                            value="prev"
                            disabled={currentPage === 1 ? "disabled" : undefined}
                            variant="text"
                        >
                            {buttonPrevText}
                        </button>
                    </div>
                    <ul className={styles.unit} variant="number">
                        {pages.map((page) => {
                            return (
                                <li key={page} className={styles.item}>
                                    <button
                                        className={styles.button}
                                        type="button"
                                        onClick={onClickHandlerPagination}
                                        value={page}
                                        state={page === currentPage ? "is-active" : undefined}
                                        disabled={page === currentPage ? "disabled" : undefined}
                                        variant="number"
                                    >
                                        {page}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={styles.unit} variant="text">
                        <button
                            className={styles.button}
                            type="button"
                            onClick={onClickHandlerPagination}
                            value="next"
                            disabled={currentPage === totalPages ? "disabled" : undefined}
                            variant="text"
                        >
                            {buttonNextText}
                        </button>
                    </div>
                </nav>
            )}
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
    showing: "showing %pagination.from% to %pagination.to% of total %pagination.total%",
    data: [],
    itemsPerPage: 16,
};

Pagination.propTypes = {
    getPageContent: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    buttonPrevText: PropTypes.string,
    buttonNextText: PropTypes.string,
    showing: PropTypes.string,
    itemsPerPage: PropTypes.number,
};

export default Pagination;
