import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from './en.json';
import commonRU from './ru.json';
import commonUZ from './uz.json';

const resources = {
  ru: { translation: commonRU },
  uz: { translation: commonUZ },
  en: { translation: commonEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'uz',
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
