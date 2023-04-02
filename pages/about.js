import React from "react";
import Image from "next/image";
import { FaHome, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import Certifide from "../components/home/Certifide";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About us">
      <div className="max-w-screen-2xl mx-auto relative">
        <Image
          width="1024"
          height="150"
          layout="responsive"
          className="w-full mx-auto"
          src="/images/About.jpg"
          alt=""
        />

        <div className="card lg:card-side bg-base-100 flex lg:flex-row-reverse lg:justify-between px-3 mt-5 pb-8">
          <div className=" lg:w-1/2 lg:pr-24">
            <h2 className=" text-3xl font-bold py-5 text-[#31982f]">
              About us
            </h2>
            <p className="p-2 text-justify">
              <span className=" font-bold text-primary"> BUILD-AD</span> the
              finest quality raw materials are used to produce high quality raw
              materials imported from Germany, South Korea, South Africa,
              Malaysia, China, India. As a result, we have been able to draw the
              market attention to our{" "}
              <span className=" font-bold text-primary"> BUILD-AD</span> branded
              admixture within a very short period of time. Also, we are
              actively involved in various construction projects through the
              country.{" "}
              <span className=" font-bold text-primary"> BUILD-AD</span>{" "}
              Construction Chemical Company Engineering also importing building
              materials to meet the desired level of quality products. It will
              be an obvious to mention that, we have been able to come so far by
              a team of highly dedicated and very energetic young professionals.
              As a result. The level of our customers satisfactions are crossing
              its limits day by day.
            </p>
          </div>
          <div className="mt-5 lg:mt-0 lg:pl-24">
            <Image width="200" height="60" src="/images/Logo.png" alt="Logo" />
            <h2 className=" text-3xl font-bold py-5 text-[#31982f]">Address</h2>
            <p className=" flex items-center">
              <FaHome className="mr-2" />
              <span>73, College Road, Matuail, Jatrabari, Dhaka-1362.</span>
            </p>
            <p>
              <a
                href="mailto:buildadltd@gmail.com"
                className=" flex items-center">
                <FaEnvelope className="mr-2" />
                <span>buildadltd@gmail.com</span>
              </a>
            </p>
            <p>
              <a href="tel:+8801912085555" className=" flex items-center">
                <FaPhoneSquareAlt className="mr-2" />
                <span>+88 01912085555, +88 01912085588</span>
              </a>
            </p>
          </div>
        </div>
        <div
          style={{
            background: `url("/images/testimg.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" text-white">
          <Certifide></Certifide>
        </div>
      </div>
    </Layout>
  );
};

export default About;
