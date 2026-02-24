'use client';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface TransactionAlertProps {
    transactions: {
        name: string;
        amount: number;
        date: string;
        channel?: string;
    }[];
    threshold?: number;
}

export default function TransactionAlert({ transactions, threshold = 100 }: TransactionAlertProps) {
    useEffect(() => {
        if (!transactions?.length) return;

        const large = transactions.filter(t => Math.abs(t.amount) >= threshold);

        if (large.length === 0) return;

        // Show at most 3 alerts so we don't spam the user
        large.slice(0, 3).forEach((t, i) => {
            setTimeout(() => {
                const amount = Math.abs(t.amount);
                const isDebit = t.amount < 0;
                toast[isDebit ? 'warning' : 'info'](
                    `${isDebit ? '⚠️ Large payment' : '💰 Large deposit'} detected`,
                    {
                        description: `${t.name} — $${amount.toFixed(2)}`,
                        duration: 6000,
                    }
                );
            }, i * 800);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only fire once on mount

    return null;
}
