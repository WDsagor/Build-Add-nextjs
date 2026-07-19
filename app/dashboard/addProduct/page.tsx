"use client";
import React, { useEffect, useState, useRef } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";

import gsap from "gsap";
import Swal from "sweetalert2";
import AddSize from "@/components/addProducts/AddSize";
import AddImage from "@/components/addProducts/AddImage";
import ProductDetails from "@/components/addProducts/ProductDetails";
import Price from "@/components/addProducts/Price";
import NameForm from "@/components/addProducts/NameForm";

// Define types
export interface ProductFormData {
  name: string;
  size: {
    size1?: number | string;
    size4?: number | string;
    size10?: number | string;
    size20?: number | string;
  };
  productName: string;
  productDetails: string;
  price: {
    price1?: number | string;
    price4?: number | string;
    price10?: number | string;
    price20?: number | string;
  };
  term: boolean;
}

interface UploadResponse {
  status: boolean;
  url: string[];
}

// Custom toast using SweetAlert2
const showToast = (
  icon: "success" | "error" | "warning" | "info" | "question",
  title: string,
  timer: number = 3000,
) => {
  Swal.fire({
    icon,
    title,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

const Page: React.FC = () => {
  const [imgUrl, setImgurl] = useState<string[]>([]);
  const [imgFile, setImgFile] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgFile.length > 4) {
      showToast("warning", "You can upload max 4 images", 3000);
    }
  }, [imgFile]);

  // Simple GSAP Animations
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    );

    // Fade in form sections
    gsap.fromTo(
      ".form-section",
      {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.5,
        ease: "power2.out",
      },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
    );
  }, []);

  const imageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const selectedFilesArray = Array.from(selectedFiles);

    if (imgFile.length + selectedFilesArray.length > 4) {
      Swal.fire({
        icon: "error",
        title: "Too Many Images",
        text: `You can only upload 4 images total. Currently have ${imgFile.length} images.`,
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
      event.target.value = "";
      return;
    }

    const validFiles = selectedFilesArray.filter((file) =>
      file.type.startsWith("image/"),
    );

    if (validFiles.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Invalid File Type",
        text: "Please select valid image files (JPEG, PNG, GIF, etc.)",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      event.target.value = "";
      return;
    }

    const imagesArray = validFiles.map((file) => URL.createObjectURL(file));

    setImgurl((previousImages) => [...previousImages, ...imagesArray]);
    setImgFile((preFile) => [...preFile, ...validFiles]);

    // Simple animation for new images
    gsap.from(".image-item", {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "back.out(1.4)",
    });

    event.target.value = "";
  };

  const deleteHandler = (url: string): void => {
    Swal.fire({
      title: "Remove Image?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setImgurl(imgUrl.filter((e) => e !== url));
        URL.revokeObjectURL(url);

        const indexToRemove = imgUrl.indexOf(url);
        if (indexToRemove !== -1) {
          setImgFile(imgFile.filter((_, index) => index !== indexToRemove));
          showToast("success", "Image removed successfully!", 2000);
        }
      }
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ProductFormData>({
    mode: "onTouched",
    defaultValues: {
      term: false,
      size: {},
    },
  });

  const term = useWatch({ control, name: "term" });

  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    // console.log(data);
    if (imgFile.length === 0) {
      Swal.fire({
        icon: "error",
        title: "No Images Uploaded",
        text: "Please upload at least one product image.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      return;
    }

    const result = await Swal.fire({
      title: "Add New Product?",
      html: `
        <div style="text-align: left;">
          <p><strong>Name:</strong> ${data.name || data.productName}</p>
          
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add product!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    setIsSubmitting(true);

    const formdata = new FormData();
    imgFile.forEach((image) => {
      formdata.append("img", image);
    });

    Swal.fire({
      title: "Uploading...",
      html: "Please wait while we upload your images",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const uploadResponse = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formdata,
      });

      const uploadData: UploadResponse = await uploadResponse.json();

      if (uploadData?.status) {
        const product = {
          ...data,
          productImg: uploadData?.url.join("="),
        };

        Swal.fire({
          title: "Adding Product...",
          html: "Please wait while we add your product",
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        const productResponse = await fetch(
          "http://localhost:3000/api/products",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          },
        );

        const productData = await productResponse.json();

        Swal.close();

        if (productData) {
          await Swal.fire({
            icon: "success",
            title: "🎉 Product Added Successfully!",
            text: `${data.name || data.productName} has been added to your store.`,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Great!",
            timer: 3000,
            timerProgressBar: true,
          });

          reset();
          setImgurl([]);
          setImgFile([]);
          setIsSubmitting(false);
        }
      }
    } catch (error) {
      Swal.close();
      await Swal.fire({
        icon: "error",
        title: "❌ Failed to Add Product",
        text: "There was an error adding your product. Please try again.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again",
      });
      console.error("Error adding product:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex-1 px-2 justify-center my-6 max-w-screen-2xl"
    >
      <title>Add new item</title>
      <h2 className="text-3xl py-5 text-center">Add new product</h2>
      <div className="bg-linear-to-t from-white mx-auto max-w-6xl w-full  to-accent/50 rounded-xl p-10 ">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="form-section mx-auto max-w-md lg:max-w-full my-5">
            <label className="label font-bold">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                Product name
              </span>
            </label>
            <NameForm register={register} errors={errors} />
          </div>

          <div className="form-section mx-auto max-w-md lg:max-w-full my-5">
            <label className="label font-bold">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                Add Products Size
              </span>
            </label>
            <AddSize register={register} errors={errors} />
          </div>

          <div className="form-section mx-auto max-w-md lg:max-w-full">
            <label className="label font-bold">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                Add Products Images
                <span className="text-sm font-normal ml-2 text-gray-500">
                  ({imgFile.length}/4)
                </span>
              </span>
            </label>
            <AddImage
              imageChange={imageChange}
              deleteHandler={deleteHandler}
              imgUrl={imgUrl}
              imgFile={imgFile}
            />
          </div>

          <div className="form-section mx-auto max-w-md lg:max-w-full my-5">
            <label className="label font-bold">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                Products Details
              </span>
            </label>
            <ProductDetails register={register} errors={errors} />
            <Price register={register} errors={errors} />
          </div>

          <div className="form-section flex justify-between items-center w-full mt-10 flex-wrap gap-4">
            <div className="flex items-center">
              <input
                className="mr-3 w-4 h-4 accent-primary cursor-pointer"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label htmlFor="terms" className="cursor-pointer">
                I agree to{" "}
                <span className="text-primary font-semibold">
                  terms and conditions
                </span>
              </label>
            </div>
            <button
              disabled={!term || isSubmitting}
              className={`btn btn-primary transition-all duration-300 ${
                !term || isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105 hover:shadow-lg"
              }`}
              type="submit"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Adding...
                </span>
              ) : (
                "Apply Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
