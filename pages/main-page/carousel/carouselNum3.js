import React, { Component } from "react"
// import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css"
import Image from "next/image"
import LazyLoad from "react-lazy-load"
import dynamic from "next/dynamic"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

class CarouselNum3 extends Component {
  render() {
    const src =
      "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
    return (
      <>
        <OwlCarousel
          className="rfqs-list owl-carousel"
          items={3}
          dots={false}
          loop
          nav={true}
          autoplay={true}
        >
          <div className="rfq-block">
            <a title="Samsung Galaxy Tablets ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">Samsung Galaxy Tab ...</div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="Wireless earphone ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">Wireless earphone </div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="2D iphone sublimation phone case ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">2D iphone sublimat ...</div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="Galaxy Tab A7 WiFi (SM-T500) - SM-T500NZAAXSG ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">Galaxy Tab A7 WiFi ...</div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="Galaxy samsung s9 ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">Galaxy samsung s9 </div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="5 pcs iphone ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">5 pcs iphone </div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="Mobile accessories ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">Mobile accessories </div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="User iPhones ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">User iPhones </div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="F20 or T500 smart watch ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">F20 or T500 smart ...</div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="rfq-block">
            <a title="Iwatchz nano clip band grayclr chr22gry ">
              <div className="media">
                <div className="clearfix mb-2">
                  <div className="float-left mr-3">
                    <div className="rfq-title">Iwatchz nano clip ...</div>
                  </div>
                  <div className="float-right">
                    <div className="rfq-tag">New</div>
                  </div>
                </div>
                <div className="rfq-footer d-flex">
                  <LazyLoad>
                    <Image
                      src="https://s101.abraacdn.com/files/ae.png"
                      alt="ae Flag"
                      className="img-responsive"
                    />
                  </LazyLoad>
                  <h4 className="pl-2">Buyer From UAE </h4>
                </div>
              </div>
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

export default CarouselNum3
