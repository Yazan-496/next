import React, { useState } from "react"
import Services from "../../../assets/components/services"

export default function Main() {
  const [showLess, setshowLess] = useState(false)
  return (
    <>
      <div className="dlist-main " style={{ paddingTop: 118 }}>
        <div className="dlist-services">
          <div className="dlist-container container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="dlist-services-img-panel">
                      <img src="https://s101.abraacdn.com/files/1790701655.png" alt="page image" />
                    </div>
                  </div>
                  <div className="col-md-8 ">
                    <div className="px-4 h-100 d-flex flex-column justify-content-center align-items-start">
                      <div className="dlist-services-name-panel">
                        <h1 className="dlist-services-name-h2 text-center mb-3">Buyer Protection</h1>
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <p className="dlist-services-ptag">
                          Abraa Buyer Protection service brings to you a safe, secure, and trusted way of
                          buying. Abraa Secure Payments is designed for a smooth, reliable and secure
                          transaction.(Please refer to Abraa Secure Payment section for further information. )
                          <span
                            style={{
                              display: !showLess ? "none" : "inline"
                            }}
                          >
                            <br />
                            <b>Abraa Promise</b>
                            <br />
                            <span style={{ display: "inline" }}>
                              Full Refund: Full Refund: This procedure takes effect if the supplier doesn’t
                              dispatch or deliver your order on time, or if you don’t get it and it is
                              determined to be the fault of the supplier. In this case, you will receive a
                              full refund as compensation, if paid through Abraa Secure Payment. <br />
                              Partial Refund if the Product is Not as Described: If the products you receive
                              are with small variations from the supplier’s original product description, you
                              might choose to receive a partial refund and keep the products (If paid through
                              Abraa Secure Payment). <br />
                              &nbsp;•&nbsp; 100% Payment protection&nbsp; •&nbsp; 100% Product quality
                              protection&nbsp; •&nbsp; 100% On-time shipment protection &nbsp;
                            </span>
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
