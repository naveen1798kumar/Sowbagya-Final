import React, { useState } from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";

import TS01 from "../../assets/Electronics/Kitch/Oven/01.jpg";
import TS02 from "../../assets/Electronics/Kitch/Oven/02.jpg";

import TS03 from "../../assets/Electronics/Kitch/Fryer/01.jpg";
import TS04 from "../../assets/Electronics/Kitch/Fryer/02.jpg";



const OvDt = [
  {
    name: "Haier",
    size: "19 lt",
    des: "Solo Microwave Oven",
    image: TS01,
  },
  {
    name: "Panasonic ",
    size: "27 lt",
    des: "Convection Microwave Oven",
    image: TS02,
  } 
];


const FryDt = [
    {
      name: "Pigeon",
      size: "4.2 lt",
    des: " Digital Air Fryer",
      image: TS03,
    },
    {
      name: "AGARO Alpha",
      size: "4.5 lt",
      des: "360 Air circulation, Digital Display",
      image: TS04,
    }
        
  ];


const Oven = () => {
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
            Microwave Oven
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {OvDt.map((item) => (
              <div key={item.name} onClick={() => handleCardClick(item)}>
                <ProdCard {...item} />
              </div>
            ))}
          </div>
        </section>


        <section data-aos="fade-up" className="container ">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Air Fryer
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {FryDt.map((item) => (
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

export default Oven;
