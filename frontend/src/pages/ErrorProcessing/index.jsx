import React from 'react';
import './error.css'
import { FaGreaterThan } from 'react-icons/fa';
import DashBoardHeader from '../../components/DashBoardHeader';
import NavigationBar from '../../components/NavigationBar';

const styles = {
	bgColor: '#1570EF',
	titleTextColor: '#101828',
	inputwidth: '500px',
	sideWidth: '248px',
	dasboardwidth: '150px',
};
const processData = {
	status: 'Processing...',
	statusHeader: 'Maching data...',
	statusMessage: 'imbalancing (s) found so far',
	numberOfimbalance: 0,
};

const ErrorProcessing = () => (
	<>
		<NavigationBar />
		<main className="m-[65px]">
			<div className="processing-text">
				<h1 className="font-['Lexend'] font-semibold text-[28px] leading-[136.02%] text-[#344054]">
					Processing...
				</h1>
				<p className="font-['Lexend'] font-medium text-[20px] leading-[136.52%] text-[#667085]">
					Our system is currently reconciling your records and will alert you of
					any errors. Please be patient.
				</p>
			</div>
			<div className="bg-[#F9FAFB] rounded-[12px] absolute top-[40%] left-[25%] translate-[-50%, -50%] w-[737px] h-[364px] text-center">
				<h3 className="mt-[100px] font-['Lexend'] font-medium text-[36px] leading-[136.02%] text-[#101828]">
					Matching data...
				</h3>
				<div className="my-[10px] flex items-center justify-center gap-[10px]">
					<span className="text-[28px] text-[#F04438]">0</span>
					<p className="font-['Lexend'] font-semibold text-[28px] leading-[136.02%] text-[#667085]">
						imbalance(s) found so far
					</p>
				</div>
				<div className="flex justify-center items-center gap-[5px]">
					<input
						className="bg-[#f2f4f7] w-[544px] rounded-[24px]"
						type="range"
						min="0"
						max="100"
						value="5"
						step="5"
					/>
					<span>1%</span>
				</div>
			</div>
		</main>
	</>
);

export default ErrorProcessing;