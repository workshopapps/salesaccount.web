import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/DashboardFooter/DashboardFooter';
import { useAuth } from '../../Store/Context';

function Processing() {
	const { progress } = useAuth();

	// setTimeout(() => {
	// 	if (progress < 100) {
	// 		setProgress(100);
	// 	}
	// }, 1000);

	return (
		<div>
			<div className="mb-[83px]">
				<div>
					<p className="text-[36px] font-semibold animate-pulse">
						Processing...
					</p>
				</div>
				<p className="text-[#667085]">
					Our system is currently reconciling your records and will alert you of
					any errors. Please be patient.
				</p>
			</div>

			<div className="flex justify-center">
				<div className="h-[346px] w-[737px] bg-[#F9FAFB] rounded flex justify-center items-center">
					<div>
						<h3 className="text-[36px] text-center font-semibold">
							Matching Data...
						</h3>
						<p className="text-[#667085] text-center font-semibold">
							<span className="text-[#F04438]">0</span> imbalance(s) found so
							far
						</p>

						<div className="relative h-[40px] w-[544px] bg-[#F2F4F7] rounded-3xl mt-[25.5px]">
							<span
								className={`w-[${progress}%] ease-in duration-500 absolute h-[40px]  rounded-3xl bg-[#175CD3]`}
							>
								{progress}%
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-[45px]">
				<button
					type="button"
					className="text-white bg-blue-600 w-[224px] h-[48px] rounded"
				>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default Processing;
