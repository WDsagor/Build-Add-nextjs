import React from "react";

const Price = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2  place-items-center items-center">
      <div className="form-control w-full p-1">
        <label className="label ">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            1 Litter
          </span>
        </label>
        <input
          {...register("price1", {
            required: true,
          })}
          type="number"
          placeholder="Enter 1 Litter price"
          className="input input-bordered"
        />
        {errors?.price1?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Product price is required
          </small>
        )}
      </div>
      <div className="form-control w-full p-1">
        <label className="label ">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            4 Litter
          </span>
        </label>
        <input
          {...register("price4", {
            required: true,
          })}
          type="number"
          placeholder="Enter 4 Litter price"
          className="input input-bordered"
        />
        {errors?.price4?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Product price is required
          </small>
        )}
      </div>
      <div className="form-control w-full p-1">
        <label className="label ">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            10 Litter
          </span>
        </label>
        <input
          {...register("price10", {
            required: true,
          })}
          type="text"
          placeholder="Enter 10 Litter price"
          className="input input-bordered"
        />
        {errors?.price10?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Product price is required
          </small>
        )}
      </div>
      <div className="form-control w-full p-1">
        <label className="label ">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            20 Litter
          </span>
        </label>
        <input
          {...register("productName", {
            required: true,
          })}
          type="text"
          placeholder="Enter 20 Litter price"
          className="input input-bordered"
        />
        {errors?.productName?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Product price is required
          </small>
        )}
      </div>
    </div>
  );
};

export default Price;
