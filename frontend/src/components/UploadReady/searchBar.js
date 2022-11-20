import React from 'react'
import { FaSearch } from 'react-icons/fa'


function SearchBar() {
  return (
    <div className='flex justify-between w-48 sm:w-fit md:w-fit lg:w-fit '>
        <form className='w-full max-w-md ' action=''>

          <div className='relative flex items-center text-search ' >
          <FaSearch className='absolute w-5 h-5 ml-3' />
                <input type="text"
                    name='search'
                    placeholder='search'
                    aria-label='search'
                    className='w-full py-3 pl-10 pr-3 font-light text-black h-11 placeholder-search rounded-xl ' /> 
          </div>
        </form>
    </div>
  )
}

export default SearchBar