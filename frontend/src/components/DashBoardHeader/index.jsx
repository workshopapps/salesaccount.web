import React from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Badge, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './DashBoardNav..css';
import logo from '../../assets/Logo White.png';

const DashBoardHeader = () => (
	<>
		{/* navbar for desktop */}
		<div className="navbar  hidden w-full md:fixed  top-0 z-20 md:flex justify-between items-center h-[7vh] bg-[#1570EF] text-white px-[0.5em] lg:px-[2em] ">
			<div className="flex justify-between items-center md:w-[50%] lg:w-[30%]">
				<div className="navbar-logo flex justify-between items-center mr-[1em] w-[10%]">
					<img
						src={logo}
						alt="Account Pal Logo"
						className="w-[40px] h-[40px] object-cover"
					/>
				</div>
				<div className="navbar-search md:w-[70%] lg:w-[70%] ">
					<input
						type="seacrh"
						placeholder="Search"
						className=" w-full rounded-md "
					/>
				</div>
			</div>

			{/* navbar icons */}
			<div className="navbar-icons flex items-center space-x-2 ">
				<div className="icons">
					<IconButton>
						<Badge badgeContent={4} color="error">
							<NotificationsOutlinedIcon
								sx={{ color: '#1570EF', fontSize: 16 }}
							/>
						</Badge>
					</IconButton>
				</div>
				<div className="icons">
					<IconButton>
						<BedtimeOutlinedIcon sx={{ color: '#1570EF', fontSize: 16 }} />
					</IconButton>
				</div>
				<div className="icons">
					<IconButton>
						<GridViewOutlinedIcon sx={{ color: '#1570EF', fontSize: 16 }} />
					</IconButton>
				</div>
			</div>
		</div>

		{/* nav for mobile */}
		<div className="fixed  md:hidden z-20 w-full navbar-mobile flex justify-between items-center h-[7vh] bg-[#1570EF] text-white  px-[1em] ">
			<Link to="/">
				<div className="navbar-logo flex justify-between items-center mr-[1em]">
					<p className="md:text-sm ">Recon</p>
				</div>
			</Link>

			{/* navbar icons */}
			<div className="navbar-mobile-icons flex items-center space-x-2 ">
				<div className="icons">
					<IconButton>
						<Badge badgeContent={4} color="error">
							<NotificationsOutlinedIcon
								sx={{ color: '#1570EF', fontSize: 16 }}
							/>
						</Badge>
					</IconButton>
				</div>
				<div className="icons">
					<IconButton>
						<BedtimeOutlinedIcon sx={{ color: '#1570EF', fontSize: 16 }} />
					</IconButton>
				</div>
				<div className="icons">
					<IconButton>
						<GridViewOutlinedIcon sx={{ color: '#1570EF', fontSize: 16 }} />
					</IconButton>
				</div>
			</div>
		</div>
	</>
);

export default DashBoardHeader;
