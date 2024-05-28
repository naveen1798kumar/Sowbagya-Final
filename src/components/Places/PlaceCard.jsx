import React from "react";
import { IoLocationSharp } from "react-icons/io5";


const PlaceCard = ({ img, title, location, price, type, handleOrderPopup }) => {
  return (
    <>
      <div
        className="shadow-xl transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden bg-[#FFFFFF] ">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-contain transition duration-700 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <div className="flex items-center justify-between">
            <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            {/* <IoLocationSharp /> */}
            <span>{location}</span>
          </div>
          </div>
          
          {/* <p className="line-clamp-2">{description}</p> */}
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            {/* <div>
              <p className="text-2xl font-bold">${price}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
