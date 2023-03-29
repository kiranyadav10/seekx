import React from "react";

const HalfCircleLeft = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div
        style={{ background: "#770015" }}
        className="h-24 w-40 absolute left-0 -ml-8 -mt-36
              rounded-tl-full rounded-tr-full rotate-90"
      ></div>
    </div>
  );
};

export default HalfCircleLeft;
