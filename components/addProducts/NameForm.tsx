"use client";

import { ProductFormData } from "@/app/dashboard/addProduct/page";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

// Define props interface
interface NameFormProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
}

const NameForm: React.FC<NameFormProps> = ({ register, errors }) => {
  return (
    <div className="">
      <label className="floating-label">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
          Product name
        </span>
        <input
          {...register("productName", {
            required: true,
          })}
          type="text"
          placeholder="Enter your Product name"
          className="input w-full input-bordered bg-transparent border-primary/50  "
        />
        {errors?.productName?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Product name is required
          </small>
        )}
      </label>
    </div>
  );
};

export default NameForm;
