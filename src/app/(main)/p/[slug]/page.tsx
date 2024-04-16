import {
  DescriptionReviewPage,
  ProductDetails,
  ProductSlider,
  RelatedItems,
} from "@/components/products";

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start py-4 md:py-5 lg:py-6 *:w-full gap-6">
        <ProductSlider />
        <ProductDetails />
      </div>
      <DescriptionReviewPage />
      <RelatedItems />
    </div>
  );
}
