/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/hero.module.scss";
import { InterfaceHeroProps } from "./types";

const PageHeader = loadable(() => import(/* webpackChunkName: "PageHeader" */ "components/PageHeader"), {
    fallback: <Loading />,
});

function Hero({ variant, fullWidth, textColor, hero }: InterfaceHeroProps): JSX.Element {
    return (
        <PageHeader variant={variant} fullWidth={fullWidth} textColor={textColor}>
            <div className={styles.container}>
                <h1 className={styles.unit} variant="title">
                    {hero.title}
                </h1>
                <div className={styles.unit} variant="image">
                    <figure className={styles.imageContainer}>
                        <img className={styles.image} src={hero.image} alt="Hero backgropund image" aria-hidden />
                    </figure>
                </div>
            </div>
        </PageHeader>
    );
}

export default Hero;
