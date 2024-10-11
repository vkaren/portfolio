import React from "react";
import ReactDOM from "react-dom/client";
// import { I18nextProvider, initReactI18next } from "react-i18next";
// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import global_es from "./translations/es/global.json";
// import global_en from "./translations/en/global.json";
import App from "@containers/App";
import "./styles/tailwind.css";

// i18n
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .init({
//     resources: {
//       es: {
//         global: global_es,
//       },
//       en: {
//         global: global_en,
//       },
//     },
//     fallbackLng: "es",
//     interpolation: {
//       escapeValue: false,
//     },
//   });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const render = (Component: React.ComponentType) => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

render(App);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require("./containers/App").default;
    render(NextApp);
  });
}
