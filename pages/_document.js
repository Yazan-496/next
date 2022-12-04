import Document, { Html, Head, Main, NextScript } from "next/document"
import i18nextConfig from "../next-i18next.config"

class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__?.locale || i18nextConfig?.i18n?.defaultLocale || "en"
    let GTM_ID = process.env.NEXT_PUBLIC_GTM

    return (
      <Html lang={currentLocale}>
        <Head>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}', {
                page_path: window.location.pathname,
              });
            `
            }}
          /> */}
          <title>Wholesale Market For B2B Suppliers, Wholesalers in Dubai, UAE - Abraa</title>
          <link href="https://s101.abraacdn.com/files/abraa-logos.png" rel="preload" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://s101.abraacdn.com" rel="preconnect" />
          <link href="https://assets.abraacdn.com" rel="preconnect"></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://s101.abraacdn.com/files/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://s101.abraacdn.com/files/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://s101.abraacdn.com/files/favicon-16x16.png"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/flags/flags.min.css?b204"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css?b105"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/nice.select.css?b204"
          />
          <link rel="stylesheet" type="text/css" href="https://assets.abraacdn.com/assets/css/select2.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/styles.css?b204"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/js/libraries/owl-carousel/owl.carousel.min.css?b204"
          />
          <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/font-awesome.min.css?b204" />
          <link
            rel="stylesheet"
            href="https://assets.abraacdn.com/assets/css/fonts/remixicon/remixicon.css?b204"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/bootstrap.min.css?b204"
          />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/plugins.css?v=1.4"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/pages/common.css?v=6.204"
          />
          <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css?b208" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/js/libraries/multiselect/bootstrap-multiselect.css?b208"
          />
          <link
            rel="stylesheet"
            href="https://assets.abraacdn.com/assets/css/new-design/en/common.css?b208"
          />
          <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/new-design/en/home.css?b213" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/selectstyle.css?b206"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/library/toast-master/css/jquery.toast.css"
          />
          <link
            rel="stylesheet"
            href="https://assets.abraacdn.com/assets/css/new-design/en/custom-css.css?b211"
          />

          {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          /> */}
          <link
            rel="stylesheet"
            href="https://assets.abraacdn.com/assets/css/font-awesome.min.css?b204"
          ></link>
          <link
            data-react-helmet="true"
            rel="icon"
            href="https://s101.abraacdn.com/files/favicon-32x32.png"
          />
          <link href="https://assets-useast2.postmarkapp.com" rel="preconnect"></link>
          <link href="https://fonts.googleapis.com" rel="preconnect"></link>
          <link href="https://s101.abraacdn.com/files/abraa-logos.png" rel="preload"></link>
          <link href="https://s101.abraacdn.com" rel="preconnect"></link>
          <link href="https://assets.abraacdn.com" rel="preconnect"></link>

          <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`
            }}
          /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
