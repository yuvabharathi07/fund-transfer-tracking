import React, { useMemo, useState } from "react";
import DynamicTable from "./DynamicTable";
import Search from "./Search";
import StatCard from "./StatCard";

// Responsive FundTransfer Dashboard
// - Mobile-first layout
// - Collapsible sidebar on small screens
// - Card stats grid that adapts across breakpoints
// - Transactions: table on md+ and stacked cards on mobile
// - Search by Transaction ID (client-side)

//------------------------------ Sample Transaction data ------------------------------
const TRANSACTIONS = [
  { id: "TXN12345", user: "Sophia Clark", amount: 500, date: "2025-09-20", status: "Completed" },
  { id: "TXN67890", user: "Ethan Miller", amount: 250, date: "2025-09-20", status: "Pending" },
  { id: "TXN11223", user: "Olivia Davis", amount: 750, date: "2025-09-20", status: "Completed" },
  { id: "TXN44556", user: "Liam Wilson", amount: 100, date: "2023-09-20", status: "Failed" },
  { id: "TXN77889", user: "Ava Martinez", amount: 300, date: "2023-09-20", status: "Completed" },
  { id: "TXN99001", user: "Noah Anderson", amount: 450, date: "2023-09-20", status: "Pending" },
  { id: "TXN22334", user: "Isabella Thomas", amount: 600, date: "2023-09-20", status: "Completed" },
  { id: "TXN55667", user: "Jackson Jackson", amount: 200, date: "2023-09-20", status: "Failed" },
  { id: "TXN88990", user: "Mia Garcia", amount: 350, date: "2023-09-20", status: "Completed" },
  { id: "TXN00112", user: "Aiden Lopez", amount: 550, date: "2023-09-20", status: "Pending" },
];

// Get Currency symbol
const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

// --------------------------------- Return Function
export default function FundTransferDashboard() {
  const TRANSACTIONTABLEHEADERS = [
    {name : 'Transaction ID', colKey : 'id'},
    {name : 'User', colKey : 'user', colClassName : 'text-[#49739c]'},
    {name : 'Amount', colKey : 'amount', colClassName : 'text-[#49739c]'},
    {name : 'Date', colKey : 'date', colClassName : 'text-[#49739c]'},
    {name : 'Status', headerClassName : 'w-40', colKey : 'status', colClassName : 'py-2', setStatusPill : true}
  ];  
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return TRANSACTIONS;
    return TRANSACTIONS.filter((t) => t.id.toLowerCase().includes(s) || t.user.toLowerCase().includes(s) || t.amount.toString().includes(s) || t.date.includes(s));
  }, [search]);

  const totals = useMemo(() => {
    const totalFund = TRANSACTIONS.reduce((sum, t) => sum + t.amount, 0);
    const todayCount = TRANSACTIONS.length; // demo value
    const users = new Set(TRANSACTIONS.map((t) => t.user)).size;
    return { totalFund, todayCount, users };
  }, []);

  return (
   
      <>
        {/*---------------------- Main content -----------------------*/}
        <main className="flex flex-col min-w-0">
          {/* Top: Dashboard title & stats */}
          <div className="px-4 sm:px-6 lg:px-10 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[#0d141c] text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</p>
            </div>

            {/* Stats grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <StatCard title="Total Fund Available" value={currency.format(totals.totalFund)} />
              <StatCard title="Today's Transactions Count" value={totals.todayCount.toLocaleString()} />
              <StatCard title="Total Users" value={totals.users.toLocaleString()} />
            </div>
          </div>

          {/* Search */}
          {/* <Search search={search} setSearch={setSearch} /> */}

          {/*----------------------- Transactions ----------------------*/}
          <section className="px-4 sm:px-6 lg:px-10 pb-6">
            <h2 className="text-[#0d141c] text-xl font-bold tracking-tight mb-3">Today's Transactions</h2>

            {/* -------------------- Transaction Table ---------------------*/}
           <DynamicTable tableId='dashboard' tableHeaders={TRANSACTIONTABLEHEADERS} tableBodies={filtered} currency={currency} />

            

            {/* Pagination mock (centered) */}
            {/* <div className="flex items-center justify-center gap-1 mt-4">
              <button className="size-10 inline-flex items-center justify-center rounded-full hover:bg-slate-100">
                <span className="sr-only">Previous</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" className="text-[#0d141c]">
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </button>
              <button className="size-10 rounded-full bg-[#e7edf4] text-[#0d141c] text-sm font-bold">1</button>
              <button className="size-10 rounded-full text-[#0d141c] text-sm">2</button>
              <button className="size-10 rounded-full text-[#0d141c] text-sm">3</button>
              <button className="size-10 inline-flex items-center justify-center rounded-full hover:bg-slate-100">
                <span className="sr-only">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" className="text-[#0d141c]">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </button>
            </div> */}
          </section>
        </main>
      </>
     
  );
}
