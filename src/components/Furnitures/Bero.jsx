import React, { useState } from "react";
import FPopup from "./Fpopup";
import FurnitureCard from "../Furnitures/FurnitureCard";

// Bero
import Bero1 from "../../assets/WoodenFurnitures/Bero/01.jpg";
import Bero2 from "../../assets/WoodenFurnitures/Bero/02.jpg";
import Bero3 from "../../assets/WoodenFurnitures/Bero/03.jpg";

const BerDat = [
  {
    id: 1,
    image: Bero1,
    // title: "Top places to visit in India",
  },
  {
    id: 2,
    image: Bero2,
    // title: "Top places to visit in US",
  },
  {
    id: 3,
    image: Bero3,
    // title: "Top places to visit in Japan",
  },

];

// Rack Data
import Rak1 from "../../assets/WoodenFurnitures/Rack/01.jpg";
import Rak2 from "../../assets/WoodenFurnitures/Rack/02.jpg";
import Rak3 from "../../assets/WoodenFurnitures/Rack/03.jpg";
import Rak4 from "../../assets/WoodenFurnitures/Rack/04.jpg";

const RakDat = [
  {
    id: 1,
    image: Rak1,
    // title: "Top places to visit in India",
  },
  {
    id: 2,
    image: Rak2,
    // title: "Top places to visit in US",
  },
  {
    id: 3,
    image: Rak3,
    // title: "Top places to visit in Japan",
  },
  {
    id: 4,
    image: Rak4,
    // title: "Top places to visit in Japan",
  }
];



const Bero = () => {
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
    <>
      <div className="dark:bg-gray-900 dark:text-white pb-12">
        {/* Tables */}
        <section data-aos="fade-up" className="container py-4">

          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Bero - Steel & Wooden
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BerDat.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Steel Rack
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {RakDat.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>


      </div>
      {selectedProduct && (
        <FPopup isOpen={isOpen} onClose={handleClose} product={selectedProduct} />
      )}
    </>
  );
};

export default Bero;
