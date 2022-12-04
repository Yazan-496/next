import { useState, useEffect } from "react"
import { useRouter, withRouter } from "next/router"
import Head from "next/head"
import { _confirmResetEmail } from "../../../redux/actions"
import Checkbox from "@material/react-checkbox"
import "@material/react-checkbox/dist/checkbox.css"
import React from "react"

const ResetPasswordEmail = () => {
  const router = useRouter()
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [checked, setChecked] = useState(null)
  const [matching, setMatching] = useState(true)
  const [test, setTest] = useState(false)
  const check = () => {
    if (password == confirmPassword) {
      setMatching(true)
    } else {
      setMatching(false)
    }
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/pages/account.css?b102" />
      </Head>
      <section>
        <div className="account-container  margin-top-40">
          <div className="row">
            <div className="container page-settings margin-top-20">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mt-5 ">
                  <div className="alert alert-success" style={{ display: "none" }}>
                    Please update your new password{" "}
                  </div>
                  <div className=" login-panel sign_content_main d3  margin-top-40">
                    <div className style={{ marginBottom: 20 }}>
                      <h3 className="text-dubai no-margin">Reset Password</h3>
                    </div>
                    <div
                      style={{
                        marginTop: "50px"
                      }}
                    >
                      <div className="form_div_main">
                        <p
                          id="new-psw-alert"
                          style={{
                            color: "red",
                            display: !matching && test ? "block" : "none"
                          }}
                        >
                          Please confirm your password well
                        </p>
                        {/* <p
                          id="new-psw-alert"
                          style={{
                            color: "red",
                            display: password?.length >= 8 ? "none" : "block"
                          }}
                        >
                          Please set your password min 8 char
                        </p> */}
                        <input type="hidden" name="token" defaultValue="GUTAfjnIxK" />
                        <div className=" form-group">
                          <label htmlFor="id_password" className="text-normal">
                            <span>*</span>PASSWORD
                          </label>
                          <div className="input-group">
                            <input
                              id="password"
                              type={checked ? "text" : "password"}
                              required
                              onKeyUp={check}
                              onChange={(e) => setPassword(e.target.value)}
                              type={checked ? "text" : "password"}
                              required
                              placeholder="Your account password"
                              name="password"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className=" form-group">
                          <div className="input-group">
                            <label htmlFor="id_cPassword" className="text-normal">
                              <span>*</span>CONFIRM PASSWORD{" "}
                            </label>
                            <input
                              id="confirmpassword"
                              type={checked ? "text" : "password"}
                              required
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              type={checked ? "text" : "password"}
                              onKeyUp={check}
                              placeholder="Confirm password"
                              name="confirm_password"
                              className="form-control"
                            />
                          </div>
                          <div
                            style={{
                              display: "inline-flex"
                            }}
                            className="form-group"
                          >
                            <Checkbox onClick={() => setChecked(!checked)} />
                            <label style={{ marginTop: "8px" }} htmlFor="show-hide-psw">
                              show/hide password
                            </label>
                          </div>
                        </div>
                        <div className=" form-group">
                          <div className="input-group">
                            <button
                              disabled={
                                password === null || password?.length < 8 || confirmPassword === null
                                //   !matching
                              }
                              className="btn button_log"
                              onClick={() => {
                                setTest(true),
                                  password !== null && confirmPassword !== null && matching
                                    ? _confirmResetEmail(
                                        {
                                          password: password,
                                          confirmPassword: confirmPassword,
                                          pid: router?.query?.pid
                                        },
                                        () => {
                                          router.push({
                                            pathname: "/auth/login"
                                          })
                                        }
                                      )
                                    : null
                              }}
                            >
                              Update
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
      </section>
    </>
  )
}

export default ResetPasswordEmail
