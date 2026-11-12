"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import {
  FaHome,
  FaWater,
  FaBath,
  FaWarehouse,
  FaPaintRoller,
  FaIndustry,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ApplicationAreas = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      // Cards Stagger Animation
      const cards = gridRef.current?.querySelectorAll(".area-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // CTA Banner Animation
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const areas = [
    {
      title: "Roof & Terrace",
      desc: "Permanent waterproofing solutions to prevent roof water seepage and reduce excessive heat.",
      icon: FaHome,
    },
    {
      title: "Water Tanks & Reservoirs",
      desc: "100% food-grade safe chemicals to prevent leakages in underground and overhead water tanks.",
      icon: FaWater,
    },
    {
      title: "Bathrooms & Wet Areas",
      desc: "Long-term protection against water seeping through tile joints and damaging lower floor ceilings.",
      icon: FaBath,
    },
    {
      title: "Basements & Foundations",
      desc: "Protects building foundations from underground moisture, salinity, and hydrostatic water pressure.",
      icon: FaWarehouse,
    },
    {
      title: "Exterior & Interior Walls",
      desc: "Effectively prevents wall dampness, efflorescence (salinity), and paint peeling.",
      icon: FaPaintRoller,
    },
    {
      title: "Industrial Floors & Bridges",
      desc: "Enhances concrete strength and durability for heavy-duty factory floors, columns, and large structures.",
      icon: FaIndustry,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs sm:text-sm font-semibold tracking-wider text-teal-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Where To Use
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Application{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Areas
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From new construction to repairing existing buildings, discover how
            Super FIXIT delivers permanent solutions for dampness and leakage.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 6 Application Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {areas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="area-card group bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Free Technical Consultation CTA Banner */}
        <div
          ref={ctaRef}
          className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 p-8 sm:p-12 overflow-hidden shadow-2xl"
        >
          {/* Decorative Circle Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                Free Engineering Support
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Worried About Dampness or Leakage in Your Building?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Speak directly with our experienced engineers and chemical
                specialists to choose the right product and application method.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-teal-500/25"
              >
                <FaPhoneAlt className="w-4 h-4" />
                Get Free Consultation
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold text-sm sm:text-base transition-all"
              >
                Explore Products
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationAreas;