import Image from "next/image";
import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const DetailsImage = ({ productImgs, register, imgRemove, errors }) => {
  const [imgUrl, setImgurl] = useState();
  const imageChange = () => {
    if (productImgs.length > 0) {
      //   const url = URL.createObjectURL(productImgs);
      //   setImgurl(url);
    }
  };
  console.log(Array.isArray(productImgs));
  console.log(productImgs[0]);
  console.log(imgUrl);
  return (
    <>
      {productImgs.map((img, index) => {
        return (
          <div key={index} className="grid w-full grid-cols-1">
            <div className=" lg:flex items-center lg:justify-between mx-auto lg:mx-0 max-w-md lg:max-w-full">
              <div className="form-control w-32">
                <label htmlFor="profileImg">
                  <div className="  rounded-lg">
                    {imgUrl ? (
                      // <img src={imgUrl} />
                      <Image
                        width={300}
                        height={300}
                        src={imgUrl}
                        alt="Adaption"
                        className=" w-32 rounded-lg cursor-pointer"
                      />
                    ) : (
                      <FaRegImage
                        className=" w-32 rounded-lg text-primary/20 cursor-pointer"
                        size={100}
                      />
                    )}
                  </div>
                </label>
                <input
                  {...register(`productImg[${index}].image`)}
                  className=" hidden cursor-pointer"
                  id="profileImg"
                  type="file"
                  name="profileImg"
                  onChange={imageChange}
                />
              </div>
              <div className="form-control w-full px-3">
                <label className="label lg:self-start">
                  <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                    Add Product Details
                  </span>
                </label>
                <textarea
                  {...register(`productImg[${index}].detalis`, {
                    required: true,
                  })}
                  className="textarea max-w-md lg:max-w-full w-full"
                  placeholder="please write Product Details"></textarea>
                {errors?.permanentAdd?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide Product Details
                  </small>
                )}
              </div>
              <button
                type="button"
                onClick={() => imgRemove(index)}
                className="grid  place-items-center rounded-full h-10 w-10 bg-red-500/20 border border-error group transition-all hover:bg-error p-3">
                <FiTrash
                  className="text-red-500 group-hover:text-white transition-all"
                  size="20"
                />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailsImage;
