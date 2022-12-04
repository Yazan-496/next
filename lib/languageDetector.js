import languageDetector from "next-language-detector"
import i18nextConfig from "../next-i18next.config"
import { useRouter } from "next/router"

// const handleChangeLocale = () => {}
// const currentLocale = router?.locale
const locales = ["en", "ar"]
export default languageDetector({
  fallbackLng: i18nextConfig?.i18n?.defaultLocale || "en",
  supportedLngs: i18nextConfig?.i18n?.locales || locales
})
