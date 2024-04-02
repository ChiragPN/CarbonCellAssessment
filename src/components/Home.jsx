import React from 'react'
import PopulationData from '../components/PopulationData'
import CryptoPrices from '../components/CryptoPrices'

function Home() {
  return (
    <div>
        <h1 className='text-2xl pt-5 mx-4 flex gap-1'>Hello,<p className='text-LightBlue'>Developer</p></h1>
        <p className='text-xl pb-4 mx-4 flex gap-1'>Welcome to<span className='text-LightBlue'>Home Page</span></p>
        <PopulationData/>
        <CryptoPrices/>
    </div>
  )
}

export default Home
