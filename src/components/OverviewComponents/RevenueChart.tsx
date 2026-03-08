/** @format */
"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { revenueData } from "@/data/AllData";

const RevenueChart = () => {
  const [timeRange, setTimeRange] = useState("This Week");

  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 border border-[#2C2740]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-white">Revenue</h3>
            <div className="flex items-center gap-1 text-green-400">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-medium">+0.74%</span>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white">$1864.18</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-custom-pink" />
              <span className="text-muted-foreground">This week</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground" />
              <span className="text-muted-foreground">Last week</span>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#2C2740] bg-transparent text-sm text-white">
            {timeRange}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="thisWeekGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fc33a2" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#fc33a2" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lastWeekGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8381a3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8381a3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#2C2740"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8381a3", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8381a3", fontSize: 12 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f1d2b",
                border: "1px solid #2C2740",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => [`$${value}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="lastWeek"
              stroke="#8381a3"
              strokeWidth={2}
              fill="url(#lastWeekGrad)"
              dot={{ r: 3, fill: "#8381a3", stroke: "#8381a3" }}
            />
            <Area
              type="monotone"
              dataKey="thisWeek"
              stroke="#fc33a2"
              strokeWidth={2}
              fill="url(#thisWeekGrad)"
              dot={{ r: 3, fill: "#fc33a2", stroke: "#fc33a2" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
