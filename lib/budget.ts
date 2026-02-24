// Budget helpers using localStorage
export const BUDGET_KEY = 'horizon_budgets';

export type Budgets = Record<string, number>; // { "Travel": 500, "Food and Drink": 300 }

export function getBudgets(): Budgets {
    if (typeof window === 'undefined') return {};
    try {
        const raw = localStorage.getItem(BUDGET_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

export function saveBudget(category: string, amount: number): void {
    const budgets = getBudgets();
    budgets[category] = amount;
    localStorage.setItem(BUDGET_KEY, JSON.stringify(budgets));
}

export function getAllBudgets(): Budgets {
    return getBudgets();
}
