"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const images = [
  {
    src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    alt: "Honey Jar",
  },
  {
    src: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    alt: "Honey Jar 1",
  },
  {
    src: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    alt: "Honey Jar 2",
  },
  {
    src: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    alt: "Honey Jar 3",
  },
];

// TODO: Replace the img into Next.js image
export function ProductSlider() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="relative border rounded-xl border-[#D5D5D8] p-5 pb-8 h-[520px] w-full">
        {/* eslint-disable-next-line */}
        <img
          src={images[selectedImageIndex].src}
          alt={images[selectedImageIndex].alt}
          className="h-full w-full object-contain"
        />
        <div className="absolute flex items-center justify-center gap-x-2 w-full mt-3 inset-x-0">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={cn(
                "size-3 rounded-full",
                index === selectedImageIndex ? "bg-[#F89D26]" : "bg-[#D5D5D8]"
              )}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full overflow-hidden gap-x-6 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="size-[144px] flex items-center justify-center p-3 border rounded-xl border-[#D5D5D8]"
          >
            {/* eslint-disable-next-line */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
