/* eslint-disable react/prop-types */
import React from 'react';

export default function Sidebar({ showSidebar }) {
	return (
		<aside
			className={`w-60 h-full bg-[#1849A9] py-9 px-5 absolute ${
				showSidebar ? 'left-0' : 'left-[-100%]'
			} top-0 bottom-0 z-40 flex flex-col justify-between ease-in-out delay-300 transition-[left] pt-28`}
		>
			<ul className="text-[#FFFFFF]">
				<li className="w-full flex py-3 px-4 items-center cursor-pointer rounded-[10px] hover:bg-[#F9FAFB] hover:text-[#175CD3] mb-2">
					<span className="material-icons-outlined text-2xl mr-3">window</span>
					Dashboard
				</li>
				<li className="w-full flex py-3 px-4 items-center cursor-pointer rounded-[10px] hover:bg-[#F9FAFB] hover:text-[#175CD3] mb-2">
					<span className="material-icons-outlined text-2xl mr-3">add_box</span>
					Import Data
				</li>
				<li className="w-full flex py-3 px-4 items-center cursor-pointer rounded-[10px] hover:bg-[#F9FAFB] hover:text-[#175CD3] mb-2">
					<span className="material-icons-outlined text-2xl mr-3">
						star_outline
					</span>
					History
				</li>
				<li className="w-full flex py-3 px-4 items-center cursor-pointer rounded-[10px] hover:bg-[#F9FAFB] hover:text-[#175CD3] mb-2">
					<span className="material-icons-outlined text-2xl mr-3">
						settings
					</span>
					Settings
				</li>
			</ul>

			<ul className="text-[#FFFFFF]">
				<li className="w-full flex py-3 px-4 items-center cursor-pointer rounded-[10px] hover:bg-[#F9FAFB] hover:text-[#175CD3] mb-2">
					<span className="material-icons-outlined text-2xl mr-3">person</span>
					<p>Privacy</p>
				</li>
				<li className="w-full flex py-3 px-4 items-center cursor-pointer rounded-[10px] hover:bg-[#F9FAFB] hover:text-[#175CD3] mb-2">
					<span className="material-icons-outlined text-2xl mr-3">
						lightbulb
					</span>
					<p>Help</p>
				</li>
			</ul>
		</aside>
	);
}
