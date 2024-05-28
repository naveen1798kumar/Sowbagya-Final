import React from "react";
import PlaceCard from "./PlaceCard";

import { NavLink } from "react-router-dom"
// import Img1 from "../../assets/places/boat.jpg";
// import TV from "./pages/ProductsPage/TV"


import Img1 from "../../assets/FURNITURES/TELEVISION/TV 01.jpg";
import Img2 from "../../assets/FURNITURES/TELEVISION/TV 02.jpg";
import Img3 from "../../assets/FURNITURES/TELEVISION/TV 03.webp";
import Img4 from "../../assets/FURNITURES/TELEVISION/TV 06.jpg";
import Img5 from "../../assets/FURNITURES/TELEVISION/TV 07.jpg";
import Img6 from "../../assets/FURNITURES/TELEVISION/TV 08.jpg";

// 

import App1 from "../../assets/FURNITURES/FRIDGE/Appliance 01.jpg"
import App2 from "../../assets/FURNITURES/FRIDGE/Appliance 02.jpg"
import App3 from "../../assets/FR/COOLER/8.jpg"
import App4 from "../../assets/FURNITURES/FRIDGE/Appliance 04.jpg"
import App5 from "../../assets/FURNITURES/FRIDGE/Appliance 08.jpg"
import App6 from "../../assets/FURNITURES/FRIDGE/Appliance 06.jpg"

//

import Kit1 from "../../assets/FURNITURES/KITCHEN/01.jpg"
import Kit2 from "../../assets/FURNITURES/KITCHEN/02.jpg"
import Kit3 from "../../assets/FURNITURES/KITCHEN/03.jpg"
import Kit4 from "../../assets/FURNITURES/KITCHEN/04.jpg"
import Kit5 from "../../assets/FR/GRINDER/2.jpg"
import Kit6 from "../../assets/FURNITURES/KITCHEN/06.jpg"

//
import Fur1 from "../../assets/FURNITURES/FURNITURE/01.jpg"
import Fur2 from "../../assets/FURNITURES/FURNITURE/02.jpg"
import Fur3 from "../../assets/FURNITURES/FURNITURE/03.jpg"
import Fur4 from "../../assets/FURNITURES/FURNITURE/04.jpg"
import Fur5 from "../../assets/FURNITURES/FURNITURE/05.jpg"
import Fur6 from "../../assets/FURNITURES/FURNITURE/06.jpg"

//
import { FaArrowRight } from "react-icons/fa";

const PlacesData = [
  {
    img: Img1,
    title: "Samsung",
    location: "32 inches",
    price: 6700,
    type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Img2,
    title: "Samsung",
    location: "65 Inch",
    price: 6700,
    type: "Smart Tv 4K",
  },
  {
    img: Img3,
    title: "Sony",
    location: "50 Inch",
    price: 6200,
    type: "S95C OLED TV",
  },
  {
    img: Img4,
    title: "Samsung",
    location: "32 Inch",
    price: 6700,
    type: " ULTRA HD (4K)",
  },
  {
    img: Img5,
    title: "LG",
    location: "48 Inch",
    price: 6700,
    type: "Ultra HD Smart LED TV (Dark Iron Gray)",
  },
  {
    img: Img6,
    title: "Sony",
    location: "48 Inch",
    price: 6200,
    type: "Ultra HD OLED",
  },
];

const ProductsData = [
  {
    img: App1,
    title: "Refrigerator single Door",
    // location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: App2,
    title: "Refrigerator Double Door",
    // location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: App5,
    title: "Air Conditioner",
    // location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: App3,
    title: "Air Cooler",
    // location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: App4,
    title: "Vaccum cleaner",
    // location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },{
    img: App6,
    title: "Washing Machine",
    // location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  }
];

const KitchenData = [
  {
    img: Kit1,
    title: "Water Purifier",
    location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Kit2,
    title: "Microwave Oven",
    location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Kit3,
    title: "Air Fryer",
    location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Kit4,
    title: "Mixer",
    location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Kit5,
    title: "Grinder",
    location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Kit6,
    title: "Cooker",
    location: "32 inches",
    price: 6700,
    // type: "Smart LED TV (Glossy Black)",
  }
];

const FurnitureData = [
  {
    img: Fur1,
    title: "Wooden Bed",
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Fur2,
    title: "Steel Bed",
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Fur3,
    title: "Wooden Sofa",
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Fur4,
    title: "Dining Table",
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Fur5,
    title: "Dining Table",
    // type: "Smart LED TV (Glossy Black)",
  },
  {
    img: Fur6,
    title: "Pooja Mandir",
    // type: "Smart LED TV (Glossy Black)",
  }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-100 py-10">
        <h1 className=" my-8 border-l-8 border-primary/50 ml-5 py-2 pl-2 text-3xl font-bold bg-[rgba(0,0,0,0.1)]">
          Our Best Products
        </h1>
        
        <section data-aos="fade-up" className="container pb-10">
          <h2 className=" my-8 border-l-8 border-primary/30 py-2 pl-2 text-3xl font-bold">
            TV and Appliances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
          <div className="flex w-full justify-end py-5">
              <NavLink to="/tv" onClick={scrollToTop}>
              <p className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">For More Visit <span className="px-2 text-black hover:text-white"><FaArrowRight/></span></p>
              </NavLink>
          </div>
          <hr />
        </section>
        
        {/*  */}
        <section data-aos="fade-up" className="container  pb-10">
          <h2 className=" my-8 border-l-8 border-primary/30 py-2 pl-2 text-3xl font-bold">
            Home Appliances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ProductsData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
          <div className="flex w-full justify-end py-5">
              <NavLink to="/home-appliances" onClick={scrollToTop}>
              <p className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">For More Visit <span className="px-2 text-black hover:text-white"><FaArrowRight/></span></p>
              </NavLink>
          </div>
          <hr />
        </section>

        {/*  */}
        <section data-aos="fade-up" className="container  pb-10">
          <h2 className=" my-8 border-l-8 border-primary/30 py-2 pl-2 text-3xl font-bold">
           Kitchen Appliances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {KitchenData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
          <div className="flex w-full justify-end py-5">
              <NavLink to="/kitchen-appliances" onClick={scrollToTop}>
              <p className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">For More Visit <span className="px-2 text-black hover:text-white"><FaArrowRight/></span></p>
              </NavLink>
          </div>
          <hr />
        </section>
        
        {/*  */}
        <section data-aos="fade-up" className="container  pb-10">
          <h2 className=" my-8 border-l-8 border-primary/30 py-2 pl-2 text-3xl font-bold">
           Wooden Furnitures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {FurnitureData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
          <div className="flex w-full justify-end py-5">
              <NavLink to="/furniture-section" onClick={scrollToTop}>
              <p className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">For More Visit <span className="px-2 text-black hover:text-white"><FaArrowRight/></span></p>
              </NavLink>
          </div>
          <hr />
        </section>


      </div>
    </>
  );
};

export default Places;
