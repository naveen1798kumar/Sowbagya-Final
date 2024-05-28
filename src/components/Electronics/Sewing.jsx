import React, {useState} from "react";
import ProdCard from "../ProductsPage/ProdCard";
import APopup from "../ProductsPage/APopup";


import Sewing1 from "../../assets/Electronics/Sewing/01.jpg"
import Sewing2 from "../../assets/Electronics/Sewing/02.jpg"
import Sewing3 from "../../assets/Electronics/Sewing/03.jpg"
import Sewing4 from "../../assets/Electronics/Sewing/04.jpg"
import Sewing5 from "../../assets/Electronics/Sewing/05.jpg"

const SeDt = [
  {
    name: "Akiara Stitch Machine",
    size: "12 Stitching",
    des: "Double Needle Sewing, Automatic Thread",
    image: Sewing1,
  },
  {
    name: "Usha Janome Dream Stitch",
    size: "14 Stitch Function ",
    des: "Sewing Lessons in Nine languages",
    image: Sewing2,
  },
  {
    name: "Leepesx Mini Electric Sewing",
    size: "Retro Classical Treadle",
    des: "Table Desk Mechanical Clockwork",
    image: Sewing3,
  },
  {
    name: "Singer Magna Handheld",
    size: "AA Retails - Black",
    des: "Only Head Without Base, Cover & Hand Attachment",
    image: Sewing4,
  },
  {
    name: "Usha Umang",
    size: "Stitch Composite Sewing",
    des: "Plastic Body Cover (PBC) (Black)",
    image: Sewing5,
  }
];




const Sewing = () => {
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
              Sewing Machine
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SeDt.map((item) => (
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

export default Sewing;
