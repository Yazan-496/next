import React, { Component } from "react"
// import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css"
import LazyLoad from "react-lazy-load"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

export default function CarouselNum7() {
  const src =
    "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
  const router = useRouter()
  return (
    <>
      <OwlCarousel
        className="item-3-wrapper item-3-slider owl-carousel mt-2 mt-md-0"
        items={3}
        dots={false}
        loop
        nav={false}
        autoplay={true}
      >
        <div onClick={() => router.push("/supplier-page")} className="home-store">
          <div className="store-details">
            <div className="store-profile-image">
              <a onClick={() => router.push("/supplier-page")}>
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="75"
                    height="75"
                    src="https://s101.abraacdn.com/files/159653891746895.png"
                    alt={"alt"}
                  />
                </LazyLoad>
              </a>
            </div>
            <div className="store-quality-icon">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width="64px"
                  height="18px"
                  alt="Verified supplier"
                  title="Verified supplier"
                  src="https://s101.abraacdn.com/files/verified-user-1.jpg"
                  className="mr-auto"
                />
              </LazyLoad>
            </div>
            <h3 className="store-name">
              <a onClick={() => router.push("/supplier-page")} title="Al MOTAMAYZOON">
                Al MOTAMAYZOON
              </a>
            </h3>
            <div className="store-date">
              Member since <br />
              <b className="mute-color">14-Nov-2016 </b>
            </div>
            <div className="store-country">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width="28"
                  height="17"
                  src="https://s101.abraacdn.com/files/ae.png"
                  alt="Store flag"
                />
              </LazyLoad>
              UAE
            </div>
          </div>
          <div className="store-links">
            <a onClick={() => router.push("/supplier-page")}>
              <i className="fa fa-phone" />
            </a>

            <a onClick={() => router.push("/supplier-page")} className="store-whatsapp">
              <i className="fa fa-whatsapp" />
            </a>

            <a onClick={() => router.push("/supplier-page")} className="store-link">
              Go To Store
            </a>
          </div>
        </div>
        <div onClick={() => router.push("/supplier-page")} className="home-store">
          <div className="store-details">
            <div className="store-profile-image">
              <a onClick={() => router.push("/supplier-page")}>
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="75"
                    height="75"
                    src="https://s101.abraacdn.com/files/6876145879.jpeg"
                    alt={"alt"}
                    //    onError="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                  />
                </LazyLoad>
              </a>
            </div>
            <div className="store-quality-icon">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width="64px"
                  height="18px"
                  alt="Verified supplier"
                  title="Verified supplier"
                  src="https://s101.abraacdn.com/files/verified-user-1.jpg"
                  className="mr-auto"
                />
              </LazyLoad>
            </div>
            <h3 className="store-name">
              <a onClick={() => router.push("/supplier-page")} title="Australian Luxuries Pty Ltd">
                Australian Luxuries Pty Ltd
              </a>
            </h3>
            <div className="store-date">
              Member since <br />
              <b className="mute-color">16-Nov-2017 </b>
            </div>
            <div className="store-country">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width="28"
                  height="17"
                  src="https://s101.abraacdn.com/files/au.png"
                  alt="Store flag"
                />
              </LazyLoad>
              Australia
            </div>
          </div>
          <div className="store-links">
            <a onClick={() => router.push("/supplier-page")}>
              <i className="fa fa-phone" />
            </a>

            <a onClick={() => router.push("/supplier-page")} className="store-whatsapp">
              <i className="fa fa-whatsapp" />
            </a>

            <a onClick={() => router.push("/supplier-page")} className="store-link">
              Go To Store
            </a>
          </div>
        </div>
        <div onClick={() => router.push("/supplier-page")} className="home-store">
          <div className="store-details">
            <div className="store-profile-image">
              <a onClick={() => router.push("/supplier-page")}>
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="75"
                    height="75"
                    src="https://s101.abraacdn.com/files/160076756769256.png"
                    alt={"alt"}
                    //    onError="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                  />
                </LazyLoad>
              </a>
            </div>
            <div className="store-quality-icon">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width="64px"
                  height="18px"
                  alt="Verified supplier"
                  title="Verified supplier"
                  src="https://s101.abraacdn.com/files/verified-user-1.jpg"
                  className="mr-auto"
                />
              </LazyLoad>
            </div>
            <h3 className="store-name">
              <a onClick={() => router.push("/supplier-page")} title="Master Outlet Electronics">
                Master Outlet Electronics
              </a>
            </h3>
            <div className="store-date">
              Member since <br />
              <b className="mute-color">15-Sep-2020 </b>
            </div>
            <div className="store-country">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width="28"
                  height="17"
                  src="https://s101.abraacdn.com/files/ae.png"
                  alt="Store flag"
                />
              </LazyLoad>
              UAE
            </div>
          </div>
          <div className="store-links">
            <a onClick={() => router.push("/supplier-page")}>
              <i className="fa fa-phone" />
            </a>

            <a onClick={() => router.push("/supplier-page")} className="store-whatsapp">
              <i className="fa fa-whatsapp" />
            </a>

            <a onClick={() => router.push("/supplier-page")} className="store-link">
              Go To Store
            </a>
          </div>
        </div>

        <div className="owl-nav">
          {/*<button role="presentation" className="owl-prev disabled">*/}
          {/*    <i className="ri-arrow-left-s-line w-100 h-100 d-flex align-items-center justify-content-center" />*/}
          {/*</button>*/}
          {/*<button role="presentation" className="owl-next">*/}
          {/*    <i className="ri-arrow-right-s-line d-flex align-items-center justify-content-center" />*/}
          {/*</button>*/}
        </div>
      </OwlCarousel>
    </>
  )
}
