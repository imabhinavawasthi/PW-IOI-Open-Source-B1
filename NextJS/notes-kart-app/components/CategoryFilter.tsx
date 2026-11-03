import React from "react";
import { CATEGORIES } from "@/data/notes";
import { Category } from "@/types/note";

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  itemCounts?: Record<string, number>;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  itemCounts,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((category) => {
        const isActive = selectedCategory === category;
        const count = itemCounts ? itemCounts[category] : undefined;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category as Category)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              isActive
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            {category}
            {count !== undefined && (
              <span
                className={`ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                  isActive ? "bg-indigo-700 text-indigo-100" : "bg-slate-800 text-slate-400"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
