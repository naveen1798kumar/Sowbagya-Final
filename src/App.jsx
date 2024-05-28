import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import ElectronicsSec from "./pages/ElectronicsSec"

import AOS from "aos";
import "aos/dist/aos.css";

// Import your TV component
import TV from "./pages/RoutePages/TV"
import HomeAppliances from "./pages/RoutePages/HomeAppliances"
import KitchenAppliances from "./pages/RoutePages/KitchenAppliances"
import Furnitures from "./pages/RoutePages/Furnitures"
import Electronics from "./pages/RoutePages/Electronics";
import SmartGadgets from "./pages/RoutePages/SmartGadgets"

import ScrollToTopButton from "./pages/ScrollToTopButton"

// import BlogsComp from "./components/Blogs/BlogsComp";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products-section" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="furniture-section" element={<PlacesRoute />} />
            <Route path="electronics-section" element={<ElectronicsSec />} />
            <Route path="about" element={<About />} />

            {/* Product Page Componrnts */}
            <Route path="tv" element={<TV />} />
            <Route path="home-appliances" element={<HomeAppliances />} />
            <Route path="kitchen-appliances" element={<KitchenAppliances />} />
            <Route path="furnitures" element={<Furnitures />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="smart-gadgets" element={<SmartGadgets />} />

              {/* Route for TV component */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton/>
    </>
  );
};

export default App;
