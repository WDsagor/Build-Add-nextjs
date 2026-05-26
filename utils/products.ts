import { ProductType } from "./type";

export const products: ProductType[] = [
  {
    id: 1,
    bgImage: "/images/Carousel-img/helmet.png",
    title: "SUPER 101LW+",
    description:
      "It is a multi-purpose product used for waterproofing of small areas in new construction such as bathroom, kitchen, balcony etc. and for treating internal wall dampness. It bonds strongly to old & new concrete & plaster. Ideal for repair work to prevent leakage and dampness.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      image1: {
        from: { scale: 1, opacity: 1 },
        to: { opacity: 1, scale: 1.5, duration: 4 },
      },
      text1: {
        from: { x: -200, scale: 0.5, opacity: 0 },
        to: { x: 0, opacity: 1, scale: 1, duration: 0.5 },
      },
      image: {
        from: { scale: 0.8, opacity: 0, x: "100%" },
        to: { x: 0, opacity: 1, duration: 1, scale: 1 },
      },
      text2: {
        from: { y: -100, scale: 0.5, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.5, scale: 1 },
      },
    },
  },
  {
    id: 2,
    bgImage: "/images/Carousel-img/Building.png",
    title: "Rust RLD",
    description:
      "It is a multi-purpose product used for waterproofing of small areas in new construction such as bathroom, kitchen, balcony etc. and for treating internal wall dampness. It bonds strongly to old & new concrete & plaster. Ideal for repair work to prevent leakage and dampness.",
    productImage: "/images/Products-img/image.png",
    animations: {
      image1: {
        from: { scale: 1.5, opacity: 1 },
        to: { opacity: 1, scale: 1, duration: 4 },
      },
      text1: {
        from: { y: -100, rotation: -15, opacity: 0 },
        to: { y: 0, rotation: 0, opacity: 1, duration: 0.6 },
      },
      image: {
        from: { scale: 1.2, opacity: 0, y: "50%" },
        to: { y: 0, opacity: 1, duration: 1.2, scale: 1 },
      },
      text2: {
        from: { x: 200, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.7 },
      },
    },
  },
  {
    id: 3,
    bgImage: "/images/Carousel-img/grouping.png",
    title: "SUPER LW++101",
    description:
      "It is a multi-purpose product used for waterproofing of small areas in new construction such as bathroom, kitchen, balcony etc. and for treating internal wall dampness. It bonds strongly to old & new concrete & plaster. Ideal for repair work to prevent leakage and dampness.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      image1: {
        from: { scale: 1, opacity: 1 },
        to: { opacity: 1, scale: 1.5, duration: 4 },
      },
      text1: {
        from: { x: -150, opacity: 0, skewX: 20 },
        to: { x: 0, opacity: 1, skewX: 0, duration: 0.5 },
      },
      image: {
        from: { scale: 0.6, opacity: 0, rotate: -20 },
        to: { scale: 1, opacity: 1, rotate: 0, duration: 1 },
      },
      text2: {
        from: { y: 150, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.6 },
      },
    },
  },
  {
    id: 4,
    bgImage: "/images/Carousel-img/Building1.png",
    title: "Rust RLD",
    description:
      "It is a multi-purpose product used for waterproofing of small areas in new construction such as bathroom, kitchen, balcony etc. and for treating internal wall dampness. It bonds strongly to old & new concrete & plaster. Ideal for repair work to prevent leakage and dampness.",
    productImage: "/images/Products-img/image.png",
    animations: {
      image1: {
        from: { scale: 1.5, opacity: 1 },
        to: { opacity: 1, scale: 1, duration: 4 },
      },
      text1: {
        from: { scale: 2, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 0.5 },
      },
      image: {
        from: { x: "-100%", opacity: 0 },
        to: { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
      },
      text2: { from: { opacity: 0 }, to: { opacity: 1, duration: 0.8 } },
    },
  },
  {
    id: 5,
    bgImage: "/images/Carousel-img/Building.png",
    title: "SUPER 101LW+",
    description:
      "It is a multi-purpose product used for waterproofing of small areas in new construction such as bathroom, kitchen, balcony etc. and for treating internal wall dampness. It bonds strongly to old & new concrete & plaster. Ideal for repair work to prevent leakage and dampness.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      image1: {
        from: { scale: 1, opacity: 1 },
        to: { opacity: 1, scale: 1.5, duration: 4 },
      },
      text1: {
        from: { y: -100, rotation: -15, opacity: 0 },
        to: { y: 0, rotation: 0, opacity: 1, duration: 0.6 },
      },
      image: {
        from: { scale: 1.2, opacity: 0, y: "50%" },
        to: { y: 0, opacity: 1, duration: 1.2, scale: 1 },
      },
      text2: {
        from: { x: 200, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.7 },
      },
    },
  },
  {
    id: 6,
    bgImage: "/images/Carousel-img/grouping.png",
    title: "SUPER LW++101",
    description:
      "It is a multi-purpose product used for waterproofing of small areas in new construction such as bathroom, kitchen, balcony etc. and for treating internal wall dampness. It bonds strongly to old & new concrete & plaster. Ideal for repair work to prevent leakage and dampness.",
    productImage: "/images/Products-img/image.png",
    animations: {
      image1: {
        from: { scale: 1.5, opacity: 1, rotation: -15 },
        to: { opacity: 1, scale: 1, duration: 4, rotation: 0 },
      },
      text1: {
        from: { y: -100, rotation: -15, opacity: 0 },
        to: { y: 0, rotation: 0, opacity: 1, duration: 0.6 },
      },
      image: {
        from: { scale: 1.2, opacity: 0, y: "-50%" },
        to: { y: 0, opacity: 1, duration: 1.2, scale: 1 },
      },
      text2: {
        from: { x: 200, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.7 },
      },
    },
  },
  {
    id: 7,
    bgImage: "/images/Carousel-img/Building1.png",
    title: "SUPER 101LW+",
    description:
      "It is a multi-purpose product used for waterproofing of small areas in new construction such as bathroom, kitchen, balcony etc. and for treating internal wall dampness. It bonds strongly to old & new concrete & plaster. Ideal for repair work to prevent leakage and dampness.",
    productImage: "/images/Products-img/image1.png",
    animations: {
      image1: {
        from: { scale: 1, opacity: 1 },
        to: { opacity: 1, scale: 1.5, duration: 4 },
      },
      text1: {
        from: { x: -150, opacity: 0, skewX: 20 },
        to: { x: 0, opacity: 1, skewX: 0, duration: 0.5 },
      },
      image: {
        from: { scale: 0.6, opacity: 0, rotate: -20 },
        to: { scale: 1, opacity: 1, rotate: 0, duration: 1 },
      },
      text2: {
        from: { y: 150, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.6 },
      },
    },
  },
];
