import React, { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../../components/Layout";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import { Zoom, FreeMode, Thumbs } from "swiper";
import { TbCurrencyTaka } from "react-icons/tb";
const productImages = [
  {
    name: "Adaption",
    url: "/images/Products-img/A-20-1.jpg",
  },
  {
    name: "Adaption 2",
    url: "/images/Products-img/A-20-2.jpg",
  },
  {
    name: "Buildmix",
    url: "/images/Products-img/B-20-2.jpg",
  },
  {
    name: "Adaption",
    url: "/images/Products-img/R-10-1.jpg",
  },
];
const ById = () => {
  // const [productImg, setProductImg] = useState(productImages[2]);
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  let price = 200;
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    if (quantity) {
      setQuantity(+quantity + 1);
    }
  };
  if (size == 4) {
    price = 800;
  }
  if (size == 10) {
    price = 1800;
  }
  if (size == 20) {
    price = 3000;
  }

  return (
    <Layout title="Products">
      <div className="mt-24">
        <Head>
          <title>Products - Adaption Plus</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h2 className=" text-2xl text-center text-primary py-5">
          Product Details
        </h2>
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row-reverse  justify-between px-2">
            <div className="text-left max-w-4xl">
              <h1 className="text-xl lg:text-4xl font-medium py-5">
                Adaption Plus
              </h1>
              <h1 className="text-xl lg:text-3xl font-medium flex items-center">
                {" "}
                Price : <TbCurrencyTaka size={35} /> 200.00 -{" "}
                <TbCurrencyTaka size={35} /> 3000.00
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <label className="label">
                <span className="label-text">Select Size</span>
              </label>
              <select
                onChange={(e) => setSize(e.target.value)}
                className="select select-bordered w-full max-w-xs">
                <option value={1}>1 Litter</option>
                <option value={4}>4 Litter</option>
                <option value={10}>10 Litter</option>
                <option value={20}>20 Litter</option>
              </select>
              <p className="text-xl lg:text-2xl font-medium text-primary py-5 flex items-center">
                Unit Price: <TbCurrencyTaka size={30} />
                {`${price}`}.00
              </p>
              <div className="btn-group items-center">
                <button
                  onClick={() => decrement()}
                  className="btn btn-square btn-sm  text-white btn-primary text-lg">
                  -
                </button>
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  className=" focus:outline-none w-20 input rounded-none border border-primary text-lg h-8 text-center"
                  type="number"
                  name=""
                  id=""
                  value={quantity}
                />
                <button
                  onClick={() => increment()}
                  className="btn btn-square btn-sm text-white btn-primary text-lg">
                  +
                </button>
              </div>
              <button className="btn text-white btn-primary my-5">
                Add to Cart
              </button>
            </div>
            <div className="max-w-xl">
              <Swiper
                className="flex justify-center"
                spaceBetween={10}
                zoom={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Zoom, Thumbs]}>
                {productImages.map((image, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Image
                        width={400}
                        height={450}
                        src={image?.url}
                        alt={image?.name}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}>
                {productImages.map((image, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Image
                        width={90}
                        height={100}
                        src={image?.url}
                        alt={image?.name}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* <section className="flex flex-row justify-center gap-10 my-6 md:mr-8">
                {productImages.map((image, i) => {
                  return (
                    <div key={i} className=" border border-primary">
                      <Image
                        ref={addRefs}
                        width={70}
                        height={70}
                        src={image?.url}
                        alt={image?.name}
                        onMouseOver={() => hoverHandler(image, i)}
                      />
                    </div>
                  );
                })}
              </section> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ById;
