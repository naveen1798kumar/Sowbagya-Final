import React, { useState } from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";

import TS01 from "../../assets/Electronics/Kitch/Kettle/01.jpg";
import TS02 from "../../assets/Electronics/Kitch/Kettle/02.jpg";
import TS03 from "../../assets/Electronics/Kitch/Kettle/03.jpg";

import TS04 from "../../assets/Electronics/Kitch/Flask/01.jpg";
import TS05 from "../../assets/Electronics/Kitch/Flask/02.jpg";
import TS06 from "../../assets/Electronics/Kitch/Flask/03.jpg";



const KtDt = [
  {
    name: "Butterfly",
    size: "1.5 lt",
    des: "Stainless Kettle",
    image: TS01,
  },
  {
    name: "Pigeon",
    size: "1.5 lt",
    des: "Stovekraft Amaze Plus Electric Kettle",
    image: TS02,
  },
  {
    name: "Wipro Vesta",
    size: "1.5 lt",
    des: "Touch Kettle Anti-Rust Shield",
    image: TS03,
  } 
];


const FlDt = [
    {
      name: "Solimo Stainless teel",
      size: "500 ml",
    des: "24 Hours Hot and Cold Bottle",
      image: TS04,
    },
    {
      name: "Cello Instyle",
      size: "500 ml",
      des: "Hot and Cold Water with Dual Cup & Cap",
      image: TS05,
    },
    {
        name: "Milton Thermosteel",
        size: "500 ml",
        des: "Stainless Steel with Thermo Insulated",
        image: TS06,
    }
        
  ];


const Flask = () => {
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
            Electric Kettle
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {KtDt.map((item) => (
              <div key={item.name} onClick={() => handleCardClick(item)}>
                <ProdCard {...item} />
              </div>
            ))}
          </div>
        </section>


        <section data-aos="fade-up" className="container ">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Flask
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {FlDt.map((item) => (
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

export default Flask;
