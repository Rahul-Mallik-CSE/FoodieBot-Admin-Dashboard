/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/CommonComponents/DashboardSidebar";
import NavBar from "@/components/CommonComponents/NabBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoodieBot Admin Dashboard",
  description: "FoodieBot Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <DashboardSidebar />
          <SidebarInset className="overflow-x-hidden">
            <div className={` bg-root-bg min-h-screen `}>
              <NavBar />
              <div className="w-full">
                {/* Container for page content */}
                <div className="max-w-625 mx-auto">{children}</div>
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
