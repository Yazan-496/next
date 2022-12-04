import React, { useState, useEffect } from "react"
import { _register, getCities, getCountries, getProfile, _updateProfile } from "../../../../redux/actions"
import Image from "next/image"
import { _toast } from "../../../../assets/api/utils"
// import SVG from "react-inlinesvg"
import { useDispatch, useSelector } from "react-redux"
import { message } from "antd"

export default function Main() {
  const [tab, setTab] = useState(true)
  const [citiesArray, setCitiesArray] = useState([])
  const [countriesArray, setCountries] = useState([])
  const [selectedValue, setSelectedValue] = useState("Syria")
  const [userToken, setUserToken] = useState(null)
  const [userData, setUserData] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [cityId, setCityId] = useState(null)
  const [password1, setpassword1] = useState(null)
  const [confirm_password, setconfirm_password] = useState(null)
  const [colorValidate, setcolorValidate] = useState(null)
  const [messageValidate, setmessageValidate] = useState(null)
  const [matching, setMatching] = useState(true)
  const check = () => {
    // console.log(password, "password1")
    // console.log(confirmPassword, "confirm_password")
    if (password == confirmPassword) {
      setcolorValidate("green")
      setmessageValidate("matching")
      setMatching(true)
    } else {
      setcolorValidate("red")
      setMatching(false)
      setmessageValidate("not matching")
    }
  }
  //   useEffect(() => {
  //     if (typeof window !== undefined) {
  //       setpassword1(document.getElementById("password").value)
  //       setconfirm_password(document.getElementById("confirm_password").value)
  //       setmessageValidate(document.getElementById("message").innerHTML)
  //       setcolorValidate(document.getElementById("message").style.color)
  //     }
  //   }, [messageValidate])
  useEffect(() => {
    getCountries(
      (d) => {
        setCountries(d)
        //    // console.log(d, "countries")
      },
      (err) => {
        _toast(`${err.data.message}`, "error")
      }
    )
    if (typeof window !== undefined) {
      setUserToken(JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.access_token)
      setUserData(JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data)
    }
  }, [])
  useEffect(() => {
    // console.log(userToken, "userToken")
    userToken !== null &&
      getProfile(
        userToken,
        (d) => {
          setUserData(d?.data)
        },
        (err) => {}
      )
  }, [userToken])
  const getCitiesByCountry = (e) => {
    setSelectedValue(e.target.value)
    getCities(
      { country: e.target.value },
      (d) => {
        setCitiesArray(d)
        // console.log(d, "citiesArray")
      },
      (err) => {
        _toast(`${err.data.message}`, "error")
      }
    )
  }
  const updateProfile = () => {
    matching === true &&
      _updateProfile(
        {
          token: userToken,
          userData: {
            ...userData,
            first_name: firstName,
            last_name: lastName,
            password: password,
            confirm_password: confirmPassword
            // email: email
          }
        },
        () => {}
      )
  }
  return (
    <div className="content" id="content">
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n         .arrow_box{\n             top:32% !important\n         }\n         .arrow_box:before{\n             content:unset;\n         }\n         .arrow_box:after{\n             content:unset;\n         }\n         .plan-name-cont{\n             padding:0px 5px;\n         }\n         @media screen and (max-width: 767px) {\n             .vat-checkbox-sec {\n                 width: 100%;\n                 display: inline-block;\n             }\n             .card-container .card:first-child{\n                 width:100% !important\n             }\n             .card-container .card:nth-child(2){\n                 width:100% !important\n             }\n         }\n         #bank-payment p{\n             max-width:unset;\n         }\n         .card > .membership{\n             padding:10px 5px;\n         }\n         .circular-radio-btn{\n             display:unset;\n         }\n         .data-row{\n             display:unset;\n         }\n         #bank-payment .data-table{\n             padding:5px 0px;\n         }\n         .card-body{\n             padding:0px 5px\n         }\n         .data-row span:not(.value){\n             font-weight:800\n         }\n         .required-product-top-sec .form-control{\n             padding:2px;\n         }\n         .access-buyer{\n             height:600px;\n         }\n         .contact-btn a{\n             margin-top: 0px;\n         }\n     \n         .plan-img-cont{\n             width: 70px;\n             padding:0px;\n         }\n         .plan-img-cont img{\n             width: 100%;\n         }\n         .plan-name-cont span{\n             font-size: 20pt;\n             letter-spacing: 4px;\n             font-weight: 600;\n             line-height: 57px;\n         }\n         .plan-name-cont .sub{\n             font-size: 9pt;\n             letter-spacing: 2px;\n             vertical-align: top;\n         }\n         .w-40 .membership:before{\n             content: "Terms and conditions and refund policy";\n             color: #fff;\n             text-align: center;\n             line-height: 35px;\n             font-weight: 600;\n             height:45px;\n         }\n         .membership-text{\n             margin-top:50px;\n         }\n         .membership {\n             padding-left: 15px;\n         }\n         .membership p{\n             margin-bottom: 30px;\n         }\n         .price{\n             color:#000;\n             font-weight:600\n         }\n         .aed_price{\n             font-size :30px;\n         }\n     \n         .usd_price{\n             font-size :15px;\n         }\n         .year{\n             color: #999999;\n             font-size: 20px;\n             font-weight: 400;\n             bottom: -1px;\n             font-size:15px;\n         }\n         .inner-plan-sec{\n             padding:28px\n         }\n     '
        }}
      />
      <div className="hidden">
        <div className="usd-1">289</div>
        <div className="usd-2">1399</div>
        <div className="usd-3">5499</div>
        <div className="usd-4">14</div>
        <div className="usd-5">28</div>
        <div className="usd-6">273</div>
        <div className="usd-symbol">USD</div>
        <div className="aed-1">499</div>
        <div className="aed-2">999</div>
        <div className="aed-3">9999</div>
        <div className="aed-4">49</div>
        <div className="aed-5">99</div>
        <div className="aed-6">999</div>
        <div className="aed-symbol">AED</div>
        <div className="sar-1">509</div>
        <div className="sar-2">1019</div>
        <div className="sar-3">10199</div>
        <div className="sar-4">51</div>
        <div className="sar-5">101</div>
        <div className="sar-6">1019</div>
        <div className="sar-symbol">SAR</div>
      </div>
      <div className="choose-title">
        <h2 style={{ fontSize: 20 }}>Choose Your Abraa Plan</h2>
        <div className="multi-steps" style={{ display: "unset" }}>
          <div className="step first active" style={{ display: "inline-block" }}>
            Step 1
          </div>
          <div className="step second" style={{ display: "inline-block" }}>
            Step 2
          </div>
        </div>
      </div>
      <div className="card" id="first-step">
        <div className="card-body">
          <div
            style={{
              justifyContent: "center"
            }}
            className="row mb-30"
          >
            <div className="sub-text">
              <h4>Pricing Plans</h4>
              <p>Familiarize yourself with the payment plans below.</p>
              <p>Pick best plan to fit your needs.</p>
              <div className="wrapper-radio-btn">
                <input name="sidebarCur" defaultValue="usd" type="hidden" />
                <input type="hidden" name="plan" id="plan" defaultValue />
                <input type="hidden" name="plan_id" defaultValue />
                <div className="form-group form-group-first">
                  <div className="radio">
                    <label>
                      <input type="radio" name="onoffswitch" defaultValue={1} defaultChecked="checked" />
                      <span className="radio-text">Bill Annually</span>
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="form-group mar-top-15"></div>
              </div>
            </div>
          </div>
          <div className="row cardRow">
            <div className="col-md-4 plan-top-sec">
              <div className="inner-plan-sec borderDiv">
                <div className="business-top-sec">
                  <div id="plan1_year">
                    <span className="price aed_price">AED 999</span>
                    <span className="price usd_price">($ 279)</span>
                    <sub className="year">/Year</sub>
                  </div>
                  <div className="hidden" id="plan1_month">
                    49
                    <span>
                      AED<sub>/Month</sub>
                    </span>
                  </div>
                  <p className="small-busines">Silver Membership</p>
                  <p>For Small Business </p>
                </div>
                <div className="access-buyer-top">
                  <div className="access-buyer">
                    <ul>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        How many prodcut can list(Unlimited)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Leads per year
                        <span style={{ color: "#f13f1a" }}>(240)</span>
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Mini website with visible company name &amp; contact details
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Verified Badge
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Abraa chat (Receive WhatsApp chat from buyers)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Search ranking on Abraa
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Featured brand banner on home page
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Featured product on home page
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Featured store page and products
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Email Marketing to our targeted buyers
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Not happy?Money back gaurntee after 3 months
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Dedicated relationship manager
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Marketing Boost Campaign
                      </li>
                    </ul>
                  </div>
                  <div className="contact-btn select-plan" plan={1}>
                    <a href="javascript:void(0)">Select plan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 plan-top-sec">
              <div className="inner-plan-sec borderDiv">
                <div className="recommended-plan">Recommended</div>
                <div className="business-top-sec">
                  <div id="plan1_year">
                    <span className="price aed_price">AED 5500</span>
                    <span className="price usd_price">($ 1499)</span>
                    <sub className="year">/Year</sub>
                  </div>
                  <div className="hidden" id="plan2_month">
                    99
                    <span>
                      AED<sub>/Month</sub>
                    </span>
                  </div>
                  <p className="small-busines">Gold Membership</p>
                  <p>For Corporates</p>
                </div>
                <div className="access-buyer-top">
                  <div className="access-buyer">
                    <ul>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        How many prodcut can list(Unlimited)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Leads per year
                        <span style={{ color: "#f13f1a" }}>(1200)</span>
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Mini website with visible company name &amp; contact details
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Verified Badge
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Abraa chat (Receive WhatsApp chat from buyers)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Search ranking on Abraa
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Featured brand banner on home page(1 Month)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Featured product on home page(1 Month)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Featured store page and products
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Email Marketing to our targeted buyers(4/Year)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Not happy?Money back gaurntee after 3 months
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Dedicated relationship manager
                      </li>
                      <li className="gray-sec">
                        <img
                          src="https://assets.abraacdn.com/assets/images/grey-line.png"
                          alt="light green check"
                        />
                        Marketing Boost Campaign
                      </li>
                    </ul>
                  </div>
                  <div className="contact-btn select-plan" plan={2}>
                    <a href="javascript:void(0)">Select plan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 plan-top-sec">
              <div className="inner-plan-sec borderDiv">
                <div className="business-top-sec">
                  <div className="contact-btn">
                    <div className="activePeriod" id="plan2_year">
                      <div className="contact-btn">
                        <a href="https://api.whatsapp.com/send?phone=971508488594">Contact Us</a>
                      </div>
                    </div>
                  </div>
                  <p className="small-busines">Platinum Membership</p>
                  <p>For Enterprise / Factories</p>
                </div>
                <div className="access-buyer-top">
                  <div className="access-buyer">
                    <ul>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        How many prodcut can list(Unlimited)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Leads per year
                        <span style={{ color: "#f13f1a" }}>(6000)</span>
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Mini website with visible company name &amp; contact details
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Verified Badge
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Abraa chat (Receive WhatsApp chat from buyers)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Search ranking on Abraa
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Featured brand banner on home page(3 Months)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Featured product on home page(3 Months)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Featured store page and products
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Email Marketing to our targeted buyers(12/Year)
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Not happy?Money back gaurntee after 3 months
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Dedicated relationship manager
                      </li>
                      <li>
                        <img
                          src="https://assets.abraacdn.com/assets/images/light-green-check.png"
                          alt="light green check"
                        />
                        Marketing Boost Campaign
                      </li>
                    </ul>
                  </div>
                  <div className="contact-btn">
                    <a href="https://api.whatsapp.com/send?phone=971508488594">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-text">
            <p>Cancel or upgrade your plan any time.</p>
          </div>
        </div>
      </div>
      <div className="card hidden" id="second-step">
        <div className="card-container">
          <div className="card w-60">
            <div className="card-body">
              <div className="payments-periods">
                <div className="payments-period-section" id="yearly-cycle">
                  <div className="payments-period-popular" style={{ backgroundColor: "#0062FF" }}>
                    Most popular
                  </div>
                  <div className="row">
                    <div className="plan-img-cont col-xs-2" style={{ textAlign: "left" }}></div>
                    <div className="col-xs-5 plan-name-cont" style={{ textAlign: "left" }}></div>
                    <div className="col-xs-5">
                      <div className="payments-period-title">
                        Billed yearly{" "}
                        <span className="light-green">
                          <b>(Save 20%)</b>
                        </span>
                      </div>
                      <div className="payments-period-price">
                        <b className="yearly-price" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-header p-x-0">2. Enter payment details</div>
              <div className="circular-radio-btn row">
                <div className="form-group form-group-first col-xs-12 col-md-3">
                  <div className="radio" target="card-payment">
                    <label>
                      <input
                        type="radio"
                        name="payment_type"
                        defaultValue={1}
                        id="s1"
                        defaultChecked="checked"
                        target="card-payment"
                      />
                      <span className="checkmark" />
                      <span className="radio-text">
                        <img src="https://assets.abraacdn.com/assets/images/card-payment.png" alt />
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-group mar-top-15 col-xs-12 col-md-3">
                  <div className="radio" target="paypal-payment">
                    <label>
                      <input
                        type="radio"
                        name="payment_type"
                        defaultValue={2}
                        id="s2"
                        target="paypal-payment"
                      />
                      <span className="checkmark" />
                      <span className="radio-text">
                        <img src="https://assets.abraacdn.com/assets/images/paypal-payment.png" alt />
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-group mar-top-15 col-xs-12 col-md-3">
                  <div className="radio" target="bank-payment">
                    <label>
                      <input
                        type="radio"
                        name="payment_type"
                        defaultValue={3}
                        id="s3"
                        target="bank-payment"
                      />
                      <span className="checkmark" />
                      <span className="radio-text">Bank Transfer</span>
                    </label>
                  </div>
                </div>
              </div>
              <form
                id="card-payment"
                action="https://www.abraa.com/new-dashboard/checkout"
                method="post"
                encType="multipart/form-data"
              >
                <input name="paymentmethod" type="hidden" defaultValue={1} />
                <input name="package_price" type="hidden" />
                <input name="plan_name" type="hidden" />
                <div className="shipping-top-sec">
                  <div className="required-product-top-sec row">
                    <div className="col-xs-12 col-md-6">
                      <label>Full Name</label>
                      <input
                        id="billing_fname"
                        type="text"
                        name="billing_fname"
                        className="form-control"
                        placeholder="Full Name"
                        defaultValue="Ahmed"
                      />
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="inner-required-product">
                        <p>Email</p>
                      </div>
                      <input
                        id="billing_email"
                        type="text"
                        name="billing_email"
                        className="form-control"
                        placeholder="Email"
                        defaultValue="ghaithadanof2021@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="required-product-top-sec row">
                    <div className="col-xs-12 col-md-6">
                      <div className="inner-required-product">
                        <p>Company Name</p>
                      </div>
                      <input
                        id="billing_lname"
                        type="text"
                        name="billing_lname"
                        className="form-control"
                        placeholder="Company Name"
                        defaultValue="qqqqqqqqqqqq"
                      />
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="inner-required-product">
                        <p>Company Contact Phone Number</p>
                      </div>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Company Contact Phone Number"
                        defaultValue={963980033496}
                      />
                    </div>
                  </div>
                  <div className="required-product-top-sec row">
                    <div className="col-xs-12 col-md-6">
                      <div className="inner-required-product">
                        <p>Billing Country</p>
                      </div>
                      <select name="billing_cntry" id="billing_cntry" className="form-control">
                        <option value="ae">UAE </option>
                        <option value="af">Afghanistan </option>
                        <option value="al">Albania </option>
                        <option value="dz">Algeria </option>
                        <option value="as">American Samoa </option>
                        <option value="ad">Andorra </option>
                        <option value="ao">Angola </option>
                        <option value="ai">Anguilla </option>
                        <option value="aq">Antarctica </option>
                        <option value="ag">Antigua and Barbuda </option>
                        <option value="ar">Argentina </option>
                        <option value="am">Armenia </option>
                        <option value="aw">Aruba </option>
                        <option value="au">Australia </option>
                        <option value="at">Austria </option>
                        <option value="az">Azerbaijan </option>
                        <option value="bs">Bahamas </option>
                        <option value="bh">Bahrain </option>
                        <option value="bd">Bangladesh </option>
                        <option value="bb">Barbados </option>
                        <option value="by">Belarus (Belarus) </option>
                        <option value="be">Belgium </option>
                        <option value="bz">Belize </option>
                        <option value="bj">Pinyin </option>
                        <option value="bm">Bermuda </option>
                        <option value="bt">Bhutan </option>
                        <option value="bo">Bolivia </option>
                        <option value="ba">Bosnia and Herzegovina </option>
                        <option value="bw">Botswana </option>
                        <option value="bv">Bouvet Island </option>
                        <option value="br">Brazil </option>
                        <option value="io">British Indian Ocean Territory </option>
                        <option value="vg">British Virgin Islands </option>
                        <option value="bn">Brunei </option>
                        <option value="bg">Bulgaria </option>
                        <option value="bf">Burkina Faso </option>
                        <option value="bi">Burundi </option>
                        <option value="kh">Campodia </option>
                        <option value="cm">Cameroon </option>
                        <option value="ca">Canada </option>
                        <option value="cv">island of Cape Verde </option>
                        <option value="ky">Cayman Islands </option>
                        <option value="cf">Central African Republic </option>
                        <option value="td">Chad </option>
                        <option value="cl">Chile </option>
                        <option value="cn">China </option>
                        <option value="cx">Christmas Island </option>
                        <option value="cc">Cocos (Keeling) </option>
                        <option value="co">Columbia </option>
                        <option value="km">Comoros </option>
                        <option value="cg">Congo </option>
                        <option value="ck">Cook Islands </option>
                        <option value="cr">Costa Rica </option>
                        <option value="hr">Croatia </option>
                        <option value="cu">Cuba </option>
                        <option value="cy">Cyprus </option>
                        <option value="cz">Czech Republic </option>
                        <option value="cd">Democratic Republic of Congo </option>
                        <option value="dk">Denmark </option>
                        <option value="dj">Djibouti </option>
                        <option value="dm">Dominica </option>
                        <option value="do">Dominican Republic </option>
                        <option value="tl">East Timor </option>
                        <option value="ec">Ecuador </option>
                        <option value="eg">Egypt </option>
                        <option value="sv">El Salvador </option>
                        <option value="gq">Equatorial Guinea </option>
                        <option value="er">Eritrea </option>
                        <option value="ee">Estonia </option>
                        <option value="et">Ethiopia </option>
                        <option value="fk">Falkland Islands </option>
                        <option value="fo">Faroe Islands </option>
                        <option value="fm">United States of Micronesia </option>
                        <option value="fj">Fiji </option>
                        <option value="fi">Finland </option>
                        <option value="fr">France </option>
                        <option value="gf">French Guiana </option>
                        <option value="pf">French Polynesia </option>
                        <option value="ga">Gabon </option>
                        <option value="gm">Gambia </option>
                        <option value="ge">Georgia </option>
                        <option value="de">Germany </option>
                        <option value="gh">Ghana </option>
                        <option value="gi">Gibraltar </option>
                        <option value="gr">Greece </option>
                        <option value="gl">Greenland </option>
                        <option value="gd">Grenada </option>
                        <option value="gp">GUADALUPE </option>
                        <option value="gu">Guam </option>
                        <option value="gt">Guatemala</option>
                        <option value="gn">Guinea </option>
                        <option value="gw">Guinea - Bissau </option>
                        <option value="gy">French Guiana </option>
                        <option value="ht">Haiti </option>
                        <option value="hm">Heard Island and McDonald Islands </option>
                        <option value="hn">Honduras </option>
                        <option value="hk">Hong Kong </option>
                        <option value="hu">Hungary (Hungary) </option>
                        <option value="is">Iceland </option>
                        <option value="in">India </option>
                        <option value="id">Indonesia </option>
                        <option value="ir">Iran </option>
                        <option value="iq">Iraq </option>
                        <option value="ie">Ireland </option>
                        <option value="it">Italy </option>
                        <option value="ci">Ivory Coast </option>
                        <option value="jm">Jamaica </option>
                        <option value="jp">Japan </option>
                        <option value="jo">Jordan </option>
                        <option value="kz">Kazakhstan </option>
                        <option value="ke">Kenya </option>
                        <option value="ki">Kiribati Islands </option>
                        <option value="kw">Kuwait </option>
                        <option value="kg">Kyrgyzstan </option>
                        <option value="la">Laos </option>
                        <option value="lv">Latvia </option>
                        <option value="lb">Lebanon </option>
                        <option value="ls">Lesotho </option>
                        <option value="lr">Liberia </option>
                        <option value="ly">Libya </option>
                        <option value="li">Liechtenstein </option>
                        <option value="lt">Lithuania </option>
                        <option value="lu">Luxembourg </option>
                        <option value="mo">Macao </option>
                        <option value="mk">Macedonia </option>
                        <option value="mg">Madagascar </option>
                        <option value="mw">Malawi </option>
                        <option value="my">Malaysia </option>
                        <option value="mv">Maldives </option>
                        <option value="ml">Mali </option>
                        <option value="mt">Malta </option>
                        <option value="mh">Marshall Islands </option>
                        <option value="mq">Martinique </option>
                        <option value="mr">Mauritania </option>
                        <option value="mu">Mauritius </option>
                        <option value="yt">Mayotte </option>
                        <option value="mx">Mexico </option>
                        <option value="md">Moldova </option>
                        <option value="mc">Monaco </option>
                        <option value="mn">Mongolia </option>
                        <option value="ms">Montserrat </option>
                        <option value="ma">Morocco </option>
                        <option value="mz">Mozambique </option>
                        <option value="mm">Myanmar </option>
                        <option value="na">Namibia </option>
                        <option value="nr">Nauru </option>
                        <option value="np">Nepal </option>
                        <option value="nl">Netherlands </option>
                        <option value="an">Netherlands Antilles </option>
                        <option value="nc">New Caledonia </option>
                        <option value="nz">New Zealand </option>
                        <option value="ni">Nicaragua </option>
                        <option value="ne">Niger </option>
                        <option value="ng">Nigeria </option>
                        <option value="nu">Niue </option>
                        <option value="nf">Norfolk Island </option>
                        <option value="kp">North Korea </option>
                        <option value="mp">Northern Mariana Islands </option>
                        <option value="no">Norway </option>
                        <option value="om">Oman </option>
                        <option value="pk">Pakistan </option>
                        <option value="pw">Palau </option>
                        <option value="ps">Palestine </option>
                        <option value="pa">Panama </option>
                        <option value="pg">Papua New Guinea </option>
                        <option value="py">Paraguay </option>
                        <option value="pe">Peru </option>
                        <option value="ph">Philippines </option>
                        <option value="pl">Poland </option>
                        <option value="pt">Portugal </option>
                        <option value="pr">Puerto Rico </option>
                        <option value="qa">Qatar </option>
                        <option value="re">Reunion </option>
                        <option value="ro">Romania </option>
                        <option value="ru">Russia </option>
                        <option value="rw">Rwanda </option>
                        <option value="sh">St Helena and dependencies </option>
                        <option value="kn">St. Kitts and Nevis </option>
                        <option value="lc">St. Lucia </option>
                        <option value="pm">St. Pierre and Macuellon </option>
                        <option value="vc">St. Vincent and the Grenadines </option>
                        <option value="ws">Samoa </option>
                        <option value="sm">San Marino </option>
                        <option value="st">Sao Tome and Principe </option>
                        <option value="sa">Saudi Arabia </option>
                        <option value="sn">Senegal </option>
                        <option value="sc">Seychelles </option>
                        <option value="sl">Sierra Leone </option>
                        <option value="sg">Singapore </option>
                        <option value="sk">Slovakia </option>
                        <option value="si">Slovenia </option>
                        <option value="sb">Solomon Islands </option>
                        <option value="so">Somalia </option>
                        <option value="za">South Africa </option>
                        <option value="kr">South Korea </option>
                        <option value="es">Spain </option>
                        <option value="lk">Sri Lanka </option>
                        <option value="sd">Sudan </option>
                        <option value="sr">Suriname </option>
                        <option value="sj">Svalbard and Jan Mayen </option>
                        <option value="sz">Swaziland </option>
                        <option value="se">Sweden </option>
                        <option value="ch">Switzerland </option>
                        <option value="sy" selected>
                          Syria{" "}
                        </option>
                        <option value="tw">Taiwan </option>
                        <option value="tj">Tajikistan </option>
                        <option value="tz">Tanzania </option>
                        <option value="th">Thailand </option>
                        <option value="tg">Togo </option>
                        <option value="tk">Tokelau </option>
                        <option value="to">Tonga </option>
                        <option value="tt">Trinidad and Tobago</option>
                        <option value="tn">Tunisia </option>
                        <option value="tr">Turkey </option>
                        <option value="tm">Turkmenistan </option>
                        <option value="tc">Turks and Caicos Islands </option>
                        <option value="tv">Tuvalu </option>
                        <option value="ug">Uganda </option>
                        <option value="ua">Ukraine </option>
                        <option value="uk">United Kingdom </option>
                        <option value="us">United States </option>
                        <option value="um">Minor Outlying Islands of the United States </option>
                        <option value="uy">Uruguay </option>
                        <option value="vi">U.S. Virgin Islands </option>
                        <option value="uz">Uzbekistan </option>
                        <option value="vu">Vanuatu </option>
                        <option value="va">Vatican City </option>
                        <option value="ve">Venezuela </option>
                        <option value="vn">Vietnam </option>
                        <option value="wf">Wallis and Futuna </option>
                        <option value="eh">Western Sahara </option>
                        <option value="ye">Yemen</option>
                        <option value="zm">Zambia </option>
                        <option value="zw">Zimbabwe </option>
                        <option value="nw">North Carolina </option>
                        <option value="im">Isle of Man </option>
                        <option value="gb">United Kingdom </option>
                        <option value="ks">Republic of Kosovo </option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="inner-required-product">
                        <p>Billing City</p>
                      </div>
                      <select name="billing_city" className="form-control" id="billing_city">
                        <option value={0}>Select City</option>
                        <option value={2046}>Damascus</option>
                        <option value={2053}>Al Hasakah</option>
                        <option value={2051}>Al Qunaytirah</option>
                        <option value={2045}>Aleppo</option>
                        <option value={2050}>Ar Raqqah</option>
                        <option value={2049}>As Suwayda'</option>
                        <option value={2048}>Dar'a</option>
                        <option value={2047}>Deir ez-Zor</option>
                        <option value={2044}>Hamah</option>
                        <option value={2043}>Homs</option>
                        <option value={2042}>Idlib</option>
                        <option value={2052}>Latakia</option>
                        <option value={2041}>Tartouss</option>
                      </select>
                    </div>
                  </div>
                  <div className="required-product-top-sec row">
                    <div className="col-xs-12 col-md-6">
                      <div className="inner-required-product">
                        <p>Billing Address</p>
                      </div>
                      <textarea
                        id="billing_address"
                        className="form-control"
                        name="billing_address"
                        placeholder="Billing Address"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="payment-btn">
                  <button className="btn btn-primary btn-blue" type="submit">
                    Proceed
                  </button>
                </div>
              </form>
              <form
                id="paypal-payment"
                className="hidden"
                action="https://www.abraa.com/new-dashboard/checkout"
                method="post"
                encType="multipart/form-data"
              >
                <input name="paymentmethod" type="hidden" defaultValue={1} />
                <input name="package_price" type="hidden" />
                <input name="plan_name" type="hidden" />
                <div className="payment-btn" style={{ textAlign: "left", marginTop: 10 }}>
                  <button className="btn btn-primary btn-paypal" type="submit">
                    Check out with{" "}
                    <img src="https://assets.abraacdn.com/assets/images/paypal-payment.png" alt />
                  </button>
                </div>
              </form>
              <form
                id="bank-payment"
                className="hidden"
                action="https://www.abraa.com/new-dashboard/checkout"
                method="post"
                encType="multipart/form-data"
              >
                <input name="paymentmethod" type="hidden" defaultValue={1} />
                <input name="package_price" type="hidden" />
                <input name="plan_name" type="hidden" />
                <div className="data-table">
                  <div className="data-row row">
                    <div className="col-xs-12 col-md-6">
                      <span>Name of bank</span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <span className="value">Abu Dhabi Commercial Bank</span>
                    </div>
                  </div>
                  <div className="data-row row">
                    <div className="col-xs-12 col-md-6">
                      <span>Account Name</span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <span className="value">Master Outlet Trading</span>
                    </div>
                  </div>
                  <div className="data-row row">
                    <div className="col-xs-12 col-md-6">
                      <span>Account number</span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <span className="value">11504961920001</span>
                    </div>
                  </div>
                  <div className="data-row row">
                    <div className="col-xs-12 col-md-6">
                      <span>IBAN No</span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <span className="value">AE83 0030 0115 0496 1920 001</span>
                    </div>
                  </div>
                  <div className="data-row row">
                    <div className="col-xs-12 col-md-6">
                      <span>Type</span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <span className="value">Commercial Premium Current Acct-AED OD</span>
                    </div>
                  </div>
                  <div className="data-row row">
                    <div className="col-xs-12 col-md-6">
                      <span>Swift Code</span>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <span className="value">ADCBAEAA</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p>
                    Please upload your payment receipt of amount <b className="membership-price">899 AED</b>
                  </p>
                  <div className="custom-file-upload">
                    <input type="file" name="receipt" />
                    <label>
                      <b>Upload receipt</b>
                      <div className="upload-icons">
                        <img
                          src="https://assets.abraacdn.com/assets/images/arrow-up.png"
                          className="arrow-up"
                          alt
                        />
                        <img src="https://assets.abraacdn.com/assets/images/bottom-upload.png" alt />
                      </div>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary btn-blue" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
          <div className="card w-40" style={{ paddingTop: 10 }}>
            <div className="membership" style={{ paddingLeft: 15 }}>
              <div className="membership-img hidden">
                <img src="https://assets.abraacdn.com/assets/images/bottom-upload.png" alt />
              </div>
              <div className="membership-text">
                <p>
                  <i className="fa fa-check" style={{ color: "#0062FF" }} />{" "}
                  <span style={{ color: "forestgreen" }}>Free cancellation &amp; refund</span> applicable for
                  this membership level.
                </p>
                <p>
                  <i className="fa fa-check" style={{ color: "#0062FF" }} /> We will not save your Credit
                  /Debit Card.
                </p>
                <p>
                  <i className="fa fa-check" style={{ color: "#0062FF" }} /> Discount coupons apply for the
                  first year only.
                </p>
                <p>
                  <i className="fa fa-check" style={{ color: "#0062FF" }} /> You will have immediate access to
                  all what this membership has to offer as soon as you complete your transacttion
                  successuflly.
                </p>
                <p>
                  <i className="fa fa-check" style={{ color: "#0062FF" }} /> System will automically notify
                  you 1 month before your membership expires.
                </p>
                <p>
                  <i className="fa fa-check" style={{ color: "#0062FF" }} /> If you select Bank transfer as
                  your payment method, You will need to upload your transfer /deposit proof, Your membership
                  will be upgraded as soon as your payment is validated.
                </p>
              </div>
              <div className="membership-checkbox">
                <div className="vat-checkbox vat-checkbox-sec">
                  <div className="checkbox">
                    <label>
                      <input
                        className="custom-check"
                        type="checkbox"
                        name="terms"
                        id="terms"
                        data-ng-model="example.check"
                        defaultChecked
                      />
                      <span className="box" />I agree to the Abraa Terms above
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="included-features hidden" id="small-features">
              <h3>What’s included in Abraa Small Business?</h3>
              <div className="feature">
                <i className="fa fa-check" />
                How many prodcut can list
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Leads per year
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Mini website with visible company name &amp; contact details
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Verified Badge
              </div>
            </div>
            <div className="included-features hidden" id="Corporates-features">
              <h3>What’s included in Abraa Gold Membership?</h3>
              <div className="feature">
                <i className="fa fa-check" />
                How many prodcut can list
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Leads per year
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Verified Badge
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Mini website with visible company name &amp; contact details
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Verified Badge
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Featured brand banner on home page
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Abraa chat (Receive WhatsApp chat from buyers)
              </div>
              <div className="feature">
                <i className="fa fa-check" />
                Featured product on home page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
