import React, { Component } from "react"
// import "owl.carousel/dist/assets/owl.carousel.css"
// import "owl.carousel/dist/assets/owl.theme.default.css"
import dynamic from "next/dynamic"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

class Carousel1 extends Component {
  render() {
    return (
      <OwlCarousel
        className="suppliers_banner_slider owl-carousel owl-theme owl-loaded owl-drag"
        items={1}
        dots={false}
        loop
        nav={true}
        autoplay={false}
      >
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transition: "all 0s ease 0s",
              width: 2790
            }}
          >
            <div className="owl-item active" style={{ width: 930 }}>
              <div className="item overflow-hidden">
                <div
                  className="suppliers_banner_bg position-relative mt-5 mt-md-0"
                  style={{
                    backgroundImage: 'url("https://s101.abraacdn.com/files/3820944101.jpeg")'
                  }}
                >
                  <a href="Javascript:void(0);" className="position-absolute w-100 h-100" />
                  <div className="media py-4 py-md-0 d-block d-md-flex h-100 ml-md-3 ml-lg-5 pl-lg-2 align-items-center">
                    <div className="shipping_logo bg-white d-flex align-items-center position-relative">
                      <img
                        src="https://s101.abraacdn.com/files/6876145879.jpeg"
                        alt="Australian Luxuries Pty Ltd"
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="media-body suppliers_banner_text text-md-left pl-md-4 ml-md-3 mt-3 mt-md-n5 position-relative bg-layer">
                      <h1 className="text-theme supplier_main_headd bold_700 mt-lg-n55 px-3 px-md-0">
                        Australian Luxuries Pty Ltd{" "}
                      </h1>
                      <h3 className="text-theme supplier_main_headd_1 bold_400 px-3 px-md-0">
                        Australia - Sydney{" "}
                      </h3>
                      <p className="text-theme supplier_main_headd_2 bold_400 mt-2 px-3 px-md-0">
                        Member Since 16-Nov-2017{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 930 }}>
              <div className="item overflow-hidden">
                <div
                  className="suppliers_banner_bg position-relative mt-5 mt-md-0"
                  style={{
                    backgroundImage: 'url("https://s101.abraacdn.com/files/7211140914.jpeg")'
                  }}
                >
                  <a href="Javascript:void(0);" className="position-absolute w-100 h-100" />
                  <div className="media py-4 py-md-0 d-block d-md-flex h-100 ml-md-3 ml-lg-5 pl-lg-2 align-items-center">
                    <div className="shipping_logo bg-white d-flex align-items-center position-relative">
                      <img
                        src="https://s101.abraacdn.com/files/6876145879.jpeg"
                        alt="Australian Luxuries Pty Ltd"
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="media-body suppliers_banner_text text-md-left pl-md-4 ml-md-3 mt-3 mt-md-n5 position-relative bg-layer">
                      <h1 className="text-theme supplier_main_headd bold_700 mt-lg-n55 px-3 px-md-0">
                        Australian Luxuries Pty Ltd{" "}
                      </h1>
                      <h3 className="text-theme supplier_main_headd_1 bold_400 px-3 px-md-0">
                        Australia - Sydney{" "}
                      </h3>
                      <p className="text-theme supplier_main_headd_2 bold_400 mt-2 px-3 px-md-0">
                        Member Since 16-Nov-2017{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 930 }}>
              <div className="item overflow-hidden">
                <div
                  className="suppliers_banner_bg position-relative mt-5 mt-md-0"
                  style={{
                    backgroundImage: 'url("https://s101.abraacdn.com/files/2867239939.jpeg")'
                  }}
                >
                  <a href="Javascript:void(0);" className="position-absolute w-100 h-100" />
                  <div className="media py-4 py-md-0 d-block d-md-flex h-100 ml-md-3 ml-lg-5 pl-lg-2 align-items-center">
                    <div className="shipping_logo bg-white d-flex align-items-center position-relative">
                      <img
                        src="https://s101.abraacdn.com/files/6876145879.jpeg"
                        alt="Australian Luxuries Pty Ltd"
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <div className="media-body suppliers_banner_text text-md-left pl-md-4 ml-md-3 mt-3 mt-md-n5 position-relative bg-layer">
                      <h1 className="text-theme supplier_main_headd bold_700 mt-lg-n55 px-3 px-md-0">
                        Australian Luxuries Pty Ltd{" "}
                      </h1>
                      <h3 className="text-theme supplier_main_headd_1 bold_400 px-3 px-md-0">
                        Australia - Sydney{" "}
                      </h3>
                      <p className="text-theme supplier_main_headd_2 bold_400 mt-2 px-3 px-md-0">
                        Member Since 16-Nov-2017{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav">
          <button role="presentation" className="owl-prev">
            <i className="ri-arrow-left-s-line w-100 h-100 d-flex align-items-center justify-content-center" />
          </button>
          <button role="presentation" className="owl-next">
            <i className="ri-arrow-right-s-line d-flex align-items-center justify-content-center" />
          </button>
        </div>
      </OwlCarousel>
    )
  }
}

export default Carousel1
