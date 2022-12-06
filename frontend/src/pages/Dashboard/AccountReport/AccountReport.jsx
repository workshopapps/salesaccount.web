import * as ReactDOM from 'react-dom/client';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAuth } from '../../../Store/Context';
import ok from '../../../assets/Ok.png';
import './accountReport.css';

function AccountReport() {
	const { localData3, rError, loading } = useAuth();
	const navigate = useNavigate();
	const headerKeys = Object.keys(Object.assign({}, ...localData3));

	return (
		<div className="space-y-[1em] mb-[5em]">
			<div className="md:flex">
				<div className="flex ">
					<div className=" text-slate-500 font-semibold hover:text-black">
						<Link to="/dashboard/home">Dashboard</Link>
					</div>

					<NavigateNextIcon />
					<div className=" text-slate-500 font-semibold hover:text-black">
						<Link to="/dashboard/importpage"> Reconcile</Link>
					</div>

					<NavigateNextIcon />
					<div className="text-black-600 font-semibold ">Download</div>
				</div>
			</div>
			{localData3.length > 1 && (
				<div className="flex items-center">
					<h1 className=" font-bold text-xl ">Account Balance Report Ready!</h1>
					{localData3 && (
						<img
							className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
							src={ok}
							alt="ok"
						/>
					)}
				</div>
			)}

			{rError && <p>{rError}</p>}
			{loading && (
				<div>
					<p>
						{' '}
						Account Report is loading, might take a while, please do not
						refresh...
					</p>
					<img
						className="w-full md:h-[400px] object-contain"
						src="https://media2.giphy.com/media/a7oVsf3WTOaoE/giphy.gif"
						alt="constructionGif"
					/>
				</div>
			)}
			{localData3 && (
				<div className="overflow-scroll">
					<table className="table-auto w-full text-xs md:text-base ">
						<thead className="bg-[#D1E9FF] py-2 my-2">
							<tr>
								{headerKeys.map((key) => (
									<th className="py-2 pl-8 text-left">{key}</th>
								))}
							</tr>
						</thead>

						<tbody className="py-2 px-6 border">
							{localData3?.map((sData) => (
								<tr className="py-2 pl-8">
									{Object.values(sData).map((iData) => (
										<td className="text- py-2 pl-8">{iData}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
			{/* report buttons */}
			<div className="sale-button flex justify-center space-x-[1em] mx-auto pb-[1em]">
				<button
					onClick={() => navigate(-1)}
					type="button"
					className="button1 text-[##1570EF] bg-[#D1E9FF] w-[30%] lg:w-[15%]  py-[0.5em] rounded-md "
				>
					Back
				</button>
				<button
					type="button"
					className="button2 text-white bg-[#2E90FA] w-[30%] py-[0.5em] lg:w-[15%] rounded-md"
				>
					Download
				</button>
			</div>
		</div>
	);
}

export default AccountReport;

// const root = ReactDOM.createRoot();
//
// root.render(<AccountReport />)
