"use client";

import { ProductFormData } from "@/app/dashboard/addProduct/page";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

// Define props interface
interface AddSizeProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
}

const AddSize: React.FC<AddSizeProps> = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 place-items-center items-center">
      <label className="floating-label w-full">
        <span>For 1L size</span>
        <input
          {...register("size.size1", {
            required: true,
          })}
          type="number"
          placeholder="For 1L size"
          className="input w-full input-bordered bg-transparent border-primary/50  "
        />
        {errors?.size?.size1?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Size Value is required
          </small>
        )}
      </label>
      <label className="floating-label w-full">
        <span>For 4L size</span>
        <input
          {...register("size.size4", {
            required: true,
          })}
          type="number"
          placeholder="For 4L size"
          className="input w-full input-bordered bg-transparent border-primary/50  "
        />
        {errors?.size?.size4?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Size Value is required
          </small>
        )}
      </label>
      <label className="floating-label w-full">
        <span>For 10L size</span>
        <input
          {...register("size.size10", {
            required: true,
          })}
          type="number"
          placeholder="For 10L size"
          className="input w-full input-bordered bg-transparent border-primary/50  "
        />
        {errors?.size?.size10?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Size Value is required
          </small>
        )}
      </label>
      <label className="floating-label w-full">
        <span>For 20L size</span>
        <input
          {...register("size.size20", {
            required: true,
          })}
          type="number"
          placeholder="For 20L size"
          className="input w-full input-bordered bg-transparent border-primary/50  "
        />
        {errors?.size?.size20?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Size Value is required
          </small>
        )}
      </label>
    </div>
  );
};

export default AddSize;
