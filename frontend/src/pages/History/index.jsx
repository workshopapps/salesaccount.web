import  {React, useState} from 'react';
import DashBoardHeader from '../../components/DashBoardHeader';
import DashBoardSideBar from '../../components/DashBoardSideBar';

import DisplayDD from '../../components/DropdownButtons/display';
import SortDD from '../../components/DropdownButtons/sort';
import data from './mockdata.json'

const History = () => {
	const [contacts, setContacts] = useState(data);
	return (
		<>
		<DashBoardHeader />
		<div className=" dashboard-main-cont">
			<DashBoardSideBar />
			{/* incoming foolish decison */}
			<div>
		<main className="justify-center mx-auto history-main md:flex w-fill ">
			<div className='pt-[4rem] w-xl md:pl-[10rem] ' >
				<div className='breadcrum text-[#667085] font-normal font-Lexend mb-4'>Dashboard &gt; History  </div>
				
				<h2 className=' font-Lexend text-[#444444] font-bold text-base'>Transaction History</h2>
				
				<div className='flex justify-between pt-2 history-sort'>
					<DisplayDD />

					<SortDD />
				</div>
				<table className=' p-3 bg-[#F9FAFB] w-full '>
				
					<thead>
						<p className="py-5 pl-4 text-base font-semibold text-left sm:text-sm whitespace-nowrap md:text-lg lg:text-xl h-14 top-2 font-Lexend ">Recent Transactions</p>
						<tr className=' bg-[#D1E9FF] '>
							<th className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'>Name</th>
							<th className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'>Description</th>
							<th className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'>Withdrawals</th>
							<th className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'>Deposit</th>
							<th className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'>Date</th>
							<th className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'>Balance</th>
						</tr>
					</thead>

					<tbody>
					{contacts.map((c) => (
						<tr>
							<td className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'> {contacts.Name}</td>
							<td className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'> {contacts.Description}</td>
							<td className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'> {contacts.Withdrawals}</td>
							<td className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'> {contacts.Deposits}</td>
							<td className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'> {contacts.Date}</td>
							<td className='h-5 py-5 pl-4 text-sm font-semibold leading-5 text-left font-Lexend border-spacing-2 w-80'> {contacts.Balance}</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
            </main>
		</div>
			
		</div>

		
	</>
	);
						};

export default History;
