import { React, useState } from 'react';
import BreadCrumbButton from '../../components/DashboardButtons/BreadCrumbButton';
import Button from '../../components/DashboardButtons/Button';
import Header from '../../components/DashboardHeader/Header';
import Sidebar from '../../components/DashboardSidebar/Sidebar';

export default function UploadResultMatch() {
	const [imbalances, setImbalances] = useState(0);

	return (
		<div className="w-screen h-screen">
			<Header />
			<div className="flex">
				<Sidebar />
				<main className="w-3/4">
					<BreadCrumbButton />
					<h1 className="text-5xl md:text-4xl xl:text-6xl font-semibold py-2 md:py-4">
						Matching Done!
					</h1>
					<p className="hidden md:block text-base md:text-lg xl:text-2xl  text-gray-500 py-2 md:py-4">
						Our system is currently reconciling your records and will alert you
						of any errors. Please be patient.
					</p>
					<div className="flex flex-col p-3 pt-8 xl:pt-16">
						<div className="p-12 flex justify-center">
							<img
								src={imbalances === 0 ? 'green-acct.png' : 'red-acct.png'}
								alt="Response..."
								className="w-full md:w-1/3 xl:w-1/4"
							/>
						</div>
						<h1 className="text-center text-4xl xl:text-6xl font-bold py-2">
							{imbalances === 0 ? 'Perfect!' : 'Check!'}
						</h1>
						<div className="text-3xl xl:text-5xl text-center font-semibold py-2 px-12">
							<span
								className={imbalances === 0 ? 'text-green-600' : 'text-red-600'}
							>
								{imbalances}
							</span>
							<span className="text-gray-500">imbalance(s) found</span>
						</div>
						<div className="flex justify-center py-6 md:py-8 xl:py-12">
							<Button />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
