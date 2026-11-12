"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaHandshake, FaArrowRight, FaTimes } from "react-icons/fa";

const DealerNeed = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // রুট (Route) পরিবর্তন হলে পপআপটি আবার চালু হবে
  useEffect(() => {
    // ইউজার যদি ইতিমধ্যে ডিলার আবেদন পেজেই থাকে, তবে পপআপ দেখানোর দরকার নেই
    if (pathname === "/dashboard/addDealer") {
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [pathname]);

  // পপআপ ওপেন হওয়ার GSAP অ্যানিমেশন
  useGSAP(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.4)" }
      );
    }
  }, [isOpen]);

  // স্মুথলি ক্লোজ করার ফাংশন
  const handleClose = () => {
    if (overlayRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.85,
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4"
    >
      {/* Popup Modal Card */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // কার্ডের ভেতরে ক্লিক করলে যেন বন্ধ না হয়
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-6 sm:p-9 text-center text-white shadow-2xl border border-teal-500/30 overflow-hidden"
      >
        {/* Decorative Background Glows */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-rose-500/80 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Modal Content */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* Animated Icon */}
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/30 text-teal-300 flex items-center justify-center shadow-lg shadow-teal-500/10">
            <FaHandshake className="w-8 h-8 animate-bounce" />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Business Opportunity
          </span>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            সারাদেশে ডিলার নিয়োগ চলছে !
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
            বাংলাদেশের শীর্ষস্থানীয় কনস্ট্রাকশন কেমিক্যাল ব্র্যান্ড{" "}
            <span className="font-bold text-teal-400">Super FIXIT</span>-এর
            সাথে যুক্ত হয়ে আপনার জেলা বা উপজেলায় লাভজনক ব্যবসা শুরু করুন।
          </p>

          {/* Action Buttons */}
          <div className="pt-3 w-full flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/dashboard/addDealer"
              onClick={handleClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-teal-500/25 transition-all duration-300"
            >
              আবেদন ফরম পূরণ করুন
              <FaArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              পরে দেখব
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerNeed;