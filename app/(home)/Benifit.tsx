"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
  FaShieldAlt,
  FaTintSlash,
  FaSnowflake,
  FaLayerGroup,
  FaCheckCircle,
  FaTools,
  FaBuilding,
  FaLeaf,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Benifit = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Staggered Cards Animation
      const cards = cardsRef.current?.querySelectorAll(".benefit-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const benefits = [
    {
      text: "Prevents fungi and algae.",
      icon: FaLeaf,
    },
    {
      text: "Reduces the ratio of cement to water.",
      icon: FaLayerGroup,
    },
    {
      text: "Protects concrete from corrosive substances.",
      icon: FaShieldAlt,
    },
    {
      text: "Prevents rust.",
      icon: FaCheckCircle,
    },
    {
      text: "Prevents damp and salt.",
      icon: FaTintSlash,
    },
    {
      text: "Provides assistance in finishing.",
      icon: FaTools,
    },
    {
      text: "Prevents rapid freezing of concrete.",
      icon: FaSnowflake,
    },
    {
      text: "Increases the durability of concrete.",
      icon: FaBuilding,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs sm:text-sm font-semibold tracking-wider text-teal-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Chemical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Benefits
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Waterproofing one’s home is an essential part of any home building
            project. It keeps your home in good shape for years and protects
            from the problems of water seepage and dampness.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div
          ref={cardsRef}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="benefit-card group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 sm:gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-slate-800 font-semibold text-base sm:text-lg group-hover:text-teal-700 transition-colors">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benifit;