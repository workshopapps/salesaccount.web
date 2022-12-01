import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';
import NavigationBar from "../../components/NavigationBar"
import Footer from '../../components/DashboardFooter/DashboardFooter';

const DashBoard = () => (
	<div className="w-full bg-[#f2f5f8] h-screen">
		<NavigationBar />
		<div className="flex ">
			{/* <DashBoardSideBar /> */}
			<div className="space-y-[2em] relative top-[6em] md:top-[8em] md:left-[4em] lg:left-[5em] px-[1em] w-full md:w-[70%] lg:w-[85%] mx-auto">
				<Outlet />
			</div>
		</div>
		<Footer />
	</div>
);

export default DashBoard;
