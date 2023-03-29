import React from "react";

const Divider = (props:any) => {
  const {divideName} = props
  return (
    <div className="flex align-middle justify-center justify-items-center">
        <div style={{height:'1px'}} className=" bg-gray-500 w-full">
        </div>
        <span className="w-1/2 text-center -mt-3 font-bold text-2xl">{divideName}</span>
        <div style={{height:'1px'}} className=" bg-gray-500 w-full">
        </div>
    </div>
  );
};

export default Divider;
