import Link from "next/link";
import React from "react";

const Buildad = () => {
  return (
    <div
      className="max-w-screen-2xl w-full mx-auto px-2"
      data-aos="fade-right"
      data-aos-duration="1000">
      <div className=" px-5 text-primary py-10 text-justify">
        <h1 className="lg:text-4xl text-2xl text-center py-10 font-bold">
          বিল্ডিং এ্যাডমিক্সার লিমিটেড
        </h1>
        <span className=" text-black lg:text-lg sm:text-sm">
          <Link href="/" className=" font-bold text-primary">
            <a className="text-primary">বিল্ডিং এ্যাডমিক্সার লিমিটেড </a>
          </Link>
          বাংলাদেশের অন্যতম একটি কনষ্ট্রাকশন কেমিক্যাল উৎপাদন ও বাজারজাতকরণ মুখী
          প্রতিষ্ঠান। একদল দেশী ও বিদেশী কেমিষ্ট ষ্পেশালিষ্টদের তত্ত্বাবধানে এই
          কেমিক্যাল প্রস্তুত করা হয়। এতে পরিবেশের কোন ধরনের ক্ষতি সাধন করে না,
          লবনাক্ততা প্রতিরোধ, মরিচা প্রতিরোধ, লিকেজ প্রুফসহ বিভিন্ন প্রকার
          কার্যকারী ও স্থায়ী সমাধান পাওয়া যায়। বিল্ডিং এ্যাডমিক্সার লিমিটেড এর
          কেমিক্যাল এর কোন পার্শ্ব প্রতিক্রিয়া নেই। বিল্ডিং এ্যাডমিক্সার লিমিটেড
          এর কেমিক্যাল অন্যতম হওয়ায় দেশের অধিকাংশ কনষ্ট্রাকশন প্রতিষ্ঠান এটি
          ব্যবহার করছে। আমাদের পন্যসমূহ বুয়েট ও বিসিএসআইআর এবং অন্যান্য অনুমোদিত
          প্রতিষ্ঠান দ্বারা পরীক্ষিত।
        </span>
      </div>
    </div>
  );
};

export default Buildad;
