/** @format */

// Overview types
export interface StatCard {
  title: string;
  value: string;
  icon: string;
  trend: string;
  trendDirection: "up" | "down";
  trendLabel: string;
  iconBg: string;
}

export interface RevenueDataPoint {
  name: string;
  thisWeek: number;
  lastWeek: number;
}

// Users types
export interface User {
  userId: string;
  userName: string;
  email: string;
  joinDate: string;
  totalScan: number;
  aiUse: number;
}

export interface UserDetail {
  id: string;
  name: string;
  avatar: string;
  email: string;
  totalScan: string;
  aiUse: string;
  totalOrder: string;
}

export interface UserOrderHistory {
  orderId: string;
  restaurantName: string;
  restaurantId: string;
  date: string;
  orderItem: number;
  orderAmount: string;
}

// Restaurants types
export interface Restaurant {
  userId: string;
  restaurantName: string;
  ownerEmail: string;
  totalScan: number;
  revenue: string;
  status: string;
}

export interface RestaurantDetail {
  id: string;
  name: string;
  avatar: string;
  totalRevenue: number;
  totalScan: number;
  aiUse: number;
  totalOrder: number;
  menuItem: number;
  totalTable: number;
}

export interface RestaurantOrderHistory {
  orderId: string;
  restaurantName: string;
  restaurantId: string;
  date: string;
  orderItem: number;
  orderAmount: string;
}

// Earnings types
export interface Earning {
  invoiceId: string;
  restaurantName: string;
  restaurantId: string;
  plan: string;
  amount: string;
  payment: string;
}

// Restaurant Menu types
export interface RestaurantMenuItem {
  invoiceId: string;
  restaurantName: string;
  restaurantId: string;
  menuItem: number;
  priceRange: string;
}

export interface MenuCategory {
  name: string;
}

export interface DishItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  ingredients: string;
  calories: string;
  allergenInfo: string;
}

// Order List types
export interface Order {
  orderId: string;
  restaurantName: string;
  restaurantId: string;
  orderItem: number;
  amount: string;
  status: string;
}

export interface OrderDetail {
  invoiceId: string;
  status: string;
  orderId: string;
  date: string;
  customerName: string;
  contactNumber: string;
  restaurantName: string;
  address: string;
  items: OrderItem[];
  tax: string;
  totalBill: string;
}

export interface OrderItem {
  dishName: string;
  quantity: number;
  price: string;
}

// Settings types
export interface AdminProfile {
  name: string;
  email: string;
  avatar: string;
}
