import React, { Component } from "react"
// import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css"
import Image from "next/image"
import LazyLoad from "react-lazy-load"
import dynamic from "next/dynamic"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

class CarouselNum4 extends Component {
  render() {
    const src =
      "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
    return (
      <>
        <OwlCarousel
          className="mt-3 home_ads_sec owl-carousel"
          items={1}
          dots={false}
          loop
          nav={false}
          autoplay={true}
        >
          <div className="home_ad">
            <a target="_blank">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width={1500}
                  height={304}
                  src="https://s101.abraacdn.com/files/160821195734453.jpg"
                  alt="Mobile Phones & Tablets"
                />
              </LazyLoad>
            </a>
          </div>
          <div className="home_ad">
            <a target="_blank">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width={1500}
                  height={304}
                  src="https://s101.abraacdn.com/files/160761194257523.jpg"
                  alt="mobile"
                />
              </LazyLoad>
            </a>
          </div>
          <div className="home_ad">
            <a target="_blank">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width={1500}
                  height={304}
                  src="https://s101.abraacdn.com/files/161046806344397.png"
                  alt="Kojak Group"
                />
              </LazyLoad>
            </a>
          </div>
          <div className="home_ad">
            <a target="_blank">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width={1500}
                  height={304}
                  src="https://s101.abraacdn.com/files/161055125849612.png"
                  alt="Australian Luxuries Pty Ltd"
                />
              </LazyLoad>
            </a>
          </div>
          <div className="home_ad">
            <a target="_blank">
              <LazyLoad>
                <Image
                  unoptimized="true"
                  width={1500}
                  height={304}
                  src="https://s101.abraacdn.com/files/161055197119625.png"
                  alt="Magic Trading Co"
                />
              </LazyLoad>
            </a>
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
}

export default CarouselNum4
