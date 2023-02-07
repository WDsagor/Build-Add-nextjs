import React, { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";
import { FiTrash } from "react-icons/fi";
import Image from "next/image";
import { FaRegImage } from "react-icons/fa";
import Nameform from "../../components/addProductform/Nameform";
import AddSize from "../../components/addProductform/AddSize";
import DetailsImage from "../../components/addProductform/DetailsImage";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "gggg@gmail.com",
      productImgs: [{ image: "", detalis: "" }],
    },
  });
  const term = useWatch({ control, name: "term" });
  const {
    fields: sizeFields,
    append: sizeAppend,
    remove: sizeRemove,
  } = useFieldArray({
    control,
    name: "addSize",
  });

  const {
    fields: productImgs,
    append: imgAppend,
    remove: imgRemove,
  } = useFieldArray({
    control,
    name: "productImg",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DashboardLayout title="Add  new item">
      <div className="flex-1 px-2 justify-center my-6 max-w-screen-2xl">
        <div className=" bg-primary/5 rounded-xl p-3  xl:p-10 max-w-screen-xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Nameform register={register} errors={errors} />

            <div className="mx-auto max-w-md lg:max-w-full">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Add Products Size
                </span>
              </label>
              <AddSize
                register={register}
                sizeFields={sizeFields}
                sizeRemove={sizeRemove}
              />
              <div>
                <button
                  type="button"
                  onClick={() => sizeAppend("")}
                  className="btn btn-sm btn-primary mt-2 ">
                  Add Size
                </button>
              </div>
            </div>

            <div className="">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Add Products Image
                </span>
              </label>
              <DetailsImage
                register={register}
                imgRemove={imgRemove}
                productImgs={productImgs}
                errors={errors}
              />

              <div>
                <button
                  type="button"
                  onClick={() => imgAppend("")}
                  className="btn btn-sm btn-primary mt-2 ">
                  Add Product Image & Details
                </button>
              </div>
            </div>
            <hr className="my-3"></hr>
            <h1 className=" text-xl">Business details </h1>
            <div className="  lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Company or Dealer name
                  </span>
                </label>
                <input
                  {...register("companyName", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Company or Dealer name"
                  className="input input-bordered"
                />
                {errors?.companyName?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Company email address
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
                    Proprietor name
                  </span>
                </label>
                <input
                  {...register("proprietorName", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter contact person name"
                  className="input input-bordered"
                />
                {errors?.proprietorName?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Company or Dealer proprietor name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Contact person mobile no
                  </span>
                </label>
                <input
                  {...register("contactPersonNo", {
                    required: true,
                  })}
                  type="number"
                  placeholder="Contact Person Mobile no"
                  className="input input-bordered"
                />
                {errors?.contactPersonNo?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Contact person mobile no is required
                  </small>
                )}
              </div>
            </div>
            <div className="  lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-full max-w-md p-1">
                <label className="label lg:self-start">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Business place address
                  </span>
                </label>
                <textarea
                  {...register("businessPresentAdd", {
                    required: true,
                  })}
                  className="textarea max-w-md lg:max-w-full w-full resize h-28"
                  placeholder="Provide village or City, Police Stataion, District"></textarea>
                {errors?.businessPresentAdd?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide business place present address
                  </small>
                )}
              </div>
              <div className="form-control w-full max-w-md p-1">
                <label className="label ">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Add trade linccence
                  </span>
                </label>

                <input
                  {...register("tradeCopy", {
                    required: true,
                  })}
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />

                {errors?.tradeCopy?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Trade linccence is required
                  </small>
                )}
              </div>
            </div>

            <hr className="my-3"></hr>

            <div className=" flex flex-col items-center content-center">
              <label className="label lg:self-start">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Interested area of Dealership
                </span>
              </label>
              <textarea
                {...register("interestedArea", {
                  required: true,
                })}
                className="textarea max-w-md lg:max-w-full w-full resize h-28"
                placeholder="Details provide your area, zone"></textarea>
              {errors?.interestedArea?.type === "required" && (
                <small className="  text-red-500 mt-1 self-end label-text-alt ">
                  Please provide details your area, zone, where you want to
                  business
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

export default AddProduct;
