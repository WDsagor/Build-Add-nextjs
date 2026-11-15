"use client";

import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiCheckCircle,
  FiKey,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";

interface ResetPasswordFormData {
  email: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
}

interface RequestResetFormData {
  email: string;
}

const Page = () => {
  const [step, setStep] = useState<"request" | "reset">("request");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const {
    register: registerRequest,
    handleSubmit: handleSubmitRequest,
    formState: { errors: requestErrors },
    reset: resetRequestForm,
  } = useForm<RequestResetFormData>({
    mode: "onTouched",
  });

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors: resetErrors },
    watch,
    reset: resetResetForm,
  } = useForm<ResetPasswordFormData>({
    mode: "onTouched",
  });

  const newPassword = watch("newPassword");

  /* ================= GSAP ANIMATION ================= */

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".reset-card",
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
        .fromTo(
          ".reset-brand",
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
        .fromTo(
          ".reset-header",
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
        .fromTo(
          ".reset-item",
          {
            opacity: 0,
            y: 15,
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

      // Floating background animation
      gsap.to(".circle-one", {
        x: 20,
        y: 25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".circle-two", {
        x: -15,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  // Step change animation
  const animateStep = () => {
    gsap.fromTo(
      ".step-content",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        ease: "power2.out",
      },
    );
  };

  /* ================= FORM FUNCTIONS ================= */

  const onRequestSubmit: SubmitHandler<
    RequestResetFormData
  > = async (data) => {
    setIsLoading(true);

    try {
      console.log("Request reset for:", data.email);

      // আপনার API call এখানে দিন
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStep("reset");
      resetRequestForm();

      // নতুন step animation
      setTimeout(animateStep, 50);
    } catch (error) {
      console.error("Error requesting reset:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onResetSubmit: SubmitHandler<
    ResetPasswordFormData
  > = async (data) => {
    setIsLoading(true);

    try {
      console.log("Resetting password:", data);

      // আপনার API call এখানে দিন
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      resetResetForm();
    } catch (error) {
      console.error("Error resetting password:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep("request");
    resetRequestForm();
    resetResetForm();
  };

  /* ================= SUCCESS SCREEN ================= */

  if (isSubmitted) {
    return (
      <main
        ref={containerRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F7FB] px-4"
      >
        <div className="circle-one absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00CBB8]/10 blur-3xl" />
        <div className="circle-two absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0B5FEA]/10 blur-3xl" />

        <div className="reset-card relative z-10 w-full max-w-md rounded-2xl border border-[#C8F5EF] bg-white p-8 text-center shadow-xl sm:p-10">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#E9FBF8]">
            <FiCheckCircle className="h-11 w-11 text-[#00BFAF]" />
          </div>

          <h2 className="text-2xl font-bold text-[#14213D]">
            Password Reset Successfully!
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your password has been reset successfully. You can now login
            with your new password.
          </p>

          <Link
            href="/login"
            className="mt-7 flex h-12 w-full items-center justify-center rounded-lg bg-linear-to-r from-[#00BFAF] to-[#0B5FEA] text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Go to Login
          </Link>

          <button
            onClick={handleReset}
            className="mt-4 text-sm font-medium text-[#00AFA0] transition hover:underline"
          >
            Reset another password
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#F4F7FB] px-4 py-6 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="circle-one pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00CBB8]/10 blur-3xl" />

      <div className="circle-two pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0B5FEA]/10 blur-3xl" />

      {/* Top Brand */}
      <div className="relative z-10 mx-auto flex max-w-5xl items-center justify-between py-3">
        

        <Link
          href="/login"
          className="hidden items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#00BFAF] sm:flex"
        >
          <FiArrowLeft />
          Back to Login
        </Link>
      </div>

      {/* Main Content */}
      <section className="relative z-10 mx-auto flex min-h-[calc(80vh-100px)] max-w-5xl items-center justify-center py-6">
        <div className="reset-card grid w-full overflow-hidden rounded-2xl border border-[#C8F5EF] bg-white shadow-xl lg:grid-cols-2">
          
          {/* Left Branding */}
          <div className="relative hidden overflow-hidden bg-linear-to-br from-[#00CBB8] via-[#00AFA0] to-[#0B5FEA] p-10 text-white lg:block">
            <div className="reset-brand relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur-sm">
                <FiShield />
              </div>

              <h1 className="text-4xl font-bold leading-tight">
                Secure your
                <br />
                account
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/80">
                Don't worry. It happens to everyone. Follow the simple
                steps to reset your password and get back to your account.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    1
                  </span>
                  Enter your email address
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    2
                  </span>
                  Verify your OTP code
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    3
                  </span>
                  Create a secure password
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[45px] border-white/10" />
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/5" />
          </div>

          {/* Right Form */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              
              {/* Header */}
              <div className="reset-header mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9FBF8]">
                  <FiKey className="text-xl text-[#00BFAF]" />
                </div>

                <h1 className="text-2xl font-bold text-[#14213D] sm:text-3xl">
                  {step === "request"
                    ? "Reset Password"
                    : "Create New Password"}
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  {step === "request"
                    ? "Enter your email and we'll send you an OTP code."
                    : "Enter your OTP and create a secure new password."}
                </p>
              </div>

              {/* ================= STEP 1 ================= */}
              {step === "request" && (
                <form
                  onSubmit={handleSubmitRequest(onRequestSubmit)}
                  className="step-content space-y-6"
                >
                  <div className="reset-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      Email Address
                    </label>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                      <input
                        {...registerRequest("email", {
                          required: "Email address is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message:
                              "Please enter a valid email address",
                          },
                        })}
                        type="email"
                        placeholder="Enter your email"
                        disabled={isLoading}
                        className={`h-12 w-full rounded-lg border bg-white pl-11 pr-4 text-sm outline-none transition ${
                          requestErrors.email
                            ? "border-red-400"
                            : "border-slate-200"
                        } focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10`}
                      />
                    </div>

                    {requestErrors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {requestErrors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="reset-item">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#00BFAF] to-[#0B5FEA] text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? (
                        <>
                          <FiRefreshCw className="animate-spin" />
                          Sending OTP...
                        </>
                      ) : (
                        <>
                          <FiMail />
                          Send OTP
                        </>
                      )}
                    </button>
                  </div>

                  <div className="reset-item text-center">
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#00AFA0] hover:underline"
                    >
                      <FiArrowLeft />
                      Back to Login
                    </Link>
                  </div>
                </form>
              )}

              {/* ================= STEP 2 ================= */}
              {step === "reset" && (
                <form
                  onSubmit={handleSubmitReset(onResetSubmit)}
                  className="step-content space-y-5"
                >
                  <input type="hidden" {...registerReset("email")} />

                  {/* OTP */}
                  <div className="reset-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      OTP Code
                    </label>

                    <input
                      {...registerReset("otp", {
                        required: "OTP is required",
                        minLength: {
                          value: 6,
                          message: "OTP must be 6 digits",
                        },
                        maxLength: {
                          value: 6,
                          message: "OTP must be 6 digits",
                        },
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: "OTP must contain 6 digits",
                        },
                      })}
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                      disabled={isLoading}
                      className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-center text-xl tracking-[0.4em] outline-none transition focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10"
                    />

                    {resetErrors.otp && (
                      <p className="mt-1 text-xs text-red-500">
                        {resetErrors.otp.message}
                      </p>
                    )}

                    <button
                      type="button"
                      className="mt-2 text-xs font-semibold text-[#00AFA0] hover:underline"
                      onClick={() => console.log("Resend OTP")}
                    >
                      Resend OTP
                    </button>
                  </div>

                  {/* New Password */}
                  <div className="reset-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      New Password
                    </label>

                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        {...registerReset("newPassword", {
                          required: "New password is required",
                          minLength: {
                            value: 8,
                            message:
                              "Password must be at least 8 characters",
                          },
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:
                              "Password must contain uppercase, lowercase, number and special character",
                          },
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        disabled={isLoading}
                        className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-11 text-sm outline-none transition focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#00BFAF]"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>

                    {resetErrors.newPassword && (
                      <p className="mt-1 text-xs text-red-500">
                        {resetErrors.newPassword.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="reset-item">
                    <label className="mb-2 block text-sm font-semibold text-[#344054]">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        {...registerReset("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === newPassword ||
                            "Passwords do not match",
                        })}
                        type={
                          showConfirmPassword ? "text" : "password"
                        }
                        placeholder="Confirm new password"
                        disabled={isLoading}
                        className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-11 text-sm outline-none transition focus:border-[#00CBB8] focus:ring-4 focus:ring-[#00CBB8]/10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword,
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#00BFAF]"
                      >
                        {showConfirmPassword ? (
                          <FiEyeOff />
                        ) : (
                          <FiEye />
                        )}
                      </button>
                    </div>

                    {resetErrors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">
                        {resetErrors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="reset-item">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#00BFAF] to-[#0B5FEA] text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? (
                        <>
                          <FiRefreshCw className="animate-spin" />
                          Resetting Password...
                        </>
                      ) : (
                        <>
                          <FiCheckCircle />
                          Reset Password
                        </>
                      )}
                    </button>
                  </div>

                  <div className="reset-item text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setStep("request");
                        setTimeout(animateStep, 50);
                      }}
                      disabled={isLoading}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#00AFA0] hover:underline"
                    >
                      <FiArrowLeft />
                      Back to Request OTP
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;