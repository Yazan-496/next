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
                      <img src="https://s101.abraacdn.com/files/2375933703.png" alt="page image" />
                    </div>
                  </div>
                  <div className="col-md-8 ">
                    <div className="px-4 h-100 d-flex flex-column justify-content-center align-items-start">
                      <div className="dlist-services-name-panel">
                        <h1 className="dlist-services-name-h2 text-center mb-3">Products Inspection</h1>
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <p className="dlist-services-ptag">
                          Abraa.com offers a product inspection service available for all buyers. Being a
                          client-centric organization, Abraa can assist buyers with visual onsite product
                          verification for all suppliers who are within UAE. This is a value added service at
                          an affordable cost.
                          <span
                            style={{
                              display: !showLess ? "none" : "inline"
                            }}
                          >
                            <span style={{ display: "inline" }}>
                              oduced and dispatched to meet international quality standards. There are few
                              types of inspections usually offered:
                              <br />
                              1. Pre-Production Inspection: Testing the machinery, as well as raw materials to
                              be used for your orders, at the starting of the production process.
                              <br />
                              2. During Production Inspection: A close visual check on the quality of
                              components, raw materials and finished products during manufacturing.
                              <br />
                              3. Random Inspection: A thorough visual check of samples chosen at random to
                              verify and confirm that the quantity, quality, and packaging conform to your
                              samples as well as specifications.
                              <br />
                              4. Container Loading Inspection: Strict supervision during container loading to
                              make sure that the finished and packed products match your specifications
                              (product type &amp; quantity).
                              <br />
                              5. Premises Audit: Ensures the premises adheres to local as well as
                              international labor laws, closely monitor the premise’s management, capabilities
                              and operating processes.
                              <br />
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
