import { async } from "@firebase/util";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import ProductCard from "../../components/products/ProductCard";

const Products = ({ products }) => {
  return (
    <Layout title="Products">
      <div className="mt-24">
        <Head>
          <title>Products - Building Admixture Limited</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h2 className=" text-2xl text-center text-primary py-5">
          Our All Products
        </h2>

        <div className="max-w-screen-2xl mx-auto">
          <div className=" grid grid-cols-4 gap-10">
            {products?.length &&
              products?.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  console.log(products);
  return {
    props: {
      products: products,
    },
  };
};
