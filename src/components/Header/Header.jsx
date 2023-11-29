import React from 'react'

function Header() {
  return (
    <div class="p-8 sm:ml-64 bg-gray-100">
        <div className='flex items-center justify-between'>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className='flex items-center gap-7'>
                <div className='flex items-center'>
                    <label htmlFor="" className='mr-3 text-xs font-medium text-gray-500'>FONT SCALE</label>
                    <input id="small-range" type="range" defaultValue={0}  className='range  accent-[#171717]'/>
                </div>
                <form>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 pr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-1 ps-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" placeholder="Search" required />
                </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Header