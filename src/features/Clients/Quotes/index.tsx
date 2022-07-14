import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import style from "./resources/styles/quote.module.scss";
import quotes from "./resources/data/quotes";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

function Quotes(): JSX.Element {
    const quote = quotes[0];

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
                <q className={style.unit}>{quote.text}</q>
            </p>
            <p className={style.unit}>
                <span>
                    {quote.person.name} - {quote.person.function}, {quote.person.client}
                </span>
            </p>
        </Container>
    );
}

export default Quotes;
