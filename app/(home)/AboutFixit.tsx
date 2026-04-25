import Link from "next/link";

const AboutFixit = () => {
  return (
    <div className="max-w-screen-2xl w-full mx-auto px-2 py-5 bg-white">
      <div className=" px-5 text-primary py-10 text-justify">
        <h1 className="lg:text-4xl text-2xl text-center py-10 font-bold">
          Super FIXIT Limited
        </h1>
        <p className=" text-black lg:text-lg sm:text-sm">
          <span>
            <Link href="/" className=" font-bold text-red-600">
              Super FIXIT
            </Link>
          </span>{" "}
          বাংলাদেশের অন্যতম একটি কনষ্ট্রাকশন কেমিক্যাল উৎপাদন ও বাজারজাতকরণ মুখী
          প্রতিষ্ঠান। একদল দেশী ও বিদেশী কেমিষ্ট ষ্পেশালিষ্টদের তত্ত্বাবধানে এই
          কেমিক্যাল প্রস্তুত করা হয়। এতে পরিবেশের কোন ধরনের ক্ষতি সাধন করে না,
          লবনাক্ততা প্রতিরোধ, মরিচা প্রতিরোধ, লিকেজ প্রুফসহ বিভিন্ন প্রকার
          কার্যকারী ও স্থায়ী সমাধান পাওয়া যায়।{" "}
          <span>
            <Link href="/" className=" font-bold text-red-600">
              Super FIXIT
            </Link>
          </span>{" "}
          এর কেমিক্যাল এর কোন পার্শ্ব প্রতিক্রিয়া নেই।{" "}
          <span>
            <Link href="/" className=" font-bold text-red-600">
              Super FIXIT
            </Link>
          </span>{" "}
          এর কেমিক্যাল অন্যতম হওয়ায় দেশের অধিকাংশ কনষ্ট্রাকশন প্রতিষ্ঠান এটি
          ব্যবহার করছে। আমাদের পন্যসমূহ বুয়েট ও বিসিএসআইআর এবং অন্যান্য অনুমোদিত
          প্রতিষ্ঠান দ্বারা পরীক্ষিত।
        </p>
      </div>
    </div>
  );
};

export default AboutFixit;
