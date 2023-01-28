import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,

    handleSubmit,
    formState: { isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fristName: "Sagar",
      lastName: "Edbar",
      email: "sagar@email.com",
      phoneNumber: "01612175249",
      presentAdd: "Null",
      permanentAdd: "Null",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <DashboardLayout title={"Profile Page"} className="m-2">
      <div className="max-w-screen-2xl md:mx-auto border rounded-xl relative p-5 mb-12 m-2">
        <h1 className="text-primary font-bold text-2xl py-2">My Profile</h1>
        <hr />
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="btn btn-circle btn-primary btn-outline text-primary capitalize absolute top-2 right-2 z-10">
          {isEdit ? "X" : "Edit"}
        </button>
        <div className="flex flex-col lg:flex-row gap-5 align-top justify-between">
          <div className="max-w-sm flex lg:mr-20 flex-col mx-auto gap-5">
            <Image
              width={300}
              height={350}
              className="rounded-xl"
              src="/images/Products-img/A-20-1.jpg"
              alt="Adaption"
            />
            {isEdit ? (
              <button className="btn btn-primary  capitalize text-white ">
                Update now
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="btn btn-primary capitalize text-white ">
                Edit profile
              </button>
            )}
          </div>

          <div className="md:w-screen md:max-w-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className=" text-xl">Personal Information </h1>

              <div className="form-control w-full p-1">
                <label>Frist name</label>
                <input
                  {...register("fristName")}
                  type="text"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled={!isEdit}
                />
              </div>
              <div className="form-control w-full  p-1">
                <label>Last name</label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-2xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled={!isEdit}
                />
              </div>

              <div className="form-control w-full  p-1">
                <label>Phone number</label>
                <input
                  {...register("phoneNumber")}
                  type="number"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-2xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled={!isEdit}
                />
              </div>
              <div className="form-control w-full  p-1">
                <label>
                  Email address{" "}
                  <span className=" text-xs text-slate-400">
                    (Can not change this field)
                  </span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-2xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled
                />
              </div>

              <div className="form-control w-full p-1">
                <label>Present address</label>
                <textarea
                  {...register("presentAdd")}
                  disabled={!isEdit}
                  className="textarea textarea-bordered  disabled:textarea-ghost max-w-full w-full disabled:bg-transparent text-2xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text resize h-28"></textarea>
              </div>
              <div className="form-control w-full p-1">
                <label>Permanent address</label>
                <textarea
                  {...register("permanentAdd")}
                  disabled={!isEdit}
                  className="textarea textarea-bordered  disabled:textarea-ghost max-w-full w-full disabled:bg-transparent text-2xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text resize h-28"></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-5 text-white w-3/5 mx-auto flex "
                disabled={!isDirty}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
