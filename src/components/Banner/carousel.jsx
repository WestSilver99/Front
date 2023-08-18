import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg1 from "@assets/banner1.png";
import BannerImg2 from "@assets/banner2.jpg";
import BannerImg3 from "@assets/banner3.jpg";
import BannerImg4 from "@assets/banner4.jpg";

const Banner = () => {
  const settings = {
    autoPlay: true,
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
    { image: BannerImg1 },
    { image: BannerImg2 },
    { image: BannerImg3 },
    { image: BannerImg4 },
  ];

  return (
    <div className="w-full">
      <Carousel {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              className="w-full xl:h-[650px] lg:h-[650px] md:h-[450px] sm:h-[250px]"
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
