import React, { useEffect, useState } from "react"
import { ImEqualizer2 } from "react-icons/im"
import { TbMessage } from "react-icons/tb"
import { GrClose } from "react-icons/gr"
import { IoReorderFourSharp } from "react-icons/io5"
import { RiOrderPlayLine } from "react-icons/ri"
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

export default function SideBar1(props) {
  const router = useRouter()
  const [openSide, setOpenSide] = useState(props.openSide)
  const [collpaseAccount, setCollpaseAccount] = useState(false)
  const [collpaseMyStore, setCollpaseMyStore] = useState(false)
  const [collpaseOrders, setCollpaseOrders] = useState(false)
  const [collpaseMessages, setCollpaseMessages] = useState(false)
  const [changeAccount, setChangeAccount] = useState(true)
  return (
    <div className="sidebar1">
      <div id="sidebar1">
        <div
          className={
            openSide === true
              ? "sidebar1-wrapper ps-container ps-theme-default ps-active-x ps-active-y"
              : "sidebar1-wrapper"
          }
          data-ps-id={openSide === true ? "95a42841-cba6-accc-f187-80875dfd8ed8" : ""}
          //     style={{ backgroundColor: "#022331" }}
        >
          <div className="logo">
            <a
              onClick={() =>
                router.push({
                  pathname: "/"
                })
              }
              className="logo-text"
            >
              <img
                src="https://assets.abraacdn.com/assets/react-assets/img/logo-white.svg"
                alt="Abraa"
                title="Abraa"
              />
            </a>
          </div>
          <div
            style={{
              display: openSide === true ? "block" : "none"
            }}
            className="logo logo-mini"
          >
            <a className="logo-text">
              <img
                src="https://assets.abraacdn.com/assets/react-assets/img/6-layers.svg"
                alt="Abraa"
                title="Abraa"
              />
            </a>
          </div>
          <div className="user">
            <div className="info">
              <a
                onClick={() => setChangeAccount(!changeAccount)}
                data-toggle="collapse"
                className={changeAccount ? "" : "collapsed"}
                aria-expanded={changeAccount ? "false" : "true"}
              >
                <span className="hidden-toggle">
                  {" "}
                  Supplier Account{" "}
                  <FontAwesomeIcon icon={faAngleLeft} className="fa fa-caret-left transition" />
                </span>
              </a>
              <div
                className={!changeAccount ? "collapse in" : "collapse"}
                aria-expanded={!changeAccount ? "false" : "true"}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li>
                    <a
                      href="/new-dashboard/buyer-account"
                      style={{
                        placeContent: "center"
                      }}
                      className="account"
                    >
                      Buyer Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="/new-dashboard/shipper-account"
                      style={{
                        placeContent: "center"
                      }}
                      className="account"
                    >
                      Shipper Account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav1">
            <li className="active">
              <a>
                <ImEqualizer2 style={{ width: 25, height: 25 }} className="icon-dashboard" />
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseMyStore ? "collapsed" : ""}
                aria-expanded={collpaseMyStore}
                onClick={() => setCollpaseMyStore(!collpaseMyStore)}
              >
                <FontAwesomeIcon icon={faStore} style={{ width: 25, height: 25 }} className="icon-store" />
                <p>
                  My Store <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseMyStore ? "collapse" : "collapse in"}
                id="componentsExamples"
                aria-expanded={collpaseMyStore}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className="">
                    <a href="/new-dashboard/my-store/add-product">Add Products</a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/my-store/my-products">My Products</a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/my-store/add-to-gallery">Add To Gallery</a>
                  </li>
                  <li class="">
                    <a href="/new-dashboard/my-store/boost-your-sales">
                      {" "}
                      Boost Your Sales &nbsp; &nbsp;
                      <label
                        style={{
                          width: "30px",
                          height: "16px",
                          borderRadius: "50%"
                        }}
                        className="label label-danger"
                      >
                        new
                      </label>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseOrders ? "collapsed" : ""}
                aria-expanded={collpaseOrders}
                onClick={() => setCollpaseOrders(!collpaseOrders)}
              >
                <IoReorderFourSharp style={{ width: 25, height: 30 }} className="icon-order" />
                <p>
                  Orders &amp; Statistics <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseOrders ? "collapse" : "collapse in"}
                id="componentsExamples"
                aria-expanded={collpaseOrders}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className>
                    <a href="/new-dashboard/orders/received-orders">Recieved orders </a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/orders/sent-orders">Sent orders</a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/orders/requests">Request For Quotations</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseMessages ? "collapsed" : ""}
                aria-expanded={collpaseMessages}
                onClick={() => setCollpaseMessages(!collpaseMessages)}
              >
                <TbMessage style={{ width: 25, height: 30 }} className="icon-message" />
                <p>
                  Messages <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseMessages ? "collapse" : "collapse in"}
                id="componentsExamples"
                aria-expanded={collpaseMessages}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className>
                    <a href="/new-dashboard/messages/messages">Messages</a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/messages/notifications">Notifications</a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/messages/product-reviews">Product Reviews</a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/messages/store-reviews">Store Reviews</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className>
              <a href="/new-dashboard/business-exchange">
                <FontAwesomeIcon
                  icon={faIdCard}
                  style={{ width: 25, height: 25 }}
                  className="fa fa-2x fa-id-card"
                  aria-hidden="true"
                />
                <p>Business Card Exchange</p>
              </a>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseAccount ? "collapsed" : ""}
                aria-expanded={collpaseAccount}
                onClick={() => setCollpaseAccount(!collpaseAccount)}
              >
                <FontAwesomeIcon icon={faGear} style={{ width: 25, height: 25 }} className="icon-settings" />
                <p>
                  Account Settings <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseAccount ? "collapse" : "collapse in"}
                id="mapsExamples"
                aria-expanded={collpaseAccount}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className>
                    <a onClick={() => router.push("/new-dashboard/account-settings/profile-settings")}>
                      My Profile
                    </a>
                  </li>
                  <li className>
                    <a onClick={() => router.push("/new-dashboard/account-settings/store-settings")}>
                      Store Setting
                    </a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/account-settings/email-settings">Email Settings</a>
                  </li>
                  <li className>
                    <a href="/new-dashboard/account-settings/upgrade-membership">Upgrade Membership</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="sidebar1-footer">
            <div className="info">
              <p>
                <span className="hidden-toggle">You are in Basic plan </span>
              </p>
              <button className="btn btn-success btn-fill upgrade">
                UPGRADE <span className="hidden-toggle">NOW</span>
              </button>
            </div>
            <div className="info">
              <p></p>
              <button
                onClick={() => router.push("/new-dashboard/kyc-level-list")}
                className="btn btn-success btn-fill upgrade"
              >
                <span className="hidden-toggle"> MY KYC</span>
              </button>
            </div>
          </div>
          <div className="ps-scrollbar-x-rail" style={{ width: 80, left: 0, bottom: 3 }}>
            <div className="ps-scrollbar-x" tabIndex={0} style={{ left: 0, width: 27 }} />
          </div>
          <div className="ps-scrollbar-y-rail" style={{ top: 0, height: 647, right: 3 }}>
            <div className="ps-scrollbar-y" tabIndex={0} style={{ top: 0, height: 601 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
