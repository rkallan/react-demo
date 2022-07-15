import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useRef, useLayoutEffect } from "react";
import { keyEvent, getParentElementWithAttributeValue } from "@rrkallan/js-helpers";
import { NavigationLink } from "@rrkallan/ui-library";
import InterfaceOnOutSideClick from "./types";
import menu from "./resources/data/menu.json";
import styles from "./resources/styles/menu.module.scss";

function Menu(): JSX.Element | null {
    const menuContainerRef = useRef<HTMLUListElement>(null);
    const [menuStateActive, setMenuStateActive] = useState(() => false);
    const [menuItems, setMenuItems] = useState((): HTMLAnchorElement[] => []);

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
            if (event?.type === "keydown" && [keyEvent.arrowLeft, keyEvent.arrowRight].includes(event?.key)) {
                const lastKey = menuItems.length - 1;

                menuItems.forEach((element: HTMLAnchorElement, key: number) => {
                    if (element.isEqualNode(event.target as Node)) {
                        let newKeyItemFocus = key;
                        if (event.key === keyEvent.arrowLeft) newKeyItemFocus = key - 1;
                        if (event.key === keyEvent.arrowRight) newKeyItemFocus = key + 1;

                        if (newKeyItemFocus > lastKey) newKeyItemFocus = 0;
                        if (newKeyItemFocus === -1) newKeyItemFocus = lastKey;

                        menuItems[newKeyItemFocus].focus();
                    }
                });

                return;
            }

            if (event?.type === "keydown" && event?.key !== keyEvent.esc) return;

            const element = event?.target || undefined;
            const hasParentElementMobileButton = !!getParentElementWithAttributeValue(element, "variant", "mobile-button");

            if (!hasParentElementMobileButton) setMenuStateActive(!menuStateActive);
        },
        [menuItems, menuStateActive]
    );

    useLayoutEffect(() => {
        const allItems = menuContainerRef.current?.querySelectorAll("a") || [];
        const notActiveItems: HTMLAnchorElement[] = [];
        allItems.forEach((element: HTMLAnchorElement) => {
            if (!element.hasAttribute("variant")) {
                notActiveItems.push(element);
            }
        });
        setMenuItems(notActiveItems);
    }, []);

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
                >
                    <div className={styles.iconContainer} state={`${menuStateActive ? "is" : "in"}-active`}>
                        <span className={styles.iconUnit} />
                        <span className={styles.iconUnit} />
                        <span className={styles.iconUnit} />
                        <span className={styles.iconUnit} />
                    </div>
                </button>
            </div>
            <ul ref={menuContainerRef} className={styles.unit} state={`${menuStateActive ? "is" : "in"}-active`}>
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
