import React, { useState } from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";

import TS01 from "../../assets/Electronics/MIXY/1.jpg";
import TS02 from "../../assets/Electronics/MIXY/2.jpg";
import TS03 from "../../assets/Electronics/MIXY/3.jpg";
import TS04 from "../../assets/Electronics/MIXY/4.jpg";
import TS05 from "../../assets/Electronics/MIXY/5.jpg";
import TS06 from "../../assets/Electronics/MIXY/6.jpg";

const MxDt = [
  {
    name: "Wonderchef Nutri-blend Mixer",
    size: "Powerful 500W 22000 RPM",
    des: "Stainless steel Blades | 2 unbreakable jars",
    image: TS01,
  },
  {
    name: "Butterfly Jet Elite Mixer",
    size: "750W, 4 Jars",
    des: "Stainless steel Blades | 2 unbreakable jars",
    image: TS02,
  },
  {
    name: "Butterfly Smart Mixer",
    size: "750W, 4 Jars",
    des: "Smart Glass Gray",
    image: TS03,
  },
  {
    name: "Lifelong Mixer Grinder",
    size: "3 Jars 500 Watt Mixie",
    des: "Chutney Jar, Dry Grinder Jar & Liquidizing Jar",
    image: TS04,
  },
  {
    name: "Prestige Iris Plus",
    size: "Grinder With 4 Jars",
    des: "3 Stainless Steel Jars+ 1 Juicer Jar",
    image: TS05,
  },
  {
    name: "Prestige 500 Watts Orion Mixer",
    size: "3 Stainless Steel Jars ",
    des: "2 years warranty| Red & White",
    image: TS06,
  }
];


const Mixer = () => {
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
            Mixer
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {MxDt.map((item) => (
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

export default Mixer;
