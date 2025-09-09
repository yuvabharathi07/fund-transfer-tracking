import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-4">
        <label className="block">
            <div className="flex items-center rounded-xl bg-[#e7edf4]">
            <div className="pl-3 sm:pl-4 pr-2 text-[#49739c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
            </div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full h-12 bg-transparent outline-none placeholder:text-[#49739c] text-[#0d141c] text-base px-2 sm:px-3"
            />
            </div>
        </label>
    </div>
  )
}

export default Search