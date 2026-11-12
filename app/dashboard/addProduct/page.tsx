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
import { MdAddBox, MdOutlineLayers, MdImage, MdDescription } from "react-icons/md";

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

  // GSAP Animations with clearProps fix
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", clearProps: "all" }
      );
    }

    const formSections = document.querySelectorAll(".form-section");
    if (formSections.length > 0) {
      gsap.fromTo(
        formSections,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.3,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    }
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
        confirmButtonColor: "#0d9488",
        confirmButtonText: "OK",
      });
      event.target.value = "";
      return;
    }

    const validFiles = selectedFilesArray.filter((file) =>
      file.type.startsWith("image/")
    );

    if (validFiles.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Invalid File Type",
        text: "Please select valid image files (JPEG, PNG, GIF, etc.)",
        confirmButtonColor: "#0d9488",
        confirmButtonText: "OK",
      });
      event.target.value = "";
      return;
    }

    const imagesArray = validFiles.map((file) => URL.createObjectURL(file));

    setImgurl((previousImages) => [...previousImages, ...imagesArray]);
    setImgFile((preFile) => [...preFile, ...validFiles]);

    event.target.value = "";
  };

  const deleteHandler = (url: string): void => {
    Swal.fire({
      title: "Remove Image?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#0d9488",
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
    if (imgFile.length === 0) {
      Swal.fire({
        icon: "error",
        title: "No Images Uploaded",
        text: "Please upload at least one product image.",
        confirmButtonColor: "#0d9488",
        confirmButtonText: "OK",
      });
      return;
    }

    const result = await Swal.fire({
      title: "Add New Product?",
      html: `
        <div style="text-align: left; padding: 10px;">
          <p><strong>Product Name:</strong> ${data.name || data.productName}</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0d9488",
      cancelButtonColor: "#e11d48",
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
      title: "Uploading Images...",
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
          title: "Saving Product...",
          html: "Please wait while we add your product to store",
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
          }
        );

        const productData = await productResponse.json();

        Swal.close();

        if (productData) {
          await Swal.fire({
            icon: "success",
            title: "🎉 Product Added Successfully!",
            text: `${data.name || data.productName} has been added to your inventory.`,
            confirmButtonColor: "#0d9488",
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
        confirmButtonColor: "#e11d48",
        confirmButtonText: "Try Again",
      });
      console.error("Error adding product:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="mx-auto"
    >
      <title>Add New Item | Super FIXIT Ltd</title>

      {/* Page Header */}
      <div className="mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-200 text-teal-600 flex items-center justify-center shadow-sm">
              <MdAddBox size={26} />
            </div>
            Add New Product
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Fill in the details below to publish a new product to your catalog.
          </p>
        </div>
      </div>

      {/* Main Form Card with Professional Teal-Blue Corporate Theme */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/80 p-6 sm:p-10">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Section 1: Product Name */}
          <div className="form-section space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
              <MdOutlineLayers className="text-teal-600" size={20} />
              <span>Product Name</span>
              <span className="text-rose-500">*</span>
            </div>
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80">
              <NameForm register={register} errors={errors} />
            </div>
          </div>

          {/* Section 2: Product Size */}
          <div className="form-section space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
              <MdOutlineLayers className="text-teal-600" size={20} />
              <span>Product Sizes</span>
              <span className="text-rose-500">*</span>
            </div>
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80">
              <AddSize register={register} errors={errors} />
            </div>
          </div>

          {/* Section 3: Product Images */}
          <div className="form-section space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
                <MdImage className="text-teal-600" size={20} />
                <span>Product Images</span>
                <span className="text-rose-500">*</span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                {imgFile.length}/4 uploaded
              </span>
            </div>
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80">
              <AddImage
                imageChange={imageChange}
                deleteHandler={deleteHandler}
                imgUrl={imgUrl}
                imgFile={imgFile}
              />
            </div>
          </div>

          {/* Section 4: Details & Pricing */}
          <div className="form-section space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
              <MdDescription className="text-teal-600" size={20} />
              <span>Details & Pricing</span>
              <span className="text-rose-500">*</span>
            </div>
            <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 space-y-6">
              <ProductDetails register={register} errors={errors} />
              <div className="border-t border-slate-200 pt-6">
                <Price register={register} errors={errors} />
              </div>
            </div>
          </div>

          {/* Footer: Terms & Submit Button */}
          <div className="form-section pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <input
                className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label htmlFor="terms" className="text-sm font-medium text-slate-700 cursor-pointer select-none">
                I agree to the{" "}
                <span className="text-teal-600 font-semibold hover:underline">
                  terms and conditions
                </span>
              </label>
            </div>

            <button
              disabled={!term || isSubmitting}
              type="submit"
              className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                !term || isSubmitting
                  ? "bg-slate-300 text-slate-500 shadow-none cursor-not-allowed"
                  : "bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 shadow-teal-600/25 hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Publishing Product...</span>
                </>
              ) : (
                "Publish Product"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Page;