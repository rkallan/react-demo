import { useEffect, useState } from "react";
import { useScrollPosition } from "@rrkallan/react-hooks";
import HtmlToReactParser from "html-to-react";
import styles from "./resources/styles/hero.module.scss";
import { InterfaceHeroProps } from "./types";

const htmlToReactParser = new HtmlToReactParser.Parser();

function Hero({ title, image }: InterfaceHeroProps): JSX.Element {
    const { scrollPositionY } = useScrollPosition();
    const [headerVariant, setHeaderVariant] = useState(() => "default");
    const [changeOnPosition] = useState(() => 450);
    const titleHtml = htmlToReactParser.parse(title);

    useEffect(() => {
        if (scrollPositionY > changeOnPosition) setHeaderVariant(() => "lower");
        if (scrollPositionY <= changeOnPosition - 150) setHeaderVariant(() => "default");
    }, [changeOnPosition, scrollPositionY]);

    return (
        <article className={styles.container} variant={headerVariant}>
            <h1 className={styles.unit} variant="title">
                {titleHtml}
            </h1>
            <div className={styles.unit} variant="image">
                <figure className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt="Hero background image" aria-hidden />
                </figure>
            </div>
        </article>
    );
}

export default Hero;
