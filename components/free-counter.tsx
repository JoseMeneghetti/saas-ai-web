"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

const FreeCounter = ({ apiLimitCount, isPro }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);

  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isPro) {
    return null;
  }
  
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {5} Free Generations
            </p>
            <Progress className="h-3 " value={(apiLimitCount / 5) * 100} />
          </div>
          <Button className="w-full" variant="glow" onClick={proModal.onOpen}>
            Upgrade <Zap className="w-4 h-4 m-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
