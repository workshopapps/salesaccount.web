import React from 'react';
import GridOnIcon from '@mui/icons-material/GridOn';
import AddIcon from '@mui/icons-material/Add';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import './DashboardSidebar.css';
import { Link } from 'react-router-dom';

function DashBoardSideBar() {
	return (
		<div className=" side-bar hidden md:fixed top-0 z-1  md:flex justify-between flex-col md:w-[20%] lg:w-[10%] h-[100vh] bg-[#1570EF] text-white pb-[4em] pt-[7em] pl-[1em] ">
			<div className="flex flex-col w-[95%] md:text-[0.8em] lg:text-[1em] md:gap-6 lg:gap-6 xl:text-[0.8em]">
				<Link to="/dashboard/home">
					<div className="flex sidenav-nav space-x-1 ">
						<GridOnIcon sx={{ fontSize: 20 }} /> <p>Dashboard</p>
					</div>
				</Link>

				<div className="flex  sidenav-nav space-x-1 ">
					<AddIcon sx={{ fontSize: 20 }} />
					<p>Import Data</p>
				</div>

				{/* <div className="flex sidenav-nav space-x-1">
					<StarBorderIcon sx={{ fontSize: 20 }} />
					<p> History</p>
				</div>

				<div className="flex sidenav-nav space-x-1">
					<SettingsIcon sx={{ fontSize: 20 }} />
					<p>Settings</p>
				</div> */}
			</div>

			<div className="flex flex-col w-[95%] md:gap-6 lg:gap-6">
				<Link to="/privacy">
					<div className="flex sidenav-nav space-x-1">
						<PersonIcon sx={{ fontSize: 20 }} />
						<p>Privacy</p>
					</div>
				</Link>
				<div className="flex sidenav-nav space-x-1">
					<LightbulbOutlinedIcon sx={{ fontSize: 20 }} />
					<p>Help</p>
				</div>
			</div>
		</div>
	);
}

export default DashBoardSideBar;
