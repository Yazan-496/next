import React, { useState, useEffect } from "react"
import { _register, getCities, getCountries, getProfile, _updateProfile } from "../../../../redux/actions"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
// import SVG from "react-inlinesvg"
import { useDispatch, useSelector } from "react-redux"
import { message } from "antd"

export default function Main() {
  const [companyname, setCompanyName] = useState("")
  const [mobile1, setMobile1] = useState("")
  const [citiesArray, setCitiesArray] = useState([])
  const [countriesArray, setCountries] = useState([])
  const [selectedValue, setSelectedValue] = useState("Syria")
  const [userToken, setUserToken] = useState(null)
  const [userData, setUserData] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email1, setEmail1] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [cityId, setCityId] = useState(null)
  const [whatsappMobile, setWhatsappMobile] = useState("")
  const [aboutCompany, setAboutCompany] = useState("")
  const [colorValidate, setcolorValidate] = useState(null)
  const [messageValidate, setmessageValidate] = useState(null)
  const [matching, setMatching] = useState(true)
  const [twitter, setTwitter] = useState("")
  const [facebook, setFacebook] = useState("")
  const [vat, setVat] = useState("")
  const [website, setWebsite] = useState("")
  const [address, setAddress] = useState("")
  const [mobileCompany, setmobileCompany] = useState("")

  const setCity = (e) => {
    setCityId(e.target.value)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
    }
  }, [messageValidate])
  useEffect(() => {
    getCountries(
      (d) => {
        setCountries(d)
      },
      (err) => {}
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
      (err) => {}
    )
  }
  const updateProfile = () => {
    matching === true &&
      _updateProfile(
        {
          token: userToken,
          userData: {
            ...userData,
            email1: email1,
            mobile_company: mobileCompany,
            whatsapp_mobile: whatsappMobile,
            mobile: mobile1,
            twitter: twitter,
            facebook: facebook,
            vat: vat,
            address: address
            // email: email
          }
        },
        () => {}
      )
  }
  return (
    <div className="content" id="content">
      <div className="row" style={{ marginBottom: 20, fontSize: "14px" }}>
        <div className="col-sm-12" id="progress-table">
          <p style={{ fontWeight: 800, fontSize: "14px" }}>Completeness</p>
          <div className="progress-card affix-top">
            <div className="progress-header">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow="100%"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "100%" }}
                ></div>
                <div
                  className="progress-details"
                  style={{
                    justifyContent: "center",
                    padding: 10,
                    color: "rgb(255, 255, 255)",
                    fontSize: "14px"
                  }}
                >
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <p
            className="title"
            style={{
              fontSize: "14px"
            }}
          >
            Basic Information
          </p>
        </div>
        <div className="col-sm-6">
          <p
            className="title"
            style={{
              fontSize: "14px"
            }}
          >
            ABOUT STORE
          </p>
        </div>
      </div>
      <div class="row" data-select2-id="select2-data-11-b1td">
        <div
          style={{
            width: "-webkit-fill-available"
          }}
        >
          <div className="col-sm-6">
            <hr />
          </div>
          <div className="col-sm-6">
            <hr />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label style={{ display: "inline-block", fontSize: "14px" }} id="nameLabel">
                  NAME OF YOUR COMPANY/STORE
                </label>
                {/* <label
                  onclick="$('#name').toggleClass('unlocked-store-name');"
                  style={{
                    float: "right",
                    color: "mediumblue",
                    cursor: "pointer",
                    fontSize: "14px"
                  }}
                >
                  Change Your Store Name
                </label> */}
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  className="form-control checkable progress-field locked-store-name unlocked-store-name"
                  defaultValue={companyname}
                  onChange={(e) => setCompanyName(e.target.value)}
                  name="name"
                  id="name"
                />
                <div className="error font-red" id="nameError" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  type="hidden"
                  name="logo_ur"
                  defaultValue=""
                  className="progress-field"
                  id="logo_ur"
                />
                <div className="upload">
                  <div className="uploaded-img">
                    <img src />
                  </div>
                  <div className="upload-tools">
                    <div className="select">
                      <button className="btn btn-default btn-sm upload-logo-image custom-button">
                        Choose File
                      </button>
                      <span>No file chosen</span>
                    </div>
                    <input
                      style={{
                        fontSize: "14px"
                      }}
                      type="file"
                      name="item-img"
                      id="item-img"
                      multiple
                    />
                    <div className="delete">
                      <button className="btn btn-danger btn-sm delete-logo">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                >
                  Your Product Keywords
                </label>
                <select
                  style={{
                    fontSize: "14px"
                  }}
                  className="select2-keywords form-control progress-field progress-field-select select2-hidden-accessible"
                  name="keywords_arr[]"
                  id="keywords"
                  multiple
                  placeholder="Type and hit tab or enter"
                  data-select2-id="select2-data-keywords"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option selected value="bih" data-select2-id="select2-data-8-prn3">
                    bih
                  </option>
                  <option value="dsd" data-select2-id="select2-data-277-cmgt" data-select2-tag="true">
                    dsd
                  </option>
                </select>
                <span
                  className="select2 select2-container select2-container--default select2-container--below"
                  dir="ltr"
                  data-select2-id="select2-data-7-zeew"
                  style={{ width: 523 }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--multiple"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={-1}
                      aria-disabled="false"
                    >
                      <ul className="select2-selection__rendered" id="select2-keywords-container">
                        <li
                          className="select2-selection__choice"
                          title="bih"
                          data-select2-id="select2-data-280-aix8"
                        >
                          <button
                            type="button"
                            className="select2-selection__choice__remove"
                            tabIndex={-1}
                            title="Remove item"
                            aria-label="Remove item"
                            aria-describedby="select2-keywords-container-choice-38kd-bih"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <span
                            className="select2-selection__choice__display"
                            id="select2-keywords-container-choice-38kd-bih"
                          >
                            bih
                          </span>
                        </li>
                        <li
                          className="select2-selection__choice"
                          title="dsd"
                          data-select2-id="select2-data-281-ayyz"
                        >
                          <button
                            type="button"
                            className="select2-selection__choice__remove"
                            tabIndex={-1}
                            title="Remove item"
                            aria-label="Remove item"
                            aria-describedby="select2-keywords-container-choice-9e6v-dsd"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <span
                            className="select2-selection__choice__display"
                            id="select2-keywords-container-choice-9e6v-dsd"
                          >
                            dsd
                          </span>
                        </li>
                      </ul>
                      <span className="select2-search select2-search--inline">
                        <textarea
                          className="select2-search__field"
                          type="search"
                          tabIndex={0}
                          autoCorrect="off"
                          autoCapitalize="none"
                          spellCheck="false"
                          role="searchbox"
                          aria-autocomplete="list"
                          autoComplete="off"
                          aria-label="Search"
                          aria-describedby="select2-keywords-container"
                          placeholder
                          style={{ width: "0.75em" }}
                          defaultValue=""
                        />
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className=" form-group ">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="aboutpageLabel"
                >
                  ABOUT YOUR COMPANY
                </label>
                <textarea
                  className="form-control custom-height progress-field"
                  name="aboutpage"
                  id="aboutpage"
                  placeholder="Tell us more something about your company"
                  rows={4}
                  defaultValue={aboutCompany}
                  onChange={(e) => setAboutCompany(e.target.value)}
                />
                <div className="error font-red" id="aboutpageError"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className=" form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="emailLabel"
                >
                  EMAIL
                </label>
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  defaultValue={email1}
                  type="text"
                  className="form-control progress-field"
                  name="company_email"
                  id="company_email"
                  placeholder="Ahmad@xyz.com"
                  onChange={(e) => setEmail1(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className=" form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="twitterLabel"
                >
                  TWITTER URL
                </label>
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  defaultValue={twitter}
                  type="text"
                  onChange={(e) => setTwitter(e.target.value)}
                  className="form-control progress-field"
                  name="twitter"
                  id="twitter"
                  placeholder="Full website address"
                />
                <div className="error font-red" id="twitterError" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className=" form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="company_mobileLabel"
                >
                  Mobile:
                </label>
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  defaultValue={mobile1}
                  type="text"
                  className="form-control checkable placeholderRed progress-field"
                  name="company_mobile"
                  id="company_mobile"
                  onChange={(e) => setMobile1(e.target.value)}
                  placeholder="* Enter Mobile Number"
                />
                <div className="error font-red" id="company_mobileError" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className=" form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="fbookLabel"
                >
                  FACEBOOK URL
                </label>
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  type="text"
                  defaultValue={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  className="form-control progress-field"
                  name="fbook"
                  id="fbook"
                  placeholder="FACEBOOK URL"
                />
                <div className="error font-red" id="fbookError" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className=" form-group ">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="company_whatsappLabel"
                >
                  Whatsapp:
                </label>
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  type="text"
                  defaultValue={whatsappMobile}
                  className="form-control checkable placeholderRed progress-field"
                  name="company_whatsapp"
                  id="company_whatsapp"
                  onChange={(e) => setWhatsappMobile(e.target.value)}
                  placeholder="* Enter Whatsapp Number"
                />
                <div className="error font-red" id="company_whatsappError" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className=" form-group">
                <label>VAT Number (Optional)</label>
                <input
                  style={{
                    fontSize: "14px"
                  }}
                  type="text"
                  defaultValue={vat}
                  onChange={(e) => setVat(e.target.value)}
                  className="form-control progress-field"
                  name="vat_number"
                  id="vat_number"
                  aria-label="..."
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="phoneLabel"
                >
                  COMPANY CONTACT PHONE NUMBER
                </label>
                <PhoneInput
                  type="tel"
                  className="form-control"
                  style={{ flex: 4 }}
                  aria-required="true"
                  placeholder="Enter phone number"
                  value={mobileCompany}
                  onChange={setmobileCompany}
                />
                <div className="error font-red" id="phoneError" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className=" form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="weburlLabel"
                >
                  WEBSITE URL
                </label>
                <div>
                  <input
                    type="text"
                    style={{
                      fontSize: "14px"
                    }}
                    defaultValue={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="form-control  progress-field"
                    name="weburl"
                    id="weburl"
                    placeholder="Full website address"
                  />
                </div>
                <div className="error font-red" id="weburlError" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className=" form-group" data-select2-id="select2-data-14-p526">
                <label>Country</label>
                <select
                  style={{
                    dispaly: "block",
                    fontSize: "14px"
                  }}
                  id="extended_country"
                  name="extended_country"
                  className="form-control notnice"
                  data-error="#phone_count"
                  onChange={(e) => getCitiesByCountry(e)}
                >
                  <option value={0}>Select Country</option>
                  {countriesArray.map((one, index) => (
                    <option key={index} value={one.country}>
                      {one.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className=" form-group">
                <label
                  style={{
                    fontSize: "14px"
                  }}
                  id="addressLabel"
                >
                  FULL ADDRESS
                </label>
                <div>
                  <input
                    style={{
                      fontSize: "14px"
                    }}
                    defaultValue={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control  progress-field"
                    name="address"
                    id="address"
                    aria-label="..."
                  />
                </div>
                <div className="error font-red" id="addressError" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className=" form-group " data-select2-id="select2-data-255-zwwa">
                <label>City</label>
                <select
                  style={{
                    dispaly: "block",
                    fontSize: "14px"
                  }}
                  className="form-control notnice"
                  name="extended_city"
                  onChange={(e) => setCity(e)}
                  id="extended_city"
                >
                  <option value={0}>Select City</option>
                  {citiesArray.map((one, index) => (
                    <option key={index} value={index}>
                      {one}
                    </option>
                  ))}
                </select>
                {/* <span
                  className="select2 select2-container select2-container--default select2-container--above"
                  dir="ltr"
                  data-select2-id="select2-data-1-p7t6"
                  style={{ width: 523 }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-city-container"
                      aria-controls="select2-city-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-city-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Damascus"
                      >
                        Damascus
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true" />
                </span> */}
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-actions" style={{ textAlign: "center", margin: 15 }}>
                <button onClick={() => updateProfile()} className="btn  btn-fill btn-primary btn-save">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
