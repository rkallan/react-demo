import { getType } from "@rrkallan/js-helpers";
import type { TypeGetPageTitle, InterfaceGetPageTitleProps } from "./types";

const getPageTitle = ({ titles = [], addDefaultTitle = true }: InterfaceGetPageTitleProps): TypeGetPageTitle => {
    const defaultTitle = process.env.REACT_APP_DEFAULT_TITLE;
    const pageTitle = [...titles, addDefaultTitle && defaultTitle]
        .filter((title) => ["string", "number"].includes(getType(title)))
        .join(" | ");

    return pageTitle || defaultTitle;
};

export default getPageTitle;
