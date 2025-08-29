import React from 'react'

const Header = ({setMobileNavOpen}) => {
  return (
    <header className="flex items-center justify-between border-b border-b-[#e7edf4] px-4 sm:px-6 lg:px-10 py-3 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex items-center gap-3 sm:gap-4 text-[#0d141c]">
            {/*---------------------------- Mobile menu button ------------------------------------ */}
            <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100 transition"
            aria-label="Open navigation" onClick={() => setMobileNavOpen(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            <div className="size-5 shrink-0 hidden md:block">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0d141c]">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
            </div>
            <h1 className="text-[#0d141c] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">Fund Transfer</h1>
        </div>

        <div className="flex flex-1 justify-end items-center gap-3 sm:gap-4">
            <button
            className="inline-flex items-center justify-center rounded-xl h-10 px-3 bg-[#e7edf4] text-[#0d141c] text-sm font-semibold"
            >
            <span className="sr-only">Notifications</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
            </button>

            {/* Profile */}
            <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
                backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCy0eVTt0p8SQeGA-KUQbsA5Ow2nVDoS6zu-INhJNl4xZxGIpvLZFY9Md3UWFNtZaTGjHRMwTkBIPgk50T7ESQyMnyARbUiUGuoNCLBFh4JJUkURiqnkWNkCRCQp-hEhwhqqGsqrnSs5g-zCcb10c_cA0MPNbdzynOplhefPUnxWPnj1jfM_9SIX2gFul9rsi6rSsckzMPn7M8CHeZcXfHBMLsTC2kczhMLmxHnUDRO_hNBHgLJ9xl6lQhtjkvtCbqwUgBE_6_gispk")',
            }}
            />
        </div>
    </header>
  )
}

export default Header