import React from 'react'
import Stove from "../../components/ProductsPage/Stove"
import Mixer from "../../components/Electronics/Mixer"
import Grinder from "../../components/Electronics/Grinder"

import Cookware from "../../components/Electronics/Cookwares"
import Oven from "../../components/Electronics/Oven"
import Flask from "../../components/Electronics/Flask"

import BannerPic from "../../components/BannerPic/BannerPic";
import Banner from "../../assets/Electronics/Kitch/Banner.jpg"

const KitchenAppliances = () => {
  return (
    <div className=" min-h-screen pt-14 pb-10 bg-gray-100">
      <div className='container'>
      <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Kitchen Appliances</h1>
      </div>
      <Stove />
      {/* Cooker */}
      <Cookware/>
      <Oven/>
      <Flask/>

      {/* Add mixer & Grinder Later */}
      <Mixer/>
      <Grinder/>

      <BannerPic img={Banner}/>
    </div>
  );
}

export default KitchenAppliances