import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../../assets/components/footer"
import { store } from "../../redux/storeConfig/store"
import { useRouter } from "next/router"
import Header from "../../assets/components/header"
import WelcomeMessage from "../../assets/components/welcome-message"
import Main from "./main"

import Head from "next/head"
import * as gtag from "../../lib/gtag"

function IndexMain(props) {
  const router = useRouter()
  let userLocaleStorage
  const user = useSelector((store) => store?.Reducer?.username)
  const ref = useSelector((store) => store?.Reducer?.ref)
  console.log("dfdf")
  useEffect(() => {
    if (typeof window !== undefined) {
      if (JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData !== null) {
        userLocaleStorage = JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.username
        store.dispatch({
          type: "NAME",
          action: userLocaleStorage
        })
      } else {
        //    router.push("/auth/login")
      }
    }
  }, [])

  useEffect(() => {
    // console.log(ref) // console.log(user, "user")
    // console.log(userLocaleStorage, "userLocaleStorage")
  }, [ref])
  return (
    <>
      <Head></Head>
      <Header username={userLocaleStorage} />
      <div className="overlay" />
      <Main />
      <Footer />
      <WelcomeMessage />
    </>
  )
}

export default IndexMain
