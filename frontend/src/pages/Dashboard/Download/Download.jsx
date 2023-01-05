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
import { CSVLink } from 'react-csv';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import check from '../../../assets/images/DashboardImages/check_circle.png';
import cancel from '../../../assets/images/DashboardImages/cancel.png';
import { useAuth } from '../../../Store/Context';
import ReconcileTable from './table/ReconcileTable';
import ServerError from '../../ServerError';
import DownloadButton from '../DownloadButton/DownloadButton';

function Reconcile() {
	const [userInput, setUserInput] = useState('');
	const { removeItem, localData3, loading, rError } = useAuth();
	const [isClicked, setIsClicked] = useState(false);
	const clickHandler = () =>
		isClicked === true ? setIsClicked(false) : setIsClicked(true);

	const navigate = useNavigate();

	const tableLeft = [];
	const tableRight1 = [];
	const tableRight2 = [];

	localData3[0]?.map((item) => tableRight1.push(item.Matching_details));

	localData3[0]?.map((item) => tableLeft?.push(item));

	// eslint-disable-next-line
	tableRight1?.forEach((item) => {
		if (item?.length === 0) {
			item?.push({});
		}
		tableRight2?.push(item);
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
					dependent on the data you have provided
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
				<div
					onClick={() => clickHandler()}
					role="presentation"
					className="relative flex items-center justify-center bg-[#2E90FA] active:bg-[#1849A9] text-white w-[70%] md:w-[30%] lg:w-[15%] py-[0.8em]py-[0.8em] rounded-md mx-2 "
				>
					<div className="flex items-center space-x-4">
						<p>Download File</p>
						<div>
							{isClicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</div>
					</div>
					{isClicked && (
						<div className="absolute top-[4em] left-0  w-[90%] mx-[2.5%] border flex flex-col ">
							<DownloadButton fileId="pagetodownload" fileName="reconcile" />
							<CSVLink
								data={tableRight}
								filename="reconcile"
								className="w-full text-center bg-[#F9FAFB] text-[#2E90FA] active:bg-[#e8e8e9] border border-[#2E90FA]  py-[0.8em] rounded-md my-2"
							>
								Download CSV
							</CSVLink>
						</div>
					)}
				</div>

				<button
					onClick={() => reconcileNewFile()}
					className="bg-[#F9FAFB] text-[#2E90FA] active:bg-[#e8e8e9] border border-[#2E90FA]  w-[70%] md:w-[30%] lg:w-[15%] py-[0.8em] rounded-md"
					type="button"
				>
					Reconcile New File
				</button>
			</Box>
		</>
	);
}

export default Reconcile;
