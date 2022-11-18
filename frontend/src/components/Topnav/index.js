import React from 'react';
import Menu from '../assets/menu.png';
import AccountPal from '../assets/accountPal.png';
import Search from '../assets/Search.png';

export const Topnav = () => {
  return (
    <header className='bg-blue-500 w-full py-6 px-24'>
      <img src={Menu} alt='menu' />
      <img src={AccountPal} alt='logo' />

      <div>
        <input placeholder='Search' />
        <img src={Search} alt='Search'/>
      </div>
    </header>
  );
};
