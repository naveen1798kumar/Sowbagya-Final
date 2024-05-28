import React, {useState} from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";


import HomEl1 from "../../assets/Electronics/Home-Elect/01.jpg"
import HomEl2 from "../../assets/Electronics/Home-Elect/02.jpg"
import HomEl3 from "../../assets/Electronics/Home-Elect/03.jpg"
import HomEl4 from "../../assets/Electronics/Home-Elect/04.jpg"
import HomEl5 from "../../assets/Electronics/Home-Elect/05.jpg"

import HomEl6 from "../../assets/Electronics/Dryer/01.jpg"
import HomEl7 from "../../assets/Electronics/Dryer/02.jpg"
import HomEl8 from "../../assets/Electronics/Dryer/03.jpg"


const HomElDt = [
  {
    name: "IBELL FL8359",
    size: "Handheld",
    des: "Rechargable Torch",
    image: HomEl1,
  },
  {
    name: "Philips",
    size: "(Black, Standard)",
    des: "Rechargeable Emergency Light",
    image: HomEl2,
  },
  {
    name: "iBell FM700BT",
    size: "Portable FM",
    des: "BlueTooth, USB, Dynamic Speaker",
    image: HomEl3,
  },
  {
    name: "Panasonic",
    size: "RL191",
    des: "RMS Sound output",
    image: HomEl4,
  },
  {
    name: "Philips",
    size: "DL167",
    des: "External 3V DC",
    image: HomEl5,
  }
];

const HomElDt2 = [
    {
        name: "Havells",
        size: "3 Burner",
        des: "Smart Glass Gas Stove, Black",
        image: HomEl6,
      },
      {
        name: "Phillips",
        size: "2 Burners",
        des: "Toughened Glasstop Gas Stove",
        image: HomEl7,
      },
      {
        name: "Phillips",
        size: "3 Burner",
        des: "Smart Glass Gas Stove, Black",
        image: HomEl8,
      }
];




const HomeElec = () => {
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
              Home Electricals
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {HomElDt.map((item) => (
                <div key={item.id} onClick={() => handleCardClick(item)}>
                <ProdCard {...item} />
              </div>
                
              ))} 
            </div>

            {/*  */}

            <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {HomElDt2.map((item) => (
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

export default HomeElec;
