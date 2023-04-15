import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from 'i18next-browser-languagedetector'


const resources = {
    en: {
        translation: {
            "login": "Login"
        }
    },
    uz: {
        translation: {
            "login": "Kirish"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(detector)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        detection: {order: ['cookie', 'localStorage'], caches: ["cookie"]}
    });

export default i18n;