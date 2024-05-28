import React, {useState} from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";


import Ac1 from "../../assets/FURNITURES/AC/01.jpg"
import Ac2 from "../../assets/FURNITURES/AC/02.jpg"
import Ac3 from "../../assets/FURNITURES/AC/03.jpg"
import Ac4 from "../../assets/FURNITURES/AC/04.jpg"
import Ac5 from "../../assets/FURNITURES/AC/05.jpg"

const ACDT = [
  {
    name: "LG ",
    size: "1.5 Ton 3 Star DUAL Inverter",
    des: " 2 Way Swing, HD Filter with Anti-Virus Protection",
    image: Ac1,
  },
  {
    name: "Godrej ",
    size: "1.5 Ton 5 Star",
    des: "Convertible Cooling, Inverter Split AC",
    image: Ac2,
  },
  {
    name: "Daikin",
    size: "1.5 Ton",
    des: "3 Star Inverter Split AC",
    image: Ac3,
  },
  {
    name: "Panasonic",
    size: "1.5 Ton 3 Star",
    des: "Wi-Fi Inverter Smart Split AC",
    image: Ac4,
  },
  {
    name: "Portable-Air-Conditioner",
    size: "Fan-4-in-1-Mini-Cooling",
    des: "Fan-with-Water-Mist-Spray-3-Speeds-Evaporative-Air-Cooler-Small-Aircon",
    image: Ac5,
  }
];




const AC = () => {
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
  
          {/* Iron */}
          <section data-aos="fade-up" className="container ">
            <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
              Iron Box
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {ACDT.map((item) => (
                <div key={item.id} onClick={() => handleCardClick(item)}>
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
    </>
  );
};

export default AC;
