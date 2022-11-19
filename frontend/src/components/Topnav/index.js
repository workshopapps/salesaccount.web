import React from 'react';
import Menu from '../assets/menu.png';
import AccountPal from '../assets/accountPal.png';
import Search from '../assets/Search.png';
import Bell from '../assets/bell.png';
import Moon from '../assets/moon.png';
import Grid from '../assets/grid-view.png';

export const Topnav = () => {
  return (
    <header className='bg-blue-500 w-full py-6 px-24 flex justify-between items-center shadow-3xl'>
      <div className=' flex justify-between items-center'>
        <div className='w-12'>
          <img src={Menu} alt='menu' />
        </div>
        <div className='hidden md:block'>
          <img src={AccountPal} alt='logo' />
        </div>
      </div>

      <div className='flex justify-between w-3/4 mr-11'>
        <div className='relative md:flex items-center hidden'>
          <span className='absolute left-2'>
            <img src={Search} alt='Search' />
          </span>
          <input
            placeholder='Search'
            className='bg-grey-500 rounded-lg w-full pl-8 h-11'
          />
        </div>

        <div className='flex w-36 ml-auto'>
          <div className='bg-white-500  w-10 h-10 flex mr-2 items-center justify-center rounded-lg'>
            <img src={Bell} alt='Bell icon ' />
          </div>
          <div className='bg-white-500 w-10 h-10 flex mr-2 items-center justify-center rounded-lg'>
            <img src={Moon} alt='Moon icon ' />
          </div>
          <div className='bg-white-500 w-10 h-10 flex mr-2 items-center justify-center rounded-lg'>
            <img src={Grid} alt='Grid icon' />
          </div>
        </div>
      </div>
    </header>
  );
};
