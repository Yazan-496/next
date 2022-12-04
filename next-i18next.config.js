// const i18n = require("i18react")
// const LanguageDetector = require("i18next-browser-languagedetector")
// const backend = require("i18next-http-backend")
// const axios = require("axios")
// const locales = []
// const loadResources = async (locale) => {
//   return await axios
//     .get(`https://ramaaz.dev/e-wallet-staginv3/category_content_service/public/api/v1/languages/translation_files_content`)
//     .then((response) => {
//       const result = { nodata: "nodata" }
//       const res = response?.data?.data
//       if (locale === "ar") {
//         return JSON.stringify(res?.ar)
//       } else if (locale === "en") {
//         return JSON.stringify(res?.en)
//       }
//     })
//     .catch((error) => {
//       //  // console.log(error)
//     })
// }

// const backendOptions = {
//   loadPath: "{{lng}}|{{ns}}",
//   request: (options, url, payload, callback) => {
//     try {
//       const [lng] = url.split("|")
//       loadResources(lng).then((response) => {
//         callback(null, {
//           data: response,
//           status: 200
//         })
//       })
//     } catch (e) {
//       console.error(e, "error")
//       callback(null, {
//         status: 500
//       })
//     }
//   }
// }

// module.exports = {
//   i18n: {
//     serializeConfig: false,
//     useSuspense: false,
//     backend: backendOptions,
//     fallbackLng: "en",
//     debug: false,
//     defaultLocale: "en",
//     load: "languageOnly",
//     ns: ["common"],
//     defaultNS: "common",
//     interpolation: {
//       escapeValue: false,
//       formatSeparator: ","
//     }
//   },
//   debug: true,
//   ns: ["common"],
//   use: [backend]
// }
