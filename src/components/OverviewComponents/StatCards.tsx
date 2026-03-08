/** @format */
"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { FaDollarSign } from "react-icons/fa6";
import { IoIosRestaurant } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { PiListPlusFill } from "react-icons/pi";
import { statCards } from "@/data/AllData";

const iconMap: Record<string, React.ReactNode> = {
  dollar: <FaDollarSign className="w-5 h-5 text-white" />,
  restaurant: <IoIosRestaurant className="w-5 h-5 text-white" />,
  user: <LuUsers className="w-5 h-5 text-white" />,
  order: <PiListPlusFill className="w-5 h-5 text-white" />,
};

const iconBgMap: Record<string, string> = {
  dollar: "bg-blue-500",
  restaurant: "bg-purple-500",
  user: "bg-orange-500",
  order: "bg-cyan-500",
};

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((card, index) => (
        <div
          key={index}
          className="bg-card rounded-xl p-4 flex flex-col gap-3 border border-[#2C2740]"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{card.title}</p>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgMap[card.icon]}`}
            >
              {iconMap[card.icon]}
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{card.value}</p>
          <div className="flex items-center gap-1.5">
            {card.trendDirection === "up" ? (
              <TrendingUp className="w-4 h-4 text-green-400" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-400" />
            )}
            <span
              className={`text-xs font-medium ${card.trendDirection === "up" ? "text-green-400" : "text-red-400"}`}
            >
              {card.trend}
            </span>
            <span className="text-xs text-muted-foreground">
              {card.trendLabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
