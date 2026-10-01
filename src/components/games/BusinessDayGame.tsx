import React, { useState } from 'react';
import {
  Receipt,
  ArrowLeft,
  RotateCcw,
  CheckCircle,
  Plus,
  DollarSign,
  Briefcase,
  TrendingUp,
  Award,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Transaction {
  id: string;
  time: string;
  description: string;
  amount: number;
  type: 'sale_cash' | 'purchase_credit' | 'expense_cash' | 'receivable_collected';
  recorded: boolean;
}

export const BusinessDayGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  // Balance Sheet Equation: Assets = Liabilities + Equity
  const [cash, setCash] = useState<number>(4500);
  const [inventory, setInventory] = useState<number>(3200);
  const [accountsReceivable, setAccountsReceivable] = useState<number>(800);
  const [accountsPayable, setAccountsPayable] = useState<number>(1200);
  const [revenue, setRevenue] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'tx1',
      time: '09:15 AM',
      description: 'Sold 10 STEM Lab Kits for cash',
      amount: 600,
      type: 'sale_cash',
      recorded: false
    },
    {
      id: 'tx2',
      time: '11:30 AM',
      description: 'Purchased 20 Sensor Boards on 30-day supplier credit',
      amount: 450,
      type: 'purchase_credit',
      recorded: false
    },
    {
      id: 'tx3',
      time: '02:00 PM',
      description: 'Paid shop electricity & broadband utilities in cash',
      amount: 180,
      type: 'expense_cash',
      recorded: false
    },
    {
      id: 'tx4',
      time: '04:45 PM',
      description: 'Collected overdue payment from School District client',
      amount: 500,
      type: 'receivable_collected',
      recorded: false
    }
  ]);

  const [selectedTx, setSelectedTx] = useState<Transaction | null>(transactions[0]);
  const [dayFinished, setDayFinished] = useState<boolean>(false);

  // Accounting Ledger calculations
  const totalAssets = cash + inventory + accountsReceivable;
  const netProfit = revenue - expenses;
  const totalEquity = totalAssets - accountsPayable;

  const handleRecordTransaction = (tx: Transaction, debitAccount: string, creditAccount: string) => {
    if (tx.recorded) return;

    if (tx.type === 'sale_cash') {
      setCash((prev) => prev + tx.amount);
      setInventory((prev) => Math.max(0, prev - tx.amount * 0.5));
      setRevenue((prev) => prev + tx.amount);
    } else if (tx.type === 'purchase_credit') {
      setInventory((prev) => prev + tx.amount);
      setAccountsPayable((prev) => prev + tx.amount);
    } else if (tx.type === 'expense_cash') {
      setCash((prev) => Math.max(0, prev - tx.amount));
      setExpenses((prev) => prev + tx.amount);
    } else if (tx.type === 'receivable_collected') {
      setCash((prev) => prev + tx.amount);
      setAccountsReceivable((prev) => Math.max(0, prev - tx.amount));
    }

    const updated = transactions.map((t) => (t.id === tx.id ? { ...t, recorded: true } : t));
    setTransactions(updated);

    // Check if next exists
    const nextUnrecorded = updated.find((t) => !t.recorded);
    setSelectedTx(nextUnrecorded || null);

    if (updated.every((t) => t.recorded)) {
      setDayFinished(true);
      try {
        confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
      } catch {}
    }
  };

  const handleResetDay = () => {
    setCash(4500);
    setInventory(3200);
    setAccountsReceivable(800);
    setAccountsPayable(1200);
    setRevenue(0);
    setExpenses(0);
    setTransactions(transactions.map((t) => ({ ...t, recorded: false })));
    setSelectedTx(transactions[0]);
    setDayFinished(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-100 flex flex-col space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
            title="Return to Games Home"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📊</span>
              <h2 className="text-xl font-black text-white">Business Day: Accounting Ledger</h2>
              <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800">
                Accounting
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Double-Entry Bookkeeping — Record daily commercial transactions to maintain the Fundamental Accounting Equation (Assets = Liabilities + Equity).
            </p>
          </div>
        </div>

        <button
          onClick={handleResetDay}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Day</span>
        </button>
      </div>

      {/* Financial Health Overview Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Cash in Hand</span>
          <span className="text-xl font-black text-emerald-400 mt-0.5 block">${cash.toLocaleString()}</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Total Assets</span>
          <span className="text-xl font-black text-cyan-400 mt-0.5 block">${totalAssets.toLocaleString()}</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Accounts Payable</span>
          <span className="text-xl font-black text-rose-400 mt-0.5 block">${accountsPayable.toLocaleString()}</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block font-bold">Day Net Profit</span>
          <span className={`text-xl font-black mt-0.5 block ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            ${netProfit.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Main Journal Recording Table & Balance Sheet Equation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Daily Transactions Queue */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400 flex items-center justify-between">
            <span>Business Day Transaction Feed</span>
            <span className="text-emerald-400 font-bold">
              {transactions.filter((t) => t.recorded).length} / {transactions.length} Recorded
            </span>
          </h3>

          <div className="space-y-2.5">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                onClick={() => !tx.recorded && setSelectedTx(tx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  tx.recorded
                    ? 'bg-slate-900/40 border-slate-800/80 opacity-70'
                    : selectedTx?.id === tx.id
                    ? 'bg-teal-950/40 border-teal-500 shadow-sm'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">{tx.time}</span>
                  <span className="text-xs font-mono font-black text-white">${tx.amount}</span>
                </div>
                <p className="text-xs font-bold text-slate-200 mt-1">{tx.description}</p>

                {tx.recorded ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold mt-2">
                    <Check className="w-3 h-3" />
                    Posted to General Ledger
                  </span>
                ) : (
                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-teal-400 font-mono font-bold">Ready to journalize</span>
                    <button
                      type="button"
                      onClick={() => handleRecordTransaction(tx, 'Debit', 'Credit')}
                      className="px-3 py-1 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs cursor-pointer"
                    >
                      Post Entry →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fundamental Accounting Balance Sheet Inspector */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950 border border-slate-800 rounded-3xl p-5">
          <h3 className="text-xs font-mono uppercase font-extrabold tracking-wider text-slate-400">
            Real-Time Balance Sheet Equation
          </h3>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-bold uppercase">Assets (What you own)</span>
              <span className="text-cyan-300 font-black">${totalAssets}</span>
            </div>
            <div className="pl-3 space-y-1 text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span>• Cash at Bank:</span>
                <span className="text-white">${cash}</span>
              </div>
              <div className="flex justify-between">
                <span>• Merchandise Inventory:</span>
                <span className="text-white">${inventory}</span>
              </div>
              <div className="flex justify-between">
                <span>• Accounts Receivable:</span>
                <span className="text-white">${accountsReceivable}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 pb-2 border-b border-t border-slate-800">
              <span className="text-rose-400 font-bold uppercase">Liabilities (What you owe)</span>
              <span className="text-rose-300 font-black">${accountsPayable}</span>
            </div>
            <div className="pl-3 text-[11px] text-slate-400 flex justify-between">
              <span>• Accounts Payable (Suppliers):</span>
              <span className="text-white">${accountsPayable}</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-800">
              <span className="text-emerald-400 font-bold uppercase">Owner's Equity (Net Worth)</span>
              <span className="text-emerald-300 font-black">${totalEquity}</span>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-3.5 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs font-mono text-emerald-300 flex items-center justify-between">
            <span className="font-bold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Equation Balanced:
            </span>
            <span>${totalAssets} = ${accountsPayable} + ${totalEquity}</span>
          </div>

          {dayFinished && (
            <div className="p-4 bg-gradient-to-r from-teal-900/60 to-emerald-900/60 border border-teal-600/80 rounded-2xl text-center space-y-1 animate-in zoom-in-95">
              <Award className="w-6 h-6 text-amber-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Business Day Successfully Closed!</h4>
              <p className="text-xs text-teal-200">
                All daily cash flows, credit sales, and utility expenses reconcilied without discrepancy.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
