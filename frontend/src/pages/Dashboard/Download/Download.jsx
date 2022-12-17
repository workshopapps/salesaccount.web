import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import check from '../../../assets/images/DashboardImages/check_circle.png';
import cancel from '../../../assets/images/DashboardImages/cancel.png';
import { useAuth } from '../../../Store/Context';

function Reconcile() {
	const localData = [
		[
			{
				Date: '1/18/2013',
				Description: 'IBM UK',
				Details: 'Credit',
				' Money out ': '',
				' Money in ': '1,000,000,000',
				' Balance ': '4,000,000,000',
				Matching: 'Yes',
				Matching_details: [
					{
						'Item no ': '101',
						'Item Name': 'Financial Services',
						Description: 'IBM UK',
						Price: '1,000,000,000',
					},
				],
			},
			{
				Date: '2/14/2013',
				Description: 'Mtge Payt',
				Details: 'Debit',
				' Money out ': '300,009,988',
				' Money in ': '',
				' Balance ': '3,699,990,012',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '2/28/2013',
				Description: 'UK Draft',
				Details: 'Debit',
				' Money out ': '200,043,995',
				' Money in ': '',
				' Balance ': '3,499,946,017',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '3/5/2013',
				Description: 'HSBC UK',
				Details: 'Debit',
				' Money out ': '980,050,054',
				' Money in ': '',
				' Balance ': '2,519,895,963',
				Matching: 'No',
				Matching_details: [],
			},
			{
				Date: '3/21/2013',
				Description: 'Microsoft',
				Details: 'Credit',
				' Money out ': '',
				' Money in ': '300,000,044',
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
				'Item no ': 103,
				'Item Name': 'Security upgrade',
				Description: 'Sort Code 20-10-53',
				Price: ' 500,498,277 ',
			},
			{
				'Item no ': 104,
				'Item Name': 'Loan service',
				Description: 'British Petroleum',
				Price: ' 55,049,837 ',
			},
			{
				'Item no ': 105,
				'Item Name': 'Audit services',
				Description: 'Shell BP',
				Price: ' 49,920,002 ',
			},
			{
				'Item no ': 106,
				'Item Name': 'ATM installation',
				Description: 'HSBC Dubai',
				Price: ' 100,004,892 ',
			},
			{
				'Item no ': 107,
				'Item Name': 'Misc',
				Description: 'Various Payment',
				Price: ' 320,490,287 ',
			},
			{
				'Item no ': 108,
				'Item Name': 'Security upgrade',
				Description: 'HMRC',
				Price: ' 200,000,034 ',
			},
			{
				'Item no ': 109,
				'Item Name': 'Financial Services',
				Description: 'Tebay Trading Co.',
				Price: ' 42,452,466 ',
			},
		],
	];

	const localData3 = [
		[
			{
				Date: '1/18/2013',
				Description: 'IBM UK',
				Details: 'Credit',
				' Money out ': '',
				' Money in ': '1,000,000,000',
				' Balance ': '4,000,000,000',
				Matching: 'Yes',
				Matching_details: [
					{
						'Item no ': '101',
						'Item Name': 'Financial Services',
						Description: 'IBM UK',
						Price: '1,000,000,000',
					},
				],
			},
			{
				Date: '2/14/2013',
				Description: 'Mtge Payt',
				Details: 'Debit',
				' Money out ': '300,009,988',
				' Money in ': '',
				' Balance ': '3,699,990,012',
				Matching: 'No',
				Matching_details: [
					{
						'Item no ': ' ',
						'Item Name': ' ',
						Description: ' ',
						Price: ' ',
					},
				],
			},
			{
				Date: '2/28/2013',
				Description: 'UK Draft',
				Details: 'Debit',
				' Money out ': '200,043,995',
				' Money in ': '',
				' Balance ': '3,499,946,017',
				Matching: 'No',
				Matching_details: [
					{
						'Item no ': ' ',
						'Item Name': ' ',
						Description: ' ',
						Price: ' ',
					},
				],
			},
			{
				Date: '3/5/2013',
				Description: 'HSBC UK',
				Details: 'Debit',
				' Money out ': '980,050,054',
				' Money in ': '',
				' Balance ': '2,519,895,963',
				Matching: 'No',
				Matching_details: [
					{
						'Item no ': ' ',
						'Item Name': ' ',
						Description: ' ',
						Price: ' ',
					},
				],
			},
			{
				Date: '3/21/2013',
				Description: 'Microsoft',
				Details: 'Credit',
				' Money out ': '',
				' Money in ': '300,000,044',
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
				'Item no ': 103,
				'Item Name': 'Security upgrade',
				Description: 'Sort Code 20-10-53',
				Price: ' 500,498,277 ',
			},
			{
				'Item no ': 104,
				'Item Name': 'Loan service',
				Description: 'British Petroleum',
				Price: ' 55,049,837 ',
			},
			{
				'Item no ': 105,
				'Item Name': 'Audit services',
				Description: 'Shell BP',
				Price: ' 49,920,002 ',
			},
			{
				'Item no ': 106,
				'Item Name': 'ATM installation',
				Description: 'HSBC Dubai',
				Price: ' 100,004,892 ',
			},
			{
				'Item no ': 107,
				'Item Name': 'Misc',
				Description: 'Various Payment',
				Price: ' 320,490,287 ',
			},
			{
				'Item no ': 108,
				'Item Name': 'Security upgrade',
				Description: 'HMRC',
				Price: ' 200,000,034 ',
			},
			{
				'Item no ': 109,
				'Item Name': 'Financial Services',
				Description: 'Tebay Trading Co.',
				Price: ' 42,452,466 ',
			},
		],
	];

	const headerKeys = Object.keys(Object.assign({}, ...localData));
	const [userInput, setUserInput] = useState('');
	const { removeItem } = useAuth();

	const navigate = useNavigate();

	const tableLeft = [];
	const tableRight1 = [];
	const tableRight2 = [];

	localData3[0].map((item) => tableRight1.push(item.Matching_details));

	localData3[0].map((item) => {
		delete item.Matching_details;
		return tableLeft.push(item);
	});

	// eslint-disable-next-line
	tableRight1.map((item) => {
		if (item.length === 0) {
			item.push({});
		}
		return tableRight2.push(item);
	});

	const tableRight = tableRight2.flat();

	console.log('Table Right: ', tableRight);

	// tableRight.map(item => item.map(iItem => )

	console.log('Formatted Table11111: ', tableRight.flat());

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

	const filteredResult2 = tableRight?.filter((table) =>
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
			<div className='my-8'>
				<h1 className='text-3xl font-bold my-3'>Here’s your reconciled data</h1>
				<p className='lg:w-1/2 lg:text-lg font-light'>Disclaimer: This might not be 100% accurate as the results are solely dependent on the data you have provided </p>
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
					{Boolean(tableLeft.length) && tableLeft && (
						<div
							className="overflow-scroll mb-[5em] lg:mb-0  bg-[#F9FAFB] lg:w-[50%]"
							id="pagetodownload"
						>
							<h1 className="text-center py-4 border border-slate-300  font-bold mb-2 ">
								ACCOUNT STATEMENT
							</h1>
							<table className="overflow-scroll border-separate border-spacing-y-2 table-auto w-full text-xs md:text-base">
								<thead className="bg-[#D1E9FF] py-2 my-2">
									<tr>
										{leftHeaderKeys.map((key) => (
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
												<td
													style={
														{
															// background: iData.Matching_details === "Yes" ? "black" : "blue"
														}
													}
													className=" text-ellipsis text-sm pt-5 pb-3 md:py-10 pl-8 border-b border-[#ccc] "
												>
													{iData}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* Table 2 */}
					{Boolean(tableRight.length) && tableRight && (
						<div
							className="overflow-scroll mb-[5em] lg:mb-0  bg-[#F9FAFB] lg:w-[50%]"
							id="pagetodownload"
						>
							<h1 className="text-center py-4 border border-slate-300 bg-slate-200 font-bold mb-2 ">
								SALES RECORD
							</h1>
							<table className="overflow-scroll table-auto w-full border-separate border-spacing-y-2 text-xs md:text-base">
								<thead className="bg-[#D1E9FF] py-2 my-2">
									<tr>
										{rightHeaderKeys.map((key) => (
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
													Object.values(sData)[0].trim().length > 0
														? '#B7EDD6'
														: '#F1AAA5',
											}}
										>


											{Object.values(sData).map((iData) => (
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
