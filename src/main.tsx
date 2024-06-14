import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./assets/translations/es/global.json";
import global_en from "./assets/translations/en/global.json";
import global_it from "./assets/translations/it/global.json";
import global_fr from "./assets/translations/fr/global.json";
import global_po from "./assets/translations/po/global.json";
import global_de from "./assets/translations/de/global.json";

i18next
  .init({
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
      it: {
        global: global_it,
      },
      fr: {
        global: global_fr,
      },
      po: {
        global: global_po,
      },
      de: {
        global: global_de,
      },
    },
  })
  .then(() => {
    console.log("i18n initialized");
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
