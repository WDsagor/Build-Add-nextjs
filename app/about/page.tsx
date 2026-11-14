"use client";

import Image from "next/image";
import {
  FaHome,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaArrowRight,
} from "react-icons/fa";
import Certified from "../(home)/Certified";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLElement>(null);
  const certifiedRef = useRef<HTMLElement>(null);

  useGSAP(
  () => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
    )
      .fromTo(
        aboutRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .fromTo(
        addressRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      );

    // Contact items আলাদাভাবে animate হবে
    gsap.fromTo(
      ".contact-item",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        delay: 0.5,
        ease: "power3.out",
        clearProps: "opacity,transform",
      },
    );

    gsap.fromTo(
      certifiedRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      },
    );
  },
  {
    scope: pageRef,
  },
);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#f4f8fc] pb-12 pt-24"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative overflow-hidden rounded-2xl border border-[#d8f3ef] bg-white shadow-sm"
        >
          <div className="relative h-[180px] sm:h-[240px] lg:h-[300px]">
            <Image
              src="/images/About.jpg"
              alt="About Super FIXIT"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1536px"
              className="object-cover object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#102a43]/85 via-[#102a43]/45 to-transparent" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-end p-5 sm:p-8 lg:p-10">
              <div className="max-w-xl text-white">
                <span className="inline-flex rounded-full border border-white/10 bg-[#00cdbd]/20 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#8ffff5] backdrop-blur-sm">
                  SUPER FIXIT LTD.
                </span>

                <h1 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                  Building Stronger,
                  <span className="text-[#00cdbd]"> Better Together.</span>
                </h1>

                <p className="mt-2 max-w-lg text-xs leading-5 text-slate-100 sm:text-sm">
                  Trusted construction chemicals and building solutions designed
                  for quality, durability and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About & Contact Section */}
        <section className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {/* About Section */}
          <div
            ref={aboutRef}
            className="rounded-2xl border border-[#d8f3ef] bg-white p-6 shadow-sm sm:p-8 lg:col-span-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-10 w-1 shrink-0 rounded-full bg-[#00cdbd]" />

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#00a99d]">
                  Who We Are
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#102a43] sm:text-3xl">
                  About Super FIXIT
                </h2>
              </div>
            </div>

            <div className="max-w-4xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                <span className="font-bold text-[#00a99d]">Super FIXIT</span>{" "}
                uses carefully selected quality raw materials imported from
                Germany, South Korea, South Africa, Malaysia, China and India. <br/>  Our commitment to quality has helped the Super FIXIT branded
                admixture gain market attention within a short period of time.
                We are also actively involved in construction projects across
                the country. <br/> Our dedicated team of professionals continues to deliver
                reliable construction chemical and building material solutions
                with a strong focus on customer satisfaction.
              </p>

            </div>

            {/* Company Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#e2f4f1] bg-[#f8fcfc] p-4 transition-shadow duration-300 hover:shadow-sm">
                <p className="text-base font-bold text-[#00a99d]">Quality</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Reliable products built for performance.
                </p>
              </div>

              <div className="rounded-xl border border-[#e2f4f1] bg-[#f8fcfc] p-4 transition-shadow duration-300 hover:shadow-sm">
                <p className="text-base font-bold text-[#00a99d]">
                  Experience
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Professional solutions for construction.
                </p>
              </div>

              <div className="rounded-xl border border-[#e2f4f1] bg-[#f8fcfc] p-4 transition-shadow duration-300 hover:shadow-sm">
                <p className="text-base font-bold text-[#00a99d]">Trusted</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Focused on customer satisfaction.
                </p>
              </div>
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#e7faf7] px-4 py-2 text-sm font-semibold text-[#00a99d]">
              <span>Quality you can build on</span>
              <FaArrowRight size={13} />
            </div>
          </div>

          {/* Contact Information */}
          <aside
            ref={addressRef}
            className="rounded-2xl border border-[#d8f3ef] bg-white p-6 shadow-sm sm:p-8"
          >
            {/* Contact Header */}
            <div className="mb-6">
              <Image
                width={150}
                height={60}
                src="/images/logo.png"
                alt="Super FIXIT Logo"
                className="h-auto w-auto max-w-[150px] object-contain"
              />

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#00a99d]">
                Get In Touch
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#102a43]">
                Contact Information
              </h2>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {/* Address */}
              <div className="contact-item flex items-start gap-4 rounded-xl border border-[#e7eeee] bg-[#f8fcfc] p-4 transition-all duration-300 hover:border-[#b8eee8] hover:shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e7faf7] text-[#00a99d]">
                  <FaHome size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#102a43]">
                    Our Address
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Haque Tower, Samimbagh, Matuail, Jatrabari, Dhaka-1362.
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:infosuperfixit@gmail.com"
                className="contact-item flex items-start gap-4 rounded-xl border border-[#e7eeee] bg-[#f8fcfc] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b8eee8] hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e7faf7] text-[#00a99d]">
                  <FaEnvelope size={16} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#102a43]">
                    Email Us
                  </h3>

                  <p className="mt-1 break-all text-sm text-slate-500">
                    infosuperfixit@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801611117696"
                className="contact-item flex items-start gap-4 rounded-xl border border-[#e7eeee] bg-[#f8fcfc] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b8eee8] hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e7faf7] text-[#00a99d]">
                  <FaPhoneSquareAlt size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#102a43]">
                    Call Us
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    +880 1611117696
                  </p>
                </div>
              </a>
            </div>
          </aside>
        </section>

        {/* Certified Section */}
        <section
          ref={certifiedRef}
          className="relative mt-6 overflow-hidden rounded-2xl border border-[#d8f3ef] bg-cover bg-center shadow-sm"
          style={{
            backgroundImage: 'url("/images/testimg.png")',
          }}
        >
          {/* <div className="absolute inset-0 bg-[#102a43]/75" /> */}

          <div className="relative z-10 text-white">
            <Certified />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;