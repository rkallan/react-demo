import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/assignments.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Quote = loadable(() => import(/* webpackChunkName: "Quote" */ "components/Client/Quote"), {
    fallback: <Loading />,
});

function Assignments(): JSX.Element {
    return (
        <Container variant="black" textColor="white" fullWidth>
            <section className={styles.container}>
                <article>article 1</article>
                <article>article 1</article>
            </section>
            <Quote />
        </Container>
    );
}

export default Assignments;
