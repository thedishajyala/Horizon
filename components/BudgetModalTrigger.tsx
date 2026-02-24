'use client';
import { useState } from 'react';
import BudgetModal from './BudgetModal';

export default function BudgetModalTrigger() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-12 font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                title="Set monthly budget limits"
            >
                🎯 Set Budgets
            </button>
            <BudgetModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}
