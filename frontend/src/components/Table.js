import React from 'react'
import { data } from './UploadData/data'
import dropDown from '../logo-design/Dropdown.png'
import search from '../logo-design/search.png'
const Table = () => {
  return (
    <section>
      <div className='mt-3 max-w-2xl overflow-x mx-auto bg-white w-full  border border-solid  border-1 border-gray-200 overflow-scroll '>
        <div className='flex px-2 justify-between items-center'>
          <h3>Recent Customers</h3>
          <form className='flex relative   '>
            <input
              type='text'
              placeholder='Search'
              className='bg-gray-200 w-full pl-[30px] py-1 mt-1 rounded'
            />
            <button className='absolute top-3 left-2'>
              <img src={search} alt='' />
            </button>
          </form>
        </div>
        <table className='mx-auto table-auto w-full mt-1 w-full px-4 justify-between gap-2'>
          <tr className='bg-gray-200 capitalize text-left'>
            <th className='py-1 px-4 '>name</th>
            <th>description</th>
            <th>type</th>
            <th>value</th>
            <th>date</th>
            <th>Action</th>
          </tr>
          <tbody className=''>
            {data.map((item, index) => {
              const { name, description, type, value, date } = item
              return (
                <tr
                  className='border border-x-0 border-solid border-1 border-gray-200 px-2'
                  key={index}
                >
                  <td className='py-4 px-4  '>{name}</td>
                  <td>{description}</td>
                  <td>{type}</td>
                  <td>{value}</td>
                  <td>{date}</td>
                  <td>
                    <img src={dropDown} alt='' />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className='mt-3  max-w-2xl mx-auto bg-white w-full   '>
        <h2 className=' text-2xl mt-4'>Next,upload sales Record</h2>
        <form className=' mx-auto mt-3'>
          <div className='flex justify-center items-center  h-32 w-64 px-4 py-4 w-3 border border-2 border-dashed border-black bg-gray-200 mx-auto'>
            <input type='file' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Table
