import React from "react";
import StatCard from "./StatCard";

const Reports = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111122] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Reports Heading */}
             <p className="text-[#0d141c] text-2xl sm:text-3xl font-bold tracking-tight"> Reports </p>

            {/* Filters */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {["Date Range", "Category", "Status"].map((label, i) => (
                <button
                  key={i}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#232348] pl-4 pr-2"
                >
                  <p className="text-sm font-medium">{label}</p>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Financial Summary */}
            <h2 className=" text-[22px] font-bold px-4 pb-3 pt-5">
              Financial Summary
            </h2>

             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <StatCard title="Total Transfers " value= "1,250" />
              <StatCard title="Average Transfer Amount" value= "$500" />
              <StatCard title="Total Amount Transferred" value= "$625,000" />
              {/* <StatCard title="Total Users" value={totals.users.toLocaleString()} /> */}
            </div>

            {/* TODO: Add Transaction Trends & Categorical Breakdown */}
            {/* For your charts, we should use Recharts or Chart.js instead of raw inline SVGs for cleaner React code */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
