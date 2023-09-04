"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between items-center">
      <p className="text-sm text-zinc-500">or if you already have an account</p>
      <Button onClick={() => router.push("/sign-in")} className="w-full mt-2">
        Sign-in
      </Button>
    </div>
  );
};

export default LoginButton;
