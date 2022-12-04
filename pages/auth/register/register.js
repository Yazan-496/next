import React, { useState, useEffect } from "react"
import "react-phone-number-input/style.css"
import { withRouter } from "next/router"
// import { toast } from "pages/api/utils"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { _toast } from "../../../assets/api/utils"
import PhoneInput from "react-phone-number-input"
import classnames from "classnames"
// import { useTranslation } from "react-i18next"
import useTranslation from "next-translate/useTranslation"
import { Controller, useForm } from "react-hook-form"
import { FormGroup, Label, Button, Form, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { SendPhoneNumber, check_existing_email } from "../../../redux/actions"
import { useRouter } from "next/router"
import Loading from "../loading"
import Link from "next/link"

import LanguageSwitchLink from "../../../components/LanguageSwitchLink"
import i18nextConfig from "../../../next-i18next.config"
import Head from "next/head"

const Register = (props) => {
  const locales = ["en", "ar"]
  const { t } = useTranslation("common")
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
    const { defaultLocale, locale } = router
  }
  const changeTo = currentLocale === "en" ? "ar" : "en"
  const checkFunction = (email) => {
    check_existing_email(
      email,
      (existing) => {
        // console.log(existing, "number")
        setExisting(true)
      },
      (notexisting) => {
        setExisting(false)
      }
    )
  }
  const [existing, setExisting] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
    //     errors
  } = useForm({
    // use mode to specify the event that triggers each input field
    mode: "onBlur"
  })
  const registerOptions = {
    username: { required: `${t("auth.main.name_is_required")}` },
    mobile: {
      required: `${t("auth.main.mobile_is_required")}`,
      minLength: {
        value: 6,
        message: `${t("auth.main.mobile_phone_must_have_at_least_6_characters")}`
      }
    },
    email: `${t("auth.main.email_is_required")}`,
    password: {
      required: `${t("auth.main.password_is_required")}`,
      minLength: {
        value: 6,
        message: `${t("auth.main.password_must_have_at_least_6_characters")}`
      }
    }
  }
  const onSubmit = (data) => {
    if (!existing && email !== null && email !== "not") {
      // console.log(data, "useForm")
      SendPhoneNumber(
        data?.mobile,
        (e) => {
          setLoading(true)
          setTimeout(() => props.switchToNext(), 500)
          setLoading(false)
          props.setSessionInfo(sessionInfo)
          props.setUserName(data?.username)
          props.setEmail(email)
          props.setPassword(data?.password)
          props.setmobile(data?.mobile)
        },
        (err) => {
          // toast(`${err.data.message}`)
        }
      )
    }
  }

  const dispatch = useDispatch()
  const [disable, setDisable] = useState(true)
  //   const [value, setValue] = useState("")
  //   const id_token = useState("122222333333333")
  const [loading, setLoading] = useState(false)
  const [username, setUserName] = useState(props.username)
  const [email, setEmail] = useState(props.email)
  const [password, setPassword] = useState(props.password)
  const [mobile, setmobile] = useState(props.mobile)
  const [signup_country_id, setSignup_country_id] = useState(5)
  let sessionInfo
  useEffect(() => {
    // console.log(props, "props")
    if (typeof window !== undefined) {
      sessionInfo = JSON.parse(localStorage.getItem("GET_SEESION"))?.sessionInfo
    }

    // console.log(sessionInfo, "sessionInfo")
    username !== null || email !== null || password !== null || mobile !== null || signup_country_id !== null
      ? setDisable(true)
      : setDisable(false)
  })
  return !loading ? (
    <>
      <Head>
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/pages/slide-to-submit.css?V=1.1" />
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/intlTelInput.css?b102" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.abraa.com/assets/css/pages/abraav2-register.css?v=3.1"
        ></link>
        <link data-react-helmet="true" rel="icon" href="https://s101.abraacdn.com/files/favicon-32x32.png" />
      </Head>
      <div style={{ backgroundColor: "#eff0f5", height: "600px" }}>
        <div className="right_area_slider">
          <div className="top_nav_main">
            <div
              style={{
                float: "left"
              }}
              className="top_nav left"
            >
              {" "}
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
            <div
              style={{
                float: "left"
              }}
              className="top_nav left"
              dir="ltr"
            >
              <a>{t("auth.nav.about")}</a>
              <a>{t("auth.nav.request_a_quote")}</a>
              {/* <a onClick={() => onToggleLanguageClick(changeTo)}></a> */}
              {locales?.map((locale) => {
                if (locale === currentLocale) return null
                return <LanguageSwitchLink locale={locale} key={locale} />
              })}
            </div>
            <div
              style={{
                float: "right"
              }}
              className="top_nav right"
            >
              <a>{t("auth.nav.already_have_an_account")}</a>
              <Link href="/auth/login" locale={currentLocale}>
                <a className="btn">{t("auth.nav.sign_in")}</a>
              </Link>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f0f0f0"
            }}
            className="suplier_main__form"
            id="suplier_form"
          >
            <div className="supplier_extend_main" id="supplier_extend_main">
              <div className="main_extend">
                <div className="extend_ball_main">
                  <div
                    className="bullet"
                    //    onClick={() => router.push("/register/register")}
                  >
                    <span id="supplier-active1" className="active">
                      1
                    </span>
                  </div>
                  <div className="labeltext">
                    {t("auth.main.basic")}
                    <br />
                    {t("auth.main.information")}
                  </div>
                </div>
                <div className="center_line" />
                <div className="extend_ball_main">
                  <div className="bullet">
                    <span id="supplier-active2">2</span>
                  </div>
                  <div className="labeltext">
                    {t("auth.main.business")}
                    <br />
                    {t("auth.main.information")}
                  </div>
                </div>
              </div>
              <div
                style={{
                  textAlign: currentLocale === "en" ? "left" : "right"
                }}
                className="top_text"
              >
                <div className="big">{t("auth.main.get_started_absoluetely_free")}</div>
                <div className="small">{t("auth.main.no_credit_card_needed")}</div>
              </div>
              <form
                dir={currentLocale === "ar" ? "rtl" : "ltr"}
                onSubmit={handleSubmit(onSubmit)}
                className="supplier_express_form custom-form"
                id="supplier_extended_form"
                noValidate="novalidate"
              >
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                    htmlFor="username"
                  >
                    {t("auth.main.full_name")}
                  </label>
                  <Controller
                    control={control}
                    type="text"
                    className="form-control txtOnlyabraa"
                    name="username"
                    id="username"
                    value={username}
                    defaultValue={username}
                    rules={registerOptions.username}
                    render={({ field }) => <input {...field} label="Text field" />}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">{errors?.username && errors.username.message}</small>
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                  >
                    {t("auth.main.mobile_number")}
                  </label>
                  <Controller
                    id="mobile"
                    name="mobile"
                    control={control}
                    type="tel"
                    rules={registerOptions.mobile}
                    value={mobile}
                    defaultValue={mobile}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        style={{ flex: 4 }}
                        aria-required="true"
                        onChange={(e) => {
                          setmobile(e)
                        }}
                        className="form-control1"
                        placeholder={t("auth.main.enter_phone_number")}
                      />
                    )}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">{errors?.mobile && errors.mobile.message}</small>
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                  >
                    {t("auth.main.email")}
                  </label>
                  <Controller
                    control={control}
                    type="email"
                    value={email}
                    className="form-control"
                    name="email"
                    id="email"
                    //    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <input
                        {...field}
                        defaultValue={email}
                        onChange={(e) => {
                          setEmail(e.target.value), checkFunction(e.target.value)
                        }}
                        label="Text field"
                      />
                    )}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">
                    {email === "not" && `${t("auth.main.email_is_required")}`}
                  </small>
                  <small
                    dir={currentLocale === "ar" ? "ltr" : "ltr"}
                    style={{
                      marginLeft: "10px"
                    }}
                    className="text-danger ml-10"
                  >
                    {existing && `${t("auth.main.email_already_been_taken")}`}
                  </small>
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                  >
                    {t("auth.main.password")}
                  </label>
                  <Controller
                    control={control}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    className="form-control"
                    name="password"
                    id="password"
                    value={password}
                    defaultValue={password}
                    rules={registerOptions.password}
                    render={({ field }) => <input {...field} label="Text field" />}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">{errors?.password && errors.password.message}</small>
                </div>
                <div style={{ backgroundColor: "#eff0f5" }} className="supplier_express_form custom-form">
                  <div style={{ backgroundColor: "#eff0f5", width: "100%" }} className="supplier_button_main">
                    <button
                      type="submit"
                      disabled={disable === false}
                      onClick={() => {
                        email === null && setEmail("not")
                      }}
                      // onClick={() => {
                      //   setLoading(true)
                      //   setTimeout(() => props.switchToNext(), 500)
                      //   SendPhoneNumber(
                      //     mobile,
                      //     (data) => {
                      //       setLoading(false)
                      //       props.setSessionInfo(sessionInfo)
                      //       props.setUserName(username)
                      //       props.setEmail(email)
                      //       props.setPassword(password)
                      //       props.setmobile(mobile)
                      //     },
                      //     (err) => {
                      //       toast.error(`${err.data.message}`)
                      //     }
                      //   )
                      // }}
                      className="btn"
                    >
                      {t("auth.actions.continue")}
                    </button>
                  </div>
                </div>
              </form>
              <div style={{ backgroundColor: "#eff0f5", width: "100%" }} className="supplier_button_main">
                <div className="last_text">
                  <span className="m-1">
                    {t("auth.main.by_clicking_continue_i_agree_to")}
                    {t("auth.main.abraa")}
                  </span>
                  <span className="m-1">
                    <a>{t("auth.main.terms_of_service")}</a>{" "}
                  </span>
                  <span className="m-1">{t("auth.main.and")} </span>
                  <span className="m-1">
                    <a>{t("auth.main.privacy_policy")}</a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  )
}
export default withRouter(Register)
