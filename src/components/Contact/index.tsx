import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/contact.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const ContactForm = loadable(() => import(/* webpackChunkName: "ContactForm" */ "./ContactForm"), {
    fallback: <Loading />,
});

function Contact(): JSX.Element {
    return (
        <Container classNameContainer={styles.container} classNameUnit={styles.unit} containerElementTag="article">
            <h4 className={styles.unit} variant="title">
                Question? We are here to help!
            </h4>
            <section className={styles.unit} variant="form">
                <ContactForm />
            </section>
        </Container>
    );
}

export default Contact;
