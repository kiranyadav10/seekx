import React from "react";
import DayReturn from "../../assets/SvgImg/DayReturn";
import HelpLine from "../../assets/SvgImg/HelpLine";
import QalPro from "../../assets/SvgImg/QalPro";
import SafePay from "../../assets/SvgImg/SafePay";
import HalfCircleRight from "../HalfCircle";
import HalfCircleLeft from "../HalfCircleLeft";

const Policy = () => {
  return (
    <>
      <HalfCircleRight />
      <div
        className="xs:h-32 sm:h-36 md:h-40 lg:h-48 w-full justify-center align-middle -mt-20 p-5"
        style={{ background: "#F5F4F2" }}
      >
        <div className="grid grid-cols-4 divide-x  divide-red-300 justify-center align-middle h-full">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DayReturn />
            <span className="leading-4 sm:text-xs text-center">
              7 Days Return
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QalPro />
            <span className="leading-4 sm:text-xs text-center">
              Quality Products
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SafePay />
            <span className="leading-4 sm:text-xs text-center">
              Safe Payment
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HelpLine />
            <span className="leading-4 sm:text-xs text-center">
              24x7 Helpline
            </span>
          </div>
        </div>
      </div>
      <HalfCircleLeft />
    </>
  );
};

export default Policy;
