import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";

import TV from "../pages/RoutePages/TV"
import HomeAppliances from "../pages/RoutePages/HomeAppliances"
import KitchenAppliances from "../pages/RoutePages/KitchenAppliances"
import Furnitures from "../pages/RoutePages/Furnitures"
import Electronics from "../pages/RoutePages/Electronics"
import SmartGadgets from "../pages/RoutePages/SmartGadgets"


import { PiCookingPotLight } from "react-icons/pi"
import { RiFridgeLine } from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";


const Blogs = () => {
  return (
   
    <div className="min-h-screen py-14 bg-gray-100 scroll-smooth">
  {/* Navigation List */}
  <ul className="container flex flex-wrap justify-evenly font-mono text-xl space-y-4 sm:space-y-0 sm:space-x-4">
    <li>
      <a href="#tv" className="flex items-center gap-2 bg-blue-300 px-2 py-1 rounded-xl">
        <PiTelevisionSimpleFill />
        <span>TV Products</span>
      </a>
    </li>
    <li>
      <a href="#home-appliances" className="flex items-center gap-2 bg-blue-300 px-2 py-1 rounded-xl">
        <RiFridgeLine />
        <span>Home Appliances</span>
      </a>
    </li>
    <li>
      <a href="#kitchen-appliances" className="flex items-center gap-2 bg-blue-300 px-2 py-1 rounded-xl">
        <PiCookingPotLight />
        <span>Kitchen Appliances</span>
      </a>
    </li>
  </ul>

  {/* Components */}
  <div id="tv">
    <TV />
  </div>
  <div id="home-appliances">
    <HomeAppliances />
  </div>
  <div id="kitchen-appliances">
    <KitchenAppliances />
  </div>
  {/* <div id="furnitures">
    <Furnitures />
  </div>
  <div id="electronics">
    <Electronics />
  </div>
  <div id="smart-gadgets">
    <SmartGadgets />
  </div> */}
</div>


  );
};

export default Blogs;
