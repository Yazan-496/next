import { useRouter, withRouter } from "next/router"
import { useState, useEffect } from "react"
import Checkbox from "@material/react-checkbox"
import "@material/react-checkbox/dist/checkbox.css"
import { store } from "../../../redux/storeConfig/store"
import Head from "next/head"
import { _confirmResetEmail, _confirmResetPhone, SendPhoneNumber, _ResetEmail } from "../../../redux/actions"
import Link from "next/link"

const ResetPassword = (props) => {
  const router = useRouter()
  const { pid } = router.query
  const currentLocale = router?.locale
  const [password, setPassword] = useState(null)
  const [reset, setReset] = useState(false)
  const [mobile, setMobile] = useState(router.query.mobile)
  const [matching, setMatching] = useState(true)
  const [checked, setChecked] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [test, setTest] = useState(false)
  const check = () => {
    if (password == confirmPassword) {
      setMatching(true)
    } else {
      setMatching(false)
    }
  }

  useEffect(() => {
    console.log(matching)
  }, [matching])

  return (
    <>
      {" "}
      <Head>
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/pages/account.css?v=1.06" />
      </Head>{" "}
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
                Password Recovery
              </h1>
              {/* <p style={{ marginTop: "-10px" }} className="login-text">
          Just sign in if you have an account in here. Enjoy our Website{" "}
        </p> */}
              <div noValidate="novalidate">
                <div
                  style={{
                    background: "#fff",
                    maxWidth: "510 px",
                    boxShadow: "3px -5px 40px rgb(205 205 212 / 50%)",
                    borderRadius: "16px",
                    padding: "32px 32px 24px"
                  }}
                  className="form_div_main"
                >
                  <div className=" form-group">
                    <label htmlFor="mobile" className="text-normal">
                      New password*
                    </label>
                    <div className="input-group">
                      <p
                        id="new-psw-alert"
                        style={{
                          color: "red",
                          display: !matching && test ? "block" : "none"
                        }}
                      >
                        Please confirm your password well
                      </p>

                      <input
                        maxLength={255}
                        id="password"
                        type={checked ? "text" : "password"}
                        required
                        //   value={mobile}
                        //   defaultValue={mobile}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="min 8 char"
                        onKeyUp={check}
                        name="password"
                        className="form-control valid"
                        aria-required=""
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div className=" form-group">
                    <label htmlFor="mobile" className="text-normal">
                      CONFIRM PASSWORD*
                    </label>
                    <div className="input-group">
                      <input
                        maxLength={255}
                        id="confirmpassword"
                        type={checked ? "text" : "password"}
                        required
                        //   value={mobile}
                        //   defaultValue={mobile}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onKeyUp={check}
                        placeholder="min 8 char"
                        name="confirmpassword"
                        className="form-control valid"
                        aria-required=""
                        aria-invalid="false"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "inline-flex"
                    }}
                    className="form-group"
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
                    <Checkbox onClick={() => setChecked(!checked)} />
                    <label style={{ marginTop: "8px" }} htmlFor="show-hide-psw">
                      show/hide password
                    </label>
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
                    disabled={
                      password === null || password?.length < 8 || confirmPassword === null
                      //   !matching
                    }
                    onClick={() => {
                      setTest(true),
                        password !== null && confirmPassword !== null && matching
                          ? SendPhoneNumber(
                              `+${router.query.mobile}`,
                              (d) => {
                                router.push({
                                  pathname: "/auth/register-new/phoneNumber",
                                  query: {
                                    skip: true,
                                    success: ` Password updated successfully, Please login`,
                                    password: password,
                                    confirmPassword: confirmPassword,
                                    mobile: router.query.mobile
                                  }
                                })
                              },
                              (err) => {}
                            )
                          : () => {}
                    }}
                    // disabled={mobile === null}
                    className="btn button_log"
                  >
                    Reset Password
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
                <div
                  className="no_accout_regids"
                  onClick={() =>
                    router.push({
                      pathname: "/auth/login"
                      // query: {
                      //   username: d?.data?.username
                      // }
                    })
                  }
                >
                  Back to{"   "}
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
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" login-panel sign_content_main d3"
              id="forgot-pass-container"
              style={{ display: "none" }}
            >
              <h1 className="text-dubai">Reset Password </h1>
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
  )
}

export default withRouter(ResetPassword)
