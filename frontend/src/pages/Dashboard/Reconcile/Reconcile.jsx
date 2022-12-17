import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { HashLoader } from 'react-spinners';
import { useAuth } from '../../../Store/Context';
import ServerError from '../../ServerError';

function Reconcile() {
	const localDataa = [
		{
			'Item no ': 101,
			'Item Name': 'Financial Services',
			Description: 'IBM UK',
			Price: ' 1,000,000,000 ',
		},
		{
			'Item no ': 102,
			'Item Name': 'Audit services',
			Description: 'Microsoft UK',
			Price: ' 300,000,044 ',
		},
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
	];
	const {
		removeItem,
		reconcileData,
		fileDropped,
		fileDropped2,
		localData2,
		localData,
		uploadLoading,
		uploadLoading2,
		fileValidationError,
		fileValidationError2,
	} = useAuth();

	const headerKeys = Object.keys(Object.assign({}, ...localData));
	const headerKeys2 = Object.keys(Object.assign({}, ...localData2));

	// useNavigate
	const navigate = useNavigate();

	// Functions here
	const handleSubmit = () => {
		reconcileData();
		navigate('/dashboard/download');
	};
	const userClickedUpload = () => {
		removeItem();
		navigate('/dashboard/upload');
	};

	console.log(localData.length);
	return (
		<>
			<div className="flex">
				<div
					onClick={userClickedUpload}
					role="presentation"
					className="text-slate-500 font-semibold hover:text-black"
				>
					<Link to="/dashboard/upload">Upload</Link>
				</div>

				<NavigateNextIcon />
				<div className="  text-black-600 font-semibold ">Reconcile</div>

				<NavigateNextIcon />
				<div className=" text-slate-500 font-semibold hover:text-black">
					<Link to="/dashboard/download"> Download</Link>
				</div>
			</div>

			{/* Api Tables */}
			<div className="lg:flex items-center gap-8 justify-center w-full lg:bg-[#F9FAFB] py-[1em] md:p-[4em] mt-[4em] lg:mt-[7em] ">
				<div className="lg:w-1/2 border border-slate-500 p-4">
					<h1 className="lowercase my-2 font-bold ">{fileDropped?.name}</h1>

					{/* Loading State */}
					{uploadLoading && localData.length === 0 && (
						<div className="flex flex-col justify-center items-center">
							<HashLoader color="#2E90FA" size={150} />
						</div>
					)}

					{/* Error State */}
					{fileValidationError && !uploadLoading && <ServerError />}

					{/* Table 1 */}
					{Boolean(localData.length) && localData && (
						<div
							className="overflow-scroll mb-[5em] lg:mb-0  bg-[#F9FAFB]"
							id="pagetodownload"
						>
							<table className="table-auto w-full text-xs md:text-base">
								<thead className="bg-[#D1E9FF] py-2 my-2">
									<tr>
										{headerKeys.map((key) => (
											<th className="py-[1em] md:py-[1.5em] pl-8 text-left">
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{localData?.map((sData) => (
										<tr className="py-2 pl-8">
											{Object.values(sData).map((iData) => (
												<td className="text-sm pt-5 pb-3 md:py-10 pl-8 border-b border-[#ccc] ">
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

				{/* Second Table */}
				<div className="lg:w-1/2 border border-slate-500 p-4">
					<h1 className="lowercase my-2 font-bold ">{fileDropped2?.name}</h1>

					{/* Loading State */}
					{uploadLoading2 && localData2.length === 0 && (
						<div className="flex flex-col justify-center items-center">
							<HashLoader color="#2E90FA" size={150} />
						</div>
					)}

					{/* Error State */}
					{fileValidationError2 && !uploadLoading2 && <ServerError />}

					{/* Table 2 */}
					{Boolean(localData2.length) && localData2 && (
						<div className="overflow-scroll  bg-[#F9FAFB] " id="pagetodownload">
							<table className="table-auto w-full text-xs md:text-base">
								<thead className="bg-[#D1E9FF] py-2 my-2">
									<tr>
										{headerKeys2.map((key) => (
											<th className="py-[1em] md:py-[1.5em] pl-8 text-left">
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{localData2?.map((sData) => (
										<tr className="py-2 pl-8">
											{Object.values(sData).map((iData) => (
												<td className="text-sm pt-5 pb-3 md:py-10 pl-8 border-b border-[#ccc] ">
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
			</div>
			{/* Reconcile Button */}
			{localData.length > 1 && localData2.length > 1 && (
				<div className="w-full flex justify-center">
					<button
						onClick={() => handleSubmit()}
						className="bg-[#2E90FA] active:bg-[#1849A9] text-white px-[2em] py-[0.8em] rounded-md mt-10"
						type="button"
					>
						Reconcile
					</button>
				</div>
			)}

			{localData2.length < 1 ||
				(localData.length < 1 && (
					<div className="w-full flex justify-center">
						<button
							onClick={() => navigate('/dashboard/upload')}
							className="bg-[#F9FAFB] text-[#2E90FA] active:bg-[#e8e8e9] border border-[#2E90FA] px-[1em] md:px-[2em] py-[0.8em] rounded-md"
							type="button"
						>
							Go Back
						</button>
					</div>
				))}
		</>
	);
}

export default Reconcile;
