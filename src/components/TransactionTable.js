import React from 'react'
import StatusPill from './StatusPill'
function Th({ children, className = "" }) {
  return (
    <th
      className={`px-4 py-3 text-left text-[#0d141c] text-sm font-medium ${className}`}
    >
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return (
    <td className={`px-4 py-3 text-sm text-[#0d141c] ${className}`}>
      {children}
    </td>
  );
}

const TransactionTable = ({filtered, currency}) => {
  return (
    <div>
        {/* Desktop (table) */}
        <div className=" md:block  rounded-xl border border-[#cedbe8] bg-white">
            <div className="overflow-x-auto">
            <table className="min-w-[720px] w-full">
                <thead className="bg-slate-50 text-left">
                <tr>
                    <Th>Transaction ID</Th>
                    <Th>User</Th>
                    <Th>Amount</Th>
                    <Th>Date</Th>
                    <Th className="w-40">Status</Th>
                </tr>
                </thead>
                <tbody>
                {filtered.map((t) => (
                    <tr key={t.id} className="border-t border-[#cedbe8]">
                    <Td>{t.id}</Td>
                    <Td className="text-[#49739c]">{t.user}</Td>
                    <Td className="text-[#49739c]">{currency.format(t.amount)}</Td>
                    <Td className="text-[#49739c]">{t.date}</Td>
                    <Td>
                        <div className="py-2">
                        <StatusPill status={t.status} fullWidth />
                        </div>
                    </Td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default TransactionTable