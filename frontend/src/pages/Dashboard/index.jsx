import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/DashboardFooter/DashboardFooter';

const DashBoard = () => (
	<>
		<div className="w-full bg-white">
			<NavigationBar />
			<div className="flex flex-col items-center justify-center mt-[1em] md:mt-[3em]">
				{/* <DashBoardSideBar /> */}
				<div className="w-full md:w-[90%] mx-auto p-[1em] ">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
		<div className="fixed bottom-0 bg-[#F9FAFB] flex justify-center items-center py-4 w-full max-md:hidden">
			<p className="font-normal text-xl text-[#1D2939] ">©reconcile.AI 2022</p>
		</div>
	</>
);

export default DashBoard;
