"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { products } from "@/utils/products";
import Link from "next/link";

const Slider = () => {
  const [activeIndexId, setActiveIndexId] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const currentSlide = containerRef.current?.querySelector(
        `.swiper-slide-active`
      );
      if (!currentSlide) return;

      const bgImg = currentSlide.querySelector(".bg-image");
      const badge = currentSlide.querySelector(".slide-badge");
      const title = currentSlide.querySelector(".slide-title");
      const desc = currentSlide.querySelector(".slide-desc");
      const buttons = currentSlide.querySelector(".slide-buttons");
      const prodImg = currentSlide.querySelector(".product-img");

      // স্লাইড ভেদে আলাদা অ্যানিমেশন প্যাটার্ন নির্ধারণ (Multi-type animations)
      const animType = activeIndexId % 3; // ৩টি ভিন্ন স্টাইল রোটেট করবে

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (animType === 0) {
        // স্টাইল ১: উপর থেকে নিচ ও জুম ইন (Classic Smooth Fade & Drop)
        tl.fromTo(bgImg, { scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, 0)
          .fromTo(badge, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.2)
          .fromTo(title, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
          .fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .fromTo(buttons, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
          .fromTo(prodImg, { scale: 0.7, opacity: 0, rotate: -10 }, { scale: 1, opacity: 1, rotate: 0, duration: 1 }, 0.3);
      } else if (animType === 1) {
        // স্টাইল ২: বাম দিক থেকে স্লাইড ইন (Slide From Left)
        tl.fromTo(bgImg, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 0)
          .fromTo(badge, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, 0.2)
          .fromTo(title, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.3)
          .fromTo(desc, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.5)
          .fromTo(buttons, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, 0.6)
          .fromTo(prodImg, { x: 60, opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, duration: 1 }, 0.3);
      } else {
        // স্টাইল ৩: রোটেশন ও পপ-আপ ইফেক্ট (Dynamic Scale & Pop)
        tl.fromTo(bgImg, { scale: 1.05, filter: "blur(10px)", opacity: 0 }, { scale: 1, filter: "blur(0px)", opacity: 1, duration: 1.2 }, 0)
          .fromTo(badge, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, 0.2)
          .fromTo(title, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, 0.3)
          .fromTo(desc, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
          .fromTo(buttons, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
          .fromTo(prodImg, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.3);
      }
    },
    {
      dependencies: [activeIndexId],
      scope: containerRef,
      revertOnUpdate: true,
    }
  );

  return (
    <div ref={containerRef} className="hero w-full overflow-hidden bg-slate-950">
      <Swiper
        rewind={true}
        spaceBetween={0}
        onSlideChange={(swiper) => setActiveIndexId(swiper?.activeIndex)}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[750px]"
      >
        {products.map((slide, index) => (
          <SwiperSlide key={slide.id || index} className="relative w-full h-full">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                fill
                src={slide.bgImage}
                alt={slide.title || "Super FIXIT Slide"}
                priority={index === 0}
                className="bg-image object-cover w-full h-full"
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
            </div>

            {/* Slide Content Container */}
            <div className="absolute inset-0 flex items-center z-10">
              <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left: Text Content */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-white text-center lg:text-left">
                    <div className="slide-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      Trusted Construction Solution
                    </div>

                    <h1 className="slide-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                      {slide.title}
                    </h1>

                    <p className="slide-desc text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {slide.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="slide-buttons pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                      <Link
                        href={`/products/${slide?.id}`}
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-400/50 active:translate-y-0 cursor-pointer overflow-hidden"
                      >
                        <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                        <span className="relative z-10">BUY NOW</span>
                      </Link>

                      <Link
                        href="/products"
                        className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-slate-950 border border-white/20 hover:border-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 cursor-pointer"
                      >
                        All Products
                      </Link>
                    </div>
                  </div>

                  {/* Right: Product Image */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="product-img relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6 scale-95" />
                      <div className="relative w-full h-full p-3 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                        <Image
                          fill
                          src={slide.productImage}
                          alt={slide.title || "Product"}
                          className="object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;