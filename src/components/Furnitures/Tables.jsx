import React, { useState } from "react";
import FPopup from "./Fpopup";
import FurnitureCard from "../Furnitures/FurnitureCard";

// Tables
// Dining Table
import DinTb1 from "../../assets/WoodenFurnitures/Tables/DINING TABLE/1.jpg";
import DinTb2 from "../../assets/WoodenFurnitures/Tables/DINING TABLE/2.jpg";
import DinTb3 from "../../assets/WoodenFurnitures/Tables/DINING TABLE/3.jpg";
import DinTb4 from "../../assets/WoodenFurnitures/Tables/DINING TABLE/4.jpg";
import DinTb5 from "../../assets/WoodenFurnitures/Tables/DINING TABLE/5.jpg";
import DinTb6 from "../../assets/WoodenFurnitures/Tables/DINING TABLE/6.jpg";

const DinData = [
  {
    id: 1,
    image: DinTb1,
    // title: "Top places to visit in India",
  },
  {
    id: 2,
    image: DinTb2,
    // title: "Top places to visit in US",
  },
  {
    id: 3,
    image: DinTb3,
    // title: "Top places to visit in Japan",
  },
  {
    id: 4,
    image: DinTb4,
    // title: "Top places to visit in Japan",
  },
  {
    id: 5,
    image: DinTb5,
    // title: "Top places to visit in Japan",
  },
  {
    id: 6,
    image: DinTb6,
    // title: "Top places to visit in Japan",
  }
];

// Dressing Table
import DresTb1 from "../../assets/WoodenFurnitures/Tables/DRESSING TABLE/1.jpg";
import DresTb2 from "../../assets/WoodenFurnitures/Tables/DRESSING TABLE/2.jpg";
import DresTb3 from "../../assets/WoodenFurnitures/Tables/DRESSING TABLE/3.jpg";
import DresTb4 from "../../assets/WoodenFurnitures/Tables/DRESSING TABLE/4.jpg";
import DresTb5 from "../../assets/WoodenFurnitures/Tables/DRESSING TABLE/5.jpg";
import DresTb6 from "../../assets/WoodenFurnitures/Tables/DRESSING TABLE/6.jpg";

const DresData = [
  {
    id: 1,
    image: DresTb1,
    // title: "Top places to visit in India",
  },
  {
    id: 2,
    image: DresTb2,
    // title: "Top places to visit in US",
  },
  {
    id: 3,
    image: DresTb3,
    // title: "Top places to visit in Japan",
  },
  {
    id: 4,
    image: DresTb4,
    // title: "Top places to visit in Japan",
  },
  {
    id: 5,
    image: DresTb5,
    // title: "Top places to visit in Japan",
  },
  {
    id: 6,
    image: DresTb6,
    // title: "Top places to visit in Japan",
  }
];

// Teapoy
import Teap1 from "../../assets/WoodenFurnitures/Tables/Teapoy/01.jpg";
import Teap2 from "../../assets/WoodenFurnitures/Tables/Teapoy/02.jpg";
import Teap3 from "../../assets/WoodenFurnitures/Tables/Teapoy/03.jpg";
import Teap4 from "../../assets/WoodenFurnitures/Tables/Teapoy/04.jpg";

const TeapData = [
  {
    id: 1,
    image: Teap1,
    // title: "Top places to visit in India",
  },
  {
    id: 2,
    image: Teap2,
    // title: "Top places to visit in US",
  },
  {
    id: 3,
    image: Teap3,
    // title: "Top places to visit in Japan",
  },
  {
    id: 4,
    image: Teap4,
    // title: "Top places to visit in Japan",
  }
];

// Working Table
import Tab1 from "../../assets/WoodenFurnitures/Tables/OFFICE TABLE/01.jpg";
import Tab2 from "../../assets/WoodenFurnitures/Tables/OFFICE TABLE/02.jpg";
import Tab3 from "../../assets/WoodenFurnitures/Tables/OFFICE TABLE/03.jpg";
import Tab4 from "../../assets/WoodenFurnitures/Tables/OFFICE TABLE/04.jpg";
import Tab5 from "../../assets/WoodenFurnitures/Tables/OFFICE TABLE/05.jpg";

const TabData = [
  {
    id: 1,
    image: Tab1,
    // title: "Top places to visit in India",
  },
  {
    id: 2,
    image: Tab2,
    // title: "Top places to visit in US",
  },
  {
    id: 3,
    image: Tab3,
    // title: "Top places to visit in Japan",
  },
  {
    id: 4,
    image: Tab4,
    // title: "Top places to visit in India",
  },
  {
    id: 5,
    image: Tab5,
    // title: "Top places to visit in US",
  },
];

const Tables = () => {
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
          <h1 className="bg-gray-300 my-8 border-l-8 border-primary/50 pl-2 py-2 text-3xl font-bold">
            Tables
          </h1>

          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Working Table
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TabData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Dining Table
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {DinData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Dressing Table
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {DresData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Teapoy Table
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TeapData.map((item) => (
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

export default Tables;
