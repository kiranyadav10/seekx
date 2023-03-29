import { stringToColour } from "./Healper/HeplerFun";

const AllBrandCardComp = (props: any) => {
  const { brandName, img } = props;
  return (
    <div
      style={{ background: stringToColour(brandName), width: "95%" }}
      className="min-h-max max-h-96 h-96  min-w-fit relative overflow-hidden"
    >
      <img
        className="absolute inset-0 h-full w-fit object-cover"
        src={img}
        alt="img"
      />
      <div className="absolute inset-x-0 inset-y-80 bg-slate-500 h-5 mt-2 backdrop-blur-md bottom-0 opacity-90  justify-center align-middle text-center">
        <div className="px-6 py-4 bg-gray-400 align-middle text-center w-full">
          <span className="text-sm w-full font-semibold text-white text-center capitalize">
            {brandName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllBrandCardComp;
