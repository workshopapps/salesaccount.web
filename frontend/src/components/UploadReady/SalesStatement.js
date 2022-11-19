import React from 'react'
import SalesRecords from './SalesRecord.js'


export default function SalesStatement() {
  return (
    <div className='m-8 '>
        <div className='inline px-2 py-8 ml-2'>
            <ul className='flex flex-row gap-4 px-2 pt-8 pb-4 text-sm font-normal font-Lexend'>
                <li>Dashboard</li>
                <li> {'>'} </li>
                <li className='font-semibold '>Imported Data</li>
            </ul>
            <div className='left-0 h-10 top-9'>
                <h2 className='h-10 text-xl font-semibold md:text-2xl lg:text-5xl font-Lexend'>Uploaded Sales Records Ready!</h2>
            </div>
            <SalesRecords />
          </div>
           
    </div>
  )
}
