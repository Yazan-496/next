import React, { useState, useEffect } from "react"

export default function Main() {
  return (
    <div className="dlist-main ">
      <div className="dlist-services">
        <div className="dlist-container container">
          <div className="row">
            <div className="dlist-fax-page">
              <div className="dlist-services-img">
                <div className="dlist-services-paragraph">
                  <p className="dlist-services-ptag"></p>
                  <h1 className="text-center">ABOUT ABRAA</h1>
                  <div className="get-started">
                    <p style={{ textAlign: "center" }}>
                      Abraa is the Arabic word for a traditional wooden boat that connects people and carry
                      goods . Abraa.com is where MENA region’s businesses and traders go to source products
                      from manufacturers and suppliers from around the globe. Launched in 2016 Abraa.com
                      (formerly known as Master Outlet) is based in Dubai and is currently operating from 3
                      different countries with the ethos of “Connecting Markets”.
                    </p>
                    <p style={{ textAlign: "center" }}>
                      Abraa.com enables buyers to source products with confidence and ease. That in return
                      empowers our members with authentic buying requests, genuine opportunities for upselling
                      and future business prospects.
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <a href="/auth">JOIN ABRAA</a>
                    </p>
                    <p style={{ textAlign: "center" }}>&nbsp;</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <h2 style={{ textAlign: "center" }}>Our Mission</h2>
                      <div
                        className="animated animated dlist-section-line dlist-section-line-homepage fadeInUp wow animated"
                        style={{
                          animationName: "fadeInUp",
                          visibility: "visible"
                        }}
                      >
                        &nbsp;
                      </div>
                      Our Mission is to make it easy to do Business Around the Globe. We have also developed
                      Cutting Edge Tools and Marketing Strategies for our Distributors, Suppliers and
                      Resellers Giving them the Reach to Global Audiences for their Products. We also have
                      “Verified &amp; Trusted” Partners so that you can purchase through us with Assurance and
                      Peace of mind.
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div
                        className="animated animated dlist-slide-img fadeInUp wow animated"
                        style={{
                          animationName: "fadeInUp",
                          visibility: "visible"
                        }}
                      >
                        <img
                          alt="Abraa Mission"
                          src="https://assets.abraacdn.com/assets/images/about-abraa-1.png"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <h2 style={{ textAlign: "center" }}>Easy to source</h2>
                      <div
                        className="animated animated dlist-section-line dlist-section-line-homepage fadeInUp wow animated"
                        style={{
                          animationName: "fadeInUp",
                          visibility: "visible"
                        }}
                      >
                        &nbsp;
                      </div>
                      <p style={{ textAlign: "center" }}>
                        Brings you Hundreds of Products in many different major Categories including Consumer
                        Electronics, Auto-motive Parts and Industrial Machinery
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Buyers for these products are located across the Globe and exchange thousands of
                        messages with Suppliers on our Platform each Day
                      </p>
                      <p style={{ textAlign: "center" }}>
                        We are constantly adding new Categories and Products to our site.
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div
                        className="animated animated dlist-slide-img fadeInUp wow animated"
                        style={{
                          animationName: "fadeInUp",
                          visibility: "visible"
                        }}
                      >
                        <img
                          alt="Abraa Easy to source"
                          src="https://assets.abraacdn.com/assets/images/about-abraa-3.png"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <h2 style={{ textAlign: "center" }}>New-age platform</h2>
                      <div
                        className="animated animated dlist-section-line dlist-section-line-homepage fadeInUp wow"
                        style={{ animationName: "none", visibility: "hidden" }}
                      >
                        &nbsp;
                      </div>
                      <p style={{ textAlign: "center" }}>
                        As a platform, we are constantly developing New Technologies to help you do more and
                        discover new Opportunities.
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Whether it’s Sourcing from Multiple Suppliers or Selling to Buyers around the world{" "}
                        <strong>abraa.com</strong> has you Covered.
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div
                        className="animated animated dlist-slide-img fadeInUp wow"
                        style={{ animationName: "none", visibility: "hidden" }}
                      >
                        <img
                          alt="Abraa New-age platform"
                          src="https://assets.abraacdn.com/assets/images/about-abraa-2.png"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  )
}
