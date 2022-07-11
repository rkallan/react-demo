import { useState, useRef, useLayoutEffect } from "react";
import { useAppDispatch } from "Store/hooks";
import { NavigationLink } from "@rrkallan/ui-library";
import { useBoundingClientRect } from "@rrkallan/react-hooks";
import { setElementClientRect } from "features/layout/layoutSlice";
import footerMenu from "./resources/data";
import styles from "./resources/styles/footer.module.scss";

function Footer(): JSX.Element {
    const dispatch = useAppDispatch();
    const footerRef = useRef<HTMLDivElement>(null);
    const { height } = useBoundingClientRect({ element: footerRef, delay: 5 }) || {};
    const [currentYear] = useState(() => new Date().getFullYear());

    useLayoutEffect(() => {
        dispatch(setElementClientRect({ element: "footer", height }));
    }, [dispatch, height]);

    return (
        <footer className={styles.container} ref={footerRef}>
            <section className={styles.unit}>
                <address className={styles.infoContainer}>
                    <ul className={styles.infoUnit}>
                        <li className={styles.item}>
                            <span className={styles.text}>Kwattaweg 655</span>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.text}>Paramaribo</span>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.text} variant="font-title">
                                Cin3ma RRK
                            </span>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="mailto:info@cin3ma-rrk.com">
                                <span className={styles.text}>info@cin3ma-rrk.com</span>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="tel:+597463737">
                                <span className={styles.text}>+597 463737</span>
                            </a>
                        </li>
                    </ul>
                </address>
            </section>
            <section className={styles.unit} variant="legal">
                <p className={styles.content}>{currentYear} Copyright © RR Kallan. All Rights Reserved.</p>
                {!!footerMenu && (
                    <ul className={styles.menu}>
                        {footerMenu?.map(({ id, title, url, exact }) => (
                            <li key={id} className={styles.item}>
                                <NavigationLink className={styles.link} end={exact} to={url}>
                                    <span className={styles.text}>{title}</span>
                                </NavigationLink>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </footer>
    );
}

export default Footer;
