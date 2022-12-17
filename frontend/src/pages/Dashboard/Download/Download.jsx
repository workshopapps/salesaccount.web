import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
	Stack,
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import axios from 'axios';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import check from '../../../assets/images/DashboardImages/check_circle.png';
import cancel from '../../../assets/images/DashboardImages/cancel.png';
import { useAuth } from '../../../Store/Context';
import ReconcileTable from './table/ReconcileTable';

function Reconcile() {
	const localData = [
		[
			{
				Date: '1/18/2013',
				Description: 'Received from IBM UK',
				Details: 'Credit',
				MoneyOut: '',
				MoneyIn: '1,000,000,000',
				' Balance ': '4,000,000,000',
				Matching: 'Yes',
				Matching_details: [
					{
						ItemNo: '101',
						ItemName: 'Financial Services',
						Description: 'IBM UK',
						Price: '1,000,000,000',
					},
				],
			},
			{
				Date: '2/14/2013',
				Description: 'Payment to Natwest Mtge Payt',
				Details: 'Debit',
				MoneyOut: '300,009,988',
				MoneyIn: '',
				' Balance ': '3,699,990,012',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '2/28/2013',
				Description: 'Payment to UK provident Fund by Draft',
				Details: 'Debit',
				MoneyOut: '200,043,995',
				MoneyIn: '',
				' Balance ': '3,499,946,017',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '3/5/2013',
				Description: 'Direct Debit HSBC UK',
				Details: 'Debit',
				MoneyOut: '980,050,054',
				MoneyIn: '',
				' Balance ': '2,519,895,963',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '3/21/2013',
				Description: 'Received from Microsoft UK',
				Details: 'Credit',
				MoneyOut: '',
				MoneyIn: '300,000,044',
				' Balance ': '2,819,896,007',
				Matching: 'Yes',
				Matching_details: [
					{
						ItemNo: '102',
						ItemName: 'Audit services',
						Description: 'Microsoft UK',
						Price: '300,000,044',
					},
				],
			},
		],
		[
			{
				ItemNo: 103,
				ItemName: 'Security upgrade',
				Description: 'Sort Code 20-10-53',
				Price: ' 500,498,277 ',
			},
			{
				ItemNo: 104,
				ItemName: 'Loan service',
				Description: 'British Petroleum',
				Price: ' 55,049,837 ',
			},
			{
				ItemNo: 105,
				ItemName: 'Audit services',
				Description: 'Shell BP',
				Price: ' 49,920,002 ',
			},
			{
				ItemNo: 106,
				ItemName: 'ATM installation',
				Description: 'HSBC Dubai',
				Price: ' 100,004,892 ',
			},
			{
				ItemNo: 107,
				ItemName: 'Misc',
				Description: 'Various Payment',
				Price: ' 320,490,287 ',
			},
			{
				ItemNo: 108,
				ItemName: 'Security upgrade',
				Description: 'HMRC',
				Price: ' 200,000,034 ',
			},
			{
				ItemNo: 109,
				ItemName: 'Financial Services',
				Description: 'Tebay Trading Co.',
				Price: ' 42,452,466 ',
			},
		],
	];

	// const localData3 = [
	// 	[
	// 		{
	// 			Date: '1/18/2013',
	// 			Description: 'Received from IBM UK',
	// 			Details: 'Credit',
	// 			MoneyOut: '',
	// 			MoneyIn: '1,000,000,000',
	// 			' Balance ': '4,000,000,000',
	// 			Matching: 'Yes',
	// 			Matching_details: [
	// 				{
	// 					ItemNo: '101',
	// 					ItemName: 'Financial Services',
	// 					Description: 'IBM UK',
	// 					Price: '1,000,000,000',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			Date: '2/14/2013',
	// 			Description: 'Payment to Natwest Mtge Payt',
	// 			Details: 'Debit',
	// 			MoneyOut: '300,009,988',
	// 			MoneyIn: '',
	// 			' Balance ': '3,699,990,012',
	// 			Matching: 'No',
	// 			Matching_details: [],
	// 		},
	// 		{
	// 			Date: '2/28/2013',
	// 			Description: 'Payment to UK provident Fund by Draft',
	// 			Details: 'Debit',
	// 			MoneyOut: '200,043,995',
	// 			MoneyIn: '',
	// 			' Balance ': '3,499,946,017',
	// 			Matching: 'No',
	// 			Matching_details: [],
	// 		},
	// 		{
	// 			Date: '3/5/2013',
	// 			Description: 'Direct Debit HSBC UK',
	// 			Details: 'Debit',
	// 			MoneyOut: '980,050,054',
	// 			MoneyIn: '',
	// 			' Balance ': '2,519,895,963',
	// 			Matching: 'No',
	// 			Matching_details: [],
	// 		},
	// 		{
	// 			Date: '3/21/2013',
	// 			Description: 'Received from Microsoft UK',
	// 			Details: 'Credit',
	// 			MoneyOut: '',
	// 			MoneyIn: '300,000,044',
	// 			' Balance ': '2,819,896,007',
	// 			Matching: 'Yes',
	// 			Matching_details: [
	// 				{
	// 					ItemNo: '102',
	// 					ItemName: 'Audit services',
	// 					Description: 'Microsoft UK',
	// 					Price: '300,000,044',
	// 				},
	// 			],
	// 		},
	// 	],
	// 	[
	// 		{
	// 			ItemNo: 103,
	// 			ItemName: 'Security upgrade',
	// 			Description: 'Sort Code 20-10-53',
	// 			Price: ' 500,498,277 ',
	// 		},
	// 		{
	// 			ItemNo: 104,
	// 			ItemName: 'Loan service',
	// 			Description: 'British Petroleum',
	// 			Price: ' 55,049,837 ',
	// 		},
	// 		{
	// 			ItemNo: 105,
	// 			ItemName: 'Audit services',
	// 			Description: 'Shell BP',
	// 			Price: ' 49,920,002 ',
	// 		},
	// 		{
	// 			ItemNo: 106,
	// 			ItemName: 'ATM installation',
	// 			Description: 'HSBC Dubai',
	// 			Price: ' 100,004,892 ',
	// 		},
	// 		{
	// 			ItemNo: 107,
	// 			ItemName: 'Misc',
	// 			Description: 'Various Payment',
	// 			Price: ' 320,490,287 ',
	// 		},
	// 		{
	// 			ItemNo: 108,
	// 			ItemName: 'Security upgrade',
	// 			Description: 'HMRC',
	// 			Price: ' 200,000,034 ',
	// 		},
	// 		{
	// 			ItemNo: 109,
	// 			ItemName: 'Financial Services',
	// 			Description: 'Tebay Trading Co.',
	// 			Price: ' 42,452,466 ',
	// 		},
	// 	],
	// ];

	const headerKeys = Object.keys(Object.assign({}, ...localData));
	const [userInput, setUserInput] = useState('');
	const { removeItem, localData3 } = useAuth();

	const navigate = useNavigate();

	const reconcileNewFile = () => {
		removeItem();
		navigate('/dashboard/upload');
	};

	// Search Function
	const filteredResult = localData?.filter((table) =>
		Object.keys(table).some((key) => {
			if (
				table?.[key]
					?.toString()
					?.toLowerCase()
					?.includes(userInput.trim().toLowerCase())
			) {
				return true;
			}
			return false;
		})
	);

	return (
		<>
			<div className="flex">
				<div
					onClick={reconcileNewFile}
					role="presentation"
					className=" text-slate-500  font-semibold hover:text-black"
				>
					<Link to="/dashboard/upload">Upload</Link>
				</div>

				<NavigateNextIcon />
				<div className="text-slate-500 font-semibold hover:text-black">
					<Link to="/dashboard/reconcile"> Reconcile</Link>
				</div>
				<NavigateNextIcon />
				<div className=" text-black-600 font-semibold ">Download</div>
			</div>

			<div className="w-full lg:bg-[#F9FAFB] py-[1em] md:p-[4em] mt-[4em] lg:mt-[7em] ">
				{/* Sort Table and Search */}
				<div className="flex justify-between items-center mb-4 ">
					<div className="flex justify-between w-[55%]  md:w-[40%]   lg:w-[20%] border border-[#2E90FA] text-xs md:text-sm">
						<div className="font-medium  py-2 px-2 md:px-3  active:bg-[#2E90FA] active:text-white rounded-sm">
							All Data
						</div>
						<div className="font-medium py-2 px-2 md:px-4 border-x active:bg-[#2E90FA] active:text-white rounded-sm">
							All Data
						</div>
						<div className="font-medium  py-2 px-2 md:px-3 active:bg-[#2E90FA] active:text-white rounded-sm">
							All Data
						</div>
					</div>
					<input
						className="w-[35%] md:w-[30%] lg:w-[20%] border outline-none  rounded-md px-2 py-1"
						type="search"
						value={userInput}
						onChange={(e) => setUserInput(e.target.value)}
						placeholder="Search"
					/>
				</div>

				{/* Api Table */}
				<div className="lg:flex items-center justify-center w-full ">
					{/* Table 1 */}
					{/* {Boolean(localData.length) && localData && (
						<div
							className="overflow-scroll mb-[5em] lg:mb-0  bg-[#F9FAFB] lg:w-[50%]"
							id="pagetodownload"
						>
							<table className="table-auto w-full text-xs md:text-base">
								<thead className="bg-[#D1E9FF] py-2 my-2">
									<tr>
										{headerKeys.map((key) => (
											<th className="py-[1em] md:py-[1.5em] pl-8 text-left">
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{filteredResult?.map((sData) => (
										<tr className="py-2 pl-8">
											{Object.values(sData).map((iData) => (
												<td className="text-sm pt-5 pb-3 md:py-10 pl-8 border-b border-[#ccc] ">
													{iData}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)} */}

					{/* Table 2 */}
					{/* {Boolean(localData.length) && localData && (
						<div
							className="overflow-scroll  bg-[#F9FAFB] lg:w-[50%] "
							id="pagetodownload"
						>
							<table className="table-auto w-full text-xs md:text-base">
								<thead className="bg-[#D1E9FF] py-2 my-2">
									<tr>
										{headerKeys.map((key) => (
											<th className="py-[1em] md:py-[1.5em] pl-8 text-left">
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{localData?.map((sData) => (
										<tr className="py-2 pl-8">
											{Object.values(sData).map((iData) => (
												<td className="text-sm pt-5 pb-3 md:py-10 pl-8 border-b border-[#ccc] ">
													{iData}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)} */}
				</div>
				{/* Match Guide */}
				<div className="flex items-center font-medium mt-[2em] text-xs">
					<div className="flex items-center bg-green-100 text-green-600 px-4 py-2 m-2">
						<img
							src={check}
							alt="check"
							className="w-[30px] h-[30px] object-contain mr-1"
						/>
						<p>Matched Items</p>
					</div>
					<div className="flex items-center bg-red-100 text-red-600 px-4 py-2 m-2">
						<img
							src={cancel}
							alt="cancel"
							className="w-[30px] h-[30px] object-contain mr-1"
						/>
						<p>Unmatched Items</p>
					</div>
				</div>
			</div>
			{/* table */}
			<div>
				<ReconcileTable tableData={localData3[0]} />
			</div>
			{/* Reconcile Button */}
			<div className="w-full flex justify-center mt-10">
				<button
					// onClick={() => handleSubmit()}
					className="bg-[#2E90FA] active:bg-[#1849A9] text-white px-[1em] md:px-[2em] py-[0.8em] rounded-md mx-2"
					type="button"
				>
					Download File
				</button>
				<button
					onClick={() => reconcileNewFile()}
					className="bg-[#F9FAFB] text-[#2E90FA] active:bg-[#e8e8e9] border border-[#2E90FA] px-[1em] md:px-[2em] py-[0.8em] rounded-md"
					type="button"
				>
					Reconcile New File
				</button>
			</div>
		</>
	);
}

export default Reconcile;
