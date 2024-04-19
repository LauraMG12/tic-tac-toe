/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './lang/en.json';
import translationES from './lang/es.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
});

export default i18n;
