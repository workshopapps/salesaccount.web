import React, { useState, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Hero.css';
import '../Transactions/User/user.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { useNavigate } from 'react-router-dom';
import Transactions from '../Transactions/Transactions';
import CurrentNav from '../../../../components/DashBoardCurrentNav/DashCurrentNav';
import { useAuth } from '../../../../Store/Context';
import ok from '../../../../assets/Ok.png';
import ScrollToTop from '../../../../components/ScrollToTop';

function ImportData() {
	const [showDisplay, setShowDisplay] = useState(false);
	const [showSort, setShowSortDisplay] = useState(false);
	const [showFeedback, setShowFeedback] = useState(false);
	const { dropHandlerFile2, dragHandlerFile2 } = useAuth();
	const inputRef = useRef();
	const navigate = useNavigate();
	const {
		localData,
		fileDropped,
		fileDropped2,
		setFileDropped2,
		getSalesData,
	} = useAuth();

	// const headerKeys = Object.keys(localData);
	const headerKeys = Object.keys(Object.assign({}, ...localData));
	// const headerKeys2 = Object.keys(Object.assign({}, ...localData2));
	const newData = [];
	for (let i = 0; i < localData.length; i += 1) {
		newData.push({
			date: localData[i].Date,
			description: localData[i].Description,
			details: localData[i].Details,
			balance: localData[i][' Balance '],
			money_out: localData[i][' Money out '],
			money_in: localData[i][' Money in '],
		});
	}
	// CSV to Array
	// const [csvArray, setCsvArray] = useState([]);

	// const processCSV = (str, delim = ',') => {
	// 	const headers = str.slice(0, str.indexOf('\n')).split(delim);
	// 	const rows = str.slice(str.indexOf('\n') + 1).split('\n');

	// 	const newArray = rows.map((row) => {
	// 		const values = row.split(delim);
	// 		/* eslint-disable no-param-reassign */
	// 		const eachObject = headers.reduce((obj, header, i) => {
	// 			obj[header] = values[i];
	// 			return obj;
	// 		}, {});
	// 		/* eslint-disable no-param-reassign */
	// 		return eachObject;
	// 	});

	// 	setCsvArray(newArray);

	// 	return newArray;
	// };

	const handleSubmit = () => {
		getSalesData();
		navigate('/dashboard/reconcile');
		// const fileReader = new FileReader();
		// fileReader.onload = (e) => {
		// 	const text = e.target.result;
		// 	const data = processCSV(text);
		// 	setLocalData2(data);
		// };

		// fileReader.readAsText(fileDropped2);
	};
	// CSV to array ends

	// click functions
	const clickShowDisplayHandler = () =>
		showDisplay === false ? setShowDisplay(true) : setShowDisplay(false);

	const clickShowSortHandler = () =>
		showSort === false ? setShowSortDisplay(true) : setShowSortDisplay(false);

	//  make post request function

	return (
		<div className="w-full">
			<ScrollToTop />
			<div className="space-y-[1em]">
				<div className="hidden md:flex">
					<CurrentNav />
				</div>

				<div className="flex items-center">
					<h1 className="text-[1em] md:text-[1.5em] font-bold">
						Uploaded Account Statement Ready!
					</h1>
					<img
						className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
						src={ok}
						alt="ok"
					/>
				</div>

				<div className="flex justify-between items-center ">
					<div
						onClick={clickShowDisplayHandler}
						role="presentation"
						className="sort-by flex  border justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs  md:bg-white bg-[#D1E9FF] text-[#1570EF] "
					>
						<p className="font-bold">Display</p>
						<ExpandMoreIcon />
					</div>

					<div
						onClick={clickShowSortHandler}
						role="presentation"
						className="sort-by flex  border justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs md:bg-white bg-[#D1E9FF] text-[#1570EF] "
					>
						<p className="font-bold">Sort by</p>
						<FilterListIcon />
					</div>
				</div>
				<div>
					<h1 className="text-lg  my-[1em] font-semibold">
						Recent Transactions
					</h1>
				</div>
			</div>

			{/* Mapped Dynamic Data from CSV */}
			<div className="my-8 ">
				<p className="my-4 text-green-600 font-bold">{fileDropped.name}</p>

				<div className="overflow-scroll">
					<table className="table-auto w-full text-xs md:text-base ">
						<thead className="bg-[#D1E9FF] py-2 my-2">
							<tr>
								{headerKeys?.map((key) => (
									<th className="py-2 pl-8 text-left">{key}</th>
								))}
							</tr>
						</thead>

						<tbody className="py-2 px-6">
							{localData?.map((sData) => (
								<tr className="py-2 pl-8">
									{Object.values(sData).map((iData) => (
										<td className="text- py-2 pl-8">{iData}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* { localData?.map((lData)=><p>{ lData.Date }</p>) } */}
			</div>

			{showDisplay && (
				<div className=" border absolute bg-white z-1 w-[50%] md:w-[25%] lg:w-[15%] left-[1em] md:left-[1em] top-[7em]  md:top-[10em] rounded-lg p-4">
					<div className="flex justify-between ">
						<p>Value</p>
						<input type="checkbox" />
					</div>
					<div className="flex justify-between ">
						<p>Date</p>
						<input type="checkbox" />
					</div>
					<div className="flex justify-between ">
						<p>Name</p>
						<input type="checkbox" />
					</div>
					<div className="flex justify-between ">
						<p>Desciption</p>
						<input type="checkbox" />
					</div>
				</div>
			)}
			{showSort && (
				<div className="border w-[30%] absolute z-1 right-[1em] top-[7em] md:top-[10em] md:w-[20%] lg:w-[10%] md:right-[1em] bg-white rounded-lg p-4">
					<div className="flex justify-between ">
						<p>Credit</p>
						<input type="checkbox" />
					</div>
					<div className="flex justify-between ">
						<p>Debit</p>
						<input type="checkbox" />
					</div>
				</div>
			)}
			{/* <Transactions localData={localData} headerKeys={headerKeys}/> */}

			{/* modal here */}
			<div className="space-y-[2em] w-full mt-[2em]">
				<h1 className="text-[1.5em] font-bold">Next, upload Sales Record</h1>
				<div
					onDragOver={dragHandlerFile2}
					onDrop={dropHandlerFile2}
					className=" text-center flex flex-col justify-center items-center mx-auto bg-[#F2F4F7] py-[4em]  px-[1em] md:py-[2em] w-full md:w-[70%] lg:w-[40%] space-y-3 border border-black border-dashed "
				>
					<CloudUploadIcon sx={{ fontSize: '5em', color: '#2E90FA' }} />
					<p>Drag and drop your file in this grey area</p>
					<p>OR</p>
					<input
						type="file"
						accept=".csv"
						hidden
						onChange={(e) => {
							setFileDropped2(e.target.files[0]);
							setShowFeedback(true);
						}}
						ref={inputRef}
					/>
					<div>
						<button
							type="button"
							onClick={() => inputRef.current.click()}
							className=" flex bg-white p-[1em]  rounded-lg border-2"
						>
							Browse File <FileCopyOutlinedIcon />
						</button>
					</div>
				</div>
			</div>
			{/* Feedback Message */}
			{showFeedback && (
				<h1 className="font-bold text-lg text-center text-green-600">
					File Upload Sucessful
				</h1>
			)}
			{/* sync to data baseButton */}
			<div className="flex justify-center pb-[5em] mt-[1em] ">
				<button
					onClick={(e) => {
						e.preventDefault();
						if (fileDropped2) {
							handleSubmit();
						}
					}}
					type="submit"
					className="bg-[#1849A9]  hover:bg-[#516ba0] text-white text-sm py-2 px-2   md:w-[30%] lg:w-[15%] active:color-#1849A9"
				>
					Sync to Database
				</button>
			</div>
		</div>
	);
}

export default ImportData;
