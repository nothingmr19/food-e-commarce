import React from "react";
import Image from "next/image";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";

export function Navbar() {
  return (
    <nav className="border-b py-6">
      <div className="container grid grid-cols-4 jubeit">
        <div>
          <Image src="/logo-29.png" alt="logo" width={155} height={44} />
        </div>
        <div className="flex items-center gap-x-5 w-full col-span-2">
          <div className="flex items-center gap-x-2">
            <CiLocationOn className="w-6 h-6" />
            <div className="flex flex-col">
              <span className="text-xs leading-[18px] text-gray-700">
                Delivery to
              </span>
              <span className="font-medium text-gray-800 text-base">
                Location
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border w-full relative overflow-hidden border-gray-200">
            <input
              placeholder="Search for anything..."
              className="outline-none border-none p-4 flex-1"
            />
            <button className="flex items-center gap-x-2 p-4 border-l border-gray-100">
              Search
              <CiSearch className="font-bold size-[18px]" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-4 ml-auto">
          <div className="rounded-full border-gray-400 border p-3 cursor-pointer">
            <LuShoppingCart className="size-6" />
          </div>
          <div className="rounded-full border-gray-400 border p-3 cursor-pointer">
            <FaRegUser className="size-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs leading-[18px] text-gray-700">
              Sign in
            </span>
            <span className="font-semibold text-gray-800 text-base">
              Account
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
