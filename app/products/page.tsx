import { products } from "@/utils/products";
import ProductCard from "./ProductCard";
import { FiPackage } from "react-icons/fi";

export const metadata = {
  title: "Products | Super FIXIT Ltd",
};

const page = () => {
  return (
    <section className="min-h-screen bg-[#F0FDF9]/60 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Page Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <FiPackage className="w-3.5 h-3.5 text-[#00D2B8]" />
            <span>Super FIXIT Catalog</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Our All <span className="text-[#00D2B8]">Products</span>
          </h1>
          
          <p className="text-sm sm:text-base text-slate-500">
            Explore our wide range of trusted construction chemicals, adhesives, and building solutions.
          </p>
        </div>

        {/* Products Grid */}
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-teal-100 p-12 text-center shadow-sm max-w-md mx-auto">
            <p className="text-slate-500 font-medium">
              No products available at the moment.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default page;