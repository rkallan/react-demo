import { useEffect, useState } from "react";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import { useScrollPosition } from "@rrkallan/react-hooks";
import styles from "./resources/styles/hero.module.scss";
import { InterfaceHeroProps } from "./types";

const PageHeader = loadable(() => import(/* webpackChunkName: "PageHeader" */ "components/PageHeader"), {
    fallback: <Loading />,
});

function Hero({ variant, fullWidth, textColor, hero }: InterfaceHeroProps): JSX.Element {
    const { scrollPositionY } = useScrollPosition();
    const [headerVariant, setHeaderVariant] = useState(() => "default");
    const [changeOnPosition] = useState(() => 450);

    useEffect(() => {
        if (scrollPositionY > changeOnPosition) setHeaderVariant(() => "lower");
        if (scrollPositionY <= changeOnPosition - 100) setHeaderVariant(() => "default");
    }, [changeOnPosition, scrollPositionY]);

    return (
        <PageHeader variant={variant} fullWidth={fullWidth} textColor={textColor}>
            <div className={styles.container} variant={headerVariant}>
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
