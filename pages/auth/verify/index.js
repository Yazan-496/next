import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useRouter } from "next/router"
import { withRouter } from "next/router"
import Confetti from "react-confetti"
import Image from "next/image"
import Link from "next/link"

function Index2(props) {
  const router = useRouter()
  const currentLocale = router?.locale
  //   const { userId } = router?.query?.id
  useEffect(() => {
    setTimeout(
      () =>
        router.push({
          pathname: "/new-dashboard",
          query: {
            reducer: false
          }
        }),
      2000
    )
    //     props.switchToNext()
  })
  return (
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
                    title="abraa"
                    width="100"
                    height="30"
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
            <Confetti width={1336} height={344} />
          </div>
          <div className="u-box">
            <h1 className="h1-elizeth u-margin-bottom-s">
              <span className="icon-in-text-checkmark" />
              Congratulations,Your email has been confirmed successfully
            </h1>
            <div className="scope-text u-font-size-l">
              <p style={{ textAlign: "center" }}>
                <Image
                  width="100"
                  height="30"
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
                  <i className="fa fa-check-circle resend-msg" style={{ display: "none", color: "green" }} />
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
  )
}
export default withRouter(Index2)
