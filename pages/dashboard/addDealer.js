import React from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";
import { FiTrash } from "react-icons/fi";
import { rule } from "postcss";

const AddDealer = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const term = useWatch({ control, name: "term" });
  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({
    control,
    name: "addMore",
  });
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <DashboardLayout title="Apply for Delarship ">
      <div className="flex-1 px-2 justify-center my-6 max-w-screen-2xl">
        <div className=" bg-primary/5 rounded-xl p-3 max-w-screen-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" text-xl">Personal Information </h1>

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
                    Phone Number
                  </span>
                </label>
                <input
                  {...register("number", {
                    required: true,
                  })}
                  type="number"
                  placeholder="Enter your mobile number"
                  className="input input-bordered"
                />
                {errors?.number?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide valid mobile number
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
                <label className="label lg:self-start">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Present Address
                  </span>
                </label>
                <textarea
                  {...register("presentAdd", {
                    required: true,
                  })}
                  className="textarea max-w-md lg:max-w-full w-full resize h-28"
                  placeholder="Details provide present address"></textarea>
                {errors?.presentAdd?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide present address
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label lg:self-start">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Permanent Address
                  </span>
                </label>
                <textarea
                  {...register("permanentAdd", {
                    required: true,
                  })}
                  className="textarea max-w-md lg:max-w-full w-full resize h-28"
                  placeholder="Details provide Permanent address"></textarea>
                {errors?.permanentAdd?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide Permanent address
                  </small>
                )}
              </div>
            </div>
            <hr className="my-3"></hr>
            <h1 className=" text-xl">Business Details </h1>
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
                    Company Email Address
                  </span>
                </label>
                <input
                  {...register("companyEmail", {
                    required: true,
                  })}
                  type="email"
                  className="input input-bordered"
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
                  {...register("proprietor", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Contact Person Name"
                  className="input input-bordered"
                />
                {errors?.proprietor?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer proprietor Name is required
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
            <div className="  lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Contact Person
                  </span>
                </label>
                <input
                  {...register("proprietor", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Contact Person Name"
                  className="input input-bordered"
                />
                {errors?.proprietor?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer proprietor Name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Add Trader Linccence
                  </span>
                </label>

                <input
                  {...register("tradeCopy", {
                    required: true,
                  })}
                  type="file"
                  className="file-input w-full max-w-x"
                />

                {errors?.tradeCopy?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Trader Linccence is required
                  </small>
                )}
              </div>
            </div>
            <hr className="my-3"></hr>
            <h1 className=" text-md">Business address </h1>
            <div className="  lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Contact Person
                  </span>
                </label>
                <input
                  {...register("proprietor", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Contact Person Name"
                  className="input input-bordered"
                />
                {errors?.proprietor?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer proprietor Name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Contact Person
                  </span>
                </label>
                <input
                  {...register("proprietor", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Contact Person Name"
                  className="input input-bordered"
                />
                {errors?.proprietor?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer proprietor Name is required
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
            <div className="mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Add More Fields
                </span>
              </label>
              {resFields.map((item, index) => {
                return (
                  <div key={index} className="flex items-end gap-3 w-full">
                    <div className=" form-control w-full max-w-md p-1">
                      <input
                        {...register(`addMore[${index}]`)}
                        type="text"
                        placeholder="Contact Person Mobile no"
                        className="input input-bordered"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => resRemove(index)}
                      className="grid mb-2 place-items-center rounded-full bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500">
                      <FiTrash
                        className="text-red-500 group-hover:text-white transition-all"
                        size="20"
                      />
                    </button>
                  </div>
                );
              })}
              <div>
                <button
                  type="button"
                  onClick={() => resAppend("")}
                  className="btn btn-sm btn-primary mt-2 ">
                  Add More
                </button>
              </div>
            </div>

            <div className=" flex flex-col items-center content-center">
              <label className="label lg:self-start">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Interested Area Of Dealership
                </span>
              </label>
              <textarea
                {...register("details", {
                  required: true,
                })}
                className="textarea max-w-md lg:max-w-full w-full resize h-28"
                placeholder="Details provide your area, zone"></textarea>
              {errors?.details?.type === "required" && (
                <small className="  text-red-500 mt-1 self-end label-text-alt ">
                  Please provide details your area, zone
                </small>
              )}
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
              <button
                disabled={!term}
                className="btn btn-primary"
                type="submit">
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddDealer;
