import Image from "next/image";
import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const ProductDetails = ({ register, errors }) => {
  return (
    <div className="flex gap-5 items-center place-content-center lg:justify-between max-w-md lg:max-w-full">
      <div className="form-control w-full">
        <textarea
          {...register("productDetails", {
            required: true,
          })}
          className="textarea max-w-md lg:max-w-full w-full my-2"
          placeholder="Please provide product details"></textarea>
        {errors?.productDetails?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Please provide product details
          </small>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
