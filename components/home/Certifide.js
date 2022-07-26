import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode } from "swiper";

const Certifide = () => {
  return (
    <div className="max-w-screen-2xl px-10 mx-auto">
      <h1 className="lg:text-xl text-md text-center pt-14 text-primary">
        আমাদের পন্য সমূহ BUET, BCSIR দ্বারা পরীক্ষিত এবং ISO 9001:2015 ও অন্যান্য অনুমদিত প্রতিষ্ঠান দ্বারা সনদপ্রাপ্ত।
      </h1>
      <h1 className="lg:text-xl text-md text-center font-semibold pb-5 text-info">
        Recognized & Certified By GOVT & Other Organization
      </h1>
      <>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            360: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          <SwiperSlide>
            <div className="card card-compact ">
              <figure className="p-8">
                <Image width={200} height={200} className="rounded-xl" src="/images/certified/buet.jpeg" alt="BUET" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact ">
              <figure className="p-8">
                <Image width={200} height={200} className="rounded-xl" src="/images/certified/bcsir.jpg" alt="BCSIR" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact ">
              <figure className="p-8">
                <Image width={200} height={200} className="rounded-xl" src="/images/certified/rjsc.jpg" alt="RJSC" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact ">
              <figure className="p-8">
                <Image width={200} height={200} className="rounded-xl" src="/images/certified/iso.jpeg" alt="ISO" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact ">
              <figure className="p-8">
                <Image width={200} height={200} className="rounded-xl" src="/images/certified/fir.png" alt="Fire" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card-compact ">
              <figure className="p-8">
                <Image width={200} height={200} className="rounded-xl" src="/images/certified/bida.png" alt="Bida" />
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Certifide;
