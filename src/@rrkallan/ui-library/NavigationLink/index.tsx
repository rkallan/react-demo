import { useState, useEffect, MouseEvent } from "react";
import { NavLink, NavLinkProps, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { getType } from "@rrkallan/js-helpers";

interface InterfaceNavigationLinkProps extends NavLinkProps {
    setTabIndex?: boolean;
}

function NavigationLink({ children, to, onClick, setTabIndex = false, ...props }: InterfaceNavigationLinkProps): JSX.Element {
    const location = useLocation();
    const { pathname, hash, search } = location;
    const resolved = useResolvedPath(to);
    const isActive = !!useMatch({ path: resolved.pathname, end: true });
    const [state, setState] = useState(() => {
        return {
            referer: { pathname, hash, search },
        };
    });

    const onClickHandlerNavLink = (event: MouseEvent<HTMLAnchorElement>) => {
        if (isActive) {
            event.preventDefault();
            return;
        }
        event.currentTarget.blur();

        if (onClick && getType(onClick) === "function") onClick(event);
    };

    useEffect(() => {
        const newStateObject = { referer: { pathname, hash, search } };
        setState(() => newStateObject);
    }, [pathname, hash, search]);

    return (
        <NavLink
            onClick={onClickHandlerNavLink}
            to={to}
            state={state}
            {...props}
            variant={isActive ? "is-active" : undefined}
            tabIndex={setTabIndex && isActive ? -1 : 0}
        >
            {children}
        </NavLink>
    );
}

export default NavigationLink;
