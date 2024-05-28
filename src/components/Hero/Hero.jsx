import React from "react";

import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerPic1 from "../../assets/Products/Header Icons/TV.webp";
import BannerPic2 from "../../assets/Products/Header Icons/home.webp";
import BannerPic3 from "../../assets/Products/Header Icons/kitchen.webp";
import BannerPic5 from "../../assets/Products/Header Icons/electronics.webp";
import BannerPic4 from "../../assets/Products/Header Icons/furnitures.jpg";
import BannerPic6 from "../../assets/Products/Header Icons/gadgets.jpg";


const productData = [
  { src: BannerPic1, name: "TV & Accessories", route: "/tv" },
  { src: BannerPic2, name: "Home Appliances", route: "/home-appliances" },
  { src: BannerPic3, name: "Kitchen Appliances", route: "/kitchen-appliances" },
  { src: BannerPic4, name: "Furnitures", route: "/furniture-section" },
  { src: BannerPic5, name: "Electronics", route: "/electronics" },
  { src: BannerPic6, name: "Smart Gadgets", route: "/smart-gadgets" },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="absolute bottom-2 w-full ">
      <div className=" grid grid-cols-1 gap-4">
        <div
          data-aos-delay="600"
          className="space-y-4  rounded-md p-4  relative"
        >
          <Slider {...settings}>
            {productData.map((product, index) => (
              <div key={index} className="mx-4 rounded overflow-hidden ">
                 <Link to={product.route}>
                  <div className="relative h-32 w-32 mx-auto mt-6 rounded-full overflow-hidden border-4 border-blue-500 transition duration-300 hover:border-gray-400">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 transform hover:scale-105 cursor-pointer"
                      src={product.src}
                      alt={product.name}
                    />
                  </div>
                </Link>
                <div
                  className="font-bold text-white text-xl mb-2 text-center"
                  // style={{
                  //   textShadow:
                  //     "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
                  // }}
                >
                  {product.name}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
