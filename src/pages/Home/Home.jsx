import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import CryptoWallet from '../../components/CryptoWallet/CryptoWallet'
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard'
import SortCrypto from '../../components/SortCrypto/SortCrypto'

function Home() {
  return (
    <>
    <Header />
    <Sidebar/>
  
    <div className='grid grid-cols-3 gap-4 sm:ml-64 bg-gray-100'>
        <CryptoWallet />
        <SortCrypto />
        <LeaderBoard />
    </div>
    </>
  )
}

export default Home