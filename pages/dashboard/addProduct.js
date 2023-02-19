import React, { useEffect, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";
import Nameform from "../../components/addProductform/Nameform";
import AddSize from "../../components/addProductform/AddSize";
import AddImage from "../../components/addProductform/AddImage";
import { toast } from "react-toastify";
import ProductDetails from "../../components/addProductform/ProductDetails";
import Price from "../../components/addProductform/Price";

const AddProduct = () => {
  const [imgUrl, setImgurl] = useState([]);
  const [imgFile, setImgFile] = useState([]);
  useEffect(() => {
    if (imgFile.length > 4) {
      toast.error("you can uplod max 4 images", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [imgFile]);

  const imageChange = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    const productImg = selectedFilesArray.map((file) => {
      return file;
    });
    setImgurl((previousImages) => previousImages.concat(imagesArray));
    setImgFile((preFile) => preFile.concat(productImg));

    event.target.file = "";
  };

  const deleteHandler = (image, fileName) => {
    setImgurl(imgUrl.filter((e) => e !== image));
    URL.revokeObjectURL(image);
    setImgFile(imgFile.filter((mainfile) => mainfile.name !== fileName));
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const term = useWatch({ control, name: "term" });

  const onSubmit = async (data) => {
    const formdata = new FormData();
    imgFile.forEach((image, i) => {
      formdata.append("img", image);
    });

    await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then(async (url) => {
        if (url?.status) {
          const product = { ...data, productImg: url?.url.join("=") };
          await fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                toast.success("Product Successfully added", {
                  position: toast.POSITION.TOP_CENTER,
                });
                reset();
                setImgurl([]);
                setImgFile([]);
              }
            });
        }
      });
  };

  return (
    <DashboardLayout title="Add  new item">
      <div className="flex-1 px-2 justify-center my-6 max-w-screen-2xl">
        <div className=" bg-primary/5 rounded-xl p-3  xl:p-10 max-w-screen-xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Nameform register={register} errors={errors} />
            <div className="mx-auto max-w-md lg:max-w-full my-5">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Add Products Size
                </span>
              </label>
              <AddSize register={register} errors={errors} />
            </div>
            <div className="mx-auto max-w-md lg:max-w-full">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Add Products Images
                </span>
              </label>
              <AddImage
                register={register}
                imageChange={imageChange}
                deleteHandler={deleteHandler}
                imgUrl={imgUrl}
                imgFile={imgFile}
              />
            </div>

            <div className="mx-auto max-w-md lg:max-w-full my-5">
              <label className="label font-bold">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Products Details
                </span>
              </label>
              <ProductDetails register={register} errors={errors} />
              <Price register={register} errors={errors} />
            </div>
            <hr className="my-3"></hr>

            <div className="flex justify-between items-center w-full mt-3">
              <div className="flex  w-full max-w-xs">
                <input
                  className="mr-3"
                  type="checkbox"
                  {...register("term")}
                  id="terms"
                />
                <label htmlFor="terms">I agree to terms and conditions</label>
              </div>
              <button
                disabled={!term}
                className="btn btn-primary"
                type="submit">
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddProduct;
