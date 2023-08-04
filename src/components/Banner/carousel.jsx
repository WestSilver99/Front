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
  const banners = [
    { image: Banner1, text: "함꼐하는 등산라이프" },
    { image: Banner2, text: "함꼐하는 등산라이프" },
    { image: Banner3, text: "함꼐하는 등산라이프" },
    { image: Banner4, text: "함꼐하는 등산라이프" },
    { image: Banner5, text: "함꼐하는 등산라이프" },
  ];

  return (
    <div className="lg:w-full lg:mx-auto xl:w-full xl:mx-auto">
      <Carousel {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner.image} alt={`Banner ${index + 1}`} />
            <p className="text-red-500 font-bold z-50 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-3xl lg:text-3xl sm:text-2xl md:text-2xl">
              {banner.text}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
