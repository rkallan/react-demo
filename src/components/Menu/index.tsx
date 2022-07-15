import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent } from "react";
import { keyEvent, getParentElementWithAttributeValue } from "@rrkallan/js-helpers";
import { NavigationLink } from "@rrkallan/ui-library";
import InterfaceOnOutSideClick from "./types";
import menu from "./resources/data/menu.json";
import styles from "./resources/styles/menu.module.scss";

function Menu(): JSX.Element | null {
    const [menuStateActive, setMenuStateActive] = useState(() => false);

    const onKeyDownHandlerMobileButton = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event?.type === "keydown" && ![keyEvent.enter, keyEvent.spacebar].includes(event?.key)) return;

        event.preventDefault();

        setMenuStateActive(() => !menuStateActive);
    };

    const onClickHandlerMobileButton = () => setMenuStateActive(() => !menuStateActive);

    const onClickHandlerNavLink = (event: MouseEvent<HTMLAnchorElement>) => {
        const { currentTarget } = event || {};
        currentTarget.blur();

        if (menuStateActive) onClickHandlerMobileButton();
    };

    const onOutSideClick: EventListener = useCallback(
        (event: InterfaceOnOutSideClick) => {
            if (event?.type === "keydown" && event?.key !== keyEvent.esc) return;

            const element = event?.target || undefined;
            const hasParentElementMobileButton = !!getParentElementWithAttributeValue(element, "variant", "mobile-button");

            if (!hasParentElementMobileButton) setMenuStateActive(!menuStateActive);
        },
        [menuStateActive]
    );

    useEffect(() => {
        const listenerKey = menuStateActive ? "addEventListener" : "removeEventListener";

        window.document[listenerKey]("click", onOutSideClick);
        window.document[listenerKey]("keydown", onOutSideClick);

        return () => {
            window.document.removeEventListener("click", onOutSideClick);
            window.document.removeEventListener("keydown", onOutSideClick);
        };
    }, [menuStateActive, onOutSideClick]);

    if (!menu?.length) return null;

    return (
        <nav className={styles.container}>
            <div className={styles.mobileButtonContainer}>
                <button
                    className={styles.mobileButtonUnit}
                    type="button"
                    onClick={onClickHandlerMobileButton}
                    onKeyDown={onKeyDownHandlerMobileButton}
                    variant="mobile-button"
                    title=" rakkk"
                >
                    <div className={styles.iconContainer} state={`${menuStateActive ? "is" : "in"}-active`}>
                        <span className={styles.iconUnit} />
                        <span className={styles.iconUnit} />
                        <span className={styles.iconUnit} />
                        <span className={styles.iconUnit} />
                    </div>
                </button>
            </div>
            <ul className={styles.unit} state={`${menuStateActive ? "is" : "in"}-active`}>
                {menu?.map(({ id, title, url, exact }) => (
                    <li key={id} className={styles.item}>
                        <NavigationLink className={styles.link} onClick={onClickHandlerNavLink} end={exact} to={url} setTabIndex>
                            <span className={styles.text}>{title}</span>
                        </NavigationLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
