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

function ImportData() {
	const [showDisplay, setShowDisplay] = useState(false);
	const [showSort, setShowSortDisplay] = useState(false);
	const { dropHandlerFile2, dragHandlerFile2, setFiles2, files2 } = useAuth();
	const inputRef = useRef();
	const navigate = useNavigate();

	// click functions
	const clickShowDisplayHandler = () =>
		showDisplay === false ? setShowDisplay(true) : setShowDisplay(false);

	const clickShowSortHandler = () =>
		showSort === false ? setShowSortDisplay(true) : setShowSortDisplay(false);

	//  make post request function

	const uploadFile2 = async () => {
		navigate('/dashboard/reconcile');
	};

	return (
		<div className="w-full">
			<div className="space-y-[1em]">
				<div className="hidden md:flex">
					<CurrentNav />
				</div>

				<h1 className="text-[1.1em] md:text-[2em] font-bold">
					Uploaded Account Statement Ready!
				</h1>

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
			<Transactions />
			{/* modal here */}
			<div className="space-y-[2em] w-full mt-[2em]">
				<h1 className="text-[1.5em] font-bold">Next, upload Sales Record</h1>
				<div
					onDragOver={dragHandlerFile2}
					onDrop={dropHandlerFile2}
					className=" text-center flex flex-col justify-center items-center mx-auto bg-[#F2F4F7] py-[4em] px-[1em] w-full md:w-[80%] lg:w-[60%] space-y-3 border border-black border-dashed "
				>
					<CloudUploadIcon sx={{ fontSize: '5em', color: '#2E90FA' }} />
					<p>Drag and drop your file in this gray area</p>
					<p>OR</p>
					<input
						type="file"
						hidden
						onChange={(e) => setFiles2(e.target.files)}
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

			{/* sync to data baseButton */}
			<div className="flex justify-center pb-[5em] mt-[1em] ">
				<button
					onClick={uploadFile2}
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
