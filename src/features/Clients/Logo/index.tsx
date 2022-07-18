import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/logo.module.scss";
import content from "../resources/data/client";

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@rrkallan/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

function Logo(): JSX.Element {
    const { clients } = content;

    return (
        <section className={styles.container}>
            {clients.map((client) => {
                const { id, url, name } = client;
                const LogoImage = client.logo;

                return (
                    <article className={styles.unit} key={id}>
                        <NavigationLink className={styles.link} to={{ pathname: url }} target="_blank" title={name}>
                            <figure>
                                <LogoImage title={name} />
                            </figure>
                        </NavigationLink>
                    </article>
                );
            })}
        </section>
    );
}

export default Logo;
