import { Link } from "react-router-dom";
import styles from "./resources/styles/logo.module.scss";
import content from "../resources/data/client";

function Logo(): JSX.Element {
    const { clients } = content;

    return (
        <section className={styles.container}>
            {clients.map((client) => {
                const { id, url, name } = client;
                const LogoImage = client.logo;

                return (
                    <article className={styles.unit} key={id}>
                        <Link className={styles.link} to={{ pathname: url }} target="_blank" title={name}>
                            <figure>
                                <LogoImage title={name} />
                            </figure>
                        </Link>
                    </article>
                );
            })}
        </section>
    );
}

export default Logo;
