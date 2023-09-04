"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="relative w-28 h-24 cursor-pointer">
      <Image
        fill
        src={"/logo.png"}
        alt="logo"
        className="rounded-full shadow-2xl"
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Logo;
