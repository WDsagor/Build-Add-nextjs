"use client";

import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaHome,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

type Inputs = {
  fname: string;
  lname: string;
  companyName?: string;
  email: string;
  phone: string;
  message: string;
};

const ContactPage = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const addressRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Contact form data:", data);

    // এখানে আপনার API call অথবা email sending logic যোগ করতে পারবেন
    reset();
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        heroRef.current,
        {
          opacity: 0,
          y: -25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
      )
        .fromTo(
          addressRef.current,
          {
            opacity: 0,
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .fromTo(
          formRef.current,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
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
          className="relative overflow-hidden rounded-2xl border border-[#d8f3ef] shadow-sm"
        >
          <div
            className="relative flex min-h-[190px] items-center bg-cover bg-center sm:min-h-[230px]"
            style={{
              backgroundImage: 'url("/images/contactIMG.jpg")',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#102a43]/95 via-[#102a43]/75 to-[#102a43]/30" />

            <div className="relative z-10 max-w-2xl px-6 py-10 sm:px-10">
              <span className="inline-flex rounded-full border border-[#00cdbd]/30 bg-[#00cdbd]/10 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-[#7fffee] backdrop-blur-sm">
                SUPER FIXIT LTD.
              </span>

              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Let's Build Something
                <span className="block text-[#00cdbd]">Better Together.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
                Have a question or need information about our products? Our team
                is ready to help you with the right construction solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Contact Information */}
          <aside
            ref={addressRef}
            className="rounded-2xl border border-[#d8f3ef] bg-white p-6 shadow-sm sm:p-8 lg:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00a99d]">
              Get In Touch
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#102a43] sm:text-3xl">
              Contact Information
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Get in touch with Super FIXIT for product information, technical
              support and construction solutions.
            </p>

            {/* Address */}
            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-[#f8fcfc] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e7faf7] text-[#00a99d]">
                  <FaHome size={18} />
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
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-[#f8fcfc] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00cdbd] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e7faf7] text-[#00a99d]">
                  <FaEnvelope size={17} />
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
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-[#f8fcfc] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00cdbd] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e7faf7] text-[#00a99d]">
                  <FaPhoneSquareAlt size={19} />
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

            {/* Social Links */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="mb-4 text-sm font-semibold text-[#102a43]">
                Follow Super FIXIT
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/superfixit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d8f3ef] bg-[#f8fcfc] px-4 py-2.5 text-sm font-medium text-[#102a43] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00cdbd] hover:bg-[#e7faf7]"
                >
                  <FaFacebookSquare className="text-[#1877f2]" size={20} />
                  Facebook
                </a>

                <a
                  href="https://wa.me/8801673040503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#d8f3ef] bg-[#f8fcfc] px-4 py-2.5 text-sm font-medium text-[#102a43] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00cdbd] hover:bg-[#e7faf7]"
                >
                  <FaWhatsappSquare className="text-[#25d366]" size={21} />
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="rounded-2xl border border-[#d8f3ef] bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00a99d]">
                Send A Message
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#102a43] sm:text-3xl">
                Provide Your Information
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {/* First Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#102a43]">
                  First Name <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("fname", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="Enter your first name"
                  className={`h-12 w-full rounded-xl border bg-[#f8fcfc] px-4 text-sm text-[#102a43] outline-none transition focus:border-[#00cdbd] focus:ring-2 focus:ring-[#00cdbd]/10 ${
                    errors.fname
                      ? "border-red-400"
                      : "border-slate-200"
                  }`}
                />

                {errors.fname && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.fname.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#102a43]">
                  Last Name <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("lname", {
                    required: "Last name is required",
                  })}
                  type="text"
                  placeholder="Enter your last name"
                  className={`h-12 w-full rounded-xl border bg-[#f8fcfc] px-4 text-sm text-[#102a43] outline-none transition focus:border-[#00cdbd] focus:ring-2 focus:ring-[#00cdbd]/10 ${
                    errors.lname
                      ? "border-red-400"
                      : "border-slate-200"
                  }`}
                />

                {errors.lname && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.lname.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#102a43]">
                  Company Name{" "}
                  <span className="font-normal text-slate-400">(Optional)</span>
                </label>

                <input
                  {...register("companyName")}
                  type="text"
                  placeholder="Enter your company name"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-[#f8fcfc] px-4 text-sm text-[#102a43] outline-none transition focus:border-[#00cdbd] focus:ring-2 focus:ring-[#00cdbd]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#102a43]">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className={`h-12 w-full rounded-xl border bg-[#f8fcfc] px-4 text-sm text-[#102a43] outline-none transition focus:border-[#00cdbd] focus:ring-2 focus:ring-[#00cdbd]/10 ${
                    errors.email
                      ? "border-red-400"
                      : "border-slate-200"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#102a43]">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  placeholder="01700 000000"
                  className={`h-12 w-full rounded-xl border bg-[#f8fcfc] px-4 text-sm text-[#102a43] outline-none transition focus:border-[#00cdbd] focus:ring-2 focus:ring-[#00cdbd]/10 ${
                    errors.phone
                      ? "border-red-400"
                      : "border-slate-200"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#102a43]">
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  {...register("message", {
                    required: "Please write your message",
                  })}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className={`w-full resize-none rounded-xl border bg-[#f8fcfc] px-4 py-3 text-sm text-[#102a43] outline-none transition focus:border-[#00cdbd] focus:ring-2 focus:ring-[#00cdbd]/10 ${
                    errors.message
                      ? "border-red-400"
                      : "border-slate-200"
                  }`}
                />

                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00cdbd] px-6 text-sm font-semibold text-[#102a43] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00b8aa] hover:shadow-md sm:w-auto"
                >
                  <FaPaperPlane size={14} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;