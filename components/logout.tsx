"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/service/auth/auth-service";

const Logout = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        logout().then(() => router.push("/"));
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;
