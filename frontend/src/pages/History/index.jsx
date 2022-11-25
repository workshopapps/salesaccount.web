import React from 'react';
import DashBoardHeader from '../../components/DashBoardHeader';
import DashBoardSideBar from '../../components/DashBoardSideBar';

const History = () => (
	<>
		<DashBoardHeader />
		<div className="dashboard-main-cont">
			<DashBoardSideBar />
			<main>History page code here</main>
		</div>
	</>
);

export default History;
