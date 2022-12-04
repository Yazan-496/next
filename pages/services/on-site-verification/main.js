import React, { useState } from "react"
import Services from "../../../assets/components/services"

export default function Main() {
  const [showLess, setshowLess] = useState(false)
  return (
    <>
      <div style={{ marginTop: "100px" }} className="dlist-main ">
        <div className="dlist-services">
          <div className="dlist-container container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="dlist-services-img-panel">
                      <img src="https://s101.abraacdn.com/files/3693798286.png" alt="page image" />
                    </div>
                  </div>
                  <div className="col-md-8 ">
                    <div className="px-4 h-100 d-flex flex-column justify-content-center align-items-start">
                      <div className="dlist-services-name-panel">
                        <h1 className="dlist-services-name-h2 text-center mb-3">On site Verification</h1>
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <span className="morecontent">
                          <p className="dlist-services-ptag">
                            Any supplier can sign up for a free Abraa.com account and start displaying its
                            products. However, without having to go through a verification procedure, there's
                            no method to know if this supplier is genuine or fraudulent. A Gold Supplier or
                            Platinum Supplier, on the other hand, should be verified by a 3rd-party inspector.
                            This inspector rigorously examines the supplier's business license and contact
                            details to verify that the Gold Supplier or Platinum Supplier is a genuine
                            company. After it's b
                            <span
                              style={{
                                display: !showLess ? "none" : "inline"
                              }}
                            >
                              een authenticated and verified, a Gold Supplier or Platinum Supplier will
                              receive a Verified Badg. A Platinum Supplier or Gold Supplier in UAE must go
                              through a one more step. A Dubailist.com staff must visit their offices as well
                              as facilities to further verify on-site check. The verification of suppliers on
                              Abraa.com serves to safeguard buyers by making sure that suppliers are legally
                              registered companies. Verifications of the companies are carried out by both
                              Dubailist.com and/or independent verification companies. Dubailist provides
                              on-site verification service to both Gold and Platinum Suppliers. To offer an
                              exceptional service, we have a team of experienced professionals who severely
                              checked supplier's company's premises and make sure onsite operations exist
                              there. Also, the supplierslegal status and other related details and information
                              are then verified by a 3rd-party verification agency. What kinds of information
                              does Onsite Verification confirm Business license Type of Business (e.g.
                              manufacturing, trading company or both) Company / Factory location
                              Premisesownership status Photographs of supplier's operations Contact details
                              Certifications from partners, contractors, and subsidiaries
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
                        </span>
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
