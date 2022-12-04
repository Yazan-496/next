import React, { useState, useEffect } from "react"
import { withRouter } from "next/router"
import PinInputs from "./PinInputs"
import { Button } from "reactstrap"
import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { _verifyPhoneNumber, _checkValidNumber, getToken, _confirmResetPhone } from "../../../redux/actions"
import Link from "next/link"

const PhoneNumber = (props) => {
  //   const handleSmallInputs = (value, setValue) => {
  //     const newValue = value.slice(0, 1)
  //     setValue(newValue)
  //   }
  const router = useRouter()
  const currentLocale = router?.locale
  const [username, setUserName] = useState(props.username)
  const [email, setEmail] = useState(props.email)
  //   const [email, setEmail] = useState(props.email)
  //   const [inputValue, setInputValue] = useState("")
  const [counter, setcounter] = useState(0)

  const [codePanel, setCodePanel] = useState(false)
  const [verificationId, setId] = useState(null)
  //   const [setToken, idToken] = useState(props?.idToken ? props?.idToken : null)
  const idToken = useSelector((state) =>
    state?.Reducer?.idToken?.action?.idToken ? state?.Reducer?.idToken?.action?.idToken : null
  )

  const [pin, setPin] = useState("")

  //   const setTokenId = (d) => {
  //     setToken(JSON.stringify(d.idToken))
  //   }
  //   const [sessionInfo, setSessionId] = useState(
  //     props.page === 5
  //       ? JSON.parse(localStorage.getItem("GET_SEESION"))?.sessionInfo
  //       : ""
  //      )
  const sessionInfo = useSelector((state) => state?.Reducer?.sessionInfo)
  useEffect(() => {
    pin.length === 6 &&
      getToken(
        { pin, sessionInfo },
        (d) => {
          // console.log("idToken")
        },
        (err) => {
          // console.log("err")
        }
      )
    setPin("")
  })

  return (
    <>
      {" "}
      <Head>
        <link href="https://www.abraa.com/assets/css/final-register.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/new-registration-new.css" />
      </Head>
      <div
        style={{
          marginTop: "36px"
        }}
        className="right_area_slider"
      >
        <div className="registration_success l-minimal l-minimal--valign" id="registration_success">
          <div className="l-minimal_wrap l-minimal_wrap--confetti">
            <header className="c-minimal-header">
              <div className="u-grid-cell">
                <Link href="/" locale={currentLocale}>
                  <a>
                    <img
                      alt="abraa"
                      title="abraa"
                      style={{ objectFit: "scale-down" }}
                      className="c-minimal-header_logo logo"
                      src="https://s101.abraacdn.com/files/abraa-logos.png"
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="u-grid-cell c-user-nav">
                <span className="c-user-nav_label">
                  <a className href="">
                    Request a Quote
                  </a>
                </span>
                <span className="c-user-nav_label">
                  <a className href="">
                    About
                  </a>
                </span>
                <a className="c-user-nav_login cta-btn" href="/auth/login">
                  Log in
                </a>
              </div>
            </header>
            <div className="hero sticky">
              <canvas className="confetti js-confetti" width={1349} height={344} />
            </div>
            <div className="u-box" style={{ textAlign: "center" }}>
              <h1 class="h1-elizeth u-margin-bottom-s">
                <span className="icon-in-text-checkmark"></span>A confirmition code sent to{" "}
                {router.query.mobile ? router.query.mobile : "your number"}
              </h1>
              {
                <PinInputs
                  setCodePanel={setCodePanel}
                  setPin={setPin}
                  onChange={() => setPin(pin)}
                  pin={pin}
                  setId={setId}
                  counter={counter}
                  setcounter={(data) => setcounter(data)}
                />
              }
              <Button
                className={`${idToken === null ? "disabled" : ""} `}
                style={{
                  width: "50%",
                  maxWidth: 356,
                  marginTop: 20,
                  marginLeft: 133,
                  height: " 36px",
                  fontSize: "larger"
                }}
                type="submit"
                color="primary"
                block
                disabled={idToken === null}
                onClick={() => {
                  if (idToken !== null) {
                    if (!props?.router?.query?.skip) {
                      //  // console.log(state.Reducer.idToken.action.idToken, "state")
                      _verifyPhoneNumber({ idToken }, (d) => {
                        //     _loginSuccessCallback(d),
                        props.switchToNext
                          ? props.switchToNext()
                          : router.push({
                              pathname: "/auth/login"
                            })
                      })
                    } else {
                      _confirmResetPhone(
                        {
                          password: props.router.query.password,
                          confirmPassword: props.router.query.confirmPassword,
                          id_token: idToken
                        },
                        () => {
                          router.push({
                            pathname: "/auth/login"
                          })
                        }
                      )
                    }
                  }
                }}
              >
                <span>Continue</span>
              </Button>

              <div className="c-minimal-footer" style={{ margin: "0px !important" }}>
                <div className="u-textalign-center">
                  {!props?.router.query.skip && (
                    <a onClick={() => props.switchToNext()} className="" href="#">
                      Skip
                    </a>
                  )}
                  <div className="send_area">
                    <a id="resend_email_link" style={{ display: "block" }}>
                      I haven’t received my code
                    </a>
                    <a
                      id="resend-code"
                      className="resend-code resend-phone"
                      style={{ color: "red", cursor: "pointer" }}
                      href="#"
                    >
                      Send code again
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(PhoneNumber)
