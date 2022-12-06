import React, { useState, useRef, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Hero.css';
import '../Transactions/User/user.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAuth } from '../../../../Store/Context';
import ok from '../../../../assets/Ok.png';
import signedDocument from '../../../../assets/images/DashboardImages/upload/signed document.png';

function ImportData() {
	const [showDisplay, setShowDisplay] = useState(false);
	const [showSort, setShowSortDisplay] = useState(false);
	const [showUpload, setShowUpload] = useState(false);
	const [showTable, setShowTable] = useState(false);
	const { dropHandlerFile2, dragHandlerFile2 } = useAuth();
	const inputRef = useRef();
	const navigate = useNavigate();
	const {
		localData,
		localData2,
		localData3,
		fileDropped,
		fileDropped2,
		setFileDropped2,
		getSalesData,
		reconcileData,
	} = useAuth();

	const headerKeys = Object.keys(Object.assign({}, ...localData));
	const headerKeys2 = Object.keys(Object.assign({}, ...localData2));

	const handleSubmit = () => {
		getSalesData();
	};
	const handleSubmit2 = async () => {
		reconcileData();
		navigate('/dashboard/accountreport');
	};

	// click functions
	const clickShowDisplayHandler = () =>
		showDisplay === false ? setShowDisplay(true) : setShowDisplay(false);

	const clickShowSortHandler = () =>
		showSort === false ? setShowSortDisplay(true) : setShowSortDisplay(false);

	useEffect(() => {
		localStorage.setItem('localData', JSON.stringify(localData));
	}, [localData]);

	useEffect(() => {
		localStorage.setItem('localData2', JSON.stringify(localData2));
	}, [localData2]);

	return (
		<div className="w-full h-max pb-[10em]">
			<div className="space-y-[1em]">
				<div className="hidden md:flex">
					<div className="flex ">
						<div className=" text-slate-500 font-semibold hover:text-black">
							<Link to="/dashboard/home">Dashboard</Link>
						</div>
						<NavigateNextIcon />
						<div className="text-black-600 font-semibold ">Reconcile</div>
						<NavigateNextIcon />
						{localData3.length > 0 && (
							<div className=" text-slate-500 font-semibold hover:text-black">
								<Link to="/dashboard/accountreport">Download</Link>
							</div>
						)}
					</div>
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

			{localData2.length < 1 && (
				<div className="space-y-[2em] w-full mt-[2em] ">
					<h1 className="text-[1.5em] font-bold">Next, upload Sales Record</h1>
					{showUpload ? (
						<div className=" text-center flex flex-col justify-center items-center mx-auto bg-[#F2F4F7] py-[4em]  px-[1em] md:py-[2em] w-full md:w-[70%] lg:w-[40%] space-y-3 border border-black border-dashed ">
							<img
								src={signedDocument}
								alt="document"
								className="w-[120px] h-[120px] object-fill"
							/>
							<div className="text-center  space-y-[0.5em]">
								<h2 className="font-semibold text-[#344054] text-lg">
									File Selected: &#34; {fileDropped2?.name} &#34;
								</h2>
								<div className="text-sm text-[#98A2B3]">
									<p>You are almost set</p>
									<p>
										<span
											className="text-[#53B1FD]"
											role="presentation"
											onClick={() => {
												setFileDropped2(null);
												setShowUpload(false);
											}}
										>
											click here
										</span>{' '}
										&nbsp; to upload a different file
									</p>
								</div>
							</div>
						</div>
					) : (
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
									setShowUpload(true);
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
					)}
				</div>
			)}

			{/* Sales Data  */}
			{localData2.length > 1 && (
				<div>
					<div className="mt-[3em]">
						<div className="space-y-[1em]">
							<div className="flex items-center">
								<h1 className="text-[1.1em] md:text-[2em] font-bold">
									Uploaded Sales Record Ready!
								</h1>
								<img
									className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
									src={ok}
									alt="ok"
								/>
							</div>

							<div>
								<h1 className="text-lg  my-[1em] font-semibold">
									Recent Sales
								</h1>
							</div>
						</div>
					</div>
					<div className="mb-8 mt-4" id="reportCanvas">
						<p className="my-4 text-green-600 font-bold">{fileDropped2.name}</p>

						<div className="overflow-scroll" id="reportCanvas">
							<table
								className="table-auto w-full text-xs md:text-base "
								id="reportCanvas"
							>
								<thead className="bg-[#D1E9FF] py-2 my-2">
									<tr>
										{headerKeys2?.map((key) => (
											<th className="py-2 pl-8 text-left" key={Math.random()}>
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{localData2?.map((item) => (
										<tr className="py-2 pl-8" key={Math.random()}>
											{Object.values(item).map((eachItem) => (
												<td className="text- py-2 pl-8">{eachItem}</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)}

			{/* Upload sales Record */}

			<div className="flex justify-center pb-[5em] mt-[1em] ">
				{localData2.length > 0 ? (
					<button
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							handleSubmit2();
						}}
						className="bg-[#1849A9]  hover:bg-[#516ba0] text-white text-sm py-2 px-2 border w-[70%]  md:w-[30%] lg:w-[10%] active:color-#1849A9"
					>
						Reconcile
					</button>
				) : (
					<button
						onClick={(e) => {
							e.preventDefault();
							if (fileDropped2) {
								handleSubmit();
							}
							setShowTable(true);
						}}
						type="submit"
						className="bg-[#1849A9]  hover:bg-[#516ba0] text-white text-sm py-2 px-2   w-[70%]  md:w-[30%]  lg:w-[10%] active:color-#1849A9"
					>
						Upload Sales Record
					</button>
				)}
			</div>
		</div>
	);
}

export default ImportData;
