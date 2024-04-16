import Image from "next/image";
import React from "react";

export function CtaBannerPage() {
  return (
    <div className="container">
      <div className="flex py-section gap-x-6">
        <Image src="/left-image.png" alt="" height={365} width={648} />
        <Image src="/right-image.png" alt="" height={365} width={648} />
      </div>
    </div>
  );
}
