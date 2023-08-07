import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg from "@assets/banner.png";

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
    { image: BannerImg },
    { image: BannerImg },
    { image: BannerImg },
    { image: BannerImg },
    { image: BannerImg },
  ];

  return (
    <div className="lg:w-full lg:mx-auto xl:w-full xl:mx-auto">
      <Carousel {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              className="w-full"
              src={banner.image}
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
