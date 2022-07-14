import styles from "./resources/styles/icons.module.scss";
import { ReactComponent as Check } from "./resources/svg/check.svg";
import { ReactComponent as Close } from "./resources/svg/close.svg";
import { ReactComponent as Alert } from "./resources/svg/alert.svg";
import { ReactComponent as ArrowDown } from "./resources/svg/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "./resources/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "./resources/svg/arrow-right.svg";
import { ReactComponent as ArrowUp } from "./resources/svg/arrow-up.svg";
import { ReactComponent as Chat } from "./resources/svg/chat.svg";
import { ReactComponent as Circle } from "./resources/svg/circle.svg";
import { ReactComponent as Clock } from "./resources/svg/clock.svg";
import { ReactComponent as Confirm } from "./resources/svg/confirm.svg";
import { ReactComponent as Email } from "./resources/svg/email.svg";
import { ReactComponent as Help } from "./resources/svg/help.svg";
import { ReactComponent as Hint } from "./resources/svg/hint.svg";
import { ReactComponent as Home } from "./resources/svg/home.svg";
import { ReactComponent as Loading } from "./resources/svg/loading.svg";
import { ReactComponent as Logout } from "./resources/svg/logout.svg";
import { ReactComponent as Password } from "./resources/svg/password.svg";
import { ReactComponent as Phone } from "./resources/svg/phone.svg";
import { ReactComponent as Search } from "./resources/svg/search.svg";
import { ReactComponent as Submit } from "./resources/svg/submit.svg";
import { ReactComponent as Trash } from "./resources/svg/trash.svg";
import { ReactComponent as User } from "./resources/svg/user.svg";
import { ReactComponent as SendEmail } from "./resources/svg/send-email.svg";
import { ReactComponent as SendIMMessage } from "./resources/svg/send-message.svg";

type TypeIconProps = {
    [key: string]: string | number;
};

const icons = {
    check: (props: TypeIconProps): JSX.Element => <Check className={styles.icon} {...props} />,
    close: (props: TypeIconProps): JSX.Element => <Close className={styles.icon} {...props} />,
    alert: (props: TypeIconProps): JSX.Element => <Alert className={styles.icon} {...props} />,
    arrowDown: (props: TypeIconProps): JSX.Element => <ArrowDown className={styles.icon} {...props} />,
    arrowLeft: (props: TypeIconProps): JSX.Element => <ArrowLeft className={styles.icon} {...props} />,
    arrowRight: (props: TypeIconProps): JSX.Element => <ArrowRight className={styles.icon} {...props} />,
    arrowUp: (props: TypeIconProps): JSX.Element => <ArrowUp className={styles.icon} {...props} />,
    chat: (props: TypeIconProps): JSX.Element => <Chat className={styles.icon} {...props} />,
    circle: (props: TypeIconProps): JSX.Element => <Circle className={styles.icon} {...props} />,
    clock: (props: TypeIconProps): JSX.Element => <Clock className={styles.icon} {...props} />,
    confirm: (props: TypeIconProps): JSX.Element => <Confirm className={styles.icon} {...props} />,
    email: (props: TypeIconProps): JSX.Element => <Email className={styles.icon} {...props} />,
    help: (props: TypeIconProps): JSX.Element => <Help className={styles.icon} {...props} />,
    hint: (props: TypeIconProps): JSX.Element => <Hint className={styles.icon} {...props} />,
    home: (props: TypeIconProps): JSX.Element => <Home className={styles.icon} {...props} />,
    loading: (props: TypeIconProps): JSX.Element => <Loading className={styles.icon} {...props} />,
    logout: (props: TypeIconProps): JSX.Element => <Logout className={styles.icon} {...props} />,
    password: (props: TypeIconProps): JSX.Element => <Password className={styles.icon} {...props} />,
    phone: (props: TypeIconProps): JSX.Element => <Phone className={styles.icon} {...props} />,
    search: (props: TypeIconProps): JSX.Element => <Search className={styles.icon} {...props} />,
    submit: (props: TypeIconProps): JSX.Element => <Submit className={styles.icon} {...props} />,
    trash: (props: TypeIconProps): JSX.Element => <Trash className={styles.icon} {...props} />,
    user: (props: TypeIconProps): JSX.Element => <User className={styles.icon} {...props} />,
    sendEmail: (props: TypeIconProps): JSX.Element => <SendEmail className={styles.icon} {...props} />,
    sendIMMessage: (props: TypeIconProps): JSX.Element => <SendIMMessage className={styles.icon} {...props} />,
    fallback: (props: TypeIconProps): JSX.Element => <SendIMMessage className={styles.icon} {...props} />,
};

export default icons;
