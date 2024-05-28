import React from 'react'
// import BlogsComp from "../../components/Blogs/BlogsComp";
import Fridges from "../../components/ProductsPage/Fridges"
import WashMash from "../../components/ProductsPage/Washing"
import AC from "../../components/Electronics/AirCond"
import Fan from "../../components/ProductsPage/Fan"
import TablFan from "../../components/ProductsPage/FanTable"
import Coolers from "../../components/ProductsPage/Cooler"

const HomeAppliances = () => {
  return (
    <div className=" min-h-screen pt-14 bg-gray-100">
      <div className='container'>
      <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Home Appliances</h1>
      </div>
      
      <Fridges />
      <WashMash/>
      <AC/>
      <Fan/>
      <TablFan/>
      <Coolers/>
    </div>
  );
}

export default HomeAppliances