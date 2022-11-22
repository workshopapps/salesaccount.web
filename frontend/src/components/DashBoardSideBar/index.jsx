import React, { useState } from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { VscNewFile } from 'react-icons/vsc';
import { AiOutlineHistory } from 'react-icons/ai';
import { MdOutlinePrivacyTip, MdOutlineLiveHelp } from 'react-icons/md';
import './index.css';
import addfileIcon from '../../assets/images/dashboard/svgs/addfile.svg';
import historyIcon from '../../assets/images/dashboard/svgs/history.svg';
import settingIcon from '../../assets/images/dashboard/svgs/settings.svg';
// import { func } from 'prop-types';
// import { UsageState } from 'webpack';
// import ad from '../../assets/images/dashboard/svgs/addfile.svg'
// import addfileIcon from '../../assets/images/dashboard/svgs/addfile.svg'

const sideBarTopData = [
	{
		id: 1,
		path: '/dashboard',
		name: 'Dashboard',
		Icon: <RiDashboardLine />,
	},
	{
		id: 2,
		path: '/userupload',
		name: 'Import Data',
		Icon: <VscNewFile />,
	},
	{
		id: 3,
		path: '/history',
		name: 'History',
		Icon: <AiOutlineHistory />,
	},
	{
		id: 4,
		path: '/settings',
		name: 'Settings',
		Icon: <IoSettingsOutline />,
	},
];

const sideBarBottomData = [
	{
		id: 5,
		path: '/privacy',
		name: 'Privacy',
		Icon: <MdOutlinePrivacyTip />,
	},
	{
		id: 6,
		path: '/help',
		name: 'Help',
		Icon: <MdOutlineLiveHelp />,
	},
];

function DashBoardSideBar() {
	const [open, setOpen] = useState(true);

	return (
		<div
			className={`${
				open ? 'w-72' : 'absolute'
			} h-screen bg-primary-blue flex  flex-col justify-between pr-10 pl-20 sideBar `}
		>
			<ul className="pt-6 w-100% ">
				{sideBarTopData.map((navBtn) => (
					<li
						key={navBtn.id}
						className="w-80% text-light-white flex items-center gap-x-4 cursor-pointer rounded-md hover:bg-light-white hover:text-primary-blue"
					>
						<a
							href={navBtn.path}
							title={navBtn.name}
							className="sideBarBtnLink flex p-3 items-center gap:10rem"
						>
							<p>{navBtn.Icon}</p>
							<p>{navBtn.name}</p>
						</a>
					</li>
				))}
			</ul>
			<ul>
				{sideBarBottomData.map((navBtn) => (
					<li
						key={navBtn.id}
						className="text-light-white flex items-center gap-x-4 cursor-pointer rounded-md hover:bg-light-white"
					>
						<a href={navBtn.path} className=" flex p-3 items-center gap-5">
							<p>{navBtn.Icon}</p>
							<p>{navBtn.name}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default DashBoardSideBar;
