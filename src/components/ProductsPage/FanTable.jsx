import React, { useState } from "react";
import ProdCard from "./ProdCard";
import APopup from "./APopup";

import TS01 from "../../assets/FR/TABLE FAN/1.jpg";
import TS02 from "../../assets/FR/TABLE FAN/2.jpg";
import TS03 from "../../assets/FR/TABLE FAN/3.jpg";
import TS04 from "../../assets/FR/TABLE FAN/4.jpg";
import TS05 from "../../assets/FR/TABLE FAN/5.jpg";
import TS06 from "../../assets/FR/TABLE FAN/6.jpg";
import TS07 from "../../assets/FR/TABLE FAN/7.jpg";
import TS08 from "../../assets/FR/TABLE FAN/11.jpg";
import TS09 from "../../assets/FR/TABLE FAN/12.jpg";
import TS10 from "../../assets/FR/WALL/2.jpg";
import TS11 from "../../assets/FR/WALL/5.jpg";
import TS12 from "../../assets/FR/WALL/6.jpg";

const TFN = [
  {
    name: "Crompton",
    size: "400 mm",
    des: "HighSpeed Torpedo Table Fan",
    image: TS01,
  },
  {
    name: "V-Guard",
    size: "1350 RPM",
    des: "Powerful Motor | Corrosion Resistant",
    image: TS02,
  },
  {
    name: "USHA Maxx Air Ultra",
    size: "400MM",
    des: "Table Fan (Maroon)",
    image: TS03,
  },
  {
    name: "Onida",
    size: "6.5 kg",
    des: "Top Load Washer Only",
    image: TS04,
  },
  {
    name: "RR Signature",
    size: "230 mm",
    des: "Buddy Hush Silent Compact and Portable",
    image: TS05,
  },
  {
    name: "UN1QUE",
    size: "USB Table Fan",
    des: "Mini Portable Fan Battery Operated, 6 Inch Powerful USB Table Fan",
    image: TS06,
  },
  {
    name: "Amazon Basics",
    size: "400 mm",
    des: "2-In-1 Bldc Pedestal Fan With Remote Control",
    image: TS07,
  },
  {
    name: "VARSHINE",
    size: "9 Inch",
    des: "Mini Table Fan with 100% Copper Motor",
    image: TS08,
  },
  {
    name: "Geek Aire",
    size: "2600 mAh Battery",
    des: "GF2 Portable Fan | 1 Year Warranty",
    image: TS09,
  },
  {
    name: "Havells Gatik Neo",
    size: "400mm",
    des: "Wall Mounted Fan",
    image: TS10,
  },
  {
    name: "V-Guard Esfera",
    size: "SW N",
    des: "Wall Mount Fan For Bedroom",
    image: TS11,
  },
  {
    name: "Atomberg Renesa",
    size: "400mm",
    des: "Wall Mounded | Remote with Timer",
    image: TS12,
  },
];

const TablFan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="dark:bg-gray-900 dark:text-white py-5 pb-14">
        <section data-aos="fade-up" className="container">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Table Fan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TFN.map((item) => (
              <div key={item.name} onClick={() => handleCardClick(item)}>
                <ProdCard {...item} />
              </div>
            ))}
          </div>
        </section>
      </div>
      {selectedProduct && (
        <APopup
          isOpen={isOpen}
          onClose={handleClose}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default TablFan;
