import React, { useState } from "react";
import ProdCard from "./ProdCard";
import APopup from "./APopup"; // Ensure you import the APopup component

import TV01 from ".././../assets/FR/TV Speaker/01.jpg";
import TV02 from ".././../assets/FR/TV Speaker/02.jpg";
import TV03 from ".././../assets/FR/TV Speaker/03.jpg";
import TV04 from ".././../assets/FR/TV Speaker/04.jpg";
import TV05 from ".././../assets/FR/TV Speaker/05.jpg";

const Theat = [
  {
    name: "Boat Blitz",
    size: "50W 2.1 Channel",
    des: "Bluetooth, Wireless, Auxiliary, Usb, Micro Usb Subwoofer",
    image: TV01,
  },
  {
    name: "BoAt Aavante Bar",
    size: "3200D 5.1 Channel",
    des: "Dolby Audio,3D Surround Sound",
    image: TV02,
  },
  {
    name: "BoAt Aavante Bar",
    size: "1680D 2.1 Channel",
    des: "Signature Sound, Bluetooth, 3D Surround Sound, Multi-Compatibility",
    image: TV03,
  },
  {
    name: "Zebronics",
    size: "108 cm (43 Inches)",
    des: "Bluetooth 5.0, Wall Mount, AC-3 Surround Sound",
    image: TV04,
  },
  {
    name: "Zebronics Dragon 5.1",
    size: "80 cm (32 inches)",
    des: " Wall Mount, Subwoofer, AC-3 Surround Sound",
    image: TV05,
  },
];

const HomeTheater = () => {
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
      <div className="dark:bg-gray-900 dark:text-white py-5">
        <section data-aos="fade-up" className="container">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Home Theater & Speakers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Theat.map((item, index) => (
              <div key={index} onClick={() => handleImageClick(item)}>
                <ProdCard {...item} />
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

export default HomeTheater;
