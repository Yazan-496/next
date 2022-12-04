import "remixicon/fonts/remixicon.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = true
import "../styles/css.css"
import "../styles/core.css"
import "../styles/cssNewDashboard/style.css"
import "../styles/cssNewDashboard/bootstrap.min.css"

/* New i18n -----> Start */
// import { createRoot } from "react-dom/client"
import "../i18n"
/* New i18n -----> End */

import { Provider } from "react-redux"
import { store } from "../redux/storeConfig/store"
import { appWithTranslation } from "next-i18next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import i18nextConfig from "../next-i18next.config"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Script from "next/script"
import nextI18NextConfig from "../next-i18next.config.js"
import { useRouter } from "next/router"
import TagManager, { TagManagerArgs } from "react-gtm-module"
import * as gtag from "../lib/gtag"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

/* New Loading -----> Start */

function Loading() {
  const router = useRouter()
  const currentLocale = router?.locale
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setLoading(true)
      }
    }
    const handleComplete = (url) => {
      if (url === router.asPath || url === `/${router?.locale}${router.asPath}`) {
        setLoading(false)
      }
    }
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  })

  return (
    loading && (
      <div className="spinner14-wrapper">
        <div className="spinner14"></div>
      </div>
    )
  )
}

/* New Loading -----> Start */
function MyApp({ Component, pageProps }) {
  /* New i18n -----> Start */

  // const root = createRoot(document.getElementById("__next"))

  /* New i18n -----> End */

  //<------------------------------------------------------------------>//
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL}`,
    cache: new InMemoryCache()
  })
  //<------------------------------------------------------------------>//
  // ----> Start ----> Initialization Google Analytics into Google Tag Manager
  const gtmId = process.env.NEXT_PUBLIC_GTM || ""
  const tagManagerArgs = (TagManagerArgs = {
    gtmId
  })
  const [text, setText] = useState(false)
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  // ----> End ---> Of  Initialization
  let userLocaleStorage
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      //  gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    router.events.on("hashChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("hashChangeComplete", handleRouteChange)
    }
  }, [router.events])
  const { defaultLocale, locale } = router
  const currentLocale = router?.locale || i18nextConfig?.i18n?.defaultLocale

  useEffect(() => {
    const dir = currentLocale === "ar" ? "rtl" : "ltr"
    document.querySelector("html").setAttribute("dir", dir)
  }, [locale])
  //   const user = JSON.parse(localStorage.getItem("USER_TOKEN1"))?.userData
  return (
    <Provider store={store}>
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WQ6QV3L');
      `}
      </Script> */}
      <ApolloProvider client={client}>
        <Loading />
        <Component {...pageProps} />
      </ApolloProvider>

      <ToastContainer
        toastStyle={{
          marginTop: "4rem",
          color: "black",
          borderRadius: "6px"
          // backgroundColor: "white"
          //    borderTopColor: "red"
        }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  )
}

export default MyApp

{
  /* <Script
       strategy="afterInteractive"
       src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM}`}
       />
       <Script
       id="gtag-init"
       strategy="afterInteractive"
       dangerouslySetInnerHTML={ { __html : `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GTM}', {
         page_path: window.location.pathname,
       });` } }
       />  */
}
