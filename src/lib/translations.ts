import esTranslations from "@/lang/es-ES.json";
import enTranslations from "@/lang/en-US.json";

export const translations = {
  es: esTranslations,
  en: enTranslations,
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.es;
