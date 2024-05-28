import React from "react";

import Mixer from "../components/Electronics/Mixer"
import Iron from "../components/Electronics/Iron"
import Sewing from "../components/Electronics/Sewing"
import Heater from "../components/Electronics/Heater"
import HomeEl from "../components/Electronics/HomeElec"



const ElectronicsSec = () => {
  return (
    <>
      <div className="py-14">
        {/* <h1>Electronics</h1> */}

        {/* <Mixer/> */}
        <Iron />
        <Sewing/>
        <Heater/>
        <HomeEl/>

      </div>
    </>
  );
};

export default ElectronicsSec;


