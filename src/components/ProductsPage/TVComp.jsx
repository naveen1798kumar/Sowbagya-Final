import React, {useState} from "react";
// import TVd from "../../assets/FR/TV/TVd"; // Assuming TVs is correctly exported as an array of objects
import ProdCard from "./ProdCard"; // Assuming TVCard is the component used to render each TV item
import APopup from "./APopup"


import TS01 from ".././../assets/FR/TV/1.jpg"
import TS02 from ".././../assets/FR/TV/2.jpg"
import TS03 from ".././../assets/FR/TV/3.jpg"
import TS04 from ".././../assets/FR/TV/4.jpg"
import TS05 from ".././../assets/FR/TV/5.jpg"
import TS06 from ".././../assets/FR/TV/6.jpg"
import TS07 from ".././../assets/FR/TV/7.jpg"
import TS08 from ".././../assets/FR/TV/8.jpg"

const TVDef = [
    {
      name: "Samsung",
      size: "80 cm (32 inches)",
      des: "High-definition smart TV ",
      image: TS01,
    },
    {
      name: "Samsung",
      size: "108 cm (43 inches)",
      des: "Crystal iSmart 4K Ultra HD Smart LED TV",
      image: TS02,
    },
    {
        name: "Samsung",
        size: "108 cm (43 Inches)",
        des: "Crystal Vision 4K Ultra HD Smart LED TV",
        image: TS03,
      },
      {
        name: "Samsung",
        size: "108 cm (43 Inches)",
        des: "Smart TV with 4K resolution and built-in streaming apps.",
        image: TS04,
      },
      {
        name: "LG",
        size: "80 cm (32 inches)",
        des: "HD Ready Smart LED TV",
        image: TS05,
      },
      {
        name: "LG",
        size: "108 cm (43 inches)",
        des: "4K Ultra HD Smart LED TV",
        image: TS06,
      },
      {
        name: "SONY Bravia",
        size: "139 cm (55 inches)",
        des: "4K Ultra HD Smart LED Google TV",
        image: TS07,
      },
      {
        name: "SONY Bravia",
        size: "108 cm (43 inches)",
        des: "4K resolution and LED Google TV",
        image: TS08,
      },
      
      
   ];



   const TVAcc = () => {
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
          <section data-aos="fade-up" className="container">
            <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
              Our TV Brands
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {TVDef.map((item) => (
                <div key={item.id} onClick={() => handleImageClick(item)}>
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
  
  export default TVAcc;