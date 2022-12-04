import languageDetector from "../lib/languageDetector"
import { useRouter } from "next/router"
import Link from "next/link"

// import { useTranslation } from "next-i18next"

import useTranslation from "next-translate/useTranslation"

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()
  const localeProps = locale
  const changeTo = router.locale === "en" ? "ar" : "en"
  const handleChangeLocale = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  const currentLocale = router?.locale
  const { t } = useTranslation("common")

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  return (
    <Link
      href={href}
      locale={currentLocale === "en" ? "ar" : "en"}
      // onClick={() => languageDetector.cache(locale)}
    >
      <a onClick={() => handleChangeLocale(changeTo)}>{t("auth.nav.language")}</a>
    </Link>
  )
}

export default LanguageSwitchLink
