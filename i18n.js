// import i18n from "i18next"
// import { initReactI18next } from "react-i18next"

// import Backend from "i18next-http-backend"
// import LanguageDetector from "i18next-browser-languagedetector"
// // don't want to use this?
// // have a look at the Quick start guide
// // for passing in lng and translations on init

// i18n
//   // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
//   // learn more: https://github.com/i18next/i18next-http-backend
//   // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     useSuspense: true,
//     debug: true,
//     initImmediate: true,
//     ns: ["common"],
//     defaultNS: ["common"],
//     fallbackLng: ["en"],
//     fallbackNS: false,
//     supportedLngs: false,
//     nonExplicitSupportedLngs: false,
//     load: "all",
//     preload: false,
//     simplifyPluralSuffix: true,
//     keySeparator: ".",
//     nsSeparator: ":",
//     pluralSeparator: "_",
//     contextSeparator: "_",
//     partialBundledLanguages: false,
//     saveMissing: false,
//     updateMissing: false,
//     saveMissingTo: "fallback",
//     saveMissingPlurals: true,
//     missingKeyHandler: false,
//     missingInterpolationHandler: false,
//     postProcess: false,
//     postProcessPassResolved: false,
//     returnNull: true,
//     returnEmptyString: true,
//     returnObjects: false,
//     joinArrays: false,
//     returnedObjectHandler: false,
//     parseMissingKeyHandler: false,
//     appendNamespaceToMissingKey: false,
//     appendNamespaceToCIMode: false,
//     // overloadTranslationOptionHandler: [Function: handle],
//     interpolation: {
//       escapeValue: false,
//       //   format: [Function: bound format],
//       prefix: "{{",
//       suffix: "}}",
//       formatSeparator: ",",
//       unescapePrefix: "-",
//       nestingPrefix: "$t(",
//       nestingSuffix: ")",
//       nestingOptionsSeparator: ",",
//       maxReplaces: 1000,
//       skipOnVariables: true
//     },
//     fallbackLng: "en",
//     debug: true
//   })

// export default i18n

module.exports = {
  locales: ["en", "ar"],
  defaultLocale: "en",
  pages: {
    "*": ["common"]
  }
}
