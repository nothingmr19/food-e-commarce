import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function page() {
  return (
    <div className="container">
      {" "}
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
                About us
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center mt-2">About us</h3>
        </nav>
      </div>
      <div className="mx-auto max-w-4xl py-[96px]">
        <div className="">
          <h4 className="text-[24px] font-semibold leading-[28px] text-gray-900">
            Need help?
          </h4>
          <h6 className="h6 pt-4 font-normal">
            Welcome to [Food Company Name], where culinary excellence meets
            passion for quality ingredients and innovative recipes. Established
            with a vision to redefine the way people experience food, we pride
            ourselves on our commitment to delivering exceptional taste,
            freshness, and nutritional value in every bite.
          </h6>
        </div>
        <div className="mt-16">
          <h4 className="text-[24px] font-semibold leading-[28px] text-gray-900">
            Our Story:
          </h4>
          <h6 className="h6 pt-4 font-normal pb-[40px]">
            [Food Company Name] was founded with a simple yet powerful idea: to
            create food products that inspire and delight. Our journey began in
            [Year of Establishment], when our founder, [Founder&apos;s Name],
            envisioned a company that would offer a diverse range of
            high-quality food products to satisfy the discerning tastes of
            consumers worldwide. With a background in [relevant industry
            experience or expertise], [Founder&apos;s Name] assembled a team of
            passionate food enthusiasts dedicated to bringing this vision to
            life.
          </h6>
          <Image src="/about.png" alt="" width={896} height={374} />
          <h6 className="h6 pt-4 font-normal">
            [Food Company Name] was founded with a simple yet powerful idea: to
            create food products that inspire and delight. Our journey began in
            [Year of Establishment], when our founder, [Founder&apos;s Name],
            envisioned a company that would offer a diverse range of
            high-quality food products to satisfy the discerning tastes of
            consumers worldwide. With a background in [relevant industry
            experience or expertise], [Founder&apos;s Name] assembled a team of
            passionate food enthusiasts dedicated to bringing this vision to
            life.
          </h6>
        </div>
        <div className="mt-16">
          <h4 className="text-[24px] font-semibold leading-[28px] text-gray-900">
            Our Mission:
          </h4>
          <h6 className="h6 pt-4 font-normal">
            At [Food Company Name], our mission is to enrich lives through
            exceptional food experiences. We strive to achieve this by:
          </h6>
          <ol className="list-decimal ml-6 text-gray-600 mt-5 h6 font-normal">
            <li>
              Crafting Quality Products: We meticulously select the finest
              ingredients and adhere to rigorous quality standards to ensure
              that every product bearing our name meets or exceeds our customers
              expectations.
            </li>
            <li>
              Innovating with Flavors: We continuously push the boundaries of
              culinary innovation, exploring new flavor profiles, and culinary
              techniques to create products that surprise and delight the
              senses.
            </li>
            <li>
              Promoting Healthy Eating: We are committed to promoting health and
              wellness through our products by offering nutritious options made
              with wholesome ingredients and mindful preparation methods.
            </li>
            <li>
              Sustainability and Responsibility: We believe in conducting our
              business in an environmentally and socially responsible manner.
              From sourcing sustainable ingredients to reducing our carbon
              footprint, we are dedicated to making a positive impact on the
              planet and our communities.
            </li>
          </ol>
        </div>
        <div className="mt-16">
          <h4 className="text-[24px] font-semibold leading-[28px] text-gray-900">
            Our visson:
          </h4>
          <h6 className="h6 pt-4 font-normal">
            At [Food Company Name], our mission is to enrich lives through
            exceptional food experiences. We strive to achieve this by:
          </h6>
          <ol className="list-decimal ml-6 text-gray-600 mt-5 h6 font-normal">
            <li>
              Crafting Quality Products: We meticulously select the finest
              ingredients and adhere to rigorous quality standards to ensure
              that every product bearing our name meets or exceeds our customers
              expectations.
            </li>
            <li>
              Innovating with Flavors: We continuously push the boundaries of
              culinary innovation, exploring new flavor profiles, and culinary
              techniques to create products that surprise and delight the
              senses.
            </li>
            <li>
              Promoting Healthy Eating: We are committed to promoting health and
              wellness through our products by offering nutritious options made
              with wholesome ingredients and mindful preparation methods.
            </li>
            <li>
              Sustainability and Responsibility: We believe in conducting our
              business in an environmentally and socially responsible manner.
              From sourcing sustainable ingredients to reducing our carbon
              footprint, we are dedicated to making a positive impact on the
              planet and our communities.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
