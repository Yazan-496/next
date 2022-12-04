import React from "react"
import Footer from "../../../assets/components/footer"
import Header from "../../../assets/components/header"
import Main from "./main"
import Head from "next/head"
function Index() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/pages/buying_request.css?v=2.1" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/intlTelInput.css?b102" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Index
