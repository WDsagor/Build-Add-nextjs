import React, { useRef, useState } from "react";
import Head from "next/head";

const index = () => {
  return (
    <Layout title="Products">
      <div className="mt-24">
        <Head>
          <title>Products - Building Admixture Limited</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h2 className=" text-2xl text-center text-primary py-5">Our All Products</h2>

        <div className="mx-auto flex justify-center">
          <Zoom img="/images/Products-img/A-20-1.jpg" zoomScale={3} width={600} height={600} transitionTime={0.5} />
        </div>
      </div>
    </Layout>
  );
};

export default index;
