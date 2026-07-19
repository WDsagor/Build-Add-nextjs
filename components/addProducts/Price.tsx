"use client";

import { ProductFormData } from "@/app/dashboard/addProduct/page";
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

// Define props interface
interface PriceProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
}

const Price: React.FC<PriceProps> = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 place-items-center items-center">
      <div className="form-control w-full p-1">
        <label className="label">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            1 Litter price
          </span>
        </label>
        <input
          {...register("price.price1", {
            required: true,
          })}
          type="number"
          placeholder="Enter 1 Litter price"
          className="input  w-full input-bordered bg-transparent border-primary/50   input-bordered"
        />
        {errors?.price?.price1?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Product price is required
          </small>
        )}
      </div>
      <div className="form-control w-full p-1">
        <label className="label">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            4 Litter price
          </span>
        </label>
        <input
          {...register("price.price4", {
            required: true,
          })}
          type="number"
          placeholder="Enter 4 Litter price"
          className="input w-full input-bordered bg-transparent border-primary/50   input-bordered"
        />
        {errors?.price?.price4?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Product price is required
          </small>
        )}
      </div>
      <div className="form-control w-full p-1">
        <label className="label">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            10 Litter price
          </span>
        </label>
        <input
          {...register("price.price10", {
            required: true,
          })}
          type="text"
          placeholder="Enter 10 Litter price"
          className="input w-full input-bordered bg-transparent border-primary/50   input-bordered"
        />
        {errors?.price?.price10?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Product price is required
          </small>
        )}
      </div>
      <div className="form-control w-full p-1">
        <label className="label">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            20 Litter price
          </span>
        </label>
        <input
          {...register("price.price20", {
            required: true,
          })}
          type="text"
          placeholder="Enter 20 Litter price"
          className="input w-full input-bordered bg-transparent border-primary/50   input-bordered"
        />
        {errors?.price?.price20?.type === "required" && (
          <small className="text-red-500 mt-1 self-end label-text-alt">
            Product price is required
          </small>
        )}
      </div>
    </div>
  );
};

export default Price;
