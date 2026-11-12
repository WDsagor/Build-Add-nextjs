"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutFixit = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const highlights = [
    {
      title: "BUET ও BCSIR পরীক্ষিত",
      desc: "অনুমোদিত প্রতিষ্ঠান দ্বারা মান যাচাইকৃত",
    },
    {
      title: "১০০% পরিবেশবান্ধব",
      desc: "কোনো ক্ষতিকর পার্শ্বপ্রতিক্রিয়া নেই",
    },
    {
      title: "স্থায়ী সুরক্ষা",
      desc: "লবণাক্ততা, মরিচা ও লিকেজ প্রতিরোধী",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs sm:text-sm font-semibold tracking-wider text-teal-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Our Brand Value
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Super <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">FIXIT</span> Limited
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            আধুনিক ও টেকসই নির্মাণে বিশ্বস্ত কনস্ট্রাকশন কেমিক্যাল সলিউশন
          </p>
          <div className="mt-5 w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Main Content Grid (Balanced Flex) */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16">
          
          {/* Right Side: Illustration Image Container */}
          <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-2xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative p-4 sm:p-5 bg-white rounded-3xl shadow-xl border border-slate-100/80 overflow-hidden">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/benfit-illustration.jpg"
                    alt="About Super FIXIT"
                    width={700}
                    height={500}
                    className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>

                {/* Floating Trust Badge inside image card */}
                <div className="mt-4 sm:mt-4 bg-slate-50/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043A3.746 3.746 0 0121 12z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        BUET & BCSIR অনুমোদিত
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500">
                        আন্তর্জাতিক মানসম্পন্ন ল্যাব পরীক্ষিত কেমিক্যাল
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-lg shrink-0">
                    Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side: Text Content & Feature Cards Group */}
          <div ref={contentRef} className="w-full lg:w-1/2 space-y-6">
            {/* Main Paragraph Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/70 space-y-4 text-slate-600 text-base leading-[1.8]">
              <p>
                <Link href="/" className="font-bold text-teal-600 hover:text-teal-700 transition-colors">
                  Super FIXIT
                </Link>{" "}
                বাংলাদেশের অন্যতম একটি কনস্ট্রাকশন কেমিক্যাল উৎপাদন ও বাজারজাতকরণমুখী প্রতিষ্ঠান। একদল দেশি ও বিদেশি কেমিস্ট বিশেষজ্ঞের নিবিড় তত্ত্বাবধানে এই কেমিক্যাল প্রস্তুত করা হয়।
              </p>

              <p>
                এতে পরিবেশের কোনো ধরনের ক্ষতি সাধন হয় না। লবণাক্ততা প্রতিরোধ, মরিচা প্রতিরোধ, লিকেজ প্রুফসহ বিভিন্ন প্রকার কার্যকরী ও স্থায়ী সমাধান পাওয়া যায়।{" "}
                <Link href="/" className="font-bold text-teal-600 hover:text-teal-700 transition-colors">
                  Super FIXIT
                </Link>{" "}
                এর কেমিক্যালের কোনো ক্ষতিকর পার্শ্বপ্রতিক্রিয়া নেই।
              </p>

              <p>
                গুণগত মানে সেরা হওয়ায় দেশের অধিকাংশ শীর্ষস্থানীয় কনস্ট্রাকশন প্রতিষ্ঠান এটি ব্যবহার করছে। আমাদের পণ্যসমূহ{" "}
                <span className="font-semibold text-slate-800">বুয়েট (BUET)</span>,{" "}
                <span className="font-semibold text-slate-800">বিসিএসআইআর (BCSIR)</span> এবং অন্যান্য অনুমোদিত প্রতিষ্ঠান দ্বারা পরীক্ষিত।
              </p>
            </div>

            {/* Bottom Highlight Cards (Now neatly aligned under text) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:border-teal-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-2.5 font-bold text-xs">
                      ✓
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFixit;