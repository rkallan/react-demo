import styles from "./resources/styles/logo.module.scss";
import { ReactComponent as Apple } from "./resources/svg/apple.svg";
import { ReactComponent as Audi } from "./resources/svg/audi.svg";
import { ReactComponent as Bentley } from "./resources/svg/bentley.svg";
import { ReactComponent as Ferrari } from "./resources/svg/ferrari.svg";
import { ReactComponent as Feyenoord } from "./resources/svg/feyenoord.svg";
import { ReactComponent as GoereeOverflakkee } from "./resources/svg/goeree-overflakkee.svg";
import { ReactComponent as Google } from "./resources/svg/google.svg";
import { ReactComponent as Heineken } from "./resources/svg/heineken.svg";
import { ReactComponent as Klm } from "./resources/svg/klm.svg";
import { ReactComponent as Maserati } from "./resources/svg/maserati.svg";
import { ReactComponent as Netflix } from "./resources/svg/netflix.svg";
import { ReactComponent as Shell } from "./resources/svg/shell.svg";

import { TypeLogoProps } from "./types";

const clientLogo = {
    apple: (props: TypeLogoProps): JSX.Element => <Apple className={styles.icon} {...props} />,
    audi: (props: TypeLogoProps): JSX.Element => <Audi className={styles.icon} {...props} />,
    bentley: (props: TypeLogoProps): JSX.Element => <Bentley className={styles.icon} {...props} />,
    ferrari: (props: TypeLogoProps): JSX.Element => <Ferrari className={styles.icon} {...props} />,
    feyenoord: (props: TypeLogoProps): JSX.Element => <Feyenoord className={styles.icon} {...props} />,
    google: (props: TypeLogoProps): JSX.Element => <Google className={styles.icon} {...props} />,
    goereeOverflakkee: (props: TypeLogoProps): JSX.Element => <GoereeOverflakkee className={styles.icon} {...props} />,
    heineken: (props: TypeLogoProps): JSX.Element => <Heineken className={styles.icon} {...props} />,
    klm: (props: TypeLogoProps): JSX.Element => <Klm className={styles.icon} {...props} />,
    maserati: (props: TypeLogoProps): JSX.Element => <Maserati className={styles.icon} {...props} />,
    netflix: (props: TypeLogoProps): JSX.Element => <Netflix className={styles.icon} {...props} />,
    shell: (props: TypeLogoProps): JSX.Element => <Shell className={styles.icon} {...props} />,
};

export default clientLogo;
