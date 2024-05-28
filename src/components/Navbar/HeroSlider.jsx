import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider1 from "../../assets/Hero-Slider/slider1.jpg"
import Slider2 from "../../assets/Hero-Slider/slider2.jpg"
import Slider3 from "../../assets/Hero-Slider/slider3.jpg"
import Slider4 from "../../assets/Hero-Slider/slider4.jpg"
import Slider5 from "../../assets/Hero-Slider/slider5.jpg"

const HeroSlider = () => {
  const sliderImages = [Slider1,  Slider2, Slider3, Slider4, Slider5];
// , Slider2, Slider3, Slider4, Slider5


  const settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings} className="absolute right-0 top-0 h-[550px] w-full object-cover z-[-2]">
      {sliderImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" className="w-full h-[550px] object-cover" style={{ objectFit: 'cover' }} />
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
