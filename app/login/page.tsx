"use client";

import { useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiMail, FiLock, FiLogIn, FiCheckCircle } from "react-icons/fi";

import GoogleBtn from "@/components/share/GoogleBtn";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    // Login functionality এখানে যোগ করুন
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // পুরো Login Card
      tl.fromTo(
        ".login-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      )

        // Left Branding Content
        .fromTo(
          ".brand-content",
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
          "-=0.4",
        )

        // Form Header
        .fromTo(
          ".login-header",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )

        // Form Elements Stagger
        .fromTo(
          ".login-item",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2",
        );

      // Background decoration animation
      gsap.to(".circle-one", {
        y: 25,
        x: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".circle-two", {
        y: -20,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#F4F7FB] px-4 py-6 sm:px-6 lg:px-8"
    >
      {/* Background Decorative Elements */}
      <div className="circle-one pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00CBB8]/10 blur-3xl" />
      <div className="circle-two pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0B5FEA]/10 blur-3xl" />

      {/* Top Brand */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between py-3">
        

        <Link
          href="/"
          className="hidden text-sm font-medium text-slate-500 transition hover:text-[#00BFAF] sm:block"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Login Content */}
      <section className="relative z-10 mx-auto flex min-h-[calc(80vh-100px)] max-w-6xl items-center justify-center py-6">
        <div className="login-card grid w-full overflow-hidden rounded-2xl border border-[#C8F5EF] bg-white shadow-xl lg:grid-cols-2">
          
          {/* Left Branding Section */}
          <div className="relative hidden overflow-hidden bg-linear-to-br from-[#00CBB8] via-[#00AFA0] to-[#0B5FEA] p-10 text-white lg:block">
            <div className="brand-content relative z-10">
              

              <h1 className="text-4xl font-bold leading-tight">
                Welcome back to
                <br />
                Super FIXIT
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/80">
                Manage your orders, products and business information from
                one simple and secure dashboard.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    <FiCheckCircle />
                  </span>
                  Manage your business easily
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    <FiCheckCircle />
                  </span>
                  Track orders in real time
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    <FiCheckCircle />
                  </span>
                  Secure and reliable access
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[45px] border-white/10" />
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/5" />
          </div>

          {/* Right Login Form */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              
              {/* Form Header */}
              <div className="login-header mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9FBF8]">
                  <FiLogIn className="text-xl text-[#00BFAF]" />
                </div>

                <h2 className="text-2xl font-bold text-[#14213D] sm:text-3xl">
                  Login to your account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Enter your credentials to access your dashboard.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Email */}
                <div className="login-item">
                  <label className="mb-2 block text-sm font-semibold text-[#344054]">
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`h-12 w-full rounded-lg border bg-white pl-11 pr-4 text-sm text-[#14213D] outline-none transition ${
                        errors.email
                          ? "border-red-400"
                          : "border-slate-200"
                      } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="login-item">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-[#344054]">
                      Password
                    </label>

                    <Link
                      href="/reset-password"
                      className="text-xs font-semibold text-[#00AFA0] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                    <input
                      type="password"
                      placeholder="Enter your password"
                      className={`h-12 w-full rounded-lg border bg-white pl-11 pr-4 text-sm text-[#14213D] outline-none transition ${
                        errors.password
                          ? "border-red-400"
                          : "border-slate-200"
                      } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Login Button */}
                <div className="login-item">
                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#00BFAF] to-[#0B5FEA] text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <FiLogIn />
                    Login to Dashboard
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="login-item divider my-7 text-xs text-slate-400">
                OR CONTINUE WITH
              </div>

              {/* Google Login */}
              <div className="login-item">
                <GoogleBtn />
              </div>

              {/* Register */}
              <p className="login-item mt-7 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#00AFA0] transition hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;