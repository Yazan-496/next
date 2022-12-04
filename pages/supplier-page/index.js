import React, { useState } from "react"
import Footer from "../../assets/components/footer"
import Header from "../../assets/components/header"
import WelcomeMessage from "../../assets/components/welcome-message"
import Main from "./main"
import Tabs from "./tabs"
import Head from "next/head"

function SupplierIndex(props) {
  const [openModal, setOpenModal] = useState(false)
  const [SignIn, setSignIn] = useState(false)
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.abraacdn.com/assets/js/libraries/owl-carousel/owl.carousel.min.css?b204"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/js/libraries/owl-carousel/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/lightslider.css?b102" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/item-plugins.css" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/intlTelInput.css?b102" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/nouislider.min.css?b102" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/jquery.fancybox.min.css?b102" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/pages/buyer-store.css?v=1.0" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/new-design/en/supplier.css" />
      </Head>
      <Header signin={(SignIn) => setSignIn(SignIn)} />
      <div className="overlay"></div>
      <Main />
      <Tabs openModal={openModal} setOpenModal={(openModal) => setOpenModal(openModal)} />
      <Footer />
      <WelcomeMessage />
    </>
  )
}

export default SupplierIndex
