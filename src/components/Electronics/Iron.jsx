import React, {useState} from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";


import Iron1 from "../../assets/Electronics/Iron/01.jpg"
import Iron2 from "../../assets/Electronics/Iron/02.jpg"
import Iron3 from "../../assets/Electronics/Iron/03.jpg"
import Iron4 from "../../assets/Electronics/Iron/04.jpg"
import Iron5 from "../../assets/Electronics/Iron/05.jpg"

const IrDt = [
  {
    name: "Havells",
    size: "2 Yrs Warranty (Black), 1100 Watts",
    des: "Havells Plastic Dazzle 1100W Dry Iron",
    image: Iron1,
  },
  {
    name: "Usha",
    size: "Black Weilburger Soleplate",
    des: "USHA EI Armor 1100 W",
    image: Iron2,
  },
  {
    name: "Butterfly",
    size: "1000 Watts",
    des: "Polypropylene Aries Dry Iron 1000 W",
    image: Iron3,
  },
  {
    name: "ATHENACREATIONS Multi-Purpose 2-in-1 ",
    size: "Iron Table for Ironing",
    des: "Multi-Use Three Step Ladder Fully Foldable",
    image: Iron4,
  },
  {
    name: "FLIPZON Wooden Self Standing 18",
    size: "Ironing Board",
    des: "Iron Holder, Foldable & Adjustable (122 x 47cm)",
    image: Iron5,
  }
];




const Iron = () => {
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
              {IrDt.map((item) => (
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

export default Iron;
