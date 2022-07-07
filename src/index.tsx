import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { TemplateProvider } from "@rrkallan/ui-library";
import { store } from "Store";
import App from "App";
// import reportWebVitals from "reportWebVitals";

const helmetContext = {};
const applicationContainerFromHTMLFile = document.querySelector("#application") as HTMLDivElement;
const applicationContainerFromCode = document.createElement("div") as HTMLDivElement;

if (!applicationContainerFromHTMLFile) {
    applicationContainerFromCode.id = "application";
    applicationContainerFromCode.classList.add("application");
    document.body.prepend(applicationContainerFromCode);
}

const applicationContainer: HTMLDivElement = applicationContainerFromHTMLFile || applicationContainerFromCode;

const root = ReactDOM.createRoot(applicationContainer);
root.render(
    <StrictMode>
        <Provider store={store}>
            <HelmetProvider context={helmetContext}>
                <TemplateProvider>
                    <App />
                </TemplateProvider>
            </HelmetProvider>
        </Provider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
