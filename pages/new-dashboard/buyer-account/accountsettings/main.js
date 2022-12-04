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
  useEffect(() => {
    if (typeof window !== undefined) {
      setpassword1(document.getElementById("password").value)
      setconfirm_password(document.getElementById("confirm_password").value)
      setmessageValidate(document.getElementById("message").innerHTML)
      setcolorValidate(document.getElementById("message").style.color)
    }
  }, [messageValidate])
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
      <div data-reactroot className="container-fluid">
        <div className="row">
          <div className="col-md-12" id="cardTotal">
            <ul className="nav nav-tabs">
              <li className={tab === true ? "active" : ""}>
                <a
                  onClick={() => setTab(true)}
                  style={{
                    color: tab === true ? "#617083" : "",
                    fontWeight: tab === true ? "bold" : "",
                    cursor: tab === true ? "default" : "",
                    borderBottom: tab === true ? "3px solid #faca0c" : " "
                  }}
                  data-toggle="tab"
                  //    href="#personal"
                  aria-expanded={tab === true ? "true" : "false"}
                >
                  PERSONAL
                </a>
              </li>
              <li className={tab === false ? "active" : ""}>
                <a
                  onClick={() => setTab(false)}
                  style={{
                    color: tab === false ? "#617083" : "",
                    fontWeight: tab === false ? "bold" : "",
                    cursor: tab === false ? "default" : "",
                    borderBottom: tab === false ? "3px solid #faca0c" : " "
                  }}
                  data-toggle="tab"
                  //    href="#security"
                  aria-expanded={tab === false ? "true" : "false"}
                >
                  SECURITY
                </a>
              </li>
            </ul>
            <div
              className="tab-content card"
              style={{
                border: "none",
                background: "#ffffff2b"
              }}
            >
              <div
                id="security"
                className={
                  tab === false ? "tab-pane card-content fade active in " : "tab-pane card-content fade"
                }
              >
                <div className="row">
                  <div className="col-md-12">
                    <h4>CONTACT INFORMATION CONFIRMATION</h4>
                    <p>
                      {/* react-text: 14 */}This information adds an extra layer of security for you. It
                      allows you to enable the Enhanced Security system and ensures that you are the only
                      individual able to use your account.{/* /react-text */}
                      <br />
                      <br />
                      {/* react-text: 17 */}If you want to license your products on the Abraa.com Marketplace,
                      please make sure your contact information is up to date. This information allows us to
                      reach out when you have a pending sale or when we need additional information regarding
                      one of your products.{/* /react-text */}
                      <br />
                      <br />
                      {/* react-text: 20 */}We will never disclose, sell, or publish your phone number or
                      email address. All information will be securely stored and will be used only for matters
                      regarding formal communications from Abraa.
                      {/* /react-text */}
                    </p>
                  </div>
                  <div className="col-md-12 mt-29">
                    <div className="form-items">
                      <div className="row">
                        <div className=" form-group col-md-5">
                          <label>EMAIL</label>
                          <div className="input-with-btn">
                            <div className="input">
                              <input
                                type="text"
                                name="email"
                                defaultValue={userData?.email}
                                id="emails"
                                className="form-control"
                                placeholder="EMAIL"
                                aria-label="..."
                                //   onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="button">
                              <button className="btn btn-success btn-fill">Confirm</button>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-5">
                          <label>NAME OF YOUR COMPANY / STORE</label>
                          <div className="input-with-btn">
                            <div className="input">
                              <input
                                defaultValue={userData?.company}
                                type="text"
                                name="cname"
                                id="cnames"
                                className="form-control"
                                placeholder="Company Name"
                                aria-label="..."
                              />
                            </div>
                            <div className="button">
                              <button className="btn btn-success btn-fill">Confirm</button>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-12" style={{ minHeight: 20 }}>
                          <div className="input-with-btn">
                            <div className="button">
                              {/* <button className="btn btn-warning btn-fill add_mail">
                                Add New Email
                              </button> */}
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-12 new_mails">
                          <div className="header">{/* <p className="title">More Emails</p> */}</div>
                        </div>
                      </div>
                    </div>
                    <div className="form-items">
                      <div className="header">
                        <p className="title">CHANGE PASSWORD</p>
                      </div>
                      <div className="row">
                        <div className=" form-group col-md-6">
                          <label>NEW PASSWORD</label>
                          <div>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              defaultValue={password}
                              className="form-control"
                              placeholder="NEW PASSWORD"
                              aria-label="..."
                              // onKeyUp={check}
                              onChange={(e) => {
                                setPassword(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className=" form-group col-md-6">
                          <label>CONFIRM PASSWORD</label>
                          <div>
                            <input
                              type="password"
                              name="confirm_password"
                              id="confirm_password"
                              defaultValue={confirmPassword}
                              className="form-control"
                              placeholder="CONFIRM PASSWORD"
                              aria-label="..."
                              onKeyUp={check}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {password1 !== null || confirm_password !== null ? (
                        <span
                          style={{
                            color: colorValidate,
                            fontSize: "x-large"
                          }}
                          id="message"
                        >
                          {messageValidate}
                        </span>
                      ) : (
                        <div id="message"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="personal"
                className={
                  tab === true ? "tab-pane card-content fade active in " : "tab-pane card-content fade"
                }
              >
                <div className="row">
                  <div className="col-md-6 paddingLeft0">
                    <h4
                      style={{
                        marginTop: "25px",
                        color: "#333333",
                        marginBottom: "5px",
                        fontWeight: "normal",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        fontFamily: "Inter"
                      }}
                      className="personal-label"
                    >
                      INFORMATION
                    </h4>
                    <div
                      style={{
                        border: "none !important"
                      }}
                      className="card"
                    >
                      <div
                        style={{
                          margin: 0,
                          marginTop: 10,
                          border: 0,
                          padding: 0,
                          verticalAlign: "baseline",
                          backgroundColor: "transparent",
                          fontSize: "100%"
                        }}
                        className="card-body"
                      >
                        <a href="https://www.abraa.com//plans" className="sm-font">
                          Upgrade
                        </a>
                        <p>Your account type is basic</p>
                      </div>
                    </div>
                    <div
                      style={{
                        marginBottom: "17px"
                      }}
                      className=" form-group"
                    >
                      <label id="fnamesLabel" className="personal-label">
                        First Name
                      </label>
                      <div>
                        <input
                          style={{
                            display: "block",
                            fontSize: "14px"
                          }}
                          type="text"
                          defaultValue={userData?.first_name}
                          id="fnames"
                          name="fnames"
                          className="form-control"
                          placeholder="Your name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div id="fnamesError" className="error font-red" />
                    </div>
                    <div
                      style={{
                        marginBottom: "17px"
                      }}
                      className=" form-group "
                    >
                      <label id="lnamesLabel" className="personal-label">
                        Last Name
                      </label>
                      <div>
                        <input
                          style={{
                            display: "block",
                            fontSize: "14px"
                          }}
                          type="text"
                          id="lnames"
                          name="lnames"
                          defaultValue={userData?.last_name}
                          className="form-control"
                          placeholder="Your Surname"
                          aria-label="..."
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div id="lnamesError" className="error font-red" />
                    </div>
                    <div
                      style={{
                        marginBottom: "17px"
                      }}
                      className=" form-group "
                    >
                      <label className="personal-label">Country</label>
                      <select
                        id="extended_country"
                        name="extended_country"
                        className="form-control"
                        data-error="#phone_count"
                        style={{
                          display: "block",
                          fontSize: "14px"
                        }}
                        onChange={(e) => getCitiesByCountry(e)}
                      >
                        <option value={0}>Select Country</option>
                        {countriesArray.map((one) => (
                          <option key={one.country} value={one.country}>
                            {one.country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      style={{
                        marginBottom: "17px"
                      }}
                      className=" form-group "
                    >
                      <label className="personal-label">City</label>
                      <select
                        style={{
                          display: "block",
                          fontSize: "14px"
                        }}
                        className="form-control notnice"
                        name="extended_city"
                        id="extended_city"
                      >
                        <option value={0}>Select City</option>
                        {citiesArray.map((one, index) => (
                          <option key={index} value={one}>
                            {one}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      style={{
                        marginBottom: "17px"
                      }}
                      className=" form-group "
                    >
                      <label>Select your preferred language</label>
                      <select
                        style={{
                          display: "block",
                          fontSize: "14px"
                        }}
                        name="preferred_lang"
                        id="preferred_lang"
                        className="lang-picker"
                      >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 custom-margin-top">
                    <h4
                      style={{
                        marginTop: "25px",
                        color: "#333333",
                        marginBottom: "5px",
                        fontWeight: "normal",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        fontFamily: "Inter"
                      }}
                    >
                      PROFILE SETTINGS
                    </h4>
                    <div className="form-group">
                      <input type="hidden" name="logo_ur" id="logo_ur" />
                      <div className="upload">
                        <div className="uploaded-img">
                          <Image
                            unoptimized={true}
                            width="46"
                            height="36"
                            alt="Avatar"
                            src={`https://ramaaz.dev/e-wallet-staginv3/files_service/public${userData?.avatar}`}
                            //    src={
                            //      "https://assets.abraacdn.com/assets/images/abraa-logo.svg"
                            //    }
                            //    className="fa fa-upload custom-upload-icon"
                          />
                        </div>
                        <div className="upload-tools">
                          <div className="select">
                            <button className="btn btn-default btn-sm custom-button">Choose File</button>
                            {/* <span>No file chosen</span> */}
                          </div>
                          <input type="file" name="item-img" id="item-img" />
                          <div className="delete">
                            <button className="btn btn-danger  btn-sm">Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>UPLOAD BUSINESS DOCUMENT</h4>
                    <div className="form-group">
                      <input type="hidden" name="business_ur" id="business_ur" />
                      <div className="upload">
                        <div className="upload-tools">
                          <div className="select">
                            <button className="btn btn-default btn-sm custom-button">Choose File</button>
                            <span>No file chosen</span>
                          </div>
                          <input
                            type="file"
                            name="business-img"
                            id="business-img"
                            multiple
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group" style={{ display: "none" }}>
                      <label>SELECT CATEGORIES YOU LIKE TO SELL</label>
                      <button className="btn btn-input">Browse Categories</button>
                      <div className="select-tags">
                        <span className="label">
                          {/* react-text: 154 */}Industrial &amp; Construction
                          {/* /react-text */}
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </span>
                        <span className="label">
                          {/* react-text: 158 */}Car Brand{/* /react-text */}
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </span>
                        <span className="label">
                          {/* react-text: 162 */}Car{/* /react-text */}
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="company"
                className={
                  tab === true ? "tab-pane card-content fade active in " : "tab-pane card-content fade"
                }
              ></div>
            </div>
            <div className="row pull-left" style={{ marginLeft: 8 }}>
              <a className="btn-deact" href="#">
                Deactivate your Abraa account
              </a>
            </div>
            <div className="row pull-right" style={{ marginRight: 8 }}>
              <div className="col-md-12 ">
                <button onClick={() => updateProfile()} className="btn  btn-fill btn-primary">
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
