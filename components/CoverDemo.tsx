import React from "react";
import { Cover } from "@/components/ui/Cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-xl md:text-xl lg:text-xl text-wrap font-semibold text-font mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      I'm an enthusiastic professional with a strong foundation in web
development and a keen interest in creating engaging digital
experiences. I bring a unique perspective to building functional
and pleasing <Cover>web solutions</Cover>
      </h1>
    </div>
  );
}
