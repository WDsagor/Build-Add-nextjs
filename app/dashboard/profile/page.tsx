"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RxCrossCircled } from "react-icons/rx";
import { MdEdit } from "react-icons/md";

interface ProfileFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  presentAdd: string;
  permanentAdd: string;
}

const Page = () => {
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

  // GSAP Animations
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Container fade-in
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      // Title animation with typing effect
      gsap.from(titleRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      });

      // Edit button rotation and scale
      gsap.from(editButtonRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(1.7)",
      });

      // Avatar bounce and rotation
      gsap.from(avatarRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        delay: 0.3,
        ease: "back.out(2)",
      });

      // Form fields staggered animation
      if (formRef.current) {
        const formItems = formRef.current.querySelectorAll(
          ".form-item, .form-group",
        );
        gsap.from(formItems, {
          opacity: 0,
          x: -30,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.5,
          ease: "power2.out",
        });
      }

      // Update button pulse animation
      gsap.from(updateButtonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 0.9,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const {
    register,
    handleSubmit,
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

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImgUrl(url);

      // Animate avatar on image change
      if (avatarRef.current) {
        gsap.fromTo(
          avatarRef.current,
          { scale: 0.7, rotation: -15 },
          { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2.5)" },
        );
      }
    }
  };

  const onSubmit: SubmitHandler<ProfileFormInput> = (data) => {
    console.log(data);

    // Animate update button on submit
    if (updateButtonRef.current) {
      gsap.fromTo(
        updateButtonRef.current,
        { scale: 0.95 },
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            // Success shake animation
            gsap.fromTo(
              updateButtonRef.current,
              { x: 0 },
              {
                x: 10,
                duration: 0.1,
                repeat: 3,
                yoyo: true,
                ease: "power1.inOut",
              },
            );
          },
        },
      );
    }
  };

  // Handle edit toggle with animation
  const handleEditToggle = () => {
    setIsEdit(!isEdit);

    // Animate button on toggle
    if (editButtonRef.current) {
      gsap.fromTo(
        editButtonRef.current,
        { rotation: 0, duration: 0.3 },
        {
          rotation: 360,
          duration: 0.3,
          ease: "bounce",
        },
      );
    }

    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll("input, textarea");
      gsap.fromTo(
        inputs,
        { opacity: 0.6, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.3, stagger: 0.05 },
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="max-w-screen-2xl md:mx-auto border rounded-xl relative p-4 sm:p-5 md:p-8 mb-8 sm:mb-12 m-2 bg-linear-to-br from-base-100 via-base-100 to-primary/5 shadow-xl hover:shadow-2xl transition-shadow duration-500"
    >
      <title>Profile | Super FIXIT Ltd</title>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <h1
          ref={titleRef}
          className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl py-2 flex items-center gap-2"
        >
          My Profile
        </h1>

        <button
          ref={editButtonRef}
          type="button"
          onClick={handleEditToggle}
          className={`btn btn-sm sm:btn-md ${
            isEdit ? "btn-primary" : "btn-error"
          } btn-outline hover:text-white capitalize transition-all duration-300 shadow-md hover:shadow-lg`}
        >
          {isEdit ? (
            <>
              <MdEdit size={25} />
              <span className="ml-1">Edit Profile</span>
            </>
          ) : (
            <>
              <RxCrossCircled size={25} />
              <span className="ml-1">Cancel</span>
            </>
          )}
        </button>
      </div>

      <div className="flex bg-linear-to-t from-accent flex-row items-center to-white">
        <div className="relative">
          <label className="w-full cursor-pointer" htmlFor="profileImg">
            <div className="avatar p-8 sm:p-12  rounded-t-2xl w-full flex justify-start items-center">
              <div
                ref={avatarRef}
                className="w-24 md:w-28 lg:w-32 mb-[-80] sm:mb-[-100] rounded-full ring-2 ring-primary ring-offset-4 ring-offset-base-100 bg-white shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:ring-offset-8"
              >
                <Image
                  width={200}
                  height={200}
                  src={imgUrl}
                  alt="Profile Avatar"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
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
        <div>
          <h1 className="text-2xl font-bold">User Name</h1>
          <p className="text-sm text-gray-400">your-email@mail.com</p>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star bg-orange-400"
              aria-label="5 star"
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div ref={formRef} className="w-full max-w-5xl  py-3 mt-20 sm:mt-24">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-linear-to-b from-primary to-secondary rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-base-content">
              Personal Information
            </h2>
            <div className="flex-1 h-px bg-linear-to-r from-primary/30 via-accent to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 form-group">
            <label className="floating-label form-item">
              <span className="text-sm font-medium text-base-content/70">
                First name
              </span>
              <input
                {...register("firstName", { required: true })}
                disabled={isEdit}
                type="text"
                placeholder="Enter your first name"
                className={`input w-full input-bordered bg-base-100/50 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                  isEdit
                    ? "input-ghost bg-transparent"
                    : "hover:border-primary/60"
                }`}
              />
              {errors.firstName?.type === "required" && (
                <small className="text-error mt-1 label-text-alt animate-shake">
                  First name is required
                </small>
              )}
            </label>

            <label className="floating-label form-item">
              <span className="text-sm font-medium text-base-content/70">
                Last name
              </span>
              <input
                {...register("lastName", { required: true })}
                disabled={isEdit}
                type="text"
                placeholder="Enter your last name"
                className={`input w-full input-bordered bg-base-100/50 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                  isEdit
                    ? "input-ghost bg-transparent"
                    : "hover:border-primary/60"
                }`}
              />
              {errors.lastName?.type === "required" && (
                <small className="text-error mt-1 label-text-alt animate-shake">
                  Last name is required
                </small>
              )}
            </label>
          </div>

          <label className="floating-label form-item">
            <span className="text-sm font-medium text-base-content/70">
              Phone number
            </span>
            <input
              {...register("phoneNumber", { required: true })}
              disabled={isEdit}
              type="tel"
              placeholder="Type your phone number"
              className={`input w-full input-bordered bg-base-100/50 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                isEdit
                  ? "input-ghost bg-transparent"
                  : "hover:border-primary/60"
              }`}
            />
            {errors.phoneNumber?.type === "required" && (
              <small className="text-error mt-1 label-text-alt animate-shake">
                Phone number is required
              </small>
            )}
          </label>

          <label className="floating-label form-item">
            <legend className="fieldset-label text-sm font-medium text-base-content/70">
              Email address{" "}
              <span className="text-xs text-base-content/40">
                (Cannot change)
              </span>
            </legend>
            <input
              {...register("email")}
              type="email"
              className="input w-full input-bordered bg-base-200/50 border-primary/20 cursor-not-allowed opacity-75"
              disabled
            />
          </label>

          <label className="floating-label form-item">
            <span className="text-sm font-medium text-base-content/70">
              Present address
            </span>
            <textarea
              {...register("presentAdd", { required: true })}
              disabled={isEdit}
              className={`textarea textarea-bordered max-w-full w-full bg-base-100/50 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-y  ${
                isEdit
                  ? "textarea-ghost bg-transparent"
                  : "hover:border-primary/60"
              }`}
              placeholder="Enter your present address"
            />
            {errors?.presentAdd && (
              <small className="text-error mt-1 label-text-alt animate-shake">
                Please provide present address
              </small>
            )}
          </label>

          <label className="floating-label form-item">
            <span className="text-sm font-medium text-base-content/70">
              Permanent address
            </span>
            <textarea
              {...register("permanentAdd", { required: true })}
              disabled={isEdit}
              className={`textarea textarea-bordered max-w-full w-full bg-base-100/50 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-y  ${
                isEdit
                  ? "textarea-ghost bg-transparent"
                  : "hover:border-primary/60"
              }`}
              placeholder="Enter your permanent address"
            />
            {errors?.permanentAdd && (
              <small className="text-error mt-1 label-text-alt animate-shake">
                Please provide permanent address
              </small>
            )}
          </label>

          <button
            ref={updateButtonRef}
            type="submit"
            className="btn btn-accent w-full mt-6 sm:mt-8 text-white font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            disabled={!isDirty || isEdit}
          >
            {!isDirty && !isEdit ? (
              "No changes to save"
            ) : isEdit ? (
              "Edit mode disabled"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Update Profile
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
