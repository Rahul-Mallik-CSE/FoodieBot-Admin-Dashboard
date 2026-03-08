/** @format */

import React from "react";
import { cn } from "@/lib/utils";

interface AuthIconProps {
  icon: React.ReactNode;
  className?: string;
}

export function AuthIcon({ icon, className }: AuthIconProps) {
  return (
    <div className={cn("flex justify-center mb-5", className)}>
      {/* Outer glow ring */}
      <div className="relative flex items-center justify-center w-[68px] h-[68px]">
        <div className="absolute inset-0 rounded-full bg-[#8425fd]/15 border border-[#8425fd]/30" />
        {/* Inner circle */}
        <div className="relative w-12 h-12 rounded-full bg-[#8425fd] flex items-center justify-center shadow-[0_0_20px_rgba(132,37,253,0.5)]">
          {icon}
        </div>
      </div>
    </div>
  );
}
