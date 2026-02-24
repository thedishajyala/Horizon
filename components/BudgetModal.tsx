'use client';
import { useEffect, useState, useCallback } from 'react';
import { getBudgets, saveBudget, type Budgets } from '@/lib/budget';

const CATEGORIES = ['Travel', 'Food and Drink', 'Transfer', 'Payment', 'Other'];

interface BudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
    const [budgets, setBudgets] = useState<Budgets>({});
    const [drafts, setDrafts] = useState<Record<string, string>>({});

    useEffect(() => {
        if (isOpen) {
            const saved = getBudgets();
            setBudgets(saved);
            const d: Record<string, string> = {};
            CATEGORIES.forEach(c => { d[c] = saved[c] ? String(saved[c]) : ''; });
            setDrafts(d);
        }
    }, [isOpen]);

    const handleSave = useCallback(() => {
        CATEGORIES.forEach(cat => {
            const val = parseFloat(drafts[cat]);
            if (!isNaN(val) && val > 0) saveBudget(cat, val);
        });
        onClose();
    }, [drafts, onClose]);

    if (!isOpen) return null;

    return (
        <div className="budget-modal-overlay" onClick={onClose}>
            <div className="budget-modal" onClick={e => e.stopPropagation()}>
                <div className="budget-modal-header">
                    <h2 className="text-20 font-bold text-gray-900 dark:text-white">🎯 Set Monthly Budgets</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
                </div>

                <p className="text-14 text-gray-500 dark:text-gray-400 mb-4">
                    Set a monthly spending limit per category. Progress bars will track your usage.
                </p>

                <div className="flex flex-col gap-4">
                    {CATEGORIES.map(cat => (
                        <div key={cat} className="flex items-center justify-between gap-4">
                            <label className="text-14 font-medium text-gray-700 dark:text-gray-300 w-36 shrink-0">{cat}</label>
                            <div className="flex items-center gap-2 flex-1">
                                <span className="text-gray-400 text-14">$</span>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="No limit"
                                    value={drafts[cat] ?? ''}
                                    onChange={e => setDrafts(prev => ({ ...prev, [cat]: e.target.value }))}
                                    className="budget-input"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-3 mt-6">
                    <button onClick={onClose} className="budget-btn-secondary">Cancel</button>
                    <button onClick={handleSave} className="budget-btn-primary">Save Budgets</button>
                </div>
            </div>
        </div>
    );
}
