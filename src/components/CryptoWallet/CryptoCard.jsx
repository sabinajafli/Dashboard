import React from 'react'
import { useEffect, useState } from 'react';

function CryptoCard() {
   const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
  }, []);
  return (
    data.map((data) => (
      <div className='px-8 flex'>
          <div className='w-[400px] h-[72px] border border-gray-300 rounded bg-white'>
              <div key={data.id} className='p-3 flex items-center'>
                <div className='flex flex-col w-full'>
                  <div className='flex justify-between '>
                    <h3 className='text-[14px] text-[#171717] font-medium'>{data.name}</h3>
                    <span className='text-[14px] text-[#171717] font-medium'>{Number(data.changePercent24Hr).toFixed(4)}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-[12px] text-[#848484]'>{data.symbol}</span>
                    <span className='text-[12px] text-[#848484]'>{Number(data.priceUsd).toFixed(2)} USD</span>
                  </div>
                </div>
              </div>
          </div>
      </div>))
  )
}

export default CryptoCard