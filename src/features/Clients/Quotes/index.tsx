import { useEffect } from "react";
import loadable from "@loadable/component";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import { Loading } from "@rrkallan/ui-library";
import { fetchClientsQuotes } from "features/Clients/clientsSlice";
import { getQuotesIsLoaded, getQuote } from "features/Clients/clientsSelector";
import style from "./resources/styles/quote.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

function Quotes(): JSX.Element {
    const dispatch = useAppDispatch();
    const isLoaded = useAppSelector(getQuotesIsLoaded);
    const quote = useAppSelector(getQuote);

    useEffect(() => {
        if (!isLoaded) dispatch(fetchClientsQuotes({ key: "quotes" }));
    }, [dispatch, isLoaded]);

    return (
        <Container
            containerElementTag="section"
            unitElementTag="article"
            classNameUnit={style.container}
            variant="black"
            textColor="white"
            fullWidth
        >
            <p className={style.unit}>
                <q className={style.unit}>{quote?.text}</q>
            </p>
            <p className={style.unit}>
                <span>
                    {quote?.person?.name} - {quote?.person?.function}, {quote?.person?.client}
                </span>
            </p>
        </Container>
    );
}

export default Quotes;
