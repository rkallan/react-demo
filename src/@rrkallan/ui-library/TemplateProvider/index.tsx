import InterfaceTemplateProvider from "./types";
import "../resources/styles/default/_default.scss";

function TemplateProvider({ children }: InterfaceTemplateProvider): JSX.Element {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}

export default TemplateProvider;
