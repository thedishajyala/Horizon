import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  });

  return (
    <section className="my-banks">
      <HeaderBox
        title="My Bank Accounts"
        subtext="Effortlessly Manage Your Banking Activities"
      />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-18 font-semibold text-gray-900">Your cards</h2>
          <span className="text-gray-400">&#9658;</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {accounts && accounts.data.map((a: Account, index: number) => (
            <div key={a.id} className="flex flex-col gap-3">
              <BankCard
                account={a}
                userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                showBalance={false}
                index={index}
              />
              <div className="flex flex-col gap-1 px-1">
                <div className="flex items-center justify-between text-13 text-gray-500">
                  <span>Spending this month</span>
                  <span className="font-semibold text-gray-900">
                    ${(a.currentBalance * 0.4).toFixed(2)}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all"
                    style={{ width: '40%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBanks;