import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Select from "react-select"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { _toast } from "../../../assets/api/utils"
import Head from "next/head"
import { useTranslation } from "react-i18next"
// import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import { faCheckCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import "antd/dist/antd.css"
import { Radio } from "antd"
import { _register, _getCities, _getCountries } from "../../../redux/actions"
import { TbGasStation, TbTags } from "react-icons/tb"
import { Route } from "react-router-dom"
import Loading from "../loading"

import LanguageSwitchLink from "../../../components/LanguageSwitchLink"
import i18nextConfig from "../../../next-i18next.config"

import Link from "next/link"

function BusinessInformation(props) {
  const router = useRouter()
  const { t, i18n } = useTranslation(["common"])
  const currentLocale = router?.locale || i18nextConfig?.i18n?.defaultLocale
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
    const { defaultLocale, locale } = router
  }
  const changeTo = currentLocale === "en" ? "ar" : "en"
  /***********************props */
  const notify = (err) => {
    toast.error(err)
  }
  const [username, setUserName] = useState(props.router.query.username)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(props.router.query.email)
  const [citiesArray, setCitiesArray] = useState(props.citiesArray ? props.citiesArray : [])
  const [countriesArray, setCountries] = useState(props.countriesArray ? props.countriesArray : [])
  const [password, setPassword] = useState(props.router.query.password)
  const [mobile_phone, setmobile] = useState(props.router.query.mobile)
  const [roles, setRoles] = useState([props.role])
  const [signup_country_id, setSignup_country_id] = useState(
    props.router.query.signup_country_id ? props.router.query.signup_country_id : 1
  )

  const [tags, setTags] = useState(props.keywords ? props.keywords : [])
  const [select, setSelect] = useState(false)
  const [disable, setDisable] = useState(true)
  const dispatch = useDispatch()
  const plainOptions = ["USD", "AED"]
  const [value1, setValue1] = useState("USD")
  const onChange1 = ({ target: { value } }) => {
    setValue1(value)
  }
  const [preffered_currency_id, setCurrency] = useState(
    props.preffered_currency_id ? props.preffered_currency_id : "1"
  )

  const [selectedValue, setSelectedValue] = useState(props.selectedValue ? props.selectedValue : 1)
  const [keywords, setKeywords] = useState(props.keywords ? props.keywords : null)
  const [company, setCompany] = useState(props.company ? props.company : null)
  const [city_id, setCityId] = useState(props.city_id ? props.city_id : null)
  useEffect(() => {
    _getCities(
      (d) => {
        setCitiesArray(d)
      },
      (err) => {
        //    _toast(err.response.message)
      }
    )
  }, [selectedValue])
  useEffect(() => {
    _getCountries(
      (d) => {
        setCountries(d)
      },
      (err) => {
        // _toast(err.response.message)
      }
    )
  }, [])
  const setCity = (e) => {
    setCityId(e.target.value)
  }
  const getCitiesByCountry = (e) => {
    setSelectedValue(e.target.value)

    _getCities(
      (d) => {
        setCitiesArray(d)
      },
      (err) => {
        // _toast(err.response.message)
      }
    )
  }

  const addTag = (e) => {
    if (e.key === "Enter" || e.key === "Tab" || e.key === "Comma") {
      if (e.target.value.length > 0) {
        if (tags.filter((tag) => tag === e.target.value).length === 0) {
          setTags([...tags, e.target.value])
          e.target.value = ""
        }
      }
    }
  }
  const locales = ["en", "ar"]
  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag)
    setTags(newTags)
  }
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
      <div
        style={{
          backgroundColor: "#eff0f5"
        }}
        className="right_area_slider"
      >
        <div className="top_nav_main">
          <div
            style={{
              float: "left"
            }}
            className="top_nav left"
          >
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
        <div className="suplier_main__form" id="suplier_form">
          <div className="supplier_extend_main" id="supplier_extend_main">
            <div className="main_extend">
              <div className="extend_ball_main">
                <div
                  onClick={() => {
                    props.switchToPrev({
                      data: {
                        citiesArray: citiesArray,
                        countriesArray: countriesArray,
                        company: company,
                        city_id: citiesArray.filter((city, key) => key === parseInt(city_id)),
                        preffered_currency_id: preffered_currency_id,
                        keywords: tags,
                        selectedValue: selectedValue
                      }
                    })
                  }}
                  className="bullet"
                  //  onClick={() => router.push("/auth/register/register")}
                >
                  <span id="supplier-active1">1</span>
                </div>
                <div className="labeltext">
                  {t("auth.main.basic")}
                  <br />
                  {t("auth.main.information")}
                </div>
              </div>
              <div className="center_line" />
              <div className="extend_ball_main">
                <div
                  className="bullet"
                  //  onClick={() =>
                  // //    router.push("/auth/register/businessInformation")
                  //  }
                >
                  <span id="supplier-active2" className="active">
                    2
                  </span>
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
            <div
              dir={currentLocale === "ar" ? "rtl" : "ltr"}
              method="POST"
              //   action="https://staging.abraa.com/register-new/final-supplier"
              className="supplier_express_form"
              id="supplier_extended_form2"
              style={{}}
              noValidate="novalidate"
            >
              <input type="hidden" name="user_selected" id="user_selected" defaultValue={55440} />
              <div className="input-group">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  {t("auth.main.company")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="extended_company"
                  id="extended_company"
                  value={company}
                  defaultValue={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{ fontSize: "14px" }}
                />
              </div>

              <div className="input-group" style={{ display: "block !important" }}>
                <div>
                  <label
                    style={{
                      fontSize: 14,
                      color: "#3c495b",
                      marginLeft: currentLocale === "ar" ? "10px" : "",
                      textTransform: "capitalize",
                      width: 130,
                      float: "left",
                      letterSpacing: ".3px",
                      textAlign: "left",
                      paddingTop: 8,
                      paddingRight: 3,
                      paddingLeft: 0,
                      minWidth: "unset"
                    }}
                  >
                    {t("auth.main.keywords")}
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="fa fa-question-circle question-circle-hover"
                    />
                  </label>
                </div>
                <span
                  style={{
                    width: currentLocale === "ar" ? "100%" : "100%",
                    backgroundColor: currentLocale === "ar" ? "white" : "white",
                    marginRight: currentLocale === "ar" ? "143px" : "",
                    marginLeft: currentLocale === "ar" ? "0" : "133px",
                    marginTop: currentLocale === "ar" ? "-33px" : "-43px"
                  }}
                >
                  <div className="d-flex mt-2 flex-sm-nowrap flex-wrap">
                    <div
                      className="suggest_box_text"
                      style={{
                        marginLeft: 130,
                        justifyContent: "flex-start"
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "100%",
                          paddingRight: 25,
                          fontSize: 14,
                          textAlign: "center",
                          background: "white",
                          color: "#aaa"
                        }}
                      >
                        {t("auth.main.use_tap_or_comma_or_enter_to_submit")}
                        <span />
                      </span>
                    </div>
                  </div>
                  <ul
                    id="suggest_box_b1"
                    style={{
                      borderWidth: 0,
                      float: currentLocale === "ar" ? "right" : "left"
                    }}
                    className="tagit ui-widget ui-widget-content ui-corner-all"
                  >
                    {tags.map((tag, index) => {
                      return (
                        <li
                          key={index}
                          style={{
                            border: "1px solid #1180b0",
                            backgroundColor: "#1180b0",
                            minWidth: "60px",
                            textAlign: "left",
                            color: "#fff",
                            height: "28px",
                            paddingLeft: "7px",
                            marginTop: "5px",
                            fontWeight: "400"
                          }}
                          //     className="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"
                        >
                          <span className="tagit-label">{tag}</span>
                          <a className="tagit-close" onClick={() => removeTag(tag)}>
                            <span
                              style={{
                                marginLeft: "13px"
                              }}
                              className="text-icon"
                            >
                              ×
                            </span>
                          </a>
                        </li>
                      )
                    })}

                    <li className="tagit-new">
                      <input
                        type="text"
                        className="ui-widget-content form-control ui-autocomplete-input valid"
                        autoComplete="off"
                        aria-invalid="false"
                        onKeyDown={addTag}
                      />
                      <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                    </li>
                  </ul>
                </span>
              </div>

              <div className="input-group">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  {t("auth.main.country")}
                </label>
                <select
                  id="extended_country"
                  name="extended_country"
                  className="form-control"
                  data-error="#phone_count"
                  value={selectedValue}
                  defaultValue={selectedValue}
                  onChange={(e) => getCitiesByCountry(e)}
                >
                  <option value={0}>
                    {props?.selectedValue ? props.selectedValue : t("auth.main.select_country")}
                  </option>
                  {countriesArray.map((one, index) => (
                    <option key={one?.id} value={one?.id}>
                      {one.translations[0]?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  {t("auth.main.city")}
                </label>
                <select
                  disabled={citiesArray.length === 0}
                  //    isLoading={citiesArray.length === 0}
                  //    options={citiesArray}
                  name="extended_city"
                  className="form-control"
                  value={city_id}
                  defaultValue={city_id}
                  onChange={(e) => setCity(e)}
                  id="extended_city"
                  style={{ fontSize: "14px" }}
                >
                  <option className="nice-select form-control" value={0}>
                    {props?.city ? props.city : t("auth.main.select_city")}
                  </option>
                  {citiesArray
                    .filter((one) => one.id === parseInt(selectedValue))
                    .map((city) => (
                      <option key={city.id} value={city.id}>
                        {city?.translations[0].name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="input-group curr">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  {t("auth.main.preferred_currency")}
                </label>
                <Radio
                  value={preffered_currency_id}
                  defaultValue={preffered_currency_id}
                  onClick={(e) => setCurrency(e.target.value)}
                  checked={preffered_currency_id === "1"}
                >
                  {t("auth.main.usd")}
                </Radio>
                <Radio
                  value="2"
                  onClick={(e) => setCurrency(e.target.value)}
                  checked={preffered_currency_id === "2"}
                >
                  {t("auth.main.aed")}
                </Radio>
              </div>
              <div className="supplier_express_form custom-form">
                <div className="supplier_button_main">
                  <button
                    onClick={() => {
                      _register(
                        {
                          user_store: {
                            company,
                            name: props.username,
                            city_id: 1,
                            preffered_currency_id,
                            country_id: signup_country_id,
                            keywords: tags.map((str, id) => ({
                              name: str
                              // id: id + 1
                            }))
                          },
                          email: props.email,
                          password: props.password,
                          mobile_phone: props.mobile,
                          signup_country_id,
                          roles: roles,
                          username: props.username
                        },
                        (res) => {
                          props.switchToNext()
                          props.setToken(res)
                        },
                        (err) => {
                          //     notify(`${err?.data?.message}`)
                          //     toast(`${err.data.message}`)
                          //     _toast(`${err?.data?.message}`, "error")
                          notify(err)
                          setLoading(false)
                        }
                      )
                    }}
                    className="btn"
                    disabled={disable === false}
                  >
                    {t("auth.actions.register_now")}
                  </button>
                </div>
              </div>
            </div>
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
    </>
  ) : (
    <Loading />
  )
}
export default withRouter(BusinessInformation)
