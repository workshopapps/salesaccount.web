import React from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';
import Footer from '../../components/DashboardFooter/DashboardFooter';

const DashBoard = () => (
	<div className="w-full h-screen bg-[#F9FAFB]">
		<DashBoardHeader />
		<div className="flex">
			<DashBoardSideBar />
			<div className="space-y-[2em] relative top-[5em] md:top-[8em] md:left-[4em] lg:left-[5em] px-[1em] w-full md:w-[80%] lg:w-[85%] mx-auto">
				<Outlet />
			</div>
		</div>
		<Footer />
	</div>
);

export default DashBoard;
