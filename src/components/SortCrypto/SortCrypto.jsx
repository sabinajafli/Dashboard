import React from 'react'
import Sort from './Sort'

function SortCrypto() {
  return (
    <div className='pt-10'>
      <div  className='w-[400px] h-[430px] rounded-xl p-3 flex flex-col border border-gray-300 bg-white'>
        <div className='flex justify-between w-full text-[11px] text-[#848484] mb-5'>
            <button className='flex items-baseline'>Name 
                <svg class="w-2 h-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 12 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.335 6.514 6.91 1.464a1.122 1.122 0 0 0-1.818 0l-3.426 5.05a.988.988 0 0 0 .91 1.511h6.851a.988.988 0 0 0 .91-1.511Zm-8.67 6.972 3.426 5.05a1.121 1.121 0 0 0 1.818 0l3.426-5.05a.988.988 0 0 0-.909-1.511H2.574a.987.987 0 0 0-.909 1.511Z"/>
                </svg>
            </button>
            <div className='flex justify-between w-1/2' >
                <button className='flex items-baseline'>Price
                    <svg class="w-2 h-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 12 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.335 6.514 6.91 1.464a1.122 1.122 0 0 0-1.818 0l-3.426 5.05a.988.988 0 0 0 .91 1.511h6.851a.988.988 0 0 0 .91-1.511Zm-8.67 6.972 3.426 5.05a1.121 1.121 0 0 0 1.818 0l3.426-5.05a.988.988 0 0 0-.909-1.511H2.574a.987.987 0 0 0-.909 1.511Z"/>
                    </svg>
                </button>
                <button className='flex items-baseline'>Change 24h
                    <svg class="w-2 h-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 12 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.335 6.514 6.91 1.464a1.122 1.122 0 0 0-1.818 0l-3.426 5.05a.988.988 0 0 0 .91 1.511h6.851a.988.988 0 0 0 .91-1.511Zm-8.67 6.972 3.426 5.05a1.121 1.121 0 0 0 1.818 0l3.426-5.05a.988.988 0 0 0-.909-1.511H2.574a.987.987 0 0 0-.909 1.511Z"/>
                    </svg>
                </button>
            </div>
        </div>
        <Sort />
      </div>
        
    </div>
  )
}

export default SortCrypto