import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en'
import ar from './locales/ar'

const languageDetector = new LanguageDetector()
languageDetector.addDetector({
  name: 'customDetector',
  lookup() {
    // Check localStorage first
    const stored = localStorage.getItem('preferredLanguage')
    if (stored) return stored

    // Then check browser language
    const browserLang = navigator.language
    return browserLang.startsWith('ar') ? 'ar' : 'en'
  },
  cacheUserLanguage(lng) {
    localStorage.setItem('preferredLanguage', lng)
  }
})

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    // Define language direction
    dir: (language) => {
      return language === 'ar' ? 'rtl' : 'ltr'
    }
  })

export default i18n
