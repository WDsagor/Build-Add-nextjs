"use client";

import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeProducts = () => {
  return (
    <div className="max-w-screen-2xl py-10 mx-auto px-2 text-gray-700">
      <div className="max-w-5xl mx-auto text-center py-10">
        <h1 className="lg:text-4xl text-2xl text-center pt-14 pb-5 font-bold text-primary">
          Our Products
        </h1>
        <p>
          Super Fixit is one of the leading construction chemical manufacturing
          and marketing companies in Bangladesh. This chemical is manufactured
          under the supervision of a group of domestic and foreign chemical
          specialists.
        </p>
      </div>
      <>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {products.map((product, i) => {
            return (
              <SwiperSlide className="p-5" key={i}>
                <div className="card card-compact hover:shadow-2xl group cursor-pointer transition-all">
                  <figure className="p-5">
                    <Image
                      width={350}
                      height={400}
                      className="rounded-xl group-hover:scale-105 transition-all"
                      src={product?.productImage}
                      alt={product?.title}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product?.title}</h2>
                    <p className="text-justify">{product?.description}</p>
                    <div className="card-actions justify-between">
                      <p className=" font-bold text-lg text-secondary">
                        Start price 200
                      </p>
                      <Link
                        href={`products/${product?.id}`}
                        className="btn btn-sm btn-accent w-full hover:text-white"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default HomeProducts;
