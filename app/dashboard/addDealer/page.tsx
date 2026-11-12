"use client";

import React, { useRef } from "react";
import { useForm, useWatch, useFieldArray } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiTrash2,
  FiPlus,
  FiUser,
  FiBriefcase,
  FiUploadCloud,
  FiMapPin,
} from "react-icons/fi";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  presentAdd: string;
  permanentAdd: string;
  companyName: string;
  companyEmail: string;
  proprietorName: string;
  contactPersonNo: string;
  businessPresentAdd: string;
  tradeCopy: FileList;
  addMore: { value: string }[];
  interestedArea: string;
  term: boolean;
}

const AddDealerPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dynamicListRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      presentAdd: "",
      permanentAdd: "",
      companyName: "",
      companyEmail: "",
      proprietorName: "",
      contactPersonNo: "",
      businessPresentAdd: "",
      tradeCopy: undefined,
      addMore: [],
      interestedArea: "",
      term: false,
    },
  });

  const term = useWatch<FormData>({
    control,
    name: "term",
  });

  const {
    fields: moreFields,
    append: moreAppend,
    remove: moreRemove,
  } = useFieldArray<FormData>({
    control,
    name: "addMore" as const,
  });

  // GSAP Animations using useGSAP
  useGSAP(
    () => {
      gsap.from(".gsap-header", {
        y: -25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".gsap-form-card", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });

      const sections = gsap.utils.toArray<HTMLElement>(".gsap-section");
      sections.forEach((section) => {
        gsap.from(section, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".gsap-footer", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".gsap-footer",
          start: "top 95%",
        },
      });
    },
    { scope: containerRef }
  );

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  const handleAddMore = () => {
    moreAppend({ value: "" });
    requestAnimationFrame(() => {
      if (dynamicListRef.current) {
        const lastItem = dynamicListRef.current.lastElementChild;
        if (lastItem) {
          gsap.fromTo(
            lastItem,
            { opacity: 0, y: -12, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.4)" }
          );
        }
      }
    });
  };

  const handleRemoveMore = (index: number) => {
    if (dynamicListRef.current) {
      const targetItem = dynamicListRef.current.children[index];
      if (targetItem) {
        gsap.to(targetItem, {
          opacity: 0,
          x: 20,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => moreRemove(index),
        });
        return;
      }
    }
    moreRemove(index);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
    >
      <div className=" mx-auto">
        {/* Page Header */}
        <div className="gsap-header  mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
            Apply for New Dealership
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Please fill out the information below accurately to register as our authorized dealer partner.
          </p>
        </div>

        {/* Main Form Container */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gsap-form-card bg-white shadow-xl rounded-2xl border border-teal-100 overflow-hidden"
        >
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* 1. Personal Information Section */}
            <div className="gsap-section space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-teal-50">
                <div className="p-2.5 bg-teal-50 text-[#00D2B8] rounded-xl">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Personal Information</h2>
                  <p className="text-xs text-slate-400">Your basic contact details and address</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* First Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      First Name <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("firstName", { required: "First name is required" })}
                    type="text"
                    placeholder="Enter first name"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.firstName ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.firstName && (
                    <span className="text-error text-xs mt-1">{errors.firstName.message}</span>
                  )}
                </div>

                {/* Last Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Last Name <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("lastName", { required: "Last name is required" })}
                    type="text"
                    placeholder="Enter last name"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.lastName ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-error text-xs mt-1">{errors.lastName.message}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Phone Number <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("phoneNumber", { required: "Number is required" })}
                    type="tel"
                    placeholder="017XXXXXXXX"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.phoneNumber ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.phoneNumber && (
                    <span className="text-error text-xs mt-1">{errors.phoneNumber.message}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Email Address <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email address required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="name@example.com"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.email ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-error text-xs mt-1">{errors.email.message}</span>
                  )}
                </div>

                {/* Present Address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Present Address <span className="text-error">*</span>
                    </span>
                  </label>
                  <textarea
                    {...register("presentAdd", { required: "Please provide present address" })}
                    rows={3}
                    placeholder="Village/City, Police Station, District"
                    className={`textarea textarea-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.presentAdd ? "textarea-error" : "border-slate-300"
                    }`}
                  />
                  {errors.presentAdd && (
                    <span className="text-error text-xs mt-1">{errors.presentAdd.message}</span>
                  )}
                </div>

                {/* Permanent Address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Permanent Address <span className="text-error">*</span>
                    </span>
                  </label>
                  <textarea
                    {...register("permanentAdd", { required: "Please provide permanent address" })}
                    rows={3}
                    placeholder="Village/City, Police Station, District"
                    className={`textarea textarea-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.permanentAdd ? "textarea-error" : "border-slate-300"
                    }`}
                  />
                  {errors.permanentAdd && (
                    <span className="text-error text-xs mt-1">{errors.permanentAdd.message}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="divider my-2"></div>

            {/* 2. Business Details Section */}
            <div className="gsap-section space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-teal-50">
                <div className="p-2.5 bg-teal-50 text-[#00D2B8] rounded-xl">
                  <FiBriefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Business Details</h2>
                  <p className="text-xs text-slate-400">Company information and legal documentation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Company Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Company or Dealer Name <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("companyName", { required: "Company or Dealer name is required" })}
                    type="text"
                    placeholder="Enter company or shop name"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.companyName ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.companyName && (
                    <span className="text-error text-xs mt-1">{errors.companyName.message}</span>
                  )}
                </div>

                {/* Company Email */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Company Email Address <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("companyEmail", {
                      required: "Company email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="company@mail.com"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.companyEmail ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.companyEmail && (
                    <span className="text-error text-xs mt-1">{errors.companyEmail.message}</span>
                  )}
                </div>

                {/* Proprietor Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Proprietor Name <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("proprietorName", { required: "Company or Dealer proprietor name is required" })}
                    type="text"
                    placeholder="Enter proprietor full name"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.proprietorName ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.proprietorName && (
                    <span className="text-error text-xs mt-1">{errors.proprietorName.message}</span>
                  )}
                </div>

                {/* Contact Person Phone Number */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Contact Person Phone Number <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    {...register("contactPersonNo", { required: "Contact person phone number is required" })}
                    type="tel"
                    placeholder="018XXXXXXXX"
                    className={`input input-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.contactPersonNo ? "input-error" : "border-slate-300"
                    }`}
                  />
                  {errors.contactPersonNo && (
                    <span className="text-error text-xs mt-1">{errors.contactPersonNo.message}</span>
                  )}
                </div>

                {/* Business Address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Business Place Address <span className="text-error">*</span>
                    </span>
                  </label>
                  <textarea
                    {...register("businessPresentAdd", { required: "Please provide business address" })}
                    rows={3}
                    placeholder="Market/Area, City, Police Station, District"
                    className={`textarea textarea-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                      errors.businessPresentAdd ? "textarea-error" : "border-slate-300"
                    }`}
                  />
                  {errors.businessPresentAdd && (
                    <span className="text-error text-xs mt-1">{errors.businessPresentAdd.message}</span>
                  )}
                </div>

                {/* Trade License Upload */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-slate-700">
                      Trade License Copy <span className="text-error">*</span>
                    </span>
                  </label>
                  <div className={`border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center bg-teal-50/30 hover:bg-teal-50/60 transition-colors ${
                    errors.tradeCopy ? "border-error" : "border-teal-200"
                  }`}>
                    <FiUploadCloud className="w-6 h-6 text-[#00D2B8] mb-1" />
                    <input
                      {...register("tradeCopy", { required: "Company or Dealer trade license is required" })}
                      type="file"
                      className="file-input file-input-bordered file-input-sm w-full max-w-xs mt-1 border-teal-200"
                    />
                    <span className="text-[11px] text-slate-400 mt-1">Upload PDF, JPG or PNG</span>
                  </div>
                  {errors.tradeCopy && (
                    <span className="text-error text-xs mt-1">{errors.tradeCopy.message}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="divider my-2"></div>

            {/* 3. Territory & Additional Info Section */}
            <div className="gsap-section space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-teal-50">
                <div className="p-2.5 bg-teal-50 text-[#00D2B8] rounded-xl">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Territory & Additional Info</h2>
                  <p className="text-xs text-slate-400">Dealership area and extra details</p>
                </div>
              </div>

              {/* Interested Area */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-slate-700">
                    Interested Area of Dealership <span className="text-error">*</span>
                  </span>
                </label>
                <textarea
                  {...register("interestedArea", {
                    required: "Please provide details your area, zone, where you want to business",
                  })}
                  rows={3}
                  placeholder="Specify district, upazila, or market zone where you want to operate..."
                  className={`textarea textarea-bordered w-full transition-all duration-200 focus:border-[#00D2B8] focus:outline-none ${
                    errors.interestedArea ? "textarea-error" : "border-slate-300"
                  }`}
                />
                {errors.interestedArea && (
                  <span className="text-error text-xs mt-1">{errors.interestedArea.message}</span>
                )}
              </div>

              {/* Dynamic Add More Fields */}
              <div className="bg-teal-50/25 p-4 sm:p-5 rounded-xl border border-teal-100">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-sm font-semibold text-slate-800">
                      Additional Information (Optional)
                    </span>
                    <p className="text-xs text-slate-400">Add extra custom info or notes</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddMore}
                    className="btn btn-sm btn-outline border-[#00D2B8] text-[#00D2B8] hover:bg-[#00D2B8] hover:border-[#00D2B8] hover:text-white gap-1 active:scale-95 transition-transform"
                  >
                    <FiPlus className="w-4 h-4" /> Add Field
                  </button>
                </div>

                {moreFields.length > 0 && (
                  <div ref={dynamicListRef} className="space-y-3 mt-3">
                    {moreFields.map((item, index) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <input
                          {...register(`addMore.${index}.value` as const)}
                          type="text"
                          placeholder={`Extra information #${index + 1}`}
                          className="input input-bordered input-sm sm:input-md w-full bg-white border-slate-300 focus:border-[#00D2B8] focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveMore(index)}
                          aria-label="Remove field"
                          className="btn btn-square btn-sm sm:btn-md btn-ghost text-error hover:bg-error/15 active:scale-90 transition-transform"
                        >
                          <FiTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Form Footer / Submit Bar */}
          <div className="gsap-footer bg-[#F0FDF9]/80 px-6 sm:px-10 py-5 border-t border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <label className="label cursor-pointer justify-start gap-3 p-0">
              <input
                type="checkbox"
                {...register("term")}
                className="checkbox checkbox-sm border-slate-300 [--chkbg:theme(colors.teal.400)] [--chkfg:white] checked:border-[#00D2B8]"
                id="terms"
              />
              <span className="cursor-pointer text-sm font-medium text-slate-700">
                I agree to the <span className="text-[#00D2B8] hover:underline">Terms & Conditions</span>
              </span>
            </label>

            <button
              disabled={!term}
              type="submit"
              className="btn bg-[#00D2B8] hover:bg-[#00beb0] text-slate-900 font-semibold border-none w-full sm:w-auto px-8 shadow-md active:scale-95 transition-transform disabled:bg-slate-200 disabled:text-slate-400"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDealerPage;