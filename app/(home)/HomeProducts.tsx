"use client";

import Image from "next/image";
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
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          <SwiperSlide>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className="p-5">
                <Image
                  width={350}
                  height={400}
                  className="rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
                  src="/images/Products-img/image1.png"
                  alt="Buildmix"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Super 101LW+</h2>
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
                  src="/images/Products-img/image.png"
                  alt="Rawmix"
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
                  src="/images/Products-img/image1.png"
                  alt="Rust RLD"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Super LW++101</h2>
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
                  src="/images/Products-img/image.png"
                  alt="Buildmix"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Super MIX-100</h2>
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
                  src="/images/Products-img/image1.png"
                  alt="Rawmix"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Super MIX-50</h2>
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
