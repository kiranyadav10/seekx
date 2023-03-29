import React from "react";

const DiscountCard = (props: any) => {
  const { img,discount,bgColor} = props;
  return (
    <div className="flex flex-col items-center pb-9 w-96 max-h-max h-full p-10" style={{background:bgColor ? bgColor :"pink"}}>
      <img className="w-40 h-40 mb-10" src={img} alt="Bonnie image" />
      <h5 className="mb-3 text-2xl text-gray-900 font-semibold">Hurry Up!</h5>
      <h1 className="text-5xl text-gray-900 font-bold mb-6">{discount}% OFF</h1>
      <h5 className="mb-3 text-2xl text-gray-900 font-semibold">Sale</h5>
      <div className="flex mt-3 space-x-3">
        <button className="bg-transparent border-2 px-8 text-white border-white">SHOP NOW</button>
      </div>
    </div>
  );
};

export default DiscountCard;
