import React from "react";
import Banner from "../Component/Banner";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import CategoryCard from "../Component/ReusableCom/CategoryCard";
import bannerImg from "../assets/bannerImg.png";
import { brandCardData, DataArr, trendingTshirts } from "../Data";
import BrandCard from "../Component/ReusableCom/BrandCard";
import Divider from "../Component/ReusableCom/Divider";
import ProductCrad from "../Component/ProductCrad";
import { CatCards } from "../Component/HomePageSection/CatCards";
import BrandCards from "../Component/HomePageSection/BrandCards";
import TrendingTshirts from "../Component/HomePageSection/TrendingTshirts";
import Fashion from "../Component/Fashion";
import FeatureProduct from "../Component/HomePageSection/FeatureProduct";
import AllBrandCard from "../Component/HomePageSection/AllBrandCard";

const HomePage = () => {
  console.log(
    " brandCardData?.find((data:any,idx:number)=> idx > 1)",
    brandCardData?.find((data: any, idx: number) => idx < 2)
  );
  return (
    <div className="flex flex-col gap-20 pb-5">
      <Banner />
      <div>
        <CatCards />
        <div className="flex flex-col gap-20 px-24 justify-center align-middle">
          <BrandCards />
          <Divider divideName={"Trending T-Shirts"} />
          <TrendingTshirts />
          <div className="flex w-full justify-center">
            <button className="w-40 h-12 text-white">VIEW ALL</button>
          </div>

          <Divider divideName={"Featured Products"} />
          <FeatureProduct />
        </div>
      </div>
      <Fashion />
      <div className="flex flex-col gap-20 px-24 justify-center align-middle">
        <Divider divideName={"New Products"} />
        <FeatureProduct />
        <Divider divideName={"Best Selling Products"} />
        <FeatureProduct />
        <div className="flex w-full justify-center">
          <button className="w-40 h-12 text-white">VIEW ALL</button>
        </div>
        <AllBrandCard/>
      </div>
    </div>
  );
};

export default HomePage;
