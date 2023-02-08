import React, { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";
import { FiTrash } from "react-icons/fi";
import Image from "next/image";
import { FaRegImage } from "react-icons/fa";
import Nameform from "../../components/addProductform/Nameform";
import AddSize from "../../components/addProductform/AddSize";
import DetailsImage from "../../components/addProductform/DetailsImage";
import AddImage from "../../components/addProductform/AddImage";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    // defaultValues: {
    //   productDetails: [""],
    //   addSize: [""],
    // },
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
    fields: productDetails,
    append: detailsAppend,
    remove: detailsRemove,
  } = useFieldArray({
    control,
    name: "productDetails",
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

            <div className="mx-auto max-w-md lg:max-w-full my-5">
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
            <div className="mx-auto max-w-md lg:max-w-full">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Add Products Images
                </span>
              </label>
              <AddImage register={register} />
            </div>

            <div className="mx-auto max-w-md lg:max-w-full my-5">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Products Details
                </span>
              </label>
              <DetailsImage
                register={register}
                detailsRemove={detailsRemove}
                productDetails={productDetails}
                errors={errors}
              />

              <div className="my-2">
                <button
                  type="button"
                  onClick={() => detailsAppend("")}
                  className="btn btn-sm btn-primary mt-2 ">
                  Add more Details
                </button>
              </div>
            </div>
            <hr className="my-3"></hr>

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
