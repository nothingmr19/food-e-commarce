import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
export function RightAcco() {
  return (
    <div className="relative w-full ">
      <div className="mx-auto px-5">
        <div className="mx-auto mt-8 grid max-w-4xl divide-y divide-neutral-200">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <div className="flex items-center gap-x-2">
                  <CiLocationOn className="size-6" />
                  <span className="price"> Delivery</span>
                </div>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600 h6">
                To get accurate Delivery information{" "}
                <span className="text-[#208B18] underline text-base font-normal cursor-pointer">
                  Edit Locatinon
                </span>
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <div className="flex items-center gap-x-2">
                  <LiaShippingFastSolid className="size-6" />
                  <span className="price"> Shipping Charge</span>
                </div>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600 h6">
                To get accurate Delivery information{" "}
                <span className="text-[#208B18] underline text-base font-normal cursor-pointer">
                  Edit Locatinon
                </span>
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/delivery-return.png"
                    alt="credit card"
                    height={24}
                    width={24}
                  />
                  <span className="price"> Returns</span>
                </div>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600 h6">
                To get accurate Delivery information{" "}
                <span className="text-[#208B18] underline text-base font-normal cursor-pointer">
                  Edit Locatinon
                </span>
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/credit-card.png"
                    alt="credit card"
                    height={24}
                    width={24}
                  />
                  <span className="price"> Payments</span>
                </div>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600 h6">
                To get accurate Delivery information{" "}
                <span className="text-[#208B18] underline text-base font-normal cursor-pointer">
                  Edit Locatinon
                </span>
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
