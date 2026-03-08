/** @format */
"use client";
import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Eye, Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface CustomTableProps<T> {
  data: T[];
  columns: {
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    className?: string;
  }[];
  onAction?: (row: T) => void;
  itemsPerPage?: number;
  title?: string;
  actionLabel?: string;
  showSearch?: boolean;
}

const CustomTable = <T extends Record<string, any>>({
  data,
  columns,
  onAction,
  itemsPerPage = 10,
  title,
  actionLabel = "Action",
  showSearch = true,
}: CustomTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(itemsPerPage);

  const filteredAndSortedData = useMemo(() => {
    if (!searchQuery) return [...data];
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [data, searchQuery]);

  const totalPages = Math.ceil(filteredAndSortedData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "preparing":
        return "bg-blue-500/20 text-blue-400";
      case "completed":
        return "bg-green-500/20 text-green-400";
      case "paid":
        return "bg-cyan-500/20 text-cyan-400";
      case "active":
        return "bg-green-500/20 text-green-400";
      case "approved":
        return "bg-emerald-500/20 text-emerald-400";
      case "suspend":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const getPaymentColor = (payment: string) => {
    switch (payment.toLowerCase()) {
      case "stripe":
        return "bg-blue-600/30 text-blue-400";
      case "paypal":
        return "bg-orange-600/30 text-orange-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const renderCell = (row: T, column: (typeof columns)[0]) => {
    if (typeof column.accessor === "function") {
      return column.accessor(row);
    }

    const value = row[column.accessor as keyof T];

    if (column.header === "Status" && typeof value === "string") {
      return (
        <span
          className={cn(
            "px-3 py-1 rounded-md text-xs font-medium",
            getStatusColor(value),
          )}
        >
          {value}
        </span>
      );
    }

    if (column.header === "Payment" && typeof value === "string") {
      return (
        <span
          className={cn(
            "px-3 py-1 rounded-md text-xs font-medium",
            getPaymentColor(value),
          )}
        >
          {value}
        </span>
      );
    }

    return value as React.ReactNode;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full space-y-4">
      {/* Header with title, search, filter, sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {title && (
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            {title}
          </h2>
        )}
        {showSearch && (
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="pl-9 bg-card border-[#2C2740] text-white placeholder:text-muted-foreground h-9 w-full sm:w-56"
              />
            </div>
            <button className="flex items-center gap-1.5 px-3 h-9 rounded-md border border-[#2C2740] bg-card text-sm text-white hover:bg-[#2C2740] transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 h-9 rounded-md border border-[#2C2740] bg-card text-sm text-white hover:bg-[#2C2740] transition-colors">
              <ArrowUpDown className="w-4 h-4" />
              <span className="hidden sm:inline">Sort by</span>
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="border-b border-[#2C2740] hover:bg-transparent">
                {columns.map((column, index) => (
                  <TableHead
                    key={index}
                    className={cn(
                      "font-medium text-muted-foreground text-xs sm:text-sm py-3 whitespace-nowrap",
                      column.className,
                    )}
                  >
                    {column.header}
                  </TableHead>
                ))}
                {onAction && (
                  <TableHead className="font-medium text-muted-foreground text-xs sm:text-sm text-right py-3 whitespace-nowrap">
                    {actionLabel}
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="border-b border-[#2C2740]/50 hover:bg-card/50 transition-colors"
                >
                  {columns.map((column, colIndex) => (
                    <TableCell
                      key={colIndex}
                      className={cn(
                        "text-white py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap",
                        column.className,
                      )}
                    >
                      {renderCell(row, column)}
                    </TableCell>
                  ))}
                  {onAction && (
                    <TableCell className="text-right py-3 sm:py-4">
                      <button
                        onClick={() => onAction(row)}
                        className="p-1.5 hover:bg-[#2C2740] rounded-full transition-colors inline-flex items-center justify-center text-custom-pink"
                      >
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination + entries info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <Pagination className="w-auto mx-0">
          <PaginationContent className="gap-1">
            {getPageNumbers().map((page, index) => (
              <PaginationItem key={index}>
                {page === "..." ? (
                  <PaginationEllipsis className="text-muted-foreground h-8" />
                ) : (
                  <PaginationLink
                    onClick={() => handlePageChange(page as number)}
                    isActive={currentPage === page}
                    className={cn(
                      "cursor-pointer text-xs h-8 w-8 rounded-md border-0",
                      currentPage === page
                        ? "bg-custom-pink text-white hover:bg-custom-pink/80 hover:text-white"
                        : "text-muted-foreground hover:text-white hover:bg-[#2C2740]",
                    )}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredAndSortedData.length)} of{" "}
            {filteredAndSortedData.length} entries
          </span>
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-card border border-[#2C2740] text-white rounded-md px-2 py-1 text-sm"
          >
            <option value={10}>Show 10</option>
            <option value={25}>Show 25</option>
            <option value={50}>Show 50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
