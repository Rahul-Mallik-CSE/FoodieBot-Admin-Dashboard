/** @format */

import {
  User,
  UserDetail,
  UserOrderHistory,
  Restaurant,
  RestaurantDetail,
  RestaurantOrderHistory,
  Earning,
  RestaurantMenuItem,
  MenuCategory,
  DishItem,
  Order,
  OrderDetail,
  RevenueDataPoint,
  StatCard,
  AdminProfile,
} from "@/types/AllTypes";

// ── Overview Data ──

export const statCards: StatCard[] = [
  {
    title: "Total Revenue",
    value: "$1864.18",
    icon: "dollar",
    trend: "1.3%",
    trendDirection: "up",
    trendLabel: "Up from past week",
    iconBg: "bg-blue-500",
  },
  {
    title: "Total Restaurant",
    value: "293",
    icon: "restaurant",
    trend: "4.3%",
    trendDirection: "down",
    trendLabel: "Down from yesterday",
    iconBg: "bg-purple-500",
  },
  {
    title: "Total User",
    value: "10293",
    icon: "user",
    trend: "4.3%",
    trendDirection: "down",
    trendLabel: "Down from yesterday",
    iconBg: "bg-orange-500",
  },
  {
    title: "Order Generated",
    value: "10293",
    icon: "order",
    trend: "1.3%",
    trendDirection: "up",
    trendLabel: "Up from past week",
    iconBg: "bg-cyan-500",
  },
];

export const revenueData: RevenueDataPoint[] = [
  { name: "Mon", thisWeek: 1200, lastWeek: 800 },
  { name: "Tue", thisWeek: 1800, lastWeek: 1200 },
  { name: "Wed", thisWeek: 2200, lastWeek: 1600 },
  { name: "Thu", thisWeek: 1500, lastWeek: 2800 },
  { name: "Fri", thisWeek: 2800, lastWeek: 1200 },
  { name: "Sat", thisWeek: 3600, lastWeek: 1800 },
  { name: "Sun", thisWeek: 2400, lastWeek: 1400 },
  { name: "Mon", thisWeek: 2800, lastWeek: 1000 },
  { name: "Tue", thisWeek: 2600, lastWeek: 800 },
  { name: "Wed", thisWeek: 2200, lastWeek: 1000 },
];

// ── Users Data ──

const generateUsers = (): User[] => {
  return Array.from({ length: 50 }, (_, i) => ({
    userId: "#CH 565",
    userName: "Rahim Hossain",
    email: "name@gmail.com",
    joinDate: "26 Jan 2026",
    totalScan: 25,
    aiUse: 25,
  }));
};

export const usersData: User[] = generateUsers();

export const userDetail: UserDetail = {
  id: "#CN 256",
  name: "Malik Ahmed",
  avatar: "/food.png",
  email: "name0202@gmail.com",
  totalScan: "25",
  aiUse: "18",
  totalOrder: "42",
};

export const userOrderHistory: UserOrderHistory[] = Array.from(
  { length: 20 },
  () => ({
    orderId: "#CH 565",
    restaurantName: "Red Seafood Resort",
    restaurantId: "#CH 565",
    date: "26 Jan 2026",
    orderItem: 25,
    orderAmount: "$255.25",
  }),
);

// ── Restaurants Data ──

const generateRestaurants = (): Restaurant[] => {
  const statuses = ["Suspend", "Active", "Approved"];
  return Array.from({ length: 50 }, (_, i) => ({
    userId: "#CH 565",
    restaurantName: "Red Seafood Resort",
    ownerEmail: "name@gmail.com",
    totalScan: 25,
    revenue: "$256.26",
    status: statuses[i % 3],
  }));
};

export const restaurantsData: Restaurant[] = generateRestaurants();

export const restaurantDetail: RestaurantDetail = {
  id: "#CN 256",
  name: "Malik Ahmed",
  avatar: "/food.png",
  totalRevenue: 125,
  totalScan: 125,
  aiUse: 125,
  totalOrder: 125,
  menuItem: 125,
  totalTable: 125,
};

export const restaurantOrderHistory: RestaurantOrderHistory[] = Array.from(
  { length: 20 },
  () => ({
    orderId: "#CH 565",
    restaurantName: "Red Seafood Resort",
    restaurantId: "#CH 565",
    date: "26 Jan 2026",
    orderItem: 25,
    orderAmount: "$255.25",
  }),
);

// ── Earnings Data ──

const generateEarnings = (): Earning[] => {
  const payments = ["Stripe", "PayPal"];
  return Array.from({ length: 50 }, (_, i) => ({
    invoiceId: "#CH 565",
    restaurantName: "Red Seafood Resort",
    restaurantId: "name@gmail.com",
    plan: "Starter",
    amount: "$256.26",
    payment: payments[i % 2],
  }));
};

export const earningsData: Earning[] = generateEarnings();

// ── Restaurant Menu Data ──

const generateRestaurantMenuItems = (): RestaurantMenuItem[] => {
  const priceRanges = ["Mid-range", "Budget"];
  return Array.from({ length: 50 }, (_, i) => ({
    invoiceId: "#CH 565",
    restaurantName: "Red Seafood Resort",
    restaurantId: "#CH 565",
    menuItem: 256,
    priceRange: priceRanges[i % 2],
  }));
};

export const restaurantMenuData: RestaurantMenuItem[] =
  generateRestaurantMenuItems();

export const menuCategories: MenuCategory[] = [
  { name: "Appetizers" },
  { name: "Soups & Salads" },
  { name: "Main Courses" },
  { name: "Desserts" },
  { name: "Signature Dishes" },
  { name: "Beverages" },
  { name: "Sides" },
];

export const dishItems: DishItem[] = [
  {
    id: "1",
    name: "Salad with lettuce",
    price: "$8.99",
    image: "/food.png",
    category: "Appetizers",
    description:
      "A refreshing blend of crisp, seasonal vegetables tossed with a light lemon and olive oil dressing. Perfect for a healthy, low-calorie meal that's fresh, flavorful, and satisfying.",
    ingredients: "Chicken, lettuce, tomato, cheese",
    calories: "450 kcal...",
    allergenInfo: "Chicken, lettuce, tomato, cheese",
  },
  {
    id: "2",
    name: "Fruits with strawberry",
    price: "$8.99",
    image: "/food.png",
    category: "Appetizers",
    description:
      "A colorful medley of fresh seasonal fruits topped with ripe strawberries and a drizzle of honey.",
    ingredients: "Strawberry, mango, kiwi, blueberry",
    calories: "320 kcal",
    allergenInfo: "None",
  },
  {
    id: "3",
    name: "Salad with lettuce",
    price: "$8.99",
    image: "/food.png",
    category: "Appetizers",
    description:
      "A refreshing blend of crisp, seasonal vegetables tossed with a light lemon and olive oil dressing.",
    ingredients: "Chicken, lettuce, tomato, cheese",
    calories: "450 kcal",
    allergenInfo: "Chicken, lettuce, tomato, cheese",
  },
  {
    id: "4",
    name: "Fruits with strawberry",
    price: "$8.99",
    image: "/food.png",
    category: "Appetizers",
    description:
      "A colorful medley of fresh seasonal fruits topped with ripe strawberries.",
    ingredients: "Strawberry, mango, kiwi, blueberry",
    calories: "320 kcal",
    allergenInfo: "None",
  },
  {
    id: "5",
    name: "Salad with lettuce",
    price: "$8.99",
    image: "/food.png",
    category: "Soups & Salads",
    description:
      "A refreshing blend of crisp vegetables with olive oil dressing.",
    ingredients: "Lettuce, tomato, cucumber, olive oil",
    calories: "280 kcal",
    allergenInfo: "None",
  },
  {
    id: "6",
    name: "Fruits with strawberry",
    price: "$8.99",
    image: "/food.png",
    category: "Soups & Salads",
    description: "Fresh fruit bowl with strawberry topping.",
    ingredients: "Strawberry, banana, grape",
    calories: "300 kcal",
    allergenInfo: "None",
  },
  {
    id: "7",
    name: "Salad with lettuce",
    price: "$8.99",
    image: "/food.png",
    category: "Soups & Salads",
    description: "Classic garden salad with fresh lettuce.",
    ingredients: "Lettuce, carrot, radish",
    calories: "250 kcal",
    allergenInfo: "None",
  },
  {
    id: "8",
    name: "Fruits with strawberry",
    price: "$8.99",
    image: "/food.png",
    category: "Soups & Salads",
    description: "Mixed fruit salad with honey drizzle.",
    ingredients: "Strawberry, apple, melon",
    calories: "290 kcal",
    allergenInfo: "None",
  },
];

// ── Order List Data ──

const generateOrders = (): Order[] => {
  const statuses = ["Pending", "Preparing", "Completed", "Paid"];
  return Array.from({ length: 50 }, (_, i) => ({
    orderId: "#CH 565",
    restaurantName: "Red Seafood Resort",
    restaurantId: "#CH 565",
    orderItem: 256,
    amount: "Mid-range",
    status: statuses[i % 4],
  }));
};

export const ordersData: Order[] = generateOrders();

export const orderDetail: OrderDetail = {
  invoiceId: "#IN 265",
  status: "Paid",
  orderId: "#CH 565",
  date: "26 Jan, 2026",
  customerName: "Rahim Hossain",
  contactNumber: "+62 031 031",
  restaurantName: "Mealz Restaurant",
  address: "New York, NY 10014,",
  items: [
    { dishName: "Chicken burger - 2x", quantity: 12, price: "$69.50" },
    { dishName: "Chicken burger - 2x", quantity: 12, price: "$69.50" },
    { dishName: "Chicken burger - 2x", quantity: 12, price: "$69.50" },
    { dishName: "Chicken burger - 2x", quantity: 12, price: "$69.50" },
  ],
  tax: "$00.00",
  totalBill: "$119.00",
};

// ── Settings Data ──

export const adminProfile: AdminProfile = {
  name: "Sidney Paul",
  email: "name@gmail.com",
  avatar: "/food.png",
};
