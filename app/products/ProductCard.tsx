"use client";
import { ProductType } from "@/utils/type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // Simple fade-in animation when card enters viewport
    gsap.fromTo(
      cardRef.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2" },
    );
  }, []);
  return (
    <div
      ref={cardRef}
      className="card card-compact hover:shadow-2xl group cursor-pointer transition-all mt-10"
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
          <p className="font-bold text-lg text-secondary">Start price TK 200</p>
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
};

export default ProductCard;
