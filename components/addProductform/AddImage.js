import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const AddImage = ({ imageChange, deleteHandler, imgUrl, imgFile }) => {
  const [singfile, setSingFile] = useState();
  useEffect(() => {
    imgFile.map((file) => {
      setSingFile(file);
    });
  }, [imgFile]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2  place-items-center items-center">
      {imgUrl &&
        imgUrl.map((url, index) => {
          return (
            <div key={index} className=" relative max-w-xs">
              <Image
                width={200}
                height={200}
                src={url}
                alt="Adaption"
                className="w-32 rounded-lg cursor-pointer"
              />

              <button
                className=" absolute top-0 right-0 btn btn-xs btn-circle btn-error"
                onClick={() => deleteHandler(url, singfile?.name)}>
                X
              </button>
            </div>
          );
        })}

      {imgUrl.length <= 3 && (
        <div className="flex items-center w-full">
          <div className="form-control">
            <label className="flex items-center cursor-pointer">
              <FaRegImage
                className=" w-32 rounded-lg text-primary/20 "
                size={100}
              />
              <span>Click add images</span>
              <input
                type="file"
                className=" hidden cursor-pointer"
                onChange={imageChange}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddImage;
