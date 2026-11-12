"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomeProducts = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-50/60 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs sm:text-sm font-semibold tracking-wider text-teal-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Products</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Super Fixit is one of the leading construction chemical manufacturing and marketing companies in Bangladesh. This chemical is manufactured under the supervision of a group of domestic and foreign chemical specialists.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Swiper Slider */}
        <div ref={sliderRef} className="relative px-2 sm:px-4">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={24}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, FreeMode, Autoplay]}
            className="products-swiper py-6"
          >
            {products.map((product, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between h-full group">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-2xl bg-slate-100 mb-4 aspect-square">
                    <Image
                      fill
                      className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      src={product?.productImage}
                      alt={product?.title || "Product Image"}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-grow space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                      {product?.title}
                    </h3>
                    {/* <p className="text-slate-500 text-sm line-clamp-2 text-justify leading-relaxed">
                      {product?.description}
                    </p> */}
                  </div>

                  {/* Price & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Starting Price</span>
                      <span className="font-extrabold text-lg text-teal-600">
                        ৳200
                      </span>
                    </div>
                    <Link
                      href={`products/${product?.id}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold shadow-md shadow-teal-600/20 hover:bg-teal-700 transition-all"
                    >
                      Buy Now
                    </Link>
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

export default HomeProducts;