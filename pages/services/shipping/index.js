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
          href="https://assets.abraacdn.com/assets/css/pages/shipping_service.css?v=1.5"
        ></link>
      </Head>

      <Header />
      <div className="overlay" />
      <Main />
      <Footer />
    </>
  )
}

export default Index
