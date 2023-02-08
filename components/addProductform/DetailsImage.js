import Image from "next/image";
import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const DetailsImage = ({ productDetails, register, detailsRemove, errors }) => {
  return (
    <>
      {productDetails.map((detail, index) => {
        return (
          <div
            key={index}
            className="flex gap-5 items-center place-content-center lg:justify-between max-w-md lg:max-w-full">
            <div className="form-control w-full">
              <textarea
                {...register(`productDetails[${index}]`, {
                  required: true,
                })}
                className="textarea max-w-md lg:max-w-full w-full my-2"
                placeholder="please write Product Details"></textarea>
              {errors?.productDetails?.type === "required" && (
                <small className="  text-red-500 mt-1 self-end label-text-alt ">
                  Please provide Product Details
                </small>
              )}
            </div>
            <button
              type="button"
              onClick={() => detailsRemove(index)}
              className="grid  place-items-center rounded-full bg-red-500/20 border border-error group transition-all hover:bg-error p-3">
              <FiTrash
                className="text-red-500 group-hover:text-white transition-all"
                size="20"
              />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default DetailsImage;
