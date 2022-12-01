import React, { useState } from 'react';
// import { BsSearch, BsGlobe2 } from 'react-icons/bs';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import uuid from 'react-uuid';
import Button from '../Button';
import logoUpdate from '../../assets/logoUpdate.svg';

const navLinks = [
	{ name: 'Home', path:'/'},
	{ name: 'AboutUs', path: '/aboutus' },
	{ name: 'Resources', path: '/resources' },
	{ name: 'Documentation', path: '/documentation' },
];

function NavigationBar() {
	const [nav, setNav] = useState(false);
	const toggle = () => {
		setNav(!nav);
	};
	return (
		<nav className="w-full h-[112px] bg-[#F9FAFB]  px-[72px] flex items-center justify-between max-md:px-[30px] ">
			<Link to="/">
				<figure className='h-[50px] mr-4'>
				<img
					src={logoUpdate}
					alt="Company logo"
					className="w-full h-full cursor-pointer"
				/>
				</figure>
			</Link>

			<div className="hidden xl:flex xl:gap-7 text-xl">
				{navLinks.map((item) => (
					<Link to={item.path} className="px-[10px] self-center" key={uuid()}>
						{item.name}
					</Link>
				))}
			</div>

			{/* Hamburger */}
			<div
				className=" block xl:hidden pr-2"
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
						? 'xl:hidden w-full absolute top-[112px] md:top-[96px] left-0 p-2 space-y-[40px] pt-[70px] h-4/5 bg-[#F9FAFB] z-50 flex flex-col items-center'
						: 'absolute left-[-100%] top-[-50%]'
				}
			>
				{navLinks.map((item) => (
					<Link to={item.path} className="px-[30px] font-medium" key={uuid()}>
						{item.name}
					</Link>
				))}
				<div>
					<Button title="Try it NOW" path="/dashboard/home" />
				</div>
			</div>
		</nav>
	);
}

export default NavigationBar;
