import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export function useLanguageDirection() {
  const { i18n } = useTranslation()
  
  useEffect(() => {
    // Update document direction when language changes
    document.documentElement.dir = i18n.dir()
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return i18n.dir()
}