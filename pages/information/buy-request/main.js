import React, { useState, useEffect } from "react"

export default function Main() {
  return (
    <main style={{ paddingTop: 137 }}>
      <div className="request_top_steps mb-5" style={{}}>
        &nbsp;
        <div className="container">
          <div className="row norow">
            <div className="col-md-3 col-sm-12">
              <div className="topimgtop">
                <img
                  src="https://assets.abraacdn.com/assets/images/icons/place-request-icon.png"
                  alt="Place a Request For Quotation"
                />
              </div>
              <div className="eachonetoptxt">Place a Request For Quotation</div>
              <div className="eachonetopcnt">
                Provide us with all the relevant information for the product(s) you wish to procure and we’ll
                do the rest
              </div>
            </div>
            <div className="col-md-1 txtcenter hideonmobiletab">
              <img src="https://assets.abraacdn.com/assets/images/icons/buy-arows.png" alt="right arrow" />
            </div>
            <div className="col-md-3 col-sm-12 hideonmobiletab">
              <div className="topimgtop">
                <img
                  src="https://assets.abraacdn.com/assets/images/icons/recieve-multiple-quotes.png"
                  alt="<?__('Receive Multiple Quotes')?>"
                />
              </div>
              <div className="eachonetoptxt">Receive Multiple Quotes</div>
              <div className="eachonetopcnt">
                Abraa team will put you in direct contact with multiple suppliers who’ll send in competitive
                pricing .{" "}
              </div>
            </div>
            <div className="col-md-1 col-sm-12  txtcenter hideonmobiletab">
              <img src="https://assets.abraacdn.com/assets/images/icons/buy-arows.png" alt="right arrow" />
            </div>
            <div className="col-md-4 col-sm-12 hideonmobiletab">
              <div className="topimgtop">
                <img
                  src="https://assets.abraacdn.com/assets/images/icons/satisfaction-key.png"
                  alt="Your Satisfaction is Key"
                />
              </div>
              <div className="eachonetoptxt">Your Satisfaction is Key</div>
              <div className="eachonetopcntdwn">
                You’ll be able to evaluate multiple quotes from different suppliers and choose your best deal
                .{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div
            className="col-md-6"
            id="otp_form"
            style={{
              display: "none",
              margin: "auto 50%",
              paddingTop: "10%",
              paddingBottom: "10%"
            }}
          >
            <div className="alert alert-danger" id="wrong_alert" style={{ marginTop: 20, display: "none" }}>
              One Time Password Isn't Correct{" "}
            </div>
            <div className="white-box">
              <h1 className="request_title">One Time Password </h1>
              <section className="request-form">
                <div className="out">
                  <input
                    className="form-control"
                    type="text"
                    name="otp"
                    id="otp"
                    data-error="#otp_error"
                    placeholder="Enter OTP sent to your registered mobile phone"
                  />
                  <div id="otp_error" />
                  <button type="submit" id="buttun_otp" className="btn btn_suceess_button">
                    SUBMIT
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6" id="ruquest_form">
            <div className="white-box">
              <h1 className="request_title">Create Request For Quotation </h1>
              <section className="request-form">
                <div className="out">
                  <form
                    action
                    method="post"
                    name="request-product-form"
                    id="request-product-form"
                    noValidate="novalidate"
                  >
                    <div className=" form-group">
                      <input type="hidden" id="single_number" name="single_number" defaultValue />
                      <label htmlFor="pname">
                        What product are you looking to source? <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        id="pname"
                        name="pname"
                        data-error="#name_error"
                        defaultValue
                        className="form-control  fullbord"
                      />
                      <div id="name_error" />
                    </div>
                    <input type="hidden" name="item_id" id="item_id" defaultValue />
                    <input type="hidden" name="seller_id" id="seller_id" defaultValue={0} />
                    <input type="hidden" name="category" id="category" defaultValue={0} />
                    <input type="hidden" name="shipval" id="shipval" defaultValue={0} />
                    <br />
                    <div className=" form-group">
                      <div className="row">
                        <div className="col-md-6 ">
                          <label htmlFor="purl">Qty</label>
                          <div className="d-flex qty_select2">
                            <input
                              maxLength={20}
                              type="text"
                              placeholder="Quantity"
                              className="form-control inputnedd  fullbord "
                              name="purl"
                              id="purl"
                              data-error="#ERROR"
                              defaultValue
                            />
                            <select
                              className="form-control select2 select2-hidden-accessible"
                              style={{
                                width: "150px !important",
                                display: "none"
                              }}
                              id="pieces"
                              name="pieces"
                              data-select2-id="pieces"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value={1} data-select2-id={2}>
                                Unit
                              </option>
                            </select>
                            <div
                              className="nice-select form-control select2 select2-hidden-accessible"
                              tabIndex={0}
                            >
                              <span className="current">Unit</span>
                            </div>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id={1}
                              style={{ width: 150 }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-pieces-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-pieces-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Unit"
                                  >
                                    Unit
                                  </span>
                                  <span className="select2-selection__arrow" role="presentation">
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                            <input type="hidden" id="buying_pieces_text" name="buying_pieces_text" />
                          </div>
                          <div id="ERROR" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="purl"> Repetation </label>
                          <select
                            className="form-control select2 select2-hidden-accessible"
                            style={{
                              width: "100% !important",
                              display: "none"
                            }}
                            id="buying_frequency"
                            name="buying_frequency"
                            data-select2-id="buying_frequency"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option value={1} data-select2-id={4}>
                              One time
                            </option>
                            <option value={2}>Daily</option>
                            <option value={3}>Weekly</option>
                            <option value={4}>Monthly</option>
                            <option value={5}>Quarterly</option>
                            <option value={6}>Semi Annually</option>
                            <option value={7}>Annually</option>
                            <option value={8}>Other</option>{" "}
                          </select>
                          <div
                            className="nice-select form-control select2 select2-hidden-accessible"
                            tabIndex={0}
                          >
                            <span className="current">One time</span>
                            <ul className="list">
                              <li data-value={1} className="option selected">
                                One time
                              </li>
                              <li data-value={2} className="option">
                                Daily
                              </li>
                              <li data-value={3} className="option">
                                Weekly
                              </li>
                              <li data-value={4} className="option">
                                Monthly
                              </li>
                              <li data-value={5} className="option">
                                Quarterly
                              </li>
                              <li data-value={6} className="option">
                                Semi Annually
                              </li>
                              <li data-value={7} className="option">
                                Annually
                              </li>
                              <li data-value={8} className="option">
                                Other
                              </li>
                            </ul>
                          </div>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id={3}
                            style={{ width: "100%" }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-buying_frequency-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-buying_frequency-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="One time"
                                >
                                  One time
                                </span>
                                <span className="select2-selection__arrow" role="presentation">
                                  <b role="presentation" />
                                </span>
                              </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true" />
                          </span>
                          <input type="hidden" id="buying_frequency_text" name="buying_frequency_text" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="checkboxxx margin-top-25">
                            <input type="checkbox" id="shipcost" name="shipcost" />
                            <label className="shipcost" htmlFor="shipcost" />
                            <span className="checktxt">Request shipping estimate</span>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="clearfix" style={{ paddingBottom: 10, paddingTop: 30 }}>
                        <label htmlFor>
                          Upload a file <span>(Optional )</span>
                        </label>
                        <div className="file-input file-input-ajax-new">
                          <div className="file-preview ">
                            <div className="close fileinput-remove">×</div>
                            <div className="file-drop-zone clickable" tabIndex={-1}>
                              <div className="file-drop-zone-title">
                                Please Drag &amp; Drop the Images
                                <br />
                                (or click to select files)
                              </div>
                              <div className="file-preview-thumbnails"></div>
                              <div className="clearfix" />{" "}
                              <div className="file-preview-status text-center text-success" />
                              <div
                                className="kv-fileinput-error file-error-message"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                          <div className="kv-upload-progress hide">
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-success progress-bar-striped active"
                                role="progressbar"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "0%" }}
                              >
                                0%
                              </div>
                            </div>
                          </div>
                          <div className="input-group file-caption-main">
                            <div tabIndex={500} className="form-control file-caption  kv-fileinput-caption">
                              <div className="file-caption-name" />
                            </div>
                            <div className="input-group-btn">
                              <div tabIndex={500} className="btn btn-primary btn-file">
                                <i className="glyphicon glyphicon-folder-open" />
                                &nbsp; <span className="hidden-xs">Browse …</span>
                                <input
                                  id="input-id"
                                  type="file"
                                  multiple
                                  className
                                  accept=".jpg,.jpeg,.png,.gif,.pdf,.xlsx,.xls,.doc,.docx,.mp4,.wmv,.mpg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix" style={{ paddingTop: 15 }}>
                        <label htmlFor>Describe more (if you like) </label>
                        <label
                          id="required-request-details"
                          className="error"
                          style={{
                            display: "none",
                            color: "#000",
                            fontFamily: '"lato-l"',
                            paddingTop: 20
                          }}
                        >
                          Details Required
                        </label>
                        <textarea
                          className="form-control"
                          row={5}
                          name="details"
                          id="details"
                          defaultValue={""}
                        />
                      </div>
                      <input type="hidden" name="category" id="btCategory" />
                      <div className="clearfix" style={{ paddingTop: 5 }}>
                        &nbsp;
                      </div>
                      <div className=" form-group">
                        <label htmlFor="fullName">
                          Your Name <sup>*</sup>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          readOnly
                          defaultValue="Ahmed"
                          name="fullName"
                          className="form-control fullbord"
                          data-error="#phone_name"
                        />
                        <div id="phone_name" />
                      </div>
                      <div className=" form-group">
                        <label htmlFor="email">
                          Email <sup>*</sup>
                        </label>
                        <input
                          type="email"
                          readOnly="readonly"
                          defaultValue="email@gmail.com"
                          id="email"
                          name="email"
                          className="form-control fullbord"
                          data-error="#phone_email"
                        />
                        <div id="phone_email" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className=" form-group">
                            <label htmlFor="pname">
                              Country <sup>*</sup>
                            </label>
                            <input
                              list="countrysList"
                              id="countrys"
                              name="countrys"
                              className="form-control custom_select"
                              data-error="#phone_count"
                              style={{ marginTop: 0 }}
                            />

                            <input
                              type="hidden"
                              name="country_code_number"
                              id="country_code_number"
                              defaultValue={963}
                            />
                          </div>
                        </div>
                        <input type="hidden" id="code" name="code" defaultValue="sy" />
                        <div className="col-md-6">
                          <div className=" form-group">
                            <label htmlFor="phone">
                              Telephone <sup>*</sup>
                            </label>
                            <div className="country_number_main">
                              <select
                                id="country_code"
                                name="country_code"
                                className="input-group form-control select2 select2-hidden-accessible"
                                data-error="#phone_error"
                                required
                                style={{
                                  marginTop: 0,
                                  width: "80px !important",
                                  display: "none"
                                }}
                                data-select2-id="country_code"
                                tabIndex={-1}
                                aria-hidden="true"
                                aria-required="true"
                              >
                                <option value={971}>+971 </option>
                              </select>
                              <div
                                className="nice-select input-group form-control select2 select2-hidden-accessible"
                                tabIndex={0}
                              >
                                <span className="current">+963 </span>
                              </div>

                              <span id="mobile-number" />
                            </div>
                            <div id="phone_error" />
                          </div>
                        </div>
                        <input type="hidden" id="full_number" name="full_number" defaultValue />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className=" form-group">
                            <label htmlFor="robotcheck">I'm not a robot </label>
                            <input
                              type="checkbox"
                              name="robotcheck"
                              id="robotcheck"
                              style={{ marginLeft: 15 }}
                            />
                            <span id="captchaerror" style={{ marginLeft: 15 }} className="errorTxt" />
                          </div>
                        </div>
                      </div>
                      <div className="btn_suceess">
                        <button type="submit" id="buttun_de" className="btn btn_suceess_button ">
                          SUBMIT{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
          <div className="col-md-6" id="ruquest_inform">
            <div className="white-box">
              <div className="request_title">Create Request For Quotation </div>
              <div className="ruquest_detail_text">
                <div className="name main-product-heading" id="product_name_span">
                  Import Coking Coal, Steam coal, Anthracite coal, PCI coal, Clinker
                </div>
              </div>
              <div className="ruquest_total_bottom">
                <div className="top">Request For Quotation Details</div>
                <p id="details_span">
                  I am looking to buy Coking Coal and I would like to do business with the reliable supplier.
                  Please send me quotation as soon as possible. Looking here for your soon reply.{" "}
                </p>
                <div className="row"></div>
              </div>
              <div className="desciption">
                <div className>
                  <span>Quantity Required</span>
                  <span id="quantity_span">50000 Metric Ton</span>
                </div>
                <div className>
                  <span>Buying Frequency</span>
                  <span id="buying_frequency_span">Monthly</span>
                </div>
              </div>
              <div className="desciptions margin-top-25">
                <div className>
                  <span>Buyer Name</span>
                  <span id="buyer_name_span">
                    <a href="#">Login</a> or <a href="#">Register</a> to expose information{" "}
                  </span>
                </div>
                <div className>
                  <span>Buyer Phone</span>
                  <span id="buyer_phone" />
                </div>
                <div className>
                  <span>Buyer Email</span>
                  <span id="buyer_email">United Arab Emirates</span>
                </div>
                <div className>
                  <span>Buyer Country</span>
                  <span id="buyer_country_span">United Arab Emirates</span>
                </div>
              </div>
              <button className="btn btn_suceess_button" id="submit_form">
                Submit
              </button>
              <button className="btn btn_suceess2" id="buy_request_edit">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
