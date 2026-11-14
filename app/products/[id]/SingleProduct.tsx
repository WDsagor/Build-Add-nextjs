"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, FreeMode, Thumbs } from "swiper/modules";
import { TbCurrencyTaka, TbShoppingCart } from "react-icons/tb";
import { FiMinus, FiPlus, FiCheck } from "react-icons/fi";
import { products } from "@/utils/products";
import { notFound, useParams } from "next/navigation";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/zoom";

interface ProductImage {
  name: string;
  url: string;
}

const productImages: ProductImage[] = [
  {
    name: "Product Image 1",
    url: "/images/Products-img/image.png",
  },
  {
    name: "Product Image 2",
    url: "/images/Products-img/image1.png",
  },
  {
    name: "Product Image 3",
    url: "/images/Products-img/image.png",
  },
  {
    name: "Product Image 4",
    url: "/images/Products-img/image1.png",
  },
];

const SingleProduct = () => {
  const [rating, setRating] = useState<number>(0);
const [review, setReview] = useState<string>("");
const [reviewName, setReviewName] = useState<string>("");
  const params = useParams();

  const productId = Number(params?.id);

  const singleProduct = products.find(
    (product) => product.id === productId,
  );

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [size, setSize] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);

  if (!singleProduct) {
    notFound();
  }

  // Price calculation based on selected size
  const getPrice = (selectedSize: number): number => {
    const prices: Record<number, number> = {
      1: 200,
      4: 800,
      10: 1800,
      20: 3000,
    };

    return prices[selectedSize] ?? 200;
  };

  const price = getPrice(size);
  const totalPrice = price * quantity;

  const decrement = (): void => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increment = (): void => {
    setQuantity((prev) => prev + 1);
  };

  const handleSizeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSize(Number(e.target.value));
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const value = Number(e.target.value);

    if (Number.isNaN(value) || value < 1) {
      setQuantity(1);
      return;
    }

    setQuantity(value);
  };
const handleReviewSubmit = (
  e: React.FormEvent<HTMLFormElement>,
): void => {
  e.preventDefault();

  if (rating === 0) {
    alert("Please select a rating");
    return;
  }

  console.log("Review submitted:", {
    name: reviewName,
    rating,
    review,
    productId: singleProduct.id,
  });

  // Reset form
  setRating(0);
  setReview("");
  setReviewName("");
};
  const handleAddToCart = (): void => {
    console.log("Added to cart:", {
      productName: singleProduct.title,
      size,
      quantity,
      unitPrice: price,
      totalPrice,
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Product Information */}
        <section className="bg-white border border-teal-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-5 sm:p-8 lg:p-10">

            {/* Product Images */}
            <div className="w-full">
              <div className="rounded-2xl bg-[#f8fbfb] border border-slate-100 overflow-hidden">
                <Swiper
                  spaceBetween={10}
                  zoom
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Zoom, Thumbs]}
                  className="w-full"
                >
                  {productImages.map((image, index) => (
                    <SwiperSlide key={`${image.name}-${index}`}>
                      <div className="swiper-zoom-container flex items-center justify-center min-h-[300px] sm:min-h-[450px] p-6">
                        <Image
                          width={600}
                          height={600}
                          src={image.url}
                          alt={image.name}
                          priority={index === 0}
                          className="w-full max-w-[500px] h-auto object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Thumbnail Slider */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Thumbs]}
                className="mt-4"
              >
                {productImages.map((image, index) => (
                  <SwiperSlide key={`thumb-${image.name}-${index}`}>
                    <button
                      type="button"
                      className="w-full aspect-square rounded-xl border border-slate-200 bg-white overflow-hidden cursor-pointer hover:border-teal-400 transition-colors"
                    >
                      <Image
                        width={120}
                        height={120}
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Product Content */}
            <div className="flex flex-col justify-center">

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                SUPER FIXIT PRODUCT
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102a43] leading-tight">
                {singleProduct.title}
              </h1>

              <p className="mt-5 text-slate-500 leading-7">
                {singleProduct.description}
              </p>

              {/* Price Range */}
              <div className="mt-6 p-5 rounded-2xl bg-[#f3fbfb] border border-teal-100">
                <p className="text-sm text-slate-500 mb-1">
                  Price Range
                </p>

                <div className="flex items-center text-2xl sm:text-3xl font-bold text-[#102a43]">
                  <TbCurrencyTaka size={28} />
                  200
                  <span className="mx-2 text-slate-300">—</span>
                  <TbCurrencyTaka size={28} />
                  3000
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-7">
                <label
                  htmlFor="size"
                  className="block text-sm font-semibold text-[#102a43] mb-2"
                >
                  Select Size
                </label>

                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    id="size"
                    value={size}
                    onChange={handleSizeChange}
                    className="w-full sm:max-w-xs rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#102a43] outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                  >
                    <option value={1}>1 Liter</option>
                    <option value={4}>4 Liter</option>
                    <option value={10}>10 Liter</option>
                    <option value={20}>20 Liter</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => setSize(1)}
                    className="px-4 py-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Unit Price */}
              <div className="mt-6 flex items-center justify-between border-b border-slate-100 pb-5">
                <span className="font-medium text-slate-500">
                  Unit Price
                </span>

                <div className="flex items-center text-xl font-bold text-teal-600">
                  <TbCurrencyTaka size={25} />
                  {price.toFixed(2)}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-[#102a43] mb-3">
                  Quantity
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center rounded-xl border border-slate-200 overflow-hidden bg-white">

                    <button
                      type="button"
                      onClick={decrement}
                      disabled={quantity <= 1}
                      className="w-11 h-11 flex items-center justify-center text-[#102a43] hover:bg-teal-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                      aria-label="Decrease quantity"
                    >
                      <FiMinus />
                    </button>

                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      value={quantity}
                      min={1}
                      onChange={handleQuantityChange}
                      className="w-16 h-11 text-center border-x border-slate-200 outline-none font-semibold text-[#102a43]"
                    />

                    <button
                      type="button"
                      onClick={increment}
                      className="w-11 h-11 flex items-center justify-center text-[#102a43] hover:bg-teal-50 transition"
                      aria-label="Increase quantity"
                    >
                      <FiPlus />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-400">
                      Total Price
                    </p>

                    <div className="flex items-center justify-end text-xl font-bold text-[#102a43]">
                      <TbCurrencyTaka size={24} />
                      {totalPrice.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Add To Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00cdbd] px-8 py-4 font-semibold text-[#102a43] shadow-sm hover:bg-[#00b8aa] hover:shadow-md transition-all"
              >
                <TbShoppingCart size={21} />
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="mt-10 bg-white border border-teal-100 rounded-3xl shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 rounded-full bg-[#00cdbd]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102a43]">
              Product Details
            </h2>
          </div>

          <div className="rounded-2xl bg-[#f8fbfb] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <FiCheck className="mt-1 text-teal-500 flex-shrink-0" />
              <p className="text-slate-600 leading-8">
                {singleProduct.description}
              </p>
            </div>
          </div>
        </section>

        {/* Ratings & Reviews */}
        {/* Ratings & Reviews */}
<section className="max-w-screen-2xl mx-auto mt-10 bg-white border border-teal-100 rounded-3xl shadow-sm p-6 sm:p-8">
  <div className="flex items-center gap-3 mb-8">
    <div className="w-1.5 h-8 rounded-full bg-[#00cdbd]" />

    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#102a43]">
        Ratings & Reviews
      </h2>
      <p className="text-sm text-slate-500 mt-1">
        Share your experience with this product
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

    {/* Rating Summary */}
    <div className="rounded-2xl bg-[#f3fbfb] border border-teal-100 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center gap-6">

        <div className="text-center min-w-[140px]">
          <h3 className="text-6xl font-bold text-[#102a43]">
            4.5
          </h3>

          <div className="flex justify-center gap-1 text-2xl text-amber-400 mt-3">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-slate-300">★</span>
          </div>

          <p className="text-sm text-slate-500 mt-3">
            Overall Rating
          </p>
        </div>

        <div className="hidden sm:block w-px h-28 bg-teal-100" />

        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-[#102a43] text-lg">
            Customer Reviews
          </h4>

          <p className="text-slate-500 mt-2 leading-7">
            Your feedback helps other customers choose the right product.
          </p>

          <p className="text-sm font-medium text-teal-600 mt-3">
            Based on customer ratings
          </p>
        </div>
      </div>
    </div>

    {/* Review Form */}
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#102a43]">
        Write a Review
      </h3>

      <p className="text-sm text-slate-500 mt-1">
        Tell us what you think about this product.
      </p>

      <form
        onSubmit={handleReviewSubmit}
        className="mt-6 space-y-5"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="reviewName"
            className="block text-sm font-semibold text-[#102a43] mb-2"
          >
            Your Name
          </label>

          <input
            id="reviewName"
            type="text"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[#102a43] outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        {/* Star Rating */}
        <div>
          <p className="text-sm font-semibold text-[#102a43] mb-3">
            Your Rating
          </p>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-3xl transition-transform hover:scale-110 ${
                  star <= rating
                    ? "text-amber-400"
                    : "text-slate-200"
                }`}
                aria-label={`${star} star`}
              >
                ★
              </button>
            ))}

            {rating > 0 && (
              <span className="ml-2 text-sm font-medium text-slate-500">
                {rating} / 5
              </span>
            )}
          </div>
        </div>

        {/* Review */}
        <div>
          <label
            htmlFor="review"
            className="block text-sm font-semibold text-[#102a43] mb-2"
          >
            Your Review
          </label>

          <textarea
            id="review"
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your experience about this product..."
            required
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-[#102a43] outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto rounded-xl bg-[#00cdbd] px-7 py-3 font-semibold text-[#102a43] shadow-sm transition-all hover:bg-[#00b8aa] hover:shadow-md"
        >
          Submit Review
        </button>
      </form>
    </div>
  </div>
</section>
      </div>
    </main>
  );
};

export default SingleProduct;