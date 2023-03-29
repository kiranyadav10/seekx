import React from "react";
import { stringToColour } from "../Healper/HeplerFun";

const CategoryCard = (props: ICategoryCard) => {
  const { name, src } = props;

  return (
    <div
      className={`flex flex-col items-center pb-10 bg-${stringToColour(name)}`}
    >
      <div
        className="w-44 h-44 rounded-full shadow-lg"
        style={{ background: stringToColour(name) }}
      >
        <img
          className=" w-44 h-44"
          src={src}
          alt={name}
        />
      </div>

      <h5 className="mb-1 text-xl font-medium text-gray-90">{name}</h5>
    </div>
  );
};

export default CategoryCard;

interface ICategoryCard {
  name: string;
  src: string;
}
