import React from 'react';
import './index.css';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import DashBoardHeader from '../../components/DashBoardHeader';

const DashBoard = () => (
	<div className='w-100'>
		<DashBoardHeader />
		<div className="dashboard-main-cont">
			<DashBoardSideBar />
			<main>dashboard</main>
		</div>
	</div>
);

export default DashBoard;
