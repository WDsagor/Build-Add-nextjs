"use client";

import GoogleBtn from "@/components/share/GoogleBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import {
  FiMail,
  FiPhone,
  FiUser,
  FiLock,
  FiUserPlus,
  FiCheckCircle,
} from "react-icons/fi";

type RegisterFormData = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const Page = () => {
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterFormData>({
    mode: "onChange",
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);
    // Register functionality এখানে যোগ করুন
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // পুরো Register Card Animation
      tl.fromTo(
        ".register-card",
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
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )

        // Right Header
        .fromTo(
          ".form-header",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )

        // Form Fields Stagger Animation
        .fromTo(
          ".form-item",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        );
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
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00CBB8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0B5FEA]/10 blur-3xl" />

      {/* Top Navigation */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between py-3">
        

        <Link
          href="/"
          className="hidden text-sm font-medium text-slate-500 transition hover:text-[#00BFAF] sm:block"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <section className="relative z-10 mx-auto flex min-h-[calc(80vh-100px)] max-w-6xl items-center justify-center py-6">
        <div className="register-card grid w-full overflow-hidden rounded-2xl border border-[#C8F5EF] bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= Left Branding Section ================= */}
          <div className="relative hidden overflow-hidden bg-linear-to-br from-[#00CBB8] via-[#00AFA0] to-[#0B5FEA] p-10 text-white lg:block xl:p-12">
            <div className="brand-content relative z-10">
              

              <h1 className="text-4xl font-bold leading-tight">
                Join the
                <br />
                Super FIXIT Family
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/80">
                Create your account and manage your products, orders and
                business information from one secure platform.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    <FiCheckCircle />
                  </span>
                  Easy account management
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    <FiCheckCircle />
                  </span>
                  Manage orders efficiently
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    <FiCheckCircle />
                  </span>
                  Secure business platform
                </div>
              </div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[45px] border-white/10" />
            <div className="absolute -left-16 top-1/2 h-32 w-32 rounded-full bg-white/5" />
          </div>

          {/* ================= Register Form ================= */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="mx-auto max-w-xl">
              {/* Header */}
              <div className="form-header mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9FBF8]">
                  <FiUserPlus className="text-xl text-[#00BFAF]" />
                </div>

                <h2 className="text-2xl font-bold text-[#14213D] sm:text-3xl">
                  Create your account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Please provide your information to get started.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name Fields */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* First Name */}
                  <div className="form-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      First Name
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        {...register("fname", {
                          required: "First name is required",
                        })}
                        type="text"
                        placeholder="Enter first name"
                        className={`h-11 w-full rounded-lg border bg-white pl-11 pr-4 text-sm outline-none transition ${
                          errors.fname
                            ? "border-red-400"
                            : "border-slate-200"
                        } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                      />
                    </div>

                    {errors.fname && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.fname.message}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="form-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      Last Name
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        {...register("lname", {
                          required: "Last name is required",
                        })}
                        type="text"
                        placeholder="Enter last name"
                        className={`h-11 w-full rounded-lg border bg-white pl-11 pr-4 text-sm outline-none transition ${
                          errors.lname
                            ? "border-red-400"
                            : "border-slate-200"
                        } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                      />
                    </div>

                    {errors.lname && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.lname.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="form-item">
                  <label className="mb-2 block text-sm font-semibold text-[#344054]">
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      className={`h-11 w-full rounded-lg border bg-white pl-11 pr-4 text-sm outline-none transition ${
                        errors.email
                          ? "border-red-400"
                          : "border-slate-200"
                      } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="form-item">
                  <label className="mb-2 block text-sm font-semibold text-[#344054]">
                    Phone Number
                  </label>

                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      type="tel"
                      placeholder="Enter your phone number"
                      className={`h-11 w-full rounded-lg border bg-white pl-11 pr-4 text-sm outline-none transition ${
                        errors.phone
                          ? "border-red-400"
                          : "border-slate-200"
                      } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Password Fields */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Password */}
                  <div className="form-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      Password
                    </label>

                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        {...register("password", {
                          required: "Password is required",
                          pattern: {
                            value:
                              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                            message:
                              "Use 6+ characters with uppercase, lowercase and number",
                          },
                        })}
                        type={passwordEye ? "text" : "password"}
                        placeholder="Create password"
                        className={`h-11 w-full rounded-lg border bg-white pl-11 pr-11 text-sm outline-none transition ${
                          errors.password
                            ? "border-red-400"
                            : "border-slate-200"
                        } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                      />

                      <button
                        type="button"
                        onClick={() => setPasswordEye(!passwordEye)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition hover:text-[#00BFAF]"
                        aria-label="Toggle password visibility"
                      >
                        {passwordEye ? (
                          <AiFillEye />
                        ) : (
                          <AiFillEyeInvisible />
                        )}
                      </button>
                    </div>

                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="form-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === password || "Passwords do not match",
                        })}
                        type={confirmPasswordEye ? "text" : "password"}
                        placeholder="Confirm password"
                        className={`h-11 w-full rounded-lg border bg-white pl-11 pr-11 text-sm outline-none transition ${
                          errors.confirmPassword
                            ? "border-red-400"
                            : "border-slate-200"
                        } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setConfirmPasswordEye(!confirmPasswordEye)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition hover:text-[#00BFAF]"
                        aria-label="Toggle confirm password visibility"
                      >
                        {confirmPasswordEye ? (
                          <AiFillEye />
                        ) : (
                          <AiFillEyeInvisible />
                        )}
                      </button>
                    </div>

                    {errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="form-item pt-2">
                  <button
                    type="submit"
                    disabled={
                      !isDirty ||
                      !isValid ||
                      password !== confirmPassword
                    }
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#00BFAF] to-[#0B5FEA] text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    <FiUserPlus className="text-base" />
                    Create Account
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <div className="form-item mt-5 text-center text-sm text-slate-500">
                Already registered?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#00AFA0] transition hover:underline"
                >
                  Login now
                </Link>
              </div>

              {/* Divider */}
              <div className="form-item divider my-6 text-xs text-slate-400">
                OR REGISTER WITH
              </div>

              {/* Google Button */}
              <div className="form-item">
                <GoogleBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;