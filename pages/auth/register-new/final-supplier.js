import React, { useState } from "react"
import { withRouter } from "next/router"
import { useRouter } from "next/router"
import Head from "next/head"
import Loading from "../loading"
import Link from "next/link"
function FinalSupplier(props) {
  const [email, setEmail] = useState(props.email)
  const [username, setUsername] = useState(props.username)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const currentLocale = router?.locale
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
          //    backgroundColor: "#eff0f5",
          height: "600px"
        }}
      >
        <div className="top_nav_main">
          <div className="top_nav left">
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
            <a>About</a>
            <a>Request a Quote</a>
            <a>عربي</a>
          </div>
          <div className="top_nav right">
            <a>Already have an account?</a>
            <a className="btn">SIGN IN</a>
          </div>
        </div>
        <div className="registration_success" id="registration_success" style={{ display: "block" }}>
          <img
            src="https://assets.abraacdn.com/assets/images/new-register/confirm-email.png"
            alt="confirm image"
          />
          <div className="text_area">
            <div className="text">A confirmation email has been sent to your mailbox </div>
            <div className="email" id="setemail">
              {email}
            </div>
          </div>
          <div className="send_area">
            <div className="bottom_text">
              <a id="resend_email_link">I haven’t received my email</a>
              <div className="note_recive" style={{ display: "none" }}>
                <div className="note_text">
                  <div>1- Please check your spam folder</div>
                  <div>
                    2- If you didn’t received your email{" "}
                    <a className="rended_email">click here to resend email</a>
                  </div>
                  <div>
                    3- Still havn’t received your email? <a>Try using another email</a>
                  </div>
                </div>
                <div className="note_sicees" style={{ display: "none" }}>
                  <i className="fa fa-check" aria-hidden="true" />
                  <div>Email is successfully resent</div>
                </div>
              </div>
            </div>
            <a className="rended_email2">Send Email again</a>
            <a
              onClick={() => {
                setLoading(true)
                setTimeout(() => props.switchToNext(), 1000)
              }}
              className=""
            >
              Skip
            </a>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  )
}
export default withRouter(FinalSupplier)
