"use client";
import React, { useRef } from "react";
import { ShieldCheck, Award, Handshake, LucideIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  iconBg: string;
  iconColor: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "QUALIFIED & CERTIFIED",
    description:
      "As a company we are registered and certified by various parts of the Government. Building Admixture Chemical pride ourselves on assuring all certifications are current and in line with Government legislation.",
    icon: ShieldCheck,
    accentColor: "from-teal-600 to-emerald-500",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: 2,
    title: "QUALITY",
    description:
      "We have a team of skilled chemists, under whose supervision our chemical is prepared. Trust is the most valuable thing to us. We want to be the most reliable service and 100% high quality product provider in our business.",
    icon: Award,
    accentColor: "from-blue-600 to-indigo-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    title: "QUALITY TRUST",
    description:
      "We believe in results that deliver high quality products and services. Trust is the most valuable thing to us, and we strive to win your lasting trust as a reward for the performance of our chemicals.",
    icon: Handshake,
    accentColor: "from-cyan-600 to-teal-500",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: -40, opacity: 0 },
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
      gsap.fromTo(
        ".feature-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2, // প্রতিটি কার্ড ০.২ সেকেন্ড পরপর আসবে
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cards-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef } // শুধুমাত্র এই সেকশনের ভেতরের ক্লাসগুলোকে টার্গেট করবে
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-wider text-teal-600 uppercase">
            Our Core Values
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHY CHOOSE US
          </h2>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="feature-card group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Top Gradient Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentColor}`}
                />

                {/* Icon Container */}
                <div
                  className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`w-10 h-10 ${item.iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;