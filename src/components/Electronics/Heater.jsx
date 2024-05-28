import React, {useState} from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";


import Heater1 from "../../assets/Electronics/Heater/01.jpg"
import Heater2 from "../../assets/Electronics/Heater/02.jpg"
import Heater3 from "../../assets/Electronics/Heater/03.jpg"
import Heater4 from "../../assets/Electronics/Heater/04.jpg"
import Heater5 from "../../assets/Electronics/Heater/05.jpg"

const HtDt = [
  {
    name: "Crompton IHL 152 1500-Watt",
    size: "Water Heater",
    des: " Heating Element (Black)",
    image: Heater1,
  },
  {
    name: "Rico IRPRO",
    size: "1500w Shockproof ",
    des: "Waterproof & Protection | Instant Heating",
    image: Heater2,
  },
  {
    name: "Crompton Acenza",
    size: "15L Storage Water",
    des: " 8 Bar pressure rating",
    image: Heater3,
  },
  {
    name: "Orient Electric Enamour Classic Neo",
    size: "15 L Storage ",
    des: "Electric Enamour Classic Neo",
    image: Heater4,
  },
  {
    name: "V-Guard",
    size: "15 Litre ",
    des: "4 Level Safety, White",
    image: Heater5,
  }
];




const Heater = () => {
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
              Electrick Water Heater
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {HtDt.map((item) => (
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

export default Heater;
