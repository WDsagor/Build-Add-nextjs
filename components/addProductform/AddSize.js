import React from "react";
import { useFieldArray } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

const AddSize = ({ register, sizeRemove, sizeFields }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2  place-items-center items-center">
      {sizeFields.map((size, index) => {
        return (
          <div key={index} className="flex items-center w-full">
            <div className=" form-control w-full max-w-sm p-1">
              <input
                {...register(`addSize[${index}]`)}
                type="number"
                placeholder="Add your product size"
                className="input input-bordered input-md max-w-xs"
              />
            </div>
            <button
              type="button"
              onClick={() => sizeRemove(index)}
              className="grid  place-items-center rounded-full bg-red-500/20 border border-error group transition-all hover:bg-error p-3">
              <FiTrash
                className="text-red-500 group-hover:text-white transition-all"
                size="20"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AddSize;
