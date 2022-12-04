import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import { useDispatch } from "react-redux"
import Confetti from "react-confetti"
import { store } from "../../../redux/storeConfig/store"
import Head from "next/head"
// import { AbilityContext } from "@/src/utility/context/Can"
import { withRouter } from "next/router"
import { useRouter } from "next/router"
import { SendPhoneNumber, _ResetEmail, _autoLogin } from "../../../redux/actions"
import Link from "next/link"

function ResetPassword(props) {
  const [logged, setLogged] = useState(false)
  const [tab, setTab] = useState(false)
  const dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch()mobile
  //     //  _autoLogin(
  //     //    (d) => {
  //     //      // setLogged(true)
  //     //      // console.log(d, "logged")
  //     //    },
  //     //    (e) => {
  //     //      // console.log(e, "not logged")
  //     //    }
  //     //  )
  //   }, [])
  const router = useRouter()
  const currentLocale = router?.locale || i18nextConfig?.i18n?.defaultLocale
  const [reset, setReset] = useState(false)
  const [mobile, setMobile] = useState(null)
  const [password, setPass] = useState(null)
  return !reset ? (
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
                <Image
                  width="100"
                  height="30"
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
            <div
              className=" login-panel sign_content_main d3"
              id="loginContainer"
              style={{ display: "none" }}
            >
              <h1 className="text-dubai">Login </h1>
              <p className="login-text">Just sign in if you have an account in here. Enjoy our Website </p>
              <form method="post" id="login" name="login" noValidate="novalidate">
                <input type="hidden" name="redirect" />
                <input type="hidden" name="login" />
                <div className="form_div_main">
                  <div className=" form-group">
                    <label htmlFor="email" className="text-normal">
                      EMAIL or phone
                    </label>
                    <div className="input-group">
                      <img src="assets/images/side-email.png" alt="email icon" className="input-img" />
                      <input
                        maxLength={255}
                        id="email"
                        type="text"
                        required
                        placeholder="Email or Phone ex 971"
                        onChange={(e) => setMobile(e.target.value)}
                        name="email"
                        className="form-control valid"
                        //     defaultValue
                        aria-required="true"
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div className=" form-group">
                    <label htmlFor="password" className="text-normal">
                      PASSWORD
                    </label>
                    <div className="input-group">
                      <img src="assets/images/side-password.png" alt="password icon" className="input-img" />
                      <input
                        maxLength={50}
                        id="ac-password"
                        type="password"
                        required
                        placeholder="Your account password"
                        name="password"
                        className="form-control valid"
                        aria-required="true"
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input id="show-hide-login-psw" type="checkbox" />{" "}
                    <label htmlFor="show-hide-login-psw">show/hide password</label>
                  </div>
                  <div className="row checkbox-success">
                    <div className="col-md-6">
                      <div className="checkboxxx">
                        <input
                          type="checkbox"
                          //  defaultValue={1}
                          id="remember"
                          name="remember"
                          defaultChecked
                        />
                        <label htmlFor="remember" />
                      </div>
                      <label htmlFor="remember"> Remember me</label>
                    </div>
                    <div className="col-md-6 ">
                      <a href="javascript:" id="forgot-password" className="text-right pull-right">
                        <div>Forgot password?</div>
                      </a>
                    </div>
                  </div>
                  <input type="submit" defaultValue="Login" className="btn button_log " />
                </div>
              </form>
              <div className="logingregiser">
                <div className="login_social "></div>
                <div className="no_accout_regids">
                  New to Abraa.com?
                  <Link href="/auth" locale={currentLocale}>
                    <a>Create an Account</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tab" id="forgot-pass-container" style={{}}>
              <ul className="nav nav-tabs" role="tablist">
                <li onClick={() => setTab(false)} className={!tab ? "nav-item active" : "nav-item"}>
                  <a
                    className={!tab ? "nav-link active" : "nav-link"}
                    href="#by_email"
                    data-toggle="tab"
                    role="tab"
                    aria-expanded={!tab ? "true" : "false"}
                  >
                    Reset By Email <i className="align-middle" data-feather="email" />
                  </a>
                </li>
                <li onClick={() => setTab(true)} className={tab ? "nav-link active" : "nav-link"}>
                  <a
                    className={tab ? "nav-link active" : "nav-link"}
                    href="#by_otp"
                    data-toggle="tab"
                    role="tab"
                    aria-expanded={tab ? "true" : "false"}
                  >
                    Reset By Whatsapp OTP <i className="align-middle" data-feather="whatsapp" />
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className={!tab ? "tab-pane active" : "tab-pane"} id="by_email" role="tabpanel">
                  <div className=" login-panel sign_content_main d3" id="forgot-pass-container">
                    <form
                      className="col-md-12"
                      method="post"
                      id="recover-password"
                      name="recover-password"
                      noValidate="novalidate"
                    >
                      <input type="hidden" defaultValue="reset_pass" name="submitted" />
                      <div className>
                        <div className="form-group">
                          <div className="input-group">
                            <label>ACCOUNT*</label>
                            <input
                              maxLength={255}
                              id="email2"
                              type="text"
                              required
                              onChange={(e) => setMobile(e.target.value)}
                              placeholder="Please enter the email you registered with"
                              name="email"
                              className="form-control"
                              // defaultValue
                              aria-required="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className>
                        {/* <div className="button_div">
                          <input
                            type="submit"
                            defaultValue="Reset password"
                            className="btn button_log registe_btn"
                          />
                        </div> */}
                        <div disabled={mobile === null} className="button_div">
                          <input
                            onClick={() =>
                              _ResetEmail({ mobile }, (d) => {
                                store.dispatch({
                                  type: "MESSAGE",
                                  action: `Reset instructions have been mailed to ${mobile}. Be sure to check your Junk folder if you do not see an email from us in your Inbox within a few minutes.`
                                })
                                router.push({
                                  //  pathname: "/auth/register-new/phoneNumber",
                                  pathname: "/auth/login",
                                  query: {
                                    mobile: mobile
                                  }
                                })
                                setReset(true)
                              })
                            }
                            type=""
                            style={{
                              backgroundColor: "#1180b0",
                              color: "#fff"
                            }}
                            placeholder="Reset password"
                            defaultValue="Reset password"
                            className="btn button_log registe_btn"
                          />
                        </div>
                      </div>
                      <div className="no_accout_regids2">
                        Back to{" "}
                        <Link href="/auth/login" locale={currentLocale}>
                          <a id="back_to_login">login</a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className={tab ? "tab-pane active" : "tab-pane"} id="by_otp" role="tabpanel">
                  <div className=" login-panel sign_content_main d3">
                    <form
                      onsubmit="return false;"
                      className="col-md-12"
                      method="post"
                      id="recover-password"
                      name="recover-password"
                      noValidate="novalidate"
                    >
                      <input type="hidden" defaultValue="reset_pass" name="submitted" />
                      <div className>
                        <div className="form-group">
                          <div className="input-group">
                            <p id="forgot-psw-alert" style={{ color: "red" }} />
                            <label>Phone Number*</label>
                            <input
                              maxLength={255}
                              id="phone-number"
                              type="number"
                              onChange={(e) => setMobile(e.target.value)}
                              required
                              placeholder={971}
                              name="phone-number"
                              className="form-control"
                              // defaultValue
                            />
                          </div>
                        </div>
                      </div>
                      <div className>
                        <div className="button_div">
                          <input
                            onClick={() => {
                              router.push({
                                //  pathname: "/auth/register-new/phoneNumber",
                                pathname: "/auth/login/reset_password",
                                query: {
                                  mobile: mobile
                                }
                              })
                              // SendPhoneNumber(
                              //   mobile,
                              //   (d) => {
                              //     router.push({
                              //       //  pathname: "/auth/register-new/phoneNumber",
                              //       pathname: "/auth/login/reset_password",
                              //       query: {
                              //         mobile: mobile
                              //       }
                              //     })
                              //   },
                              //   (err) => {}
                              // )
                            }}
                            type=""
                            style={{
                              backgroundColor: "#1180b0",
                              color: "#fff"
                            }}
                            placeholder="Reset password"
                            defaultValue="Reset password"
                            className="btn button_log registe_btn"
                          />
                        </div>
                      </div>
                      <div className="no_accout_regids2">
                        Back to{" "}
                        <Link href="/auth/login" locale={currentLocale}>
                          <a id="back_to_login">login</a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className id="new-password-container" style={{ display: "none", marginTop: 10 }}>
              <div className="col-md-12" style={{ marginBottom: 20 }}>
                <h3 className="text-dubai text-normal">Password recovery</h3>
              </div>
              <form onsubmit="return checkResetPswForm();" className="col-md-12" method="post">
                <input type="hidden" name="userid" id="userid" />
                <input type="hidden" name="phone_number" id="phone-number" />
                <div className>
                  <div className="form-group">
                    <div className="input-group">
                      <p id="new-psw-alert" style={{ color: "red" }} />
                      <label>New password*</label>
                      <input
                        maxLength={255}
                        id="psw"
                        type="password"
                        required
                        placeholder="min 8 char"
                        name="psw"
                        className="form-control psw"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <label>Confirm password*</label>
                      <input
                        maxLength={255}
                        id="confirm-psw"
                        type="password"
                        required
                        placeholder="min 8 char"
                        name="confirm_psw"
                        className="form-control psw"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input id="show-hide-psw" type="checkbox" />{" "}
                    <label htmlFor="show-hide-psw">show/hide password</label>
                  </div>
                </div>
                <div className>
                  <div className="button_div">
                    <input
                      type="submit"
                      id="send-psw-otp-btn"
                      defaultValue="Reset password"
                      className="btn button_log registe_btn"
                    />
                  </div>
                </div>
                <div className="no_accout_regids2">
                  Back to{" "}
                  <a href="javascript:" id="back_to_login">
                    login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <>
      <Head>
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/pages/account.css?v=1.06" />
      </Head>
      <div className="right_area_slider">
        <div
          className="registration_success l-minimal l-minimal--valign"
          id="registration_success"
          style={{ marginTop: "50px", display: "block" }}
        >
          <div className="l-minimal_wrap l-minimal_wrap--confetti">
            <header className="c-minimal-header">
              <div className="u-grid-cell">
                <Link href="/" locale={currentLocale}>
                  <a>
                    <Image
                      alt="abraa"
                      width="100"
                      height="30"
                      title="abraa"
                      style={{ objectFit: "scale-down" }}
                      className="c-minimal-header_logo logo"
                      src="https://s101.abraacdn.com/files/abraa-logos.png"
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="u-grid-cell c-user-nav"></div>
            </header>
            <div className="hero sticky">
              {/* <canvas
               className="confetti js-confetti"
               width={736}
               height={344}
             /> */}
              {/* <Confetti width={1336} height={344} /> */}
            </div>
            <div className="u-box">
              <h1 className="h1-elizeth u-margin-bottom-s">
                {/* <span className="icon-in-text-checkmark" /> */}
                We Send Email Reset Password To Your Email {mobile}
              </h1>
              <div className="scope-text u-font-size-l">
                <p style={{ textAlign: "center" }}>
                  <Image
                    width="24"
                    height="24"
                    src="https://assets.abraacdn.com/assets/images/new-register/confirm-email.png"
                  />
                </p>
                <p style={{ textAlign: "center" }}>{/* Your email has een confirmed successfully */}</p>
                <p style={{ textAlign: "center", fontWeight: 600 }}>{/* meraandre9999@gmail.com */}</p>
                <div className="send_area" style={{ display: "block", textAlign: "center" }}>
                  <a
                    className="rended_email2"
                    style={{ font: "small/1.5 Arial,Helvetica,sans-serif" }}
                    href="#"
                  >
                    <i
                      className="fa fa-check-circle resend-msg"
                      style={{ display: "none", color: "green" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="c-minimal-footer">
              <div className="u-textalign-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
