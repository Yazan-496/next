import React, { Component } from "react"
import LazyLoad from "react-lazy-load"
// import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css"
import dynamic from "next/dynamic"
import Image from "next/image"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

class CarouselNum2 extends Component {
  render() {
    const src =
      "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
    return (
      <>
        <OwlCarousel
          className="main-categories-list owl-carousel"
          items={5}
          dots={false}
          loop
          nav={true}
          autoplay={false}
        >
          <div style={{ display: "flex" }} className="main-category" data-id={1054}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/mobile-phones-tablets"
                  title="Wholesale Mobile Phones & Tablets"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <Image
                    width="225px"
                    height="170"
                    src="https://s101.abraacdn.com/files/mobile-phones-tablets.png"
                    alt="Mobile Phones & Tablets"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a
                      href="javascript:void(0)"
                      title="Wholesale Mobile Phones & Tablets"
                      className="product_link"
                    >
                      Mobile Phones &amp; Tablets
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={1133}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/laptops-computers"
                  title="Wholesale Laptops & Computers"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <Image
                    width="225px"
                    height="170"
                    src="https://s101.abraacdn.com/files/laptops-computers.png"
                    alt="Laptops & Computers"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a
                      href="javascript:void(0)"
                      title="Wholesale Laptops & Computers"
                      className="product_link"
                    >
                      Laptops &amp; Computers
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={1636}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/electronics"
                  title="Wholesale Electronics"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <Image
                    width="225px"
                    height="170"
                    src="https://s101.abraacdn.com/files/electronics.png"
                    alt="Electronics"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a href="javascript:void(0)" title="Wholesale Electronics" className="product_link">
                      Electronics
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={2304}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/agriculture"
                  title="Wholesale Agriculture"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <Image
                    width="225px"
                    height="170"
                    src="https://s101.abraacdn.com/files/agriculture.png"
                    alt="Agriculture"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a href="javascript:void(0)" title="Wholesale Agriculture" className="product_link">
                      Agriculture
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={2305}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/industrial-construction"
                  title="Wholesale Industrial & Construction"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <Image
                    width="225px"
                    height="170"
                    src="https://s101.abraacdn.com/files/industrial-construction.png"
                    alt="Industrial & Construction"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a
                      href="javascript:void(0)"
                      title="Wholesale Industrial & Construction"
                      className="product_link"
                    >
                      Industrial &amp; Construction
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={2313}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/electricals"
                  title="Wholesale Electricals"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <LazyLoad>
                    <Image
                      width="225px"
                      height="170"
                      src="https://s101.abraacdn.com/files/electricals.png"
                      alt="Electricals"
                      className="img-fluid"
                    />
                  </LazyLoad>
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a href="javascript:void(0)" title="Wholesale Electricals" className="product_link">
                      Electricals
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={5370}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/packaging-advertising"
                  title="Wholesale Packaging & Advertising"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <LazyLoad>
                    <Image
                      width="225px"
                      height="170"
                      src="https://s101.abraacdn.com/files/packaging-advertising.png"
                      alt="Packaging & Advertising"
                      className="img-fluid"
                    />
                  </LazyLoad>
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a
                      href="javascript:void(0)"
                      title="Wholesale Packaging & Advertising"
                      className="product_link"
                    >
                      Packaging &amp; Advertising
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={5492}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/hospitality"
                  title="Wholesale Hospitality"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <LazyLoad>
                    <Image
                      width="225px"
                      height="170"
                      src="https://s101.abraacdn.com/files/hospitality.png"
                      alt="Hospitality"
                      className="img-fluid"
                    />
                  </LazyLoad>
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a href="javascript:void(0)" title="Wholesale Hospitality" className="product_link">
                      Hospitality
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={5534}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/health-beauty"
                  title="Wholesale Health & Beauty"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <LazyLoad>
                    <Image
                      width="225px"
                      height="170"
                      src="https://s101.abraacdn.com/files/health-beauty.png"
                      alt="Health & Beauty"
                      className="img-fluid"
                    />
                  </LazyLoad>
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a href="javascript:void(0)" title="Wholesale Health & Beauty" className="product_link">
                      Health &amp; Beauty
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={5733}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/safety-security"
                  title="Wholesale Safety & Security"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <LazyLoad>
                    <Image
                      width="225px"
                      height="170"
                      src="https://s101.abraacdn.com/files/safety-security.png"
                      alt="Safety & Security"
                      className="img-fluid"
                    />
                  </LazyLoad>
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a href="javascript:void(0)" title="Wholesale Safety & Security" className="product_link">
                      Safety &amp; Security
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="main-category" data-id={5952}>
            <div className="product_content">
              <div style={{ width: "237px" }} className="position-relative">
                <a
                  href="category/apparels-textiles-accessories"
                  title="Wholesale Apparels, Textiles & Accessories"
                  className="product_img img-border d-block position-relative overflow-hidden"
                >
                  <LazyLoad>
                    <Image
                      width="225px"
                      height="170"
                      src="https://s101.abraacdn.com/files/apparels-textiles-accessories.png"
                      alt="Apparels, Textiles & Accessories"
                      className="img-fluid"
                    />
                  </LazyLoad>
                </a>
              </div>
              <div className="produc_content">
                <div className="produc_title text-center">
                  <h3 className="main_category_count">Wholesale</h3>
                  <h2>
                    <a
                      href="javascript:void(0)"
                      title="Wholesale Apparels, Textiles & Accessories"
                      className="product_link"
                    >
                      Apparels, Textiles &amp; Accessories
                    </a>
                  </h2>
                  <h3 className="main_category_count" style={{ display: "none" }}>
                    Products
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-nav"></div>
        </OwlCarousel>
      </>
    )
  }
}

export default CarouselNum2
