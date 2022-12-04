import React, { useEffect } from "react"
import { GrClose } from "react-icons/gr"
import { IoReorderFourSharp } from "react-icons/io5"
import { RiOrderPlayLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faClose,
  faAmbulance,
  faAnchor,
  FaProductHunt,
  faInfo,
  faImage,
  faStar,
  faPhone,
  faFax,
  faEnvelope,
  faEllipsis,
  faSignOut,
  faCaret,
  faUser,
  faStore,
  faBell,
  faCheck,
  faCogs,
  faAngleLeft,
  faDashboard,
  faMessage,
  faSettings,
  faList,
  faIdCard,
  faGear,
  faTachometerAverage,
  faTachometerAltAverage,
  faEquals,
  faClipboard
} from "@fortawesome/free-solid-svg-icons"
import { faContactCard, faOrder } from "@fortawesome/free-regular-svg-icons"
import { useRouter } from "next/router"

function Navbar1(props) {
  const user = useSelector((store) => store?.Reducer?.username)
  const ref = useSelector((store) => store?.Reducer?.ref)
  const router = useRouter()
  useEffect(() => {}, [ref])

  const openSide = props.openSide
  useEffect(() => {
    // console.log(openSide, "openSide")
  }, [openSide])
  return (
    <div id="navbar11">
      <nav className="navbar11 navbar11-default">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start"
          }}
          className="container-fluid"
        >
          <div className="navbar11-minimize">
            <button
              id="minimizeSidebar"
              className="btn btn-primary btn-fill btn-round"
              onClick={() => props.setOpenSideProps(!openSide)}
              style={{
                color: "white",
                width: "38px",
                height: "38px",
                padding: "9px"
              }}
            >
              {openSide === true ? (
                //  <RiOrderPlayLine />
                <i className="fa fa-ellipsis-v visible-on-sidebar-regular" />
              ) : (
                //  <FontAwesomeIcon icon={faClose} />
                <i className="fa fa-ellipsis-v visible-on-sidebar-regular" />
              )}
            </button>
          </div>
          <div className="navbar11-header">
            <button
              type="button"
              onClick={() => props.setOpenSideProps(!openSide)}
              className={props.openSide === true ? "navbar11-toggle toggled" : "navbar11-toggle"}
              data-toggle="collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a onClick={() => router.push("/")} className="min-mobile">
              <img src="https://assets.abraacdn.com/assets/images/abraa-logo.svg" alt="Abraa" title="Abraa" />
            </a>
          </div>
          <div
            style={{
              display: "block !important",
              marginLeft: "inherit"
            }}
            className="collapse navbar11-collapse"
          >
            <ul style={{ alignItems: "center" }} className="nav navbar11-nav navbar11-right">
              <li>
                <a>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      width: 16,
                      height: 16
                    }}
                    className="fa fa-user"
                  />
                  Hi! {user}
                </a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      width: 16,
                      height: 16
                    }}
                    className="fa fa-envelope"
                  />
                  <span id="message-notif" className="notification yellow" style={{ display: "none" }} />
                  <p style={{ display: "none" }} className="hidden-md hidden-lg">
                    Messages <b className="caret" />
                  </p>
                </a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <FontAwesomeIcon
                    style={{
                      width: 14,
                      height: 16
                    }}
                    icon={faBell}
                    className="fa fa-bell"
                  />
                  <span id="blue-notif" className="notification blue" />
                  <p style={{ display: "none" }} className="hidden-md hidden-lg">
                    Notifications <b className="caret" />
                  </p>
                </a>
                <ul className="dropdown-menu notification-container">
                  <li id="notification-title">
                    <a className="markread" id="markread" style={{ display: "block" }}>
                      <FontAwesomeIcon icon={faCheck} className="fa fa-check" aria-hidden="true" />
                      Mark all as Read{" "}
                    </a>
                  </li>
                  <li>
                    <a data-id={38532}>
                      Your seller profile is incomplete !<br />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-with-icons">
                <a className="dropdown-toggle" id="avatar" data-toggle="dropdown">
                  <span style={{ display: "block !important" }} className="hidden-sm1">
                    <span className="avatar">
                      <img src="https://s101.abraacdn.com/files/792699298.png" alt="Profile picture" />
                    </span>
                    <b className="caret" />
                  </span>
                  <p style={{ display: "none" }} className="hidden-md hidden-lg">
                    Account <b className="caret" />
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-with-icons">
                  <li>
                    <a style={{ fontSize: 10 }}>
                      <i className="fa fa-envelope" />
                      <span className="header-email">sales@abraa.com</span>
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "#2da6de!important" }}>
                      <FontAwesomeIcon icon={faUser} className="fa fa-user" /> View Store{" "}
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" /> Messages{" "}
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faCogs} className="fa fa-cogs" /> Settings{" "}
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a className="text-danger">
                      <FontAwesomeIcon icon={faSignOut} className="fa fa-sign-out-alt" />
                      Log out{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

// const mapStateToProps = (store) => ({
// //   username: store.username
// })
export default Navbar1
