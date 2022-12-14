import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import uuid from 'react-uuid';
import logoUpdate from '../../assets/logoUpdate.svg';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'About Us', path: '/aboutus' },
	{ name: 'Resources', path: '/resources' },
	{ name: 'Documentation', path: '/documentation' },
];

function NavigationBar() {
	const activeStyle =
		'underline whitespace-nowrap underline-offset-8 px-[10px] font-medium text-xl text-[#2E90FA] max-lg:text-sm';
	const normalStyle =
		'px-[10px] whitespace-nowrap font-medium text-[#101828] text-xl max-lg:text-sm';
	const [nav, setNav] = useState(false);
	const toggle = () => {
		setNav(!nav);
	};
	return (
		<>
			<ScrollToTop />
			<nav className="bg-[#F9FAFB] ">
				<div className="py-[0.5em] md:py-[0.5em] lg:py-[1.5em] w-full mx-auto flex items-center justify-between  px-[2em] md:px-[5em]   ">
					<Link to="/">
						<figure className="h-[50px] lg:h-[40px] max-sm:w-[120px] max-lg:w-[200px]">
							<img
								src={logoUpdate}
								alt="Company logo"
								className="w-full h-full cursor-pointer"
							/>
						</figure>
					</Link>

					<div className="hidden md:flex lg:gap-7 text-xl max-lg:gap-3 max-md:text-base">
						{navLinks.map((item) => (
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive ? activeStyle : normalStyle
								}
								key={uuid()}
							>
								{item.name}
							</NavLink>
						))}
					</div>

					{/* Hamburger */}
					<div
						className=" block md:hidden"
						onClick={() => {
							toggle();
						}}
						aria-hidden="true"
					>
						{nav ? (
							<AiOutlineClose color="#2E90FA" size={24} />
						) : (
							<FiMenu color="#2E90FA" size={24} />
						)}
					</div>

					<div
						className={
							nav
								? 'md:hidden w-full absolute top-[112px] md:top-[80px] max-md:top-[56px] left-0 p-2 space-y-[40px] pt-[70px] max-md:pt-[30px] h-4/5 bg-[#F9FAFB] z-50 flex flex-col items-center'
								: 'absolute  left-[-100%] top-[-50%]'
						}
					>
						{navLinks.map((item) => (
							<NavLink
								className={({ isActive }) =>
									isActive ? activeStyle : normalStyle
								}
								to={item.path}
								key={uuid()}
							>
								{item.name}
							</NavLink>
						))}
					</div>
				</div>
			</nav>
			<div className="bg-[#D1E9FF] mb-4 p-3 flex justify-center items-center text-sm md:text-base lg:text-lg">
				<p className="font-medium ">
					Want to remove &#160;
					<span className="text-[#175CD3]">Ads & reCaptcha?</span>{' '}
				</p>
				<button
					type="button"
					className="text-white bg-[#2E90FA] font-medium rounded p-[0.5em] mx-2  md:mx-4 "
				>
					Support Us
				</button>
			</div>
		</>
	);
}

export default NavigationBar;
