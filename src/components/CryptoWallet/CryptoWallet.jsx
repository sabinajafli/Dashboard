import React from 'react'
import Wallet from './Wallet'
import TotalAssets from './TotalAssets'
import CryptoCard from './CryptoCard'
import './CryptoWallet.css'

function CryptoWallet() {
  return (
    <div className=''>
        <Wallet />
        <TotalAssets />
        <div className='overflow-auto h-[600px] scroll'>
          <CryptoCard />
        </div>
    </div>
  )
}

export default CryptoWallet