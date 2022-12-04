import React from "react"
import Footer from "../../../assets/components/footer"
import Header from "../../../assets/components/header"
import Main from "./main"
import Head from "next/head"

function Index() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/service-responsive.css?v=B105"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/service-style.css?v=B101"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/service-animate.css?v=b101"
        />
      </Head>
      <Header />
      <div className="overlay" />
      <Main />
      <Footer />
    </>
  )
}

export default Index
