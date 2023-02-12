import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutBuildadd = () => {
  return (
    <div
      className=" max-w-screen-2xl text-white px-10 mx-auto"
      data-aos="fade-right"
      data-aos-duration="1000">
      <h1 className="lg:text-4xl max-w-full text-2xl text-center py-10 font-bold text-primary">
        WHY CHOOSE US
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="card shadow-xl  bg-purple-900">
          <figure className="px-10 pt-10 ">
            <Image
              width={150}
              height={200}
              className=" w-2/6 mx-auto"
              src="/images/certified/certified-image.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">
              Qualified & Certified
            </h2>
            <p className=" text-justify">
              As a company we are registered and certified by various parts of
              the Government. Building Admixture Chemical pride ourselves on
              assuring all certifications are current and in line with
              Government legislation.
            </p>
          </div>
        </div>
        <div className="card shadow-xl  bg-primary">
          <figure className="px-10 pt-10 ">
            <Image
              width={150}
              height={200}
              className=" w-2/6 mx-auto"
              src="/images/certified/Quality.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">
              Quality
            </h2>
            <p className=" text-justify">
              We have a team of skilled chemists, under whose supervision our
              chemical prepared. Trust is the most valuable thing to us. we want
              to be the most reliable service and 100% high quality product
              provider in our business, so we want to win your trust as a reward
              of our chemical.
            </p>
          </div>
        </div>
        <div className="card shadow-xl  bg-cyan-500">
          <figure className="px-10 pt-10 ">
            <Image
              width={150}
              height={200}
              className=" w-2/6 mx-auto"
              src="/images/certified/trust.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">
              Quality Trust
            </h2>
            <p className=" text-justify">
              We believe in result that’s We give high quality product and
              services. Trust is the most valuable thing to us. we want to be
              the most reliable service and high quality product provider in our
              business, so we want to win your trust as a reward of our
              chemical.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuildadd;
