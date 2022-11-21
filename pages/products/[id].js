import React, { useRef, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Zoom from "react-img-zoom";

const index = () => {
  return (
    <Layout title="Products">
      <div className="mt-24">
        <Head>
          <title>Products - id page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h2 className=" text-2xl text-center text-primary py-5">Our All Products</h2>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-xl lg:text-4xl font-medium">Adaption Plus</h1>
              <h1 className="text-xl lg:text-3xl font-medium"> Price : &#2547; 200.00 - &#2547;3000.00</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <label className="label">
                <span className="label-text">Select Size</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option>1 Litter</option>
                <option>4 Litter</option>
                <option>10 Litter</option>
                <option>20 Litter</option>
              </select>
            </div>
            <div className="mx-auto flex justify-center">
              <Zoom img="/images/Products-img/A-20-1.jpg" zoomScale={3} width={500} height={500} transitionTime={0.5} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
