import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo-design/logo.png'
import notifications from '../../logo-design/notification.png'
import moon from '../../logo-design/moon.png'
import view from '../../logo-design/view-grid.png'
import search from '../../logo-design/search.png'
import Sidebar from './UplaodSidebar'
const Navbar = () => {
  return (
    <header className='bg-blue-500 px-7 h-14'>
      <div className='flex items-center justify-between gap-2'>
        <div className='w-12'>
          <img src={logo} alt='logo' />
        </div>

        <form className='flex relative w-full lg:max-w-xl xl:max-w-xl md:max-w-md sm:max-w-sm  '>
          <input
            type='text'
            placeholder='Search'
            className='w-full pl-[30px] py-1 mt-1 rounded'
          />
          <button className='absolute top-3 left-2'>
            <img src={search} alt='' />
          </button>
        </form>

        <nav>
          <ul className='flex items-center justify-between gap-10'>
            <button className='w-9'>
              <img src={notifications} alt='notification' />
            </button>
            <button className='w-9'>
              <img src={moon} alt='moon' />
            </button>
            <button className='w-9'>
              <img src={view} alt='view' />
            </button>
          </ul>
        </nav>
      </div>
      {/* <Sidebar /> */}
    </header>
  )
}
export default Navbar
