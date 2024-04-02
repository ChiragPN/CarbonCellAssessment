import React, { useState, useEffect } from 'react';
import bitcoin from '../assets/icons/bitcoin.svg';
import axios from 'axios';

const CryptoPrices = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  const currencySymbols = {
    USD: '$',
    GBP: '£',
    EUR: '€',
  };

  useEffect(() => {
    const fetchData = async () => {
        await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => setBitcoinData(response.data))
        .catch(error => console.log('Error fetching data:', error));
        setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='text-2xl py-0 my-2 p-4'>CryptoCurrency Prices</h1>
      <div className='container flex flex-wrap m-4 gap-6 w-fit'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          bitcoinData && (
            <div className='card bg-CustomGray drop-shadow-2xl w-auto rounded-lg'>
                <div className='flex justify-start items-center space-x-6 p-4 mx-2'>
                  <img src={bitcoin} alt="Bitcoin" className='w-10 drop-shadow-xl' />
                  <p className='text-lg'>BTC</p>
                </div>
                
              <p className='text-xl mx-4 mb-4'>{bitcoinData.chartName}</p>

              <div>
                {Object.keys(bitcoinData.bpi).map(currency => (
                  <div key={currency} className='flex justify-between gap-14 items-center font-bold mx-4 mb-2'>
                    <p>{bitcoinData.bpi[currency].rate}</p>
                    <div className='flex justify-center items-center space-x-2'>
                      <p className='text-xs'>{bitcoinData.bpi[currency].code}</p>
                      <p>({currencySymbols[currency]})</p>
                      {/* <p>{bitcoinData.bpi[currency].symbol}</p> */}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className='footer flex justify-between mx-4 m-2 mb-0 py-4'>
                <button className='px-3 py-1 w-[45%] font-medium bg-LightBlue text-white rounded'>Buy</button>
                <button className='px-3 py-1 w-[45%] font-medium bg-[#ff3333] text-white rounded'>Sell</button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default CryptoPrices;