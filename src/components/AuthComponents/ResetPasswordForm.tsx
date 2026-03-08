/** @format */

"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff, AlertCircle, MailCheck } from "lucide-react";
import { AuthBackground } from "./AuthBackground";
import { AuthCard } from "./AuthCard";
import { AuthIcon } from "./AuthIcon";

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Confirm Password must be the same as New Password");
      return;
    }
    setError(null);
    // Handle password reset
  };

  return (
    <AuthBackground>
      <AuthCard>
        <AuthIcon icon={<MailCheck className="w-5 h-5 text-white" />} />

        <h1 className="text-white text-[22px] font-bold text-center mb-1">
          Set a new password
        </h1>
        <p className="text-[#8381a3] text-sm text-center mb-7 leading-relaxed">
          Reset your account password and access your personal account again.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8381a3] hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-white text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8381a3]" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-10 bg-[#13111c] border border-[#2d2b3d] rounded-lg pl-9 pr-10 text-sm text-white placeholder:text-[#4a4862] focus:outline-none focus:border-[#8425fd] focus:ring-1 focus:ring-[#8425fd]/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8381a3] hover:text-white transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-10 rounded-lg bg-[#8425fd] hover:bg-[#7320e0] text-white text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(132,37,253,0.35)]"
          >
            Change Password
          </button>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 text-[#fc33a2] text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </form>
      </AuthCard>
    </AuthBackground>
  );
}
