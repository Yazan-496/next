import React, { useState } from "react"

function MainMobi() {
  const [Tab, setTab] = useState("list")
  const [openSort, setOpenSort] = useState(false)
  const [location, setLocation] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Sort By")
  return (
    <main
      className="position-relative home_wrapper category_wrapper"
      style={{ paddingTop: 137, marginTop: "20px" }}
    >
      <div className="pop-up-message" id="cart-message">
        <div className="message-close">
          <i className="fa fa-times" />
        </div>
        <h5 className="message-text">Product Added To Container Successfuly !</h5>
        <div className="message-btns">
          <a>View Conatiner </a>
        </div>
      </div>
      <div className="pop-up-message" id="cart-message-error">
        <div className="message-close">
          <i className="fa fa-times" />
        </div>
        <h5 className="message-text">
          An error occured while adding the product
          <br /> please try again later !
        </h5>
      </div>
      <div className="pop-up-message" id="cart-message-error-0">
        <div className="message-close">
          <i className="fa fa-times" />
        </div>
        <h5 className="message-text">
          You can't order less than <span className="min-value" />
        </h5>
      </div>
      <div className="message-overlay" />
      <section id="hospitality_id" className="pt-xl-2">
        <div className="container px-md-0 mt-5 mt-md-0">
          <div className="row">
            <div className="sidebar_cus_col col-md-12 col-lg-3 mb-3">
              <div id="sidebar" className="white-box position-relative">
                <div className="sidebar_position">
                  <h4 className="text-uppercase bold_600 d-flex align-items-center justify-content-between d-lg-none">
                    FILTER <i className="ri-arrow-down-s-line" />
                  </h4>
                  <div className="sidebar_responsive_change d-none d-lg-block">
                    <div className="fillter_side">
                      <h4 className="active text-capitalize d-none d-lg-block">Filter</h4>
                    </div>
                    <form className="d-flex flex-wrap align-items-center w-100 m-0 mt-4">
                      <div className="cus_box_check mb-2 w-100">
                        <input
                          type="checkbox"
                          id="verifiedonly"
                          name="verifiedonly"
                          onchange="filterProducts()"
                        />
                        <label
                          htmlFor="verifiedonly"
                          className="mb-0 d-flex align-items-center position-relative bold_400"
                        >
                          Verified members
                          <img
                            src="https://assets.abraacdn.com/assets/images/verified-members.png"
                            alt="Verified members"
                            className="img-fluid ml-1"
                          />
                        </label>
                      </div>
                      <div className="cus_box_check mb-2 w-100">
                        <input type="checkbox" id="c1" name="cc" onchange="filterProducts()" />
                        <label
                          htmlFor="c1"
                          className="mb-0 d-flex align-items-center position-relative bold_400"
                        >
                          With images only
                        </label>
                      </div>
                      <div className="cus_box_check w-100">
                        <input
                          type="checkbox"
                          id="instantOrder"
                          name="instantOrder"
                          onchange="filterProducts()"
                        />
                        <label
                          htmlFor="instantOrder"
                          className="mb-0 d-inline-block position-relative bold_400"
                        >
                          Instant Order
                        </label>
                      </div>
                    </form>
                    <div className="inner_sidebar_box border-top1">
                      <form onsubmit="filterProducts()" id="searchForm" method="post">
                        <input
                          type="text"
                          id="side_q"
                          className="form-control mb-4"
                          placeholder="Filter Category"
                        />
                      </form>
                      <input type="hidden" className="category-top" defaultValue />
                      <h4 className="active d-flex align-items-center justify-content-between bold_600 font_20">
                        Categories <i className="ri-arrow-up-s-line" />
                      </h4>
                      <div className="cat_box_list d-none d-lg-block" id="childcategorylevel">
                        <div className="cus_select_opetion mt-4 pt-1" id="childcategorylevels"></div>
                      </div>
                      <a className="d-inline-block text_blue bold_600 supplier_country_btn" id="loadMore">
                        Load more
                      </a>
                      <a className="d-inline-block text_blue bold_600 supplier_country_btn" id="showLess">
                        Show less
                      </a>
                    </div>
                    <div className="inner_sidebar_box border-top1">
                      <h4 className="active d-flex align-items-center justify-content-between bold_600 font_20">
                        Price <i className="ri-arrow-up-s-line" />
                      </h4>
                      <div className="cat_box_list d-none d-lg-block">
                        <div className="cus_select_opetion mt-4 pt-1">
                          <form>
                            <div id="slider-snap" />
                            <div className="range_group d-flex align-items-center justify-content-between mt-4">
                              <div className="search_cus_select range_slide_drop position-relative">
                                <label className="mb-0 position-absolute text_blue bold_500">Min:</label>
                                <select className="Wide" name="minprice" id="minprice" aria-invalid="false">
                                  <option value={0}>0 usd</option>
                                  <option value={50}>50 usd</option>
                                  <option value={100}>100 usd</option>
                                  <option value={150}>150 usd</option>
                                  <option value={200}>200 usd</option>
                                  <option value={250}>250 usd</option>
                                  <option value={500}>500 usd</option>
                                  <option value={750}>750 usd</option>
                                  <option value={1000}>1000 usd</option>
                                  <option value={2000}>2000 usd</option>
                                  <option value={3000}>3000 usd</option>
                                </select>
                              </div>
                              <div className="rang_inner_text px-2">
                                <label className="mb-0 to_text_range">to</label>
                              </div>
                              <div className="search_cus_select range_slide_drop position-relative">
                                <label className="mb-0 position-absolute text_blue bold_500">Max:</label>
                                <select className="Wide" name="maxprice" id="maxprice" aria-invalid="false">
                                  <option value={0}>0 usd</option>
                                  <option value={50}>50 usd</option>
                                  <option value={100}>100 usd</option>
                                  <option value={150}>150 usd</option>
                                  <option value={200}>200 usd</option>
                                  <option value={250}>250 usd</option>
                                  <option value={500}>500 usd</option>
                                  <option value={750}>750 usd</option>
                                  <option value={1000}>1000 usd</option>
                                  <option value={2000}>2000 usd</option>
                                  <option value={3000}>3000 usd</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="inner_sidebar_box supplier_country border-top1" style={{}}>
                      <h4 className="active d-flex align-items-center justify-content-between bold_600 font_20">
                        Supplier Country <i className="ri-arrow-up-s-line" />
                      </h4>
                      <div className="cat_box_list d-none d-lg-block">
                        <div className="cus_select_opetion mt-4 pt-1">
                          <a
                            className="d-inline-block text_blue bold_600 supplier_country_btn"
                            id="loadMorec"
                          >
                            Load more
                          </a>
                          <a
                            className="d-inline-block text_blue bold_600 supplier_country_btn"
                            id="showLessc"
                          >
                            Show less
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="inner_sidebar_box advanced_search border-top1">
                      <h4 className="d-flex align-items-center justify-content-between  font_20">
                        Advanced Search <i className="ri-arrow-up-s-line" />
                      </h4>
                      <div className="cat_box_list d-none d-lg-block" style={{ display: "none" }}>
                        <div className="cus_select_opetion mt-4 pt-1">
                          <div className="d-flex flex-column mb-3">
                            <select id="Condition" attr-id={9} name="Condition">
                              <option value>Condition</option>
                              <option value="New">New</option>
                              <option value="Used">Used</option>
                              <option value="Refurbished">Refurbished</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Warranty" attr-id={105} name="Warranty">
                              <option value>Warranty</option>
                              <option value="YES">YES</option>
                              <option value="NO">NO</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Expandable Memory" attr-id={539} name="Expandable Memory">
                              <option value>Expandable Memory</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Operating System Type" attr-id={540} name="Operating System Type">
                              <option value>Operating System Type</option>
                              <option value="Windows">Windows</option>
                              <option value="Dell">Dell</option>
                              <option value="Android">Android</option>
                              <option value="iOs">iOs</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Display Resolution" attr-id={541} name="Display Resolution">
                              <option value>Display Resolution</option>
                              <option value="2560 x 1440">2560 x 1440</option>
                              <option value="1920 x 1080">1920 x 1080</option>
                              <option value="1440 x 2960">1440 x 2960</option>
                              <option value="1440 x 2560">1440 x 2560</option>
                              <option value="1280 x 720">1280 x 720</option>
                              <option value="1080 x 1920">1080 x 1920</option>
                              <option value="800 x 480">800 x 480</option>
                              <option value="720 x 1280">720 x 1280</option>
                              <option value="540 x 960">540 x 960</option>
                              <option value="480 x 800">480 x 800</option>
                              <option value="240 x 400">240 x 400</option>
                              <option value="240 x 320">240 x 320</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Storage Capacity" attr-id={542} name="Storage Capacity">
                              <option value>Storage Capacity</option>
                              <option value="16 GB">16 GB</option>
                              <option value="32 GB">32 GB</option>
                              <option value="64 GB">64 GB</option>
                              <option value="128 GB">128 GB</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Technology" attr-id={543} name="Technology">
                              <option value>Technology</option>
                              <option value="4G LTE">4G LTE</option>
                              <option value="4G">4G</option>
                              <option value="3G">3G</option>
                              <option value="2G">2G</option>
                              <option value="3G 4G LTE">3G 4G LTE</option>
                              <option value="GSM / HSPA / LTE">GSM / HSPA / LTE</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="SIM Size" attr-id={544} name="SIM Size">
                              <option value>SIM Size</option>
                              <option value="Standard SIM">Standard SIM</option>
                              <option value="Micro SIM">Micro SIM</option>
                              <option value="Nano SIM">Nano SIM</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Number of SIM Slots" attr-id={545} name="Number of SIM Slots">
                              <option value>Number of SIM Slots</option>
                              <option value="Single">Single</option>
                              <option value="Dual SIM">Dual SIM</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select
                              id="Front Capture Resolution"
                              attr-id={546}
                              name="Front Capture Resolution"
                            >
                              <option value>Front Capture Resolution</option>
                              <option value="16 MP">16 MP</option>
                              <option value="8 MP">8 MP</option>
                              <option value="5 MP">5 MP</option>
                              <option value="3.7 MP">3.7 MP</option>
                              <option value="2.1 MP">2.1 MP</option>
                              <option value="2 MP">2 MP</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Rear Capture Resolution" attr-id={547} name="Rear Capture Resolution">
                              <option value>Rear Capture Resolution</option>
                              <option value="16.0 MP">16.0 MP</option>
                              <option value="13MP">13MP</option>
                              <option value="13.0 MP">13.0 MP</option>
                              <option value="12.0 MP">12.0 MP</option>
                              <option value="8.0 MP">8.0 MP</option>
                              <option value="5.0 MP">5.0 MP</option>
                              <option value="3.2 MP">3.2 MP</option>
                              <option value="3 MP">3 MP</option>
                              <option value="2.0 MP">2.0 MP</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Weight" attr-id={548} name="Weight">
                              <option value>Weight</option>
                              <option value="2 lbs or Less">2 lbs or Less</option>
                              <option value="2.1 - 2.9 lbs.">2.1 - 2.9 lbs.</option>
                              <option value="3.1 - 3.9 lbs.">3.1 - 3.9 lbs.</option>
                              <option value="5 - 5.9 lbs.">5 - 5.9 lbs.</option>
                              <option value="6 - 6.9 lbs.">6 - 6.9 lbs.</option>
                              <option value="10 lbs or Greater">10 lbs or Greater</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Talk Time" attr-id={549} name="Talk Time">
                              <option value>Talk Time</option>
                              <option value="3 - 5 hours">3 - 5 hours</option>
                              <option value="5 - 7 hours">5 - 7 hours</option>
                              <option value="7 - 9 hours">7 - 9 hours</option>
                              <option value="9 - 11 hours">9 - 11 hours</option>
                              <option value="11 - 13 hours">11 - 13 hours</option>
                              <option value="13 - 20 hours">13 - 20 hours</option>
                              <option value="20+ Hours">20+ Hours</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Battery Capacity (mAH)" attr-id={550} name="Battery Capacity (mAH)">
                              <option value>Battery Capacity (mAH)</option>
                              <option value="Under 1000 mAh">Under 1000 mAh</option>
                              <option value="1000 to 2999 mAh">1000 to 2999 mAh</option>
                              <option value="3000 to 4999 mAh">3000 to 4999 mAh</option>
                              <option value="5000 to 6999 mAh">5000 to 6999 mAh</option>
                              <option value="7000 to 9999 mAh">7000 to 9999 mAh</option>
                              <option value="10000 mAh & Above">10000 mAh &amp; Above</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <div className="cus_box_check mb-2">
                              <input
                                type="checkbox"
                                defaultValue="Front Camera"
                                id="Front Camera"
                                attr-id={551}
                              />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Front Camera"
                              >
                                Front Camera
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input
                                type="checkbox"
                                defaultValue="Rear Camera "
                                id="Rear Camera "
                                attr-id={551}
                              />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Rear Camera "
                              >
                                Rear Camera <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input type="checkbox" defaultValue="Flash" id="Flash" attr-id={551} />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Flash"
                              >
                                Flash
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input
                                type="checkbox"
                                defaultValue="Built In Flash"
                                id="Built In Flash"
                                attr-id={551}
                              />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Built In Flash"
                              >
                                Built In Flash
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input type="checkbox" defaultValue="Audio" id="Audio" attr-id={551} />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Audio"
                              >
                                Audio
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input
                                type="checkbox"
                                defaultValue="3.5 mm Audio Jack"
                                id="3.5 mm Audio Jack"
                                attr-id={551}
                              />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="3.5 mm Audio Jack"
                              >
                                3.5 mm Audio Jack
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input type="checkbox" defaultValue="Bluetooth" id="Bluetooth" attr-id={551} />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Bluetooth"
                              >
                                Bluetooth
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input type="checkbox" defaultValue="Wi-fi" id="Wi-fi" attr-id={551} />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Wi-fi"
                              >
                                Wi-fi
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input
                                type="checkbox"
                                defaultValue="Voice Activation"
                                id="Voice Activation"
                                attr-id={551}
                              />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Voice Activation"
                              >
                                Voice Activation
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input type="checkbox" defaultValue="Infrared" id="Infrared" attr-id={551} />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Infrared"
                              >
                                Infrared
                                <br />
                              </label>
                            </div>
                            <div className="cus_box_check mb-2">
                              <input
                                type="checkbox"
                                defaultValue="Fast Charge"
                                id="Fast Charge"
                                attr-id={551}
                              />
                              <label
                                className="mb-0 d-inline-block position-relative bold_400"
                                htmlFor="Fast Charge"
                              >
                                Fast Charge
                                <br />
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Color" attr-id={552} name="Color">
                              <option value>Color</option>
                              <option value="Red">Red</option>
                              <option value="Black">Black</option>
                              <option value="Blue">Blue</option>
                              <option value="Silver">Silver</option>
                              <option value="White">White</option>
                              <option value="Rose Gold">Rose Gold</option>
                              <option value="Jet Black">Jet Black</option>
                              <option value="Yellow">Yellow</option>
                              <option value="Green">Green</option>
                              <option value="Pink">Pink</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column mb-3">
                            <select id="Design Finish" attr-id={553} name="Design Finish">
                              <option value>Design Finish</option>
                              <option value="Glossy">Glossy</option>
                              <option value="Shiny">Shiny</option>
                              <option value="Matte">Matte</option>
                              <option value="Chrome">Chrome</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inner_sidebar_box border-top1">
                      <div className="d-block w-100 bg_blue text-center btn-blue" onclick="filterProducts()">
                        SEARCH NOW
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-9 left_content_category pt-4 pt-lg-0 pl-xl-4 padding-top-0 padding-small">
              <div className="inner_page_cat">
                <div
                  className={
                    Tab === "list" ? "white-box product_details list" : "white-box product_details grid"
                  }
                >
                  <div className="inner_page_title">
                    <h1 className="custom-title mb-3">Mobi in Other Mobile Phones Suppliers in UAE</h1>
                  </div>
                  <div className="product_fillter_box mb-3 clearfix">
                    <div className="fillter_drop_one d-flex align-items-center justify-content-between">
                      <div className="d-flex">
                        <div className="fillter_drop_v1 position-relative mr-3">
                          {/* <span className="arrow_top_down position-absolute h-100">
                            <i className="ri-arrow-up-s-line d-block" />
                            <i className="ri-arrow-down-s-line d-block" />
                          </span> */}
                          <select
                            className="Wide"
                            id="sortBy"
                            aria-invalid="false"
                            onchange="update_sorting('sort_by', this.value)"
                            style={{ display: "none" }}
                          >
                            <option value>Sort by</option>
                            <option value="rand">Relevance</option>
                            <option value="Price">Price</option>
                            <option value="updated">Latest</option>
                          </select>
                          <div
                            className={openSort === false ? "nice-select Wide" : "nice-select Wide open"}
                            tabIndex={0}
                            onClick={() => setOpenSort(!openSort)}
                          >
                            <span className="current">{selectedOption}</span>
                            <ul className="list">
                              <li
                                onClick={() => setSelectedOption("Sort By")}
                                data-value={0}
                                className={selectedOption === "Sort By" ? "option selected " : "option focus"}
                              >
                                Sort By
                              </li>
                              <li
                                onClick={() => setSelectedOption("Relevance")}
                                data-value={0}
                                className={
                                  selectedOption === "Relevance" ? "option selected " : "option focus"
                                }
                              >
                                Relevance
                              </li>
                              <li
                                onClick={() => setSelectedOption("Price")}
                                data-value={0}
                                className={selectedOption === "Price" ? "option selected " : "option focus"}
                              >
                                Price
                              </li>
                              <li
                                onClick={() => setSelectedOption("Latest")}
                                data-value={0}
                                className={selectedOption === "Latest" ? "option selected " : "option focus"}
                              >
                                Latest
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="fillter_drop_v3 position-relative country_fill">
                          {/* <span className="arrow_top_down position-absolute h-100">
                            <i className="ri-arrow-up-s-line d-block" />
                            <i className="ri-arrow-down-s-line d-block" />
                          </span> */}
                          <input type="hidden" id="mainctryval" name="mainctryval" />
                          <input type="hidden" id="cntryvalues" name="cntryvalues" />
                          <span className="multiselect-native-select">
                            <select
                              className="Wide"
                              name="cntryselect"
                              id="cntryselect"
                              aria-invalid="false"
                              multiple="multiple"
                            ></select>
                            <div
                              style={{
                                display: "none"
                              }}
                              className={location === false ? "btn-group" : "btn-group open"}
                              onClick={() => setLocation(!location)}
                            >
                              <button
                                type="button"
                                className="multiselect dropdown-toggle btn btn-default"
                                data-toggle="dropdown"
                                title="Location"
                                aria-expanded={location === false ? "false" : "true"}
                              >
                                <span className="multiselect-selected-text">Location</span>
                                <b className="caret" />
                              </button>
                              {/* <ul className="multiselect-container dropdown-menu" /> */}
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="fillter_drop_v5 fillter_gride_box d-flex align-items-center mt-md-3 mt-lg-0 justify-content-end pt-2 pt-md-0">
                        <a className={Tab === "grid" ? "d-inline-block grid active" : "d-inline-block grid "}>
                          <i onClick={() => setTab("grid")} className="ri-layout-grid-fill" />
                        </a>
                        <a
                          className={
                            Tab === "list" ? "ml-2 d-inline-block list active" : "ml-2 d-inline-block list"
                          }
                        >
                          <i onClick={() => setTab("list")} className="ri-list-unordered" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="products" className="row mx-n3 mx-md-n2 pb-0 pb-xl-3">
                    <div className="product_box col-6 col-md-6 col-lg-4 px-2 px-md-3 mt-3 mt-md-4 padding-x-0">
                      <div className="simaple_products border position-relative">
                        <div className="product_img text-center1">
                          <a target="_blank" className="d-inline-block product-img-link">
                            <img
                              alt="Tcl fit (p561u)"
                              src="https://s101.abraacdn.com/uploads/product/74120/tcl-fit-p561u_12497.png"
                              className="img-fluid"
                              onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                            />
                          </a>
                          <div className="read_more_product1">
                            <a target="_blank" className="d-block w-100 bg_blue text-white bold_400">
                              View details
                            </a>
                          </div>
                        </div>
                        <div className="product_v1 text-center1">
                          <h3 className="bold_600 text-center1 simaple_products_title">
                            <a target="_blank" className="d-inline-block">
                              tcl fit (p561u)
                            </a>
                          </h3>
                          <div className="text_blue position-relative sim_box_text text-center1 mt-3 d-inline-block">
                            <span className="small_text_lab mr-1">
                              <a target="_blank">Mobile Phones &amp; Tablets</a>›
                            </span>
                            <a target="_blank">Other Mobile Phones </a>
                          </div>
                          <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 highlights-main">
                            <div className="d-flex align-items-center justify-content-center">
                              <div className="highlights-container">
                                <span className="highlights-label-main">Highlights :</span>
                                <ul className="highlights-container_list">
                                  <li>
                                    <small>
                                      <span className="highlights-label">Min Order :</span>
                                      <span className="highlights-value">50</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Condition :</span>
                                      <span className="highlights-value">New</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Warranty :</span>
                                      <span className="highlights-value">YES</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Country of shipping :</span>
                                      <span className="highlights-value">UAE</span>
                                    </small>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="this_seller_point d-none margin-top-custom "
                            style={{ marginTop: "150px" }}
                          >
                            <span>This seller also sells</span>
                            <ul className="pl-0 mb-0 d-flex align-items-center mt-2">
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/75226/alcatel-ot-2012d-dual-sim-16mb-soft-gold_12663.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/75225/alcatel-ot-2012d-dual-sim-16mb-dark-chocolate_68858.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/77725/alcatel-smart-watch-sm-03_73296.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/74121/tcl-560_61789.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 price">
                          <div className="d-flex align-items-center justify-content-center"></div>
                        </div>
                        <div className="product_v3 text-center1 border-top1 product-btn">
                          <div className="product_title_inner position-relative">
                            <div className="product_hover_height">
                              <div className="product_hover_height_inner">
                                <div className="d-inline-block">
                                  <small className="sold-by">Sold by:</small>
                                  <h5 className="bold_700 mb-4 seller-title">
                                    <a target="_blank" className="store-link-clicked" data-store-id={2644}>
                                      Access Star Telecom L.L.C
                                    </a>
                                  </h5>
                                  <div className="inner_member d-flex align-items-center mt-1">
                                    <span className="d-flex align-items-center mr-2">Basic Member</span>
                                    <span>
                                      <img
                                        alt="Verified Supplier"
                                        src="https://assets.abraacdn.com/assets/images/verified-members.png"
                                        className="img-fluid"
                                      />
                                    </span>
                                  </div>
                                </div>
                                <div className="responce_rate text-center1 mt-2 pt-1">
                                  <h6 className="bold_400">
                                    Response rate:
                                    <span className="text-dark bold_600">3%</span>
                                  </h6>
                                </div>
                                <div className="flag_in_since mt-2 mb-4">
                                  <div className="media justify-content-center align-items-center country-name">
                                    <span className="d-inline-block">UAE</span>
                                    <img
                                      src="https://assets.abraacdn.com/assets/images/blank.gif"
                                      className="img-fluid d-inline-block ml-2 flag flag-ae"
                                      alt="Member Flag"
                                    />
                                  </div>
                                  <h6 className="bold_400 member-since">Member since : Jan-2017</h6>
                                </div>
                              </div>
                            </div>
                            <div className="read_more_product1">
                              <a
                                target="_blank"
                                className="d-block w-100 bg_blue text-white bold_400 view-detail-btn"
                              >
                                View details
                              </a>
                            </div>
                            <div className="social_product position-relative">
                              <ul className="pl-0 mb-0 d-flex align-items-center justify-content-between pt-4">
                                <li className="phone_product mr-2">
                                  <a
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                    data-contact-method="phone"
                                    data-slug="tcl-fit-p561u-74120"
                                    id={74120}
                                    data-store-id={2644}
                                  >
                                    <i className="ri-phone-line" />
                                  </a>
                                </li>
                                <li className="whatsapp_product flex-1">
                                  <a className="d-flex align-items-center border text-white">
                                    <i className="ri-whatsapp-line" />
                                    <span className="text-white bold_400 d-inline-block text-white pl-2">
                                      Whatsapp
                                    </span>
                                  </a>
                                </li>
                                <li className="email_product ml-2">
                                  <a
                                    data-contact-method="email"
                                    data-slug="tcl-fit-p561u-74120"
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                  >
                                    <i className="ri-mail-line" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product_tag align-items-center mt-4 d-none">
                          <h6>Tags:</h6>
                          <ul className="pl-1 mb-0 d-flex align-items-center">
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones &amp; Tablets
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Other Mobile Phones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product_box col-6 col-md-6 col-lg-4 px-2 px-md-3 mt-3 mt-md-4 padding-x-0">
                      <div className="simaple_products border position-relative">
                        <div className="product_img text-center1">
                          <a target="_blank" className="d-inline-block product-img-link">
                            <img
                              alt="Tcl 560"
                              src="https://s101.abraacdn.com/uploads/product/74121/tcl-560_61789.jpeg"
                              className="img-fluid"
                              onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                            />
                          </a>
                          <div className="read_more_product1">
                            <a target="_blank" className="d-block w-100 bg_blue text-white bold_400">
                              View details
                            </a>
                          </div>
                        </div>
                        <div className="product_v1 text-center1">
                          <h3 className="bold_600 text-center1 simaple_products_title">
                            <a target="_blank" className="d-inline-block">
                              tcl 560
                            </a>
                          </h3>
                          <div className="text_blue position-relative sim_box_text text-center1 mt-3 d-inline-block">
                            <span className="small_text_lab mr-1">
                              <a target="_blank">Mobile Phones &amp; Tablets</a>›
                            </span>
                            <a target="_blank">Other Mobile Phones </a>
                          </div>
                          <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 highlights-main">
                            <div className="d-flex align-items-center justify-content-center">
                              <div className="highlights-container">
                                <span className="highlights-label-main">Highlights :</span>
                                <ul className="highlights-container_list">
                                  <li>
                                    <small>
                                      <span className="highlights-label">Min Order :</span>
                                      <span className="highlights-value">50</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Condition :</span>
                                      <span className="highlights-value">New</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Warranty :</span>
                                      <span className="highlights-value">YES</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Country of shipping :</span>
                                      <span className="highlights-value">UAE</span>
                                    </small>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="this_seller_point d-none margin-top-custom "
                            style={{ marginTop: "150px" }}
                          >
                            <span>This seller also sells</span>
                            <ul className="pl-0 mb-0 d-flex align-items-center mt-2">
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/75305/alcatel-hero-2-8030y_82650.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/75225/alcatel-ot-2012d-dual-sim-16mb-dark-chocolate_12160.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/76337/alcatel-1052d_51973.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/75305/alcatel-hero-2-8030y_36130.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 price">
                          <div className="d-flex align-items-center justify-content-center"></div>
                        </div>
                        <div className="product_v3 text-center1 border-top1 product-btn">
                          <div className="product_title_inner position-relative">
                            <div className="product_hover_height">
                              <div className="product_hover_height_inner">
                                <div className="d-inline-block">
                                  <small className="sold-by">Sold by:</small>
                                  <h5 className="bold_700 mb-4 seller-title">
                                    <a target="_blank" className="store-link-clicked" data-store-id={2644}>
                                      Access Star Telecom L.L.C
                                    </a>
                                  </h5>
                                  <div className="inner_member d-flex align-items-center mt-1">
                                    <span className="d-flex align-items-center mr-2">Basic Member</span>
                                    <span>
                                      <img
                                        alt="Verified Supplier"
                                        src="https://assets.abraacdn.com/assets/images/verified-members.png"
                                        className="img-fluid"
                                      />
                                    </span>
                                  </div>
                                </div>
                                <div className="responce_rate text-center1 mt-2 pt-1">
                                  <h6 className="bold_400">
                                    Response rate:
                                    <span className="text-dark bold_600">3%</span>
                                  </h6>
                                </div>
                                <div className="flag_in_since mt-2 mb-4">
                                  <div className="media justify-content-center align-items-center country-name">
                                    <span className="d-inline-block">UAE</span>
                                    <img
                                      src="https://assets.abraacdn.com/assets/images/blank.gif"
                                      className="img-fluid d-inline-block ml-2 flag flag-ae"
                                      alt="Member Flag"
                                    />
                                  </div>
                                  <h6 className="bold_400 member-since">Member since : Jan-2017</h6>
                                </div>
                              </div>
                            </div>
                            <div className="read_more_product1">
                              <a
                                target="_blank"
                                className="d-block w-100 bg_blue text-white bold_400 view-detail-btn"
                              >
                                View details
                              </a>
                            </div>
                            <div className="social_product position-relative">
                              <ul className="pl-0 mb-0 d-flex align-items-center justify-content-between pt-4">
                                <li className="phone_product mr-2">
                                  <a
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                    data-contact-method="phone"
                                    data-slug="tcl-560-74121"
                                    id={74121}
                                    data-store-id={2644}
                                  >
                                    <i className="ri-phone-line" />
                                  </a>
                                </li>
                                <li className="whatsapp_product flex-1">
                                  <a className="d-flex align-items-center border text-white">
                                    <i className="ri-whatsapp-line" />
                                    <span className="text-white bold_400 d-inline-block text-white pl-2">
                                      Whatsapp
                                    </span>
                                  </a>
                                </li>
                                <li className="email_product ml-2">
                                  <a
                                    data-contact-method="email"
                                    data-slug="tcl-560-74121"
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                  >
                                    <i className="ri-mail-line" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product_tag align-items-center mt-4 d-none">
                          <h6>Tags:</h6>
                          <ul className="pl-1 mb-0 d-flex align-items-center">
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones &amp; Tablets
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Other Mobile Phones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product_box col-6 col-md-6 col-lg-4 px-2 px-md-3 mt-3 mt-md-4 padding-x-0">
                      <div className="simaple_products border position-relative">
                        <div className="product_img text-center1">
                          <a target="_blank" className="d-inline-block product-img-link">
                            <img
                              alt="Energizer"
                              src="https://s101.abraacdn.com/uploads/product/694545/energizer_39612.png"
                              className="img-fluid"
                              onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                            />
                          </a>
                          <div className="read_more_product1">
                            <a target="_blank" className="d-block w-100 bg_blue text-white bold_400">
                              View details
                            </a>
                          </div>
                        </div>
                        <div className="product_v1 text-center1">
                          <h3 className="bold_600 text-center1 simaple_products_title">
                            <a target="_blank" className="d-inline-block">
                              energizer
                            </a>
                          </h3>
                          <div className="text_blue position-relative sim_box_text text-center1 mt-3 d-inline-block">
                            <span className="small_text_lab mr-1">
                              <a target="_blank">Mobile Phones &amp; Tablets</a>›
                            </span>
                            <a target="_blank">Other Mobile Phones </a>
                          </div>
                          <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 highlights-main">
                            <div className="d-flex align-items-center justify-content-center">
                              <div className="highlights-container">
                                <span className="highlights-label-main">Highlights :</span>
                                <ul className="highlights-container_list">
                                  <li>
                                    <small>
                                      <span className="highlights-label">Min Order :</span>
                                      <span className="highlights-value">50</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Condition :</span>
                                      <span className="highlights-value">New</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Warranty :</span>
                                      <span className="highlights-value">YES</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Country of shipping :</span>
                                      <span className="highlights-value">UAE</span>
                                    </small>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="this_seller_point d-none margin-top-custom "
                            style={{ marginTop: "150px" }}
                          >
                            <span>This seller also sells</span>
                            <ul className="pl-0 mb-0 d-flex align-items-center mt-2">
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/694543/mobile-phone_71839.png"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 price">
                          <div className="d-flex align-items-center justify-content-center"></div>
                        </div>
                        <div className="product_v3 text-center1 border-top1 product-btn">
                          <div className="product_title_inner position-relative">
                            <div className="product_hover_height">
                              <div className="product_hover_height_inner">
                                <div className="d-inline-block">
                                  <small className="sold-by">Sold by:</small>
                                  <h5 className="bold_700 mb-4 seller-title">
                                    <a target="_blank" className="store-link-clicked" data-store-id={44795}>
                                      Moshir sayed hassan
                                    </a>
                                  </h5>
                                  <div className="inner_member d-flex align-items-center mt-1">
                                    <span className="d-flex align-items-center mr-2">Basic Member</span>
                                    <span>
                                      <img
                                        alt="Verified Supplier"
                                        src="https://assets.abraacdn.com/assets/images/verified-members.png"
                                        className="img-fluid"
                                      />
                                    </span>
                                  </div>
                                </div>
                                <div className="responce_rate text-center1 mt-2 pt-1">
                                  <h6 className="bold_400">
                                    Response rate:
                                    <span className="text-dark bold_600">Not Calculated</span>
                                  </h6>
                                </div>
                                <div className="flag_in_since mt-2 mb-4">
                                  <div className="media justify-content-center align-items-center country-name">
                                    <span className="d-inline-block">UAE</span>
                                    <img
                                      src="https://assets.abraacdn.com/assets/images/blank.gif"
                                      className="img-fluid d-inline-block ml-2 flag flag-ae"
                                      alt="Member Flag"
                                    />
                                  </div>
                                  <h6 className="bold_400 member-since">Member since : Nov-2018</h6>
                                </div>
                              </div>
                            </div>
                            <div className="read_more_product1">
                              <a
                                target="_blank"
                                className="d-block w-100 bg_blue text-white bold_400 view-detail-btn"
                              >
                                View details
                              </a>
                            </div>
                            <div className="social_product position-relative">
                              <ul className="pl-0 mb-0 d-flex align-items-center justify-content-between pt-4">
                                <li className="phone_product mr-2">
                                  <a
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                    data-contact-method="phone"
                                    data-slug="energizer-694545"
                                    id={694545}
                                    data-store-id={44795}
                                  >
                                    <i className="ri-phone-line" />
                                  </a>
                                </li>
                                <li className="whatsapp_product flex-1">
                                  <a className="d-flex align-items-center border text-white">
                                    <i className="ri-whatsapp-line" />
                                    <span className="text-white bold_400 d-inline-block text-white pl-2">
                                      Whatsapp
                                    </span>
                                  </a>
                                </li>
                                <li className="email_product ml-2">
                                  <a
                                    data-contact-method="email"
                                    data-slug="energizer-694545"
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                  >
                                    <i className="ri-mail-line" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product_tag align-items-center mt-4 d-none">
                          <h6>Tags:</h6>
                          <ul className="pl-1 mb-0 d-flex align-items-center">
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones &amp; Tablets
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Other Mobile Phones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product_box col-6 col-md-6 col-lg-4 px-2 px-md-3 mt-3 mt-md-4 padding-x-0">
                      <div className="simaple_products border position-relative">
                        <div className="product_img text-center1">
                          <a target="_blank" className="d-inline-block product-img-link">
                            <img
                              alt="Oppo a9"
                              src="https://s101.abraacdn.com/uploads/product/700362/oppo-a9_87745.jpeg"
                              className="img-fluid"
                              onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                            />
                          </a>
                          <div className="read_more_product1">
                            <a target="_blank" className="d-block w-100 bg_blue text-white bold_400">
                              View details
                            </a>
                          </div>
                        </div>
                        <div className="product_v1 text-center1">
                          <h3 className="bold_600 text-center1 simaple_products_title">
                            <a target="_blank" className="d-inline-block">
                              oppo a9
                            </a>
                          </h3>
                          <div className="text_blue position-relative sim_box_text text-center1 mt-3 d-inline-block">
                            <span className="small_text_lab mr-1">
                              <a target="_blank">Mobile Phones &amp; Tablets</a>›
                            </span>
                            <a target="_blank">Other Mobile Phones </a>
                          </div>
                          <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 highlights-main">
                            <div className="d-flex align-items-center justify-content-center">
                              <div className="highlights-container">
                                <span className="highlights-label-main">Highlights :</span>
                                <ul className="highlights-container_list">
                                  <li>
                                    <small>
                                      <span className="highlights-label">Min Order :</span>
                                      <span className="highlights-value">50</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Condition :</span>
                                      <span className="highlights-value">New</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Warranty :</span>
                                      <span className="highlights-value">YES</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Country of shipping :</span>
                                      <span className="highlights-value">UAE</span>
                                    </small>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="this_seller_point d-none margin-top-custom "
                            style={{ marginTop: "150px" }}
                          >
                            <span>This seller also sells</span>
                            <ul className="pl-0 mb-0 d-flex align-items-center mt-2">
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/700363/briefcase-brand-new-for-bulk-qty-sale_61305.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/700196/sandals_35289.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/700363/briefcase-brand-new-for-bulk-qty-sale_74552.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/700370/philips-avance-collection-digital-airfryer-xxl---hd9650-99_52908.jpeg"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 price">
                          <div className="d-flex align-items-center justify-content-center"></div>
                        </div>
                        <div className="product_v3 text-center1 border-top1 product-btn">
                          <div className="product_title_inner position-relative">
                            <div className="product_hover_height">
                              <div className="product_hover_height_inner">
                                <div className="d-inline-block">
                                  <small className="sold-by">Sold by:</small>
                                  <h5 className="bold_700 mb-4 seller-title">
                                    <a target="_blank">24Shopz </a>
                                  </h5>
                                  <div className="inner_member d-flex align-items-center mt-1">
                                    <span className="d-flex align-items-center mr-2">Basic Member</span>
                                  </div>
                                </div>
                                <div className="responce_rate text-center1 mt-2 pt-1">
                                  <h6 className="bold_400">
                                    Response rate:
                                    <span className="text-dark bold_600">Not Calculated</span>
                                  </h6>
                                </div>
                                <div className="flag_in_since mt-2 mb-4">
                                  <div className="media justify-content-center align-items-center country-name">
                                    <span className="d-inline-block">UAE</span>
                                    <img
                                      src="https://assets.abraacdn.com/assets/images/blank.gif"
                                      className="img-fluid d-inline-block ml-2 flag flag-ae"
                                      alt="Member Flag"
                                    />
                                  </div>
                                  <h6 className="bold_400 member-since">Member since : Feb-2021</h6>
                                </div>
                              </div>
                            </div>
                            <div className="read_more_product1">
                              <a
                                target="_blank"
                                className="d-block w-100 bg_blue text-white bold_400 view-detail-btn"
                              >
                                View details
                              </a>
                            </div>
                            <div className="social_product position-relative">
                              <ul className="pl-0 mb-0 d-flex align-items-center justify-content-between pt-4">
                                <li className="phone_product mr-2">
                                  <a
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                    data-contact-method="phone"
                                    data-slug="oppo-a9-700362"
                                    id={700362}
                                    data-store-id={54869}
                                  >
                                    <i className="ri-phone-line" />
                                  </a>
                                </li>
                                <li className="whatsapp_product flex-1">
                                  <a className="d-flex align-items-center border text-white">
                                    <i className="ri-whatsapp-line" />
                                    <span className="text-white bold_400 d-inline-block text-white pl-2">
                                      Whatsapp
                                    </span>
                                  </a>
                                </li>
                                <li className="email_product ml-2">
                                  <a
                                    data-contact-method="email"
                                    data-slug="oppo-a9-700362"
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                  >
                                    <i className="ri-mail-line" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product_tag align-items-center mt-4 d-none">
                          <h6>Tags:</h6>
                          <ul className="pl-1 mb-0 d-flex align-items-center">
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones &amp; Tablets
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Other Mobile Phones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product_box col-6 col-md-6 col-lg-4 px-2 px-md-3 mt-3 mt-md-4 padding-x-0">
                      <div className="simaple_products border position-relative">
                        <div className="product_img text-center1">
                          <a target="_blank" className="d-inline-block product-img-link">
                            <img
                              alt="Meizu m5 note 3gb/32gb"
                              src="https://s101.abraacdn.com/uploads/product/693853/meizu-m5-note-3gb-32gb_79388.jpeg"
                              className="img-fluid"
                              onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                            />
                          </a>
                          <div className="read_more_product1">
                            <a target="_blank" className="d-block w-100 bg_blue text-white bold_400">
                              View details
                            </a>
                          </div>
                        </div>
                        <div className="product_v1 text-center1">
                          <h3 className="bold_600 text-center1 simaple_products_title">
                            <a target="_blank" className="d-inline-block">
                              meizu m5 note 3gb/32gb
                            </a>
                          </h3>
                          <div className="text_blue position-relative sim_box_text text-center1 mt-3 d-inline-block">
                            <span className="small_text_lab mr-1">
                              <a target="_blank">Mobile Phones &amp; Tablets</a>›
                            </span>
                            <a target="_blank">Other Mobile Phones </a>
                          </div>
                          <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 highlights-main">
                            <div className="d-flex align-items-center justify-content-center">
                              <div className="highlights-container">
                                <span className="highlights-label-main">Highlights :</span>
                                <ul className="highlights-container_list">
                                  <li>
                                    <small>
                                      <span className="highlights-label">Min Order :</span>
                                      <span className="highlights-value">50</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Condition :</span>
                                      <span className="highlights-value">New</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Warranty :</span>
                                      <span className="highlights-value">YES</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Country of shipping :</span>
                                      <span className="highlights-value">UAE</span>
                                    </small>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="this_seller_point d-none margin-top-custom  "
                            style={{ marginTop: "150px" }}
                          ></div>
                        </div>
                        <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 price">
                          <div className="d-flex align-items-center justify-content-center"></div>
                        </div>
                        <div className="product_v3 text-center1 border-top1 product-btn">
                          <div className="product_title_inner position-relative">
                            <div className="product_hover_height">
                              <div className="product_hover_height_inner">
                                <div className="d-inline-block">
                                  <small className="sold-by">Sold by:</small>
                                  <h5 className="bold_700 mb-4 seller-title">
                                    <a target="_blank">Al Futtaim Electronics LLC</a>
                                  </h5>
                                  <div className="inner_member d-flex align-items-center mt-1">
                                    <span className="d-flex align-items-center mr-2">Basic Member</span>
                                  </div>
                                </div>
                                <div className="responce_rate text-center1 mt-2 pt-1">
                                  <h6 className="bold_400">
                                    Response rate:
                                    <span className="text-dark bold_600">Not Calculated</span>
                                  </h6>
                                </div>
                                <div className="flag_in_since mt-2 mb-4">
                                  <div className="media justify-content-center align-items-center country-name">
                                    <span className="d-inline-block">UAE</span>
                                    <img
                                      src="https://assets.abraacdn.com/assets/images/blank.gif"
                                      className="img-fluid d-inline-block ml-2 flag flag-ae"
                                      alt="Member Flag"
                                    />
                                  </div>
                                  <h6 className="bold_400 member-since">Member since : Jun-2018</h6>
                                </div>
                              </div>
                            </div>
                            <div className="read_more_product1">
                              <a
                                target="_blank"
                                className="d-block w-100 bg_blue text-white bold_400 view-detail-btn"
                              >
                                View details
                              </a>
                            </div>
                            <div className="social_product position-relative">
                              <ul className="pl-0 mb-0 d-flex align-items-center justify-content-between pt-4">
                                <li className="phone_product mr-2">
                                  <a
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                    data-contact-method="phone"
                                    data-slug="meizu-m5-note-3gb-32gb-693853"
                                    id={693853}
                                    data-store-id={40729}
                                  >
                                    <i className="ri-phone-line" />
                                  </a>
                                </li>
                                <li className="whatsapp_product flex-1">
                                  <a className="d-flex align-items-center border text-white">
                                    <i className="ri-whatsapp-line" />
                                    <span className="text-white bold_400 d-inline-block text-white pl-2">
                                      Whatsapp
                                    </span>
                                  </a>
                                </li>
                                <li className="email_product ml-2">
                                  <a
                                    data-contact-method="email"
                                    data-slug="meizu-m5-note-3gb-32gb-693853"
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                  >
                                    <i className="ri-mail-line" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product_tag align-items-center mt-4 d-none">
                          <h6>Tags:</h6>
                          <ul className="pl-1 mb-0 d-flex align-items-center">
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones &amp; Tablets
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Other Mobile Phones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product_box col-6 col-md-6 col-lg-4 px-2 px-md-3 mt-3 mt-md-4 padding-x-0">
                      <div className="simaple_products border position-relative">
                        <div className="product_img text-center1">
                          <a target="_blank" className="d-inline-block product-img-link">
                            <img
                              alt="Explosion proof mobile"
                              src="https://s101.abraacdn.com/uploads/product/722560/explosion-proof-mobile_94443.png"
                              className="img-fluid"
                              onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                            />
                          </a>
                          <div className="read_more_product1">
                            <a target="_blank" className="d-block w-100 bg_blue text-white bold_400">
                              View details
                            </a>
                          </div>
                        </div>
                        <div className="product_v1 text-center1">
                          <h3 className="bold_600 text-center1 simaple_products_title">
                            <a target="_blank" className="d-inline-block">
                              explosion proof mobile
                            </a>
                          </h3>
                          <div className="text_blue position-relative sim_box_text text-center1 mt-3 d-inline-block">
                            <span className="small_text_lab mr-1">
                              <a target="_blank">Mobile Phones &amp; Tablets</a>›
                            </span>
                            <a target="_blank">Other Mobile Phones </a>
                          </div>
                          <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 highlights-main">
                            <div className="d-flex align-items-center justify-content-center">
                              <div className="highlights-container">
                                <span className="highlights-label-main">Highlights :</span>
                                <ul className="highlights-container_list">
                                  <li>
                                    <small>
                                      <span className="highlights-label">Min Order :</span>
                                      <span className="highlights-value">50</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Condition :</span>
                                      <span className="highlights-value">New</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Warranty :</span>
                                      <span className="highlights-value">YES</span>
                                    </small>
                                  </li>
                                  <li>
                                    <small>
                                      <span className="highlights-label">Country of shipping :</span>
                                      <span className="highlights-value">UAE</span>
                                    </small>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="this_seller_point d-none margin-top-custom "
                            style={{ marginTop: "150px" }}
                          >
                            <span>This seller also sells</span>
                            <ul className="pl-0 mb-0 d-flex align-items-center mt-2">
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/722557/explosion-proof-fixed-type-dome-camera_59451.png"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/722562/explosion-proof-led-light_69432.png"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/722579/forklift-red-danger-light_18763.png"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                              <li className="mr-0">
                                <a className="d-inline-block border">
                                  <img
                                    src="https://s101.abraacdn.com/thumbs/small_thumb/uploads/product/722573/forklift-wireless-camera-system_47114.png"
                                    alt=""
                                    className="img-fluid"
                                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_v22 text-center1 pt-3 mt-3 pb-3 mb-3 border-top1 border-bottom1 price">
                          <div className="d-flex align-items-center justify-content-center"></div>
                        </div>
                        <div className="product_v3 text-center1 border-top1 product-btn">
                          <div className="product_title_inner position-relative">
                            <div className="product_hover_height">
                              <div className="product_hover_height_inner">
                                <div className="d-inline-block">
                                  <small className="sold-by">Sold by:</small>
                                  <h5 className="bold_700 mb-4 seller-title">
                                    <a target="_blank">Sharpeagle Technology</a>
                                  </h5>
                                  <div className="inner_member d-flex align-items-center mt-1">
                                    <span className="d-flex align-items-center mr-2">Basic Member</span>
                                  </div>
                                </div>
                                <div className="responce_rate text-center1 mt-2 pt-1">
                                  <h6 className="bold_400">
                                    Response rate:
                                    <span className="text-dark bold_600">Not Calculated</span>
                                  </h6>
                                </div>
                                <div className="flag_in_since mt-2 mb-4">
                                  <div className="media justify-content-center align-items-center country-name">
                                    <span className="d-inline-block">UAE</span>
                                    <img
                                      src="https://assets.abraacdn.com/assets/images/blank.gif"
                                      className="img-fluid d-inline-block ml-2 flag flag-ae"
                                      alt="Member Flag"
                                    />
                                  </div>
                                  <h6 className="bold_400 member-since">Member since : Apr-2021</h6>
                                </div>
                              </div>
                            </div>
                            <div className="read_more_product1">
                              <a
                                target="_blank"
                                className="d-block w-100 bg_blue text-white bold_400 view-detail-btn"
                              >
                                View details
                              </a>
                            </div>
                            <div className="social_product position-relative">
                              <ul className="pl-0 mb-0 d-flex align-items-center justify-content-between pt-4">
                                <li className="phone_product mr-2">
                                  <a
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                    data-contact-method="phone"
                                    data-slug="explosion-proof-mobile-722560"
                                    id={722560}
                                    data-store-id={55811}
                                  >
                                    <i className="ri-phone-line" />
                                  </a>
                                </li>
                                <li className="whatsapp_product flex-1">
                                  <a className="d-flex align-items-center border text-white">
                                    <i className="ri-whatsapp-line" />
                                    <span className="text-white bold_400 d-inline-block text-white pl-2">
                                      Whatsapp
                                    </span>
                                  </a>
                                </li>
                                <li className="email_product ml-2">
                                  <a
                                    data-contact-method="email"
                                    data-slug="explosion-proof-mobile-722560"
                                    className="checkphones border d-flex align-items-center justify-content-center"
                                  >
                                    <i className="ri-mail-line" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product_tag align-items-center mt-4 d-none">
                          <h6>Tags:</h6>
                          <ul className="pl-1 mb-0 d-flex align-items-center">
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones &amp; Tablets
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Mobile Phones
                              </a>
                            </li>
                            <li className="mr-1">
                              <a className="d-inline-block bold_400" target="_blank">
                                Other Mobile Phones
                              </a>
                            </li>
                          </ul>
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
    </main>
  )
}

export default MainMobi
