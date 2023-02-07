import React from "react";

const Nameform = ({ register, errors }) => {
  return (
    <div className=" lg:flex lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
      <div className="form-control w-full p-1">
        <label className="label ">
          <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
            Product name
          </span>
        </label>
        <input
          {...register("productName", {
            required: true,
          })}
          type="text"
          placeholder="Enter your Product name"
          className="input input-bordered"
        />
        {errors?.productName?.type === "required" && (
          <small className="  text-red-500 mt-1 self-end label-text-alt ">
            Product name is required
          </small>
        )}
      </div>
    </div>
  );
};

export default Nameform;
