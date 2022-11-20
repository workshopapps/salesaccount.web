import React, { useState } from 'react';
import { BsSearch, BsGlobe2 } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import uuid from 'react-uuid';
import Button from '../Button';
import logo from '../../assets/images/landingPage/logo.png';

const navLinks = [
	{ name: 'Pricing', path: '/pricing' },
	{ name: 'About us', path: '/aboutus' },
	{ name: 'Resources', path: '/resources' },
	{ name: 'Company', path: '/company' },
];

function NavigationBar() {
	const [nav, setNav] = useState(false);
	const toggle = () => {
		setNav(!nav);
	};
	return (
		<nav className="w-full h-[48px] md:h-[96px] px-[44px] xl:px-[72px] flex items-center justify-between">
			<Link to="/">
				<img
					src={logo}
					alt="Company logo"
					className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] cursor-pointer"
				/>
			</Link>

			<div className="hidden xl:block text-[20px]">
				{navLinks.map((item) => (
					<Link to={item.path} className="px-[30px]" key={uuid()}>
						{item.name}
					</Link>
				))}
			</div>
			<div className="hidden xl:flex items-center space-x-4 cursor-pointer">
				<BsSearch size={24} />

				<div className="flex items-center">
					<BsGlobe2 size={24} />
					<MdOutlineKeyboardArrowDown size={24} />
				</div>
				<Button path="/signup" isPrimary title="Sign up" />
				<Button title="Sign in" path="/signin" />
			</div>

			{/* Hamburger */}
			<div
				className=" block xl:hidden"
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
						? 'xl:hidden w-full absolute top-[48px] md:top-[96px] left-0 p-2 space-y-[40px] pt-[70px] h-screen bg-[#F9FAFB] z-50 flex flex-col items-center'
						: 'absolute left-[-100%]'
				}
			>
				{navLinks.map((item) => (
					<Link to={item.path} className="px-[30px]" key={uuid()}>
						{item.name}
					</Link>
				))}

				<p>Search</p>

				<div className="flex items-center">
					<BsGlobe2 size={24} />
					<MdOutlineKeyboardArrowDown size={24} />
				</div>
				<Button title="Sign up" path="/" isPrimary />
				<Button title="Sign in" path="/" />
			</div>
		</nav>
	);
}

export default NavigationBar;
