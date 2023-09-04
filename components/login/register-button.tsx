"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const RegisterButton = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between items-center">
      <p className="text-sm text-zinc-500">or create a new account</p>
      <Button onClick={() => router.push("/sign-up")} className="w-full mt-2">
        Register
      </Button>
    </div>
  );
};

export default RegisterButton;
