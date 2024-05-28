import React, { useState } from "react";
import ProdCard from "./ProdCard";
import APopup from "./APopup";

import TS01 from "../../assets/FR/GAS STOVE/2.jpg";
import TS02 from "../../assets/FR/GAS STOVE/5.jpg";
import TS03 from "../../assets/FR/GAS STOVE/6.jpg";
import TS04 from "../../assets/FR/GAS STOVE/10.jpg";

import INST1 from "../../assets/FR/INDUCTION/2.jpg";
import INST2 from "../../assets/FR/INDUCTION/3.jpg";
import INST3 from "../../assets/FR/INDUCTION/4.jpg";
import INST4 from "../../assets/FR/INDUCTION/6.jpg";

const STV = [
  {
    name: "Bajaj Ucx",
    size: "2 Burners",
    des: "2B Powder Coated Glasstop Gas Stove",
    image: TS01,
  },
  {
    name: "Pigeon",
    size: "3 Burner",
    des: "Aster Gas Stove with High Powered Brass Burner",
    image: TS02,
  },
  {
    name: "Butterfly",
    size: "3 Burner",
    des: "Smart Glass Gas Stove, Black",
    image: TS03,
  },
  {
    name: "Prestige Svachh Neo",
    size: "2 Burners",
    des: "Toughened Glasstop Gas Stove",
    image: TS04,
  },
];

const IND = [
  {
    name: "Prestige",
    size: "IPX 29",
    des: "Induction Cooktop",
    image: INST1,
  },
  {
    name: "Bajaj",
    size: "ICX 200FP",
    des: "2000W Induction Cooktop",
    image: INST2,
  },
  {
    name: "V-Guard",
    size: "VIC 25",
    des: "2000-Watt Electric Induction Stove",
    image: INST3,
  },
  {
    name: "V-Guard",
    size: "VIC 1.4 EL",
    des: "1400 Watt Electric Induction cooker",
    image: INST4,
  },
];

const Stove = () => {
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
            Gas Stove
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {STV.map((item) => (
              <div key={item.name} onClick={() => handleCardClick(item)}>
                <ProdCard {...item} />
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-up" className="container ">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Induction Stove
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {IND.map((item) => (
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

export default Stove;
