"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
  useEffect(() => {
    setIsEdit(true);
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
      phoneNumber: "01612175249",
      presentAdd: "Null",
      permanentAdd: "Null",
    },
  });

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImgUrl(url);
    }
  };

  const onSubmit: SubmitHandler<ProfileFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-2xl md:mx-auto border rounded-xl relative p-5 mb-12 m-2">
      <title>Profile | Super FIXIT Ltd</title>
      <h1 className="text-primary font-bold text-2xl py-2">My Profile</h1>

      <button
        type="button"
        onClick={() => setIsEdit(!isEdit)}
        className="btn btn-circle btn-info btn-outline hover:text-black text-accent capitalize absolute top-2 right-2 z-10"
      >
        {isEdit ? "Edit" : "X"}
      </button>

      <div className="">
        <label className="w-full" htmlFor="profileImg">
          <div className="avatar p-10  cursor-pointer bg-accent rounded-t-2xl w-full">
            <div className="w-44  mb-[-100] rounded-full ring ring-primary bg-white ring-offset-base-100 ring-offset-2 overflow-hidden">
              <Image
                width={100}
                height={100}
                src={imgUrl}
                alt="Adaption"
                className="object-cover"
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

      <div className="md:w-screen md:max-w-xl py-3 mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-semibold mb-4">Personal Information</h1>

          <div className="grid lg:grid-flow-col gap-5 mb-5">
            <label className="floating-label">
              <span>First name</span>
              <input
                {...register("firstName", {
                  required: true,
                })}
                disabled={isEdit}
                type="text"
                placeholder="Enter your frist name"
                className="input w-full input-bordered bg-transparent border-primary/50  "
              />
              {errors.firstName?.type === "required" && (
                <small className=" text-error mt-1 self-end label-text-alt ">
                  Frist name is required
                </small>
              )}
            </label>
            <label className="floating-label">
              <span>Last name</span>
              <input
                {...register("lastName", {
                  required: true,
                })}
                disabled={isEdit}
                type="text"
                placeholder="Enter your last name"
                className="input w-full input-bordered bg-transparent border-primary/50  "
              />
              {errors.lastName?.type === "required" && (
                <small className=" text-error mt-1 self-end label-text-alt ">
                  Last name is required
                </small>
              )}
            </label>
          </div>
          {/* Phone Number */}
          <label className="floating-label">
            <span>Phone number</span>
            <input
              {...register("phoneNumber", {
                required: true,
              })}
              disabled={isEdit}
              type="number"
              placeholder="Type your phone number"
              className="input w-full input-bordered bg-transparent border-primary/50  "
            />
            {errors.phoneNumber?.type === "required" && (
              <small className=" text-error mt-1 self-end label-text-alt ">
                Phone number is required
              </small>
            )}
          </label>
          {/* Email Address */}

          <label className="floating-label mt-5">
            <legend className="fieldset-label">
              Email address{" "}
              <span className="text-xs text-slate-400">
                (Cannot change this field)
              </span>
            </legend>
            <input
              {...register("email")}
              type="email"
              className="input w-full input-bordered bg-transparent border-primary/50  "
              disabled
            />
          </label>

          <label
            className="floating-label mt-5
          "
          >
            <span>Present address</span>
            <textarea
              {...register("presentAdd", { required: true })}
              disabled={isEdit}
              className="textarea textarea-bordered disabled:textarea-ghost max-w-full w-full disabled:bg-transparent  disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text resize h-28"
            ></textarea>
            {errors?.presentAdd && (
              <small className="text-red-500 mt-1 self-end label-text-alt">
                Please provide present address
              </small>
            )}
          </label>
          {/* Permanent Address */}

          <label
            className="floating-label mt-5
          "
          >
            <span>Permanent address</span>
            <textarea
              {...register("permanentAdd", { required: true })}
              disabled={isEdit}
              className="textarea textarea-bordered disabled:textarea-ghost max-w-full w-full disabled:bg-transparent  disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text resize h-28"
            ></textarea>
            {errors?.permanentAdd && (
              <small className="text-red-500 mt-1 self-end label-text-alt">
                Please provide permanent address
              </small>
            )}
          </label>

          <button
            type="submit"
            className="btn btn-accent mt-5 w-full mx-auto flex"
            disabled={!isDirty || isEdit}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
