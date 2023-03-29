import React from "react";

const HalfCircleRight = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div
        style={{ background: "#770015" }}
        className="h-24 w-40 absolute right-0 -mr-8
                rounded-tl-full rounded-tr-full -rotate-90"
      ></div>
    </div>
  );
};

export default HalfCircleRight;
