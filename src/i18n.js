import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from './locales/tr.json';
import en from './locales/en.json';
import de from './locales/de.json';
import cs from './locales/cs.json';
import pl from './locales/pl.json';

const resources = {
  tr: { translation: tr },
  en: { translation: en },
  de: { translation: de },
  cs: { translation: cs },
  pl: { translation: pl },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['tr', 'en', 'de', 'cs', 'pl'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'dutyinsight_lang',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

export const LANGUAGES = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷', short: 'TR' },
  { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', short: 'DE' },
  { code: 'cs', label: 'Čeština', flag: '🇨🇿', short: 'CS' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱', short: 'PL' },
];
