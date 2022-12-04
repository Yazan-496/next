import React, { useState } from "react"
import Carousel1 from "./carousel"

function Main(props) {
  return (
    <main className="position-relative category_wrapper">
      <input type="hidden" id="storeelement" defaultValue={28010} />
      <input type="hidden" id="storeelementsub" defaultValue={28010} />
      <input type="hidden" id="storeid" defaultValue="australian-luxuries-pty-l" />
      <section id="supplier_id" className="mt-md-4 pt-xl-2">
        <div className="container supplier_container px-0">
          <div style={{ marginTop: 140 }} className="white-box bg-white">
            <Carousel1 />
          </div>
        </div>
      </section>
      <section id="master_outlet_id" className="mt-4 pt-xl-2">
        <div className="container master_outlet_container px-0">
          <div className="white-box bg-white p-33 p-md-00 custom-padding">
            <div className="master_outlet_title">
              <div className="d-flex flex_wrap align-items-start align-items-md-center justify-content-start flex-column flex-md-row">
                <h2 className="bold_600">Australian Luxuries Pty Ltd</h2>
                <h3 className="bold_400 text-md-left ml-md-4 mt-2 mt-md-0 mt-md-0">Australia - Sydney </h3>
                <div className="media align-items-center mt-2 mt-md-0 ml-md-4">
                  <div className="media-body">
                    <span className="font-16">Verified Members</span>
                  </div>
                  <img
                    src="https://assets.abraacdn.com/assets/images/verified_icon.png"
                    alt
                    className="img-fluid ml-2"
                    width="15px"
                  />
                </div>
                <div className="media align-items-center mt-2 mt-md-0 ml-md-4">
                  <img
                    src="https://assets.abraacdn.com/assets/images/gold-member.png"
                    alt="Gold Membership"
                    className="img-fluid badge-img"
                  />
                  <div className="media-body pl-2">
                    <span>Gold Member</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="outlet_label_list d-flex align-items-center mt-3 flex_wrap">
              <div className="media_group ml-0 ml-lg-4 mt-3 mt-lg-0 d-flex align-items-center flex_wrap w-100">
                <div className="media align-items-center mt-1 mt-md-0 mr-md-3 mr-lg-4 mt-md-2">
                  <span className>Member Since : </span>
                  <div className="media-body pl-1">
                    <span className="d-inline-block  bold_500 text-theme">2017</span>
                  </div>
                </div>
                <div className="media align-items-center mt-1 ml-0 ml-sm-3 mr-md-0 mr-lg-4 mt-md-2 mr-lg-0">
                  <span>Headquater : </span>
                  <div className="media-body pl-1">
                    <span className="d-inline-block text-capitalize  bold_500 text-theme">Australia</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="outlet_opetion mt-3 mt-md-4">
              <ul className="pl-0 mb-0 d-sm-flex">
                <li className="d-flex align-items-center px-2 px-lg-4 py-2">
                  <img
                    src="https://assets.abraacdn.com/assets/images/sale.png"
                    alt="Response rate"
                    className="img-fluid pr-2"
                  />
                  <span className="d-inline-block bold_500">Response rate - 17% </span>
                </li>
                <li className="d-flex align-items-center px-2 px-lg-4 py-2 ml-0 mt-2 mt-sm-0 ml-sm-2 ml-md-3">
                  <img
                    src="https://assets.abraacdn.com/assets/images/date.png"
                    alt="Response time"
                    className="img-fluid pr-2"
                  />
                  <span className="d-inline-block bold_500">
                    Response time - +3<span> days</span>{" "}
                  </span>
                </li>
                <li className="d-flex align-items-center px-2 px-lg-4 py-2 ml-md-3 mt-2 mt-sm-2 mt-md-0">
                  <img
                    src="https://assets.abraacdn.com/assets/images/box.png"
                    alt="Number of Products"
                    className="img-fluid pr-2"
                  />
                  <span className="d-inline-block bold_500">Number of Products 40</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
