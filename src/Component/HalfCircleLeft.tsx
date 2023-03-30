import React from "react";

const HalfCircleLeft = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div
        style={{ background: "#770015" }}
        className="xs:h-10 sm:h-14 md:h-16 lg:h-24 xs:w-20 sm:w-20 md:w-32 lg:w-40  absolute left-0 -ml-8 -mt-36
              rounded-tl-full rounded-tr-full rotate-90"
      ></div>
    </div>
  );
};

export default HalfCircleLeft;
