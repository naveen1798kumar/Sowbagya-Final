import React, { useState } from "react";
import ProdCard from "./ProdCard";
import APopup from "./APopup";

import TS01 from "../../assets/FR/WASHING MACHINE/1.jpg";
import TS02 from "../../assets/FR/WASHING MACHINE/2.jpg";
import TS03 from "../../assets/FR/WASHING MACHINE/3.jpg";
import TS04 from "../../assets/FR/WASHING MACHINE/4.jpg";
import TS05 from "../../assets/FR/WASHING MACHINE/5.jpg";
import TS06 from "../../assets/FR/WASHING MACHINE/6.jpg";
import TS07 from "../../assets/FR/WASHING MACHINE/7.jpg";
import TS08 from "../../assets/FR/WASHING MACHINE/8.jpg";
import TS09 from "../../assets/FR/WASHING MACHINE/9.jpg";
import TS10 from "../../assets/FR/WASHING MACHINE/10.jpg";

const WM = [
  {
    name: "Whirlpool",
    size: "7 Kg",
    des: "Front Load Washing Machine with In-Built Heater",
    image: TS01,
  },
  {
    name: "Goorej",
    size: "7 Kg",
    des: "Automatic Top Load Washing Machine",
    image: TS02,
  },
  {
    name: "Voltas beko",
    size: "9 kg",
    des: "Semi-Automatic Twin Tub Top Load Washing Machine",
    image: TS03,
  },
  {
    name: "Onida",
    size: "6.5 kg",
    des: "Top Load Washer Only",
    image: TS04,
  },
  {
    name: "IFB",
    size: "7 Kg",
    des: "Fully Automatic Front Load Washing Machine",
    image: TS05,
  },
  {
    name: "Samsung",
    size: "7.5 kg",
    des: "5 Star Semi Automatic Top Load Washing Machine",
    image: TS06,
  },
  {
    name: "Haier",
    size: "9.5 Kg",
    des: "Semi-Automatic Top Load Washing Machine",
    image: TS07,
  },
  {
    name: "Whirlpool",
    size: "7.5 Kg",
    des: "Fully-Automatic Top Load Washing Machine",
    image: TS08,
  },
  {
    name: "Whirlpool",
    size: "6.5 Kg",
    des: "Royal Fully-Automatic Top Loading Washing Machine",
    image: TS09,
  },
];

const WashMash = () => {
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
            Washing Machine
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {WM.map((item) => (
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

export default WashMash;
