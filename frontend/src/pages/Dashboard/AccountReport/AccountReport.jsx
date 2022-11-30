import React from 'react';
import './accountReport.css';
import AccountReportDetail from './AccountReportDetail/AccountReportDetail';
import SalesReport from './AccountReportDetail/SalesReport';

function AccountReport() {
	return (
		<div className="space-y-[1em]">
			<h1 className=" font-bold text-xl ">Account Balance Report Ready!</h1>
			{/* report table */}
			<div className="report space-y-[1em] md:space-y-[2em] pb-[2em] border">
				<div className="report-heading flex justify-between text-center text-[0.9em] md:text-lg  md:text-left font-bold py-[0.6em] md:py-[0.5em] px-[0.4em] border-b border-black">
					<p className="w-[30%]">Account </p>
					<p className="w-[20%]">Debit &#40;&#8358;&#41;</p>
					<p className="w-[20%]">Credit &#40;&#8358;&#41;</p>
				</div>

				{/* report transactions */}
				<div className="bank-reports space-y-[0.5em]">
					<AccountReportDetail />
					<AccountReportDetail />
					<AccountReportDetail />
					<AccountReportDetail />
				</div>

				<div className="sales flex justify-between items-center text-sm font-semibold ">
					<p className="w-[30%] text-left ">Sales </p>
					<p className="w-[20%] text-left">217,500</p>
					<p className="w-[20%]">&nbsp;</p>
				</div>

				{/* sales report */}
				<div className="bank-reports space-y-[0.5em]">
					<SalesReport />
					<SalesReport />
					<SalesReport />
					<SalesReport />
				</div>

				<div className="sales flex justify-between items-center text-sm font-semibold ">
					<p className="w-[30%] text-left ">Total </p>
					<p className="w-[20%] text-left">217,500</p>
					<p className="w-[20%] text-left">217,250</p>
				</div>

				{/* ////////////// */}
			</div>
			{/* report buttons */}
			<div className="sale-button flex justify-center space-x-[1em] mx-auto pb-[1em]">
				<button
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
