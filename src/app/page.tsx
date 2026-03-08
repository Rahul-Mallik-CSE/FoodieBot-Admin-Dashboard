/** @format */

import StatCards from "@/components/OverviewComponents/StatCards";
import RevenueChart from "@/components/OverviewComponents/RevenueChart";

export default function Home() {
  return (
    <div className="w-full p-4 sm:p-6 space-y-6">
      <StatCards />
      <RevenueChart />
    </div>
  );
}
