import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAuth } from '../../../Store/Context';

function Reconcile() {
	const localData = [
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
	const { removeItem, reconcileData } = useAuth();

	const headerKeys = Object.keys(Object.assign({}, ...localData));

	const navigate = useNavigate();
	const handleSubmit = () => {
		navigate('/dashboard/download');
	};
	const userClickedUpload = () => {
		removeItem();
		navigate('/dashboard/upload');
	};
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

			{/* Api Table */}
			<div className="lg:flex items-center justify-center w-full lg:bg-[#F9FAFB] py-[1em] md:p-[4em] mt-[4em] lg:mt-[7em] ">
				{/* Table 1 */}
				{Boolean(localData.length) && localData && (
					<div
						className="overflow-scroll mb-[5em] lg:mb-0  bg-[#F9FAFB] "
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

				{/* Table 2 */}
				{Boolean(localData.length) && localData && (
					<div className="overflow-scroll  bg-[#F9FAFB] " id="pagetodownload">
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
			{/* Reconcile Button */}
			<div className="w-full flex justify-center">
				<button
					onClick={() => handleSubmit()}
					className="bg-[#2E90FA] active:bg-[#1849A9] text-white px-[2em] py-[0.8em] rounded-md mt-10"
					type="button"
				>
					Reconcile
				</button>
			</div>
		</>
	);
}

export default Reconcile;
