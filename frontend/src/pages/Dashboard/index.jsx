import React from 'react';
import './index.css';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';

const DashBoard = () => (
	<>
		<DashBoardHeader />
		<div className="dashboard-main-cont">
			<DashBoardSideBar />
			<main>dashboard</main>
		</div>
	</>
);

export default DashBoard;
