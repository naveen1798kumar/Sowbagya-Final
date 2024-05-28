import React, { useState } from "react";
// import TVd from "../../assets/FR/TV/TVd"; // Assuming TVs is correctly exported as an array of objects
import ProdCard2 from "./ProdCard2"; // Assuming TVCard is the component used to render each TV item
import APopup from "./APopup"; // Ensure you import the APopup component

import TV01 from ".././../assets/FR/TV STAND/1.jpg";
import TV02 from ".././../assets/FR/TV STAND/2.jpg";
import TV03 from ".././../assets/FR/TV STAND/3.jpg";
import TV04 from ".././../assets/FR/TV STAND/4.jpg";
import TV05 from ".././../assets/FR/TV STAND/5.jpg";

const TVData = [
  {
    name: "Wooden Stand",
    image: TV01,
    des: "table with slider"
  },
  {
    name: "Varnished Wood Stand",
    image: TV02,
    des: "varnished table"
  },
  {
    name: "Pure Wooden",
    image: TV03,
    des: "wooden stand table"
  },
  {
    name: "Wooden Stand",
    image: TV04,
    des: "Plywood layered",
  },
  {
    name: "Stand with Metal Frame",
    image: TV05,        
    // size: "108 cm (43 inches)",
    des: "wooden with steel frame",
  }
];

const TVComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="dark:bg-gray-900 dark:text-white py-5 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            TV Stands
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TVData.map((item) => (
              <div key={item.id} onClick={() => handleImageClick(item)}>
                <ProdCard2 {...item} />
              </div>
            ))}
          </div>
        </section>
      </div>
      {selectedProduct && (
        <APopup isOpen={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
      )}
    </div>
  );
};

export default TVComp;
