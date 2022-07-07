import convertObjectKeys from "../../convertObjectKeys";
import { validations } from "../../validations";

const getHeadersRequest = async ({ headers }) => {
    if (validations.isEmpty(headers)) return undefined;

    const headersRequest = await convertObjectKeys({ data: headers, convertType: "lowerCase" });

    return headersRequest;
};

export default getHeadersRequest;
