import { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import mensagesIngles from './../lang/en-US.json'
import mensagesEspañol from './../lang/es-ES.json'

export const LangContext = createContext()

export function LangContextProvider({ children }) {


  const langStorage = localStorage.getItem('lang')
  const [lang, setLang] = useState(langStorage === 'es-ES' ? mensagesEspañol : mensagesIngles)
  const [locale, setLocale] = useState(langStorage === 'es-ES' ? 'es-ES' : 'en-US')


  const handleLanguage = (language) => {
    switch (language) {
      case 'en-US':
        setLang(mensagesIngles)
        setLocale('en-US')
        localStorage.setItem('lang', 'en-US')
        break
      case 'es-ES':
        setLang(mensagesEspañol)
        setLocale('es-ES')
        localStorage.setItem('lang', 'es-ES')
        break
      default:
        setLang(mensagesIngles)
        setLocale('en-US')
        localStorage.setItem('lang', 'en-US')
    }
  }
  const data = { handleLanguage, locale }

  return (
    <LangContext.Provider value={data}>
      <IntlProvider locale={locale} messages={lang}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  )
}