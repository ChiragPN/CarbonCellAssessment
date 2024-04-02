import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import hamburger from '../assets/icons/hamburger.svg';
import search from '../assets/icons/search.svg';
import home from '../assets/icons/home.svg';
import organisation from '../assets/icons/organisation.svg';
import asset from '../assets/icons/asset.svg';
import graph from '../assets/icons/graph.svg';
import history from '../assets/icons/history.svg';
import wallet from '../assets/icons/wallet.svg';
import notification from '../assets/icons/notification.svg';
import support from '../assets/icons/support.svg';
import settings from '../assets/icons/settings.svg';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [extended, setExtended] = useState(true)

  return (
    <div className='md:max-w-auto max-h-auto bg-CustomGray pl-2 pr-4 py-6 rounded-tr-xl rounded-br-xl'>
      <div className='flex justify-between items-center'>
        {extended ? <img src={logo} alt="Logo" /> : null}
        <img src={hamburger} alt="Hamburger" className='cursor-pointer w-6 mx-2' onClick={() => setExtended(prev => !prev)}/>
      </div>

      {extended ? <div className="mt-6 p-2 gap-6 bg-DarkGray rounded-md w-full">
        <div className='flex justify-around items-center text-white'>
          <img src={search} alt="Search" className='cursor-pointer'/>
          <input className='outline-none bg-transparent w-[80%] text-white' placeholder='Search' type="text" />
        </div>
      </div> : null}

      <div className='main flex flex-col justify-start items-start space-y-16'>
        <div className="navigation space-y-5 mx-2">
          <div className='nav flex items-center gap-4 mt-8'>
            <img src={home} alt="Home" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/'><p className='cursor-pointer active:text-LightBlue'>Home</p></NavLink> : null}
          </div>

          <div className='nav flex items-center gap-4'>
            <img src={organisation} alt="" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/organisation'><p className='cursor-pointer active:text-LightBlue'>Organisation</p></NavLink> : null}
          </div>

          <div className='nav flex items-center gap-4'>
            <img src={asset} alt="Asset" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/assets'><p className='cursor-pointer active:text-LightBlue'>Assets</p></NavLink> : null}
          </div>

          <div className='nav flex items-center gap-4'>
            <img src={graph} alt="Trade" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/trade'><p className='cursor-pointer active:text-LightBlue'>Trade</p></NavLink> : null}
          </div>
                
          <div className="nav flex items-center gap-4">
            <img src={history} alt="History" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/history'><p className='cursor-pointer active:text-LightBlue'>History</p></NavLink> : null}
          </div>

          <div className="nav flex items-center gap-4">
            <img src={wallet} alt="Wallet" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/wallet'><p className='cursor-pointer active:text-LightBlue'>Wallet</p></NavLink> : null}
          </div>
        </div>

        <div className="footer space-y-4 mx-2">
          <div className="flex items-center gap-4">
            <img src={notification} alt="Notification" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/notifications'><p className='cursor-pointer'>Notifications</p></NavLink> : null}
          </div>

          <div className="flex items-center gap-4">
            <img src={support} alt="Support" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/support'><p className='cursor-pointer'>Support</p></NavLink> : null}
          </div>

          <div className="flex gap-4">
            <img src={settings} alt="Settings" className='w-6 cursor-pointer'/>
            {extended ? <NavLink to='/settings'><p className='cursor-pointer'>Settings</p></NavLink> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;