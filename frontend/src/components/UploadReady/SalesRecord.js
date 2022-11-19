/* eslint-disable no-unused-vars */
import React, {useState}from 'react'
import data from './mockdata.json'
import SearchBar from './searchBar';

import * as XLSX from "xlsx";

const SalesRecords = () => {
    const [contacts, setContacts] = useState( data );

    //lets try this: see below
 /*
    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);
    
          fileReader.onload = (e) => {
            const bufferArray = e.target.result;
    
            const wb = XLSX.read(bufferArray, { type: "buffer" });
    
            const wsname = wb.SheetNames[0];
    
            const ws = wb.Sheets[wsname];
    
            const data = XLSX.utils.sheet_to_json(ws);
    
            resolve(data);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    
        promise.then((d) => {
          setContacts( d );
        });
      }; */
     //the code above should be in the page Upload Data

    return (
        <div className='flex flex-col gap-4 py-4 mt-3'>
           {/*<input
                type="file"
                onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
                }}
            /> */}
            <table className='w-full border-collapse bg-searchBar rounded-xl '> 
                <thead>
                    <tr className='w-full '>
                    <th className=' border-spacing-6'><p className='py-5 pl-4 text-base font-semibold text-left sm:text-sm whitespace-nowrap md:text-lg lg:text-xl h-14 top-2 font-Lexend'>Recent Sales</p></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className='w-fit'><SearchBar /></th>.
                    </tr>
                    <tr className='py-6 bg-thead w-80'>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Item Description</th>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Price</th>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Withdrawals</th>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Quantity</th>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Date</th>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Amount</th>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Tax</th>
                        <th className= 'h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80' >Total</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map(( contacts )=> (
                            <tr className='border-b border-b-search border-opacity-20 '>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-spacing-2 w-80 font-Lexend'>{contacts.itemDescription}</td>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend'>{contacts.Price}</td>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend text-withdraw'>{contacts.Withdrawals}</td>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend'>{contacts.Quantity}</td>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend'>{contacts.Date}</td>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend'>{contacts.Amount}</td>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend'>{contacts.Tax}</td>
                                <td className= 'py-6 pl-4 text-sm font-normal leading-5 text-left border-b-borderB border-spacing-2 w-80 font-Lexend'>{contacts.Total}</td>
                            </tr>
                        )
                    )}
                
                    
                </tbody>
            </table>
        </div>
    )
    }

export default SalesRecords