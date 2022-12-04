import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FiInstagram } from "react-icons/fi"
import { TbBrandFacebook } from "react-icons/tb"
import { RiTwitterLine } from "react-icons/ri"
import { AiOutlineYoutube } from "react-icons/ai"
import { FiLinkedin } from "react-icons/fi"
import Image from "next/image"
import paypal from "../header-icons/paypal.jpg"
import visa from "../header-icons/visa.jpg"
import MasterCard from "../header-icons/MasterCard.jpg"
import discover from "../header-icons/discover.jpg"
import skrill from "../header-icons/skrill.jpg"

import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-solid-svg-icons"

function Footer(props) {
  console.log("sadhksdkjh")
  return (
    <footer>
      <a
        href="https://api.whatsapp.com/send?phone=971505346880"
        id="myBtnWhatsapp"
        title="Contact Us"
        target="_blank"
      >
        <Image
          unoptimized={true}
          width="50"
          height="50"
          id="whatsappImg"
          src="https://assets.abraacdn.com/assets/images/whatsapp.svg"
          alt="Whatsapp"
        />
      </a>
      <div className="footer-sec container">
        <div className="footer_col_12">
          <div className="newsletter-text">
            <h3>Subscribe our Newsletter</h3>
            <p>
              Subscribe now to receive the Abraa Newsletter with latest products, best offers and current
              deals directly to your email.
            </p>
          </div>
          <div className="newsletter-right">
            <form>
              <input
                className="newsletter-email dlist-subscribe-text"
                placeholder="Email"
                id="email-subscription"
              />
              <button type="submit" onclick="subscribeNow()">
                <i className="ri-send-plane-line pr-2" style={{ position: "relative", top: 1 }} />
                SUBSCRIBE
              </button>
            </form>
            <p
              style={{
                textAlign: "left",
                fontSize: "14px",
                color: "#999",
                marginleft: "0",
                marginTop: "8px"
              }}
              className="newsletter-right-subtitle1"
            >
              We'll never share your email address with a third-party.
            </p>
          </div>
        </div>
        <div className="clearfix" />
        <div className="footer-width footer-info">
          <a href="/" className="d-inline-block">
            <Image
              unoptimized={true}
              width="194"
              height="58"
              src="https://assets.abraacdn.com/assets/images/abraa-white-logos.png"
              alt="Abraa Logo"
            />
          </a>
          <p>
            Abraa.com is where MENA region’s businesses and traders go to source products from manufacturers
            and suppliers from around the globe.
          </p>
          {/*                <div class="soc_download mt-3 d-flex align-items-center">*/}
          {/*                    <span>*/}
          {/*?//= __("Download") ?*/}
          {/*</span>*/}
          {/*                    <a class="d-inline-block play_icon_top ml-2" target="_blank" href="https://play.google.com/store/apps/details?id=com.abraa.app">*/}
          {/*        
          {/*                        <Image src="./assets/header-icons/googleStore.png" alt="" style="width : 100px">*/}
          {/*                    </a>*/}
          {/*                </div>*/}
        </div>
        <div className="footer-width footer-link">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="/information/buy-request">Request For Quote</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="/services/plans">Plans</a>
            </li>
            <li>
              <a href="/information/events">Events</a>
            </li>
            <li>
              <a title="About Abraa" href="/pages/about">
                About Abraa
              </a>
            </li>
            <li>
              <a title="Privacy Policy" href="/pages/privacy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a title="Shipping & Return Policy" href="/pages/shipping-return-policy">
                Shipping &amp; Return Policy
              </a>
            </li>
            <li>
              <a title="Ferrari Auto Parts " href="/pages/ferrari-auto-parts">
                Ferrari Auto Parts
              </a>
            </li>
            <li>
              <a title="812 GTS" href="/pages/ferrari-812-gts-auto-parts">
                812 GTS
              </a>
            </li>
            <li>
              <a title="F8 Spider" href="/pages/ferrari-auto-parts-f8-spider">
                F8 Spider
              </a>
            </li>
            <li>
              <a href="/guidelines/supplier">Supplier Guideline</a>
            </li>
            <li>
              <a href="/guidelines/buyer">Buyer Guideline</a>
            </li>
          </ul>
        </div>
        <div className="footer-width footer-link">
          <h4>Categories </h4>
          <ul>
            <li>
              <a title="Food and beverages production lines" href="/listing-page">
                Food and beverages production lines
              </a>
            </li>
            <li>
              <a title="Hospitality" href="/listing-page">
                Hospitality
              </a>
            </li>
            <li>
              <a title="Health & Beauty" href="/listing-page">
                Health &amp; Beauty
              </a>
            </li>
            <li>
              <a title="Industrial & Construction" href="/listing-page">
                Industrial &amp; Construction
              </a>
            </li>
            <li>
              <a title="Auto & Auto Parts" href="/listing-page">
                Auto &amp; Auto Parts
              </a>
            </li>
            <li>
              <a title="Packaging & Advertising" href="/listing-page">
                Packaging &amp; Advertising
              </a>
            </li>
            <li>
              <a title="Laptops & Computers" href="/listing-page">
                Laptops &amp; Computers
              </a>
            </li>
            <li>
              <a title="Lights & Lighting" href="/listing-page">
                Lights &amp; Lighting
              </a>
            </li>
            <li>
              <a title="Apparels, Textiles & Accessories" href="/listing-page">
                Apparels, Textiles &amp; Accessories
              </a>
            </li>
            <li>
              <a title="Electricals" href="/listing-page">
                Electricals
              </a>
            </li>
            <li>
              <a title="Electronics" href="/listing-page">
                Electronics
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-width footer-link">
          <h4>Our Services </h4>
          <ul>
            <li>
              <a title="" href="/services/shipping">
                Shipping
              </a>
            </li>
            <li>
              <a title="" href="/services/warehousing">
                Warehousing
              </a>
            </li>
            <li>
              <a title="" href="/services/product-inspection">
                Products Inspection
              </a>
            </li>
            <li>
              <a title="" href="/services/buyer-protection">
                Buyer Protection
              </a>
            </li>
            <li>
              <a title="" href="/services/secure-payment">
                Secure Payment
              </a>
            </li>
            <li>
              <a title="" href="/services/on-site-verification">
                On site Verification
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-width footer-contact">
          <h4>Contact</h4>
          <div className="contact-body">
            <div className="media align-items-center contact_info_body">
              <i className="ri-customer-service-2-line" />
              <div className="media-body pl-3">
                <a href="tel:+971508488594" className="d-block">
                  (+971) 508488594
                </a>
                <a href="mailto:info@abraa.com" className="d-block mt-1">
                  info@abraa.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer-social mt-3">
            <p className="pr-3">Follow Us:</p>
            <a
              target="_blank"
              href="https://www.facebook.com/AbraaGlobal/"
              className="fb"
              aria-label="Facebook"
            >
              <TbBrandFacebook className="fa fa-facebook-f" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/abraaglobal/"
              className="inst"
              aria-label="Instagram"
            >
              <FiInstagram className="fa fa-instagram" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/abraaglobal"
              className="twitter"
              aria-label="Twitter"
            >
              <RiTwitterLine className="fa fa-twitter" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCX1FJSUjwDYFXXrz-7zzZyw"
              className="youtube"
              aria-label="Youtube"
            >
              <AiOutlineYoutube className="fa fa-youtube" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/abraa-global"
              className="linkedin"
              aria-label="Linkedin"
            >
              <FiLinkedin className="fa fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="copyright-sec">
        <div className="container">
          <div className="col-md-6">
            <p>
              @2022 <a href="/">Abraa</a>. All rights reserved
            </p>
          </div>
          <div className="col-md-6 payment-sec">
            <div className="payment-img">
              <a>
                <Image
                  unoptimized={true}
                  width="30"
                  height="12"
                  src={visa}
                  alt="visa"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="payment-img">
              <a>
                <Image
                  unoptimized={true}
                  width="30"
                  height="12"
                  src={MasterCard}
                  alt="MasterCard"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="payment-img">
              <a>
                <Image
                  unoptimized={true}
                  width="30"
                  height="12"
                  src={discover}
                  alt="discover"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="payment-img">
              <a>
                <Image
                  unoptimized={true}
                  width="30"
                  height="12"
                  src={skrill}
                  alt="skrill"
                  className="img-responsive"
                />
              </a>
            </div>
            <div className="payment-img">
              <a>
                <Image
                  unoptimized={true}
                  width="30"
                  height="12"
                  src={paypal}
                  alt="paypal"
                  className="img-responsive"
                />
              </a>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
