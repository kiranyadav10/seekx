import React from "react";
import bannerImg from "../assets/bannerImg.png"

const Banner = () => {
  return (
    <div className="relative">
    <img
      className="w-full h-fit object-cover object-center"
      src={bannerImg}
      alt="Banner"
    />
  </div>
  );
};

export default Banner;
