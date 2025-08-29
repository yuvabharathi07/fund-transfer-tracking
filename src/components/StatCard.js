import React from 'react'

const StatCard = ({title, value}) => {
return (
    <div className="flex flex-col gap-1 rounded-2xl p-5 bg-[#e7edf4] min-w-0">
      <p className="text-[#0d141c] text-sm sm:text-base font-medium leading-normal truncate">
        {title}
      </p>
      <p className="text-[#0d141c] text-xl sm:text-2xl font-bold leading-tight truncate">
        {value}
      </p>
    </div>
  );
}

export default StatCard