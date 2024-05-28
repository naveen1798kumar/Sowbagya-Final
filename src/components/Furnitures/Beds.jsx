import React, {useState} from "react";
import FPopup from "../Furnitures/Fpopup";
import FurnitureCard from "./FurnitureCard";


// Beds
import Bed1 from "../../assets/WoodenFurnitures/Bed/01.jpg"
import Bed2 from "../../assets/WoodenFurnitures/Bed/02.jpg"
import Bed3 from "../../assets/WoodenFurnitures/Bed/03.jpg"
import Bed4 from "../../assets/WoodenFurnitures/Bed/04.jpg"
import Bed5 from "../../assets/WoodenFurnitures/Bed/05.jpg"
import Bed6 from "../../assets/WoodenFurnitures/Bed/06.jpg"

const BedsData = [
  {
    id: 1,
    image: Bed1,
    title: "Wooden bed",
  },
  {
    id: 1,
    image: Bed2,
    title: "Wooden Bed - King Size",
  },
  {
    id: 1,
    image: Bed3,
    title: "Wooden Bed with Compatments",
  },
  {
    id: 1,
    image: Bed6,
    title: "Wooden Bed - Plywood Coated",
  },
  {
    id: 1,
    image: Bed4,
    title: "Steel Bed",
  },
  {
    id: 1,
    image: Bed5,
    title: "Foldable Steel Bed",
  }
];


const Beds = () => {

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
  
          {/* Beds */}
          <section data-aos="fade-up" className="container ">
            <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
              Beds & Pillows
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {BedsData.map((item) => (
                <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
                
              ))}
            </div>
          </section>
          </div>
      {selectedProduct && (
        <FPopup
          isOpen={isOpen}
          onClose={handleClose}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default Beds;
