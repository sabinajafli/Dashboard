import React from 'react'
import { useEffect, useState } from 'react';

function LeaderBoardItem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => {
         const sortedData = data.data.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
        const top10Data = sortedData.slice(0, 10);
        setData(top10Data);
      })
  }, []);
  return (
    data.map((item, index) => (
      <div key={item.index} className='flex items-center justify-between w-[380px] h-[72px]  bg-[#171717] rounded-lg text-[#e8e8e8] mb-2'>
        <div className='flex flex-row items-center p-3'>
            <span className='w-[24px] h-[24px] bg-[#e0f64b] text-center mr-2 rounded-full text-black'>{index + 1}</span>
            <h4 className='text-[12px]'>{item.name}</h4>
        </div>
        <div className='p-3 flex items-center'>
            <span className='text-[#e8e8e8] text-[12px] mr-2'>Wallet increase:</span>
            <span className='h-[24px] w-[58px] text-[14px] bg-[#1abc7b] text-center rounded-md'>{Number(item.changePercent24Hr).toFixed(1)}%</span>
        </div>
      </div>
    ))
  )
}

export default LeaderBoardItem