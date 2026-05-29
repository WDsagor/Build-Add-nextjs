import { products } from "@/utils/products";
import ProductCard from "./ProductCard";

export const metadata = {
  title: "Products | Super FIXIT Ltd",
};
const page = () => {
  return (
    <div className="mt-24">
      <h2 className=" text-2xl text-center text-primary py-5">
        Our All Products
      </h2>
      <div className="max-w-screen-2xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products?.length &&
            products?.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          ;
        </div>
      </div>
    </div>
  );
};

export default page;
