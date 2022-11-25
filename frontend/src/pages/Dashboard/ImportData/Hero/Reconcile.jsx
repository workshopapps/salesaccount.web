import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Hero.css';
import '../Transactions/User/user.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';
import Transactions from '../Transactions/Transactions';
import CurrentNav from '../../../../components/DashBoardCurrentNav/DashCurrentNav';
import { useAuth } from '../../../../Store/Context';
import SalesReport from '../Transactions/SalesReport';

function Hero() {
	const [showDisplay, setShowDisplay] = useState(false);
	const [showSort, setShowSortDisplay] = useState(false);
	const { dropHandlerFile2, dragHandlerFile2, setFiles2, files2 } = useAuth();
	const navigate = useNavigate();

	// click functions
	const clickShowDisplayHandler = () =>
		showDisplay === false ? setShowDisplay(true) : setShowDisplay(false);

	const clickShowSortHandler = () =>
		showSort === false ? setShowSortDisplay(true) : setShowSortDisplay(false);

	//  make post request function

	const uploadFile2 = async () => {};

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

			{/* Sale Record here  */}

			<div className="mt-[3em]">
				<div className="space-y-[1em]">
					<h1 className="text-[1.1em] md:text-[2em] font-bold">
						Uploaded Sales Record Ready!
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
						<h1 className="text-lg  my-[1em] font-semibold">Recent Sales</h1>
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
			</div>

			<SalesReport />

			{/* sync to data baseButton */}
			<div className="flex justify-center pb-[5em] mt-[1em] ">
				<button
					type="submit"
					onClick={() => navigate('/dashboard/accountreport')}
					className="bg-[#1849A9]  hover:bg-[#516ba0] text-white text-sm py-2 px-2  w-[70%] md:w-[60%] lg:w-[30%] active:color-#1849A9"
				>
					Reconcile
				</button>
			</div>
		</div>
	);
}

export default Hero;
