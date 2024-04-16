"use client";

import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { PiMinus, PiMinusThin } from "react-icons/pi";
import { RightAcco } from "./right-acco";

export function ProductDetails() {
  const [quantity, setQuantity] = useState<number>(1);
  const quantities = ["250ml", "500ml", "1kg", "5kg"];

  return (
    <div>
      <div className="space-y-4">
        <span className="py-1 px-2 rounded-3xl bg-[#FAFAFA] text-[#f89d26] text-sm font-medium">
          In Stock
        </span>
        <h2 className="font-semibold text-4xl">Natural Honey 250ml Honey</h2>
        <div className="flex items-center gap-x-2">
          <span className="font-medium text-[#414045]">5.00</span>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.52733 1.99875C9.56583 1.90034 9.63139 1.81616 9.71567 1.7569C9.79995 1.69765 9.89914 1.66602 10.0006 1.66602C10.1021 1.66602 10.2013 1.69765 10.2856 1.7569C10.3699 1.81616 10.4354 1.90034 10.4739 1.99875L12.4081 6.87403C12.4443 6.96526 12.5038 7.04425 12.5801 7.10231C12.6563 7.16037 12.7464 7.19526 12.8404 7.20312L17.8628 7.62474C18.317 7.66289 18.5008 8.25716 18.1549 8.56717L14.3285 12.0031C14.2571 12.0671 14.2038 12.1506 14.1746 12.2443C14.1453 12.3381 14.1413 12.4384 14.1629 12.5344L15.3325 17.671C15.356 17.7741 15.3498 17.8821 15.3148 17.9815C15.2797 18.0809 15.2173 18.1672 15.1355 18.2294C15.0537 18.2917 14.9561 18.3271 14.8551 18.3313C14.7541 18.3355 14.6542 18.3082 14.5679 18.2529L10.2673 15.5009C10.187 15.4496 10.0947 15.4225 10.0006 15.4225C9.90655 15.4225 9.81428 15.4496 9.73394 15.5009L5.43333 18.2538C5.3471 18.3091 5.24716 18.3364 5.14613 18.3323C5.04511 18.3281 4.94752 18.2926 4.86571 18.2304C4.78391 18.1681 4.72154 18.0818 4.68649 17.9825C4.65143 17.8831 4.64527 17.775 4.66878 17.672L5.83836 12.5344C5.86006 12.4384 5.85607 12.338 5.82684 12.2443C5.79762 12.1505 5.74428 12.0671 5.67271 12.0031L1.84631 8.56717C1.76968 8.49812 1.71425 8.40687 1.68698 8.30489C1.65971 8.20291 1.66182 8.09476 1.69305 7.99403C1.72427 7.8933 1.78322 7.8045 1.86248 7.73879C1.94173 7.67309 2.03776 7.6334 2.13847 7.62474L7.16086 7.20312C7.25483 7.19526 7.34492 7.16037 7.4212 7.10231C7.49747 7.04425 7.55699 6.96526 7.59319 6.87403L9.52733 1.99875Z"
                  fill="#FFBF0F"
                />
              </svg>
            ))}
          </div>
        </div>
        <div>
          <span className="text-black font-bold text-2xl">499.00 TK</span>
          <span className="text-[#87858E] line-through ml-2 italic">
            599.00 TK
          </span>
          <span className="text-sm text-[#02C406] font-medium block">
            Save 30%
          </span>
        </div>
        <div className="text-[#414045]">
          Categories:{" "}
          <span className="font-medium text-[#28272A]">Fresh Fruit</span>
        </div>
      </div>
      <div className="border-t mt-6 pt-6">
        <div className="flex items-center gap-x-3">
          <span className="font-medium text-[#414045]">Weight:</span>
          <div className="inline-flex items-center gap-x-2 ">
            {quantities.map((_, index) => {
              return (
                <button
                  key={index}
                  className="py-2 px-4 rounded-lg border border-[#BBBABF] font-medium text-[#28272A]"
                >
                  {_}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-y-2 mt-6">
          <span className="font-medium text-[#414045]">Quantity:</span>
          <div className="w-fit flex items-center rounded-lg border border-[#BBBABF] font-medium text-[#BBBABF]">
            <button
              disabled={quantity === 1}
              className="px-3 py-2"
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              <PiMinus />
            </button>
            <span className="text-[#28272A] px-2 py-2">{quantity}</span>
            <button
              className="px-3 py-2"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <BiPlus />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between *:w-full font-semibold mt-7 gap-x-6">
          <button className="px-4 py-3 rounded-xl border border-[#D5D5D8] text-[#5A585F]">
            Add to Cart
          </button>
          <button className="px-4 py-3 rounded-xl bg-[#208B18] text-white">
            Buy now
          </button>
        </div>
      </div>
      <div>
        <RightAcco />
      </div>
    </div>
  );
}
