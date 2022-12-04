import React, { Component } from "react"
// import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css"
import LazyLoad from "react-lazy-load"
import dynamic from "next/dynamic"
import Image from "next/image"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

class CarouselNum6 extends Component {
  render() {
    const src =
      "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
    return (
      <>
        <OwlCarousel
          className="item-3-wrapper item-2-slider owl-carousel mt-2 mt-md-0"
          items={3}
          dots={false}
          loop
          nav={false}
          autoplay={true}
        >
          <div className="item-3">
            <a title="T-Shirt">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="131"
                    height="119"
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/90499/t-shirt_54038.jpeg"
                    alt="T-Shirt"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Unit </div>
              <div className="item-3-title">T-Shirt </div>
              <div className="item-3-price d-none"></div>
            </a>
          </div>
          <div className="item-3">
            <a title="Ceramic 240 ml Vintage Mug">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="131"
                    height="119"
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/694931/ceramic-240-ml-vintage-mug_33941.png"
                    alt="Ceramic 240 ml Vintage Mug"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq"></div>
              <div className="item-3-title">Ceramic 240 ml Vintage Mug </div>
              <div className="item-3-price d-none"></div>
            </a>
          </div>
          <div className="item-3">
            <a title="Men's Polo Shirt">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="131"
                    height="119"
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696318/men39s-polo-shirt_59164.jpeg"
                    alt="Men's Polo Shirt"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 50 PCs </div>
              <div className="item-3-title">Men's Polo Shirt </div>
              <div className="item-3-price d-none"></div>
            </a>
          </div>
          <div className="item-3">
            <a title="T-Shirt">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="131"
                    height="119"
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/90499/t-shirt_54038.jpeg"
                    alt="T-Shirt"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Unit </div>
              <div className="item-3-title">T-Shirt </div>
              <div className="item-3-price d-none"></div>
            </a>
          </div>
          <div className="item-3">
            <a title="Ceramic 240 ml Vintage Mug">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="131"
                    height="119"
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/694931/ceramic-240-ml-vintage-mug_33941.png"
                    alt="Ceramic 240 ml Vintage Mug"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq"></div>
              <div className="item-3-title">Ceramic 240 ml Vintage Mug </div>
              <div className="item-3-price d-none"></div>
            </a>
          </div>
          <div className="item-3">
            <a title="Men's Polo Shirt">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width="131"
                    height="119"
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696318/men39s-polo-shirt_59164.jpeg"
                    alt="Men's Polo Shirt"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 50 PCs </div>
              <div className="item-3-title">Men's Polo Shirt </div>
              <div className="item-3-price d-none"></div>
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

export default CarouselNum6
