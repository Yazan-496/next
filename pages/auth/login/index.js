import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { AbilityContext } from "@/src/utility/context/Can"
// import FormGroup from "@mui/material/FormGroup"
// import FormControlLabel from "@mui/material/FormControlLabel"
// import Checkbox from "@mui/material/Checkbox"
import Checkbox from "@material/react-checkbox"
import "@material/react-checkbox/dist/checkbox.css"
import { withRouter } from "next/router"
import { useRouter } from "next/router"
import { BsCheck } from "react-icons/bs"
import { _Login, _LoginEmail, _autoLogin } from "../../../redux/actions"
import { toast } from "react-toastify"
import * as gtag from "../../../lib/gtag"
import Head from "next/head"
import Link from "next/link"

function Login(props) {
  const router = useRouter(useSelector((store) => store))
  const currentLocale = router?.locale || i18nextConfig?.i18n?.defaultLocale
  const [logged, setLogged] = useState(false)
  const [checked, setChecked] = useState(false)
  const [checkedPassword, setCheckedPassword] = useState(false)
  const [message, setMessage] = useState(router.query.mobile ? true : false)
  const [success, setSuccess] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    //     dispatch(
    //       _autoLogin(
    //         (d) => {
    //           // setLogged(true)
    //           // console.log(d, "logged")
    //         },
    //         (e) => {
    //           // console.log(e, "not logged")
    //         }
    //       )
    //     )
  }, [])
  const messageReducer = useSelector((store) => store?.Reducer?.message?.action)
  const [mobile, setMobile] = useState(null)
  const [password, setPass] = useState(null)
  return !logged ? (
    <>
      <Head>
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/pages/account.css?v=1.06" />
      </Head>

      <section className="account-container" style={{ paddingTop: 0 }}>
        <div
          className="page-part-background"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "65%",
            width: "100%",
            backgroundSize: "100% auto",
            backgroundPosition: "bottom",
            background: "url(https://www.abraa.com/assets/images/Shape.png)"
          }}
        />
        <div className="top_nav_main">
          <div className="top_nav left col-12 col-md-auto text-center mb-3 mb-md-0">
            <Link href="/" locale={currentLocale}>
              <a>
                <img
                  className="regLogo"
                  src="https://assets.abraacdn.com/assets/images/abraa-logo.svg"
                  alt="Abraa"
                  title="Abraa"
                />
              </a>
            </Link>
          </div>
          <div className="top_nav right col-12 col-md-auto text-center ">
            <a href="">About</a>
            <a href="">Request a Quote</a>
          </div>
        </div>
        <div className="container page-settings">
          <div className="row justify-content-center">
            <div className=" login-panel sign_content_main d3" id="loginContainer">
              <h1
                style={{
                  fontFamily: "roboto",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "47px",
                  color: "#171725",
                  textAlign: "center",
                  marginBottom: "15px"
                }}
                className="text-dubai"
              >
                Login
              </h1>
              <p style={{ marginTop: "-10px" }} className="login-text">
                Just sign in if you have an account in here. Enjoy our Website{" "}
              </p>
              {success && props?.router?.query?.success && (
                <div
                  className="alert alert-success"
                  style={{
                    color: "aliceblue"
                  }}
                >
                  {props?.router?.query?.success}
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" onClick={() => setSuccess(false)}>
                      ×
                    </span>
                  </button>
                </div>
              )}
              {message && messageReducer && (
                <div className="alert alert-info">
                  {messageReducer}
                  <button
                    onClick={() => setMessage(false)}
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span onClick={() => setMessage(false)} aria-hidden="true">
                      ×
                    </span>
                  </button>
                </div>
              )}

              <div noValidate="novalidate">
                <div
                  style={{
                    background: "#fff",
                    boxShadow: "3px -5px 40px rgb(205 205 212 / 50%)",
                    borderRadius: "16px",
                    padding: "32px 32px 24px"
                  }}
                  className="form_div_main"
                >
                  <div className="form-group">
                    <label htmlFor="mobile" className="text-normal">
                      MOBILE Number Or Email
                    </label>
                    <div className="input-group">
                      <img
                        style={{
                          width: "24px",
                          height: "24px"
                        }}
                        src="https://www.abraa.com/assets/images/side-email.png"
                        alt="mobile icon"
                        className="input-img"
                      />
                      <input
                        maxLength={255}
                        id="mobile"
                        type="text"
                        required
                        //   value={mobile}
                        //   defaultValue={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Phone"
                        name="mobile"
                        className="form-control valid"
                        aria-required=""
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{
                      marginTop: "30px"
                    }}
                  >
                    <label htmlFor="password" className="text-normal">
                      PASSWORD
                    </label>
                    <div className="input-group">
                      <img
                        style={{
                          width: "24px",
                          height: "24px"
                        }}
                        src="	https://www.abraa.com/assets/images/side-password.png"
                        alt="password icon"
                        className="input-img"
                      />
                      <input
                        maxLength={50}
                        id="ac-password"
                        type={checkedPassword ? "text" : "password"}
                        required
                        //   value={pass}
                        //   defaultValue={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Your account password"
                        name="password"
                        className="form-control valid"
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "inline-flex"
                    }}
                    className=""
                  >
                    {/* <input
                      defaultChecked
                      style={{
                        borderRadius: "initial",
                        border: "solid 1px #a8a8a8"
                      }}
                      className="show-hide-psw"
                      type="checkbox"
                    /> */}
                    {/* <FormGroup> */}
                    {/* <FormControlLabel */}
                    {/* control={ */}
                    <Checkbox onClick={() => setCheckedPassword(!checkedPassword)} />
                    {/* } */}
                    {/* label="Label"
                      /> */}
                    {/* </FormGroup> */}

                    <label style={{ marginTop: "8px" }} htmlFor="show-hide-psw">
                      show/hide password
                    </label>
                  </div>
                  <div
                    style={{
                      marginTop: "30px"
                    }}
                    className="row checkbox-success"
                  >
                    <div className="col-md-6">
                      <div className="checkboxxx">
                        <input
                          onClick={() => setChecked(!checked)}
                          type="checkbox"
                          defaultValue={1}
                          id="remember"
                          name="remember"
                          defaultChecked
                        />
                        <label className="fancy-checkbox" htmlFor="remember">
                          <BsCheck
                            style={{
                              color: "white",
                              fontSize: "55px"
                            }}
                          />
                        </label>
                      </div>
                      <label htmlFor="remember"> Remember me</label>
                    </div>
                    <div className="col-md-6 ">
                      <a href="javascript:" id="forgot-password" className="text-right pull-right">
                        <div
                          onClick={() =>
                            router.push({
                              pathname: "/auth/login/passwordRecovery",
                              query: {
                                mobile: mobile
                              }
                            })
                          }
                        >
                          Forgot password?
                        </div>
                      </a>
                    </div>
                  </div>
                  <button
                    style={{
                      backgroundColor: "#1180b0",
                      color: "#fff",
                      height: "50px",
                      width: "100%",
                      margin: 0,
                      borderRadius: "4px!important",
                      letterSpacing: "2px",
                      marginTop: "24px",
                      fontFamily: "Inter,poppins",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "24px"
                    }}
                    onClick={
                      mobile !== "" || password !== ""
                        ? () => {
                            let result = mobile.includes("@")
                            console.log("🚀 ~ file: index.js:312 ~ Login ~ result", result)
                            if (result) {
                              _LoginEmail(
                                { mobile, password },
                                (d) => {
                                  console.log(d, "data")
                                  typeof window !== "undefined" &&
                                    window.dataLayer.push({
                                      event: "login",
                                      userId: d?.data?.id
                                    }),
                                    router.push({
                                      pathname: "/"
                                      // query: {
                                      //   username: d?.data?.username
                                      // }
                                    })
                                },
                                (err) => {
                                  //   toast(err?.data?.message)
                                }
                              )
                            } else {
                              _Login(
                                { mobile, password },
                                (d) => {
                                  typeof window !== "undefined" &&
                                    window.dataLayer.push({
                                      event: "login",
                                      userId: d?.data?.id
                                    }),
                                    router.push({
                                      pathname: "/"
                                      // query: {
                                      //   username: d?.data?.username
                                      // }
                                    })
                                },
                                (err) => {
                                  //   toast(err?.data?.message)
                                }
                              )
                            }
                          }
                        : () => {}
                    }
                    disabled={mobile === null || password === null}
                    className="btn button_log"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Inter,poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#171725",
                  textAlign: "center"
                }}
                className="logingregiser"
              >
                <div className="login_social "></div>
                <div className="no_accout_regids">
                  New to Abraa.com?{" "}
                  <Link href="/auth" locale={currentLocale}>
                    <a
                      style={{
                        color: "#1180b0",
                        fontFamily: "Inter,poppins",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "24px",
                        textAlign: "center"
                      }}
                    >
                      Create an Account
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className=" login-panel sign_content_main d3"
              id="forgot-pass-container"
              style={{ display: "none" }}
            >
              <h1 className="text-dubai">Password recovery </h1>
              <div
                action=""
                className="col-md-12"
                method="post"
                id="recover-password"
                name="recover-password"
                noValidate="novalidate"
              >
                <div className>
                  <div className="form-group">
                    <div className="input-group">
                      <label>ACCOUNT*</label>
                      <input
                        maxLength={255}
                        id="mobile2"
                        type="text"
                        required
                        placeholder="Please enter the mobile you registered with"
                        name="mobile"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className>
                  <div className="button_div">
                    <input defaultValue="Reset password" className="btn button_log registe_btn" />
                  </div>
                </div>
                <div className="no_accout_regids2">
                  Back to <a id="back_to_login">login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <></>
  )
}

export default withRouter(Login)
