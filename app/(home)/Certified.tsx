"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Certified = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Slider Animation
      gsap.fromTo(
        sliderRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const certifications = [
    { src: "/images/certified/buet.jpeg", alt: "BUET" },
    { src: "/images/certified/bcsir.jpg", alt: "BCSIR" },
    { src: "/images/certified/rjsc.jpg", alt: "RJSC" },
    { src: "/images/certified/iso.jpeg", alt: "ISO 9001:2015" },
    { src: "/images/certified/fir.png", alt: "Fire Safety" },
    { src: "/images/certified/bida.png", alt: "BIDA" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-100 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with GSAP Ref */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            আমাদের পন্য সমূহ <span className="text-teal-600">BUET, BCSIR</span> দ্বারা পরীক্ষিত এবং <span className="text-teal-600">ISO 9001:2015</span> ও অন্যান্য অনুমোদিত প্রতিষ্ঠান দ্বারা সনদপ্রাপ্ত।
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-500 uppercase tracking-wider">
            Recognized & Certified By GOVT & Other Organization
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Swiper Slider with GSAP Ref & Responsive Breakpoints */}
        <div ref={sliderRef} className="relative px-2 sm:px-4">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              480: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, FreeMode, Autoplay]}
            className="certified-swiper py-4"
          >
            {certifications.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white p-5 rounded-2xl shadow-sm border border-slate-200/70 hover:border-teal-300 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center h-36 sm:h-40">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      width={140}
                      height={100}
                      className="max-h-20 sm:max-h-24 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Certified;