import { Language } from '@/types';

// Import translation data from JSON files
import enTranslations from '@/translations/en.json';
import ruTranslations from '@/translations/ru.json';
import uaTranslations from '@/translations/ua.json';
import cnTranslations from '@/translations/cn.json';
import trTranslations from '@/translations/tr.json';

// Translation data
const translations: Record<Language, Record<string, unknown>> = {
  en: enTranslations,
  ru: ruTranslations,
  ua: uaTranslations,
  cn: cnTranslations,
  tr: trTranslations
};

// Helper function to get nested translation
const getNestedTranslation = (obj: Record<string, unknown>, path: string): string => {
  const keys = path.split('.');
  let result: unknown = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && result !== null && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path; // Return the path if translation not found
    }
  }
  
  return typeof result === 'string' ? result : path;
};

export const getTranslation = (language: Language): Record<string, unknown> => {
  return translations[language] || translations.en;
};

export const getTranslationByKey = (language: Language, key: string): string => {
  const translation = translations[language] || translations.en;
  return getNestedTranslation(translation, key);
};

export const getLanguageFromStorage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const stored = localStorage.getItem('language');
  if (stored && ['en', 'ru', 'ua', 'cn', 'tr'].includes(stored)) {
    return stored as Language;
  }
  
  return 'en';
};

export const setLanguageToStorage = (language: Language): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', language);
}; 