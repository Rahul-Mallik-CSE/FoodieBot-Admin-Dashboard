/** @format */

import React from "react";
import { Utensils } from "lucide-react";
import Image from "next/image";

interface AuthBackgroundProps {
  children: React.ReactNode;
}

export function AuthBackground({ children }: AuthBackgroundProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        backgroundColor: "#13111c",
        backgroundImage: `
          linear-gradient(rgba(132, 37, 253, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(132, 37, 253, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-7 flex items-center gap-2 z-10">
        <Image src="/foodiebot-logo.png" alt="Logo" width={122} height={122} />
      </div>

      {/* Centered content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        {children}
      </div>
    </div>
  );
}
