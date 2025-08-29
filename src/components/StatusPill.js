import React from 'react'

const StatusPill = ({ status, fullWidth }) => {
const base =
    "inline-flex items-center justify-center h-8 px-3 rounded-lg text-sm font-medium";
  const map = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-amber-100 text-amber-700",
    Failed: "bg-red-100 text-red-700",
  };
  const cls = `${base} ${map[status] || "bg-slate-100 text-slate-700"} ${
    fullWidth ? "w-full" : ""
  }`;

  return <span className={cls}>{status}</span>;
}

export default StatusPill