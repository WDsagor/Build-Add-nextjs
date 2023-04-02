import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode } from "swiper";

const HomeProducts = () => {
  return (
    <div
      className="max-w-screen-2xl py-10 mx-auto"
      data-aos="zoom-out"
      data-aos-duration="1000">
      <h1 className="lg:text-4xl text-2xl text-center pt-14 pb-5 font-bold text-primary">
        Our Products
      </h1>
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
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="p-5">
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl"
                  src="/images/Products-img/4L-2-1676482262862.png"
                  alt="Adaption"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adaption Plus</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className="card-actions justify-between">
                  <p className=" font-bold text-lg text-primary uppercase font-sans">
                    Price 200
                  </p>
                  <button className="btn btn-sm btn-secondary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="p-5">
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl"
                  src="/images/Products-img/B-20-2.jpg"
                  alt="Buildmix"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Buildmix</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                  <p className=" font-bold text-lg text-primary uppercase font-sans">
                    Price 200
                  </p>
                  <button className="btn btn-sm btn-secondary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="p-5">
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl"
                  src="/images/Products-img/R-10-1.jpg"
                  alt="Rawmix"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Rawmix</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                  <p className=" font-bold text-lg text-primary uppercase font-sans">
                    Price 200
                  </p>
                  <button className="btn btn-sm btn-secondary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="p-5">
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl"
                  src="/images/Products-img/RU.jpg"
                  alt="Rust RLD"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Rust RLD</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                  <p className=" font-bold text-lg text-primary uppercase font-sans">
                    Price 200
                  </p>
                  <button className="btn btn-sm btn-secondary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="p-5">
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl"
                  src="/images/Products-img/B-20-2.jpg"
                  alt="Buildmix"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Buildmix</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                  <p className=" font-bold text-lg text-primary uppercase font-sans">
                    Price 200
                  </p>
                  <button className="btn btn-sm btn-secondary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="p-5">
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl"
                  src="/images/Products-img/R-10-1.jpg"
                  alt="Rawmix"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Rawmix</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                  <p className=" font-bold text-lg text-primary uppercase font-sans">
                    Price 200
                  </p>
                  <button className="btn btn-sm btn-secondary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default HomeProducts;
