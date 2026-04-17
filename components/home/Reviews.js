import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="max-w-screen-2xl px-10 mx-auto ">
      <h1 className="lg:text-3xl text-xl text-center pt-14 text-primary font-bold">
        Our Happy Clients Reviews
      </h1>
      <p className="lg:text-lg text-sm text-center pb-5">
        Our most of the valuable clients reviews show here
      </p>
      <div className=" max-w-screen-2xl sm:w-full md:w-10/12 xl:w-10/12 mx-auto">
        <Swiper
          slidesPerView={1}
          rewind={true}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={5}
          freeMode={true}
          navigation={false}
          autoplay={{
            delay: 2000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay, FreeMode]}
        >
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex py-5 mt-10">
              <div className="group w-full lg:w-5/6 shadow-xl bg-gray-900 text-white relative rounded-xl hover:bg-yellow-400 hover:text-black cursor-pointer ease-in duration-300">
                <div className="">
                  <div className="w-16 absolute top-[-20%] left-[40%]">
                    <Image
                      height={50}
                      width={50}
                      alt="User images"
                      className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src="/images/logo.png"
                    />
                  </div>
                </div>
                <div className="p-10">
                  <label className=" font-bold">Name</label>
                  <p className="text-xs">
                    Protects concrete from corrosive substances. Protects
                    concrete from corrosive substances. Protects concrete from
                    corrosive substances.
                  </p>

                  <p className="flex align-middle pt-5 text-yellow-400 group-hover:text-primary">
                    <FaStar className="mr-2 " />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                    <FaStar className="mr-2" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
