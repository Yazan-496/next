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
                Supplier Guideline
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
                      Buyer Guideline
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
                  <a href="#col-1" className="nojs">
                    <span>Introduction</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-2" className="nojs">
                    <span>A walk through the website's main features</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-3" className="nojs">
                    <span>Creating a Store Page on Abraa.com</span>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#col-4" className="nojs">
                    <span>Supplier FAQ</span>
                  </a>
                </li>
                <div className="clearfix" />
              </ul>
              <div className="clearfix" />
            </div>
          </aside>
          <article className="col-md-9" id="category-name">
            <div className="categori-dispaly" id="col-1">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Introduction</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    Abraa.com is where businesses go to source products from manufacturers and suppliers from
                    around the
                    <br />
                    globe. Launched in 2016, Abraa.com is based in the UAE and now
                    <br />
                    operating from 3 different countries with the ethos of “Connecting Markets”.
                  </p>
                  <p>
                    Abraa.com enables buyers to source products with confidence and ease. That in return
                    empowers our
                    <br />
                    members with authentic buying requests, genuine opportunities for upselling and future
                    businesses.
                  </p>
                  <p>
                    Intended members can use this guideline to navigate your way through the membership
                    process and to benefit
                    <br />
                    from Abraa.com’s full potential.
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-2">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>A walk through the website's main features</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <p>
                    <img
                      alt="supplier1"
                      src="https://www.abraa.com/assets/images/supplier_guideline/1.jpg"
                      style={{ width: "100%" }}
                    />
                  </p>
                  <h3>
                    1- Login / Register
                    <img
                      alt="supplier2"
                      src="https://www.abraa.com/assets/images/supplier_guideline/2.jpg"
                      style={{
                        float: "right",
                        height: 69,
                        padding: 10,
                        width: 250
                      }}
                    />
                  </h3>
                  <ul>
                    <li>
                      The Registration process is a quick and easy procedure&nbsp;which will enable you to
                      access all information and help you&nbsp;navigate through Abraa.com with ease.
                    </li>
                  </ul>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The page consists of three main components:</p>
                  <ol style={{ listStyleType: "lower-alpha", marginLeft: 40 }}>
                    <li>
                      I am a Supplier: Consists of 3 sub components. Email verification, Personal Information,
                      Company Information.
                    </li>
                    <li>
                      I am a Buyer: Consists of just 2 sub components. Enter your personal information and
                      have it verified via email. You will have access to 1000’s of suppliers with their
                      contact information all in one place.
                    </li>
                    <li>
                      <span style={{ fontSize: "11pt" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          I am Both: A visitor has the option of being both a supplier as well as a buyer. In
                          this instance, you will have to complete all 3 components.
                        </span>
                      </span>
                    </li>
                  </ol>
                  <p>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; To{" "}
                    <strong>
                      <a href="https://www.abraa.com/register" target="_blank">
                        register
                      </a>
                    </strong>
                    : follow the below steps:
                  </p>
                  <ol style={{ marginLeft: 40 }}>
                    <li>
                      <span style={{ fontSize: "11pt" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          Enter your personal information.
                        </span>
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "11pt" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>Have it verified via email.</span>
                      </span>
                    </li>
                  </ol>
                  <h3>
                    2- User Friendly Search Bar
                    <img
                      alt="supplier3"
                      src="https://www.abraa.com/assets/images/supplier_guideline/3.jpg"
                      style={{
                        float: "right",
                        height: 40,
                        marginBottom: 10,
                        marginTop: 10,
                        maxWidth: "100%",
                        width: 444
                      }}
                    />
                  </h3>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li>
                      You can enter a product name/ keyword in the{" "}
                      <a href="https://www.abraa.com/search/">search </a>box that you want to browse, to take
                      you directly to what you are looking for;
                      <ol style={{ listStyleType: "lower-alpha" }}>
                        <li>
                          If your search results in a solo product, the Product details/ facts screen opens.
                        </li>
                        <li>
                          If your search results in manifold products, the Product Browsing Screen opens.
                        </li>
                        <li>
                          When you start typing characters of the definite product which you want to search,
                          Abraa suggests you a list of items from which you can select your best possible
                          product.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Alternatively, you can search for a Supplier by clicking on the arrow next to “Product’
                      and select “Supplier”.
                      <ol style={{ listStyleType: "lower-alpha" }}>
                        <li>
                          You do not have to remember the full name of a supplier in order to use this method.
                          Just type in a key word and Abraa would suggest you a list of companies to pick
                          from.
                        </li>
                        <li>
                          On the left of the search results screen, you have the option of further narrowing
                          down your search&nbsp;based on supplier country, supplier membership status (Elite,
                          Gold, and Silver).
                        </li>
                      </ol>
                    </li>
                    <li>
                      The total number of products that are retrieved as a result of the search is shown in
                      the upper left corner of the panel.
                    </li>
                    <li>
                      If the search results span across manifold pages, the page numbers are displayed, and
                      the current&nbsp;page number is highlighted.
                    </li>
                    <li>
                      In the middle of the panel, you can sort the product by clicking its price, title and
                      new.
                    </li>
                    <li>
                      In the upper right corner of the panel, you can pick the number of products that you
                      desire to see on a&nbsp;page. The current page size is highlighted whilst other possible
                      values are displayed&nbsp;alongside. You can select a different value.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <h3>3- Categories</h3>
                  <p>
                    <img
                      alt="supplier4"
                      src="https://www.abraa.com/assets/images/supplier_guideline/4.jpg"
                      style={{
                        height: 400,
                        marginLeft: 25,
                        marginRight: "auto",
                        maxWidth: "100%",
                        paddingLeft: 10,
                        width: 253
                      }}
                    />
                  </p>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li style={{ textAlign: "justify" }}>
                      Users have a pick of 15+ main categories to select from.
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      The selection of categories will help users navigate and help&nbsp;them find specific
                      products along with a list of suppliers who can provide quotations for buying requests.
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      When you hover over a main category, the screen will display a temporary pop up screen
                      with the available subcategories.&nbsp;To the far right of that screen will be products
                      that are most&nbsp;viewed within that category.
                    </li>
                  </ol>
                  <h3>
                    4- Latest Buying Request
                    <img
                      alt="supplier5"
                      src="https://www.abraa.com/assets/images/supplier_guideline/5.jpg"
                      style={{
                        float: "right",
                        height: 394,
                        marginBottom: 10,
                        marginTop: 10,
                        maxWidth: "100%",
                        paddingLeft: 10,
                        width: 500
                      }}
                    />
                  </h3>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li style={{ textAlign: "justify" }}>
                      Product quoting is a unique feature on Abraa.com,&nbsp;where member-suppliers can find
                      buying requests&nbsp;related to their industry and send customers their&nbsp;quotations
                      directly. This section will list the latest buying requests sent in by potential
                      buyers,&nbsp;expecting to receive the best quotations from suppliers.
                    </li>
                  </ol>
                  <p style={{ textAlign: "justify" }}>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <em>Below is an image of how easy it is for the user to send in a request.</em>
                  </p>
                  <p>
                    <img
                      alt="supplier6"
                      src="https://www.abraa.com/assets/images/supplier_guideline/6.jpg"
                      style={{ maxWidth: "100%", width: "100%" }}
                    />
                  </p>
                  <p>&nbsp;</p>
                  <h3>
                    5- Real Time Statistics
                    <img
                      alt="supplier7"
                      src="https://www.abraa.com/assets/images/supplier_guideline/7.jpg"
                      style={{
                        float: "right",
                        height: 40,
                        maxWidth: "100%",
                        width: 475
                      }}
                    />
                  </h3>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li>
                      These stats are updated regularly displaying the interactions between&nbsp;suppliers,
                      users and Abraa system.
                    </li>
                    <li>
                      Paid members of abraa.com will have the luxury of a real-time store page analytics upon
                      login.&nbsp;The Dashboard will include sales by location, monthly store performance,
                      total visitor count, top 5&nbsp;products listed, latest buying request, product quoting
                      status, individual and total clicks on products,&nbsp;visits on store page, number of
                      reviews and total contact count. This will give you a true measure of&nbsp;how your
                      store is performing on abraa.com, as well as valuable insights for improvement.
                    </li>
                  </ol>
                  <p>
                    <img
                      alt="supplier8"
                      src="https://www.abraa.com/assets/images/supplier_guideline/8.jpg"
                      style={{ maxWidth: "100%", width: "100%" }}
                    />
                  </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-3">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Creating a Store Page on Abraa.com</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <h3>
                    1- Login / Register
                    <img
                      alt="supplier9"
                      src="https://www.abraa.com/assets/images/supplier_guideline/9.jpg"
                      style={{
                        float: "right",
                        height: 400,
                        maxWidth: "100%",
                        paddingLeft: 10,
                        width: 391
                      }}
                    />
                  </h3>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li>Go to www.abraa.com.</li>
                    <li>
                      Click on either Log In button at the top right&nbsp;corner of the website, or you can
                      open the login&nbsp;page directly (https://www.abraa.com/login).
                    </li>
                    <li>
                      Enter the mandatory details to log in. Remove&nbsp;if you do not have an Abraa account,
                      you could&nbsp;register on the same page to log-in.
                    </li>
                    <li>
                      After registration, you will receive login details and&nbsp;an activation link to the
                      email address provided&nbsp;(this could take up to 24 hours).
                    </li>
                    <li>
                      Enter the login details (or click on the email link)&nbsp;to complete the account
                      creation process.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <h3>2- Enter Location, Website &amp; Social Media Links Of The Store</h3>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li>
                      Once you receive the store activation email, please click on the activation link that
                      will activate your&nbsp;store.
                    </li>
                    <li>
                      Now login and click Visit Your Store link to open your store page. Or alternatively, you
                      can click Sell&nbsp;Now icon if you wish to list your products immediately.
                    </li>
                    <li>
                      Now that you are on your Store page, click Settings that appear near your store name.
                    </li>
                    <li>
                      Over here, you will be prompted with a pop-up window, which allows you to modify all the
                      required&nbsp;information like Contact Address, Website, and Social Media Links.
                    </li>
                    <li>Within the same pop-up window, you can upload Banners as well as Logos.</li>
                  </ol>
                  <p>&nbsp;</p>
                  <h3>3- Upload Banners and Logos</h3>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li>
                      Banners and logos could be uploaded through the same pop-up window, as stated above.
                    </li>
                    <li>
                      Instruction To Upload Banners &amp; Logos;
                      <ol style={{ listStyleType: "lower-alpha" }}>
                        <li>Banner image resolution must be 1140 x 300.</li>
                        <li>Logo resolution should be 300 x 300 or below.</li>
                      </ol>
                    </li>
                  </ol>
                  <p>
                    <em>
                      Note: Please <span style={{ color: "#c0392b" }}>DO NOT</span> use Google images as they
                      are protected by copyright.
                    </em>
                  </p>
                  <p>&nbsp;</p>
                  <p>4- Listing Products on Your Store Page</p>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li>This step involves adding new or latest products for the store.</li>
                    <li>
                      To start listing, either go to your store page and click{" "}
                      <a href="https://www.abraa.com/new-dashboard/add-product">
                        <strong>Add New Product</strong>
                      </a>{" "}
                      or click{" "}
                      <a href="mailto:Support@abraa.com">
                        <strong>Sell Now</strong>
                      </a>{" "}
                      as shown in&nbsp;the above image.
                    </li>
                    <li>
                      Now, you will be redirected to the <strong>Category Selection Screen</strong> where you
                      will have to select the right&nbsp;category. If you are not sure about the category,
                      just enter the product name in the search box and&nbsp;you will be guided
                      accordingly.&nbsp;
                    </li>
                    <li>
                      After selecting the right category, click <strong>Submit</strong>.
                    </li>
                    <li>
                      You will then be redirected to the Products page. The following is mandatory to be
                      filled:
                      <ol style={{ listStyleType: "lower-alpha" }}>
                        <li>
                          Basic Information:
                          <ol>
                            <li>
                              Enter the{" "}
                              <strong>
                                Name of the Product (add a name that can be easily searched which will
                                result&nbsp;in Google search results)
                              </strong>
                              . While entering the name of the product, please ensure that you&nbsp;DO NOT
                              enter the company name with it. It is also mandatory that you add high-quality
                              images&nbsp;for the products. Upload at least one image per product with a
                              maximum of 10.
                              <img
                                alt="supplier10"
                                src="https://www.abraa.com/assets/images/supplier_guideline/10.jpg"
                                style={{ maxWidth: "100%", width: "100%" }}
                              />
                            </li>
                          </ol>
                        </li>
                        <li>
                          Detailed Description:&nbsp;
                          <ol>
                            <li>
                              The next area to be filled is the <strong>Detailed Description</strong>, where
                              you have to enter the description&nbsp;of the product (in detail) in the space
                              provided. This will enable buyers to be sure and&nbsp;compare the product to
                              what they are looking for. It is advised to use as many key words
                              as&nbsp;possible that will give your product a greater chance of being noticed
                              by buyers.
                              <img
                                alt="supplier11"
                                src="https://www.abraa.com/assets/images/supplier_guideline/11.jpg"
                                style={{ maxWidth: "100%", width: "100%" }}
                              />
                            </li>
                          </ol>
                        </li>
                        <li>
                          Quantity, Shipping and Delivery:
                          <ol>
                            <li>
                              Minimum order quantity (MOQ) is mandatory, as most manufacturers and suppliers
                              will not be&nbsp;able to process small orders. If you fail to do so, the Abraa
                              system will change your MOQ to&nbsp;1 by default.
                            </li>
                            <li>
                              Shipping and delivery information (typically) will depend on the size and type
                              of the package.&nbsp;The more information you provide the easier it would be for
                              the buyer.
                            </li>
                            <li>
                              Number of units in stock{" "}
                              <strong>
                                (HAS TO BE UPDATED REGULARLY)
                                <img
                                  alt="supplier12"
                                  src="https://www.abraa.com/assets/images/supplier_guideline/12.jpg"
                                  style={{ maxWidth: "100%", width: "100%" }}
                                />
                              </strong>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <h3>5- Edit / Delete Products on Your Store Page</h3>
                  <ol style={{ listStyleType: "lower-roman" }}>
                    <li>
                      Editing or deletion of a product will have to be done from your store page. When logged
                      in you can see&nbsp;all the products listed along with the<strong> ‘edit’</strong> and{" "}
                      <strong>‘delete’ </strong>options next to each product.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="categori-dispaly" id="col-4">
              <div className="categori-listshow">
                <div className="columns">
                  <h3 className="htitlel cat-h3">
                    <span>
                      <a>Supplier FAQ</a>{" "}
                    </span>
                  </h3>
                </div>
                <div className="guideline-contents">
                  <h3>Log In Credentials</h3>
                  <p>
                    <strong>Q. What do I do when I have forgotten my username or password?</strong>
                    <br />
                    <br />
                    <strong>A.&nbsp;Forgotten Username:</strong> Usernames is your company email address or
                    the email address of the&nbsp;personnel who created the account. If you cannot remember
                    which email&nbsp;address was used, you can contact Abraa Team on 00971 42 633 660
                    or&nbsp;send an email to <a href="mailto:support@abraa.com">support@abraa.com</a>
                    <br />
                    <strong>Password Recovery:</strong> Click on <strong>“Forgotten Password”</strong> on the
                    log in page and enter the email address&nbsp;you registered with. Tick the “I’m not a
                    robot” before you click on
                    <br />
                    “Reset Password”.&nbsp;You will receive a temporary link to your email within 2 hours. You
                    can then&nbsp;change your password as instructed below.
                  </p>
                  <p>
                    <strong>Q. How can I change my password?</strong>
                    <br />
                    <strong>A</strong>. <strong>Change Password:</strong> Log into your store page with your
                    current password. Click on <a href="https://www.abraa.com/new-dashboard/">Dashboard </a>
                    and&nbsp;at the bottom left under{" "}
                    <a href="https://www.abraa.com/new-dashboard/profile-settings">“Account Settings”</a>, you
                    will find My Profile. You will&nbsp;have 3 tabs where the middle tab is for resetting
                    password. Enter your new&nbsp;password and confirm password on the line below.
                  </p>
                  <p>
                    <strong>Q. I have not received the temporary password via email. What do I do?</strong>
                    <br />
                    <strong>A.</strong> If you have not received the email, kindly check if it is in your spam
                    or trash box. Few emails such as&nbsp;Hotmail or Gmail might experience delays in getting
                    our password retrieval emails. Alternatively please&nbsp;write to{" "}
                    <a href="mailto:support@abraa.com">support@abraa.com</a> and we will have it resolved
                    a.s.a.p.
                  </p>
                  <p>
                    <br />
                    Quotation Management
                  </p>
                  <p>
                    <strong>Q. How do I check my quotations and track their status?</strong>
                    <br />
                    <strong>A.</strong>
                  </p>
                  <ol>
                    <li>
                      Log in to <a href="https://www.abraa.com/">Abraa.com</a>
                    </li>
                    <li>
                      Go to <a href="https://www.abraa.com/new-dashboard/">Dashboard</a>.
                    </li>
                    <li>
                      Click on <strong>“Buying Requests” </strong>and you will see a list of all the buying
                      inquiries which are sent to you&nbsp;along with its status.
                    </li>
                  </ol>
                  <p>
                    <strong>
                      Q. How long does it take for my quotation to be accepted and submitted to the buyer?
                      <br />
                      A.
                    </strong>{" "}
                    Generally, it takes around 48-72 hours to be accepted (excluding weekends). If the
                    quotation is approved&nbsp;by the buyer, you will get an email notification from a
                    registered email address with the buyer’s contact&nbsp;information.
                  </p>
                  <p>
                    <br />
                    Secure Payment
                  </p>
                  <p>
                    <strong>Q. What is Abraa Secure Payment?</strong>
                    <br />
                    <strong>A.</strong> Abraa.com’s Secure Payment service gives security for both buyers as
                    well as suppliers involved in
                    <br />
                    global trade.
                    <br />
                    <a href="https://www.abraa.com/services/secure-payment">Secure Payment</a> system holds
                    buyers’ payments until the order is processed and received by the&nbsp;buyer at an agreed
                    time. When both parties (buyer and supplier) have confirmed that the transaction
                    is&nbsp;done, then the money is released to the supplier.
                  </p>
                  <p>
                    <strong>Q. What are the advantages of using Abraa Secure Payment System?</strong>
                    <br />
                    <strong>A.&nbsp;For Buyers:</strong> Your money will only be discharged to the supplier
                    after you verify agreeable receipt of your order.
                    <br />
                    <strong>For Suppliers:</strong> Secure Payment confirms the payment information for every
                    individual transaction&nbsp;and you are only required to dispatch the order after you have
                    received a verification&nbsp;of payment from the Abraa team.
                    <br />
                    Secure Payment eliminates any doubt or hesitation on the buyer side. Considering
                    <br />
                    that Abraa will hold the buyer’s money till they receive the goods in a
                    satisfactory&nbsp;condition tends to give the deals more creditability and ultimately push
                    the deal to be
                    <br />
                    closed smoothly.
                  </p>
                  <p>
                    <strong>Q. What payment methods are available on Abraa.com?</strong>
                    <br />
                    <strong>A.&nbsp;</strong>
                  </p>
                  <ol>
                    <li>Master, Visa Card ( Credit / Debit)</li>
                    <li>Paypal</li>
                    <li>Wire Transfer</li>
                    <li>Bank Deposits</li>
                    <li>Check Payment</li>
                    <li>Western Union</li>
                    <li>China Union Pay</li>
                  </ol>
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
