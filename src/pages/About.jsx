import React from "react";
// import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p >
          At Sowbagya, we pride ourselves on delivering top-quality home appliances that seamlessly blend efficiency and elegance. Our extensive range of products, from cutting-edge refrigerators to high-performance washing machines, is sourced from the most trusted brands in the industry, ensuring reliability and durability. Each item in our inventory undergoes rigorous quality checks to meet our stringent standards, guaranteeing that our customers receive only the best. With exceptional customer service and competitive prices, Sowbagya stands as the premier destination for all your home appliance needs, dedicated to enhancing your home living experience. 
      </p><p>
Our knowledgeable staff is always ready to assist you in finding the perfect appliance to suit your lifestyle and budget, providing personalized recommendations and expert advice. Additionally, Sowbagya offers convenient delivery and installation services to make your shopping experience as seamless as possible. We are committed to building lasting relationships with our customers by consistently exceeding expectations and offering exclusive promotions and warranties. Trust Sowbagya for unparalleled quality and service in home appliances, where your satisfaction is our top priority.
          </p>
          <br />
          
        </div>
      </div>
      <Location />
      {/* <BlogsComp /> */}
    </>
  );
};

export default About;
