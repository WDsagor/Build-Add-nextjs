import React from "react";
import { useFieldArray } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

const AddSize = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2  place-items-center items-center">
      <div className=" form-control w-full max-w-md p-1">
        <input
          {...register("size1", {
            required: true,
          })}
          type="number"
          placeholder="For 1L  size"
          className="input input-bordered input-md max-w-md"
        />
        {errors?.size1?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Size Value is required
          </small>
        )}
      </div>
      <div className=" form-control w-full max-w-md p-1">
        <input
          {...register("size4", {
            required: true,
          })}
          type="number"
          placeholder="For 4L size"
          className="input input-bordered input-md max-w-md"
        />
        {errors?.size4?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Size Value is required
          </small>
        )}
      </div>
      <div className=" form-control w-full max-w-md p-1">
        <input
          {...register("size10", {
            required: true,
          })}
          type="number"
          placeholder="For 10L size"
          className="input input-bordered input-md max-w-md"
        />
        {errors?.size10?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Size Value is required
          </small>
        )}
      </div>
      <div className=" form-control w-full max-w-md p-1">
        <input
          {...register("size20", {
            required: true,
          })}
          type="number"
          placeholder="For 20L size"
          className="input input-bordered input-md max-w-md"
        />
        {errors?.size20?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Size Value is required
          </small>
        )}
      </div>
    </div>
  );
};

export default AddSize;
