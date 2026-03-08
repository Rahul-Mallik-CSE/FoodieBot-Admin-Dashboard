/** @format */
"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, Ban } from "lucide-react";
import { useRouter } from "next/navigation";
import { userDetail, userOrderHistory } from "@/data/AllData";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { UserOrderHistory } from "@/types/AllTypes";

const UserDetails = () => {
  const router = useRouter();

  const infoCards = [
    {
      label: "Email",
      value: userDetail.email,
      iconBg: "bg-blue-500",
    },
    {
      label: "Total Scan",
      value: userDetail.totalScan,
      iconBg: "bg-purple-500",
    },
    {
      label: "AI Use",
      value: userDetail.aiUse,
      iconBg: "bg-green-500",
    },
    {
      label: "Total Order",
      value: userDetail.totalOrder,
      iconBg: "bg-orange-500",
    },
  ];

  const orderColumns = [
    {
      header: "Order ID",
      accessor: "orderId" as keyof UserOrderHistory,
    },
    {
      header: "Restaurant Name",
      accessor: "restaurantName" as keyof UserOrderHistory,
    },
    {
      header: "Restaurant ID",
      accessor: "restaurantId" as keyof UserOrderHistory,
    },
    { header: "Date", accessor: "date" as keyof UserOrderHistory },
    {
      header: "Order Item",
      accessor: "orderItem" as keyof UserOrderHistory,
    },
    {
      header: "Order Amount",
      accessor: "orderAmount" as keyof UserOrderHistory,
    },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Back button + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="cursor-pointer text-white hover:text-custom-pink transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl sm:text-2xl font-semibold text-white">
          User Details
        </h1>
      </div>

      {/* Profile Card */}
      <div className="bg-card rounded-xl p-4 sm:p-6 border border-[#2C2740]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2C2740]">
              <Image
                src={userDetail.avatar}
                alt={userDetail.name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">
                {userDetail.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                User ID: {userDetail.id}
              </p>
            </div>
          </div>
          <button className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm">
            <Ban className="w-4 h-4" />
            Disable Account
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-root-bg rounded-lg p-4 border border-[#2C2740]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center ${card.iconBg}`}
                >
                  <span className="text-white text-xs">
                    {card.label.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {card.label}
                </span>
              </div>
              <p className="text-sm text-white truncate">{card.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Order History */}
      <CustomTable<UserOrderHistory>
        data={userOrderHistory}
        columns={orderColumns}
        title="Order History"
        showSearch={true}
      />
    </div>
  );
};

export default UserDetails;
