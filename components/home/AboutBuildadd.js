import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutBuildadd = () => {
  return (
    <section className="">
      <div className=" px-5 text-primary py-10 max-w-screen-2xl mx-auto">
        <h1 className="lg:text-4xl text-2xl text-center py-10 font-bold">বিল্ডিং এ্যাডমিক্সার লিমিটেড</h1>
        <p className="text-justify text-black lg:text-lg sm:text-sm">
          <Link href="/" className=" font-bold text-primary">
            <a>বিল্ডিং এ্যাডমিক্সার লিমিটেড</a>
          </Link>
          বাংলাদেশের অন্যতম একটি কনষ্ট্রাকশন কেমিক্যাল উৎপাদন ও বাজারজাতকরণ মুখী প্রতিষ্ঠান। একদল দেশী ও বিদেশী কেমিষ্ট
          ষ্পেশালিষ্টদের তত্ত্বাবধানে এই কেমিক্যাল প্রস্তুত করা হয়। এতে পরিবেশের কোন ধরনের ক্ষতি সাধন করে না, লবনাক্ততা
          প্রতিরোধ, মরিচা প্রতিরোধ, লিকেজ প্রুফসহ বিভিন্ন প্রকার কার্যকারী ও স্থায়ী সমাধান পাওয়া যায়। বিল্ডিং
          এ্যাডমিক্সার লিমিটেড এর কেমিক্যাল এর কোন পার্শ্ব প্রতিক্রিয়া নেই। বিল্ডিং এ্যাডমিক্সার লিমিটেড এর কেমিক্যাল
          অন্যতম হওয়ায় দেশের অধিকাংশ কনষ্ট্রাকশন প্রতিষ্ঠান এটি ব্যবহার করছে। আমাদের পন্যসমূহ বুয়েট ও বিসিএসআইআর এবং
          অন্যান্য অনুমোদিত প্রতিষ্ঠান দ্বারা পরীক্ষিত।
        </p>
      </div>
      <div className=" px-12 lg:px-5 text-white py-14 max-w-screen-2xl mx-auto">
        <h1 className="lg:text-4xl text-2xl text-center py-14 font-bold text-primary">WHY CHOOSE US</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="card shadow-xl hover:shadow-3xl hover:scale-110 duration-300 cursor-pointer bg-purple-900">
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
              <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">Qualified & Certified</h2>
              <p className=" text-justify">
                As a company we are registered and certified by various parts of the Government. Building Admixture
                Chemical pride ourselves on assuring all certifications are current and in line with Government
                legislation.
              </p>
            </div>
          </div>
          <div className="card shadow-xl hover:shadow-3xl hover:scale-110 duration-300 bg-primary">
            <figure className="px-10 pt-10 ">
              <Image width={150} height={200} className=" w-2/6 mx-auto" src="/images/certified/Quality.png" alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">Quality</h2>
              <p className=" text-justify">
                We have a team of skilled chemists, under whose supervision our chemical prepared. Trust is the most
                valuable thing to us. we want to be the most reliable service and 100% high quality product provider in
                our business, so we want to win your trust as a reward of our chemical.
              </p>
            </div>
          </div>
          <div className="card shadow-xl hover:shadow-3xl hover:scale-110 duration-300 bg-cyan-500">
            <figure className="px-10 pt-10 ">
              <Image width={150} height={200} className=" w-2/6 mx-auto" src="/images/certified/trust.png" alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">Quality Trust</h2>
              <p className=" text-justify">
                We believe in result that’s We give high quality product and services. Trust is the most valuable thing
                to us. we want to be the most reliable service and high quality product provider in our business, so we
                want to win your trust as a reward of our chemical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBuildadd;
