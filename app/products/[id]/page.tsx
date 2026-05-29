import { products } from "@/utils/products";
import SingleProduct from "./SingleProduct";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const singleProduct = products?.find((product) => product?.id === Number(id));

  if (!singleProduct) {
    return {
      title: "Product Not Found | Super FIXIT Ltd",
    };
  }

  return {
    title: `${singleProduct.title} | Super FIXIT Ltd`,
  };
}
const page: React.FC = () => {
  return (
    <>
      <SingleProduct />
    </>
  );
};

export default page;
