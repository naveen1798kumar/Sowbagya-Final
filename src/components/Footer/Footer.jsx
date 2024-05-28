import React from "react";
import FooterLogo from "../../assets/logo.png";
import Logo2 from "../../assets/sowbagya logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Appliances",
    link: "/products-section",
  },
  {
    title: "Furnitures",
    link: "/furniture-section",
  },
  {
    title: "Electronics",
    link: "/electronics-section",
  },
  {
    title: "About",
    link: "/about",
  }
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>

        <div className="container">
      <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
        <div className="py-8 px-4">
          <div className="flex items-center gap-4 h-16 font-bold text-2xl">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo2} className="w-30 cursor-pointer" alt="logo" />
            </Link>
          </div>
          <p className="text-sm">
            All your home appliances under one roof. Discover Convenience, Your one-step Destination for All Home Appliances.
          </p>
          <br />
          <div className="flex items-center gap-3">
            <FaLocationArrow />
            <p>Near Renakaliamman Temple, Palani</p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <FaMobileAlt />
            <p>+91 9894107423</p>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
              Important Links
            </h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                  <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6  col-span-2 sm:col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8950734851192!2d77.51309194816503!3d10.45484111677056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9dfacfc5d2f4b%3A0xf891292b2f6201f3!2sSowbagya%20furniture!5e0!3m2!1sen!2sin!4v1716798837690!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl shadow-lg border-2 border-black"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white rounded-b-xl">
          &copy; 2024 All rights reserved || Made with ❤️ by <b className="text-black">SDS</b> Technologies
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default Footer;
