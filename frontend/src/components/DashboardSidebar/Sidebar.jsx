import React from 'react';

export default function Sidebar() {
	return (
    <div className="w-1/4 h-screen hidden lg:block relative bg-blue-600 pl-12 pt-8">
      <ul className='flex flex-col absolute gap-4'>
        <li className='text-white px-4 py-2 hover:text-blue-500 hover:bg-white rounded-md'>
          Dashboard
        </li>
        <li className='text-white px-4 py-2 hover:text-blue-500 hover:bg-white rounded-md'>
          Import Data
        </li>
        <li className='text-white px-4 py-2 hover:text-blue-500 hover:bg-white rounded-md'>
          History
        </li>
        <li className='text-white px-4 py-2 hover:text-blue-500 hover:bg-white rounded-md'>
          Settings
        </li>
      </ul>
      <ul className='flex flex-col gap-4 absolute bottom-0 pb-12'>
        <li className='text-white px-4 py-2 hover:text-blue-500 hover:bg-white rounded-md'>
          Privacy
        </li>
        <li className='text-white px-4 py-2 hover:text-blue-500 hover:bg-white rounded-md'>
          Help
        </li>
      </ul>
    </div>  
  )
}
