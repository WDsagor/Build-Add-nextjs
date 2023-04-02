import React from "react";
import { FaSun } from "react-icons/fa";

const Benifit = () => {
  return (
    <div className="px-2 text-primary py-10 max-w-screen-2xl mx-auto ">
      <h1 className="lg:text-4xl text-2xl text-center py-5 font-bold uppercase">
        Our Chemical Benifit
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center px-5 lg:gap-36 ">
        <div className="md:p-10" data-aos="flip-left" data-aos-duration="1000">
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5">Prevents fungi and algae.</p>
          </div>
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5">Protects concrete from corrosive substances.</p>
          </div>
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5">Prevents damp and salt.</p>
          </div>
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5">Prevents rapid freezing of concrete.</p>
          </div>
        </div>
        <div className="md:p-10" data-aos="flip-left" data-aos-duration="1000">
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5">Reduces the ratio of cement to water.</p>
          </div>
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5">Prevents rust.</p>
          </div>
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5"> Provides assistance in finishing.</p>
          </div>
          <div className=" items-center flex flex-col-1 shadow-lg rounded-lg p-5 lg:text-xl  hover:scale-105 duration-300 hover:bg-green-200">
            <FaSun />
            <p className="px-5"> Increases the durability of concrete.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
