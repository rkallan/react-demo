/* eslint-disable @typescript-eslint/no-unused-vars */
import getBodyRequest from "./getBodyRequest";
import getHeadersRequest from "./getHeadersRequest";
import handleResponse from "./handleResponse";
import { validations } from "../validations";
import { objectAsUrlParams } from "../urlParams";

const apiCall = async ({
    url,
    method = "POST",
    headers = {},
    credentials = "omit",
    cache = "default",
    mode = "cors",
    redirect = "follow",
    referrerPolicy = "strict-origin-when-cross-origin",
    body = {},
    signal = undefined,
}) => {
    if (validations.isEmpty(url)) return false;

    const headersRequest = await getHeadersRequest({ headers });
    const contentType = (validations.isNotEmpty(headersRequest) && headersRequest?.["content-type"]?.split(";")?.shift()) || undefined;
    const bodyRequest = getBodyRequest({ body, contentType, method });
    const urlParams = ["get", "delete"].includes(method.toLowerCase()) ? objectAsUrlParams(body, !url.includes("?")) : "" || "";

    const apiRequestOptions = {
        method: method?.toUpperCase() || "POST",
        credentials,
        cache,
        mode,
        redirect,
        referrerPolicy,
        headers: headersRequest,
        body: bodyRequest,
        signal,
    };

    const apiResult = await fetch(`${url}${urlParams || ""}`, apiRequestOptions)
        .then(handleResponse)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });

    return apiResult;
};

export default apiCall;
