/** @format */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { restaurantsData } from "@/data/AllData";
import { Restaurant } from "@/types/AllTypes";

const RestaurantList = () => {
  const router = useRouter();

  const columns = [
    { header: "User ID", accessor: "userId" as keyof Restaurant },
    {
      header: "Restaurant Name",
      accessor: "restaurantName" as keyof Restaurant,
    },
    { header: "Owner Email", accessor: "ownerEmail" as keyof Restaurant },
    { header: "Total Scan", accessor: "totalScan" as keyof Restaurant },
    { header: "Revenue", accessor: "revenue" as keyof Restaurant },
    { header: "Status", accessor: "status" as keyof Restaurant },
  ];

  const handleAction = (row: Restaurant) => {
    router.push(`/restaurants/${row.userId.replace("#", "")}`);
  };

  return (
    <CustomTable<Restaurant>
      data={restaurantsData}
      columns={columns}
      onAction={handleAction}
      title="Restaurant Lists"
    />
  );
};

export default RestaurantList;
