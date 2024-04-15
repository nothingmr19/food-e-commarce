import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function page() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-[204px] bg-gray-50 border-b">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 text-sm text-gray-600">
            <li>
              <a href="#" className="h6">
                {" "}
                Home
              </a>
            </li>

            <li>
              <MdKeyboardArrowRight className="h-6 w-6" />
            </li>

            <li>
              <a href="#" className="h6">
                {" "}
                My Order
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center mt-2">My Order</h3>
        </nav>
      </div>
      <div className="flex gap-x-6 py-section">
        <div className="overflow-x-auto rounded-lg w-full">
          <table className="min-w-full bg-white text-sm ">
            <thead>
              <tr className="border">
                <th className="h6 text-gray-800 py-[16px] text-left px-4">
                  Name
                </th>
                <th className="h6 text-gray-800 text-left">Price</th>
                <th className="h6 text-gray-800">Order Date</th>
                <th className="h6 text-gray-800">Status</th>
                <th className="h6 text-gray-800">Delivery Date</th>
                <th className="h6 text-gray-800">Tracking</th>
              </tr>
            </thead>

            <tbody className="border">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <div className="flex items-center gap-x-4 py-5">
                    <Image
                      src="/honney.png"
                      alt=""
                      className="rounded-xl object-cover border"
                      width={88}
                      height={88}
                    />

                    <div>
                      <h3 className="price">Natural Honey 250ml Honey</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="h6">Categories: Honey</dt>
                          <dd className="h6">Weight: 250ml</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </td>
                <td className="h6 font-medium text-gray-800">998.00 Tk</td>

                <td className="text-center font-medium ">
                  19 Mar 2024
                  <br />
                  <span className="font-normal text-[#5A585F]">3:45 pm</span>
                </td>
                <td className="h6 font-medium text-center">
                  <Button variant={"ghost"}>Shipping</Button>
                </td>
                <td className="h6 text-gray-800 font-medium text-center">
                  25-29 Mar 2024
                </td>
                <td className="h6  font-medium text-center">
                  <Button>View</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
