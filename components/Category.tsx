'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

import { topCategoryStyles } from "@/constants";
import { getBudgets } from "@/lib/budget";
import { cn } from "@/lib/utils";

import { Progress } from "./ui/progress";

const Category = ({ category }: CategoryProps) => {
  const {
    bg,
    circleBg,
    text: { main, count },
    progress: { bg: progressBg, indicator },
    icon,
  } = topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
    topCategoryStyles.default;

  const [budget, setBudget] = useState<number | null>(null);

  useEffect(() => {
    const budgets = getBudgets();
    const b = budgets[category.name];
    setBudget(b ?? null);
  }, [category.name]);

  // Assume each transaction is ~$20 average for spend estimation
  const estimatedSpend = category.count * 20;
  const budgetPct = budget ? Math.min((estimatedSpend / budget) * 100, 100) : null;
  const isOverBudget = budgetPct !== null && budgetPct >= 100;

  return (
    <div className={cn("gap-[18px] flex p-4 rounded-xl", bg)}>
      <figure className={cn("flex-center size-10 rounded-full", circleBg)}>
        <Image src={icon} width={20} height={20} alt={category.name} />
      </figure>
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="text-14 flex justify-between">
          <h2 className={cn("font-medium", main)}>{category.name}</h2>
          <div className="flex items-center gap-2">
            <h3 className={cn("font-normal", count)}>{category.count}</h3>
            {budget && (
              <span className={cn(
                "text-10 font-semibold px-1.5 py-0.5 rounded-full",
                isOverBudget
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-700"
              )}>
                {isOverBudget ? '⚠ Over' : `$${budget}`}
              </span>
            )}
          </div>
        </div>
        <Progress
          value={(category.count / category.totalCount) * 100}
          className={cn("h-2 w-full", progressBg)}
          indicatorClassName={cn("h-2 w-full", indicator)}
        />
        {budgetPct !== null && (
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between text-10 text-gray-500">
              <span>Budget used</span>
              <span className={isOverBudget ? 'text-red-500 font-semibold' : ''}>
                {Math.round(budgetPct)}%
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-gray-200 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  isOverBudget ? "bg-red-500" : "bg-green-500"
                )}
                style={{ width: `${budgetPct}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;