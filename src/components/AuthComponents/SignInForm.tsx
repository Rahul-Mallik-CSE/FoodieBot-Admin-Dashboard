/** @format */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { AuthBackground } from "./AuthBackground";
import { AuthCard } from "./AuthCard";
import { AuthIcon } from "./AuthIcon";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in
  };

  return (
    <AuthBackground>
      <AuthCard>
        <AuthIcon icon={<User className="w-5 h-5 text-white" />} />

        <h1 className="text-white text-[22px] font-bold text-center mb-1">
          Login to your account
        </h1>
        <p className="text-[#8381a3] text-sm text-center mb-7">
          Enter your details to login.
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

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-white text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8381a3]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 bg-[#13111c] border border-[#2d2b3d] rounded-lg pl-9 pr-10 text-sm text-white placeholder:text-[#4a4862] focus:outline-none focus:border-[#8425fd] focus:ring-1 focus:ring-[#8425fd]/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-[#8381a3] hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Keep logged in + Forgot password */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setKeepLoggedIn(!keepLoggedIn)}
                className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors cursor-pointer ${
                  keepLoggedIn
                    ? "bg-[#8425fd] border-[#8425fd]"
                    : "border-[#2d2b3d] bg-[#13111c]"
                }`}
              >
                {keepLoggedIn && (
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    viewBox="0 0 10 8"
                    fill="none"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[#8381a3] text-sm">Keep me logged in</span>
            </label>
            <Link
              href="/forgot-pass"
              className="text-[#fc33a2] text-sm hover:text-[#fc33a2]/80 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full h-10 mt-2 rounded-lg bg-[#8425fd] hover:bg-[#7320e0] text-white text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(132,37,253,0.35)]"
          >
            Login
          </button>
        </form>
      </AuthCard>
    </AuthBackground>
  );
}
