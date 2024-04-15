import { ProductDetails, ProductSlider } from "@/components/products";

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start container py-4 md:py-5 lg:py-6 *:w-full gap-6">
        <ProductSlider />
        <ProductDetails />
      </div>
    </div>
  );
}
