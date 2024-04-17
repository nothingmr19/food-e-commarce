import { SideNavBar } from "@/components/view-product/sidenavbar";
import { ViewProductPage } from "@/components/view-product/view-product";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function page() {
  return (
    <div className="container pb-[48px]">
      <div className="flex items-center justify-center h-[204px] bg-gray-50 border-b">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 text-sm ">
            <li>
              <a href="#" className="h6 text-gray-500 font-normal">
                {" "}
                Home
              </a>
            </li>

            <li>
              <MdKeyboardArrowRight className="h-6 w-6" />
            </li>

            <li>
              <a href="#" className="h6 text-gray-900 font-normal">
                {" "}
                Top selling product
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center mt-2 text-gray-900">
            Top selling product
          </h3>
        </nav>
      </div>

      <div className="flex gap-x-6">
        <SideNavBar />
        <ViewProductPage />
      </div>
    </div>
  );
}
