import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Hero.css';
import '../Transactions/User/user.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Transactions from '../Transactions/Transactions';
import CurrentNav from '../../../../components/DashBoardCurrentNav/DashCurrentNav';
import { useAuth } from '../../../../Store/Context';
import SalesReport from '../Transactions/SalesReport';

function Reconcile() {
	const [showDisplay, setShowDisplay] = useState(false);
	const [showSort, setShowSortDisplay] = useState(false);
	const [showDisplay2, setShowDisplay2] = useState(false);
	const [showSort2, setShowSortDisplay2] = useState(false);
	const navigate = useNavigate();
	const { localData, fileDropped, localData2, fileDropped2, setLocalData2 } =
		useAuth();
	const headerKeys = Object.keys(Object.assign({}, ...localData));
	const headerKeys2 = Object.keys(Object.assign({}, ...localData2));

	// CSV to Array starts
	// const [csvArray, setCsvArray] = useState([]);

	// const processCSV = (str, delim = ',') => {
	// 	const headers = str.slice(0, str.indexOf('\n')).split(delim);
	// 	const rows = str.slice(str.indexOf('\n') + 1).split('\n');

	// 	const newArray = rows.map(row => {
	// 		const values = row.split(delim);
	// 		const eachObject = headers.reduce((obj, header, i) => {
	// 			obj[header] = values[i];
	// 			return obj;
	// 		}, {})
	// 		return eachObject;
	// 	})

	// 	setCsvArray(newArray)

	// 	return newArray
	// }

	// const handleSubmit = () => {
	// 	// e.preventDefault();

	// 	const fileReader = new FileReader();

	// 	fileReader.onload = (e) => {
	// 		const text = e.target.result;
	// 		const data = processCSV(text)
	// 		setLocalData2(data)
	// 		console.log("File to Text: ", text)
	// 		console.log("localData to Text: ", localData2)
	// 		console.log("Data to Text: ", data)
	// 	}

	// 	fileReader.readAsText(fileDropped2)
	// }
	// CSV to array ends

	// click functions
	const clickShowDisplayHandler = () =>
		showDisplay === false ? setShowDisplay(true) : setShowDisplay(false);

	const clickShowSortHandler = () =>
		showSort === false ? setShowSortDisplay(true) : setShowSortDisplay(false);

	// ///////////////
	const clickShowDisplayHandler2 = () =>
		showDisplay2 === false ? setShowDisplay2(true) : setShowDisplay2(false);

	const clickShowSortHandler2 = () =>
		showSort2 === false
			? setShowSortDisplay2(true)
			: setShowSortDisplay2(false);

	//  make post request function

	const handleSubmit = async () => {
		navigate('/dashboard/accountreport');
	};

	return (
		<div className="w-full">
			<div className="space-y-[1em]">
				<div className="hidden md:flex">
					{/* <CurrentNav /> */}

					<div className="flex ">
						<div className=" text-slate-500 font-semibold hover:text-black">
							<Link to="/dashboard/home">Dashboard</Link>
						</div>

						<NavigateNextIcon />
						<div className=" text-slate-500 font-semibold hover:text-black">
							<Link to="/dashboard/importpage"> Imported Data</Link>
						</div>

						<NavigateNextIcon />
						<div className="text-black-600 font-semibold ">Reconcile</div>
					</div>
				</div>

				<h1 className="text-[1.1em] md:text-[2em] font-bold">
					Uploaded Account Statement Ready!
				</h1>

				<div className="flex justify-between items-center ">
					<div
						onClick={clickShowDisplayHandler}
						role="presentation"
						className="sort-by flex  relative border justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs  md:bg-white bg-[#D1E9FF] text-[#1570EF] "
					>
						<p className="font-bold">Display</p>
						<ExpandMoreIcon />
					</div>

					<div
						onClick={clickShowSortHandler}
						role="presentation"
						className="sort-by flex relative border justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs md:bg-white bg-[#D1E9FF] text-[#1570EF] "
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
				<div className=" border absolute bg-white z-1 w-[50%] md:w-[25%] lg:w-[15%] top-[7em] md:top-[10em] rounded-lg p-4">
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
			{/* <Transactions /> */}

			{/* Mapped Dynamic Data from CSV for  bank statements */}
			<div className="my-8">
				<p className="my-4 text-green-600 font-bold">{fileDropped.name}</p>

				<div className="overflow-scroll">
					<table className="table-auto w-full text-xs md:text-base ">
						<thead className="bg-[#D1E9FF] py-2 my-2">
							<tr>
								{headerKeys.map((key) => (
									<th className="py-2 pl-8 text-left">{key}</th>
								))}
							</tr>
						</thead>

						<tbody className="py-2 px-6">
							{localData.map((sData) => (
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

			{/* Sale Record here  */}

			<div className="mt-[3em]">
				<div className="space-y-[1em]">
					<h1 className="text-[1.1em] md:text-[2em] font-bold">
						Uploaded Sales Record Ready!
					</h1>

					<div className="flex justify-between items-center ">
						<div className="relative w-[35%] md:w-[25%] lg:w-[15%]">
							<div
								onClick={clickShowDisplayHandler2}
								role="presentation"
								className="sort-by flex  border justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs  md:bg-white bg-[#D1E9FF] text-[#1570EF] "
							>
								<p className="font-bold">Display</p>
								<ExpandMoreIcon />
							</div>
							{showDisplay2 && (
								<div className=" border absolute bg-white z-1 w-[100%]  left-[0] top-[3em] rounded-lg p-4">
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
						</div>

						<div className="relative w-[30%] md:w-[20%] lg:w-[10%]">
							<div
								onClick={clickShowSortHandler2}
								role="presentation"
								className="sort-by flex border justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs md:bg-white bg-[#D1E9FF] text-[#1570EF] "
							>
								<p className="font-bold">Sort by</p>
								<FilterListIcon />
							</div>

							{showSort2 && (
								<div className="border w-[100%] absolute z-1  bg-white rounded-lg p-4 top-[3em]">
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
					</div>
					<div>
						<h1 className="text-lg  my-[1em] font-semibold">Recent Sales</h1>
					</div>
				</div>
			</div>

			{/* <SalesReport /> */}
			{/* Mapped Dynamic Data from CSV for salesreport */}
			<div className="my-8">
				<p className="my-4 text-green-600 font-bold">{fileDropped2.name}</p>

				<div className="overflow-scroll">
					<table className="table-auto w-full text-xs md:text-base ">
						<thead className="bg-[#D1E9FF] py-2 my-2">
							<tr>
								{headerKeys2.map((key) => (
									<th className="py-2 pl-8 text-left" key={Math.random()}>
										{key}
									</th>
								))}
							</tr>
						</thead>

						<tbody className="py-2 px-6">
							{localData2.map((item) => (
								<tr className="py-2 pl-8" key={Math.random()}>
									{Object.values(item).map((eachItem) => (
										<td className="text- py-2 pl-8">{eachItem}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* { localData?.map((lData)=><p>{ lData.Date }</p>) } */}
			</div>

			{/* sync to data baseButton */}
			<div className="flex justify-center pb-[5em] mt-[1em] ">
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					className="bg-[#1849A9]  hover:bg-[#516ba0] text-white text-sm py-2 px-2  w-[70%] md:w-[60%] lg:w-[30%] active:color-#1849A9"
				>
					Reconcile
				</button>
			</div>
		</div>
	);
}

export default Reconcile;
