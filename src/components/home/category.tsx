import { category } from "@/constants/category";
import Image from "next/image";
import React from "react";

export function CategoryPage() {
  const allCategory = category;
  return (
    <div className="container py-section">
      <div className="pb-[16px]">
        <h1 className="h4 text-gray-900 mb-5">Category</h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-x-6">
        {allCategory.map((item, index) => {
          return (
            <div key={index}>
              <div className=" bg-[#F7F7F8] pt-10 pl-6">
                <h5 className="h5 text-[24px] font-semibold text-gray-800">
                  {item.name}
                </h5>
                <h6 className="text-[#208B18] underline h6 font-semibold mt-2">
                  Shop Now
                </h6>
                <div className="flex justify-end">
                  <Image src={item.image} alt="" width={216} height={216} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
