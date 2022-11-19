import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BsGlobe2 } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Button from '../Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo Main Color.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const [nav, setNav] = useState(false);

const navLinks = [
	{ name: 'Pricing', path: '/pricing' },
	{ name: 'About us', path: '/about' },
	{ name: 'Resources', path: '/resources' },
	{ name: 'Company', path: '/company' },
];

const toggle = () => {
	setNav(!nav);
};

const NavigationBar = () => {
	return (
		<nav className="w-full h-[48px] md:h-[96px] px-[44px] xl:px-[72px] flex items-center justify-between">
			<img
				src={logo}
				alt="Company logo"
				className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] cursor-pointer"
			/>

			<div className="hidden xl:block text-[20px]">
				{navLinks.map((item) => (
					<Link to={item.path} className="px-[30px]">
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
				<Button title="Sign up" path="/signup" primary />
				<Button title="Sign in" path="/signin" />
			</div>

			{/* Hamburger */}
			<div className=" block xl:hidden" onClick={toggle}>
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
					<Link to={item.path} className="px-[30px]">
						{item.name}
					</Link>
				))}

				<p>Search</p>

				<div className="flex items-center">
					<BsGlobe2 size={24} />
					<MdOutlineKeyboardArrowDown size={24} />
				</div>
				<Button title="Sign up" path="/" primary />
				<Button title="Sign in" path="/" />
			</div>
		</nav>
	);
};

export default NavigationBar;
