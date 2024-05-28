import React from 'react'
import Stove from "../../components/ProductsPage/Stove"
import Mixer from "../../components/Electronics/Mixer"
import Grinder from "../../components/Electronics/Grinder"

const KitchenAppliances = () => {
  return (
    <div className=" min-h-screen pt-14 bg-gray-100">
      <div className='container'>
      <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Kitchen Appliances</h1>
      </div>
      <Stove />
      {/* Add mixer & Grinder Later */}
      <Mixer/>
      <Grinder/>
    </div>
  );
}

export default KitchenAppliances