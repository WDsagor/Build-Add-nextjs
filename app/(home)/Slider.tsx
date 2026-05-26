// components/Slider.tsx
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
  const activeSlideRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.easeOut" } });

      tl.fromTo(
        ".image2",
        products[activeIndexId]?.animations?.image1?.from,
        products[activeIndexId]?.animations?.image1?.to,
        0,
      )
        .fromTo(
          ".text1",
          products[activeIndexId]?.animations?.text1?.from,
          products[activeIndexId]?.animations?.text1?.to,
          0,
        )
        .fromTo(
          ".image1",
          products[activeIndexId]?.animations?.image?.from,
          products[activeIndexId]?.animations?.image?.to,
          "<0.2",
        )
        .fromTo(
          ".text2",
          products[activeIndexId]?.animations?.text2?.from,
          products[activeIndexId]?.animations?.text2?.to,
          "<0.3",
        );
    },
    {
      dependencies: [activeIndexId],
      scope: activeSlideRef,
      revertOnUpdate: true,
    },
  );
  return (
    <div className="hero mx-auto">
      <Swiper
        ref={activeSlideRef}
        rewind={true}
        spaceBetween={30}
        onSlideChange={(swiper) => setActiveIndexId(swiper?.activeIndex)}
        effect="fade"
        centeredSlides={true}
        autoHeight={true}
        breakpoints={{
          360: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className=" w-full"
      >
        {products.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className=" w-full h-[30vh] md:h-[50vh] lg:h-[70vh]">
              <Image
                src={slide.bgImage}
                alt={slide.title}
                width={100}
                height={100}
                loading="eager"
                className="object-cover image2 h-auto w-full"
                priority={slide.id === 1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
                quality={75}
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex items-end pb-12 md:pb-20 lg:pb-32">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                  <div className="flex flex-row gap-3 justify-between">
                    {/* Text Content */}
                    <div className="text-white mt-5 lg:mt-0 ">
                      <h2 className="text1 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold md:mb-4">
                        {slide.title}
                      </h2>
                      <p className="text2 max-w-3xl text-justify text-sm md:text-base lg:text-lg mb-6 line-clamp-3 md:line-clamp-none">
                        {slide.description}
                      </p>
                      <Link
                        href={`products/${slide?.id}`}
                        className="btn btn-accent text-primary btn-sm md:btn-md lg:btn-lg"
                      >
                        BUY NOW
                      </Link>
                    </div>

                    {/* Product Image */}
                    <div className="flex justify-center md:justify-end">
                      <div className="relative image1 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        <Image
                          src={slide.productImage}
                          alt={slide.title}
                          fill
                          className=" rounded-lg shadow-2xl"
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
