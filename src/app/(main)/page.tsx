import { AllProductPage } from "@/components/home/all-products";
import { BannerPage } from "@/components/home/banner";
import { CategoryPage } from "@/components/home/category";
import { CtaBannerPage } from "@/components/home/cta-banner";
import { FlashSalePage } from "@/components/home/flash-sale";
import { PopularProductPage } from "@/components/home/popular-product";
import { TopSellingPage } from "@/components/home/top-selling";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <CategoryPage />
      <TopSellingPage />
      <PopularProductPage />
      <CtaBannerPage />
      <FlashSalePage />
      <AllProductPage />
    </div>
  );
}
