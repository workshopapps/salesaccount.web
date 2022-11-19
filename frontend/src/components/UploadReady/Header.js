import React from 'react'
import Accpal from '../assets/Accpal.svg'
import SearchBar from './searchBar'

function Header() {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between py-6 px-3vw md:px-5vw lg:px-7vw drop-shadow-md bg-primary'>
        <div className='top-6 w-fit h-11 left-6 right-6'>
            <div className='flex items-center justify-between text-2xl font-normal cursor-pointer text-accpal font-Lexend'>
                <span className='mr-1 text-3xl'>
                   <img src={Accpal} alt='logo' /> 
                </span>
                AccountPal
                <SearchBar />
                
            </div>
            
        </div>

    </div>
  )
}

export default Header 