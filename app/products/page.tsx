import { products } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Product | Super FIXIT Ltd",
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
              return (
                <div
                  key={index}
                  className="card card-compact hover:shadow-2xl group cursor-pointer transition-all"
                >
                  <figure className="p-5">
                    <Image
                      width={350}
                      height={400}
                      className="rounded-xl group-hover:scale-105 transition-all"
                      src={product?.productImage}
                      alt={product?.title}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product?.title}</h2>
                    <p className="text-justify">{product?.description}</p>
                    <div className="card-actions justify-between">
                      <p className=" font-bold text-lg text-secondary">
                        Start price 200
                      </p>
                      <Link
                        href={`products/${product?.id}`}
                        className="btn btn-sm btn-accent w-full hover:text-white"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          ;
        </div>
      </div>
    </div>
  );
};

export default page;
