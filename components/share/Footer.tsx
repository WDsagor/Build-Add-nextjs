"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  FaLinkedinIn,
  FaSquareFacebook,
  FaYoutube,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer-container",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // Brand logo and description
        timeline.from(".footer-brand-content", {
          opacity: 0,
          x: -30,
          duration: 0.7,
          ease: "power3.out",
        });

        // Navigation sections
        timeline.from(
          ".footer-nav",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4",
        );

        // Social icons are independent from the parent animation
        timeline.from(
          ".social-icon",
          {
            opacity: 0,
            y: 15,
            scale: 0.7,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        );

        // Bottom section
        timeline.from(
          ".footer-bottom",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }, footerRef);

      return () => ctx.revert();
    },
    {
      scope: footerRef,
    },
  );

  return (
    <footer
      ref={footerRef}
      className="mt-16 overflow-hidden border-t border-[#d8f3ef] bg-[#f4fafb]"
    >
      {/* Accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00cdbd] to-transparent" />

      <div className="footer-container mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand */}
          <aside className="max-w-sm">
            <div className="footer-brand-content">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/footer-logo.png"
                  width={180}
                  height={90}
                  alt="Super Fixit"
                  className="h-auto w-auto max-w-full object-contain"
                />
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
                Trusted construction chemicals, adhesives and building
                solutions for stronger, safer and better construction.
              </p>
            </div>

            {/* Social icons are outside footer-brand-content */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                aria-label="Facebook"
                className="social-icon flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8f3ef] bg-white text-[#1877f2] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <FaSquareFacebook size={22} />
              </Link>

              <Link
                href="/"
                aria-label="YouTube"
                className="social-icon flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8f3ef] bg-white text-red-500 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <FaYoutube size={22} />
              </Link>

              <Link
                href="/"
                aria-label="Google"
                className="social-icon flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8f3ef] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <FcGoogle size={22} />
              </Link>

              <Link
                href="/"
                aria-label="LinkedIn"
                className="social-icon flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8f3ef] bg-white text-[#0a66c2] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </aside>

          {/* Services */}
          <nav className="footer-nav">
            <h2 className="mb-5 text-base font-bold text-[#102a43]">
              Services
            </h2>

            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Water Reducer</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Damp Proofing</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Exterior Design</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Weather Coat Sealers</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Site Planning</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav className="footer-nav">
            <h2 className="mb-5 text-base font-bold text-[#102a43]">
              Company
            </h2>

            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-500 hover:text-[#00a99d]">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-500 hover:text-[#00a99d]">Contact</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Jobs</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Press Kit</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="footer-nav">
            <h2 className="mb-5 text-base font-bold text-[#102a43]">
              Legal
            </h2>

            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Terms of Use</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-[#00a99d]">Cookie Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#d8f3ef]">
        <div className="footer-bottom mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-10">
          <p>
            Super FIXIT &copy; {currentYear} &bull; All Rights Reserved.
          </p>

          <p>
            Developed by
            <span className="ml-2 font-semibold text-[#102a43] hover:text-[#00a99d]">
              Sagar Edabr
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;