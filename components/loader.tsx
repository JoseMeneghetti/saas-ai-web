import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="h-12 w-14 relative animate-spin">
        <Image alt="loading" fill src="/logo.png" className="rounded-full"/>
      </div>
      <p className="text-sm text-muted-foreground">
        App is thinking...
      </p>
    </div>
  );
};

export default Loader;
