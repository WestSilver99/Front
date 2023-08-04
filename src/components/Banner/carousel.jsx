import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "@assets/1.jpg";
import Banner2 from "@assets/2.jpg";
import Banner3 from "@assets/3.jpg";
import Banner4 from "@assets/4.jpg";
import Banner5 from "@assets/5.jpg";

const Banner = () => {
  const settings = {
    autoPlay: false,
    interval: 3000,
    showArrows: true,
    showIndicators: false,
    infiniteLoop: false,
    showStatus: false,
    showThumbs: false,
    transitionTime: 500,
    centerSlidePercentage: true,
  };

  return (
    <div className="lg:w-full lg:mx-auto xl:w-full xl:mx-auto">
      <Carousel {...settings}>
        <div>
          <img src={Banner1} alt="Banner 1" />
          <p className="text-red-500 font-bold z-50  absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-3xl lg:text-3xl sm:text-2xl md:text-2xl">
            함꼐하는 등산라이프
          </p>
        </div>
        <div>
          <img src={Banner2} alt="Banner 2" />
          <p className="text-red-500 font-bold z-50  absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-3xl lg:text-3xl sm:text-2xl md:text-2xl">
            함꼐하는 등산라이프
          </p>
        </div>
        <div>
          <img src={Banner3} alt="Banner 3" />
          <p className="text-red-500 font-bold z-50  absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-3xl lg:text-3xl sm:text-2xl md:text-2xl">
            함꼐하는 등산라이프
          </p>
        </div>
        <div>
          <img src={Banner4} alt="Banner 4" />
          <p className="text-red-500 font-bold z-50  absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-3xl lg:text-3xl sm:text-2xl md:text-2xl">
            함꼐하는 등산라이프
          </p>
        </div>
        <div>
          <img src={Banner5} alt="Banner 5" />
          <p className="text-red-500 font-bold z-50  absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-3xl lg:text-3xl sm:text-2xl md:text-2xl">
            함꼐하는 등산라이프
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
