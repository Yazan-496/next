import React, { Component } from "react"
import Image from "next/image"
import user from "../header-icons/user1.png"
import heart from "../header-icons/heart.png"
import notification from "../header-icons/notification.png"
import messages from "../header-icons/messages.png"
import container from "../header-icons/container.png"
import JoinFree from "./joinfree.js"
import { connect } from "react-redux"
import Logo from "./logo"
import Dashboard from "./gotodashoboard"
import Secure from "./secure"
import { _register } from "../../redux/actions"
import GoToSignIn from "./goToSignIn"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: false,
      setNav: false,
      selectedOption: "Products",
      openItem: false,
      selcted: 0,
      signIn: false,
      openCategories: false,
      user: null,
      token: null,
      userData: null
    }
  }

  componentDidMount() {
    //************Sticky***********//
    if (typeof window !== undefined) {
      this.setState({
        ...this.state,
        userData: JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))
          ?.userData?.data,
        token: JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData
          ?.access_token,
        user: JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData
          ?.username
      })
    }
    window.onscroll = function () {
      myFunction()
    }
    const header = document.getElementById("myHeader")
    const sticky = header.offsetTop
    //     const handleFocusEvent = (e: FocusEvent<Target= focusin, RelatedTarget=menu-5353>) => {
    //       // Do something
    //     }

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    }
  }

  render() {
    return (
      <>
        <header
          className="position-fixed w-100 head-box bg-white"
          id="myHeader"
        >
          <nav>
            <div className="search-bar-top products-search-top">
              <div className="close-icon d-block position-absolute">
                <a className="bg-transparent border-0 p-0 d-inline-block text-dark">
                  <i className="flaticon-cancel" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div
              //     style={{ height: "150px" }}
              className="container-fluid header_container"
            >
              <div className="row align-items-center border-bottom header-upper">
                <div className="col-md-2 col-lg-2 col-xl-2 col-5 col-5 pl-0">
                  <div className="logo_search_group d-flex justify-content-between d-sm-flex justify-content-sm-between align-items-center">
                    <div className="logo_wrap">
                      <Logo />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 py-0 py-lg-0 px-0 order-2 order-md-0">
                  <div className="header_search_form">
                    <form
                      name="search"
                      className="header-seach"
                      onsubmit="return false;"
                    >
                      <div className="search_position position-relative d-inline-block w-100">
                        <div
                          className="search_cus_select position-absolute"
                          onClick={() =>
                            this.setState({
                              product: !this.state.product
                            })
                          }
                        >
                          <select
                            name="Selectbox bg-lightgrey"
                            id="headerSearchType"
                            className="wpcf7-form-control wpcf7-select"
                            aria-invalid="false"
                            // onChange={ (e) =>
                            //      this.setState({
                            //           ...this.state,
                            //           selectValue: e.target.value
                            //      })
                            // }
                          >
                            <option value="Products">Products</option>
                            <option value="RFQs">RFQs</option>
                          </select>
                          <div
                            className={
                              this.state.product === false
                                ? "nice-select wpcf7-form-control wpcf7-select"
                                : "nice-select wpcf7-form-control wpcf7-select open"
                            }
                            tabIndex={0}
                          >
                            <span className="current">
                              {this.state.selectedOption}
                            </span>
                            <ul className="list">
                              <li
                                onClick={() =>
                                  this.setState({
                                    selectedOption: "Products"
                                  })
                                }
                                data-value="Products"
                                className={
                                  this.state.selectedOption === "Products"
                                    ? "option selected "
                                    : "option focus"
                                }
                              >
                                Products
                              </li>
                              <li
                                onClick={() =>
                                  this.setState({
                                    selectedOption: "RFQs"
                                  })
                                }
                                data-value="RFQs"
                                className={
                                  this.state.selectedOption === "RFQs"
                                    ? "option selected "
                                    : "option focus"
                                }
                              >
                                RFQs
                              </li>
                            </ul>
                          </div>
                        </div>
                        <input
                          name="s"
                          id="search_key"
                          placeholder="What are you looking for?"
                          type="text"
                          className="d-inline-block border-0 w-100"
                        />
                        <div className="position-absolute submit_btn_header h-100">
                          <button
                            type="submit"
                            id="search-button-top"
                            className="bg_blue text-white border-0 h-100 d-flex align-items-center px-3"
                          >
                            <i className="ri-search-2-line" />
                            <span className="text-white pl-md-2 d-none d-md-inline-block">
                              Search
                            </span>
                          </button>
                        </div>
                        <div
                          className="suggest-items-box"
                          style={{ display: "none" }}
                        >
                          <ul />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 col-6 pr-0 ml-auto ml-md-0">
                  <div className="shop_list">
                    <ul className="pl-0 mb-0 d-flex align-items-center justify-content-end p-0 justify-content-md-between header-icon_container">
                      <li className=" d-flex align-items-center position-relative justify-content-center sign_and_login pt-2 pb-2">
                        <span>
                          <Image
                            layout="fixed"
                            unoptimized={true}
                            src={user}
                            alt="user"
                            width="30"
                            height="30"
                            className="header-icon icon1 mr-1"
                          />
                        </span>
                        {/* {console.log(this.state.token, "token")} */}
                        {/* {console.log(this.state.userData, "userdata")} */}
                        {/* {console.log(this.state.user, "username")} */}
                        {this.state.userData?.access_token === null ||
                        this.state.userData?.access_token === undefined ? (
                          <div className="d-flex flex-column signInText">
                            <GoToSignIn />
                            <JoinFree />
                          </div>
                        ) : (
                          <Dashboard user={this.state?.userData?.username} />
                        )}
                      </li>

                      <li className="ml-md-2 d-none d-md-block pt-2 pb-2">
                        <a className="text-dark d-flex flex-column align-items-center">
                          <Image
                            src={heart}
                            unoptimized={true}
                            alt="user"
                            width="22"
                            height="22"
                            className="header-icon "
                          />
                          <div className="icon-text">Favorites</div>
                        </a>
                      </li>
                      <li className="ml-md-2 d-none d-md-block envelope_list position-relative IsNotifications pt-2 pb-2">
                        <a className=" position-relative d-flex flex-column align-items-center">
                          <Image
                            src={messages}
                            unoptimized={true}
                            alt="user"
                            width="22"
                            height="22"
                            className="header-icon"
                          />
                          <div className="icon-text">Messages</div>
                        </a>
                      </li>
                      <li
                        className="ml-md-2 d-none d-md-block IsNotifications position-relative pt-2 pb-2"
                        id="notification_data"
                      >
                        <a className=" position-relative d-flex flex-column align-items-center">
                          <Image
                            src={notification}
                            unoptimized={true}
                            alt="user"
                            width="22"
                            height="22"
                            className="header-icon"
                          />
                          <div className="icon-text">Notifications</div>
                        </a>
                      </li>
                      <li className="d-md-none d-flex align-items-center position-relative justify-content-center sign_and_login pt-2 pb-2 pr-2">
                        {/* <span>
                                                 <a href="https://www.abraa.com/login" class="d-flex flex-column align-items-center">
                                                      <Image
                                                src="../header-icons/user1.png" alt="" class="header-icon icon1 mr-1">
                                                           <div class="icon-text">Sign In</div>
                                                 </a>
                                            </span> */}
                      </li>
                      <li className="ml-md-2 position-relative pt-2 pb-2 pr-2 pr-sm-0">
                        <a className="d-flex align-items-center text-dark d-flex flex-column align-items-center">
                          <Image
                            src={container}
                            unoptimized={true}
                            alt="user"
                            width="22"
                            height="22"
                            className="header-icon"
                          />
                          {/* <div class="icon-text">Cart</div> */}
                          {/* <i class="ri-truck-line"></i> */}
                          <div className="icon-text">Container</div>
                          <span className="orange not_number" id="cartCount">
                            0
                          </span>
                          <span className="text-dark cart_totla ml-1 d-none d-lg-inline-block">
                            {/* Cart */}
                          </span>
                        </a>
                        <div className="dropdown-menu" id="cart-dropdown">
                          <div className="d-flex flex-column">
                            <h5 className="pt-15 alert alert-info text-center m-0">
                              Container is empty
                            </h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                style={{ height: "50px" }}
                className="row align-items-center header_row_2 header-lower"
              >
                <div className="col-3 col-md-2 col-xl-2 px-0">
                  <div className="cat_menu">
                    <div
                      onClick={() =>
                        this.setState({
                          setNav: true
                        })
                      }
                      className="cat_menu_text d-flex align-items-center"
                    >
                      <div className="toggle_on d-flex align-items-center">
                        <i className="ri-menu-2-line d-inline-block" />
                        <span className="d-inline-block">Category</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-7 d-none d-md-block">
                  <div className="right_menu_close d-block d-lSecure/g-none position-absolute">
                    <a className="bg-transparent border-0 p-0 d-inline-block text-dark">
                      <i className="flaticon-cancel" aria-hidden="true" />
                    </a>
                  </div>
                  <div
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "space-around",
                    //   fontSize: "14px"
                    // }}
                    className="right_menu text-left text-md-center"
                  >
                    <Secure />
                  </div>
                </div>
                <div className="col-8 col-md-3 pr-0 cart-icon-right cart-icon-right_1 ml-auto ml-md-0">
                  <div className="config_def d-flex align-items-center justify-content-end">
                    <div className="config header-section">
                      <div className="config_select_def">
                        <Image
                          src="https://s101.abraacdn.com/files/usa.png"
                          alt=""
                          width="22"
                          height="14"
                        />
                        <span style={{ marginLeft: "3px" }}>English - USD</span>
                        <div className="select_def_box">
                          <div className="config-select" id="languages">
                            <i className="ri-arrow-down-s-line" />
                            <span>
                              <Image
                                src="https://s101.abraacdn.com/files/usa.png"
                                alt=""
                                width="22"
                                height="14"
                              />
                              English
                            </span>
                            <div className="config-select-options">
                              <a href="https://www.abraa.com/en/change_lang/">
                                <span>
                                  <Image
                                    src="https://s101.abraacdn.com/files/usa.png"
                                    alt=""
                                    width="22"
                                    height="14"
                                  />
                                  English
                                </span>
                              </a>
                              <a href="https://www.abraa.com/ar/change_lang/">
                                <span>
                                  <Image
                                    src="https://s101.abraacdn.com/files/ae.png"
                                    alt=""
                                    width="22"
                                    height="14"
                                  />
                                  Arabic
                                </span>
                              </a>
                            </div>
                          </div>
                          <div
                            className="config-select currencies"
                            id="currencies"
                          >
                            <i className="ri-arrow-down-s-line" />
                            <span>
                              <Image
                                src="https://s101.abraacdn.com/files/usd.png"
                                alt=""
                                width="22"
                                height="14"
                              />
                              USD
                            </span>
                            <div className="config-select-options">
                              <span data-cur="usd">
                                <Image
                                  src="https://s101.abraacdn.com/files/usd.png"
                                  alt=""
                                  width="22"
                                  height="14"
                                />
                                USD
                              </span>
                              <span data-cur="aed">
                                <Image
                                  src="https://s101.abraacdn.com/files/aed.png"
                                  alt=""
                                  width="22"
                                  height="14"
                                />
                                AED
                              </span>
                              <span data-cur="sar">
                                <Image
                                  src="https://s101.abraacdn.com/files/sar.png"
                                  alt=""
                                  width="22"
                                  height="14"
                                />
                                SAR
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="links header-section ml-3">
                      <a
                        href="https://www.abraa.com/register"
                        className="d-inline-block"
                      >
                        Sell at Abraa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                this.state.setNav === false ? "side-nav" : "side-nav active"
              }
            >
              <div
                onClick={() =>
                  this.setState({
                    setNav: false
                  })
                }
                className="side-nav-close-section"
              >
                <i className="ri-close-line" />
              </div>
              <div className="mobile-head-section d-none">
                <div className="config-select" id="mobile-languages">
                  <i className="ri-arrow-down-s-line" />
                  <span>
                    <Image
                      width="22"
                      height="14"
                      src="https://s101.abraacdn.com/files/usa.png"
                      alt=""
                    />
                    English
                  </span>
                  <div className="config-select-options">
                    <a href="https://www.abraa.com/en/change_lang/">
                      <span>
                        <Image
                          width="22"
                          height="14"
                          src="https://s101.abraacdn.com/files/usa.png"
                          alt=""
                        />
                        English
                      </span>
                    </a>
                    <a href="https://www.abraa.com/ar/change_lang/">
                      <span>
                        <Image
                          width="22"
                          height="14"
                          src="https://s101.abraacdn.com/files/ae.png"
                          alt=""
                        />
                        Arabic
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  className="config-select currencies"
                  id="mobile-currencies"
                >
                  <i className="ri-arrow-down-s-line" />
                  <span>
                    <Image
                      width="22"
                      height="14"
                      src="https://s101.abraacdn.com/files/usd.png"
                      alt=""
                    />
                    USD
                  </span>
                  <div className="config-select-options">
                    <span data-cur="usd">
                      <Image
                        src="https://s101.abraacdn.com/files/usd.png"
                        alt=""
                        width="22"
                        height="14"
                      />
                      USD
                    </span>
                    <span data-cur="aed">
                      <Image
                        src="https://s101.abraacdn.com/files/aed.png"
                        alt=""
                        width="22"
                        height="14"
                      />
                      AED
                    </span>
                    <span data-cur="sar">
                      <Image
                        src="https://s101.abraacdn.com/files/sar.png"
                        alt=""
                        width="22"
                        height="14"
                      />
                      SAR
                    </span>
                  </div>
                </div>
              </div>
              <div className="mobile-links-section d-none">
                <div className="mobile-links-section-title">
                  <i className="fas fa-info-circle" />
                  Links <i className="fas fa-chevron-down" />
                </div>
                <div className="mobile-links toggle-section">
                  <div className="mobile-link">
                    <a href="https://www.abraa.com/register">Sell at Abraa </a>
                  </div>
                  <div className="mobile-link">
                    <a href="services/secure-payment">Secure Transactions </a>
                  </div>
                  <div className="mobile-link">
                    <a href="https://www.abraa.com/rfqs">Visit RFQ List </a>
                  </div>
                  <div className="mobile-link">
                    <a href="https://www.abraa.com/plans">Premium Membership</a>
                  </div>
                </div>
              </div>
              <div className="mobile-links-section">
                <div className="categories-links toggle-section">
                  <div className="right_menu text-left text-md-center">
                    <div className="menu_title_mobile-tab">
                      <span
                        className="d-flex align-items-center"
                        style={{
                          float: "left",
                          marginBottom: "12px",
                          marginLeft: "10px",
                          fontWeight: "900"
                        }}
                      >
                        Use Full Link
                        <i className="ri-settings-2-line pr-2" />
                      </span>
                    </div>
                    <Secure />
                  </div>
                  <div
                    style={{ marginTop: "10px" }}
                    className="categories_link_toggle"
                  >
                    <div
                      onClick={() =>
                        this.setState({
                          openCategories: !this.state.openCategories
                        })
                      }
                      className={
                        this.state.openCategories === false
                          ? "mobile-links-section-title d-flex align-items-center d-md-none"
                          : "mobile-links-section-title d-flex align-items-center d-md-none intro"
                      }
                    >
                      <i className="ri-shape-line pr-2" />
                      Categories
                      <i className="ri-arrow-down-s-line change_icon pl-2" />
                    </div>
                    <div
                      className="mobile_link_toggle d-none d-md-block position-relative"
                      style={{
                        display:
                          this.state.openCategories === false ? "block" : "none"
                      }}
                    >
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5353
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5353"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/food-processing-production"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Food and beverages production lines</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5492
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5492"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/hospitality"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Hospitality</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5534
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5534"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/health-beauty"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Health &amp; Beauty</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 2305
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-2305"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/industrial-construction"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Industrial &amp; Construction</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 59
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-59"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/auto-auto-parts"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Auto &amp; Auto Parts</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5370
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5370"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/packaging-advertising"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Packaging &amp; Advertising</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 1133
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-1133"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/laptops-computers"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Laptops &amp; Computers</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5175
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5175"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/lights-lighting"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Lights &amp; Lighting</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5952
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5952"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/apparels-textiles-accessories"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Apparels, Textiles &amp; Accessories</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 2313
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-2313"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/electricals"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Electricals</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 1636
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-1636"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/electronics"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Electronics</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 1054
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-1054"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/mobile-phones-tablets"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Mobile Phones &amp; Tablets</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5157
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5157"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/sports-outdoor"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Sports &amp; Outdoor</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 2304
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-2304"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/agriculture"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Agriculture</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5143
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5143"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/toys-hobbies"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Toys &amp; Hobbies</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5183
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5183"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/home-garden-office"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Home, Garden &amp; Office</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                      <div
                        onMouseOver={() =>
                          this.setState({
                            selcted: 5733
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            selcted: 0
                          })
                        }
                        className="mobile-link"
                        target="menu-5733"
                      >
                        <p>
                          <a
                            href="https://www.abraa.com/category/safety-security"
                            className="d-flex justify-content-between w-100"
                          >
                            <span>Safety &amp; Security</span>
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5353
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5353"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/food-machinery">
                        Food Machinery
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/food-extruders">
                        Food Extruders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/chillers">
                        Chillers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/food-packaging">
                        Food Packaging
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fruit-vegetable-processing-machines">
                        Fruit &amp; Vegetable Processing Machines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/beverage-processing-machinery">
                        Beverage Processing Machinery
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/snack-machines">
                        Snack Machines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/chocolate-machinery">
                        Chocolate Machinery
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/meat-poultry-processing">
                        Meat &amp; Poultry Processing
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/conveyors-chutes">
                        Conveyors &amp; Chutes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sorters-sifters">
                        Sorters &amp; Sifters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fish-processing-handling">
                        Fish Processing &amp; Handling
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/storage-tanks">
                        Storage Tanks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dairy-machinery">
                        Dairy Machinery
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/roaster-equipment">
                        Roaster Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/baking-equipment">
                        Baking Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cutters-and-slicers">
                        Cutters and Slicers
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/food-beverages">
                        Food &amp; Beverages
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/beverages">
                        Beverages
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/food">Food </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5492
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5492"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/hotel-supplies">
                        Hotel Supplies
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hotel-furniture">
                        Hotel Furniture
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hotel-room-supplies">
                        Hotel Room Supplies
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/restaurant-catering">
                        Restaurant &amp; Catering
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bar-beverage-equipment">
                        Bar &amp; Beverage Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/storage-handling-equipment">
                        Storage &amp; Handling Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/beverage-snack-vending">
                        Beverage &amp; Snack Vending
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/kitchen-appliances">
                        Kitchen Appliances
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/food-preparation-equipment">
                        Food Preparation Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/refrigeration-cold-rooms">
                        Refrigeration &amp; Cold Rooms
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cooking-warming-equipment">
                        Cooking &amp; Warming Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cookware-kitchen-tools">
                        Cookware &amp; Kitchen Tools
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cleaning-warewashing">
                        Cleaning &amp; Warewashing
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/food-display-and-merchandising">
                        Food Display and Merchandising
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/restaurant-decor">
                        Restaurant Decor
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/buffet-supplies">
                        Buffet Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/server-clothing">
                        Server Clothing
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5534
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5534"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/health-medical">
                        Health &amp; Medical
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sanitizers">
                        Sanitizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/medical-instruments-devices">
                        Medical Instruments &amp; Devices
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/pharmacy-medicines">
                        Pharmacy &amp; Medicines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/medical-supplies-disposables">
                        Medical Supplies &amp; Disposables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/health-care-supplements">
                        Health Care Supplements
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hospital-furniture">
                        Hospital Furniture
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/herbal-medicine">
                        Herbal Medicine
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/medical-equipment">
                        Medical Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/baby-care">
                        Baby Care
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/healthcare-supplies">
                        Healthcare Supplies
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/beauty-personal-care">
                        Beauty &amp; Personal Care
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/makeup-tools">
                        Makeup Tools
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hair-extensions-wigs">
                        Hair Extensions &amp; Wigs
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hair-salon-equipment">
                        Hair Salon Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/shaving-hair-removal">
                        Shaving &amp; Hair Removal
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/feminine-hygiene">
                        Feminine Hygiene
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/makeup-supplies">
                        Makeup Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/skincare-tools">
                        Skincare Tools
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/oral-care">
                        Oral Care
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/nail-tools-supplies-equipment">
                        Nail Tools, Supplies &amp; Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hair-care">
                        Hair Care
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bath-supplies">
                        Bath Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/beauty-equipment">
                        Beauty Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/skin-care">
                        Skin Care
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fragrance-deodorant">
                        Fragrance &amp; Deodorant
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/extract">
                        Extract
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/animal-extract">
                        Animal Extract
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/plant-extract">
                        Plant Extract
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/animal-veterinary">
                        Animal &amp; Veterinary
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/veterinary-medicine">
                        Veterinary Medicine
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/veterinary-instruments">
                        Veterinary Instruments
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 2305
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-2305"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/industrial">
                        Industrial
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/environment">
                        Environment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/rubber-plastics">
                        Rubber &amp; Plastics
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/machineries">
                        Machineries
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/chemicals">
                        Chemicals
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/mineral-metallurgy">
                        Mineral &amp; Metallurgy
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/energy">Energy</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tanks-containers">
                        Tanks &amp; Containers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/mechanical-parts-accessories">
                        Mechanical Parts &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/industrial-tools">
                        Industrial Tools
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/measurement-analysis-instruments">
                        Measurement &amp; Analysis Instruments
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fabrics-tapes-belts">
                        Fabrics, Tapes &amp; Belts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/service-equipment">
                        Service Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/industrial-rollers">
                        Industrial Rollers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/store-supermarket-supplies">
                        Store &amp; Supermarket Supplies
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/construction">
                        Construction
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hardware">
                        Hardware
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/building-material-machinery">
                        Building Material Machinery
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/level-surveying-equipment">
                        Level &amp; Surveying Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tools">Tools </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/engineering-construction-machinery">
                        Engineering &amp; Construction Machinery
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bathroom">
                        Bathroom
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/building-materials">
                        Building Materials
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 59
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-59"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/powersports">
                        Powersports
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/jet-ski">
                        Jet Ski
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/golf-carts">
                        Golf Carts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/pocket-bikes">
                        Pocket Bikes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/utvs">UTVs </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/atvs">ATVs </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dune-buggies-sand-rails">
                        Dune Buggies &amp; Sand Rails
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hoverboards">
                        Hoverboards
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/go-karts">
                        Go-Karts
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/buses-parts">
                        Buses &amp; Parts
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bus-lights">
                        Bus Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bus-wheels-tires">
                        Bus Wheels &amp; Tires
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/coach">Coach </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sightseeing-bus-car">
                        Sightseeing Bus &amp; Car
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bus-body-kits">
                        Bus Body Kits
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bus-engines">
                        Bus Engines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/city-bus">
                        City Bus
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bus-brakes">
                        Bus Brakes
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/locomotives-parts">
                        Locomotives &amp; Parts
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/locomotives">
                        Locomotives
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/train-carriage">
                        Train Carriage
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/train-parts">
                        Train Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/railway-supplies">
                        Railway Supplies
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/emergency-vehicles">
                        Emergency Vehicles
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-truck">
                        Fire Truck
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tow-truck-wrecker">
                        Tow Truck &amp; Wrecker
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ambulance">
                        Ambulance
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/boats">Boats </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/boat-accessories">
                        Boat Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/boat-parts">
                        Boat Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/boats-ships">
                        Boats &amp; Ships
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/aviation">
                        Aviation
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/aviation-parts">
                        Aviation Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/aviation-accessories">
                        Aviation Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/aircrafts">
                        Aircrafts
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/cars">Cars </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/car-service-tools-equipment">
                        Car Service Tools &amp; Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/car-parts">
                        Car Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/car-brands">
                        Car Brands
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/car-tools-supplies">
                        Car Tools &amp; Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/car-accessories">
                        Car Accessories
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/motorcycles-parts-equipment">
                        Motorcycles, Parts &amp; Equipment
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tricycle">
                        Tricycle
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/motorcycle-electrical-systems-kits">
                        Motorcycle Electrical Systems Kits
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/motorcycle-engines-kits">
                        Motorcycle Engines Kits
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/motorcycle-brands">
                        Motorcycle Brands
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/motorcycle-parts">
                        Motorcycle Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/motorcycle-accessories">
                        Motorcycle Accessories
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/trucks-trailers">
                        Trucks &amp; Trailers
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/trailers">
                        Trailers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/containers">
                        Containers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/truck-parts">
                        Truck Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/truck-electrical-system">
                        Truck Electrical System
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/trucks">Trucks</a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5370
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5370"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/packaging">
                        Packaging
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/disposable-food-packaging">
                        Disposable Food Packaging
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/packaging-machinery">
                        Packaging Machinery
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/packaging-supplies">
                        Packaging Supplies
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/printing">
                        Printing
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/printing-personalization">
                        Printing &amp; Personalization
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/printing-accessories-supplies">
                        Printing Accessories &amp; Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/printing-machinery">
                        Printing Machinery
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/corporate-gifts">
                        Corporate Gifts
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/id-holder">
                        ID Holder
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/mugs-glasses-bottles">
                        Mugs, Glasses &amp; Bottles
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/travel-organizers">
                        Travel Organizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/flags-banners">
                        Flags &amp; Banners
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/wall-clocks">
                        Wall Clocks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/caps">Caps </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ornaments">
                        Ornaments
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/medals-awards-trophies">
                        Medals, Awards &amp; Trophies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/luxury-watches">
                        Luxury Watches
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/gift-pens">
                        Gift Pens
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/desktop-items">
                        Desktop Items
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/souvenirs">
                        Souvenirs
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/badges">Badges</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/keychains">
                        Keychains
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bags-wallets">
                        Bags &amp; Wallets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/usb-flash-drives">
                        USB Flash Drives
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/t-shirts">
                        T-Shirts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/card-holders">
                        Card Holders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/electronic-gift-items">
                        Electronic Gift Items
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/party-supplies">
                        Party Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/gift-sets">
                        Gift Sets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/photo-frames">
                        Photo Frames
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/advertising">
                        Advertising
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sign-poster-making-supplies">
                        Sign &amp; Poster Making Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tent-canopies">
                        Tent &amp; Canopies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/roll-up-displays">
                        Roll-up Displays
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/signboards">
                        Signboards
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/shelves-racks">
                        Shelves &amp; Racks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/light-boxes">
                        Light Boxes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/truss-display">
                        Truss Display
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/inflatables">
                        Inflatables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/banners-flags">
                        Banners &amp; Flags
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/billboards">
                        Billboards
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/promotional-tables-panel-displays">
                        Promotional Tables &amp; Panel Displays
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 1133
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-1133"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/laptops">
                        Laptops
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/software">
                        Software
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/laptop-parts-accessories">
                        Laptop Parts &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/laptop-brands">
                        Laptop Brands
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/pda">PDA </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/printersscanners-inks-toners">
                        Printers,Scanners, Inks &amp; Toners
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/inks-toners">
                        Inks &amp; Toners
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/scanners">
                        Scanners
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/printers">
                        Printers
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/computer-peripherals">
                        Computer Peripherals
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/monitors">
                        Monitors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/screen-protectors">
                        Screen Protectors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/storage-devices">
                        Storage Devices
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/webcams">
                        Webcams
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/mice">Mice </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/keyboards">
                        Keyboards
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/keyboard-mouse-combos">
                        KeyBoard &amp; Mouse Combos
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/computer-cases-towers">
                        Computer Cases &amp; Towers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/blank-disks">
                        Blank Disks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/pointers-digital-pens">
                        Pointers &amp; Digital Pens
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/skins-decals">
                        Skins &amp; Decals
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/computer-cables-and-connectors">
                        Computer Cables and Connectors
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ps-2-cables">
                        PS/2 Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ethernet-cables">
                        Ethernet Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ide-cables">
                        IDE Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hdmi-cables">
                        HDMI Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dvi-cables">
                        DVI Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/usb-cables">
                        USB Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sata-cables">
                        SATA Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/vga-cables">
                        VGA Cables
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/desktops">
                        Desktops
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/desktop-components">
                        Desktop Components
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/desktop-brands">
                        Desktop Brands
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/networking">
                        Networking
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/server-workstations">
                        Server &amp; Workstations
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/commercial-networking">
                        Commercial Networking
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/server-components">
                        Server Components
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/home-networking">
                        Home Networking
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5175
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5175"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/indoor-lighting">
                        Indoor Lighting
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/light-bulbs-tubes">
                        Light Bulbs &amp; Tubes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/emergency-lights">
                        Emergency Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lanterns-torches">
                        Lanterns &amp; Torches
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/table-lamps">
                        Table Lamps
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ceiling-lights">
                        Ceiling Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ceiling-chandeliers">
                        Ceiling Chandeliers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/pendant-lights">
                        Pendant Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/floor-lights">
                        Floor Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/indoor-wall-lights">
                        Indoor Wall Lights
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/stage-event-lighting">
                        Stage &amp; Event Lighting
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/blinder-effect-lights">
                        Blinder &amp; Effect Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-pixel-lights">
                        LED Pixel Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/string-lights">
                        String Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/rotating-spot-lights">
                        Rotating Spot Lights
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/outdoor-lighting">
                        Outdoor Lighting
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/street-roadway-lights">
                        Street &amp; Roadway Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-post-lights">
                        LED Post Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/security-lights">
                        Security Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/underground-lights">
                        Underground Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/garden-lights">
                        Garden Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/architectural-lighting">
                        Architectural Lighting
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/solar-lights">
                        Solar Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-flood-lights">
                        LED Flood Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/outdoor-wall-lights">
                        Outdoor Wall Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tunnel-lights">
                        Tunnel Lights
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/commercial-lighting">
                        Commercial Lighting
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-panel-lights">
                        LED Panel Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-track-lights">
                        LED Track Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sign-display-lights">
                        Sign/Display Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-wall-washers">
                        LED Wall Washers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/spotlights">
                        Spotlights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/explosion-proof-lights">
                        Explosion Proof Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/high-bay-lights">
                        High Bay Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-batten-lights">
                        LED Batten Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-grill-lights">
                        LED Grill Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/downlights">
                        Downlights
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/lighting-accessories">
                        Lighting Accessories
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-modules">
                        LED Modules
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-power-supplies">
                        LED Power Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lamp-poles">
                        Lamp Poles
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lamp-cups-holders">
                        Lamp Cups &amp; Holders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lighting-fixtures">
                        Lighting Fixtures
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-controllers">
                        LED Controllers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-tape">
                        LED Tape
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lamp-covers-shades">
                        Lamp Covers &amp; Shades
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-drivers">
                        LED Drivers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lighting-diffusers-sheets">
                        Lighting Diffusers &amp; Sheets
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/decorative-lighting">
                        Decorative Lighting
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/led-strips">
                        LED Strips
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/rope-lights">
                        Rope Lights
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/candle-bulbs">
                        Candle Bulbs
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/soft-effects-lights">
                        Soft Effects Lights
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5952
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5952"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/apparel">
                        Apparel
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/mens-clothing">
                        Men's Clothing
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/womens-clothing">
                        Women's Clothing
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/shoes-footwear">
                        Shoes &amp; Footwear
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/infant-childrens-clothing">
                        Infant &amp; Children's Clothing
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/work-wear">
                        Workwear
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/fashion-accessories">
                        Fashion Accessories
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/time-pieces">
                        Time Pieces
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/head-hair-accessories">
                        Head &amp; Hair Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/jewelry">
                        Jewelry
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/eyewear">
                        Eyewear
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fashion-bags-wallets">
                        Fashion Bags &amp; Wallets
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/textile-leather-products">
                        Textile &amp; Leather Products
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/belts-suspenders">
                        Belts &amp; Suspenders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/scarves-shawls">
                        Scarves &amp; Shawls
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/gloves">Gloves</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fur">Fur </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 2313
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-2313"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/electronic-components">
                        Electronic Components
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/transistors">
                        Transistors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/diodes">Diodes</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/resonators">
                        Resonators
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/integrated-circuits">
                        Integrated Circuits
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/electronic-capacitors">
                        Electronic Capacitors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/thyristors">
                        Thyristors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/resistors">
                        Resistors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/rectifiers">
                        Rectifiers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/potentiometers">
                        Potentiometers
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/relayssensors-switches">
                        Relays, Sensors &amp; Switches
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sensors-accessories">
                        Sensors &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/switches-accessories">
                        Switches &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/relays-accessories">
                        Relays &amp; Accessories
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/power-supplies">
                        Power Supplies
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/inverters-converters">
                        Inverters &amp; Converters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/inductors">
                        Inductors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/uninterrupted-power-supplyups">
                        Uninterrupted Power Supply(UPS)
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/voltage-regulators-stabilizers">
                        Voltage Regulators/Stabilizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ac-dc-adapters">
                        AC/DC Adapters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/switching-power-supply">
                        Switching Power Supply
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/boxes-sockets-enclosures">
                        Boxes, Sockets &amp; Enclosures
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/boxes-sockets">
                        Boxes &amp; Sockets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/enclosures-accessories">
                        Enclosures &amp; Accessories
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/wiring-accessories">
                        Wiring Accessories
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-conduits">
                        Cable Conduits
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/wiring-ducts">
                        Wiring Ducts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-trays">
                        Cable Trays
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-ties">
                        Cable Ties
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-clips">
                        Cable Clips
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tie-mounts">
                        Tie Mounts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-end-caps">
                        Cable End Caps
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-sleeves">
                        Cable Sleeves
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/patch-panels">
                        Patch Panels
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-glands">
                        Cable Glands
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/cables-wires-conductors">
                        Cables, Wires &amp; Conductors
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/electrical-wires">
                        Electrical Wires
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/conductors">
                        Conductors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/control-cables">
                        Control Cables
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/power-cables">
                        Power Cables
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/hmi-plcs-data-acquisitions">
                        HMI, PLCs &amp; Data Acquisitions
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hmi-displays">
                        HMI Displays
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/plcs-accessories">
                        PLCs &amp; Accessories
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/alternative-solar-energy">
                        Alternative &amp; Solar Energy
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/chargers">
                        Chargers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/solar-panels-cells">
                        Solar Panels &amp; Cells
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/wind-generators">
                        Wind Generators
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/solar-water-pumps">
                        Solar Water Pumps
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/automation-control-gear">
                        Automation &amp; Control Gear
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/control-station-accessories">
                        Control Station &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/controllers-accessories">
                        Controllers &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/transformers">
                        Transformers
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/power-protection-distribution">
                        Power Protection &amp; Distribution
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/power-distribution">
                        Power Distribution
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/power-strips">
                        Power Strips
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/transmission-towers-accessories">
                        Transmission Towers &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/surge-protectors">
                        Surge Protectors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/switchgears">
                        Switchgears
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/connectors-terminals">
                        Connectors &amp; Terminals
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/alligator-clips">
                        Alligator Clips
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/connectors">
                        Connectors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/terminal-blocks">
                        Terminal Blocks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/terminals">
                        Terminals
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/electrical-supplies">
                        Electrical Supplies
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/electrical-contacts-contact-material">
                        Electrical Contacts &amp; Contact Material
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/insulation-materials-elements">
                        Insulation Materials &amp; Elements
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/automation-controls">
                        Automation Controls
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/power-cords-extension-cords">
                        Power Cords &amp; Extension Cords
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/semiconductors">
                        Semiconductors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/electrical-ceramics">
                        Electrical Ceramics
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/primary-dry-batteries">
                        Primary &amp; Dry Batteries
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/rechargeable-batteries">
                        Rechargeable Batteries
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/circuit-breakers-fuses">
                        Circuit Breakers &amp; Fuses
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/circuit-breakers">
                        Circuit Breakers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fuses">Fuses </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 1636
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-1636"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/cameras-lenses-accessories">
                        Cameras, Lenses &amp; Accessories
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lenses-accessories">
                        Lenses &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cameras">
                        Cameras
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/camera-accessories">
                        Camera Accessories
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/home-appliances">
                        Home Appliances
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/washing-machines">
                        Washing Machines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/water-dispensers">
                        Water Dispensers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/air-purifiers">
                        Air Purifiers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/freezers">
                        Freezers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/water-heaters">
                        Water Heaters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/refrigerators">
                        Refrigerators
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dishwashers">
                        Dishwashers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/coffee-makers">
                        Coffee Makers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/air-conditioners">
                        Air Conditioners
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dryers">Dryers</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/irons">Irons </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/appliances-parts">
                        Appliances Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fans">Fans </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/water-purifier">
                        Water Purifier
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/televisions">
                        Televisions
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/wall-bracket-mounts">
                        Wall Bracket &amp; Mounts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tvs">TVs </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/antennas-dishes">
                        Antennas &amp; Dishes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/remote-controls">
                        Remote Controls
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/receivers">
                        Receivers
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/tv-audio-video-accessories">
                        TV, Audio &amp; Video Accessories
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/portable-media-players">
                        Portable Media Players
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/microphones">
                        Microphones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/headphones-earphones">
                        Headphones &amp; Earphones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/home-theater-systems">
                        Home Theater Systems
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/karaoke-players">
                        Karaoke Players
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cd-players-recorders">
                        CD Players &amp; Recorders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/radios">Radios</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/speakers-subwoofers">
                        Speakers &amp; Subwoofers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/projectors">
                        Projectors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dvd-blu-ray-players">
                        DVD &amp; Blu-Ray Players
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/amplifier">
                        Amplifier
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/electronic-accessories-parts">
                        Electronic Accessories &amp; Parts
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/home-appliance-parts">
                        Home Appliance Parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/audio-speaker-parts">
                        Audio &amp; Speaker parts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tv-monitor-parts">
                        TV &amp; Monitor Parts
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/gaming">Gaming</a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/virtual-reality-gear">
                        Virtual Reality Gear
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/gaming-gadgets-accessories">
                        Gaming Gadgets &amp; Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/consoles">
                        Consoles
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/video-games">
                        Video Games
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/cables-connectors">
                        Cables &amp; Connectors
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/power-cords">
                        Power Cords
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hubs-adapters">
                        Hubs &amp; Adapters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/vga-splitter">
                        VGA Splitter
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/audio-video-transmitters">
                        Audio/Video Transmitters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cable-winders">
                        Cable Winders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/audio-spitters">
                        Audio Splitters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/network-communication-cables-hubs">
                        Network &amp; Communication Cables &amp; Hubs
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/video-cables-transmitters">
                        Video Cables &amp; Transmitters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/audio-cablesadaptors-jacks">
                        Audio Cables,Adaptors &amp; Jacks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cabling-tools">
                        Cabling Tools
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 1054
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-1054"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/phone-tablet-accessories">
                        Phone &amp; Tablet Accessories
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/audio-docks-speakers">
                        Audio Docks &amp; Speakers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cases-covers-skins">
                        Cases, Covers &amp; Skins
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/phone-tablet-storage">
                        Phone &amp; Tablet Storage
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/mounts-holders">
                        Mounts &amp; Holders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/selfie-sticks">
                        Selfie Sticks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/straps-charms">
                        Straps &amp; Charms
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sim-cards">
                        SIM Cards
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/smart-watches">
                        Smart Watches
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/headsets-earphones">
                        Headsets &amp; Earphones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cables-chargers-adapters">
                        Cables, Chargers &amp; Adapters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/styluses">
                        Styluses
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/power-banks-batteries">
                        Power Banks &amp; Batteries
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/telephones-accessories">
                        Telephones &amp; Accessories
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/corded-phones">
                        Corded Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cordless-phones">
                        Cordless Phones
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/mobile-phones">
                        Mobile Phones
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lg-phones">
                        LG Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/apple-phones">
                        Apple Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/nokia-phones">
                        Nokia Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/motorola-phones">
                        Motorola Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/blackberry-phones">
                        BlackBerry Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lenovo-phones">
                        Lenovo Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/asus-phones">
                        Asus Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/other-mobile-phones">
                        Other Mobile Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/google-phones">
                        Google Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/microsoft-phones">
                        Microsoft Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/touchmate-phones">
                        Touchmate Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/samsung-phones">
                        Samsung Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/htc-phones">
                        HTC Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/acer-phones">
                        Acer Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/huawei-phones">
                        Huawei Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sony-phones">
                        Sony Phones
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/phone-tablet-parts">
                        Phone &amp; Tablet Parts
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/phone-tablet-motherboards">
                        Phone &amp; Tablet Motherboards
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/touch-screens">
                        Touch Screens
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/tablets">
                        Tablets
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/htc-tablets">
                        HTC Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/inix-tablets">
                        iNix Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/other-tablets">
                        Other Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/samsung-tablets">
                        Samsung Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/touchmate-tablets">
                        Touchmate Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/apple-tablets">
                        Apple Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/lenovo-tablets">
                        Lenovo Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/eurostar-tablets">
                        Eurostar Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/huawei-tablets">
                        Huawei Tablets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/microsoft-tablets">
                        Microsoft Tablets
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5157
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5157"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/fitness">
                        Fitness
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/boxing-mma">
                        Boxing &amp; MMA
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/gym-equipment">
                        Gym Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fitness-accessories">
                        Fitness Accessories
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/wilderness-recreation">
                        Wilderness Recreation
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/camping">
                        Camping
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hiking-trekking">
                        Hiking &amp; Trekking
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fishing">
                        Fishing
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/watersports">
                        Watersports
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/swimming-diving">
                        Swimming &amp; Diving
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/canoes-kayaks">
                        Canoes &amp; Kayaks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/surfing-wakeboarding">
                        Surfing &amp; Wakeboarding
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/ball-sports">
                        Ball Sports
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/baseball-softball">
                        Baseball &amp; Softball
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/rugby">Rugby </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dodgeball">
                        Dodgeball
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/basketball">
                        Basketball
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/football">
                        Football
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/volleyball">
                        Volleyball
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/soccer">Soccer</a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/racket-club-sports">
                        Racket &amp; Club Sports
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/badminton">
                        Badminton
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/squash">Squash</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tennis">Tennis</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/golf">Golf </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/biking-sports">
                        Biking Sports
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/motocross-dirt-biking">
                        Motocross &amp; Dirt Biking
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cycling">
                        Cycling
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/indoor-sports">
                        Indoor Sports
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/billiards-pool">
                        Billiards &amp; Pool
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/table-tennis">
                        Table Tennis
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/darts">Darts </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/winter-sports">
                        Winter Sports
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/curling">
                        Curling
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sledding">
                        Sledding
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hockey">Hockey</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/skiing-snowboarding">
                        Skiing &amp; Snowboarding
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 2304
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-2304"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/ornamental-plants">
                        Ornamental Plants
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dried-flowers">
                        Dried Flowers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fresh-cut-plants">
                        Fresh Cut Plants
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/natural-plants">
                        Natural Plants
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bonsai">Bonsai</a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/fertilizers">
                        Fertilizers
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/nitrogen-fertilizers">
                        Nitrogen Fertilizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/potassium-fertilizers">
                        Potassium Fertilizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/biological-fertilizers">
                        Biological Fertilizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/phosphate-fertilizers">
                        Phosphate Fertilizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/compound-fertilizers">
                        Compound Fertilizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/organic-fertilizers">
                        Organic Fertilizers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/plant-food">
                        Plant Food
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/plants-seeds-bulbs">
                        Plants, Seeds &amp; Bulbs
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/forage-seeds">
                        Forage Seeds
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fruit-grafts-seedings-rootstocks">
                        Fruit Grafts, Seedings &amp; Rootstocks
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/oil-seeds">
                        Oil Seeds
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/crop-seeds">
                        Crop Seeds
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/flower-bulbs-seeds-seedlings">
                        Flower Bulbs, Seeds &amp; Seedlings
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/vegetable-seeds">
                        Vegetable Seeds
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/farm-machinery-equipment">
                        Farm Machinery &amp; Equipment
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fertilizer-spreaders">
                        Fertilizer Spreaders
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/shellers">
                        Shellers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/balers">Balers</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/oil-pressers">
                        Oil Pressers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/egg-incubators">
                        Egg Incubators
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/seeders-planters">
                        Seeders &amp; Planters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/forestry-machines">
                        Forestry Machines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/backhoes">
                        Backhoes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/tractors">
                        Tractors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/harvesters">
                        Harvesters
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/slaughtering-equipment">
                        Slaughtering Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/milking-machines">
                        Milking Machines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/compost-biomass-making-machines">
                        Compost &amp; Biomass Making Machines
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sprayer">
                        Sprayer
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/silos">Silos </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/agricultural-tools-supplies">
                        Agricultural Tools &amp; Supplies
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/agricultural-tools">
                        Agricultural Tools
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/agricultural-supplies">
                        Agricultural Supplies
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/aquaculture">
                        Aquaculture
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fishing-floats">
                        Fishing Floats
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fishing-ropes">
                        Fishing Ropes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/aquaculture-traps">
                        Aquaculture Traps
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/aquaculture-machine-aerators">
                        Aquaculture Machine Aerators
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5143
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5143"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/toys">Toys </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/baby-toys">
                        Baby Toys
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/collectibles-games">
                        Collectibles &amp; Games
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/construction-toys">
                        Construction Toys
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/plush-pretend-play">
                        Plush &amp; Pretend Play
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/board-games">
                        Board Games
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/educative-creative">
                        Educative &amp; Creative
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/other-toys">
                        Other Toys
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cards-puzzles">
                        Cards &amp; Puzzles
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/drones-rc-toys">
                        Drones &amp; RC Toys
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/hobbies">
                        Hobbies
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/model-kits">
                        Model Kits
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/reading-books">
                        Reading &amp; Books
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/robotics">
                        Robotics
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/hobby-collectibles">
                        Hobby Collectibles
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/display-models">
                        Display Models
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/musical-instruments">
                        Musical Instruments
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/arts-crafts">
                        Arts &amp; Crafts
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cosplay">
                        Cosplay
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5183
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5183"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/office-school-supplies">
                        Office &amp; School Supplies
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/stationary">
                        Stationary
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/office-school-storage">
                        Office &amp; School Storage
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/telecom-systems">
                        Telecom Systems
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/office-school-equipment">
                        Office &amp; School Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/office-school-furniture">
                        Office &amp; School Furniture
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/home">Home </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/home-decor">
                        Home Decor
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/laundry-supplies">
                        Laundry Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/home-furnishing">
                        Home Furnishing
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/household-supplies-cleaning">
                        Household Supplies &amp; Cleaning
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/paper-products">
                        Paper Products
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/dinnerware">
                        Dinnerware
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/home-furniture">
                        Home Furniture
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/drinkware">
                        Drinkware
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/garden">Garden</a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/gardening-supplies">
                        Gardening Supplies
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/outdoor-cooking-eating">
                        Outdoor Cooking &amp; Eating
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/outdoor-power-equipment">
                        Outdoor Power Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/patio-garden-furniture">
                        Patio &amp; Garden Furniture
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ponds-water-features">
                        Ponds &amp; Water Features
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/garden-tools-equipment">
                        Garden Tools &amp; Equipment
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bird-wildlife-accessories">
                        Bird &amp; Wildlife Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/garden-structures-shade">
                        Garden Structures &amp; Shade
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/pools-spas">
                        Pools &amp; Spas
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/garden-decor">
                        Garden Decor
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/garden-fencing">
                        Garden Fencing
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className={
                    this.state.selcted === 5733
                      ? "category-submenu active"
                      : "category-submenu "
                  }
                  id="menu-5733"
                >
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/access-control-systems">
                        Access Control Systems
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fingerprint-scanners">
                        Fingerprint Scanners
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/video-audio-door-phones">
                        Video &amp; Audio Door Phones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/eas-systems">
                        EAS Systems
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/home-automation">
                        Home Automation
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/card-readers">
                        Card Readers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/intercom-systems">
                        Intercom Systems
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/key-lock">
                        Key &amp; Lock
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/facial-recognition-system">
                        Facial Recognition System
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/control-panels">
                        Control Panels
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/turnstiles">
                        Turnstiles
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/perimeter-security">
                        Perimeter Security
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/security-fences">
                        Security Fences
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/gates">Gates </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/intrusion-detection-system">
                        Intrusion Detection System
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/security-surveillance">
                        Security &amp; Surveillance
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/nvrs-dvrs">
                        NVRs &amp; DVRs
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/security-cameras">
                        Security Cameras
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/detectors-scanners">
                        Detectors &amp; Scanners
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/cctv-monitors">
                        CCTV Monitors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/safety-technology">
                        Safety Technology
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/security-camera-accessories">
                        Security Camera Accessories
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/alarms">Alarms</a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/fire-protection">
                        Fire Protection
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/alarm-control-panels">
                        Alarm Control Panels
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-alarms">
                        Fire Alarms
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sprinkler-systems">
                        Sprinkler Systems
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/smoke-gas-heat-detectors">
                        Smoke/Gas/Heat Detectors
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-extinguisher-powders-agents">
                        Fire Extinguisher Powders &amp; Agents
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-hoses-nozzles">
                        Fire Hoses &amp; Nozzles
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-blankets">
                        Fire Blankets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-suits-vests">
                        Fire Suits &amp; Vests
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-extinguishers">
                        Fire Extinguishers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-hydrant-cabinets">
                        Fire Hydrant &amp; Cabinets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fire-valves-parts">
                        Fire Valves &amp; Parts
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/road-safety">
                        Road Safety
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/speed-breakers-bumps">
                        Speed Breakers &amp; Bumps
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/bollards">
                        Bollards
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/traffic-batons">
                        Traffic Batons
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/road-stud">
                        Road Stud
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/barricades-barriers">
                        Barricades &amp; Barriers
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/traffic-cones">
                        Traffic Cones
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/delineators">
                        Delineators
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/arm-barriers">
                        Arm Barriers
                      </a>
                    </h3>
                  </div>
                  <div className="submenu-section">
                    <h2 className="submenu-section-title">
                      <a href="https://www.abraa.com/category/protective-gear">
                        Protective Gear
                      </a>
                    </h2>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/overalls">
                        Overalls
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/respirators">
                        Respirators
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/stun-guns">
                        Stun Guns
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/safety-vests-jackets">
                        Safety Vests &amp; Jackets
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/batons">Batons</a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/safety-boots-shoes">
                        Safety Boots &amp; Shoes
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/ear-muffs-plugs">
                        Ear Muffs &amp; Plugs
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/sleeves">
                        Sleeves
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/safety-gloves">
                        Safety Gloves
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/protective-masks-helmets-caps">
                        Protective Masks, Helmets &amp; Caps
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/safety-goggles">
                        Safety Goggles
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/harnesses">
                        Harnesses
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/knee-arm-pads">
                        Knee &amp; Arm Pads
                      </a>
                    </h3>
                    <h3 className="submenu-section-link">
                      <a href="https://www.abraa.com/category/fall-protection">
                        Fall Protection
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
}
const mapStateToProps = (store) => ({
  username: store?.Reducer?.username
    ? store?.Reducer?.username
    : store?.Reducer?.username?.action
})

export default connect(mapStateToProps)(Header)
