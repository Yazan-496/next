import React, { useState, useEffect, useCallback, useRef } from "react"
import CarouselNum1 from "./carousel/carouselNum1"
import CarouselNum2 from "./carousel/carouselNum2"
// import CarouselNum3 from "./carousel/carouselNum3"
import Image from "next/image"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })
import CarouselNum4 from "./carousel/carouselNum4"
import CarouselNum5 from "./carousel/carouselNum5"
import CarouselNum6 from "./carousel/carouselNum6"
import CarouselNum7 from "./carousel/carouselNum7"
import CarouselNum8 from "./carousel/carouselNum8"
import LazyLoad from "react-lazy-load"

function Main(props) {
  const router = useRouter()
  const src =
    "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [height, setHeight] = useState(0)
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])
  let Scroll
  const el1 = !isSSR && document.getElementById("div1")
  const el2 = !isSSR && document.getElementById("div2")
  const el3 = !isSSR && document.getElementById("div3")
  useEffect(() => {
    window.addEventListener("scroll", RunElement1)
  }, [el1])
  useEffect(() => {
    window.addEventListener("scroll", RunElement2)
  }, [el2])
  useEffect(() => {
    window.addEventListener("scroll", RunElement3)
  }, [el3])
  function elementInViewport(el) {
    if (el) {
      //  console.log(el, "el")
      var top = el.offsetTop
      var left = el.offsetLeft
      var width = el.offsetWidth
      var height = el.offsetHeight

      while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
        left += el.offsetLeft
      }

      return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        top + height <= window.pageYOffset + window.innerHeight &&
        left + width <= window.pageXOffset + window.innerWidth
      )
    }
  }
  function RunElement1() {
    Scroll = elementInViewport(el1)
    Scroll === true && setIsVisible(true)
    //     // console.log(Scroll, "Scroll")
    return Scroll
  }
  function RunElement2() {
    Scroll = elementInViewport(el2)
    Scroll === true && setIsVisible1(true)
    //     // console.log(Scroll, "Scroll")
    return Scroll
  }
  function RunElement3() {
    Scroll = elementInViewport(el3)
    Scroll === true && setIsVisible2(true)
    //     // console.log(Scroll, "Scroll")
    return Scroll
  }
  return (
    <main
      className="position-relative home_wrapper"
      style={{ paddingTop: 137 }}
      //  id="container"
    >
      <div style={{ marginTop: "10px" }}>
        <div></div>
        <section
          style={{
            height: "-webkit-fill-available !important"
          }}
          className="container topbanner_text topbanner_banner"
        >
          <div className="ads-section d-none mb-2 mr-auto ml-auto" style={{ width: "fit-content" }}>
            <a target="_blankCat" style={{ color: "#696969" }}>
              <p className="d-inline-block d-none mr-2" style={{ textDecoration: "underline" }}>
                Shop Laptops Today! Apple, Microsoft, Lenevo, HP &amp; More.
              </p>
              <p className="d-none d-sm-inline-block float-right">Ad...</p>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-3 d-xl-block col-3 pr-0 pl-0">
              <div className="side-nav active">
                <div className="mobile-links-section">
                  <div className="categories-links toggle-section">
                    <div
                      className="mobile-link"
                      //   style={{
                      //     padding: "5px 10px 5px 0px",
                      //     marginTop: 0,
                      //     display: "flex",
                      //     justifyContent: "space-between"
                      //   }}
                    >
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        <Image
                          unoptimized={false}
                          width={"25px"}
                          height={"25px"}
                          src="https://s101.abraacdn.com/files/Food-&-Food-Machinery-11.png"
                          alt="Food and beverages production lines"
                          className="img-fluid"
                        />
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a onClick={() => router.push("/listing-page")} target="_blankCat">
                          <div className="d-inline-block side-nav-item">
                            Food and beverages production lines
                          </div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Food Machinery
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Food Extruders
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Chillers
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Food Packaging
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Fruit &amp; Vegetable Processing Machines
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Food &amp; Beverages
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Beverages
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Food
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        {/* <LazyLoad> */}
                        <Image
                          unoptimized={false}
                          width={25}
                          height={25}
                          src="https://s101.abraacdn.com/files/Hospitality.png"
                          alt="Hospitality"
                          className="img-fluid"
                        />
                        {/* </LazyLoad> */}
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                          <div className="d-inline-block side-nav-item">Hospitality</div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Hotel Supplies
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Hotel Furniture
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Hotel Room Supplies
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Restaurant &amp; Catering
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Bar &amp; Beverage Equipment
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Storage &amp; Handling Equipment
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Beverage &amp; Snack Vending
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Kitchen Appliances
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        {/* <LazyLoad> */}
                        <Image
                          unoptimized={false}
                          width={25}
                          height={25}
                          src="https://s101.abraacdn.com/files/Medical-Equipment.png"
                          alt="Health & Beauty"
                          className="img-fluid"
                        />
                        {/* </LazyLoad> */}
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat">
                          <div className="d-inline-block side-nav-item">Health &amp; Beauty</div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Health &amp; Medical
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Sanitizers
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Medical Instruments &amp; Devices
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Pharmacy &amp; Medicines
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Medical Supplies &amp; Disposables
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Beauty &amp; Personal Care
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Makeup Tools
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Hair Extensions &amp; Wigs
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Hair Salon Equipment
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Shaving &amp; Hair Removal
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Extract
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Animal Extract
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Plant Extract
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Animal &amp; Veterinary
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Veterinary Medicine
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Veterinary Instruments
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        {/* <LazyLoad> */}
                        <Image
                          unoptimized={false}
                          width={25}
                          height={25}
                          src="https://s101.abraacdn.com/files/Industrial-&-Construction.png"
                          alt="Industrial & Construction"
                          className="img-fluid"
                        />
                        {/* </LazyLoad> */}
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                          <div className="d-inline-block side-nav-item">Industrial &amp; Construction</div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Industrial
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Environment
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Rubber &amp; Plastics
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Machineries
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Chemicals
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Construction
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Hardware
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Building Material Machinery
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Level &amp; Surveying Equipment
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Tools
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        {/* <LazyLoad> */}
                        <Image
                          unoptimized={false}
                          width={25}
                          height={25}
                          src="https://s101.abraacdn.com/files/Auto-&-Auto-Parts.png"
                          alt="Auto & Auto Parts"
                          className="img-fluid"
                        />
                        {/* </LazyLoad> */}
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                          <div className="d-inline-block side-nav-item">Auto &amp; Auto Parts</div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Powersports
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Jet Ski
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Golf Carts
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Pocket Bikes
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              UTVs
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Buses &amp; Parts
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Bus Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Bus Wheels &amp; Tires
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Coach
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Sightseeing Bus &amp; Car
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Locomotives &amp; Parts
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Locomotives
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Train Carriage
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Train Parts
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Railway Supplies
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Emergency Vehicles
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Fire Truck
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Tow Truck &amp; Wrecker
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Ambulance
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        {/* <LazyLoad> */}
                        <Image
                          unoptimized={false}
                          width={25}
                          height={25}
                          src="https://s101.abraacdn.com/files/Packaging-and-Advertising.png"
                          alt="Packaging & Advertising"
                          className="img-fluid"
                        />
                        {/* </LazyLoad> */}
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                          <div className="d-inline-block side-nav-item">Packaging &amp; Advertising</div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Packaging
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Disposable Food Packaging
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Packaging Machinery
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Packaging Supplies
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Printing
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Printing &amp; Personalization
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Printing Accessories &amp; Supplies
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Printing Machinery
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Corporate Gifts
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              ID Holder
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Mugs, Glasses &amp; Bottles
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Travel Organizers
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Flags &amp; Banners
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Advertising
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Sign &amp; Poster Making Supplies
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Tent &amp; Canopies
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Roll-up Displays
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Signboards
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        {/* <LazyLoad> */}
                        <Image
                          unoptimized={false}
                          width={25}
                          height={25}
                          src="https://s101.abraacdn.com/files/Computer-&-IT-products.png"
                          alt="Laptops & Computers"
                          className="img-fluid"
                        />
                        {/* </LazyLoad> */}
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                          <div className="d-inline-block side-nav-item">Laptops &amp; Computers</div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Laptops
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Software
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Laptop Parts &amp; Accessories
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Laptop Brands
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              PDA
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Printers,Scanners, Inks &amp; Toners
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Inks &amp; Toners
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Scanners
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Printers
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Computer Peripherals
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Monitors
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Screen Protectors
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Storage Devices
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Webcams
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Computer Cables and Connectors
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              PS/2 Cables
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Ethernet Cables
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              IDE Cables
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              HDMI Cables
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        {/* <LazyLoad> */}
                        <Image
                          unoptimized={false}
                          width={25}
                          height={25}
                          src="https://s101.abraacdn.com/files/Lights-and-Lighting.png"
                          alt="Lights & Lighting"
                          className="img-fluid"
                        />
                        {/* </LazyLoad> */}
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                          <div className="d-inline-block side-nav-item">Lights &amp; Lighting</div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Indoor Lighting
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Light Bulbs &amp; Tubes
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Emergency Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Lanterns &amp; Torches
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Table Lamps
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Stage &amp; Event Lighting
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Blinder &amp; Effect Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              LED Pixel Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              String Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Rotating Spot Lights
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Outdoor Lighting
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Street &amp; Roadway Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              LED Post Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Security Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Underground Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Commercial Lighting
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              LED Panel Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              LED Track Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Sign/Display Lights
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              LED Wall Washers
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-link">
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                          <span
                            style={{
                              marginTop: "4px",
                              marginRight: "5px"
                            }}
                          >
                            {/* <LazyLoad> */}
                            <Image
                              unoptimized={false}
                              width={25}
                              height={25}
                              src="https://s101.abraacdn.com/files/Corporate-Gifts.png"
                              alt="Apparels, Textiles & Accessories"
                              className="img-fluid"
                            />
                            {/* </LazyLoad> */}
                          </span>
                          <div className="d-inline-block side-nav-item">
                            Apparels, Textiles &amp; Accessories
                          </div>
                        </a>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Apparel
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Men's Clothing
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Women's Clothing
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Shoes &amp; Footwear
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Infant &amp; Children's Clothing
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Fashion Accessories
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Time Pieces
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Head &amp; Hair Accessories
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Jewelry
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Eyewear
                            </a>
                          </h3>
                          <h3 className="submenu-section-link more">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              See More
                            </a>
                          </h3>
                        </div>
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Textile &amp; Leather Products
                            </a>
                          </h2>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Belts &amp; Suspenders
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Scarves &amp; Shawls
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Gloves
                            </a>
                          </h3>
                          <h3 className="submenu-section-link">
                            <a target="_blankCat" onClick={() => router.push("/listing-page")}>
                              Fur
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-xs-8 col-12 pr-0 main_slider_responsive">
              <div className="main_slider">
                <CarouselNum1 />
                <div className="pr-0 fast_sourcing_top browse_form_col_2 mt-0 mt-md-2 mt-lg-3">
                  <div className="white-box mx-auto">
                    <div className="category_flag_sec py-3 py-md-0">
                      <h3 className="sec-heading">
                        <span>Fast Sourcing of Products - in Wholesale </span>
                      </h3>
                      <div className="fast_sourcing_form mt-2 mt-md-2 mt-lg-4">
                        <div className="rfq-create-wrapper">
                          <form className="rfq-create-form" name="quoting-race" action="buy-request">
                            <div className="row mx-0 rfq-2-form-elements">
                              <div className="col-12 col-md-4 col-lg-5 pl-0 form_one form_one_1">
                                <label className="border_input border_input1 position-relative mb-0">
                                  <input
                                    name="buyrequest_name"
                                    id="buyrequest_name"
                                    placeholder="I'm looking for.."
                                    className="flex-2"
                                  />
                                </label>
                              </div>
                              <div className="col-4 col-md-2 col-lg-2 mt-1 mt-md-0 px-0 form_one mt-md-0 pr-1 pr-md-0">
                                <label className="border_input border_input1 position-relative mb-0">
                                  <input
                                    placeholder="Quantity"
                                    name="buyrequest_qty"
                                    id="buyrequest_qty"
                                    className="flex-1"
                                  />
                                </label>
                              </div>
                              <div className="col-4 col-md-3 col-lg-3 pl-3 pr-md-0 form_one mt-1 mt-md-0 padding-left-15">
                                <select
                                  className="plain-white-dropdown main_select"
                                  name="buyrequest_unt"
                                  id="buyrequest_unt"
                                >
                                  <option value={1}>Unit</option>
                                  <option value={2}>Kilogram</option>
                                  <option value={3}>Gram</option>
                                  <option value={4}>Box</option>
                                  <option value={5}>Barrel</option>
                                  <option value={6}>Carton</option>
                                  <option value={7}>Bushel</option>
                                  <option value={8}>Case</option>
                                  <option value={9}>Centimeter</option>
                                  <option value={10}>Container 40-Foot</option>
                                  <option value={11}>Container 20-Foot</option>
                                  <option value={12}>Cubic Foot</option>
                                  <option value={13}>Cubic Inch</option>
                                  <option value={14}>Cubic Meter</option>
                                  <option value={15}>Cubic Yard</option>
                                  <option value={16}>Degrees Celsius</option>
                                  <option value={17}>Degrees Fahrenheit</option>
                                  <option value={18}>Dozen</option>
                                  <option value={19}>Dram</option>
                                  <option value={20}>Fluid Ounce</option>
                                  <option value={21}>Foot</option>
                                  <option value={22}>Chain</option>
                                  <option value={23}>Furlong</option>
                                  <option value={24}>Gallon</option>
                                  <option value={25}>Gill</option>
                                  <option value={26}>Grain</option>
                                  <option value={27}>Ampere</option>
                                  <option value={28}>Gross</option>
                                  <option value={29}>Hectare</option>
                                  <option value={30}>Hertz</option>
                                  <option value={31}>Inch</option>
                                  <option value={32}>Kiloampere</option>
                                  <option value={33}>Bag</option>
                                  <option value={34}>Kilohertz</option>
                                  <option value={35}>Kilometer</option>
                                  <option value={36}>Kiloohm</option>
                                  <option value={37}>Kilovolt</option>
                                  <option value={38}>Kilowatt</option>
                                  <option value={39}>Liter</option>
                                  <option value={40}>Long Ton</option>
                                  <option value={41}>Megahertz</option>
                                  <option value={42}>Meter</option>
                                  <option value={43}>Metric Ton</option>
                                  <option value={44}>Mile</option>
                                  <option value={45}>Milliampere</option>
                                  <option value={46}>Milligram</option>
                                  <option value={47}>Millihertz</option>
                                  <option value={48}>Milliliter</option>
                                  <option value={49}>Millimeter</option>
                                  <option value={50}>Milliohm</option>
                                  <option value={51}>Millivolt</option>
                                  <option value={52}>Milliwatt</option>
                                  <option value={53}>Nautical Mile</option>
                                  <option value={54}>Ohm</option>
                                  <option value={55}>Ounce</option>
                                  <option value={56}>Pack</option>
                                  <option value={57}>Pallet</option>
                                  <option value={58}>Pair</option>
                                  <option value={59}>Parcel</option>
                                  <option value={60}>Perch</option>
                                  <option value={61}>Piece</option>
                                  <option value={62}>Pint</option>
                                  <option value={63}>Plant</option>
                                  <option value={64}>Pole</option>
                                  <option value={65}>Pound</option>
                                  <option value={66}>Quart</option>
                                  <option value={67}>Quarter</option>
                                  <option value={68}>Rod</option>
                                  <option value={69}>Roll</option>
                                  <option value={70}>Set</option>
                                  <option value={71}>Sheet</option>
                                  <option value={72}>Short Ton</option>
                                  <option value={73}>Square Centimeter</option>
                                  <option value={74}>Square Foot</option>
                                  <option value={75}>Square Inch</option>
                                  <option value={76}>Square Meter</option>
                                  <option value={77}>Square Mile</option>
                                  <option value={78}>Square Yard</option>
                                  <option value={79}>Stone</option>
                                  <option value={80}>Strand</option>
                                  <option value={81}>Ton</option>
                                  <option value={82}>Tonne</option>
                                  <option value={83}>Tray</option>
                                  <option value={84}>Cubic Centimeter</option>
                                  <option value={86}>Volt</option>
                                  <option value={87}>Watt</option>
                                  <option value={88}>Wp</option>
                                  <option value={89}>Yard</option>
                                  <option value={90}>HD Bag</option>
                                  <option value={91}>Plastic Can</option>
                                  <option value={92}>Tin Cans</option>
                                  <option value={93}>Pet Bottles</option>
                                  <option value={94}>Jar</option>
                                  <option value={95}>Tin</option>
                                  <option value={96}>Glass</option>
                                </select>
                              </div>
                              <div className="col-4 col-md-3 col-lg-2 pr-0 form_one form_one_on mt-1 mt-md-0 rfq-button-container">
                                <button className="flex-1 btn-blue">CREATE RFQ</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-4 col-3 d-none d-md-flex topbanner_text_right_col pr-0 mt-3 mt-md-0">
              <div className="main_cat d-flex d-md-flex flex-column w-100">
                <div
                  className="home-side-banner home-side-banner1"
                  style={{
                    backgroundImage: `url("https://s101.abraacdn.com/files/banner.jpg")`
                  }}
                >
                  <div className="home-side-banner-details">
                    <div className="home-side-banner-title">Secure Payments</div>
                    <div className="home-side-banner-link">
                      <a target="_blankCat" alt="<? __('Know More for') ?> Secure Payments">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="home-side-banner home-side-banner1"
                  style={{
                    backgroundImage: 'url("https://s101.abraacdn.com/files/banner2.jpg")'
                  }}
                >
                  <div className="home-side-banner-details">
                    <div className="home-side-banner-title">Product inspection</div>
                    <div className="home-side-banner-link">
                      <a target="_blankCat" alt="<? __('Know More for') ?> Product inspection">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="home-side-banner home-side-banner1"
                  style={{
                    backgroundImage: 'url("https://s101.abraacdn.com/files/banner3.jpg")'
                  }}
                >
                  <div className="home-side-banner-details">
                    <div className="home-side-banner-title">Buyer protection</div>
                    <div className="home-side-banner-link">
                      <a target="_blankCat" alt="<? __('Know More for') ?> Buyer protection">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginTop: "20px" }} id="div1"></div>
      {(isVisible || elementInViewport(el1)) && (
        <section
          // id={isVisible ? "heightonscroll" : "hideonscroll"}
          className="white-box mt-3 container browse_category_top position-relative"
        >
          <div className="category_flag_sec">
            <div className="double-sec-heading">
              <h2 className="sec-heading d-flex align-items-center pt-3 pt-md-0">
                <Image
                  width={22}
                  height={20}
                  src="https://s101.abraacdn.com/files/layout-grid-fill-svg.png"
                  alt=""
                  //    className="img-fluid pr-2 position-relative bg-white"
                />
                <span
                  style={{
                    marginLeft: 4
                  }}
                >
                  Browse By Categories
                </span>
              </h2>
              <a className="btn-white" title="See all categories">
                See all categories <i className="ri-arrow-right-s-line" />
              </a>
            </div>
            <div className="categories_sub_div mt-2 mt-md-3 mt-lg-4">
              <CarouselNum2 />
            </div>
          </div>
        </section>
      )}
      <div style={{ marginTop: "20px" }} id="div2"></div>
      {(isVisible1 || elementInViewport(el2)) && (
        <div>
          <section className="container white-box mt-3 mt-md-3">
            <div id="main-category-content" className="category_flag_sec">
              <div className="double-sec-heading">
                <h2 className="sec-heading">
                  <span>Agriculture Wholesale</span>
                </h2>
                <a
                  className="btn-white"
                  href="https://www.abraa.com/category/agriculture"
                  target="_blankCat"
                  title=" Visit Category"
                >
                  Visit Category <i className="ri-arrow-right-s-line" />
                </a>
              </div>
              <div className="categories_sub_div mt-2 mt-md-4">
                <div className="row mr-0 sub-category-container">
                  <div className="main-category-sub col-md-5 col-lg-3 d-none d-md-block">
                    <div className="main-category-sub-link h-100">
                      <a
                        title="Wholesale Agriculture"
                        href="category/agriculture"
                        className="align-bottom h-100 w-100"
                      >
                        <Image
                          unoptimized={false}
                          width={384}
                          height={268}
                          src="https://s101.abraacdn.com/files/agriculture.png"
                          className="h-100 w-100 fit-cover"
                        />
                        <div className="processing_machines_title position-absolute d-table w-100 h-100">
                          <div className="d-flex align-items-end w-100 justify-content-center">
                            <span className="source-now-btn">Source Now</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="sub-categories-list col-md-7 col-lg-9">
                    <div className="row">
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a
                          href="category/plants-seeds-bulbs"
                          title="Plants, Seeds & Bulbs"
                          className="d-table w-100 h-100"
                        >
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/Plants-seeds-and-bulbs.jpg"
                              alt="Plants, Seeds & Bulbs"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Plants, Seeds &amp; Bulbs </h3>
                          </div>
                        </a>
                      </div>
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a
                          href="category/farm-machinery-equipment"
                          title="Farm Machinery & Equipment"
                          className="d-table w-100 h-100"
                        >
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/Farm-machinery-equipement.jpg"
                              alt="Farm Machinery & Equipment"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Farm Machinery &amp; Equipment </h3>
                          </div>
                        </a>
                      </div>
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a href="category/fertilizers" title="Fertilizers" className="d-table w-100 h-100">
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/Fertilizer.jpg"
                              alt="Fertilizers"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Fertilizers </h3>
                          </div>
                        </a>
                      </div>
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a
                          href="category/ornamental-plants"
                          title="Ornamental Plants"
                          className="d-table w-100 h-100"
                        >
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/ornamental-plants.jpg"
                              alt="Ornamental Plants"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Ornamental Plants </h3>
                          </div>
                        </a>
                      </div>
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a
                          href="category/agricultural-tools-supplies"
                          title="Agricultural Tools & Supplies"
                          className="d-table w-100 h-100"
                        >
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/Agriculture-Tools.jpg"
                              alt="Agricultural Tools & Supplies"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Agricultural Tools &amp; Supplies </h3>
                          </div>
                        </a>
                      </div>
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a href="category/aquaculture" title="Aquaculture" className="d-table w-100 h-100">
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/Aquaculture.jpg"
                              alt="Aquaculture"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Aquaculture </h3>
                          </div>
                        </a>
                      </div>
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a
                          href="category/fruit-grafts-seedings-rootstocks"
                          title="Fruit Grafts, Seedings & Rootstocks"
                          className="d-table w-100 h-100"
                        >
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/fruit-grafts-and-seedlings.jpg"
                              alt="Fruit Grafts, Seedings & Rootstocks"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Fruit Grafts, Seedings &amp; Rootstocks </h3>
                          </div>
                        </a>
                      </div>
                      <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                        <a
                          href="category/dried-flowers"
                          title="Dried Flowers"
                          className="d-table w-100 h-100"
                        >
                          <div className="sub_category_image w-50 d-table-cell">
                            <Image
                              unoptimized={false}
                              width={100}
                              height={65}
                              src="https://s101.abraacdn.com/files/Dried-flowers.jpg"
                              alt="Dried Flowers"
                              className="img-fluid"
                            />
                          </div>
                          <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                            <h3>Dried Flowers </h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CarouselNum4 />
              <div className="double-sec-heading mt-3">
                <h2 className="sec-heading">
                  <span>Latest RFQS in the category </span>
                </h2>
                <a className="btn-white" href="https://www.abraa.com/rfqs" title="See all RFQS">
                  See all FRQS <i className="ri-arrow-right-s-line" />
                </a>
              </div>
              <div className="rfqs-list owl-carousel owl-loaded">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1509px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 3524
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                      <div className="rfq-block">
                        <a
                          href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                          title="Costus root powder "
                        >
                          <div className="media">
                            <div className="clearfix mb-2">
                              <div className="float-left mr-3">
                                <div className="rfq-title">Costus root powder </div>
                              </div>
                              <div className="float-right">
                                <div className="rfq-tag">New</div>
                              </div>
                            </div>
                            <div className="rfq-footer d-flex">
                              <Image
                                unoptimized={false}
                                width={28}
                                height={19}
                                src="https://assets.abraacdn.com/assets/images/id.png"
                                alt="id Flag"
                                className="img-responsive"
                              />
                              <h4 className="pl-2">Buyer From Indonesia </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                      <div className="rfq-block">
                        <a
                          href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                          title="Costus root powder "
                        >
                          <div className="media">
                            <div className="clearfix mb-2">
                              <div className="float-left mr-3">
                                <div className="rfq-title">Costus root powder </div>
                              </div>
                              <div className="float-right">
                                <div className="rfq-tag">New</div>
                              </div>
                            </div>
                            <div className="rfq-footer d-flex">
                              <Image
                                unoptimized={false}
                                width={28}
                                height={19}
                                src="https://assets.abraacdn.com/assets/images/id.png"
                                alt="id Flag"
                                className="img-responsive"
                              />
                              <h4 className="pl-2">Buyer From Indonesia </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                      <div className="rfq-block">
                        <a
                          href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                          title="Costus root powder "
                        >
                          <div className="media">
                            <div className="clearfix mb-2">
                              <div className="float-left mr-3">
                                <div className="rfq-title">Costus root powder </div>
                              </div>
                              <div className="float-right">
                                <div className="rfq-tag">New</div>
                              </div>
                            </div>
                            <div className="rfq-footer d-flex">
                              <Image
                                unoptimized={false}
                                width={28}
                                height={19}
                                src="https://assets.abraacdn.com/assets/images/id.png"
                                alt="id Flag"
                                className="img-responsive"
                              />
                              <h4 className="pl-2">Buyer From Indonesia </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: "493.333px", marginRight: 10 }}>
                      <div className="rfq-block">
                        <a
                          href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                          title="Costus root powder "
                        >
                          <div className="media">
                            <div className="clearfix mb-2">
                              <div className="float-left mr-3">
                                <div className="rfq-title">Costus root powder </div>
                              </div>
                              <div className="float-right">
                                <div className="rfq-tag">New</div>
                              </div>
                            </div>
                            <div className="rfq-footer d-flex">
                              <Image
                                unoptimized={false}
                                width={28}
                                height={19}
                                src="https://assets.abraacdn.com/assets/images/id.png"
                                alt="id Flag"
                                className="img-responsive"
                              />
                              <h4 className="pl-2">Buyer From Indonesia </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cloned active" style={{ width: "493.333px", marginRight: 10 }}>
                      <div className="rfq-block">
                        <a
                          href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                          title="Costus root powder "
                        >
                          <div className="media">
                            <div className="clearfix mb-2">
                              <div className="float-left mr-3">
                                <div className="rfq-title">Costus root powder </div>
                              </div>
                              <div className="float-right">
                                <div className="rfq-tag">New</div>
                              </div>
                            </div>
                            <div className="rfq-footer d-flex">
                              <Image
                                unoptimized={false}
                                width={28}
                                height={19}
                                src="https://assets.abraacdn.com/assets/images/id.png"
                                alt="id Flag"
                                className="img-responsive"
                              />
                              <h4 className="pl-2">Buyer From Indonesia </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cloned active" style={{ width: "493.333px", marginRight: 10 }}>
                      <div className="rfq-block">
                        <a
                          href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                          title="Costus root powder "
                        >
                          <div className="media">
                            <div className="clearfix mb-2">
                              <div className="float-left mr-3">
                                <div className="rfq-title">Costus root powder </div>
                              </div>
                              <div className="float-right">
                                <div className="rfq-tag">New</div>
                              </div>
                            </div>
                            <div className="rfq-footer d-flex">
                              <Image
                                unoptimized={false}
                                width={28}
                                height={19}
                                src="https://assets.abraacdn.com/assets/images/id.png"
                                alt="id Flag"
                                className="img-responsive"
                              />
                              <h4 className="pl-2">Buyer From Indonesia </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                      <div className="rfq-block">
                        <a
                          href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                          title="Costus root powder "
                        >
                          <div className="media">
                            <div className="clearfix mb-2">
                              <div className="float-left mr-3">
                                <div className="rfq-title">Costus root powder </div>
                              </div>
                              <div className="float-right">
                                <div className="rfq-tag">New</div>
                              </div>
                            </div>
                            <div className="rfq-footer d-flex">
                              <Image
                                unoptimized={false}
                                width={28}
                                height={19}
                                src="https://assets.abraacdn.com/assets/images/id.png"
                                alt="id Flag"
                                className="img-responsive"
                              />
                              <h4 className="pl-2">Buyer From Indonesia </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button type="button" role="presentation" className="owl-prev">
                    <span className="owl-prev fas fa-chevron-left " />
                  </button>
                  <button type="button" role="presentation" className="owl-next">
                    <span className="owl-next fas fa-chevron-right " />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </section>

          <section
            //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
            className="container stats-sec mt-3"
          >
            <div className="row">
              <div className="col-md-6">
                <h2 className="sec-heading d-flex align-items-center pt-3 pt-md-0">
                  <LazyLoad>
                    <Image
                      unoptimized={false}
                      width={30}
                      height={20}
                      src="https://s101.abraacdn.com/files/star-smile-line-svg.png"
                      alt="Bulk Deals"
                      className="img-fluid pr-2 position-relative bg-white"
                    />
                  </LazyLoad>

                  <span>Bulk Deals </span>
                </h2>
                <section
                  style={{
                    minWidth: "-webkit-fill-available",
                    height: "90%"
                  }}
                  className="home-section white-box"
                >
                  <CarouselNum5 />
                </section>
              </div>
              <div className="col-md-6 mt-3 mt-md-0">
                <section
                  style={{ minWidth: "-webkit-fill-available" }}
                  className="home-section white-box request_form request_form_2"
                >
                  <div className="mb-md-3 mb-lg-4">
                    <h2 className="sec-heading d-flex align-items-center">
                      <LazyLoad>
                        <Image
                          unoptimized={false}
                          width={30}
                          height={20}
                          src="https://s101.abraacdn.com/files/earth-line.png"
                          alt="Global Top Rated Suppliers"
                          className="img-fluid pr-2 position-relative bg-white"
                        />
                      </LazyLoad>

                      <span>Global Top Rated Suppliers </span>
                    </h2>
                  </div>
                  <CarouselNum7 />
                </section>
              </div>
            </div>
          </section>
          <section
            //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
            className="container mt-3 deal-sec"
            style={{ display: "none" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div
                  style={{
                    height: "100%"
                  }}
                  className="white-box deal-product"
                >
                  <h2 className="sec-heading">
                    <span>Weekly Deals</span>
                  </h2>
                  <div className="deal-product-body">
                    <div className="deal-right-sec">
                      <h3>From 10% OFF</h3>
                      <p>Deals end in:</p>
                      <ul>
                        <li>
                          <span id="days" />
                        </li>
                        <li>
                          <span id="hours" />
                        </li>
                        <li>
                          <span id="minutes" />
                        </li>
                        <li>
                          <span id="seconds" />
                        </li>
                      </ul>
                      <a>View More</a>
                    </div>
                    <div className="deal-left-sec mt-2 mt-md-2 mt-lg-2 mt-xl-0">
                      <div className="row">
                        <div className="col-6 space_remove_responsive">
                          <div className="item-2">
                            <a title="Bangs Organic Ginger Shot with Orange,Carrot and Ginger">
                              <div className="item-2-image">
                                <LazyLoad>
                                  <Image
                                    unoptimized={false}
                                    width={50}
                                    height={50}
                                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png"
                                    alt="Bangs Organic Ginger Shot with Orange,Carrot and Ginger"
                                  />
                                </LazyLoad>
                              </div>
                              <div className="item-2-mq"></div>
                              <div className="item-2-title">Bangs Organic Ginger Shot ...</div>
                              <div className="item-2-price"></div>
                              <div className="item-2-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-6 space_remove_responsive">
                          <div className="item-2">
                            <a title="Organic Extra Virgin Palestinian Olive oil">
                              <div className="item-2-image">
                                <LazyLoad>
                                  <Image
                                    unoptimized={false}
                                    width={50}
                                    height={50}
                                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg"
                                    alt="Organic Extra Virgin Palestinian Olive oil"
                                  />
                                </LazyLoad>
                              </div>
                              <div className="item-2-mq"></div>
                              <div className="item-2-title">Organic Extra Virgin ...</div>
                              <div className="item-2-price"></div>
                              <div className="item-2-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3 mt-md-0">
                <div
                  style={{
                    height: "100%"
                  }}
                  className="white-box deal-product"
                >
                  <h2 className="sec-heading">
                    <span>Small Commoities Marketplace</span>
                  </h2>
                  <div className="deal-product-body">
                    <div className="deal-right-sec commoities-sec commoities-sec1">
                      <h3>A wide range of selected goods with fast free shipping</h3>
                      <a>View More</a>
                    </div>
                    <div className="deal-left-sec mt-2 mt-md-2 mt-lg-2 mt-xl-0">
                      <div className="row">
                        <div className="col-6 space_remove_responsive">
                          <div className="item-2">
                            <a title="Bangs Organic Ginger Shot with Orange,Carrot and Ginger">
                              <div className="item-2-image">
                                <LazyLoad>
                                  <Image
                                    unoptimized={false}
                                    width={50}
                                    height={50}
                                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png"
                                    alt="Bangs Organic Ginger Shot with Orange,Carrot and Ginger"
                                  />
                                </LazyLoad>
                              </div>
                              <div className="item-2-mq"></div>
                              <div className="item-2-title">Bangs Organic Ginger Shot ...</div>
                              <div className="item-2-price"></div>
                              <div className="item-2-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-6 space_remove_responsive">
                          <div className="item-2">
                            <a title="Organic Extra Virgin Palestinian Olive oil">
                              <div className="item-2-image">
                                <LazyLoad>
                                  <Image
                                    unoptimized={false}
                                    width={50}
                                    height={50}
                                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg"
                                    alt="Organic Extra Virgin Palestinian Olive oil"
                                  />
                                </LazyLoad>
                              </div>
                              <div className="item-2-mq"></div>
                              <div className="item-2-title">Organic Extra Virgin ...</div>
                              <div className="item-2-price"></div>
                              <div className="item-2-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
            className="mt-3 container p-0"
          >
            <div className="home_ads_sec owl-carousel"></div>
          </section>
        </div>
      )}
      <div style={{ marginTop: "20px" }} id="div3"></div>
      {(isVisible2 || elementInViewport(el3)) && (
        <div>
          <section
            //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
            className="container stats-sec mt-3 d-none d-md-block"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="stats-wrapper home-section">
                  <div className="stats-inner home-section-title align-items-center align-content-center">
                    <h2 className="sec-heading">
                      <span>
                        Request For <br />
                        Quotation
                      </span>
                    </h2>
                    <div className="row">
                      <div className="stats-block border_remove col-12 col-md-6">
                        <div className="stats-details">
                          Create a buying request and we will do the running.
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ display: "none" }}>
                      <div className="stats-block col-md-3 border_remove">
                        <div className="stats-title">18898</div>
                        <div className="stats-details">Verified Suppliers</div>
                      </div>
                      <div className="stats-block col-md-2">
                        <div className="stats-title">5834</div>
                        <div className="stats-details">RFQS</div>
                      </div>
                      <div className="stats-block col-md-2">
                        <div className="stats-title">4780</div>
                        <div className="stats-details">Industries</div>
                      </div>
                    </div>
                    <div className="row" style={{ display: "none" }}>
                      <div className="col-md-12">
                        <a className="btn-white" title="See all categories">
                          See all categories <i className="fa fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                    <div className="clearfix" style={{ display: "none" }} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <section
                  style={{ minWidth: "-webkit-fill-available" }}
                  className="home-section white-box request_form"
                >
                  <div className="rfq-2-wrapper home-section">
                    <div className="rfq-2">
                      <div className="rfq-2-details">
                        <h2 className="sec-heading">
                          <span>Create Buying Request Here</span>
                        </h2>
                        <p className="mb-4 mt-2">
                          Having difficulty finding your product? Let Abraa find it for you.
                        </p>
                        <div className="rfq-2-form">
                          <form className="rfq-2-form-elements" name="quoting-race" action="buy-request">
                            <label className="border_input border_input1 position-relative mb-0">
                              <input
                                name="buyrequest_name"
                                id="buyrequest_name_2"
                                placeholder="What are you looking for?"
                              />
                            </label>
                            <label className="border_input border_input2 position-relative mb-0">
                              <input placeholder="Quantity" name="buyrequest_qty" id="buyrequest_qty_2" />
                            </label>
                            <select
                              className="plain-white-dropdown"
                              name="buyrequest_unt"
                              id="buyrequest_unt_2"
                              style={{ display: "none" }}
                            >
                              <option value={1}>Unit</option>
                              <option value={2}>Kilogram</option>
                              <option value={3}>Gram</option>
                              <option value={4}>Box</option>
                              <option value={5}>Barrel</option>
                              <option value={6}>Carton</option>
                              <option value={7}>Bushel</option>
                              <option value={8}>Case</option>
                              <option value={9}>Centimeter</option>
                              <option value={10}>Container 40-Foot</option>
                              <option value={11}>Container 20-Foot</option>
                              <option value={12}>Cubic Foot</option>
                              <option value={13}>Cubic Inch</option>
                              <option value={14}>Cubic Meter</option>
                              <option value={15}>Cubic Yard</option>
                              <option value={16}>Degrees Celsius</option>
                              <option value={17}>Degrees Fahrenheit</option>
                              <option value={18}>Dozen</option>
                              <option value={19}>Dram</option>
                              <option value={20}>Fluid Ounce</option>
                              <option value={21}>Foot</option>
                              <option value={22}>Chain</option>
                              <option value={23}>Furlong</option>
                              <option value={24}>Gallon</option>
                              <option value={25}>Gill</option>
                              <option value={26}>Grain</option>
                              <option value={27}>Ampere</option>
                              <option value={28}>Gross</option>
                              <option value={29}>Hectare</option>
                              <option value={30}>Hertz</option>
                              <option value={31}>Inch</option>
                              <option value={32}>Kiloampere</option>
                              <option value={33}>Bag</option>
                              <option value={34}>Kilohertz</option>
                              <option value={35}>Kilometer</option>
                              <option value={36}>Kiloohm</option>
                              <option value={37}>Kilovolt</option>
                              <option value={38}>Kilowatt</option>
                              <option value={39}>Liter</option>
                              <option value={40}>Long Ton</option>
                              <option value={41}>Megahertz</option>
                              <option value={42}>Meter</option>
                              <option value={43}>Metric Ton</option>
                              <option value={44}>Mile</option>
                              <option value={45}>Milliampere</option>
                              <option value={46}>Milligram</option>
                              <option value={47}>Millihertz</option>
                              <option value={48}>Milliliter</option>
                              <option value={49}>Millimeter</option>
                              <option value={50}>Milliohm</option>
                              <option value={51}>Millivolt</option>
                              <option value={52}>Milliwatt</option>
                              <option value={53}>Nautical Mile</option>
                              <option value={54}>Ohm</option>
                              <option value={55}>Ounce</option>
                              <option value={56}>Pack</option>
                              <option value={57}>Pallet</option>
                              <option value={58}>Pair</option>
                              <option value={59}>Parcel</option>
                              <option value={60}>Perch</option>
                              <option value={61}>Piece</option>
                              <option value={62}>Pint</option>
                              <option value={63}>Plant</option>
                              <option value={64}>Pole</option>
                              <option value={65}>Pound</option>
                              <option value={66}>Quart</option>
                              <option value={67}>Quarter</option>
                              <option value={68}>Rod</option>
                              <option value={69}>Roll</option>
                              <option value={70}>Set</option>
                              <option value={71}>Sheet</option>
                              <option value={72}>Short Ton</option>
                              <option value={73}>Square Centimeter</option>
                              <option value={74}>Square Foot</option>
                              <option value={75}>Square Inch</option>
                              <option value={76}>Square Meter</option>
                              <option value={77}>Square Mile</option>
                              <option value={78}>Square Yard</option>
                              <option value={79}>Stone</option>
                              <option value={80}>Strand</option>
                              <option value={81}>Ton</option>
                              <option value={82}>Tonne</option>
                              <option value={83}>Tray</option>
                              <option value={84}>Cubic Centimeter</option>
                              <option value={86}>Volt</option>
                              <option value={87}>Watt</option>
                              <option value={88}>Wp</option>
                              <option value={89}>Yard</option>
                              <option value={90}>HD Bag</option>
                              <option value={91}>Plastic Can</option>
                              <option value={92}>Tin Cans</option>
                              <option value={93}>Pet Bottles</option>
                              <option value={94}>Jar</option>
                              <option value={95}>Tin</option>
                              <option value={96}>Glass</option>
                            </select>
                            <div className="nice-select plain-white-dropdown" tabIndex={0}>
                              <span className="current">Unit</span>
                              <ul className="list">
                                <li data-value={1} className="option selected focus">
                                  Unit
                                </li>
                                <li data-value={2} className="option">
                                  Kilogram
                                </li>
                                <li data-value={3} className="option">
                                  Gram
                                </li>
                                <li data-value={4} className="option">
                                  Box
                                </li>
                                <li data-value={5} className="option">
                                  Barrel
                                </li>
                                <li data-value={6} className="option">
                                  Carton
                                </li>
                                <li data-value={7} className="option">
                                  Bushel
                                </li>
                                <li data-value={8} className="option">
                                  Case
                                </li>
                                <li data-value={9} className="option">
                                  Centimeter
                                </li>
                                <li data-value={10} className="option">
                                  Container 40-Foot
                                </li>
                                <li data-value={11} className="option">
                                  Container 20-Foot
                                </li>
                                <li data-value={12} className="option">
                                  Cubic Foot
                                </li>
                                <li data-value={13} className="option">
                                  Cubic Inch
                                </li>
                                <li data-value={14} className="option">
                                  Cubic Meter
                                </li>
                                <li data-value={15} className="option">
                                  Cubic Yard
                                </li>
                                <li data-value={16} className="option">
                                  Degrees Celsius
                                </li>
                                <li data-value={17} className="option">
                                  Degrees Fahrenheit
                                </li>
                                <li data-value={18} className="option">
                                  Dozen
                                </li>
                                <li data-value={19} className="option">
                                  Dram
                                </li>
                                <li data-value={20} className="option">
                                  Fluid Ounce
                                </li>
                                <li data-value={21} className="option">
                                  Foot
                                </li>
                                <li data-value={22} className="option">
                                  Chain
                                </li>
                                <li data-value={23} className="option">
                                  Furlong
                                </li>
                                <li data-value={24} className="option">
                                  Gallon
                                </li>
                                <li data-value={25} className="option">
                                  Gill
                                </li>
                                <li data-value={26} className="option">
                                  Grain
                                </li>
                                <li data-value={27} className="option">
                                  Ampere
                                </li>
                                <li data-value={28} className="option">
                                  Gross
                                </li>
                                <li data-value={29} className="option">
                                  Hectare
                                </li>
                                <li data-value={30} className="option">
                                  Hertz
                                </li>
                                <li data-value={31} className="option">
                                  Inch
                                </li>
                                <li data-value={32} className="option">
                                  Kiloampere
                                </li>
                                <li data-value={33} className="option">
                                  Bag
                                </li>
                                <li data-value={34} className="option">
                                  Kilohertz
                                </li>
                                <li data-value={35} className="option">
                                  Kilometer
                                </li>
                                <li data-value={36} className="option">
                                  Kiloohm
                                </li>
                                <li data-value={37} className="option">
                                  Kilovolt
                                </li>
                                <li data-value={38} className="option">
                                  Kilowatt
                                </li>
                                <li data-value={39} className="option">
                                  Liter
                                </li>
                                <li data-value={40} className="option">
                                  Long Ton
                                </li>
                                <li data-value={41} className="option">
                                  Megahertz
                                </li>
                                <li data-value={42} className="option">
                                  Meter
                                </li>
                                <li data-value={43} className="option">
                                  Metric Ton
                                </li>
                                <li data-value={44} className="option">
                                  Mile
                                </li>
                                <li data-value={45} className="option">
                                  Milliampere
                                </li>
                                <li data-value={46} className="option">
                                  Milligram
                                </li>
                                <li data-value={47} className="option">
                                  Millihertz
                                </li>
                                <li data-value={48} className="option">
                                  Milliliter
                                </li>
                                <li data-value={49} className="option">
                                  Millimeter
                                </li>
                                <li data-value={50} className="option">
                                  Milliohm
                                </li>
                                <li data-value={51} className="option">
                                  Millivolt
                                </li>
                                <li data-value={52} className="option">
                                  Milliwatt
                                </li>
                                <li data-value={53} className="option">
                                  Nautical Mile
                                </li>
                                <li data-value={54} className="option">
                                  Ohm
                                </li>
                                <li data-value={55} className="option">
                                  Ounce
                                </li>
                                <li data-value={56} className="option">
                                  Pack
                                </li>
                                <li data-value={57} className="option">
                                  Pallet
                                </li>
                                <li data-value={58} className="option">
                                  Pair
                                </li>
                                <li data-value={59} className="option">
                                  Parcel
                                </li>
                                <li data-value={60} className="option">
                                  Perch
                                </li>
                                <li data-value={61} className="option">
                                  Piece
                                </li>
                                <li data-value={62} className="option">
                                  Pint
                                </li>
                                <li data-value={63} className="option">
                                  Plant
                                </li>
                                <li data-value={64} className="option">
                                  Pole
                                </li>
                                <li data-value={65} className="option">
                                  Pound
                                </li>
                                <li data-value={66} className="option">
                                  Quart
                                </li>
                                <li data-value={67} className="option">
                                  Quarter
                                </li>
                                <li data-value={68} className="option">
                                  Rod
                                </li>
                                <li data-value={69} className="option">
                                  Roll
                                </li>
                                <li data-value={70} className="option">
                                  Set
                                </li>
                                <li data-value={71} className="option">
                                  Sheet
                                </li>
                                <li data-value={72} className="option">
                                  Short Ton
                                </li>
                                <li data-value={73} className="option">
                                  Square Centimeter
                                </li>
                                <li data-value={74} className="option">
                                  Square Foot
                                </li>
                                <li data-value={75} className="option">
                                  Square Inch
                                </li>
                                <li data-value={76} className="option">
                                  Square Meter
                                </li>
                                <li data-value={77} className="option">
                                  Square Mile
                                </li>
                                <li data-value={78} className="option">
                                  Square Yard
                                </li>
                                <li data-value={79} className="option">
                                  Stone
                                </li>
                                <li data-value={80} className="option">
                                  Strand
                                </li>
                                <li data-value={81} className="option">
                                  Ton
                                </li>
                                <li data-value={82} className="option">
                                  Tonne
                                </li>
                                <li data-value={83} className="option">
                                  Tray
                                </li>
                                <li data-value={84} className="option">
                                  Cubic Centimeter
                                </li>
                                <li data-value={86} className="option">
                                  Volt
                                </li>
                                <li data-value={87} className="option">
                                  Watt
                                </li>
                                <li data-value={88} className="option">
                                  Wp
                                </li>
                                <li data-value={89} className="option">
                                  Yard
                                </li>
                                <li data-value={90} className="option">
                                  HD Bag
                                </li>
                                <li data-value={91} className="option">
                                  Plastic Can
                                </li>
                                <li data-value={92} className="option">
                                  Tin Cans
                                </li>
                                <li data-value={93} className="option">
                                  Pet Bottles
                                </li>
                                <li data-value={94} className="option">
                                  Jar
                                </li>
                                <li data-value={95} className="option">
                                  Tin
                                </li>
                                <li data-value={96} className="option">
                                  Glass
                                </li>
                              </ul>
                            </div>
                            <button className="btn-blue">CREATE RFQ</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section
            //  id={loading2 && isVisible2 ? "heightonscroll" : "hideonscroll"}
            className="container stats-sec mt-3 customized_products"
          >
            <div className="row">
              <div className="col-md-6">
                <section
                  style={{ minWidth: "-webkit-fill-available" }}
                  className="home-section white-box request_form"
                >
                  <div className="mb-md-2 mb-lg-4">
                    <div className="customized_group d-flex justify-content-between">
                      <div className="customized_group_title w-75">
                        <h2 className="sec-heading mb-1 mb-md-2 pt-3 pt-md-0">
                          <span>Customizable products</span>
                        </h2>
                        <p>
                          Verified manufacturers with customized production capabilities and fast delivery.
                        </p>
                      </div>
                      <div className="customized_group_img w-25 text-right">
                        <LazyLoad>
                          <Image
                            unoptimized={false}
                            width={50}
                            height={50}
                            src="https://s101.abraacdn.com/files/1.png"
                            alt
                            className="img-fluid"
                          />
                        </LazyLoad>
                      </div>
                    </div>
                  </div>
                  <CarouselNum6 />
                </section>
              </div>
              <div className="col-md-6 mt-3 mt-md-0">
                <section
                  style={{ minWidth: "-webkit-fill-available" }}
                  className="home-section white-box request_form"
                >
                  <div className="mb-md-2 mb-lg-4">
                    <div className="customized_group d-flex justify-content-between">
                      <div className="customized_group_title w-75">
                        <h2 className="sec-heading mb-1 mb-md-2 pt-3 pt-md-0">
                          <a target="_blankCat">Instant Order - Fast Fulfilment</a>
                        </h2>
                        <p className="w-75">Order products that are ready to be shipped to you.</p>
                      </div>
                      <div className="customized_group_img w-25 text-right">
                        <LazyLoad>
                          <Image
                            unoptimized={false}
                            width={50}
                            height={50}
                            src="https://s101.abraacdn.com/files/2.png"
                            alt
                            className="img-fluid"
                          />
                        </LazyLoad>
                      </div>
                    </div>
                  </div>
                  <CarouselNum8 />
                </section>
              </div>
            </div>
          </section>
          <section
            //  id={loading2 && isVisible2 ? "heightonscroll" : "hideonscroll"}
            className="white-box mt-3 container premimum_buyers_sec"
          >
            <h2 className="sec-heading pt-3 pt-md-0">
              <span>
                Premium Buyers
                <i
                  className="ri-heart-fill heart"
                  style={{ position: "relative", top: 2, color: "#FF416C" }}
                />
                to resource from Abraa
              </span>
            </h2>
            <OwlCarousel
              className="buyers-wrapper buyers-slider"
              items={7}
              lazyLoad={true}
              dots={false}
              loop
              nav={false}
              autoplay={true}
            >
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={100}
                    height={100}
                    src="https://s101.abraacdn.com/files/151722227714768.png"
                    alt="Rotana-Buyers of Hotel suppliers"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={100}
                    height={100}
                    src="https://s101.abraacdn.com/files/151722224327201.png"
                    alt="Buyer of Fire and safety products"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={100}
                    height={100}
                    src="https://s101.abraacdn.com/files/151722215674051.png"
                    alt="IFFCO-Supplies buyers"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={50}
                    height={50}
                    src="https://s101.abraacdn.com/files/151722212051573.png"
                    alt="Flora Group Hotels-Hotel supplies buyer"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={100}
                    height={100}
                    src="https://s101.abraacdn.com/files/151722210358982.png"
                    alt="Atlas Copco- Industrial products buyer"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={100}
                    height={100}
                    src="https://s101.abraacdn.com/files/151722208733158.png"
                    alt="Dubai Airports-Buyer of hotel supplies"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={100}
                    height={100}
                    src="https://s101.abraacdn.com/files/151722207338765.png"
                    alt="DoubleTree-Buyer of Hotel Supplies"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
              <div className="buyer-logo">
                <LazyLoad>
                  <Image
                    unoptimized={false}
                    width={100}
                    height={100}
                    src="https://s101.abraacdn.com/files/151722204855640.png"
                    alt="Fetchr - Wholesale Buyer in Dubai at Abraa"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
            </OwlCarousel>
          </section>
          <section
            //  id={loading2 && isVisible2 ? "heightonscroll" : "hideonscroll"}
            className="white-box mt-3 container"
          >
            <h2 className="sec-heading pt-3 pt-md-0">
              <span>Our Services</span>
            </h2>
            <div className="services-wrapper-top">
              <div className="services-wrapper">
                <div className="service-block">
                  <a title="Shipping">
                    <div className="service-img">
                      <LazyLoad>
                        <Image
                          unoptimized={false}
                          width={50}
                          height={50}
                          src="https://s101.abraacdn.com/files/truck.svg"
                          alt="Shipping"
                        />
                      </LazyLoad>
                    </div>
                    <div className="service-info">
                      <h3>Shipping</h3>
                      <span>
                        Abraa manages everything perfectly when it comes to getting your goods from the
                        factory floor to your doorstep. Being a ...
                      </span>
                      <p
                        style={{
                          display: "flex",
                          marginBottom: 0,
                          alignItems: "center",
                          color: "#1180b0",
                          marginTop: "15px",
                          letterSpacing: "0.5px",
                          fontWeight: 500,
                          fontSize: "13px"
                        }}
                      >
                        Read More <i className="ri-arrow-right-s-line" />
                      </p>
                    </div>
                  </a>
                </div>
                <div className="service-block">
                  <a title="Warehousing">
                    <div className="service-img">
                      <LazyLoad>
                        <Image
                          unoptimized={false}
                          width={50}
                          height={50}
                          src="https://s101.abraacdn.com/files/warehouse.svg"
                          alt="Warehousing"
                        />
                      </LazyLoad>
                    </div>
                    <div className="service-info">
                      <h3>Warehousing</h3>
                      <span>
                        Abraa.com is globally well-linked with multiple logistics and warehouse associates.
                        Positioned in the heart of Dubai, w ...
                      </span>
                      <p
                        style={{
                          display: "flex",
                          marginBottom: 0,
                          alignItems: "center",
                          color: "#1180b0",
                          marginTop: "15px",
                          letterSpacing: "0.5px",
                          fontWeight: 500,
                          fontSize: "13px"
                        }}
                      >
                        Read More <i className="ri-arrow-right-s-line" />
                      </p>
                    </div>
                  </a>
                </div>
                <div className="service-block">
                  <a title="Products Inspection">
                    <div className="service-img">
                      <LazyLoad>
                        <Image
                          unoptimized={false}
                          width={50}
                          height={50}
                          src="https://s101.abraacdn.com/files/packages.svg"
                          alt="Products Inspection"
                        />
                      </LazyLoad>
                    </div>
                    <div className="service-info">
                      <h3>Products Inspection</h3>
                      <span>
                        At Abraa.com, every buyer’s product is physically verified through onsite inspection
                        for those suppliers in the U.A.E. ...
                      </span>
                      <p
                        style={{
                          display: "flex",
                          marginBottom: 0,
                          alignItems: "center",
                          color: "#1180b0",
                          marginTop: "15px",
                          letterSpacing: "0.5px",
                          fontWeight: 500,
                          fontSize: "13px"
                        }}
                      >
                        Read More <i className="ri-arrow-right-s-line" />
                      </p>
                    </div>
                  </a>
                </div>
                <div className="service-block">
                  <a title="Buyer Protection">
                    <div className="service-img">
                      <LazyLoad>
                        <Image
                          unoptimized={false}
                          width={50}
                          height={50}
                          src="https://s101.abraacdn.com/files/authentication.svg"
                          alt="Buyer Protection"
                        />
                      </LazyLoad>
                    </div>
                    <div className="service-info">
                      <h3>Buyer Protection</h3>
                      <span>
                        Are you worried about account safety, payment security, and product quality while
                        buying online? Worry no more, Abraa of ...
                      </span>
                      <p
                        style={{
                          display: "flex",
                          marginBottom: 0,
                          alignItems: "center",
                          color: "#1180b0",
                          marginTop: "15px",
                          letterSpacing: "0.5px",
                          fontWeight: 500,
                          fontSize: "13px"
                        }}
                      >
                        Read More <i className="ri-arrow-right-s-line" />
                      </p>
                    </div>
                  </a>
                </div>
                <div className="service-block">
                  <a title="Secure Payment">
                    <div className="service-img">
                      <LazyLoad>
                        <Image
                          unoptimized={false}
                          width={50}
                          height={50}
                          src="https://s101.abraacdn.com/files/pay.svg"
                          alt="Secure Payment"
                        />
                      </LazyLoad>
                    </div>
                    <div className="service-info">
                      <h3>Secure Payment</h3>
                      <span>
                        What is Abraa Secure Payment (ASP)? Abraa Secure Payment(ASP) is a payment gateway
                        solution that grants high protectio ...
                      </span>
                      <p
                        style={{
                          display: "flex",
                          marginBottom: 0,
                          alignItems: "center",
                          color: "#1180b0",
                          marginTop: "15px",
                          letterSpacing: "0.5px",
                          fontWeight: 500,
                          fontSize: "13px"
                        }}
                      >
                        Read More <i className="ri-arrow-right-s-line" />
                      </p>
                    </div>
                  </a>
                </div>
                <div className="service-block">
                  <a title="On site Verification">
                    <div className="service-img">
                      <LazyLoad>
                        <Image
                          unoptimized={false}
                          width={50}
                          height={50}
                          src="https://s101.abraacdn.com/files/security.svg"
                          alt="On site Verification"
                        />
                      </LazyLoad>
                    </div>
                    <div className="service-info">
                      <h3>On site Verification</h3>
                      <span>
                        Any global-based supplier can sign up for free on Abraa.com and instantly launch their
                        product, however with a systemati ...
                      </span>
                      <p
                        style={{
                          display: "flex",
                          marginBottom: 0,
                          alignItems: "center",
                          color: "#1180b0",
                          marginTop: "15px",
                          letterSpacing: "0.5px",
                          fontWeight: 500,
                          fontSize: "13px"
                        }}
                      >
                        Read More <i className="ri-arrow-right-s-line" />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}

export default Main
