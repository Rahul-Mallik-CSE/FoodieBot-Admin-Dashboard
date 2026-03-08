/** @format */

import React from "react";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[450px] rounded-2xl bg-[#1a1826] border border-[#ac6cfe]/25 p-8",
        "shadow-[0_0_60px_rgba(132,37,253,0.12),0_0_0_1px_rgba(172,108,254,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
