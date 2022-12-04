import React from "react"
import Footer from "../../../assets/components/footer"
import Header from "../../../assets/components/header"
import Main from "./main"
import Head from "next/head"
function Index() {
  return (
    <>
      <Head>
        <link href="https://assets.abraacdn.com/assets/css/pages/events-list.css?v=102" rel="stylesheet" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Index
