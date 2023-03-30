import AddToCart from "../assets/SvgImg/AddToCart";
import CardLike from "../assets/SvgImg/CardLike";
import Share from "../assets/SvgImg/Share";
import { SizeArr } from "../Data";
import CardActivity from "./CardActivity";

const ProductCrad = (props: any) => {
  const { name, nameLineSec, price, actualPrice, img } = props;
  return (
    <div className="flex flex-col">
      <div className="h-96 sm:w-48 md:w-64 lg:w-72 min-w-fit  relative overflow-hidden">
        <img
          className="absolute inset-0 h-full w-fit object-cover"
          src={img}
          alt="Room Image"
        />
        <div className="absolute inset-0 w-64 bg-gray-300 opacity-0 hover:backdrop-opacity-10 hover:opacity-90">
          <div className="absolute bottom-36 left-16 flex flex-row gap-2">
            <CardActivity image={<AddToCart />} />
            <CardActivity image={<CardLike />} />
            <CardActivity image={<Share />} />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 justify-center align-middle justify-items-center">
        <h3 className="text-base font-semibold text-center">
          {name} <br />
          {nameLineSec}
        </h3>
        <h4 className="text-2xl font-bold text-center">
          <h6>
            {price}
            <span className="text-decoration-underline text-lg font-semibold line-through text-red-600 pl-2">
              {actualPrice}
            </span>
          </h6>
        </h4>
        <div className="flex flex-row mt-4 justify-center">
          {SizeArr?.map((size: any, idx: number) => {
            return (
              <div
                key={idx}
                className="flex justify-center align-middle h-8 w-8 mr-2 border-2 border-gray-400"
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCrad;
