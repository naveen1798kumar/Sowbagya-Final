import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "../components/Hero/Hero";
import HeroSlider from "../components/Navbar/HeroSlider"

import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover.jpg";
// import herobg from "../assets/hero-bg.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";


const Home = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  
  return (
    <>
      <div>
        <div className="h-[550px] relative">
          {/* <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video> */}
          {/* <img
            src={herobg}
            alt=""
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-2] blur-[2px]"
          /> */}

          <HeroSlider/>

          <div className="bg-[rgba(0,0,0,0.3)] absolute h-[550px] w-full z-[-1]"></div>
          {/*  */}

      {/* Search Bar Commented */}
      {/* <div className="w-full text-center py-2 bg-blue-400 absolute">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Products"
          className="w-[80%] px-8 bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2 z-10"
        />
      </div> */}


          <Hero />
          
        </div>

        <Places handleOrderPopup={handleOrderPopup} />
        
        <BannerPic img={Banner2} />
        {/* <BlogsComp /> */}
        {/* <Banner /> */}
        {/* <BannerPic img={BannerImg} /> */}
        
        <Testimonial />
        {/* <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      </div>
    </>
  );
};

export default Home;
