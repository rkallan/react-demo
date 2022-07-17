import { Outlet } from "react-router-dom";
import styles from "./resources/styles/error.module.scss";

function Error(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.unit} variant="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Error;
