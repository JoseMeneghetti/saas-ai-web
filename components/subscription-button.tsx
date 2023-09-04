"use client";
import { Zap } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import api from "@/lib/service/api";
import { getStripe } from "@/lib/service/stripe/stripe-service";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}
const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      variant={isPro ? "default" : "glow"}
      onClick={async () => {
        setIsLoading(true);
        try {
          const data = await getStripe();

          window.location.href = data.url;
        } catch (error) {
          toast.error("Something went wront");
        } finally {
          setIsLoading(false);
        }
      }}
      disabled={isLoading}
    >
      {isPro ? "Manage subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-4" />}
    </Button>
  );
};

export default SubscriptionButton;
