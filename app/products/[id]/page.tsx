"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import { Zoom, FreeMode, Thumbs } from "swiper/modules";
import { TbCurrencyTaka } from "react-icons/tb";
import { products } from "@/utils/products";
import { useParams } from "next/navigation";

interface ProductImage {
  name: string;
  url: string;
}
const productImages: ProductImage[] = [
  {
    name: "Adaption",
    url: "/images/Products-img/image.png",
  },
  {
    name: "Adaption 2",
    url: "/images/Products-img/image1.png",
  },
  {
    name: "Buildmix",
    url: "/images/Products-img/image.png",
  },
  {
    name: "Adaption",
    url: "/images/Products-img/image1.png",
  },
];

const page: React.FC = () => {
  const params = useParams();
  const singleProduct = products?.filter(
    (product) => product?.id === Number(params?.id),
  );

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [size, setSize] = useState<string | number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const productName = singleProduct[0]?.title;

  let price: number = 200;

  const decrement = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = (): void => {
    if (quantity) {
      setQuantity(quantity + 1);
    }
  };

  // Price calculation based on size
  const getPrice = (selectedSize: string | number): number => {
    switch (selectedSize) {
      case 4:
        return 800;
      case 10:
        return 1800;
      case 20:
        return 3000;
      default:
        return 200;
    }
  };

  price = getPrice(size);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setSize(value === "1" ? 1 : parseInt(value));
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : value);
  };

  const handleAddToCart = (): void => {
    // Add to cart logic here
    console.log("Added to cart:", {
      productName,
      size,
      quantity,
      price,
      totalPrice: price * quantity,
    });
  };

  return (
    <div className="mt-24 p-2">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-2xl pl-10 p-2 text-white bg-accent rounded-tr-xl rounded-tl-xl">
          Product Information
        </h2>
        <div className=" bg-white p-5 rounded-bl-xl rounded-br-xl shadow-xl">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-center lg:justify-end px-2">
            <div className="text-left max-w-4xl grid-cols-1 grid">
              <h1 className="text-xl lg:text-4xl font-bold py-5">
                {singleProduct[0]?.title}
              </h1>
              <h1 className="text-xl lg:text-3xl font-medium flex items-center">
                Price : 200.00 <TbCurrencyTaka size={35} /> - 3000.00{" "}
                <TbCurrencyTaka size={35} />
              </h1>

              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">Select Size</span>
                </label>
                <select
                  onChange={handleSizeChange}
                  className="select select-bordered w-full max-w-xs"
                  value={size}
                >
                  <option value={1}>1 Litter</option>
                  <option value={4}>4 Litter</option>
                  <option value={10}>10 Litter</option>
                  <option value={20}>20 Litter</option>
                </select>

                <button
                  onClick={() => setSize(1)}
                  type="button"
                  className="label link no-underline"
                >
                  CLEAR
                </button>
              </fieldset>
              <p className="text-xl lg:text-2xl font-medium text-primary  flex items-center">
                Unit Price: <TbCurrencyTaka size={30} />
                {`${price}`}.00
              </p>

              <label className="label text-2xl text-black">
                <span>Quantity</span>
                <div className="join">
                  <button
                    onClick={decrement}
                    className="btn join-item rounded-r-none text-white btn-accent text-lg"
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <input
                    onChange={handleQuantityChange}
                    className="input text-center rounded-none w-20 input-bordered join-item"
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={quantity}
                    min={1}
                  />
                  <button
                    onClick={increment}
                    className="btn rounded-l-none join-item text-white btn-accent text-lg"
                  >
                    +
                  </button>
                </div>
              </label>

              <button
                onClick={handleAddToCart}
                className="btn text-white  btn-accent my-5"
              >
                Add to Cart
              </button>
            </div>
            <div className="max-w-xl">
              <Swiper
                className="flex justify-center"
                spaceBetween={10}
                zoom={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Zoom, Thumbs]}
              >
                {productImages.map((image, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex justify-center">
                      <Image
                        width={400}
                        height={450}
                        src={image.url}
                        alt={image.name}
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
              >
                {productImages.map((image, i) => (
                  <SwiperSlide key={i}>
                    <div className="cursor-pointer">
                      <Image
                        width={90}
                        height={100}
                        src={image.url}
                        alt={image.name}
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Products details */}
      <div className="max-w-screen-2xl mx-auto mt-10">
        <h2 className="text-2xl pl-10 p-2 text-white bg-accent rounded-tr-xl rounded-tl-xl">
          Product Details
        </h2>
        <div className=" bg-white p-5 rounded-bl-xl rounded-br-xl shadow-xl">
          <ul className="list list-row max-w-6xl">
            <li className="list-disc">
              <p className="py-6">{singleProduct[0]?.description}</p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      {/* Ratings & Reviews */}
      <div className="max-w-screen-2xl mx-auto mt-10">
        <h2 className="text-2xl pl-10 p-2 text-white bg-accent rounded-tr-xl rounded-tl-xl">
          Ratings & Reviews
        </h2>
        <div className=" bg-white p-5 rounded-bl-xl rounded-br-xl shadow-xl">
          <div>
            <h1 className="text-6xl">4.5</h1>
          </div>
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((start, i) => {
              return (
                <input
                  key={start}
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${start} star`}
                  defaultChecked={start === 4}
                  disabled
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
