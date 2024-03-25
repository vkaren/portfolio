import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import App from "@containers/App";
import "./index.css";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
