import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const ProductCard = ({ product }) => {
  const urls = product?.product_img.split("=");
  console.log(urls[2]);
  return (
    <div className="group bg-base-100 shadow-xl">
      <div className="mx-auto max-w-sm p-5">
        <Swiper
          slidesPerView={1}
          freeMode={true}
          navigation={true}
          loop={true}
          modules={[Navigation]}>
          {urls?.map((url, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl group-hover:scale-110 transition-all"
                  src={url}
                  alt={product?.name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p className=" text-justify">{product?.details}</p>
        <div className="card-actions justify-between">
          <p className=" font-bold text-lg flex align-middle">
            Price:
            {product?.price1}
            <TbCurrencyTaka size={25} /> - {product?.price20}
            <TbCurrencyTaka size={25} /> BDT
          </p>
          <button className="btn btn-md btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
