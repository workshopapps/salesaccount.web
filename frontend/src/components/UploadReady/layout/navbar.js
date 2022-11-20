/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaFontAwesome } from 'react-icons/fa';
import SearchBar from '../searchBar';



// eslint-disable-next-line no-unused-vars
export default function Navbar({ setShowSideBar }) {
	return (
		<nav className="w-full bg-[#1849A9] px-7 py-4 flex shadow-[0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)] z-50 fixed top-0">
			<div className="flex items-center mr-6 md:mr-12">
				<div onClick={() => setShowSideBar((prev) => !prev)}>
				<FaFontAwesome icon="fa-solid fa-bars" className='cursor-pointer' />
				</div>

				<p className="font-semibold text-4xl leading-[50px] text-[#D9D9D9] ml-8 hidden md:inline-block">
					AccPal
				</p>
			</div>

			<div className="w-[40%] max-w-[500px] py-2 px-4 bg-searchBar rounded-xl flex items-center">
				<SearchBar />
			</div>

			<div className="flex gap-2 ml-auto">
				<div className="w-12 h-12 bg-[#F2F4F7] rounded-lg relative flex items-center justify-center cursor-pointer">
					<span className="material-icons-outlined text-[#ACACAC] text-2xl">
						notifications
					</span>
					<span className="w-3 h-3 rounded-full bg-[#EF4444] absolute top-3 right-3" />
				</div>

				<div className="w-12 h-12 bg-[#F2F4F7] rounded-lg relative flex items-center justify-center cursor-pointer">
					<span className="material-icons-outlined text-[#ACACAC] text-2xl">
						dark_mode
					</span>
				</div>

				<div className="w-12 h-12 bg-[#F2F4F7] rounded-lg relative flex items-center justify-center cursor-pointer">
					<span className="material-icons-outlined text-[#ACACAC] text-2xl">
						grid_view
					</span>
				</div>
			</div>
		</nav>
	);
}