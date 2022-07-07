import { apiCall, removeStorageItem } from "@rrkallan/js-helpers";

const logoutExternalSource = async (logoutUrl, sourceName) => {
    await apiCall({
        url: logoutUrl,
        mode: "cors",
    });

    removeStorageItem(`${sourceName}Token`);
};

export default logoutExternalSource;
