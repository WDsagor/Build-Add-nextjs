"use client";

import React from "react";
import { useForm, useWatch, useFieldArray } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

// Define the form data types
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

// Use "const" instead of "const page: React.FC" for Next.js App Router
const AddDealerPage: React.FC = () => {
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
      email: "gggg@gmail.com",
      presentAdd: "",
      permanentAdd: "",
      companyName: "",
      companyEmail: "",
      proprietorName: "",
      contactPersonNo: "",
      businessPresentAdd: "",
      tradeCopy: undefined,
      // addMore: [{ value: "" }],
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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const handleAddMore = () => {
    moreAppend({ value: "" });
  };

  return (
    <div className="px-2 justify-center my-6 max-w-screen-2xl">
      <h1 className="text-3xl text-center my-5">Apply for new Dealership</h1>
      <div className="bg-linear-to-t from-white mx-auto max-w-6xl w-full  to-accent/50 rounded-xl p-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl">Personal Information</h1>

          <div className=" flex flex-col md:flex-row gap-10 w-full">
            <label className="floating-label my-5 w-full">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                First Name
              </span>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                placeholder="First name"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.firstName && (
                <small className="text-error mt-2 self-end label-text-alt">
                  {errors.firstName.message}
                </small>
              )}
            </label>
            <label className="floating-label my-5 w-full">
              <span>Last Name</span>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                })}
                type="text"
                placeholder="Last name"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.lastName && (
                <small className="text-error mt-2 self-end label-text-alt">
                  {errors.lastName.message}
                </small>
              )}
            </label>
          </div>
          <div className=" flex flex-col md:flex-row gap-10 w-full">
            <label className="floating-label my-3 w-full">
              <span>Phone number</span>
              <input
                {...register("phoneNumber", {
                  required: "Number is required",
                })}
                type="text"
                placeholder="Your phone number"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.phoneNumber && (
                <small className="text-error mt-2 self-end label-text-alt">
                  {errors.phoneNumber.message}
                </small>
              )}
            </label>
            <label className="floating-label my-3 w-full">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Email address
              </span>
              <input
                {...register("email", {
                  required: "Email address require",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="@mail.com"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.email && (
                <small className="text-error mt-2 self-end label-text-alt">
                  {errors.email.message}
                </small>
              )}
            </label>
          </div>

          <div className=" flex flex-col md:flex-row gap-10 w-full">
            <label className="label-text  my-5 w-full">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Present address
              </span>
              <textarea
                {...register("presentAdd", {
                  required: "Please provide present address",
                })}
                className="textarea textarea-primary bg-transparent w-full"
                placeholder="Provide village or City, Police Station, District"
              />
              {errors.presentAdd && (
                <small className="text-red-500 mt-1 self-end label-text-alt">
                  {errors.presentAdd.message}
                </small>
              )}
            </label>
            <label className="label-text  my-5 w-full">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Permanent address
              </span>
              <textarea
                {...register("permanentAdd", {
                  required: "Please provide permanent address",
                })}
                className="textarea textarea-primary bg-transparent w-full"
                placeholder="Provide village or City, Police Station, District"
              />
              {errors.permanentAdd && (
                <small className="text-red-500 mt-1 self-end label-text-alt">
                  {errors.permanentAdd.message}
                </small>
              )}
            </label>
          </div>
          <hr className="my-3"></hr>
          <h1 className="text-xl">Business details</h1>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <label className="floating-label my-3 w-full">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Company or Dealer name
              </span>
              <input
                {...register("companyName", {
                  required: "Company or Dealer name is required",
                })}
                type="text"
                placeholder="Enter Company or Dealer name"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.companyName && (
                <small className="text-red-500 mt-1 self-end label-text-alt">
                  {errors.companyName.message}
                </small>
              )}
            </label>
            <label className="floating-label my-3 w-full">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Company email address
              </span>
              <input
                {...register("companyEmail", {
                  required: "Company email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Enter company email address"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.companyEmail && (
                <small className="text-red-500 mt-1 self-end label-text-alt">
                  {errors.companyEmail.message}
                </small>
              )}
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <label className="floating-label my-3 w-full">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                Proprietor name
              </span>
              <input
                {...register("proprietorName", {
                  required: "Company or Dealer proprietor name is required",
                })}
                type="text"
                placeholder="Enter contact person name"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.proprietorName && (
                <small className="text-red-500 mt-1 self-end label-text-alt">
                  {errors.proprietorName.message}
                </small>
              )}
            </label>

            <label className="floating-label my-3 w-full">
              <span>Contact person phone number</span>
              <input
                {...register("contactPersonNo", {
                  required: "Contact person phone number is required",
                })}
                type="number"
                placeholder="Contact person phone number"
                className="input bg-transparent input-bordered border-primary w-full"
              />
              {errors.contactPersonNo && (
                <small className="text-error mt-2 self-end label-text-alt">
                  {errors.contactPersonNo.message}
                </small>
              )}
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <label className="floating-label  my-5 w-full">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Business place address
              </span>
              <textarea
                {...register("businessPresentAdd", {
                  required: "Please provide business address",
                })}
                className="textarea textarea-primary bg-transparent w-full"
                placeholder="Provide village or City, Police Station, District"
              />
              {errors.businessPresentAdd && (
                <small className="text-red-500 mt-1 self-end label-text-alt">
                  {errors.businessPresentAdd.message}
                </small>
              )}
            </label>
            <label className="floating-label border border-dashed rounded-md mt-5 max-h-20 w-full">
              <span className=" after:content-['*'] after:ml-0.5 after:text-red-500">
                Add your trade license
              </span>
              <input
                {...register("tradeCopy", {
                  required: "Company or Dealer trade license is required",
                })}
                type="file"
                className="file-input bg-transparent file-input-ghost my-5 w-full"
              />
              {errors.tradeCopy && (
                <small className="text-red-500 mt-1 self-end label-text-alt">
                  {errors.tradeCopy.message}
                </small>
              )}
            </label>
          </div>

          <hr className="my-3" />

          <div className="mx-auto lg:mx-0 max-w-md lg:max-w-full">
            <label className="label font-bold">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                Add more fields
              </span>
            </label>
            {moreFields.map((item, index) => {
              return (
                <div key={item.id} className="flex items-end gap-3 w-full">
                  <div className="form-control w-full max-w-md p-1">
                    <input
                      {...register(`addMore.${index}.value` as const)}
                      type="text"
                      placeholder="If any more information"
                      className="input input-bordered"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => moreRemove(index)}
                    className="grid mb-2 place-items-center rounded-full bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                  >
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
                onClick={handleAddMore}
                className="btn btn-sm btn-accent mt-2"
              >
                Add more
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center content-center">
            <label className="label lg:self-start">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                Interested area of Dealership
              </span>
            </label>
            <textarea
              {...register("interestedArea", {
                required:
                  "Please provide details your area, zone, where you want to business",
              })}
              className="textarea max-w-md lg:max-w-full w-full resize h-28"
              placeholder="Details provide your area, zone"
            />
            {errors.interestedArea && (
              <small className="text-red-500 mt-1 self-end label-text-alt">
                {errors.interestedArea.message}
              </small>
            )}
          </div>
          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex w-full max-w-xs">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label htmlFor="terms">I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className="btn btn-accent" type="submit">
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDealerPage;
