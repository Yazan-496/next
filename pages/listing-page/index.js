import React from "react"
import Footer from "../../assets/components/footer"
import Header from "../../assets/components/header"
import WelcomeMessage from "../../assets/components/welcome-message"
import Main from "./main"
import Modal from "./modal"
import Head from "next/head"

function ListingIndex() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/intlTelInput.css?b102" />
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/nouislider.min.css?b102" />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/js/libraries/owl-carousel/owl.carousel.min.css?b102"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/new-design/en/category.css?b103"
        />
      </Head>
      <Header />
      <div className="overlay" />
      <Main />
      <Footer />
      <WelcomeMessage />
      <div id="brf-toggler-container">
        <a href="javascript:void(0);">
          <i className="fa fa-question-circle" />
        </a>
      </div>

      <Modal />
    </>
  )
}

export default ListingIndex
