import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import hi from "./locales/hi.json";

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: { en, hi },
  legacy: false,
  globalInjection: true,
});
