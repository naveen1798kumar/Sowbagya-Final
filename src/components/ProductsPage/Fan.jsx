import React, { useState } from "react";
import ProdCard from "./ProdCard";
import APopup from "./APopup";

import TS01 from "../../assets/FR/FAN/1.jpg";
import TS02 from "../../assets/FR/FAN/2.jpg";
import TS03 from "../../assets/FR/FAN/3.jpg";
import TS04 from "../../assets/FR/FAN/4.jpg";
import TS05 from "../../assets/FR/FAN/5.jpg";
import TS06 from "../../assets/FR/FAN/6.jpg";

const WM = [
  {
    name: "Orient Electric",
    size: "1200mm",
    des: "BEE Star Rated Ceiling Fan",
    image: TS01,
  },
  {
    name: "ACTIVA ORNET",
    size: "600mm",
    des: "Anti DUST Coating Ceiling Fan",
    image: TS02,
  },
  {
    name: "Bajaj Frore",
    size: "1200 mm",
    des: "Star Rated Ceiling Fan",
    image: TS03,
  },
  {
    name: "Polycab Aereo plus",
    size: "1200 mm",
    des: "High Speed Ceiling Fan |100% Copper Winding Motor",
    image: TS04,
  },
  {
    name: "Havells",
    size: "1200mm",
    des: "Ambrose ES Ceiling Fan",
    image: TS05,
  },
  {
    name: "Polycab Charisma Plus",
    size: "1200 mm",
    des: "High Speed Ceiling Fan",
    image: TS06,
  },
];

const Fan = () => {
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
            Ceiling Fans
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

export default Fan;
