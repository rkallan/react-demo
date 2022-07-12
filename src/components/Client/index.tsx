import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/client.module.scss";
import content from "./resources/data/client";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Logo = loadable(() => import(/* webpackChunkName: "Logo" */ "./Logo"), {
    fallback: <Loading />,
});

function Client(): JSX.Element {
    const { title, text } = content;

    return (
        <Container
            classNameContainer={styles.container}
            classNameUnit={styles.unit}
            unitElementTag="article"
            variant={content.variant}
            textColor={content.textColor}
        >
            <article className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </article>

            <Logo />
        </Container>
    );
}

export default Client;
