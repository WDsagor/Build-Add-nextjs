"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiCheckCircle,
} from "react-icons/fi";
import Link from "next/link";

// Define form data types
interface ResetPasswordFormData {
  email: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
}

interface RequestResetFormData {
  email: string;
}

const page = () => {
  const [step, setStep] = useState<"request" | "reset">("request");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form for requesting password reset
  const {
    register: registerRequest,
    handleSubmit: handleSubmitRequest,
    formState: { errors: requestErrors },
    reset: resetRequestForm,
  } = useForm<RequestResetFormData>({
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  // Form for resetting password
  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors: resetErrors },
    watch,
    reset: resetResetForm,
  } = useForm<ResetPasswordFormData>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      otp: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  // Handle request reset submission
  const onRequestSubmit: SubmitHandler<RequestResetFormData> = async (data) => {
    setIsLoading(true);
    try {
      console.log("Request reset for:", data.email);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("reset");
      resetRequestForm();
    } catch (error) {
      console.error("Error requesting reset:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle reset password submission
  const onResetSubmit: SubmitHandler<ResetPasswordFormData> = async (data) => {
    setIsLoading(true);
    try {
      console.log("Resetting password:", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      resetResetForm();
    } catch (error) {
      console.error("Error resetting password:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset to initial state
  const handleReset = () => {
    setIsSubmitted(false);
    setStep("request");
    resetRequestForm();
    resetResetForm();
  };

  // If password reset is successful
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="bg-linear-to-b from-accent to-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <FiCheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Password Reset Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Your password has been reset successfully. You can now login with
              your new password.
            </p>
            <Link href="/login" className="btn btn-accent w-full">
              Go to Login
            </Link>
            <button
              onClick={handleReset}
              className="mt-3 text-sm text-primary hover:font-medium"
            >
              Reset another password
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-linear-to-b from-accent to-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">
            {step === "request" ? "Reset Password" : "Create New Password"}
          </h1>
          <p className="text-gray-600 mt-2">
            {step === "request"
              ? "Enter your email address and we'll send you an OTP"
              : "Enter the OTP and create your new password"}
          </p>
        </div>

        {/* Step 1: Request Reset */}
        {step === "request" && (
          <form onSubmit={handleSubmitRequest(onRequestSubmit)}>
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...registerRequest("email", {
                      required: "Email address is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-3 py-2.5 border rounded-lg input-bordered bg-transparent border-primary/50"
                    disabled={isLoading}
                  />
                </div>
                {requestErrors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {requestErrors.email.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn btn-accent py-2.5  font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending OTP...
                  </div>
                ) : (
                  "Send OTP"
                )}
              </button>

              {/* Back to Login */}
              <div className="text-center mt-4">
                <Link
                  href="/login"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to Login
                </Link>
              </div>
            </div>
          </form>
        )}

        {/* Step 2: Reset Password */}
        {step === "reset" && (
          <form onSubmit={handleSubmitReset(onResetSubmit)}>
            <div className="space-y-5">
              {/* Email Field (Hidden but required for validation) */}
              <input type="hidden" {...registerReset("email")} />

              {/* OTP Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  OTP Code <span className="text-red-500">*</span>
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
                      message: "OTP must be 6 digits",
                    },
                  })}
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  className="w-full text-center text-2xl px-3 py-2.5 border input input-bordered bg-transparent border-primary/50"
                  maxLength={6}
                  disabled={isLoading}
                />
                {resetErrors.otp && (
                  <p className="mt-1 text-sm text-red-500">
                    {resetErrors.otp.message}
                  </p>
                )}
                <button
                  type="button"
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  onClick={() => console.log("Resend OTP")}
                >
                  Resend OTP
                </button>
              </div>

              {/* New Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...registerReset("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain uppercase, lowercase, number, and special character",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    className="w-full pl-10 pr-10 py-2.5 border input input-bordered bg-transparent border-primary/50"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {resetErrors.newPassword && (
                  <p className="mt-1 text-sm text-red-500">
                    {resetErrors.newPassword.message}
                  </p>
                )}
                {/* Password Requirements */}
                <div className="mt-2 text-xs text-gray-500 space-y-1">
                  <p>Password must contain:</p>
                  <ul className="list-disc list-inside ml-2 space-y-0.5">
                    <li
                      className={
                        newPassword && /[a-z]/.test(newPassword)
                          ? "text-green-500"
                          : ""
                      }
                    >
                      At least one lowercase letter
                    </li>
                    <li
                      className={
                        newPassword && /[A-Z]/.test(newPassword)
                          ? "text-green-500"
                          : ""
                      }
                    >
                      At least one uppercase letter
                    </li>
                    <li
                      className={
                        newPassword && /\d/.test(newPassword)
                          ? "text-green-500"
                          : ""
                      }
                    >
                      At least one number
                    </li>
                    <li
                      className={
                        newPassword && /[@$!%*?&]/.test(newPassword)
                          ? "text-green-500"
                          : ""
                      }
                    >
                      At least one special character (@$!%*?&)
                    </li>
                    <li
                      className={
                        newPassword && newPassword.length >= 8
                          ? "text-green-500"
                          : ""
                      }
                    >
                      Minimum 8 characters
                    </li>
                  </ul>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...registerReset("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === newPassword || "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    className="w-full pl-10 pr-10 py-2.5 border input input-bordered bg-transparent border-primary/50"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {resetErrors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">
                    {resetErrors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn btn-accent py-2.5 font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Resetting Password...
                  </div>
                ) : (
                  "Reset Password"
                )}
              </button>

              {/* Back to Request */}
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setStep("request")}
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                  disabled={isLoading}
                >
                  <FiArrowLeft className="mr-2" />
                  Back to Request OTP
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default page;
