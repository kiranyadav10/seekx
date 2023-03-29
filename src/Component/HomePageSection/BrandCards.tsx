import React from "react";
import { brandCardData } from "../../Data";
import BrandCard from "../ReusableCom/BrandCard";

const BrandCards = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-2 grid-rows-1 gap-x-8 py-5">
        {brandCardData.slice(0, 2).map((data: any, id: number) => {
          return (
            <BrandCard
              title={data?.title}
              tag={data?.tag}
              key={id}
              src={data?.src}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-x-8 py-5">
        <BrandCard
          title={brandCardData[2]?.title}
          tag={brandCardData[2]?.tag}
          src={brandCardData[2]?.src}
        />
        <BrandCard
          title={brandCardData[3]?.title}
          tag={brandCardData[3]?.tag}
          src={brandCardData[3]?.src}
        />
        <BrandCard
          title={brandCardData[4]?.title}
          tag={brandCardData[4]?.tag}
          src={brandCardData[4]?.src}
          reverse
        />
      </div>
    </div>
  );
};

export default BrandCards;
