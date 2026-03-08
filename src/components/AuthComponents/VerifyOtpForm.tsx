/** @format */

"use client";

import React, { useRef, useState } from "react";
import { Mail } from "lucide-react";
import { AuthBackground } from "./AuthBackground";
import { AuthCard } from "./AuthCard";
import { AuthIcon } from "./AuthIcon";

const OTP_LENGTH = 4;

export function VerifyOtpForm() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    const nextEmpty = pasted.length < OTP_LENGTH ? pasted.length : OTP_LENGTH - 1;
    inputRefs.current[nextEmpty]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification
  };

  return (
    <AuthBackground>
      <AuthCard>
        <AuthIcon icon={<Mail className="w-5 h-5 text-white" />} />

        <h1 className="text-white text-[22px] font-bold text-center mb-1">
          Enter Verification Code
        </h1>
        <p className="text-[#8381a3] text-sm text-center mb-8 leading-relaxed">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Inputs */}
          <div className="flex items-center justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-16 h-16 rounded-xl bg-[#13111c] border border-[#2d2b3d] text-white text-2xl font-semibold text-center focus:outline-none focus:border-[#8425fd] focus:ring-2 focus:ring-[#8425fd]/40 transition-colors caret-transparent"
              />
            ))}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full h-10 rounded-lg bg-[#8425fd] hover:bg-[#7320e0] text-white text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(132,37,253,0.35)]"
          >
            Submit Code
          </button>

          {/* Resend */}
          <div className="text-center space-y-1">
            <p className="text-[#8381a3] text-sm">
              Experiencing issues receiving the code?
            </p>
            <button
              type="button"
              className="cursor-pointer text-[#fc33a2] text-sm hover:text-[#fc33a2]/80 transition-colors underline underline-offset-2"
            >
              Resend code
            </button>
          </div>
        </form>
      </AuthCard>
    </AuthBackground>
  );
}
