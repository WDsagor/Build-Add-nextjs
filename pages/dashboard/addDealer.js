import React from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";

const addDealer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <DashboardLayout title="Apply for Delarship ">
      <div className="flex-1 px-2 justify-center mt-4 max-w-screen-2xl">
        <div className=" bg-primary/5 rounded-xl p-3 max-w-screen-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Frist Name
                  </span>
                </label>
                <input
                  {...register("fristName", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter your frist name"
                  className="input input-bordered"
                />
                {errors?.fristName?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Frist Name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Last Name
                  </span>
                </label>
                <input
                  {...register("lastName", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter your last name"
                  className="input input-bordered w-full "
                />
                {errors?.lastName?.type === "required" && (
                  <small className=" text-red-500 mt-1 self-end label-text-alt ">
                    Last name is required
                  </small>
                )}
              </div>
            </div>
            <div className="  lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Company or Dealer Name
                  </span>
                </label>
                <input
                  {...register("companyName", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Company or Dealer Name"
                  className="input input-bordered"
                />
                {errors?.companyName?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer Name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Email Address
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  value="@gmail.com"
                  className="input input-bordered"
                  disabled
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default addDealer;
