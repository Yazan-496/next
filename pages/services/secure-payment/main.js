import React, { useState } from "react"

import Services from "../../../assets/components/services"

export default function Main() {
  const [showLess, setshowLess] = useState(false)
  return (
    <div className="dlist-main " style={{ paddingTop: 118 }}>
      <div className="dlist-services">
        <div className="dlist-container container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="dlist-services-img-panel">
                    <img src="https://s101.abraacdn.com/files/2086017809.png" alt="page image" />
                  </div>
                </div>
                <div className="col-md-8 ">
                  <div className="px-4 h-100 d-flex flex-column justify-content-center align-items-start">
                    <div className="dlist-services-name-panel">
                      <h1 className="dlist-services-name-h2 text-center mb-3">Secure Payment</h1>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p className="dlist-services-ptag">
                        Abraa Secure Payment is a payment gateway that provides security to all parties
                        involved in an e-commerce wholesale global trade. By associating with leading online
                        payment platform such as PayPal and supporting the various payment methods such as
                        Master Card, Maestro and VISA; Abraa provides payment security to both buyers, as well
                        as suppliers. Buyers can negotiate their business deals directly with suppliers and
                        then use Abraa Secure Payments for a reliable and sec
                        <span
                          style={{
                            display: !showLess ? "none" : "inline"
                          }}
                        >
                          ure transaction. Your money is held safely by Abraa until you verify successful
                          delivery and your satisfaction upon inspection. Your money is not discharged during
                          the trade process, until you have approved successful delivery of the order. Your
                          payment information is provided directly to Abraa (not to your supplier). Once
                          approved, Abraa will release payment to the supplier. All of your information will
                          be securely encrypted.
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
  )
}
