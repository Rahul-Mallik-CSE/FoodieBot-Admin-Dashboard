/** @format */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Info, Mail } from "lucide-react";
import { AuthBackground } from "./AuthBackground";
import { AuthCard } from "./AuthCard";
import { AuthIcon } from "./AuthIcon";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle send code
  };

  return (
    <AuthBackground>
      <AuthCard>
        <AuthIcon icon={<Info className="w-5 h-5 text-white" />} />

        <h1 className="text-white text-[22px] font-bold text-center mb-1">
          Forgot your password?
        </h1>
        <p className="text-[#8381a3] text-sm text-center mb-7 leading-relaxed">
          Enter your email address and we&apos;ll send you a code to reset your
          password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-white text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8381a3]" />
              <input
                type="email"
                placeholder="hello@alignui.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 bg-[#13111c] border border-[#2d2b3d] rounded-lg pl-9 pr-3 text-sm text-white placeholder:text-[#4a4862] focus:outline-none focus:border-[#8425fd] focus:ring-1 focus:ring-[#8425fd]/50 transition-colors"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-10 rounded-lg bg-[#8425fd] hover:bg-[#7320e0] text-white text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(132,37,253,0.35)]"
          >
            Send Code
          </button>

          {/* Cancel */}
          <div className="text-center pt-1">
            <Link
              href="/sign-in"
              className="text-[#fc33a2] text-sm hover:text-[#fc33a2]/80 transition-colors underline underline-offset-2"
            >
              Cancel &amp; Go back
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthBackground>
  );
}
