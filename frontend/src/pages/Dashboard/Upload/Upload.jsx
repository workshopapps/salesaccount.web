import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import draft from '../../../assets/images/DashboardImages/upload/draft.png';
import { useAuth } from '../../../Store/Context';

function Upload() {
	// browse file ref
	const inputRef = useRef();
	const inputRef2 = useRef();

	const navigate = useNavigate();

	// ContextApi
	const {
		fileDropped,
		fileDropped2,
		setFileDropped,
		setFileDropped2,
		getData,
		getSalesData,
	} = useAuth();

	const handleSubmit = () => {
		getData();
		getSalesData();
		navigate('/dashboard/reconcile');
	};
	// Jsx
	return (
		<>
			{/* BreadCrumbs */}
			<div className="flex">
				<div
					// onClick={userClickedUpload}
					role="presentation"
					className=" text-black-600 font-semibold hover:text-black"
				>
					<Link to="/dashboard/upload">Upload</Link>
				</div>

				<NavigateNextIcon />
				<div className=" text-slate-500 font-semibold hover:text-black">
					<Link to="/dashboard/reconcile"> Reconcile</Link>
				</div>

				<NavigateNextIcon />
				<div className="text-slate-500 font-semibold ">Download</div>
			</div>

			<div className="w-full md:w-[80%] lg:w-[45%] mx-auto h-max flex flex-col justify-center items-center  text-center space-y-4 mt-[4em] md:mt-[5em] lg:mt-[7em]">
				{/* Upload Account Statement  */}
				<div className="w-full mb-[1em] space-y-2 justify-center items-center flex flex-col">
					{fileDropped.name ? (
						<div className="flex justify-between items-center py-[1.5em] px-[1em] w-full  my-2 text-[#475467] text-sm md:text-md text-left border border-[#667085] rounded-sm">
							{/* Upload SuccessFul */}
							<div className="flex w-[65%] md:w-[75%] items-center">
								<img
									src={draft}
									alt=""
									className="w-[40px] h-[40px] object-contain"
								/>
								<p className="pl-2 w-[80%] text-xs md:text-sm">
									{fileDropped?.name}
								</p>
							</div>
							<button
								onClick={() => setFileDropped([])}
								type="button"
								className="font-semibold border border-[#667085] p-2 w-[30%] md:w-[20%] rounded-md bg-[#F9FAFB] active:bg-[#e4e8ec] text-xs md:text-sm m-0"
							>
								Change File
							</button>
						</div>
					) : (
						<div
							onClick={() => {
								inputRef.current.click();
							}}
							role="presentation"
							className="py-[1.5em] px-[2em] w-full  my-2 bg-[#F9FAFB] text-[#2E90FA] text-sm md:text-base lg:text-lg  font-semibold border border-[#2E90FA]  rounded-sm active:bg-[#e4e8ec]"
						>
							1. Upload Account Statement
							<input
								type="file"
								hidden
								accept=".csv, .pdf, .xls, .xlsx"
								ref={inputRef}
								onChange={(e) => {
									setFileDropped(e.target.files[0]);
								}}
							/>
						</div>
					)}

					{/* Upload Sales Record */}
					{fileDropped2.name ? (
						<div className="flex justify-between items-center py-[1.5em] px-[1em] w-full  my-2 text-[#475467] text-sm md:text-md text-left border border-[#667085] rounded-sm">
							{/* Upload SuccessFul */}
							<div className="flex w-[65%] md:w-[75%] items-center">
								<img
									src={draft}
									alt=""
									className="w-[40px] h-[40px] object-contain"
								/>
								<p className="pl-2 w-[80%] text-xs md:text-sm">
									{fileDropped2?.name}
								</p>
							</div>
							<button
								onClick={() => setFileDropped2([])}
								type="button"
								className="font-semibold border border-[#667085] p-2 w-[30%] md:w-[20%] rounded-md bg-[#F9FAFB] active:bg-[#e4e8ec] text-xs md:text-sm m-0"
							>
								Change File
							</button>
						</div>
					) : (
						<div
							onClick={() => {
								inputRef2.current.click();
							}}
							role="presentation"
							className="w-full mb-[1em] space-y-4 justify-center items-center flex flex-col"
						>
							<div className="py-[1.5em] px-[2em] w-full  my-2 bg-[#F9FAFB] text-[#2E90FA] text-sm md:text-base lg:text-lg  font-semibold border border-[#2E90FA]  rounded-sm active:bg-[#e4e8ec]">
								1. Upload Sales Record
								<input
									type="file"
									hidden
									accept=".csv, .pdf, .xls, .xlsx"
									ref={inputRef2}
									onChange={(e) => {
										setFileDropped2(e.target.files[0]);
									}}
								/>
							</div>
						</div>
					)}
				</div>

				{/* Supported Files */}
				<div className="text-[#667085] text-xs md:text-sm w-full space-y-1">
					<p>Supported File Formats: PDF, CSV, XLX, XLSX</p>
					<p>
						Uploaded files should contain: Date, Description & Credit/Debit
						Scores
					</p>
				</div>

				{/* Submit Files Button */}
				<div>
					{fileDropped2.name && fileDropped.name ? (
						<button
							onClick={() => handleSubmit()}
							className="bg-[#2E90FA] text-white px-[2em] py-[0.8em] rounded-md mt-10"
							type="button"
						>
							Submit Files
						</button>
					) : (
						<button
							className="bg-[#D1E9FF] text-white px-[2em] py-[0.8em] rounded-md mt-10"
							type="button"
							disabled
						>
							Submit Files
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default Upload;
