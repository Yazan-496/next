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
          href="https://assets.abraacdn.com/assets/css/static-pages/fax-style.css?b102"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/fax-responsive.css?b102"
        ></link>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Index
