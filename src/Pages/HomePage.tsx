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
import fashion from "../assets/fashion.jpg";
import banner3 from "../assets/banner3.png";
import DiscountCard from "../Component/DiscountCard";
import dia1 from "../assets/dia1.png";
import dia2 from "../assets/dia2.png";
import HalfCircleRight from "../Component/HalfCircle";
import HalfCircleLeft from "../Component/HalfCircleLeft";
import DayReturn from "../assets/SvgImg/DayReturn";
import QalPro from "../assets/SvgImg/QalPro";
import SafePay from "../assets/SvgImg/SafePay";
import HelpLine from "../assets/SvgImg/HelpLine";
import Policy from "../Component/HomePageSection/Policy";
import SearchComp from "../assets/SvgImg/SearchComp";

const HomePage = () => {
  console.log(
    " brandCardData?.find((data:any,idx:number)=> idx > 1)",
    brandCardData?.find((data: any, idx: number) => idx < 2)
  );
  return (
    <div className="flex flex-col gap-20 pb-5 overflow-hidden">
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
      <Fashion img={fashion} />
      <div className="flex flex-col gap-20 px-24 justify-center align-middle">
        <Divider divideName={"New Products"} />
        <FeatureProduct />
        <Divider divideName={"Best Selling Products"} />
        <FeatureProduct />
        <div className="flex w-full justify-center">
          <button className="w-40 h-12 text-white">VIEW ALL</button>
        </div>
        <AllBrandCard />
      </div>
      <Fashion img={banner3} />
      <div className="flex flex-col gap-20 px-24 w-full justify-center align-middle">
        <div className="flex gap-5 w-full justify-center">
          <DiscountCard img={dia1} discount={"85"} bgColor={"#CCCEA7"} />
          <DiscountCard img={dia2} discount={"75"} bgColor={"#D6BEBE"} />
        </div>
      </div>
      <Policy />
      <div className="flex flex-col gap-20 px-24 w-full justify-center align-middle">
        <SearchComp />
      </div>
    </div>
  );
};

export default HomePage;
