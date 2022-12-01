import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';
import NavigationBar from "../../components/NavigationBar"
import Footer from '../../components/DashboardFooter/DashboardFooter';

const DashBoard = () => (
	<div className="w-full bg-white">
		<NavigationBar />
		<div className="flex flex-col items-center justify-center h-[calc(100vh-112px)] max-md:h-[calc(100vh-180px)]">
			{/* <DashBoardSideBar /> */}
			<div className="px-[1em] w-full">
				<Outlet />
			</div>
			<div className='bg-[#F9FAFB] flex justify-center items-center py-4 w-full mt-10 max-md:hidden'>
				<p className='font-normal text-xl text-[#1D2939] '>©reconcile.AI 2022</p>
			</div>
		</div>
		<Footer />
	</div>
);

export default DashBoard;
