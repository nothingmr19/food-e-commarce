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
    </div>
  );
}
