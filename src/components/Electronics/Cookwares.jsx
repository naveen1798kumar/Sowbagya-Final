import React, { useState } from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";

import TS01 from "../../assets/Electronics/Kitch/Cooker/01.jpg";
import TS02 from "../../assets/Electronics/Kitch/Cooker/02.jpg";
import TS03 from "../../assets/Electronics/Kitch/Cooker/03.jpg";
import TS04 from "../../assets/Electronics/Kitch/Cooker/04.jpg";
import TS05 from "../../assets/Electronics/Kitch/Cooker/05.jpg";
import TS06 from "../../assets/Electronics/Kitch/Cooker/06.jpg";



const CkDt = [
  {
    name: "Pigeon",
    size: "5 lt",
    // des: "Stainless steel Blades | 2 unbreakable jars",
    image: TS01,
  },
  {
    name: "Hawkins Classic",
    size: "12 lt",
    // des: "Stainless steel Blades | 2 unbreakable jars",
    image: TS02,
  },
  {
    name: "Hawkins Contura",
    size: "1.5 li",
    // des: "Smart Glass Gray",
    image: TS03,
  },
  
];


const ElcDt = [
    {
      name: "Prestige",
      size: "1.5 lt",
      des: "2 Aluminium pans | Stainless Steel",
      image: TS04,
    },
    {
      name: "Haden Stainless steel",
      size: "3.5 lt",
      des: "Temp. Indication | Glass lid",
      image: TS05,
    },
    {
      name: "V-Guard VRC",
      size: "2.8 li",
      des: "Pressure plate & Temp.Sensor",
      image: TS06,
    },
    
  ];


const Cookware = () => {
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
            Cooker
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CkDt.map((item) => (
              <div key={item.name} onClick={() => handleCardClick(item)}>
                <ProdCard {...item} />
              </div>
            ))}
          </div>
        </section>


        <section data-aos="fade-up" className="container ">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Electric Cooker
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {ElcDt.map((item) => (
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

export default Cookware;
