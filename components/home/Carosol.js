import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
// import image1 from "/images/Carousel-img/Building.png";
// import image2 from "/images/Carousel-img/Building1.png";
// import image3 from "/images/Carousel-img/grouping.png";
// import image4 from "/images/Carousel-img/helmet.png";
// import Adaption from "/images/Products-img/A-20-1.jpg";
// import Buildmix from "/images/Products-img/B-20-2.jpg";
// import Rawmix from "/images/Products-img/R-10-1.jpg";

const Carousel = () => {
  return (
    <Swiper
      className="max-w-screen-2xl"
      rewind={true}
      spaceBetween={30}
      effect="fade"
      centeredSlides={true}
      autoHeight={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
    >
      <SwiperSlide>
        <img src="/images/Carousel-img/helmet.png" alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-14 lg:bottom-1/4 items-end">
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
            <p className="text-2xl lg:text-4xl font-bold"> Adaption Plus</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem
              nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md border-none btn-primary ">BUY NOW</button>
          </div>
          <div className=" justify-self-end">
            <Image
              width={300}
              height={300}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="max-w-xs rounded-lg shadow-2xl"
              src="/images/Products-img/A-20-1.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Carousel-img/Building.png" alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-14 lg:bottom-1/4 items-end">
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
            <p className="text-2xl lg:text-4xl font-bold"> Builmix</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem
              nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md  border-none btn-primary">BUY NOW</button>
          </div>
          <div className=" justify-self-end">
            <Image
              width={300}
              height={300}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="max-w-xs rounded-lg shadow-2xl"
              src="/images/Products-img/B-20-2.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Carousel-img/grouping.png" alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-14 lg:bottom-1/4 items-end">
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
            <p className="text-2xl font-bold lg:text-4xl "> Rawmix</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem
              nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md border-none btn-primary">BUY NOW</button>
          </div>
          <div className=" justify-self-end">
            <Image
              width={300}
              height={300}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="max-w-xs rounded-lg shadow-2xl"
              src="/images/Products-img/R-10-1.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Carousel-img/Building1.png" alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-14 lg:bottom-1/4 items-end">
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
            <p className="text-2xl font-bold lg:text-4xl "> Adaption Plus</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem
              nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md border-none btn-primary">BUY NOW</button>
          </div>
          <div className=" justify-self-end">
            <Image
              width={300}
              height={300}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="max-w-xs rounded-lg shadow-2xl"
              src="/images/Products-img/A-20-1.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Carousel-img/Building.png" alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-14 lg:bottom-1/4 items-end">
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
            <p className="text-2xl font-bold lg:text-4xl "> Rawmix Plus</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem
              nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md border-none btn-primary">BUY NOW</button>
          </div>
          <div className=" justify-self-end">
            <Image
              width={300}
              height={300}
              data-aos="fade-out"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="max-w-xs rounded-lg shadow-2xl"
              src="/images/Products-img/R-10-1.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Carousel-img/grouping.png" alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-14 lg:bottom-1/4 items-end">
          <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800">
            <p className="text-2xl font-bold lg:text-4xl "> Builmix</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem
              nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md  border-none btn-primary">BUY NOW</button>
          </div>
          <div className=" justify-self-end">
            <Image
              width={300}
              height={300}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
              className="max-w-xs rounded-lg shadow-2xl"
              src="/images/Products-img/B-20-2.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Carousel-img/Building1.png" alt="" />
        <div className=" absolute left-8 right-8 bottom-8 text-white md:left-12 md:bottom-12 lg:left-16 lg:right-16  grid grid-cols-2 gap-14 lg:bottom-1/4 items-end">
          <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="800">
            <p className="text-2xl font-bold lg:text-4xl"> Adaption Plus</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos repellendus harum qui impedit voluptatem
              nemo ut dolores at! Ex quaerat quos deserunt dolor, earum eius nesciunt vel minima iste.
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md  border-none btn-primary">BUY NOW</button>
          </div>
          <div className=" justify-self-end">
            <Image
              width={300}
              height={300}
              data-aos="fade-top"
              data-aos-duration="1000"
              data-aos-delay="800"
              className="max-w-xs rounded-lg shadow-2xl"
              src="/images/Products-img/A-20-1.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
