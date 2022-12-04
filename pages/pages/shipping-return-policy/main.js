import React, { useState, useEffect } from "react"

export default function Main() {
  return (
    <div className="dlist-main">
      <div className="container dlist-container">
        <div className="row">
          <div className="dlist-fax-page">
            <h1>SHIPPING &amp; RETURN POLICY</h1>
            <div className="dlist-refund-policy-panel">
              <div className="row">
                <div className="col-md-4 col-sm-12 dlist-policy-boxs dlist-returns-box">
                  <div className="dlist-policy-boxs-inner">
                    <div className="dlist-policy-boxs-inner-img">
                      <img
                        alt="returns"
                        src="	https://www.abraa.com/assets/images/returns-icon.png"
                        title="Returns"
                      />
                    </div>
                    <div className="clearfix">&nbsp;</div>
                    <h2>Return Policy</h2>
                    <p>
                      Returns of faulty and / or discrepancies (if the product quality does not meet the
                      standards mutually agreed) related goods that are to be sent back to the manufacturers
                      will be based on prior agreements between the supplier and the buyer. Abraa will only be
                      able to guide either party towards legal advice in case of disagreements. Abraa
                      encourages the supplier to have in place terms and return policies and encourages buyers
                      to read them carefully before making a purchase.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 dlist-policy-boxs dlist-retund-box">
                  <div className="dlist-policy-boxs-inner">
                    <div className="dlist-policy-boxs-inner-img">
                      <img
                        alt="returns"
                        src="	https://www.abraa.com/assets/images/retuns-icon.png"
                        title="Returns"
                      />
                    </div>
                    <div className="clearfix">&nbsp;</div>
                    <h2>Refund</h2>
                    <p>
                      Once we receive your item, we will inspect it and notify you that we have received your
                      returned
                    </p>
                    <p>
                      item. We will immediately notify you on the status of your refund after inspecting the
                      item
                    </p>
                    <p>
                      If your return is approved, we will initiate a refund to your credit card (or original
                      method of payment)
                    </p>
                    <p>
                      You will receive the credit within a certain amount of days, depending on your card
                      issuer’s policies
                    </p>
                    <p>
                      <strong>Refunds will be done only through the Original Mode of Payment</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 dlist-policy-boxs dlist-policy-boxs-last dlist-shipping-box">
                  <div className="dlist-policy-boxs-inner">
                    <div className="dlist-policy-boxs-inner-img">
                      <img
                        alt="returns"
                        src="	https://www.abraa.com/assets/images/shopping-icon.png"
                        title="Returns"
                      />
                    </div>
                    <div className="clearfix">&nbsp;</div>
                    <h2>Abraa Shipping</h2>
                    <p>
                      All delivery and shipping arrangements are set in accordance to reflect the agreement
                      between the Buyer and Supplier at the time of sale. Abraa is not responsible for the
                      arrangements of shipping / courier, nonetheless, it can introduce you to its shipping
                      partners.&nbsp;
                    </p>
                    <p>
                      <span style={{ color: "#999999" }}>
                        Please refer to the Shipping section, under Abraa Services for further information.
                      </span>
                    </p>
                    <p>
                      www.abraa.com will NOT deal or provide any services or products to any of OFAC (Office
                      of Foreign Assets Control) sanctions countries in accordance with the law of UAE
                    </p>
                    <p>
                      Multiple transactions may result in multiple postings to the cardholder’s monthly
                      statement.
                    </p>
                  </div>
                </div>
                <div className="clearfix">&nbsp;</div>
              </div>
            </div>
            <div className="clearfix">&nbsp;</div>
          </div>
          <div className="clearfix">&nbsp;</div>
        </div>
      </div>
      <div className="clearfix">&nbsp;</div>
    </div>
  )
}
