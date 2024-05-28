import React from "react";

const ProdCard = ({ image, name, des, size }) => {
  return (
    <>
        <div className="shadow-xl p-2 transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg border border-gray-300">
          <div className="overflow-hidden bg-[#FFFFFF]">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-contain transition duration-700 hover:scale-110"
            />
          </div>

          <div className="flex items-center justify-around space-y-2 py-3 flex-col lg:flex-row">
          <div className="flex items-center justify-between">
            <h1 className="line-clamp-1 font-bold text-xl">{name}</h1>
          </div>
          <div>
              <p className="flex items-center gap-2 opacity-70">{size}</p>
            </div>
            </div>
            <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            {/* <div className="opacity-80">
              <p>{des}</p>
            </div> */}
            
          </div>
        </div>
    </>
  );
};

export default ProdCard;