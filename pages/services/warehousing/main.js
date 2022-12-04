import React, { useState } from "react"

import Services from "../../../assets/components/services"

export default function Main() {
  const [showLess, setshowLess] = useState(false)
  return (
    <>
      <div style={{ marginTop: "150px" }} className="dlist-main ">
        <div className="dlist-services">
          <div className="dlist-container container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="dlist-services-img-panel">
                      <img src="https://s101.abraacdn.com/files/2302023892.png" alt="page image" />
                    </div>
                  </div>
                  <div className="col-md-8 ">
                    <div className="px-4 h-100 d-flex flex-column justify-content-center align-items-start">
                      <div className="dlist-services-name-panel">
                        <h1 className="dlist-services-name-h2 text-center mb-3">Warehousing</h1>
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <p className="dlist-services-ptag">
                          Abraa.com has ties with top tier global warehousing and logistics partners. Located
                          in the heart of Dubai, are durable and efficient warehousing solutions, empowering
                          businesses and help drive trade within the MENA (Middle East and North Africa)
                          region. These facilities meet very high international trade standards and operate
                          with the utmost integrity. Ideal for manufacturers and wholesale businesses, who are
                          registered in other countries and are intending to trade within the MENA region. Abr
                          <span
                            style={{
                              display: !showLess ? "none" : "inline"
                            }}
                          >
                            aa has aided many start-ups and help build many organizations that trade within
                            Abraa.com’s immediate target markets. Whether you are seeking a short term
                            solution or a long term partnership, we at Abraa can design a tailor made
                            warehousing solution for you.
                          </span>
                        </p>
                        <a
                          onClick={() => setshowLess(!showLess)}
                          className={
                            showLess
                              ? "dlist-readmore-abtn btn morelink less"
                              : "dlist-readmore-abtn btn morelink"
                          }
                        >
                          {showLess ? "SHOW LESS" : "LOAD MORE"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Services />
          </div>
        </div>
      </div>
    </>
  )
}
