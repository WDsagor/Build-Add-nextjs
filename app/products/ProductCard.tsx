"use client";

import { ProductType } from "@/utils/type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiShoppingCart, FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-2xl border border-teal-100/80 shadow-sm hover:shadow-xl hover:border-[#00D2B8]/50 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
    >
      {/* Top Section: Image & Content */}
      <div>
        {/* Product Image Container */}
        <div className="relative p-5 pb-0">
          <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-b from-teal-50/50 to-slate-50 border border-slate-100 flex items-center justify-center">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
              src={product?.productImage}
              alt={product?.title || "Super FIXIT Product"}
            />
          </div>

          {/* Brand Tag */}
          <span className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm text-teal-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-teal-100">
            Super FIXIT
          </span>

          {/* Quick View Icon on Hover */}
          <Link
            href={`/products/${product?.id}`}
            aria-label={`View ${product?.title}`}
            className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-[#00D2B8] hover:text-slate-900 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
          >
            <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Info */}
        <div className="px-5 pt-1 pb-4 space-y-2">
          <Link href={`/products/${product?.id}`}>
            <h2 className="text-lg font-bold text-slate-800 group-hover:text-[#00D2B8] transition-colors line-clamp-1">
              {product?.title}
            </h2>
          </Link>
          <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {product?.description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Price & Action Button */}
      <div className="px-5 pb-5 pt-3 border-t border-teal-50/80 flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-medium text-slate-400 block">
            Start Price
          </span>
          <span className="text-base sm:text-lg font-extrabold text-slate-800">
            ৳ 200
          </span>
        </div>

        <Link
          href={`/products/${product?.id}`}
          className="btn btn-sm bg-[#00D2B8] hover:bg-[#00beb0] text-slate-900 font-semibold border-none px-4 rounded-xl shadow-sm flex items-center gap-1.5 active:scale-95 transition-all"
        >
          <FiShoppingCart className="w-3.5 h-3.5" />
          <span>Buy Now</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;