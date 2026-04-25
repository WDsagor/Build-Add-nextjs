// components/Slider.tsx
"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

interface Slide {
  id: number;
  bgImage: string;
  title: string;
  description: string;
  productImage: string;
  animations?: {
    text1: any;
    text2: any;
    image: any;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/images/Carousel-img/helmet.png",
    title: "SUPER 101LW+",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      text1: {
        from: { x: -200, scale: 0.5, opacity: 0 },
        to: { x: 0, opacity: 1, scale: 1, duration: 0.5 },
      },
      image: {
        from: { scale: 0.8, opacity: 0, x: "100%" },
        to: { x: 0, opacity: 1, duration: 1, scale: 1 },
      },
      text2: {
        from: { y: -100, scale: 0.5, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.5, scale: 1 },
      },
    },
  },
  {
    id: 2,
    bgImage: "/images/Carousel-img/Building.png",
    title: "Rust RLD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/image.png",
    animations: {
      text1: {
        from: { y: -100, rotation: -15, opacity: 0 },
        to: { y: 0, rotation: 0, opacity: 1, duration: 0.6 },
      },
      image: {
        from: { scale: 1.2, opacity: 0, y: "50%" },
        to: { y: 0, opacity: 1, duration: 1.2, scale: 1 },
      },
      text2: {
        from: { x: 200, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.7 },
      },
    },
  },
  {
    id: 3,
    bgImage: "/images/Carousel-img/grouping.png",
    title: "SUPER LW++101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      text1: {
        from: { x: -150, opacity: 0, skewX: 20 },
        to: { x: 0, opacity: 1, skewX: 0, duration: 0.5 },
      },
      image: {
        from: { scale: 0.6, opacity: 0, rotate: -20 },
        to: { scale: 1, opacity: 1, rotate: 0, duration: 1 },
      },
      text2: {
        from: { y: 150, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.6 },
      },
    },
  },
  {
    id: 4,
    bgImage: "/images/Carousel-img/Building1.png",
    title: "Rust RLD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/image.png",
    animations: {
      text1: {
        from: { scale: 2, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 0.5 },
      },
      image: {
        from: { x: "-100%", opacity: 0 },
        to: { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
      },
      text2: { from: { opacity: 0 }, to: { opacity: 1, duration: 0.8 } },
    },
  },
  {
    id: 5,
    bgImage: "/images/Carousel-img/Building.png",
    title: "SUPER 101LW+",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      text1: {
        from: { y: -100, rotation: -15, opacity: 0 },
        to: { y: 0, rotation: 0, opacity: 1, duration: 0.6 },
      },
      image: {
        from: { scale: 1.2, opacity: 0, y: "50%" },
        to: { y: 0, opacity: 1, duration: 1.2, scale: 1 },
      },
      text2: {
        from: { x: 200, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.7 },
      },
    },
  },
  {
    id: 6,
    bgImage: "/images/Carousel-img/grouping.png",
    title: "SUPER LW++101",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/image.png",
    animations: {
      text1: {
        from: { y: -100, rotation: -15, opacity: 0 },
        to: { y: 0, rotation: 0, opacity: 1, duration: 0.6 },
      },
      image: {
        from: { scale: 1.2, opacity: 0, y: "-50%" },
        to: { y: 0, opacity: 1, duration: 1.2, scale: 1 },
      },
      text2: {
        from: { x: 200, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.7 },
      },
    },
  },
  {
    id: 7,
    bgImage: "/images/Carousel-img/Building1.png",
    title: "SUPER 101LW+",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      text1: {
        from: { x: -150, opacity: 0, skewX: 20 },
        to: { x: 0, opacity: 1, skewX: 0, duration: 0.5 },
      },
      image: {
        from: { scale: 0.6, opacity: 0, rotate: -20 },
        to: { scale: 1, opacity: 1, rotate: 0, duration: 1 },
      },
      text2: {
        from: { y: 150, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.6 },
      },
    },
  },
];

const Slider = () => {
  const [activeIndexId, setActiveIndexId] = useState(0);
  const activeSlideRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.easeOut" } });

      tl.fromTo(
        ".text1",
        slides[activeIndexId]?.animations?.text1?.from,
        slides[activeIndexId]?.animations?.text1?.to,
        0,
      )
        .fromTo(
          ".image1",
          slides[activeIndexId]?.animations?.image?.from,
          slides[activeIndexId]?.animations?.image?.to,
          "<0.2",
        )
        .fromTo(
          ".text2",
          slides[activeIndexId]?.animations?.text2?.from,
          slides[activeIndexId]?.animations?.text2?.to,
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
    <div className="max-w-screen-2xl mx-auto">
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
        className="relative w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
              {/* Background Image with Next.js Image */}
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="100vw"
                quality={90}
              />

              {/* Dark Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content Container */}
              <div className="absolute inset-0 flex items-end pb-12 md:pb-20 lg:pb-32">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                  <div className="flex flex-row gap-3 justify-between">
                    {/* Text Content */}
                    <div className="text-white max-w-4xl">
                      <h2 className="text1 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text2 text-sm md:text-base lg:text-lg mb-6 line-clamp-3 md:line-clamp-none">
                        {slide.description}
                      </p>
                      <button className="btn btn-primary btn-sm md:btn-md lg:btn-lg">
                        BUY NOW
                      </button>
                    </div>

                    {/* Product Image */}
                    <div className="flex justify-center md:justify-end">
                      <div className="relative image1 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        <Image
                          src={slide.productImage}
                          alt={slide.title}
                          fill
                          className=" object-contain rounded-lg shadow-2xl"
                          sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
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
