/** @format */
"use client";

import React, { useState } from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { ordersData, orderDetail } from "@/data/AllData";
import { Order } from "@/types/AllTypes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowLeft, Printer } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderList = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const columns = [
    { header: "Order ID", accessor: "orderId" as keyof Order },
    {
      header: "Restaurant Name",
      accessor: "restaurantName" as keyof Order,
    },
    {
      header: "Restaurant ID",
      accessor: "restaurantId" as keyof Order,
    },
    { header: "Order Item", accessor: "orderItem" as keyof Order },
    { header: "Amount", accessor: "amount" as keyof Order },
    { header: "Status", accessor: "status" as keyof Order },
  ];

  const handleAction = () => {
    setSheetOpen(true);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-cyan-500/20 text-cyan-400";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "preparing":
        return "bg-blue-500/20 text-blue-400";
      case "completed":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <>
      <CustomTable<Order>
        data={ordersData}
        columns={columns}
        onAction={handleAction}
        title="Order Lists"
        actionLabel="View Menu"
      />

      {/* Order Detail Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="bg-root-bg border-l border-[#2C2740] w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSheetOpen(false)}
                className="cursor-pointer text-white hover:text-custom-pink transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <SheetTitle className="text-white text-xl font-semibold">
              Order details
            </SheetTitle>
            <p className="text-sm text-muted-foreground">
              View and monitor order activity, status, and related details in
              one place.
            </p>
          </SheetHeader>

          <div className="mt-6 space-y-6 px-1">
            {/* Invoice Header */}
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Invoice {orderDetail.invoiceId}
              </h3>
              <span
                className={`inline-block px-3 py-1 rounded-md text-xs font-medium ${getStatusBadgeColor(orderDetail.status)}`}
              >
                {orderDetail.status}
              </span>
            </div>

            {/* Order Info */}
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">Order ID: </span>
                <span className="text-white">{orderDetail.orderId}</span>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground">Date: </span>
                <span className="text-white">{orderDetail.date}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Customer Name: </span>
                <span className="text-white">{orderDetail.customerName}</span>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground">Contact Number: </span>
                <span className="text-white">{orderDetail.contactNumber}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Restaurant Name: </span>
                <span className="text-white">{orderDetail.restaurantName}</span>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground">Address: </span>
                <span className="text-white">{orderDetail.address}</span>
              </div>
            </div>

            {/* Items Table */}
            <div className="rounded-lg border border-[#2C2740] overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[#2C2740] hover:bg-transparent">
                    <TableHead className="text-muted-foreground text-xs">
                      Dish Name
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs text-center">
                      Quantity
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs text-right">
                      Price
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderDetail.items.map((item, index) => (
                    <TableRow
                      key={index}
                      className="border-b border-[#2C2740]/50 hover:bg-card/50"
                    >
                      <TableCell className="text-white text-sm">
                        {item.dishName}
                      </TableCell>
                      <TableCell className="text-white text-sm text-center">
                        {item.quantity}
                      </TableCell>
                      <TableCell className="text-white text-sm text-right">
                        {item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="border-b border-[#2C2740]/50 hover:bg-card/50">
                    <TableCell className="text-white text-sm">Tax</TableCell>
                    <TableCell />
                    <TableCell className="text-white text-sm text-right">
                      {orderDetail.tax}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Bill</span>
              <span className="text-lg font-bold text-white">
                {orderDetail.totalBill}
              </span>
            </div>

            {/* Print Button */}
            <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-custom-pink text-white text-sm font-medium hover:bg-custom-pink/80 transition-colors">
              <Printer className="w-4 h-4" />
              Print Invoice
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default OrderList;
