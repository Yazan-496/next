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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="header">
                      <p className="title">Secondary Emails List</p>
                    </div>
                    <input
                      type="hidden"
                      id="rep_owner"
                      name="rep_owner"
                      defaultValue={63487}
                      className="form-control"
                    />
                    <div className="row">
                      <div className="btn-radioset"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="header">
                      <p className="title">Add Another Email</p>
                    </div>
                    <div className=" form-group">
                      <label id="fbookLabel">Email Address</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="fbook"
                          id="fbook"
                          placeholder="Secondary Email"
                        />
                      </div>
                      <div className="error font-red" id="fbookError" />
                    </div>
                    <div className="row pull-right">
                      <div className="col-md-12 ">
                        <button id="addEmail" className="btn  btn-fill btn-primary">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
