"use client";

import { ProductFormData } from "@/app/dashboard/addProduct/page";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

// Define props interface
interface ProductDetailsProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="flex gap-5 items-center place-content-center lg:justify-between max-w-md lg:max-w-full">
      <div className="form-control w-full">
        <textarea
          {...register("productDetails", {
            required: true,
          })}
          className="textarea  input-bordered bg-transparent border-primary/50   w-full my-2"
          placeholder="Please provide product details"
        ></textarea>
        {errors?.productDetails?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Please provide product details
          </small>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
