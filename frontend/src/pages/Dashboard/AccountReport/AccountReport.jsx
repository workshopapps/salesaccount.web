import * as ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { HashLoader } from 'react-spinners';
import { useAuth } from '../../../Store/Context';
import ok from '../../../assets/Ok.png';
import './accountReport.css';
import Processing from '../../ErrorProcessing/index';
import DownloadButton from '../DownloadButton/DownloadButton';

function AccountReport() {
	const { localData3, rError, loading, removeItem } = useAuth();
	const navigate = useNavigate();
	const headerKeys = Object.keys(Object.assign({}, ...localData3));

	const [text, setText] = useState(false);

	useEffect(() => {
		localStorage.setItem('localData3', JSON.stringify(localData3));
	}, [localData3]);
	const userClickedUpload = () => {
		removeItem();
		navigate('/dashboard/home');
	};

	useEffect(() => {
		setTimeout(() => setText(true), 3000);
	}, []);

	return (
		<div className="space-y-[3em]">
			<div className="md:flex">
				<div className="flex">
					<div
						onClick={userClickedUpload}
						role="presentation"
						className=" text-slate-500 font-semibold hover:text-black"
					>
						<Link to="/dashboard/home">Upload</Link>
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
			{/* {loading && <Processing />} */}

			{loading && (
				<div className="flex flex-col justify-center items-center">
					<h2 className="animate-pulse text-[30px] text-[#2E90FA] font-semibold">
						Matching data...
					</h2>
					{/* <p>Test</p> */}

					{text && (
						<h2 className="animate-pulse mb-10">Just a few more moments...</h2>
					)}

					<HashLoader color="#2E90FA" size={150} />
				</div>
			)}

			{localData3 && (
				<div className="overflow-scroll " id="pagetodownload">
					<table className="table-auto w-full text-xs md:text-base ">
						<thead className="bg-[#D1E9FF] py-2 my-2">
							<tr>
								{headerKeys.map((key) => (
									<th className="py-2 pl-8 text-left">{key}</th>
								))}
							</tr>
						</thead>

						<tbody className="py-2 px-6">
							{localData3?.map((sData) => (
								<tr className="py-2 pl-8">
									{Object.values(sData).map((iData) => (
										<td className="text-sm py-5 md:py-10 pl-8 ">{iData}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
			{/* report buttons */}
			<div className="sale-button flex justify-center space-x-[1em] mx-auto pb-[1em] mt-[5em]">
				<button
					onClick={() => navigate(-1)}
					type="button"
					className="button1 text-[##1570EF] bg-[#D1E9FF] w-[30%] lg:w-[15%]  py-[0.5em] rounded-md "
				>
					Back
				</button>
				<div className=" flex justify-center items-center button2 text-white bg-[#2E90FA] w-[30%] py-[0.5em] lg:w-[15%] rounded-md">
					<DownloadButton fileId="pagetodownload" fileName="reconcile" />
				</div>
			</div>
		</div>
	);
}

export default AccountReport;

// const root = ReactDOM.createRoot();
//
// root.render(<AccountReport />)
