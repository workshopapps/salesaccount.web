/* eslint-disable react/prop-types */

import React, { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function PageLayout({ children }) {
	const [showSidebar, setShowSideBar] = useState(false);

	return (
		<div className="h-screen overflow-hidden relative">
			<Navbar setShowSideBar={setShowSideBar} />
			<main className="w-full h-full flex relative pt-20">
				<Sidebar showSidebar={showSidebar} />
				<section
					className={`flex-1 h-[100%] px-6 py-9 overflow-y-scroll relative ${
						showSidebar ? 'ml-60' : 'ml-0'
					} ease-in-out delay-300 transition-all`}
				>
					<div className="flex items-center gap-2 text-[#667085]">
						<p className="cursor-pointer">Dashboard</p>
						<span className="w-2 h-2 border-2 border-t-[#101828] border-r-[#101828] rotate-[45deg] ml-[-5px]" />
						<p className="text-[#101828] cursor-pointer">Imported Data</p>
					</div>
					{children}
				</section>
			</main>
		</div>
	);
}
