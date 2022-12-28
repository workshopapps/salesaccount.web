import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './tableScrollbar.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { HashLoader } from 'react-spinners';
import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import check from '../../../assets/images/DashboardImages/check_circle.png';
import cancel from '../../../assets/images/DashboardImages/cancel.png';
import { useAuth } from '../../../Store/Context';
import ReconcileTable from './table/ReconcileTable';
import ServerError from '../../ServerError';

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

	const headerKeys = Object.keys(Object.assign({}, ...localData));
	const [userInput, setUserInput] = useState('');
	const { removeItem, localData3, loading, rError } = useAuth();

	const navigate = useNavigate();

	const tableLeft = [];
	const tableRight1 = [];
	const tableRight2 = [];

	localData3[0]?.map((item) => tableRight1.push(item.Matching_details));

	localData3[0]?.map((item) =>
		tableLeft?.push(item)
	);

	// eslint-disable-next-line
	tableRight1?.map((item) => {
		if (item?.length === 0) {
			item?.push({});
		}
		return tableRight2?.push(item);
	});

	const tableRight = tableRight2?.flat();

	const leftHeaderKeys = Object.keys(Object.assign({}, ...tableLeft));
	const rightHeaderKeys = Object.keys(Object.assign({}, ...tableRight));

	const reconcileNewFile = () => {
		navigate('/dashboard/upload');
		removeItem();
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

			{/* table */}
			<div>
				{/* Loading State */}
				{loading && (
					<div className="flex flex-col justify-center items-center my-12 md:my-20">
						<HashLoader color="#2E90FA" size={150} />
					</div>
				)}

				{/* Error State */}
				{rError && !loading && <ServerError />}

				{!loading && (
					<>
						<Box
							display={{ base: `none`, md: `block` }}
							className="cc-table"
							overflow="auto"
							pb={2}
						>
							<ReconcileTable
								leftHeaderKeys={leftHeaderKeys}
								rightHeaderKeys={rightHeaderKeys}
								tableLeft={tableLeft}
								tableRight={tableRight}
								tableData={localData3[0]}
							/>
						</Box>
						<Box display={{ base: `block`, md: `none` }}>
							<Heading
								fontSize="sm"
								fontStyle="italic"
								textAlign="center"
								color="#F1AAA5"
							>
								Reconcile table cannot be viewed on this device. Try viewing it
								on a larger screen
							</Heading>
						</Box>
					</>
				)}
			</div>
			
			{/* Reconcile Button */}
			<Box className="w-full flex justify-center my-10">
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
			</Box>
		</>
	);
}

export default Reconcile;
