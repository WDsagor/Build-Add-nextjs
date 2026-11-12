"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Reviews = () => {
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

  const clientReviews = [
    {
      name: "Engr. Mahmudul Hasan",
      role: "Chief Structural Engineer, Apex Builders",
      review:
        "We have been using Super FIXIT waterproofing admixtures in our high-rise projects for over two years. The results against dampness and salinity are truly outstanding.",
      rating: 5,
      avatar: "/images/logo.png",
    },
    {
      name: "Ar. Nusrat Jahan",
      role: "Principal Architect, Studio Urban",
      review:
        "Their roof heat-proofing and leakage solutions completely solved severe seepage issues in one of our commercial buildings. Highly reliable technical support team.",
      rating: 5,
      avatar: "/images/logo.png",
    },
    {
      name: "Tariqul Islam",
      role: "Managing Director, Green Valley Developers",
      review:
        "Super FIXIT chemicals significantly improved our concrete durability and finishing quality. Being BUET and BCSIR tested gives us and our clients complete peace of mind.",
      rating: 5,
      avatar: "/images/logo.png",
    },
    {
      name: "Dr. Rezaul Karim",
      role: "Homeowner, Uttara, Dhaka",
      review:
        "I used their damp-proofing solution for my ground floor walls and rooftop water tank. Even after heavy monsoon rains, there is zero leakage or paint peeling.",
      rating: 5,
      avatar: "/images/logo.png",
    },
    {
      name: "Engr. Tanvir Ahmed",
      role: "Project Manager, Metro Infrastructure Ltd.",
      review:
        "Consistent quality, eco-friendly formulation, and timely delivery across sites. Super FIXIT has become our go-to brand for industrial flooring and rust protection.",
      rating: 5,
      avatar: "/images/logo.png",
    },
    {
      name: "Sajjad Hossain",
      role: "Proprietor, Hossain Construction & Co.",
      review:
        "Easy to apply and very cost-effective compared to imported alternatives. Our masons and site engineers love working with Super FIXIT products.",
      rating: 5,
      avatar: "/images/logo.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs sm:text-sm font-semibold tracking-wider text-teal-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Clients Say
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Trusted by leading engineers, architects, developers, and homeowners
            across Bangladesh for permanent construction solutions.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Swiper Slider */}
        <div ref={sliderRef} className="max-w-6xl mx-auto">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="reviews-swiper pb-14 pt-4 px-2"
          >
            {clientReviews.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative">
                  {/* Decorative Quote Icon */}
                  <FaQuoteRight className="absolute top-6 right-7 w-8 h-8 text-slate-100 group-hover:text-teal-50 transition-colors duration-300 pointer-events-none" />

                  <div>
                    {/* Star Ratings */}
                    <div className="flex items-center gap-1 text-amber-400 mb-5">
                      {[...Array(item.rating)].map((_, starIdx) => (
                        <FaStar key={starIdx} className="w-4 h-4" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 relative z-10">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-100 overflow-hidden shrink-0 flex items-center justify-center p-1">
                      <Image
                        height={48}
                        width={48}
                        alt={item.name}
                        className="rounded-full object-cover w-full h-full"
                        src={item.avatar}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-teal-700 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {item.role}
                      </p>
                    </div>
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

export default Reviews;