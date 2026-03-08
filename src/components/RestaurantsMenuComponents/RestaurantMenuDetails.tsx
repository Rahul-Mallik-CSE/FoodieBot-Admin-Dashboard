/** @format */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Search, Ban } from "lucide-react";
import { useRouter } from "next/navigation";
import { menuCategories, dishItems } from "@/data/AllData";
import { DishItem } from "@/types/AllTypes";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const RestaurantMenuDetails = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Appetizers");
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = dishItems.filter((dish) => {
    const matchesCategory = dish.category === activeCategory;
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery ? matchesSearch : true);
  });

  const handleDishDetails = (dish: DishItem) => {
    setSelectedDish(dish);
    setSheetOpen(true);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="text-white hover:text-custom-pink transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl sm:text-2xl font-semibold text-white">
            Restaurant menu Details
          </h1>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="pl-9 bg-card border-[#2C2740] text-white placeholder:text-muted-foreground h-9"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {menuCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`text-sm whitespace-nowrap pb-2 border-b-2 transition-colors ${
              activeCategory === cat.name
                ? "border-custom-pink text-custom-pink"
                : "border-transparent text-muted-foreground hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Dish Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-card rounded-xl border border-[#2C2740] overflow-hidden flex flex-col items-center p-4"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
              <Image
                src={dish.image}
                alt={dish.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-sm font-medium text-white text-center">
              {dish.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{dish.price}</p>
            <button
              onClick={() => handleDishDetails(dish)}
              className="w-full py-2 rounded-lg bg-button text-white text-sm font-medium hover:bg-button/80 transition-colors"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Dish Details Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="bg-root-bg border-l border-[#2C2740] w-full sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSheetOpen(false)}
                className="text-white hover:text-custom-pink transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <SheetTitle className="text-white text-xl font-semibold">
              Dish Details
            </SheetTitle>
            <p className="text-sm text-muted-foreground">
              Manage information used by the AI assistant to answer customer
              questions.
            </p>
          </SheetHeader>

          {selectedDish && (
            <div className="mt-6 space-y-6 px-1">
              {/* Dish Image */}
              <div className="flex justify-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#2C2740]">
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">
                  {selectedDish.name}
                </h3>
                <p className="text-muted-foreground">{selectedDish.price}</p>
              </div>

              {/* Info Sections */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Category</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedDish.category}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Description
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedDish.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Ingredients
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedDish.ingredients}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Calories</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedDish.calories}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Allergen Information
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedDish.allergenInfo}
                  </p>
                </div>
              </div>

              {/* Suspend Button */}
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm font-medium">
                <Ban className="w-4 h-4" />
                Suspend
              </button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default RestaurantMenuDetails;
