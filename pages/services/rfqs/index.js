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
          type="text/css"
          href="https://assets.abraacdn.com/assets/css/pages/buy-requests-list.css?v=1.2"
        />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/pages/seller_list.css?v=1.1" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.abraacdn.com/assets/css/flags/flags.min.css?b204"
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
