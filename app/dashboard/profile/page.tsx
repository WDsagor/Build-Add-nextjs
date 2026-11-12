"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RxCrossCircled } from "react-icons/rx";
import { MdEdit, MdCameraAlt, MdVerified } from "react-icons/md";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

interface ProfileFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  presentAdd: string;
  permanentAdd: string;
}

const ProfilePage = () => {
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [imgUrl, setImgUrl] = useState<string>("/images/Logo.png");

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const updateButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  // Fixed GSAP Animations using fromTo + clearProps so elements never stay faded
  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          clearProps: "opacity,transform",
        }
      );

      gsap.fromTo(
        titleRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          delay: 0.1,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        editButtonRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.15,
          ease: "back.out(1.5)",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        avatarRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: "back.out(1.7)",
          clearProps: "all",
        }
      );

      if (formRef.current) {
        const formItems = formRef.current.querySelectorAll(".form-item");
        gsap.fromTo(
          formItems,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            delay: 0.25,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    },
    { scope: containerRef }
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, errors },
  } = useForm<ProfileFormInput>({
    mode: "onChange",
    defaultValues: {
      firstName: "Sagar",
      lastName: "Edbar",
      email: "sagar@email.com",
      phoneNumber: "01655555249",
      presentAdd: "Null",
      permanentAdd: "Null",
    },
  });

  const watchedFirstName = watch("firstName");
  const watchedLastName = watch("lastName");
  const watchedEmail = watch("email");

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImgUrl(url);

      if (avatarRef.current) {
        gsap.fromTo(
          avatarRef.current,
          { scale: 0.85, rotation: -6 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(2)",
            clearProps: "all",
          }
        );
      }
    }
  };

  const onSubmit: SubmitHandler<ProfileFormInput> = (data) => {
    console.log(data);
    setIsEdit(true);

    if (updateButtonRef.current) {
      gsap.fromTo(
        updateButtonRef.current,
        { scale: 0.96 },
        {
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    }
  };

  const handleEditToggle = () => {
    setIsEdit(!isEdit);

    if (editButtonRef.current) {
      gsap.fromTo(
        editButtonRef.current,
        { scale: 0.92 },
        { scale: 1, duration: 0.25, ease: "back.out(2)", clearProps: "all" }
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="max-w-5xl mx-auto rounded-3xl bg-white shadow-xl shadow-slate-200/60 border border-slate-200/80 overflow-hidden mb-10"
    >
      <title>Profile | Super FIXIT Ltd</title>

      {/* Top Cover Banner */}
      <div className="relative z-10 h-36 sm:h-44 bg-gradient-to-r from-teal-900 via-teal-800 to-blue-900 px-6 sm:px-10 pt-6">
        {/* Decorative Glows */}
        <div className="absolute -top-16 -right-16 w-60 h-60 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-32 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header Row inside Banner */}
        <div className="relative z-20 flex items-center justify-between gap-4">
          <div>
            <h1
              ref={titleRef}
              className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight"
            >
              Account <span className="text-teal-300">Profile</span>
            </h1>
            <p className="text-teal-100/90 text-xs sm:text-sm hidden sm:block mt-1 font-medium">
              Manage your personal details and contact information
            </p>
          </div>

          <button
            ref={editButtonRef}
            type="button"
            onClick={handleEditToggle}
            className={`relative z-30 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors duration-200 shadow-lg cursor-pointer ${
              isEdit
                ? "bg-white text-slate-900 hover:bg-teal-50"
                : "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/30"
            }`}
          >
            {isEdit ? (
              <>
                <MdEdit size={18} className="text-teal-600" />
                <span>Edit Profile</span>
              </>
            ) : (
              <>
                <RxCrossCircled size={18} />
                <span>Cancel</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overlapping Avatar & User Identity Section */}
      <div className="px-6 sm:px-10 pb-8">
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-14 sm:-mt-16 pb-6 border-b border-slate-100 pointer-events-none">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 text-center sm:text-left pointer-events-auto">
            {/* Avatar */}
            <div className="relative group">
              <label
                htmlFor="profileImg"
                className={`block relative ${
                  !isEdit ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div
                  ref={avatarRef}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-4 ring-white bg-white shadow-xl overflow-hidden relative"
                >
                  <Image
                    width={200}
                    height={200}
                    src={imgUrl}
                    alt="Profile Avatar"
                    className="object-cover w-full h-full"
                    priority
                  />

                  {/* Camera Overlay when Edit Mode is ON */}
                  {!isEdit && (
                    <div className="absolute inset-0 bg-slate-900/55 flex flex-col items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity">
                      <MdCameraAlt size={24} className="text-teal-300" />
                      <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
                        Upload
                      </span>
                    </div>
                  )}
                </div>
              </label>

              <input
                className="hidden"
                id="profileImg"
                type="file"
                accept="image/*"
                onChange={imageChange}
                disabled={isEdit}
              />
            </div>

            {/* Name, Email & Rating */}
            <div className="space-y-1  py-5">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="text-xl sm:text-2xl sm:text-white font-extrabold text-slate-900">
                  {watchedFirstName} {watchedLastName}
                </h2>
                <MdVerified
                  size={20}
                  className="text-blue-600 shrink-0"
                  title="Verified Account"
                />
              </div>
              <p className="text-sm text-slate-500 font-medium">
                {watchedEmail}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1 pt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4 ? "text-amber-400" : "text-slate-200"
                    }`}
                  />
                ))}
                <span className="text-xs font-semibold text-slate-400 ml-1.5">
                  Member Profile
                </span>
              </div>
            </div>
          </div>

          {/* Mode Status Pill */}
          <div className="self-center sm:self-end pointer-events-auto">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${
                isEdit
                  ? "bg-slate-50 text-slate-600 border-slate-200"
                  : "bg-teal-50 text-teal-700 border-teal-200"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isEdit ? "bg-slate-400" : "bg-teal-500 animate-pulse"
                }`}
              />
              {isEdit ? "View Only Mode" : "Editing Enabled"}
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div ref={formRef} className="w-full pt-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-6 bg-gradient-to-b from-teal-500 to-blue-600 rounded-full" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Personal Information
              </h3>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            {/* First & Last Name Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* First Name */}
              <div className="form-item space-y-1.5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <FaUser className="text-teal-600 w-3.5 h-3.5" />
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  disabled={isEdit}
                  type="text"
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none ${
                    isEdit
                      ? "bg-slate-50/80 border-slate-200/80 text-slate-700 cursor-default"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-sm"
                  }`}
                />
                {errors.firstName?.type === "required" && (
                  <small className="text-rose-500 text-xs font-medium block">
                    First name is required
                  </small>
                )}
              </div>

              {/* Last Name */}
              <div className="form-item space-y-1.5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <FaUser className="text-teal-600 w-3.5 h-3.5" />
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  disabled={isEdit}
                  type="text"
                  placeholder="Enter your last name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none ${
                    isEdit
                      ? "bg-slate-50/80 border-slate-200/80 text-slate-700 cursor-default"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-sm"
                  }`}
                />
                {errors.lastName?.type === "required" && (
                  <small className="text-rose-500 text-xs font-medium block">
                    Last name is required
                  </small>
                )}
              </div>
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone Number */}
              <div className="form-item space-y-1.5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <FaPhoneAlt className="text-teal-600 w-3.5 h-3.5" />
                  Phone Number
                </label>
                <input
                  {...register("phoneNumber", { required: true })}
                  disabled={isEdit}
                  type="tel"
                  placeholder="Type your phone number"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none ${
                    isEdit
                      ? "bg-slate-50/80 border-slate-200/80 text-slate-700 cursor-default"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-sm"
                  }`}
                />
                {errors.phoneNumber?.type === "required" && (
                  <small className="text-rose-500 text-xs font-medium block">
                    Phone number is required
                  </small>
                )}
              </div>

              {/* Email Address */}
              <div className="form-item space-y-1.5">
                <label className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700">
                  <span className="flex items-center gap-2">
                    <FaEnvelope className="text-slate-400 w-3.5 h-3.5" />
                    Email Address
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    Cannot change
                  </span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-100/80 text-slate-500 text-sm font-medium cursor-not-allowed outline-none"
                  disabled
                />
              </div>
            </div>

            {/* Present & Permanent Address Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Present Address */}
              <div className="form-item space-y-1.5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <FaMapMarkerAlt className="text-teal-600 w-3.5 h-3.5" />
                  Present Address
                </label>
                <textarea
                  {...register("presentAdd", { required: true })}
                  disabled={isEdit}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none resize-y ${
                    isEdit
                      ? "bg-slate-50/80 border-slate-200/80 text-slate-700 cursor-default"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-sm"
                  }`}
                  placeholder="Enter your present address"
                />
                {errors?.presentAdd && (
                  <small className="text-rose-500 text-xs font-medium block">
                    Please provide present address
                  </small>
                )}
              </div>

              {/* Permanent Address */}
              <div className="form-item space-y-1.5">
                <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <FaMapMarkerAlt className="text-teal-600 w-3.5 h-3.5" />
                  Permanent Address
                </label>
                <textarea
                  {...register("permanentAdd", { required: true })}
                  disabled={isEdit}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none resize-y ${
                    isEdit
                      ? "bg-slate-50/80 border-slate-200/80 text-slate-700 cursor-default"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 shadow-sm"
                  }`}
                  placeholder="Enter your permanent address"
                />
                {errors?.permanentAdd && (
                  <small className="text-rose-500 text-xs font-medium block">
                    Please provide permanent address
                  </small>
                )}
              </div>
            </div>

            {/* Submit Button (Only prominent when editing) */}
            {!isEdit && (
              <div className="pt-2 flex justify-end">
                <button
                  ref={updateButtonRef}
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-teal-600/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  disabled={!isDirty}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {!isDirty ? "No Changes to Save" : "Save & Update Profile"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;