import React from "react"

export default function Main() {
  return (
    <>
      <div className="light_blue_bg_section pricing_container" style={{ paddingTop: 208 }}>
        <div className="container mt-3 mt-md-0">
          <div className="row ptb10 mt-5">
            <div className="col-md-7">
              <h1 className="page-title1">Pricing</h1>
              <p className="mt-3 mb-4">
                Choose the right plan to communicate better with your buyers and get started by exploring new
                markets today !
              </p>
              <br />
            </div>
            <div className="col-md-5  custom-text-align">
              <div className="whatsapp-sidebar">
                <div className="sidebar-module">
                  <div className="sidebar-header">
                    <h1>For details please contact</h1>
                  </div>
                  <div className="sidebar-body">
                    <ul className="list-sidebar">
                      <li>
                        <a>
                          <img style={{ width: "44%" }} src="https://s101.abraacdn.com//852329572.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="cur_selection_box navbar_dropdown">
                <form className="navbar-lang-form" role="form">
                  <span
                    style={{
                      display: "inline-flex",
                      padding: "12px 0 12px 10px"
                    }}
                  />
                  <select
                    className="headerCur change_languages select_width"
                    name="sidebarCur"
                    id="sidebarCur"
                  >
                    <option value="usd" selected>
                      USD{" "}
                    </option>
                    <option value="aed">AED </option>
                    <option value="sar">SAR </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row no-padding-col-xs mb60">
            <div className="col-12 col-sm-4 col-md-3 mb20">
              <div className="price-box">
                <div className="heading_wrapper">
                  <div className="price-cat price-cat-1" />
                </div>
                <div className="text-center price-name">
                  <span>Startups</span>
                </div>
                <hr />
                <div className="text-center price-label price-1">FREE</div>
                <div className="text-center price-label price-2">
                  <em>$</em>0
                </div>
                <div className="text-center note-gray text-bold">for life</div>
                <hr />
                <div className="text-center plandetails">-</div>
                <hr />
                <div className="text-center plandetails">Unlimited listings</div>
                <div className="text-center price-button">
                  <a className="btn btn-default abraa-btn abraa-transparent-btn blue-text">Join Now</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 mb20">
              <div className="price-box">
                <div className="heading_wrapper">
                  <div className="price-cat price-cat-2" />
                </div>
                <div className="text-center price-name">
                  <span>Small Business</span>
                </div>
                <hr />
                <div className="text-center price-label price-1">BASIC</div>
                <div className="text-center price-label price-2">
                  <em>$</em>249
                </div>
                <div className="text-center note-gray text-bold">per year</div>
                <hr />
                <div className="text-center plandetails">Access to buyer details</div>
                <hr />
                <div className="text-center plandetails">Unlimited listings</div>
                <div className="text-center price-button">
                  <a className="btn btn-default abraa-btn abraa-transparent-btn blue-text">Select</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 mb20">
              <div className="price-box price-box-golden">
                <div className="recommended">Recommended</div>
                <div className="heading_wrapper">
                  <div style={{}} className="price-cat price-cat-3" />
                </div>
                <div className="text-center price-name">
                  <span>Corporates</span>
                </div>
                <hr />
                <div className="text-center price-label price-1" style={{}}>
                  GOLD
                </div>
                <div className="text-center price-label price-3">
                  <em>$</em>1499
                </div>
                <div className="text-center note-gray text-bold">per year</div>
                <hr />
                <div className="text-center plandetails">Access to buyer details</div>
                <hr />
                <div className="text-center plandetails">Unlimited listings</div>
                <div className="text-center price-button">
                  <a className="btn btn-default abraa-btn abraa-blue-btn blue-text">Select</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 mb20">
              <div className="price-box price-box-platinum">
                <div className="heading_wrapper">
                  <div style={{}} className="price-cat price-cat-4" />
                </div>
                <div className="text-center price-name">
                  <span>Enterprises / Factories</span>
                </div>
                <hr />
                <div className="text-center price-label price-1" style={{}}>
                  PLATINUM
                </div>
                <div className="text-center price-label price-4">
                  <a id="contact-us-price">Contact Us</a>
                </div>
                <hr />
                <div className="text-center plandetails">Access to buyer details</div>
                <hr />
                <div className="text-center plandetails">Unlimited listings</div>
                <div className="text-center price-button">
                  <a className="btn btn-default abraa-btn abraa-transparent-btn blue-text">Call Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_bg_section pricing_container">
        <div className="container">
          <div className="row mb60">
            <div className="col-12">
              <h2 className="price-features-h">All features</h2>
              <div className="table-wrap en">
                <table className="table price-comp-table">
                  <thead>
                    <tr>
                      <th />
                      <th>
                        <div className="text-center price-name">
                          <span>Basic</span>/ Free
                        </div>
                      </th>
                      <th>
                        <div className="text-center price-name">
                          <span>Basic</span>/ verified
                        </div>
                      </th>
                      <th className="price-comp-shadow">
                        <div className="text-center price-name price-name-shadow">
                          <div className="recommended-comp">Recomended</div>
                          <span>Gold</span>
                        </div>
                      </th>
                      <th>
                        <div className="text-center price-name">
                          <span>Platinum</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-1-fire" colSpan={4}>
                        <span className="price-comp-ico-1" />
                        <em>Number of supplied quotes, per month</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-2-fire">
                        <span className="price-comp-ico-2" />
                        <em>How many prodcut can list</em>
                      </td>
                      <td>Unlimited</td>
                      <td>Unlimited</td>
                      <td className="price-comp-shadow">Unlimited</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-1-fire">
                        <span className="price-comp-ico-1" />
                        <em>Leads per year</em>
                      </td>
                      <td>
                        <span className="price-comp-no1">-</span>
                      </td>
                      <td>100/Year</td>
                      <td className="price-comp-shadow">600/Year</td>
                      <td>2400/Year</td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-2-fire" colSpan={4}>
                        <span className="price-comp-ico-2" />
                        <em>Product listings</em>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-3-fire" colSpan={4}>
                        <span className="price-comp-ico-3" />
                        <em>Visible company name &amp; contact details</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-3-fire">
                        <span className="price-comp-ico-3" />
                        <em>Mini website with visible company name &amp; contact details</em>
                      </td>
                      <td>
                        <span className="price-comp-no1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td className="price-comp-shadow">
                        Yes
                        <span className="price-comp-ok1" />
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-4-fire" colSpan={4}>
                        <span className="price-comp-ico-4" />
                        <em>Verified Badge</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-4-fire">
                        <span className="price-comp-ico-4" />
                        <em>Verified Badge</em>
                      </td>
                      <td>
                        <span className="price-comp-no1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-5-fire" colSpan={4}>
                        <span className="price-comp-ico-5" />
                        <em>Abraa chat (Receive WhatsApp chat from buyers)</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-5-fire">
                        <span className="price-comp-ico-5" />
                        <em>Abraa chat (Receive WhatsApp chat from buyers)</em>
                      </td>
                      <td>
                        <span className="price-comp-x1">No</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-6-fire" colSpan={4}>
                        <span className="price-comp-ico-6" />
                        <em>Search ranking on Abraa</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-6-fire">
                        <span className="price-comp-ico-6" />
                        <em>Search ranking on Abraa</em>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-7-fire" colSpan={4}>
                        <span className="price-comp-ico-7" />
                        <em>Featured brand banner on home page</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-7-fire">
                        <span className="price-comp-ico-7" />
                        <em>Featured brand banner on home page</em>
                      </td>
                      <td>
                        <span className="price-comp-no1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-no1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">1 Months</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">3 Months</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-8-fire" colSpan={4}>
                        <span className="price-comp-ico-8" />
                        <em>Featured product on home page</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-8-fire">
                        <span className="price-comp-ico-8" />
                        <em>Featured product on home page</em>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">1 Months</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">3 Months</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-9-fire" colSpan={4}>
                        <span className="price-comp-ico-9" />
                        <em>Boosted products with Digital Marketing</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-9-fire">
                        <span className="price-comp-ico-9" />
                        <em>Featured store page and products</em>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-10-fire" colSpan={4}>
                        <span className="price-comp-ico-10" />
                        <em>Email Marketing to our targeted buyers</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-10-fire">
                        <span className="price-comp-ico-10" />
                        <em>Email Marketing to our targeted buyers</em>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">4/Year</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">12/Year</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-11-fire" colSpan={4}>
                        <span className="price-comp-ico-11" />
                        <em>Not happy?Money back gaurntee after 3 months</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-11-fire">
                        <span className="price-comp-ico-11" />
                        <em>Not happy?Money back gaurntee after 3 months</em>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-x1">-</span>
                      </td>
                      <td>
                        <span className="price-comp-x1">Yes</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">Yes</span>
                      </td>
                    </tr>
                    <tr className="price-comp-mobile">
                      <td className="price-comp-h-mobile price-popover-12-fire" colSpan={4}>
                        <span className="price-comp-ico-12" />
                        <em>Price Year</em>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-h price-popover-12-fire">
                        <span className="price-comp-ico-12" />
                        <em>Price Year</em>
                      </td>
                      <td>
                        <span className="price-comp-x1">0</span>
                      </td>
                      <td>
                        <span className="price-comp-x1">289</span>
                      </td>
                      <td>
                        <span className="price-comp-x1">1399</span>
                      </td>
                      <td>
                        <span className="price-comp-ok1">5499</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="price-comp-bottom price-comp-zero" />
                      <td className="price-comp-bottom">
                        <div className="text-center price-button">
                          <a className="btn btn-default abraa-btn abraa-transparent-btn blue-text">
                            Join Now
                          </a>
                        </div>
                      </td>
                      <td className="price-comp-bottom">
                        <div className="text-center price-button">
                          <a className="btn btn-default abraa-btn abraa-transparent-btn blue-text">Select</a>
                        </div>
                      </td>
                      <td className="price-comp-bottom">
                        <div className="text-center price-button price-comp-overlay">
                          <a className="btn btn-default abraa-btn abraa-blue-btn blue-text">Select</a>
                        </div>
                      </td>
                      <td className="price-comp-bottom">
                        <div className="text-center price-button">
                          <a className="btn btn-default abraa-btn abraa-transparent-btn blue-text">Call Us</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="price-popover-1 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Leads per year</h2>
                  <p className="price-popover-p">
                    Example : for gold members they can respond to 10 RFQs from 10 Different customers from
                    our RFQ public list , this means they have access to any 10 buyers they wish to select and
                    talk to{" "}
                  </p>
                  <img
                    src="/../../img/leads_per_year_img.jpg"
                    className="benefit-image"
                    alt="pricing1 icon"
                  />
                </div>
                <div className="price-popover-2 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Product listings</h2>
                  <p className="price-popover-p">
                    suppliers now have chance to list unlimited number of prodcuts on their mini website ona
                    abraa. .
                  </p>
                  <img className="benefit-image" src="/../../img/product_list.jfif" alt="pricing2 icon" />
                </div>
                <div className="price-popover-3 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <div className="price-popover-cont-wrap">
                    <div className="price-popover-tmpate-left">
                      <img src="/../../img/mini_website.jfif" alt="pricing3 icon" />
                    </div>
                    <div className="price-popover-tmpate-right">
                      <span className="price-popover_ico-2" />
                      <h2>Mini website with visible company name &amp; contact</h2>
                      <p className="price-popover-p">
                        Suppliers with premium membership levels (Basic, Gold, Platimum ) will have their
                        company name as well as contact details visitable to all buyers and this increase the
                        chances of connecting directly with buyers without having to go through abraa.com
                        channel .{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="price-popover-4 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Verified Badge</h2>
                  <p className="price-popover-p">
                    Having Verified badge on abraa gives your account more creditablity and gives your buyers
                    more comfort to proceed with the transactions and complete the purchase .
                  </p>
                  <img className="benefit-image" src="/../../img/verified_badge.png" alt="pricing5 icon" />
                </div>
                <div className="price-popover-5 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Abraa chat (Receive WhatsApp chat from buyers)</h2>
                  <p className="price-popover-p">
                    Your WhatsApp number will be connected to each of your products and as well as to your
                    page, so all buyers who are interested in your products will be able to contact you
                    directly 1 to 1 without inteference of abraa team .
                  </p>
                  <img className="benefit-image" src="/../../img/abraa_chat.png" alt="pricing4 icon" />
                </div>
                <div className="price-popover-6 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <div className="price-popover-cont-wrap">
                    <div className="price-popover-tmpate-left">
                      <img
                        className="benefit-image"
                        src="/../../img/search_ranking.png"
                        alt="pricing6 icon"
                      />
                    </div>
                    <div className="price-popover-tmpate-right">
                      <span className="price-popover_ico-2" />
                      <h2>Search ranking on Abraa</h2>
                      <p className="price-popover-p">
                        When buyer search abraa for any product, Premium members shows first and usually
                        buyers tends to select sellers who come on first page espacially if the seller has
                        verified and premium badge tagged near their account name .{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="price-popover-7 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Featured brand banner on home page</h2>
                  <p className="price-popover-p">
                    Abraa receives thousands of visitors on daily basis , most of the visitors go through the
                    home page first, and having your brand on home page gives your brand more exposure and
                    credibalitry and makes it #1 for customers to select .
                  </p>
                  <img className="benefit-image" src="/../../img/featured_brand.png" />
                </div>
                <div className="price-popover-8 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <div className="price-popover-cont-wrap">
                    <div className="price-popover-tmpate-left">
                      <img
                        alt="pricing9 icon"
                        className="benefit-image"
                        src="/../../img/featured_prodcuts.png"
                      />
                    </div>
                    <div className="price-popover-tmpate-right">
                      <span className="price-popover_ico-2" />
                      <h2>Featured product on home page</h2>
                      <p className="price-popover-p">
                        Our statistics shows that prodcuts which are on home page gets at least 2X the chancs
                        of sales VS the products which are not, so having the chance to feature your products
                        on home page give your more sureity to sell and ultimatly generate the ROI on
                        Abraa.com .{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="price-popover-9 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Boosted products with Digital Marketing</h2>
                  <p className="price-popover-p">
                    Get 10X to 20X your customers count by boosting your products on all our platfroms , we
                    will show your products specfically to the audience who are into your business niche, 20%
                    of your paid membership will be spent on your products with the goal to increase your
                    chances of sales and conversions .
                  </p>
                  <img className="benefit-image" src="/../../img/abraa_ads.png" alt="pricing10 icon" />
                </div>
                <div className="price-popover-10 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Email Marketing to our targeted buyers</h2>
                  <p className="price-popover-p">
                    We will be sending mass emails to all the customers in our DB who are relevant to your
                    business and industry, You will be recieving sample email before sending and also results
                    report after sending, the call to action button in this email content can be a click to
                    your WhatsApp or to your web page or both together .
                  </p>
                  <img className="benefit-image" src="/../../img/email_marketing.jfif" alt="pricing11 icon" />
                </div>
                <div className="price-popover-11 arrow_box" style={{ display: "none" }}>
                  <div className="price-popover-close" />
                  <span className="price-popover_ico" />
                  <h2>Not happy?Money back gaurntee after 3 months</h2>
                  <p className="price-popover-p">
                    With our money back gaurntee option you will never go wrong, Get 100% of your payment 3
                    months after joining If our service did not matches your expectiation.
                  </p>
                  <img className="benefit-image" src="/../../img/money_back.png" alt="pricing12 icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
