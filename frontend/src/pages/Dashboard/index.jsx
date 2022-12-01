import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';
import NavigationBar from "../../components/NavigationBar"
import Footer from '../../components/DashboardFooter/DashboardFooter';

const DashBoard = () => (
	<div className="w-full bg-[#f2f5f8]">
		<NavigationBar />
		<div className="flex items-center justify-center h-[calc(100vh-112px)] max-md:h-[calc(100vh-180px)]">
			{/* <DashBoardSideBar /> */}
			<div className="px-[1em] w-full">
				<Outlet />
			</div>
		</div>
		<Footer />
	</div>
);

export default DashBoard;
