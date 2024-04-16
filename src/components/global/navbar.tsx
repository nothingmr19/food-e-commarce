import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b py-6">
      <div className="container grid grid-cols-4 jubeit">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={155} height={44} />
        </Link>
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
            <button className="flex items-center gap-x-2 p-4 border-l border-gray-100 text-gray-700 font-medium outline-none">
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M13.125 13.125L16.5 16.5"
                  stroke="#414045"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 8.25C15 4.52208 11.9779 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15C11.9779 15 15 11.9779 15 8.25Z"
                  stroke="#414045"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-4 ml-auto">
          <div className="rounded-full border-gray-400 border p-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M7 15H14.2632C18.7508 15 19.4333 12.1808 20.261 8.06908C20.4998 6.88311 20.6192 6.29013 20.3321 5.89507C20.045 5.5 19.4947 5.5 18.3941 5.5H5"
                stroke="#414045"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7 15L4.37873 2.51493C4.15615 1.62459 3.35618 1 2.43845 1H1.5"
                stroke="#414045"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7.88 15H7.46857C6.10522 15 5 16.1513 5 17.5714C5 17.8081 5.1842 18 5.41143 18H16.5"
                stroke="#414045"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="9.5"
                cy="19.5"
                r="1.5"
                stroke="#414045"
                stroke-width="1.5"
              />
              <circle
                cx="16.5"
                cy="19.5"
                r="1.5"
                stroke="#414045"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="rounded-full border-gray-400 border p-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
            >
              <path
                d="M1 21H19C19 16.5817 14.9706 13 10 13C5.02944 13 1 16.5817 1 21Z"
                stroke="#414045"
                stroke-width="1.5"
              />
              <path
                d="M14.5 5.5C14.5 7.98528 12.4853 10 10 10C7.51472 10 5.5 7.98528 5.5 5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5Z"
                stroke="#414045"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <Link
              href="/sign-in"
              className="text-xs leading-[18px] text-gray-700"
            >
              Sign in
            </Link>
            <span className="font-semibold text-gray-800 text-base">
              Account
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
