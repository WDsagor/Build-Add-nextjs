import React from "react";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="fixed bg-[#05554C] top-0 z-50 w-full">
      <div className=" max-w-screen-2xl mx-auto md:flex lg:flex justify-around items-center">
        <div className=" flex justify-center text-xl py-1">
          <a href="https://www.facebook.com/buildingadmixture" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className=" text-white hover:text-blue-500 mx-3 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/buildingadmixture" target="_blank" rel="noopener noreferrer">
            <FaYoutube className=" text-white hover:text-red-400 mx-3 text-2xl cursor-pointer"></FaYoutube>
          </a>
          <a href="https://wa.me/+8801673040503" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className=" text-white hover:text-green-500 mx-3 cursor-pointer"></FaWhatsapp>
          </a>
        </div>
        <p className=" flex text-white align-middle  flex-row justify-center text-xs md:text-sm pb-1">
          {" "}
          <a className=" hover:text-yellow-300" href="tel:+8801673040503">
            HOTLINE +880 1673040503
          </a>{" "}
          <a href="mailto:buildadltd@gmail.com" className=" flex justify-center  hover:text-yellow-300 ml-5">
            <FaEnvelope className=" text-white mr-2 cursor-pointer sm:text-xs  md:text-lg" />
            <span>buildadltd@gmail.com</span>
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
