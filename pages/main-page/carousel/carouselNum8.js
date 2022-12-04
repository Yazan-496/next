import React, { Component } from "react"
// import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css"
import Image from "next/image"
import LazyLoad from "react-lazy-load"
import dynamic from "next/dynamic"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

class CarouselNum8 extends Component {
  render() {
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
          <div className="item-3 text-center">
            <a title="Bangs Organic Ginger Shot with Orange,Carrot and Ginger">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width={140}
                    height={140}
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png"
                    alt="Bangs Organic Ginger Shot with Orange,Carrot and Ginger"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Carton</div>
              <div className="item-3-title">Bangs Organic Ginger Shot ...</div>
              <div className="item-3-price">/ Carton</div>
            </a>
          </div>
          <div className="item-3 text-center">
            <a title="Organic Extra Virgin Palestinian Olive oil">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width={140}
                    height={140}
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg"
                    alt="Organic Extra Virgin Palestinian Olive oil"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Carton</div>
              <div className="item-3-title">Organic Extra Virgin ...</div>
              <div className="item-3-price">/ Carton</div>
            </a>
          </div>
          <div className="item-3 text-center">
            <a title="Brumi Choco Cereals 500 G">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width={140}
                    height={140}
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696192/brumi-choco-cereals-500-g_53621.png"
                    alt="Brumi Choco Cereals 500 G"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Carton</div>
              <div className="item-3-title">Brumi Choco Cereals 500 G</div>
              <div className="item-3-price">/ Carton</div>
            </a>
          </div>
          <div className="item-3 text-center">
            <a title="Bangs Organic Ginger Shot with Orange,Carrot and Ginger">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width={140}
                    height={140}
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png"
                    alt="Bangs Organic Ginger Shot with Orange,Carrot and Ginger"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Carton</div>
              <div className="item-3-title">Bangs Organic Ginger Shot ...</div>
              <div className="item-3-price">/ Carton</div>
            </a>
          </div>
          <div className="item-3 text-center">
            <a title="Organic Extra Virgin Palestinian Olive oil">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width={140}
                    height={140}
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg"
                    alt="Organic Extra Virgin Palestinian Olive oil"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Carton</div>
              <div className="item-3-title">Organic Extra Virgin ...</div>
              <div className="item-3-price">/ Carton</div>
            </a>
          </div>
          <div className="item-3 text-center">
            <a title="Brumi Choco Cereals 500 G">
              <div className="item-3-image">
                <LazyLoad>
                  <Image
                    unoptimized="true"
                    width={140}
                    height={140}
                    src="https://s101.abraacdn.com/thumbs/small/uploads/product/696192/brumi-choco-cereals-500-g_53621.png"
                    alt="Brumi Choco Cereals 500 G"
                  />
                </LazyLoad>
              </div>
              <div className="item-2-mq">MOQ 1 Carton</div>
              <div className="item-3-title">Brumi Choco Cereals 500 G</div>
              <div className="item-3-price">/ Carton</div>
            </a>
          </div>
          <div className="owl-nav"></div>
        </OwlCarousel>
      </>
    )
  }
}

export default CarouselNum8
