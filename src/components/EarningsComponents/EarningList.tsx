/** @format */
"use client";

import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { earningsData } from "@/data/AllData";
import { Earning } from "@/types/AllTypes";

const EarningList = () => {
  const columns = [
    { header: "Invoice ID", accessor: "invoiceId" as keyof Earning },
    {
      header: "Restaurant Name",
      accessor: "restaurantName" as keyof Earning,
    },
    {
      header: "Restaurant ID",
      accessor: "restaurantId" as keyof Earning,
    },
    { header: "Plan", accessor: "plan" as keyof Earning },
    { header: "Amount", accessor: "amount" as keyof Earning },
    { header: "Payment", accessor: "payment" as keyof Earning },
  ];

  return (
    <CustomTable<Earning>
      data={earningsData}
      columns={columns}
      title="Earning Lists"
    />
  );
};

export default EarningList;
