import { SideNavBar } from "@/components/view-product/sidenavbar";
import { ViewProductPage } from "@/components/view-product/view-product";
import React from "react";

export default function page() {
  return (
    <div className="container pb-[48px]">
      <div className="text-center py-[64px] bg-[#FAFAFA] ">
        <h5 className="h6 text-neutral-600">
          Home/<span className="text-gray-700">Top selling product</span>
        </h5>
        <h4 className="h4">Top Selling Product</h4>
      </div>
      <div className="flex gap-x-6">
        <SideNavBar />
        <ViewProductPage />
      </div>
    </div>
  );
}
