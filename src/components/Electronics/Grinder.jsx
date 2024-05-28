import React, { useState } from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";

import GR01 from "../../assets/Electronics/GRINDER/1.jpg";
import GR02 from "../../assets/Electronics/GRINDER/2.jpg";
import GR03 from "../../assets/Electronics/GRINDER/3.jpg";
import GR04 from "../../assets/Electronics/GRINDER/4.jpg";
import GR05 from "../../assets/Electronics/GRINDER/5.jpg";
import GR06 from "../../assets/Electronics/GRINDER/6.jpg";

const GrDt = [
  {
    name: "Butterfly Rhino Plus",
    size: "2Litre, (Grey)",
    des: "150W, 230V, AC 50Hz,Plastic",
    image: GR01,
  },
  {
    name: "Prestige PWG 07 Wet Grinder",
    size: "2L (Multicolor) with Coconut Scraper",
    des: "Atta Kneader Attachments, 200 Watt",
    image: GR02,
  },
  {
    name: "Butterfly Rhino Tabletop",
    size: "2 Litre, 150 W, 230 V",
    des: "Cherry Red,ABS Body",
    image: GR03,
  },
  {
    name: "Sowrna Lakshmi Wet Grinder",
    size: "Cherry,ABS Body",
    des: "Toughened Glasstop",
    image: GR04,
  },
  {
    name: "Premier Lifestyle Grinder",
    size: "2 LTR 230V Maroon Colour",
    des: "- - -",
    image: GR05,
  },
  {
    name: "Sowbaghya Shree 2 LTR Wet Grinder",
    size: "Table Top Wet Grinder",
    des: "2ltr Wet Grinder for All Kinds of Batter",
    image: GR06,
  }
];


const Grindr = () => {
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
            {GrDt.map((item) => (
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

export default Grindr;
