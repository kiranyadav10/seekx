import React from "react";

const CardActivity = ({image}:any) => {
  return (
    <div className="rounded-full w-10 h-10 pl-2 pt-2 flex bg-white cursor-pointer">
    {image}
    </div>
  );
};

export default CardActivity;
