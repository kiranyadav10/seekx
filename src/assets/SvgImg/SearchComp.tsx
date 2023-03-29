import React from "react";
import searchImg from "../../assets/searchImg.png";

const SearchComp = () => {
  return (
    <div>
      <div className="relative items-center">
        <img src={searchImg} alt="background" className="w-full" />
        <div className=" absolute top-44 left-80">
          <p className="text-3xl font-bold text-white text-center">
            Subscribe to get updates on exciting offers & deals
          </p>
          <div className="flex w-full justify-center align-middle">
            <input
              type="text"
              className="px-4 py-2 w-3/4 mt-4 bg-red-400 border-2 border-red-400 outline-none text-white "
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
