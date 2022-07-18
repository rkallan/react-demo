import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import { ReactComponent as SvgLogo } from "./resources/svg/logo.svg";
import styles from "./resources/styles/logo.module.scss";

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@rrkallan/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

function Logo(): JSX.Element {
    return (
        <figure className={styles.container}>
            <NavigationLink className={styles.link} to="/">
                <SvgLogo className={styles.svg} />
            </NavigationLink>
        </figure>
    );
}

export default Logo;
