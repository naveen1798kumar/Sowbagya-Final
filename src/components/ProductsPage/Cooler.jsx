import React, { useState } from "react";
import ProdCard from "./ProdCard";
import APopup from "./APopup";

import TS01 from "../../assets/FR/COOLER/1.jpg";
import TS02 from "../../assets/FR/COOLER/2.jpg";
import TS03 from "../../assets/FR/COOLER/3.jpg";
import TS04 from "../../assets/FR/COOLER/4.jpg";
import TS05 from "../../assets/FR/COOLER/5.jpg";
import TS06 from "../../assets/FR/COOLER/6.jpg";
import TS07 from "../../assets/FR/COOLER/7.jpg";
import TS08 from "../../assets/FR/COOLER/8.jpg";
import TS09 from "../../assets/FR/COOLER/9.jpg";

const FRG = [
  {
    name: "Crompton Ozone",
    size: "88 L",
    des: "Desert Air Cooler for home",
    image: TS01,
  },
  {
    name: "Orient",
    size: "52 L",
    des: "Electric Tornado Desert Air Cooler",
    image: TS02,
  },
  {
    name: "HAVAI",
    size: "20 L",
    des: "Bullet Tower Air Cooler",
    image: TS03,
  },
  {
    name: "Bajaj ",
    size: "36 L",
    des: "Torque New Personal Air Cooler",
    image: TS04,
  },
  {
    name: "Havells",
    size: "51 L",
    des: "Koolaire 2 Knobs Air Cooler",
    image: TS05,
  },
  {
    name: "Havells Altima",
    size: "70 L",
    des: "Desert Air Cooler for home",
    image: TS06,
  },
  {
    name: "Havells Freddo-i",
    size: "70 L",
    des: "Electronic Panel with Remote",
    image: TS07,
  },
  {
    name: "Hindware",
    size: "87 L",
    des: "Zetacool Personal Air cooler",
    image: TS08,
  },
  {
    name: "Symphony Air Cooler",
    size: "56 L",
    des: "---",
    image: TS09,
  },
];

const Coolers = () => {
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
        <section data-aos="fade-up" className="container ">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Air Coolers & Cooling Towers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {FRG.map((item) => (
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

export default Coolers;
