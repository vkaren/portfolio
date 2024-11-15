import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/global.json";
import esTranslations from "./locales/es/global.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
  },
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;
