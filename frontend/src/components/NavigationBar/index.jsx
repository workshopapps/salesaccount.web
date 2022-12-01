import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import uuid from 'react-uuid';
import Button from '../Button';
import logoUpdate from '../../assets/logoUpdate.svg';

const navLinks = [
	{ name: 'About', path: '/aboutus' },
	{ name: 'Documentation', path: '/documentation' },
	{ name: 'Resources', path: '/resources' },
	{ name: 'FAQs', path: '/faqs' },
];

function NavigationBar() {
	const [nav, setNav] = useState(false);
	const toggle = () => {
		setNav(!nav);
	};
	return (
		<nav className="w-full h-[48px] md:h-[90px] lg:h-[100px] px-1 xl:px-10 xl:grid xl:grid-cols-2 flex items-center justify-between">
			<Link to="/">
				<img
					src={logoUpdate}
					alt="Company logo"
					className="ml-2 h-[25px] md:h-[70px] cursor-pointer"
				/>
			</Link>

			<div className="hidden xl:flex xl:justify-between text-xl">
				{navLinks.map((item) => (
					<Link to={item.path} className="px-[10px] self-center" key={uuid()}>
						{item.name}
					</Link>
				))}
				<div className="hidden xl:inline">
					<Button title="Try it NOW" path="/" />
				</div>
			</div>

			{/* Hamburger */}
			<div
				className=" block xl:hidden pr-2"
				onClick={() => {
					toggle();
				}}
				aria-hidden="true"
			>
				{nav ? (
					<AiOutlineClose size={28} />
				) : (
					<FiMenu size={28} color="#2E90FA" />
				)}
			</div>

			<div
				className={
					nav
						? 'xl:hidden w-full absolute top-[48px] md:top-[96px] left-0 p-2 space-y-[40px] pt-[70px] h-4/5 bg-[#F9FAFB] z-50 flex flex-col items-center'
						: 'absolute left-[-100%] top-[-50%]'
				}
			>
				{navLinks.map((item) => (
					<Link to={item.path} className="px-[30px] font-medium" key={uuid()}>
						{item.name}
					</Link>
				))}
				<div>
					<Button title="Try it NOW" path="/" />
				</div>
			</div>
		</nav>
	);
}

export default NavigationBar;
