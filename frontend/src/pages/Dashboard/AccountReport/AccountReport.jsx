import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Store/Context';
import './accountReport.css';

function AccountReport() {
	const { localData3, error, loading } = useAuth();
	const navigate = useNavigate();
	// const headerKeys = Object.keys(Object.assign({}, ...localData3));

	return (
		<div className="space-y-[1em]">
			<h1 className=" font-bold text-xl ">Account Balance Report Ready!</h1>
			This Page is under Construction
			<img
				className="w-full md:h-[400px] object-contain"
				src="https://media2.giphy.com/media/a7oVsf3WTOaoE/giphy.gif"
				alt="constructionGif"
			/>
			{/* {error && <p>{error}</p>}
			{loading && <p>Loading</p>} */}
			{/* {localData3 && localData3} */}
			{/* {localData3 && (
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
			)} */}
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
