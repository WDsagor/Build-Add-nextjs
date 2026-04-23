// components/Slider.tsx
"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Slide {
  id: number;
  bgImage: string;
  title: string;
  description: string;
  productImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/images/Carousel-img/helmet.png",
    title: "Adaption Plus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/A-20-1.jpg",
  },
  {
    id: 2,
    bgImage: "/images/Carousel-img/Building.png",
    title: "Builmix",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/B-20-2.jpg",
  },
  {
    id: 3,
    bgImage: "/images/Carousel-img/grouping.png",
    title: "Rawmix",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/R-10-1.jpg",
  },
  {
    id: 4,
    bgImage: "/images/Carousel-img/Building1.png",
    title: "Adaption Plus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/A-20-1.jpg",
  },
  {
    id: 5,
    bgImage: "/images/Carousel-img/Building.png",
    title: "Rawmix Plus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/R-10-1.jpg",
  },
  {
    id: 6,
    bgImage: "/images/Carousel-img/grouping.png",
    title: "Builmix",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/B-20-2.jpg",
  },
  {
    id: 7,
    bgImage: "/images/Carousel-img/Building1.png",
    title: "Adaption Plus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.",
    productImage: "/images/Products-img/A-20-1.jpg",
  },
];

const Slider = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Swiper
        rewind={true}
        spaceBetween={30}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1500"
                      data-aos-delay="800"
                      className="text-white"
                    >
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-sm md:text-base lg:text-lg mb-6 line-clamp-3 md:line-clamp-none">
                        {slide.description}
                      </p>
                      <button className="btn btn-primary btn-sm md:btn-md lg:btn-lg">
                        BUY NOW
                      </button>
                    </div>

                    {/* Product Image */}
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1500"
                      data-aos-delay="800"
                      className="flex justify-center md:justify-end"
                    >
                      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        <Image
                          src={slide.productImage}
                          alt={slide.title}
                          fill
                          className="object-contain rounded-lg shadow-2xl"
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
