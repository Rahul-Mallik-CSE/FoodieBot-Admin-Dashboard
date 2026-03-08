/** @format */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { usersData } from "@/data/AllData";
import { User } from "@/types/AllTypes";

const UserList = () => {
  const router = useRouter();

  const columns = [
    { header: "User ID", accessor: "userId" as keyof User },
    { header: "User Name", accessor: "userName" as keyof User },
    { header: "Email", accessor: "email" as keyof User },
    { header: "Join Date", accessor: "joinDate" as keyof User },
    { header: "Total Scan", accessor: "totalScan" as keyof User },
    { header: "AI Use", accessor: "aiUse" as keyof User },
  ];

  const handleAction = (row: User) => {
    router.push(`/users/${row.userId.replace("#", "")}`);
  };

  return (
    <CustomTable<User>
      data={usersData}
      columns={columns}
      onAction={handleAction}
      title="User List"
    />
  );
};

export default UserList;
