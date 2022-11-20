import React from 'react'
import RecentTransactions from './RecentTransactions.js'


export default function AcctStatement() {
  return (
    <div className='m-8 '>
        <div className='inline px-2 py-8 ml-2'>
            <div className='left-0 h-10 top-9'>
                <h2 className='h-10 text-xl font-semibold md:text-2xl lg:text-5xl font-Lexend'>Uploaded Account Statement Ready!</h2>
            </div>
            <RecentTransactions />
          </div>
           
    </div>
  )
}
