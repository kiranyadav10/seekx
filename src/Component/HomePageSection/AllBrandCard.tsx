import React from "react";
import product1 from "../../assets/Products/product1.png";
import { AllBrandCardData } from "../../Data";
import AllBrandCardComp from "../AllBrandCardCom";

const AllBrandCard = () => {
  return (
    <div className="sm:hidden md:grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-10 py-50 gap-y-10 justify-center align-middle">
      {AllBrandCardData?.map((data: any, id: number) => {
        return (
          <AllBrandCardComp
            key={id}
            brandName={data?.brandName}
            img={data?.img}
          />
        );
      })}
    </div>
  );
};

export default AllBrandCard;
