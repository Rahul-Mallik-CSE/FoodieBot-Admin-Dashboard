/** @format */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Pencil, ChevronRight, Eye, EyeOff, AlertTriangle } from "lucide-react";
import { adminProfile } from "@/data/AllData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const SettingsContent = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [fullName, setFullName] = useState(adminProfile.name);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSaveProfile = () => {
    setEditModalOpen(false);
  };

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Confirm Password must be the same as New Password");
      return;
    }
    setPasswordError("");
    setPasswordModalOpen(false);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-semibold text-white">
          Settings
        </h1>
        <button
          onClick={() => setEditModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-button text-white text-sm font-medium hover:bg-button/80 transition-colors"
        >
          <Pencil className="w-4 h-4" />
          Edit
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-card rounded-xl p-4 sm:p-6 border border-[#2C2740] flex flex-col sm:flex-row gap-6">
        {/* Avatar Section */}
        <div className="flex flex-col items-center gap-2 min-w-[100px]">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2C2740]">
            <Image
              src={adminProfile.avatar}
              alt={adminProfile.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-sm text-white font-medium">
            {adminProfile.name.split(" ")[0]}
          </span>
        </div>

        {/* Info Fields */}
        <div className="flex-1 space-y-3">
          <div className="bg-root-bg rounded-lg px-4 py-3 border border-[#2C2740]">
            <span className="text-sm text-muted-foreground">
              {adminProfile.name}
            </span>
          </div>
          <div className="bg-root-bg rounded-lg px-4 py-3 border border-[#2C2740]">
            <span className="text-sm text-muted-foreground">
              {adminProfile.email}
            </span>
          </div>
          <button
            onClick={() => setPasswordModalOpen(true)}
            className="w-full bg-root-bg rounded-lg px-4 py-3 border border-[#2C2740] flex items-center justify-between hover:bg-[#2C2740]/50 transition-colors"
          >
            <span className="text-sm text-muted-foreground">
              Change password
            </span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="bg-root-bg border border-[#2C2740] max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold text-center">
              Edit Account Info
            </DialogTitle>
            <p className="text-sm text-muted-foreground text-center">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </p>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Avatar with edit overlay */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#2C2740]">
                  <Image
                    src={adminProfile.avatar}
                    alt="Profile"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-button flex items-center justify-center border-2 border-root-bg">
                  <Pencil className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm text-white">Full name</label>
              <div className="relative">
                <Pencil className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Kamrul Hossain"
                  className="pl-9 bg-card border-[#2C2740] text-white placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSaveProfile}
              className="w-full py-3 rounded-lg bg-button text-white text-sm font-medium hover:bg-button/80 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Change Password Modal */}
      <Dialog open={passwordModalOpen} onOpenChange={setPasswordModalOpen}>
        <DialogContent className="bg-root-bg border border-[#2C2740] max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-button/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-button flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
            <DialogTitle className="text-white text-xl font-bold text-center">
              Set a new password
            </DialogTitle>
            <p className="text-sm text-muted-foreground text-center">
              Reset your account password and access your personal account
              again.
            </p>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm text-white">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pr-10 bg-card border-[#2C2740] text-white placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
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
            <div className="space-y-2">
              <label className="text-sm text-white">Confirm Password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pr-10 bg-card border-[#2C2740] text-white placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Change Password Button */}
            <button
              onClick={handleChangePassword}
              className="w-full py-3 rounded-lg bg-button text-white text-sm font-medium hover:bg-button/80 transition-colors"
            >
              Change Password
            </button>

            {/* Error Message */}
            {passwordError && (
              <div className="flex items-center gap-2 text-yellow-400 text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>{passwordError}</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SettingsContent;
