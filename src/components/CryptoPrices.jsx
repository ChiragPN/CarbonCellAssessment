import React, { useState, useEffect } from 'react';
import bitcoin from '../assets/icons/bitcoin.svg';
import info from '../assets/icons/info.svg';
import axios from 'axios';

const CryptoPrices = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className='container p-4'>
      {/* <h1>CryptoCurrencies</h1> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        bitcoinData && (
          <div className='card w-1/4 border rounded-lg'>
            <ul>
              <div className='bg-zinc-500 rounded-lg m-4 mb-2'>
                <div className='flex flex-col items-center justify-center'>
                  <img src={bitcoin} alt="Bitcoin" className='w-32 m-4' />
                  <p className='text-2xl text-center'>{bitcoinData.chartName}</p>
                  <p className='text-2xl'>(BTC)</p>
                </div>
              </div>
              {Object.keys(bitcoinData.bpi).map(currency => (
                <li key={currency}>
                  <div className='flex justify-between font-bold m-3'>
                    <p>{bitcoinData.bpi[currency].rate}</p>
                    <p>{bitcoinData.bpi[currency].symbol}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className='footer flex justify-between m-3 mb-0 py-4'>
              <button className='px-3 py-1 bg-green-600 text-white rounded'>Trade</button>
              <img src={info} alt="info" className='cursor-pointer' />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CryptoPrices;