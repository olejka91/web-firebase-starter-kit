import i18next from "i18next";
import resources from "./languages";

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: "en", // 'en' | 'es'
  // Using simple hardcoded resources for simple example
  resources
});

export default i18next;
