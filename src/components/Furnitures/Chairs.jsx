import React, { useState } from "react";
import FPopup from "./Fpopup";
import FurnitureCard from "../Furnitures/FurnitureCard";

// Office Chair
import OfCh1 from "../../assets/WoodenFurnitures/Chairs/OfficeChairs/01.jpg";
import OfCh2 from "../../assets/WoodenFurnitures/Chairs/OfficeChairs/02.jpg";
import OfCh3 from "../../assets/WoodenFurnitures/Chairs/OfficeChairs/03.jpg";
import OfCh4 from "../../assets/WoodenFurnitures/Chairs/OfficeChairs/04.jpg";
import OfCh5 from "../../assets/WoodenFurnitures/Chairs/OfficeChairs/05.jpg";
// import DinTb6 from "../../assets/WoodenFurnitures/Chairs/OfficeChairs/06.jpg";

const DinData = [
  { id: 1, image: OfCh1 },
  { id: 2, image: OfCh2 },
  { id: 3, image: OfCh3 },
  { id: 4, image: OfCh4 },
  { id: 5, image: OfCh5 },
  // { id: 6, image: DinTb6 },
];

// Cushion Chair
import CuCh1 from "../../assets/WoodenFurnitures/Chairs/CuisionChair/01.jpg";
import CuCh2 from "../../assets/WoodenFurnitures/Chairs/CuisionChair/02.jpg";
import CuCh3 from "../../assets/WoodenFurnitures/Chairs/CuisionChair/03.jpg";
import CuCh4 from "../../assets/WoodenFurnitures/Chairs/CuisionChair/04.jpg";
// import CuCh5 from "../../assets/WoodenFurnitures/Chairs/CuisionChair/05.jpg";
import CuCh6 from "../../assets/WoodenFurnitures/Chairs/CuisionChair/06.jpg";
import BeCh1 from "../../assets/WoodenFurnitures/Chairs/BeanBag/01.jpg";
import BeCh2 from "../../assets/WoodenFurnitures/Chairs/BeanBag/02.jpg";

const DresData = [
  { id: 1, image: CuCh1 },
  { id: 2, image: CuCh2 },
  { id: 3, image: CuCh3 },
  { id: 4, image: CuCh4 },
  // { id: 5, image: CuCh5 },
  { id: 6, image: CuCh6 },
  { id: 6, image: BeCh1 },
  { id: 6, image: BeCh2 },
];

// Bamboo Ch
import BaCh1 from "../../assets/WoodenFurnitures/Chairs/BambooCh/01.jpg";
import BaCh2 from "../../assets/WoodenFurnitures/Chairs/BambooCh/02.jpg";
import RoCh1 from "../../assets/WoodenFurnitures/Chairs/RockingChair/01.jpg";
import RoCh2 from "../../assets/WoodenFurnitures/Chairs/RockingChair/02.jpg";
import RoCh3 from "../../assets/WoodenFurnitures/Chairs/RockingChair/03.jpg";
import RoCh4 from "../../assets/WoodenFurnitures/Chairs/RockingChair/04.jpg";

const TeapData = [
  { id: 1, image: BaCh1 },
  { id: 2, image: BaCh2 },
  { id: 3, image: RoCh1 },
  { id: 4, image: RoCh2 },
  { id: 4, image: RoCh3 },
  { id: 4, image: RoCh4 },
];

// Hanging Chairs
import HaCh1 from "../../assets/WoodenFurnitures/Oonjal/hangcha1.jpg";
import HaCh2 from "../../assets/WoodenFurnitures/Oonjal/hangcha2.jpg";
import HaCh3 from "../../assets/WoodenFurnitures/Oonjal/hangcha3.jpg";
import HaCh4 from "../../assets/WoodenFurnitures/Oonjal/oonjal1.jpg";
import HaCh5 from "../../assets/WoodenFurnitures/Oonjal/oonjal2.jpg";

const HangData = [
  { id: 1, image: HaCh1 },
  { id: 2, image: HaCh2 },
  { id: 3, image: HaCh3 },
  { id: 4, image: HaCh4 },
  { id: 5, image: HaCh5 },
];


// Sofa
import Sofa1 from "../../assets/WoodenFurnitures/SOFA/1.jpg"
import Sofa2 from "../../assets/WoodenFurnitures/SOFA/2.jpg"
import Sofa3 from "../../assets/WoodenFurnitures/SOFA/3.jpg"
import Sofa4 from "../../assets/WoodenFurnitures/SOFA/4.jpg"
import Sofa5 from "../../assets/WoodenFurnitures/SOFA/5.jpg"
import Sofa6 from "../../assets/WoodenFurnitures/SOFA/6.jpg"
import Sofa7 from "../../assets/WoodenFurnitures/SOFA/7.jpg"
import Sofa8 from "../../assets/WoodenFurnitures/SOFA/8.jpg"
import Sofa9 from "../../assets/WoodenFurnitures/SOFA/9.jpg"

const SofaData = [
  { id: 1, image: Sofa1 },
  { id: 2, image: Sofa2 },
  { id: 3, image: Sofa3 },
  { id: 4, image: Sofa4 },
  { id: 5, image: Sofa5 },
  { id: 6, image: Sofa6 },
  { id: 7, image: Sofa7 },
  { id: 8, image: Sofa8 },
  { id: 9, image: Sofa9 },
];


// Pooja Set
import Pooj1 from "../../assets/WoodenFurnitures/Pooja/pooja1.jpg"
import Pooj2 from "../../assets/WoodenFurnitures/Pooja/pooja2.jpg"
import Pooj3 from "../../assets/WoodenFurnitures/Pooja/pooja3.jpg"
import Pooj4 from "../../assets/WoodenFurnitures/Pooja/pooja4.jpg"
import Pooj5 from "../../assets/WoodenFurnitures/Pooja/pooja5.jpg"
import Pooj6 from "../../assets/WoodenFurnitures/Pooja/pooja6.jpg"

const PoojData = [
  { id: 1, image: Pooj1 },
  { id: 2, image: Pooj2 },
  { id: 3, image: Pooj3 },
  { id: 4, image: Pooj4 },
  { id: 5, image: Pooj5 },
  { id: 6, image: Pooj6 }
];


const Chairs = () => {
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
     
     {/* Office */}
      <section data-aos="fade-up" className="container py-4">
      <h1 className="bg-gray-300 my-8 border-l-8 border-primary/50 pl-2 py-2 text-3xl font-bold">
            Chairs
          </h1>

          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Office Chairs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {DinData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Cushion */}
        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Cushion Chair
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {DresData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

         {/* Bamboo */}
        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Bamboo Chairs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TeapData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

          {/* Hanging */}
        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Hanging Chairs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {HangData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

          {/* Sofa */}
        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Sofa
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {SofaData.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <FurnitureCard {...item} />
              </div>
            ))}
          </div>
        </section>

          {/* Pooj */}
        <section data-aos="fade-up" className="container py-4">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
            Pooja Mandir
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {PoojData.map((item) => (
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

export default Chairs;
