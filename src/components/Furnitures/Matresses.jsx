import React, {useState} from "react";
import FPopup from "../Furnitures/Fpopup";
import FurnitureCard from "./FurnitureCard";


// Beds
import Bed1 from "../../assets/WoodenFurnitures/Bed/Matr/01.jpg"
import Bed2 from "../../assets/WoodenFurnitures/Bed/Matr/02.jpg"
import Bed3 from "../../assets/WoodenFurnitures/Bed/Matr/03.jpg"

import BannerPic from "../BannerPic/BannerPic"
import Banner from "../../assets/WoodenFurnitures/Bed/Matr/Banners.jpg"


const BedData = [
  {
    id: 1,
    image: Bed1,
    title: "Coir-on Foldable matress",
  },
  {
    id: 1,
    image: Bed2,
    title: "Ortho Queen Size Mattress ",
  },
  {
    id: 1,
    image: Bed3,
    title: "All varieties of Pillows",
  },
];


const Matresses = () => {

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
              Matresses & Pillows
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {BedData.map((item) => (
                <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>  
              ))}
            </div>

            <h1 className=" my-8 py-2 pl-2 text-3xl font-bold bg-gray-200 text-center">
              *Seperate Section for Matresses and Pillows
            </h1>
            <div className="rounded-xl overflow-hidden">
                <BannerPic  img={Banner}  />
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

export default Matresses;
