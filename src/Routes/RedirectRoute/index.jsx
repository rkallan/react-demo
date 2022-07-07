import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function RedirectRoute({ redirect }) {
    const [referer] = useState(() => {
        return {
            href: window.location.href,
        };
    });
    const navigate = useNavigate();

    useEffect(() => {
        const state = {
            referer,
        };

        navigate(redirect, { replace: true, state });
    }, [navigate, redirect, referer]);

    return null;
}

RedirectRoute.propTypes = {
    redirect: PropTypes.string.isRequired,
};

export default RedirectRoute;
