import React from 'react';
import { AiOutlineBell, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { BsGridFill, BsMoon, BsLightbulb, BsSearch } from 'react-icons/bs';
import './index.css';
import logo from "../../assets/LogoWhite.png";


const DashBoardHeader = () => (
	<header className="dashboard-header">
		<div className="dashboard-header-cont">
			<div className="dashboard-logo flex a"> <img className="w-100" src={logo} alt=' logo'/></div>
			<div className="dashboard-input-cont">
				<span className="dashboard-search-cont">
					<BsSearch />
				</span>
				<input
					className=" "
					type="text"
					placeholder="search"
				/>
			</div>
			<div className="dashboard-btns">
				<div className='dashboard-btn'><AiOutlineBell className=" " /></div>
				<div className='dashboard-btn'><BsMoon className=" " /></div>
				<div className='dashboard-btn' >
					<BsGridFill className="" />
				</div>
			</div>
		</div>
	</header>
);

export default DashBoardHeader;
