import Head from "next/head";
import Layout from "../../components/Layout";

const Products = () => {
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
          <div className="flex lg:flex-row  justify-between">
            <div className=" max-w-4xl">
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
