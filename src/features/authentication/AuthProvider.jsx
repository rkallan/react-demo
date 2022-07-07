import PropTypes from "prop-types";
import useAuthProvider from "./hooks/useAuthProvider";
import authContext from "./authContext";

function AuthProvider({ children }) {
    const auth = useAuthProvider();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
