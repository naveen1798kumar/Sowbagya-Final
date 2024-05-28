import React, { useState } from "react";
import ProdCard from "./ProdCard";
import APopup from "./APopup"; // Ensure you import the APopup component

import TS01 from "../../assets/FR/FRIDGE/2.jpg";
import TS02 from "../../assets/FR/FRIDGE/3.jpg";
import TS03 from "../../assets/FR/FRIDGE/4.jpg";
import TS04 from "../../assets/FR/FRIDGE/5.jpg";
import TS05 from "../../assets/FR/FRIDGE/6.jpg";
import TS06 from "../../assets/FR/FRIDGE/7.jpg";
import TS07 from "../../assets/FR/FRIDGE/8.jpg";
import TS08 from "../../assets/FR/FRIDGE/9.jpg";
import TS09 from "../../assets/FR/FRIDGE/10.jpg";

const FRG = [
  {
    name: "LG",
    size: "185 L",
    des: "5 Star Inverter Direct-Cool Single Door",
    image: TS01,
  },
  {
    name: "Samsung",
    size: "189 L",
    des: "5 Star, Digital Inverter, Direct-Cool Single Door",
    image: TS02,
  },
  {
    name: "Godrej",
    size: "180 L",
    des: "5 Star Turbo Cooling Technology",
    image: TS03,
  },
  {
    name: "Whirlpool",
    size: "207 L",
    des: "3 Star Icemagic Pro Inverter Direct-Cool Single Door",
    image: TS04,
  },
  {
    name: "Whirlpool",
    size: "184 L",
    des: "2 Star Direct-Cool Single Door Refrigerator",
    image: TS05,
  },
  {
    name: "Haier",
    size: "190 L",
    des: "5 Star Direct Cool Single Door Refrigerator",
    image: TS06,
  },
  {
    name: "Godrej",
    size: "180 L",
    des: "4 Star Turbo Cooling Technology",
    image: TS07,
  },
  {
    name: "Whirlpool",
    size: "235 L",
    des: "2 Star Frost Free Double Door Refrigerator",
    image: TS08,
  },
  {
    name: "LG",
    size: "224 L",
    des: "4 Direct-Cool Smart Inverter Compressor Single-Door",
    image: TS09,
  },
];

const Fridges = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="dark:bg-gray-900 dark:text-white py-5 pb-14">
        <section data-aos="fade-up" className="container">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Refrigerator
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {FRG.map((item, index) => (
              <div key={index} onClick={() => handleImageClick(item)}>
                <ProdCard {...item} />
              </div>
            ))}
          </div>
        </section>
      </div>
      {selectedProduct && (
        <APopup isOpen={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
      )}
    </div>
  );
};

export default Fridges;
