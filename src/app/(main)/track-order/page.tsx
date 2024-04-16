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
                Track Order
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center mt-2">Track Order</h3>
        </nav>
      </div>

      <div className="grid grid-cols-5 py-8">
        <div className="col-span-2">
          <h6 className="text-2xl font-semibold text-gray-700 mb-8">
            Tracking activity{" "}
          </h6>
          <ol className=" overflow-hidden space-y-8">
            <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-green-600 after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-5">
              <a className="flex items-start font-medium w-full  ">
                <span className="w-8 h-8 bg-green-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  <svg
                    className="w-5 h-5 stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
                      stroke="stroke-current"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-path"
                    />
                  </svg>
                </span>
                <div className="block">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Ordered
                  </h4>
                  <span className="font-medium text-gray-700">
                    19 Mar 2024 <br />
                    <small className="text-gray-600">3:45 pm</small>
                  </span>
                  <p className="font-medium text-gray-700">
                    Ware house, Uttara, Dhaka
                  </p>
                </div>
              </a>
            </li>
            <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-green-600 after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-5">
              <a className="flex items-start font-medium w-full  ">
                <span className="w-8 h-8 bg-green-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  <svg
                    className="w-5 h-5 stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
                      stroke="stroke-current"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-path"
                    />
                  </svg>
                </span>
                <div className="block">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Ready
                  </h4>
                  <span className="font-medium text-gray-700">
                    19 Mar 2024 <br />
                    <small className="text-gray-600">3:45 pm</small>
                  </span>
                  <p className="font-medium text-gray-700">
                    Ware house, Uttara, Dhaka
                  </p>
                </div>
              </a>
            </li>
            <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-green-600 after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-5">
              <a className="flex items-start font-medium w-full  ">
                <span className="w-8 h-8 bg-green-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  <svg
                    className="w-5 h-5 stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
                      stroke="stroke-current"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-path"
                    />
                  </svg>
                </span>
                <div className="block">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Shipping
                  </h4>
                  <span className="font-medium text-gray-700">
                    19 Mar 2024 <br />
                    <small className="text-gray-600">3:45 pm</small>
                  </span>
                  <p className="font-medium text-gray-700">
                    Ware house, Uttara, Dhaka
                  </p>
                </div>
              </a>
            </li>
            <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-300 after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-5">
              <a className="flex items-start font-medium w-full  ">
                <span className="w-8 h-8 bg-green-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="17"
                      cy="18"
                      r="2"
                      stroke="white"
                      stroke-width="2"
                    />
                    <circle
                      cx="7"
                      cy="18"
                      r="2"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 8H8"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 11H6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div className="block">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Destination point
                  </h4>
                  <span className="font-medium text-gray-700">
                    19 Mar 2024 <br />
                    <small className="text-gray-600">3:45 pm</small>
                  </span>
                  <p className="font-medium text-gray-700">
                    Ware house, Uttara, Dhaka
                  </p>
                </div>
              </a>
            </li>
            <li className="relative flex-1">
              <div className="flex items-center gap-x-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    transform="rotate(90 20 20)"
                    fill="white"
                    stroke="#BBBABF"
                    stroke-width="8"
                  />
                </svg>

                <h4 className="text-2xl font-semibold text-gray-800">
                  Delivered
                </h4>
              </div>
            </li>
          </ol>
        </div>
        <div className="col-span-3">
          <h6 className="text-2xl font-semibold text-gray-700 ">
            Order Details{" "}
          </h6>
          <hr className="mt-4 mb-6" />

          <div>
            <div className="flex items-center gap-x-2">
              <span className="text-3xl font-semibold text-gray-800">
                ID: #AH269469
              </span>
              <span className="py-2 px-4 rounded-md bg-[#FEF6EB] text-green-500 font-medium">
                Shipping
              </span>
            </div>
            <div className="mt-4 text-lg max-w-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Order date:</span>
                <span className="text-gray-800 font-medium">
                  3:45pm, 19 Mar 2024
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Delivery date:</span>
                <span className="text-gray-800 font-medium">
                  3:45pm, 19 Mar 2024
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Address:</span>
                <span className="text-gray-800 font-medium">
                  Rangpur sadar, Rangpur
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-lg p-5 mt-6">
            <div className="flex items-center gap-x-4">
              <div className="size-20 rounded-md border p-4 flex items-center justify-center">
                {/* eslint-disable */}
                <img
                  src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-lg font-semibold text-gray-800">
                  Natural Honey 250ml Honey
                </h6>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Categories:</span>
                  <span className="text-gray-800 font-medium">Jacket</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Weight:</span>
                  <span className="text-gray-800 font-medium">250ml</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Qty:</span>
                  <span className="text-gray-800 font-medium">2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <hr className="pb-3" />
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$998.00</span>
              </div>
              <div className="flex justify-between">
                <span>Promo code discount</span>
                <span>-$100.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping fee</span>
                <span>$70.00</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold">
                <span className="text-gray-700">Total</span>
                <span className="text-gray-800">$20.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
