import React, { useState } from 'react';
// import { BsSearch, BsGlobe2 } from 'react-icons/bs';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import uuid from 'react-uuid';
import Button from '../Button';
import logoUpdate from '../../assets/logoUpdate.svg';
import logo from '../../assets/logo.png';

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'AboutUs', path: '/aboutus' },
	{ name: 'Resources', path: '/resources' },
	{ name: 'Documentation', path: '/documentation' },
];

function NavigationBar() {
	const activeStyle = {
		textDecoration: 'underline',
		color: '#2E90FA',
		textUnderlineOffset: '0.5em',
	};
	const [nav, setNav] = useState(false);
	const toggle = () => {
		setNav(!nav);
	};
	return (
		<nav className="bg-[#F9FAFB] border-b py-2">
			<div className="h-[7vh] w-full px-[1em] md:px-[3em] lg:px-[7em] flex items-center justify-between">
				<Link to="/">
					<div className="flex items-center w-[30%]">
						<img
							src={logo}
							alt="logo"
							className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
						/>

						<p className="mt-1 md:text-lg lg:text-xl">
							reconcile.<span className="text-[#2E90FA] font-bold">AI</span>{' '}
						</p>
					</div>
				</Link>

				<div className="hidden lg:flex lg:gap-12 text-md">
					{navLinks.map((item) => (
						<NavLink
							to={item.path}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							className="px-[10px] self-center font-medium text-[#101828] "
							key={uuid()}
						>
							{item.name}
						</NavLink>
					))}
				</div>

				{/* Hamburger */}
				<div
					className=" block lg:hidden"
					onClick={() => {
						toggle();
					}}
					aria-hidden="true"
				>
					{nav ? <AiOutlineClose size={28} /> : <FiMenu size={28} />}
				</div>

				<div
					className={
						nav
							? 'lg:hidden w-full absolute top-[3em] md:top-[7vh] left-0 p-2 space-y-[40px] pt-[70px] h-[60vh] bg-[#F9FAFB] z-50 flex flex-col items-center border-b '
							: 'absolute left-[-100%] top-[-50%]'
					}
				>
					{navLinks.map((item) => (
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={item.path}
							className="px-[30px] font-medium text-[#101828] text-xl"
							key={uuid()}
						>
							{item.name}
						</NavLink>
					))}
					<div>
						<Button title="Try it NOW" path="/dashboard/home" />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavigationBar;
