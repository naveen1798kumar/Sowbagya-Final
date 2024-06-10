import React from "react";
import Places from "../components/Places/Places";
import BlogsComp from "../components/Blogs/BlogsComp";
import Furnitures from "../components/Furnitures/FurnituresPage";

import Beds from "../components/Furnitures/Beds" 
import Table from  "../components/Furnitures/Tables"
import Chairs from "../components/Furnitures/Chairs"

import Bero from "../components/Furnitures/Bero"

import Matresses from "../components/Furnitures/Matresses"


const PlacesRoute = () => {
  return (
    <>
      <div className="pt-14">
        <Beds />
        <Matresses/>
        <Table/>
        <Chairs/>
        <Bero/>
      </div>
    </>
  );
};

export default PlacesRoute;


