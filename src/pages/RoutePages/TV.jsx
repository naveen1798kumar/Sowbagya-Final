import React from "react";
import TVComp from "../../components/ProductsPage/TVComp"
import TVAcc from "../../components/ProductsPage/TVAcc"
import HomeTheater from "../../components/ProductsPage/HomeTheater"

const TV = () => {
  return (
    <div className="min-h-screen pt-5 bg-gray-100">
      <TVComp/>
      <TVAcc/>
      <HomeTheater/>
    </div>
  );
};

export default TV;
