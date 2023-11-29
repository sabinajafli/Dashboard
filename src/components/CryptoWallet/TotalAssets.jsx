import React from 'react'

function TotalAssets() {
  return (
    <div className='px-8 flex p-5'>
        <div className='relative text-white p-5 h-[120px] w-[400px] bg-[#171717] rounded-lg'>
            <img src="../src/assets/mountains.480723aab737044962d47a4b8ea75afb.svg" alt="" className='absolute bottom-0 left-0' />
            <div>
                <span>Total Assets</span>
                <div>
                    <span>6627.66</span>
                    USD
                </div>
                <div>
                    <span>0.234156</span>
                    BTC
                </div>
            </div>
            <img src="../src/assets/wallet.438f370c1c5a7e7244ae.webp" alt="" className='absolute bottom-0 right-5 h-[135px] w-[122px]' />
        </div>
    </div>
  )
}

export default TotalAssets