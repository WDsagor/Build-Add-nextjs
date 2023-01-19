import React from "react";
import { useForm, useWatch } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";

const AddDealer = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const term = useWatch({ control, name: "term" });

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
            <div className="  lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Contact Person
                  </span>
                </label>
                <input
                  {...register("person", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Contact Person Name"
                  className="input input-bordered"
                />
                {errors?.person?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer person Name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Contact Person Mobile no
                  </span>
                </label>
                <input
                  {...register("mobileNo", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Contact Person Mobile no"
                  className="input input-bordered"
                />
                {errors?.mobileNo?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Contact Person Mobile no is required
                  </small>
                )}
              </div>
            </div>
            <div className=" flex flex-col items-center content-center">
              <label className="label lg:self-start">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Details
                </span>
              </label>
              <textarea
                className="textarea max-w-md lg:max-w-full w-full resize h-28"
                placeholder="Details provide your area, zone"></textarea>
            </div>

            <div className="flex justify-between items-center w-full mt-3">
              <div className="flex  w-full max-w-xs">
                <input
                  className="mr-3"
                  type="checkbox"
                  {...register("term")}
                  id="terms"
                />
                <label htmlFor="terms">I agree to terms and conditions</label>
              </div>
              <button disabled={!term} className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddDealer;
