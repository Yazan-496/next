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
          href="https://assets.abraacdn.com/assets/css/plugins.css?v=1.4"
        />
        <link
          href="https://assets.abraacdn.com/assets/css/pages/all-categories.css?v=b101"
          rel="stylesheet"
        />
        <link href="https://assets.abraacdn.com/assets/css/responsive.css?v=b101" rel="stylesheet" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Index
