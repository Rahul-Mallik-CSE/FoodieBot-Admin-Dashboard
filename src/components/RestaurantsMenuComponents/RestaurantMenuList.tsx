/** @format */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { restaurantMenuData } from "@/data/AllData";
import { RestaurantMenuItem } from "@/types/AllTypes";

const RestaurantMenuList = () => {
  const router = useRouter();

  const columns = [
    {
      header: "Invoice ID",
      accessor: "invoiceId" as keyof RestaurantMenuItem,
    },
    {
      header: "Restaurant Name",
      accessor: "restaurantName" as keyof RestaurantMenuItem,
    },
    {
      header: "Restaurant ID",
      accessor: "restaurantId" as keyof RestaurantMenuItem,
    },
    {
      header: "Menu Item",
      accessor: "menuItem" as keyof RestaurantMenuItem,
    },
    {
      header: "Price Range",
      accessor: "priceRange" as keyof RestaurantMenuItem,
    },
  ];

  const handleAction = (row: RestaurantMenuItem) => {
    router.push(`/restaurants-menu/${row.restaurantId.replace("#", "")}`);
  };

  return (
    <CustomTable<RestaurantMenuItem>
      data={restaurantMenuData}
      columns={columns}
      onAction={handleAction}
      title="Restaurant Menu Lists"
      actionLabel="View Menu"
    />
  );
};

export default RestaurantMenuList;
