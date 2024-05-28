import React from "react";

const ProdCard = ({ image, name, des, size }) => {
  return (
    <>
        <div className="shadow-xl p-2 transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg border border-gray-300">
          <div className="overflow-hidden bg-[#FFFFFF]">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-center transition duration-700 hover:scale-110"
            />
          </div>

          <div className="flex items-center justify-around space-y-2 py-3 flex-col lg:flex-row">
          <div className="flex items-center justify-between">
            {/* <h1 className="line-clamp-1 px-3 py-1 rounded-full bg-[#00BAC2]  font-bold text-xl">{name}</h1> */}
          </div>
          <div>
              <p className="text-xl ">{size}</p>
              {/* <p className="text-xl ">{des}</p> */}
            </div>
            </div>
        </div>
    </>
  );
};

export default ProdCard;