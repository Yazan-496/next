import React, { useState, useEffect } from "react"

export default function Main() {
  return (
    <main className="category-bg" style={{ paddingTop: 137 }}>
      <div className="container cnts padding-bottom15 padding-top15">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <span
                style={{
                  fontFamily: "inherit",
                  fontWeight: "500",
                  lineHeight: "1.2",
                  fontSize: "2.5rem",
                  color: "#617083"
                }}
              >
                Buyer Guideline
              </span>
            </h1>
          </div>
          <div className="col-md-6">
            <h1>
              <span>
                {" "}
                <a
                  style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    backgroundColor: "#1180b0",
                    float: "right",
                    borderRadius: "10px",
                    padding: 0,
                    margin: 0,
                    height: 0
                  }}
                  href="https://www.abraa.com/guidelines/supplier"
                  className="other_link"
                >
                  <div className="btn_suceess">
                    <button
                      style={{
                        display: " inline-block",
                        color: "#ffffff",
                        backgroundColor: "#1180b0",
                        padding: "6px 12px",
                        marginBottom: 0,
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "1.42857143",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        verticalAlign: "middle",
                        msTouchAction: "manipulation",
                        touchAction: "manipulation",
                        cursor: "pointer",
                        webkitUserSelect: "none",
                        mozUserSelect: "none",
                        msUserSelect: "none",
                        userSelect: "none",
                        border: "1px solid transparent",
                        borderRadius: "4px"
                      }}
                      type="submit"
                      id="buttun_de"
                      className="btn btn_suceess_button "
                    >
                      Supplier Guideline
                    </button>
                  </div>
                </a>
              </span>
            </h1>
          </div>
        </div>
        <div className="row">
          <aside className="col-md-3">
            <div className="categories-panel scrollspy">
              <ul
                id="nav"
                className="categories-list nav hidden-xs hidden-sm"
                data-spy="affix"
                style={{ top: 0 }}
              >
                <li className="nav-menu-li">
                  <a href="#col-11" className="nojs">
                    <span>Step 1: Filling the Application </span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-12" className="nojs">
                    <span>Step 2: Submitting your Buying Request</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-13" className="nojs">
                    <span>Step 3: Approval</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-14" className="nojs">
                    <span>Step 4: Conﬁrmation of Approval (EMAIL)</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-15" className="nojs">
                    <span>Step 5: Accessing the Dashboard</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-16" className="nojs">
                    <span>Step 6: View Quotation</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-17" className="nojs">
                    <span>Step 7: View Quotation (EMAIL)</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-18" className="nojs">
                    <span>Step 8: Responding to Quotation</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-19" className="nojs">
                    <span>Step 9: Counter Offer</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-20" className="nojs">
                    <span>Step 10: Quote Acceptance</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-21" className="nojs">
                    <span>Step 11: Conﬁrmation &amp; Invoices</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-22" className="nojs">
                    <span>Step 12: Receiving an Invoice</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-23" className="nojs">
                    <span>Step 13: Billing &amp; Shipping</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-24" className="nojs">
                    <span>Step 14: Payment</span>
                  </a>
                </li>
                <div className="clearfix" />
              </ul>
              <div className="clearfix" />
            </div>
          </aside>
          <article className="col-md-9" id="category-name">
            <div className="categori-dispaly" id="col-11">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 1: Filling the Application </a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <img
                          alt="buyer"
                          src="https://www.abraa.com/assets/images/buyer_guideline/1.jpg"
                          style={{
                            float: "right",
                            height: 400,
                            maxWidth: "100%",
                            width: 273
                          }}
                        />
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        In order to place a buying request through Abraa.com, the information must be precise
                        when filled in &amp; correctly provided for the required mandatory fields.
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        Please ensure all the information, including your email &amp; contact number, is
                        updated as this will be used as a part of the verification process; in order to
                        authenticate your requirement to be a genuine buying request.
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ color: "#5a5a5a" }}>
                          <em>
                            A perfect example of how a buying request application should be provided, has been
                            shown.
                          </em>
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-12">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 2: Submitting your Buying Request</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Once satisﬁed that all the relevant information has been provided on your behalf, you can
                    now submit your Buying Request for approval.
                    <br />
                    Our team will then review your application, and contact you for further veriﬁcation, prior
                    to the buying request being approved &amp; published to suppliers.
                  </p>
                  <p>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/2.jpg"
                      style={{ height: 400, maxWidth: "100%", width: 443 }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-13">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 3: Approval</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Once approved by the Abraa Team, you can then enjoy receiving multiple quotes from Abraa’s
                    on-board Suppliers.
                  </p>
                  <p>&nbsp;</p>
                  <p style={{ textAlign: "center" }}>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/3.jpg"
                      style={{ height: 200, maxWidth: "100%", width: 484 }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-14">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 4: Conﬁrmation of Approval (EMAIL)</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <img
                          alt="buyer"
                          src="https://www.abraa.com/assets/images/buyer_guideline/4.jpg"
                          style={{
                            float: "right",
                            height: 400,
                            maxWidth: "100%",
                            width: 323
                          }}
                        />
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        You will be notiﬁed once your buying request has been ofﬁcially authenticated &amp;
                        approved. This approval notiﬁcation will automatically be sent to your registered
                        email.
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ color: "#5a5a5a" }}>
                          <em>
                            A perfect example of how a buying request application should be provided, has been
                            shown.
                          </em>
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-15">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 5: Accessing the Dashboard</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>Once approved you can also view your request status via the dashboard option.</p>
                  <p>&nbsp;</p>
                  <p style={{ textAlign: "center" }}>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/5.jpg"
                      style={{ maxWidth: "100%", width: "100%" }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-16">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 6: View Quotation</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Click the quotations tab to view all existing buying requests and their statuses.
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/6a.jpg"
                      style={{
                        height: 62,
                        marginLeft: 100,
                        maxWidth: "100%",
                        width: 200
                      }}
                    />
                  </p>
                  <p>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/6b.jpg"
                      style={{ maxWidth: "100%", width: "100%" }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-17">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 7: View Quotation (EMAIL)</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Once having received a quote, you’ll be prompted via your registered email to visit your
                    dashboard &amp; view the quotation.
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-18">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 8: Responding to Quotation</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Multiple suppliers can contact you and submit their best quotes, in order to gain your
                    business.
                  </p>
                  <p>
                    Read each quote carefully and choose the best quote to ﬁt your requirements (price,
                    supplier location, brand image of supplier and after sales support). All quotes can be
                    found and are viewable under their speciﬁc buying request; in the Dashboard’s quotation’s
                    tab.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/8.png"
                      style={{ maxWidth: "100%", width: "100%" }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-19">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 9: Counter Offer</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    If you wish to counter offer select the option, and a message box will prompt you to send
                    your new message to the supplier.
                  </p>
                  <p>
                    Remember, that once a counter offer has been made, all previous offers become invalid.
                  </p>
                  <p>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <img
                          alt="buyer"
                          src="https://www.abraa.com/assets/images/buyer_guideline/9.jpg"
                          style={{
                            float: "right",
                            height: 358,
                            maxWidth: "100%",
                            width: 459
                          }}
                        />
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ color: "#5a5a5a" }}>
                          <em>
                            A perfect example of how a buying request application should be provided, has been
                            shown.
                          </em>
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-20">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 10: Quote Acceptance</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Should you choose to accept an offer made by a supplier, you can conﬁrm their quotation
                    and an email notiﬁcation will be sent to them.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <img
                      alt
                      src="https://www.abraa.com/assets/images/buyer_guideline/10.png"
                      style={{ height: 400, maxWidth: "100%", width: 409 }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-21">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 11: Conﬁrmation &amp; Invoices</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Having conveyed your acceptance of the supplier’s quote, a message will be sent to their
                    registered email; in order to submit an invoice.
                  </p>
                  <p>&nbsp;</p>
                  <p style={{ textAlign: "center" }}>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/11.jpg"
                      style={{ height: 200, maxWidth: "100%", width: 383 }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-22">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 12: Receiving an Invoice</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>You will be notiﬁed once your buying request has been sent an invoice.</p>
                  <p>
                    This notiﬁcation will automatically be sent to your registered email. You can click on the
                    attached link, provided in the email, to view your Buying Request Invoice.
                  </p>
                  <p>&nbsp;</p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <img
                          alt="buyer"
                          src="https://www.abraa.com/assets/images/buyer_guideline/12a.jpg"
                          style={{
                            float: "left",
                            maxWidth: "100%",
                            width: "50%"
                          }}
                        />
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: 0, marginRight: "0in" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ color: "#5a5a5a" }}>
                          <em>
                            A perfect example of how a buying request application should be provided, has been
                            shown.
                          </em>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/12b.png"
                      style={{ marginLeft: 20, maxWidth: "100%", width: "45%" }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-23">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 13: Billing &amp; Shipping</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Upon visiting your buying request, you will be able to view or pay for your invoice.&nbsp;
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/13a.jpg"
                      style={{ height: 20, width: 74 }}
                    />
                  </p>
                  <p>
                    If everything is satisfactory, and as agreed upon between the involved parties; you may
                    then proceed to the billing &amp; payment section.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/13b.jpg"
                      style={{ height: 500, maxWidth: "100%", width: 452 }}
                    />
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/13c.jpg"
                      style={{ height: 20, maxWidth: "100%", width: 74 }}
                    />
                    &nbsp;Once having selected the option to pay, you will be prompted to ﬁll out a form for
                    your Billing &amp; Shipping address.
                  </p>
                  <p>
                    Remember to ﬁll in these forms accurately, as the information cannot be changed once
                    submitted.
                  </p>
                  <p>&nbsp;</p>
                  <p style={{ textAlign: "center" }}>
                    <var>A perfect example of how these address forms should be ﬁlled, has been shown.</var>
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/13d.jpg"
                      style={{ height: 400, maxWidth: "100%", width: 652 }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-24">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Step 14: Payment</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Abraa.com offers its users a variety of safe &amp; secure options for payment.
                    <br />
                    These include; Credit Cards, A PayPal Account or a direct Bank Transfer.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <img
                      alt="buyer"
                      src="https://www.abraa.com/assets/images/buyer_guideline/14.jpg"
                      style={{ maxWidth: "100%", width: "100%" }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </article>
        </div>
      </div>
      <div className="application container" />
      <div className="clearfix" />
    </main>
  )
}
