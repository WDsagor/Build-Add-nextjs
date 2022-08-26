import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout title="Products" >
    <div className="mt-24">
      <Head>
        <title>Products - Building Admixture Limited</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>Products pages</h2>
    </div>
    </Layout>
  );
};

export default index;
