import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className="container ">
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
                Contact us
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center mt-2">Contact us</h3>
        </nav>
      </div>
      <div className="px-[112px] py-[86px]">
        <h4 className="h4">Let&apos;s Connect and Collaborate</h4>
        <p className="h6 mt-2">
          Please feel free to contact us using any of the following methods:
        </p>
        <div className="mt-[40px] flex gap-x-6">
          <div className="max-w-[424px] w-full">
            <div className="flex items-center gap-x-3 bg-gray-100 px-5 py-4 max-w-[424px] w-full rounded-md">
              <div className="bg-[#E0EDDF] p-4 rounded-full">
                <TfiEmail className="text-[#208B18]" size={24} />
              </div>
              <div>
                <h5 className="h5 text-gray-800">Email</h5>
                <p className="price font-normal mt-2">demo@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 bg-gray-100 px-5 py-4 max-w-[424px] w-full mt-6 rounded-md">
              <div className="bg-[#E0EDDF] p-4 rounded-full">
                <MdOutlinePhoneInTalk className="text-[#208B18]" size={24} />
              </div>
              <div>
                <h5 className="h5 text-gray-800">Contact</h5>
                <p className="price font-normal mt-2">+8801712-345678</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6  grid lg:grid-cols-2 gap-x-6 rounded-md *:space-y-1 gap-y-3">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input type="text" id="firstName" placeholder="First name" />
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input type="text" id="lastName" placeholder="Last name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" placeholder="Phone" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="phone">Comment</Label>
              <textarea
                className="bg-gray-50 flex resize-none  outline-none w-full rounded-md border border-gray-300 px-4 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                rows={5}
              />
            </div>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
