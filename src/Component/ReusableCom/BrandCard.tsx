import React from "react";
import { stringToColour } from "../Healper/HeplerFun";

const BrandCard = (props: any) => {
  const { src, title, tag,reverse } = props;
  return (
    <div
      style={{ background: stringToColour(title), display:'flex',flexDirection:reverse ? 'row-reverse' :"row"}}
      className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest"
    >
      {src ? <img className="w-1/2 h-full" src={src} alt="Room Image" /> : <div className="w-1/4"></div>}

      <div className="w-auto flex flex-col justify-center align-middle">
        <h3 className="text-center text-3xl font-semibold">{title}</h3>
        <div className="align-middle justify-items-center bg-black mx-10 px-2">
            {
                src ?<h5 className="text-center text-xs uppercase text-white">{tag}</h5> :
                <h5 className="text-center text-base uppercase text-white">{tag}</h5>
            }
          
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
