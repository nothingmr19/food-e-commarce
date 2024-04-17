import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function page() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-[204px] bg-gray-50 border-b">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-1 text-sm ">
            <li className=" ">
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
                Shipping Returns and Refund policy
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center mt-2 text-gray-900">
            Shipping Returns and Refund policy
          </h3>
        </nav>
      </div>
      <div className="mx-auto max-w-4xl py-[96px]">
        <h4 className="text-[24px] font-semibold leading-[28px] text-gray-900">
          Shipping Returns:
        </h4>
        <ul className="h6 text-gray-600 font-normal mt-4">
          <li>
            {" "}
            To return your product, you should mail your product to: physical
            address.
          </li>
          <li className="mt-3">
            {" "}
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you
            receive a refund, the cost of return shipping will be deducted from
            your refund.
          </li>
          <li className="mt-3">
            {" "}
            Depending on where you live, the time it may take for your exchanged
            product to reach you may vary.
          </li>
          <li className="mt-3">
            {" "}
            If you are returning more expensive items, you may consider using a
            trackable shipping service or purchasing shipping insurance. We
            don’t guarantee that we will receive your returned item.
          </li>
        </ul>
        <div className="mt-[40px]">
          <h4 className="text-[24px] font-semibold leading-[28px] text-gray-900">
            Refunds:
          </h4>
          <ul className="h6 text-gray-600 font-normal mt-4">
            <li>
              {" "}
              Once your return is received and inspected, we will send you an
              email to notify you that we have received your returned item. We
              will also notify you of the approval or rejection of your refund.
            </li>
            <li className="mt-3">
              {" "}
              If you are approved, then your refund will be processed, and a
              credit will automatically be applied to your credit card or
              original method of payment, within a certain amount of days.
            </li>
            <li className="mt-3"> Late or missing refunds</li>
            <li className="mt-3">
              {" "}
              If you haven’t received a refund yet, first check your bank
              account again.
            </li>
            <li className="mt-3">
              {" "}
              Then contact your credit card company, it may take some time
              before your refund is officially posted.
            </li>
            <li className="mt-3">
              {" "}
              Next contact your bank. There is often some processing time before
              a refund is posted.
            </li>
            <li className="mt-3">
              {" "}
              If you’ve done all of this and you still have not received your
              refund yet, please contact us at email address.
            </li>
            <li className="mt-3"> Sale items</li>
            <li className="mt-3">
              Only regular priced items may be refunded. Sale items cannot be
              refunded.
            </li>
          </ul>
        </div>
        <div className="mt-[40px]">
          <h4 className="text-[24px] font-semibold leading-[28px] text-gray-900">
            Need help?
          </h4>
          <ul className="h6 text-gray-600 font-normal mt-4">
            <li>
              {" "}
              Contact us at for questions related to refunds and returns.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
