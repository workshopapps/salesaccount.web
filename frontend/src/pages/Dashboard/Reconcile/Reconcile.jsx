import React, { useRef } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { HashLoader } from 'react-spinners';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../../Store/Context';
import ServerError from '../../ServerError';
import draft from '../../../assets/images/DashboardImages/draft2.png';
import Captcha from '../../../components/Captcha/Captcha';

function Reconcile() {
	const {
		removeItem,
		reconcileData,
		fileDropped,
		fileDropped2,
		localData3,
		localData2,
		localData,
		uploadLoading,
		uploadLoading2,
		fileValidationError,
		fileValidationError2,
	} = useAuth();

	const captchaRef = useRef(null);

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

	const onCaptcha = (e) => {
		e.preventDefault();
		const token1 = captchaRef.current.getValue();
		captchaRef.current.reset();
	};

	return (
		<>
			{/* Breadcrumbs start */}
			<div className="flex lg:mt-[2em]">
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
				{localData3.length > 2 ? (
					<div className=" text-slate-500 font-semibold hover:text-black">
						<Link to="/dashboard/download"> Download</Link>
					</div>
				) : (
					<div className=" text-slate-500 font-semibold hover:text-black">
						Download
					</div>
				)}
			</div>
			{/* Breadcrumbs Ends */}

			{/* captcha */}
			{/* {ReactDOM.createPortal(
				<Captcha captchaRef={captchaRef} />,
				document.getElementById('captcha')
			)} */}

			{/* Api Tables */}
			<div className=" space-y-[4em] lg:space-y-0 lg:flex items-start gap-12 lg:gap-8 justify-center w-full lg:bg-[#F9FAFB] lg:py-[5em] lg:px-[6em] rounded-sm my-8 lg:my-[6em]">
				<div className="lg:w-1/2">
					<div className="flex gap-2 md:gap-4 items-center bg-slate-700 text-white p-2 font-bold  border border-slate-500 ">
						<img
							src={draft}
							alt=""
							className="w-[20px] h-[20px] object-contain"
						/>
						<h1 className="lowercase">{fileDropped?.name}</h1>
					</div>

					{/* Loading State */}
					{uploadLoading && localData.length === 0 && (
						<div className="flex flex-col justify-center items-center my-12 md:my-20">
							<HashLoader color="#2E90FA" size={150} />
						</div>
					)}

					{/* Error State */}
					{fileValidationError && !uploadLoading && <ServerError />}

					{/* Table 1 */}
					{Boolean(localData.length) && localData && (
						<div
							className="overflow-scroll lg:mb-0   border border-slate-300"
							id="pagetodownload"
						>
							<table className="table-auto w-full text-xs md:text-base">
								<thead className="bg-[#1849A9] text-white text-xs py-2 ">
									<tr>
										{headerKeys.map((key) => (
											<th
												key={uuidv4()}
												className="py-[1em] md:py-[1.5em] px-4 text-left"
											>
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{localData?.map((sData) => (
										<tr key={uuidv4()} className="py-2 pl-8">
											{Object.values(sData).map((iData) => (
												<td
													key={uuidv4()}
													className="text-sm text-[#101828] text-left pb-3 md:py-6 pl-4 border-b border-[#ccc]  "
												>
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

				{/* Table 2 here */}
				<div className="lg:w-1/2">
					<div className="flex gap-2 md:gap-4 items-center bg-slate-700 text-white p-2 font-bold  border border-slate-500 ">
						<img
							src={draft}
							alt=""
							className="w-[20px] h-[20px] object-contain"
						/>
						<h1 className="lowercase">{fileDropped2?.name}</h1>
					</div>

					{/* Loading State */}
					{uploadLoading2 && localData2.length === 0 && (
						<div className="flex flex-col justify-center items-center my-12 md:my-20">
							<HashLoader color="#2E90FA" size={150} />
						</div>
					)}

					{/* Error State */}
					{fileValidationError2 && !uploadLoading2 && <ServerError />}

					{Boolean(localData2.length) && localData2 && (
						<div
							className="overflow-scroll lg:mb-0 border border-slate-300"
							id="pagetodownload"
						>
							<table className="table-auto w-full text-xs md:text-base">
								<thead className="bg-slate-300 text-black text-xs py-2 ">
									<tr>
										{headerKeys2.map((key) => (
											<th
												key={uuidv4()}
												className="py-[1em] md:py-[1.5em] px-4 text-left"
											>
												{key}
											</th>
										))}
									</tr>
								</thead>

								<tbody className="py-2 px-6">
									{localData2?.map((sData) => (
										<tr key={uuidv4()} className="py-2 pl-8">
											{Object.values(sData).map((iData) => (
												<td
													key={uuidv4()}
													className="text-sm text-slate-700 text-left pb-3 md:py-6 pl-4 border-b border-[#ccc] "
												>
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
