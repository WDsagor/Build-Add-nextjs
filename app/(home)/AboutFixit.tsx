"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

const AboutFixit = () => {
  const title = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  useGSAP(() => {
    gsap.fromTo(
      title.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: title.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
    gsap.fromTo(
      text.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.in",
        scrollTrigger: {
          trigger: text.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);
  return (
    <div className="max-w-screen-2xl w-full mx-auto px-2 py-5 ">
      <div className=" px-5 text-primary py-10 text-justify">
        <h1
          ref={title}
          className="lg:text-4xl max-w-sm mx-auto text-2xl text-center py-10 font-bold bg-linear-to-r  from-red-500 via-green-400  to-yellow-300 bg-clip-text text-transparent"
        >
          Super FIXIT Limited
        </h1>

        <p ref={text} className=" text-black lg:text-lg sm:text-sm">
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
