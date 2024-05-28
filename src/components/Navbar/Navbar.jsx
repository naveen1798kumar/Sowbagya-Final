import React, { useState } from "react";
import Logo from "../../assets/sowbagya logo 1.png";
import Logo2 from "../../assets/sowbagya logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Appliances",
    link: "/products-section",
  },
  {
    name: "Furnitures",
    link: "/furniture-section",
  },
  {
    name: "Electronics",
    link: "/electronics-section",
  },
  {
    name: "About",
    link: "/about",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="top-0 right-0 w-full z-[2] bg-white backdrop-blur-sm text-black shadow-md relative">
        {/* <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div> */}

        
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">

            <div className="flex items-center w-auto gap-4 h-16 font-bold text-2xl">
              {/* <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} className="w-30 cursor-pointer" alt="logo" />
              </Link> */}
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo2} className="w-30 cursor-pointer" alt="logo" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center gap-10 ">
                <li className="py-4 text-lg font-bold">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4 text-lg font-bold">
                  <NavLink to="/products-section" activeClassName="active">
                   Products
                  </NavLink>
                </li>
                <li className="py-4 text-lg font-bold">
                  <NavLink to="/furniture-section" activeClassName="active">
                  Furnitures
                  </NavLink>
                </li>
                <li className="py-4 text-lg font-bold">
                  <NavLink to="/electronics-section" activeClassName="active">
                   Electronics
                  </NavLink>
                </li>
                <li className="py-4 text-lg font-bold" >
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>

                {/* <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li> */}

              </ul>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="md:block hidden bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                // onClick={() => {
                //   handleOrderPopup();
                // }}
              >
              <a href="mailto:">Contact Us</a>

              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>

          </div>
          
          
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        
      </nav>
    </>
  );
};

export default Navbar;
