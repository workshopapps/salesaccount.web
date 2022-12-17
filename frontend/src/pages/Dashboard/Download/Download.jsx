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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import check from '../../../assets/images/DashboardImages/check_circle.png';
import cancel from '../../../assets/images/DashboardImages/cancel.png';
import { useAuth } from '../../../Store/Context';
import ReconcileTable from './table/ReconcileTable';

function Reconcile() {
	const localData = [
		[
			{
				Date: '1/18/2013',
				Description: 'IBM UK',
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
				Description: 'Mtge Payt',
				Details: 'Debit',
				MoneyOut: '300,009,988',
				MoneyIn: '',
				' Balance ': '3,699,990,012',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '2/28/2013',
				Description: 'UK Draft',
				Details: 'Debit',
				MoneyOut: '200,043,995',
				MoneyIn: '',
				' Balance ': '3,499,946,017',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '3/5/2013',
				Description: 'HSBC UK',
				Details: 'Debit',
				MoneyOut: '980,050,054',
				MoneyIn: '',
				' Balance ': '2,519,895,963',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '3/21/2013',
				Description: 'Microsoft',
				Details: 'Credit',
				MoneyOut: '',
				MoneyIn: '300,000,044',
				' Balance ': '2,819,896,007',
				Matching: 'Yes',
				Matching_details: [
					{
						'Item no ': '102',
						'Item Name': 'Audit services',
						Description: 'Microsoft',
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

	const localData3 = [
		[
			[
				{
					Date: '1/18/2013',
					Description: 'Received from IBM UK',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 1,000,000,000 ',
					' Balance ': ' 4,000,000,000 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '101',
							'Item Name': 'Financial Services',
							Description: 'IBM UK',
							Price: ' 1,000,000,000 ',
						},
					],
				},
				{
					Date: '2/14/2013',
					Description: 'Payment to Natwest Mtge Payt',
					Details: 'Debit',
					' Money out ': ' 300,009,988 ',
					' Money in ': '',
					' Balance ': ' 3,699,990,012 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '2/28/2013',
					Description: 'Payment to UK provident Fund by Draft',
					Details: 'Debit',
					' Money out ': ' 200,043,995 ',
					' Money in ': '',
					' Balance ': ' 3,499,946,017 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '3/5/2013',
					Description: 'Direct Debit HSBC UK',
					Details: 'Debit',
					' Money out ': ' 980,050,054 ',
					' Money in ': '',
					' Balance ': ' 2,519,895,963 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '3/21/2013',
					Description: 'Received from Microsoft UK',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 300,000,044 ',
					' Balance ': ' 2,819,896,007 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '102',
							'Item Name': 'Audit services',
							Description: 'Microsoft UK',
							Price: ' 300,000,044 ',
						},
					],
				},
				{
					Date: '3/29/2013',
					Description: 'Transfer from Sort Code 20-10-53',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 500,498,277 ',
					' Balance ': ' 3,320,394,284 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '103',
							'Item Name': 'Security upgrade',
							Description: 'Sort Code 20-10-53',
							Price: ' 500,498,277 ',
						},
					],
				},
				{
					Date: '5/8/2013',
					Description: 'Payment to Exxon Mobil Unlimited',
					Details: 'Debit',
					' Money out ': ' 100,029,847 ',
					' Money in ': '',
					' Balance ': ' 3,220,364,437 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '5/15/2013',
					Description: 'Received from British Petroleum',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 55,049,837 ',
					' Balance ': ' 3,275,414,274 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '104',
							'Item Name': 'Loan service',
							Description: 'British Petroleum',
							Price: ' 55,049,837 ',
						},
					],
				},
				{
					Date: '5/29/2013',
					Description: 'Payment to Board of Internal',
					Details: 'Debit',
					' Money out ': ' 5,030,498 ',
					' Money in ': '',
					' Balance ': ' 3,270,383,776 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '7/2/2013',
					Description: 'Direct Debit HSBC China',
					Details: 'Debit',
					' Money out ': ' 10,098,009 ',
					' Money in ': '',
					' Balance ': ' 3,260,285,767 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '8/20/2013',
					Description: 'Received from Shell BP',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 49,920,002 ',
					' Balance ': ' 3,310,205,769 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '105',
							'Item Name': 'Audit services',
							Description: 'Shell BP',
							Price: ' 49,920,002 ',
						},
					],
				},
				{
					Date: '9/13/2013',
					Description: 'Drawn on Cho No. 448960',
					Details: 'Debit',
					' Money out ': ' 28,000,492 ',
					' Money in ': '',
					' Balance ': ' 3,282,205,277 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '10/9/2013',
					Description: 'Transfer from HSBC Dubai',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 100,004,892 ',
					' Balance ': ' 3,382,210,169 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '106',
							'Item Name': 'ATM installation',
							Description: 'HSBC Dubai',
							Price: ' 100,004,892 ',
						},
					],
				},
				{
					Date: '2/7/2014',
					Description: 'OVO Energy',
					Details: 'Debit',
					' Money out ': ' 250,000,563 ',
					' Money in ': '',
					' Balance ': ' 3,132,209,606 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '2/8/2014',
					Description: 'Various Payment',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 320,490,287 ',
					' Balance ': ' 3,452,699,893 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '107',
							'Item Name': 'Misc',
							Description: 'Various Payment',
							Price: ' 320,490,287 ',
						},
					],
				},
				{
					Date: '2/9/2014',
					Description: 'HMRC',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 200,000,034 ',
					' Balance ': ' 3,652,699,927 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '108',
							'Item Name': 'Security upgrade',
							Description: 'HMRC',
							Price: ' 200,000,034 ',
						},
					],
				},
				{
					Date: '2/10/2014',
					Description: 'DVLA',
					Details: 'Debit',
					' Money out ': ' 45,000,434 ',
					' Money in ': '',
					' Balance ': ' 3,607,699,493 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '2/20/2014',
					Description: 'Amazon',
					Details: 'Debit',
					' Money out ': ' 1,320,789 ',
					' Money in ': '',
					' Balance ': ' 3,606,378,704 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
				{
					Date: '2/21/2014',
					Description: 'Tebay Trading Co.',
					Details: 'Credit',
					' Money out ': '',
					' Money in ': ' 42,452,466 ',
					' Balance ': ' 3,648,831,170 ',
					Matching: 'Yes',
					Matching_details: [
						{
							'Item no ': '109',
							'Item Name': 'Financial Services',
							Description: 'Tebay Trading Co.',
							Price: ' 42,452,466 ',
						},
					],
				},
				{
					Date: '2/22/2014',
					Description: 'Morrisons Petrol',
					Details: 'Debit',
					' Money out ': ' 54,400 ',
					' Money in ': '',
					' Balance ': ' 3,648,776,770 ',
					Matching: 'No',
					Matching_details: [
						{
							'Item no ': '',
							'Item Name': '',
							Description: '',
							Price: '',
						},
					],
				},
			],
			[],
		],
	];

	const headerKeys = Object.keys(Object.assign({}, ...localData));
	const [userInput, setUserInput] = useState('');
	const { removeItem } = useAuth();

	const navigate = useNavigate();

	const tableLeft = [];
	const tableRight1 = [];
	const tableRight2 = [];

	console.log('LoccalDta3', localData3[0][0]);

	localData3[0][0]?.map((item) => tableRight1.push(item.Matching_details));

	localData3[0][0]?.map((item) => {
		delete item?.Matching_details;
		return tableLeft?.push(item);
	});

	// eslint-disable-next-line
	tableRight1?.map((item) => {
		if (item?.length === 0) {
			item?.push({});
		}
		return tableRight2?.push(item);
	});

	const tableRight = tableRight2?.flat();

	console.log('Table Right: ', tableRight);

	// tableRight.map(item => item.map(iItem => )

	console.log('Formatted Table11111: ', tableRight?.flat());

	const leftHeaderKeys = Object.keys(Object.assign({}, ...tableLeft));
	const rightHeaderKeys = Object.keys(Object.assign({}, ...tableRight));

	const reconcileNewFile = () => {
		removeItem();
		navigate('/dashboard/upload');
	};

	const isEmpty = (obj) => {
		if (
			obj === null ||
			obj === undefined ||
			Array.isArray(obj) ||
			typeof obj !== 'object'
		) {
			return true;
		}
		return Object.getOwnPropertyNames(obj).length === 0;
	};

	// Search Function
	const filteredResult = tableLeft?.filter((table) =>
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

	// const filteredResult2 = tableRight?.filter((table) =>
	// 	Object.keys(table).some((key) => {
	// 		if (
	// 			table?.[key]
	// 				?.toString()
	// 				?.toLowerCase()
	// 				?.includes(userInput.trim().toLowerCase())
	// 		) {
	// 			return true;
	// 		}
	// 		return false;
	// 	})
	// );

	return (
		<>
			{/* Breadcrumbs here */}
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
			{/* Breadcrumbs end */}

			{/* Hero like heading tab */}
			<div className="my-8">
				<h1 className="text-3xl font-bold my-3">Here’s your reconciled data</h1>
				<p className="lg:w-1/2 lg:text-lg font-light">
					Disclaimer: This might not be 100% accurate as the results are solely
					dependent on the data you have provided{' '}
				</p>
			</div>

			<div className="w-full lg:bg-[#F9FAFB] py-[1em] md:p-[4em] mt-[4em] lg:mt-[7em] ">
				{/* Sort Table and Search */}
				<div className="flex justify-between items-center bg-white border border-slate-700 p-4 rounded-lg mb-4 ">
					<div className="flex justify-between  border border-[#2E90FA] rounded-lg text-xs md:text-sm">
						<div className="font-medium cursor-pointer hover:bg-[#2E90FA] hover:text-white  py-2 px-2 md:px-3  active:bg-[#2E90FA] active:text-white rounded-sm">
							All Data
						</div>
						<div className="font-medium cursor-pointer hover:bg-[#2E90FA] hover:text-white py-2 px-2 md:px-4 border-x active:bg-[#2E90FA] active:text-white rounded-sm">
							Matched
						</div>
						<div className="font-medium cursor-pointer hover:bg-[#2E90FA] hover:text-white  py-2 px-2 md:px-3 active:bg-[#2E90FA] active:text-white rounded-sm">
							No Matched
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
				{/* Search and sort heading ends  */}

				{/* Search components  */}
				<div className="w-full flex justify-between items-center border p-2  rounded-md bg-[#F9FAFB;] ">
					<input
						className=" w-[50%] md:w-[60%] lg:w-[30%] px-2 py-2 md:px-4 md:text-sm outline-none border rounded-md text-xs bg-transparent "
						type="serach"
						placeholder="Find possible Match"
					/>
					<div className="w-[40%] md:w-[35%] flex justify-between items-center border rounded-md  px-2 py-1 md:py-2 md:px-4 text-xs md:text-sm">
						<p>Select to Match</p>
						<ExpandMoreIcon />
					</div>
				</div>
				{/* Search component ends */}

				{/* Api Table */}
				<div className="lg:flex  items-start justify-between w-full ">
					{/* Table 1 */}
					{Boolean(tableLeft?.length) && tableLeft && (
						<div
							className="overflow-scroll mb-[5em] lg:mb-0  bg-[#F9FAFB] lg:w-[50%]"
							id="pagetodownload"
						>
							<h1 className="text-center py-4 border border-slate-300  font-bold mb-2 ">
								ACCOUNT STATEMENT
							</h1>
							<table className="overflow-scroll border-separate border-spacing-y-2 table-auto w-full text-xs md:text-base">
								<thead className="bg-[#F9FAFB] py-2 my-2">
									<tr>
										{leftHeaderKeys?.map((key) => (
											<th className="py-[1em] text-xs md:py-[1.5em] pl-8 text-left">
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{filteredResult?.map((sData) => (
										<tr
											className="pl-8"
											style={{
												background:
													sData.Matching === 'Yes' ? '#B7EDD6' : '#F1AAA5',
											}}
										>
											{Object.values(sData).map((iData) => (
												<td className=" text-ellipsis text-sm pt-5 pb-3 md:py-10 pl-8 border-b border-[#ccc] ">
													{iData}
													{/* if iData === "Yes", render the green button, if no render red one */}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* Table 2 */}
					{Boolean(tableRight?.length) && tableRight && (
						<div
							className="overflow-scroll mb-[5em] lg:mb-0  bg-[#F9FAFB] lg:w-[50%]"
							id="pagetodownload"
						>
							<h1 className="text-center py-4 border border-slate-300 bg-slate-200 font-bold mb-2 ">
								SALES RECORD
							</h1>
							<table className="overflow-scroll table-auto w-full border-separate border-spacing-y-2 text-xs md:text-base">
								<thead className="bg-[#F9FAFB] py-2 my-2">
									<tr>
										{rightHeaderKeys?.map((key) => (
											<th className="py-[1em] text-xs md:py-[1.5em] pl-8 text-left">
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{tableRight?.map((sData) => (
										<tr
											className="py-2 pl-8"
											style={{
												background:
													Object.values(sData)[0]?.trim().length > 0
														? '#B7EDD6'
														: '#F1AAA5',
											}}
										>
											{Object.values(sData)?.map((iData) => (
												<td className="text-sm pt-5 pb-3 md:py-10 pl-8 border-b border-[#ccc]">
													{iData}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
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
