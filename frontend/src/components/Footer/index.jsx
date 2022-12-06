import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import logoUpdate from '../../assets/logoUpdate.svg';

const aboutUsData = [
	{
		name: 'Resources',
		path: '/resources',
	},
	{
		name: 'Our Vision',
		path: '/aboutus',
	},
	{
		name: 'Our Core values',
		path: '/aboutus',
	},
];
const resourcesData = [
	{
		name: 'Support',
		path: '/contact',
	},
	{
		name: 'Privacy',
		path: '/privacy',
	},
	{
		name: 'Blogs',
		path: '/blogs',
	},
	{
		name: 'FAQs',
		path: '/faqs',
	},
];
// const ProductData = [
// 	{
// 		name: 'Pricing',
// 		path: '/pricing',
// 	},
// 	{
// 		name: 'How it works',
// 		path: '/guides',
// 	},
// 	{
// 		name: 'Features',
// 		path: '/resources',
// 	},
// removed according to new design ];

const Footer = () => (
	<footer className="bg-[#D1E9FF] py-[5em] md:py-[12em]">
		<div className="flex flex-col-reverse justify-center items-center lg:items-start lg:flex-row lg:justify-between w-9/12 mx-auto gap-[4em] lg:gap-0 align-top">
			<div className="flex flex-col justify-center lg:max-w-[20%] align-center lg:justify-start gap-[0.5rem] lg:gap-6">
				<Link to="/">
					<figure className="flex justify-start items-center flex-col lg:items-start">
						<img
							className="w-8/12 lg:w-10/12"
							src={logoUpdate}
							alt="Company logo"
						/>
					</figure>
				</Link>

				<div className="hidden text-[#98A2B3] lg:flex justify-center lg:justify-start items-center gap-6 mt-6">
					<BsTwitter size={24} />
					<BsFacebook size={24} />
					<BsInstagram size={24} />
				</div>

				<div className="text-[#98A2B3] flex justify-center lg:justify-start items-center gap-6 mt-6 lg:hidden">
					<BsTwitter size={20} />
					<BsFacebook size={20} />
					<BsInstagram size={20} />
				</div>
			</div>

			{/* About us Tab */}
			<div className="flex flex-col pt-[10px] xl:pt-0">
				<h3 className="font-medium text-[#344054] text-[1.4em] md:text-[1.8em]  text-center lg:text-left">
					About Us
				</h3>

				<div className="flex flex-col gap-6 mt-6  text-center lg:text-left">
					{aboutUsData.map((item) => (
						<Link
							key={uuid()}
							to={item.path}
							className="text-[#344054] text-[1.2em] md:text-[1.4em]  text-center lg:text-left"
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>

			{/* Resources Tab */}
			<div className="flex flex-col pt-[10px] xl:pt-0">
				<h3 className="font-medium text-[#344054] text-[1.4em] text-center lg:text-left md:text-[1.8em]">
					Resources
				</h3>

				<div className="flex flex-col gap-6 mt-6  text-center lg:text-left">
					{resourcesData.map((item) => (
						<Link
							key={uuid()}
							to={item.path}
							className="text-[#344054] text-center lg:text-left md:text-[1.4em] text-[1.2em]"
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</div>
		<div className='flex justify-center max-md:text-center gap-[276px] max-md:flex-col px-10 max-lg:gap-8'>
			<div className="flex flex-col">
				<h3 className="font-medium text-[#101828] text-[18px] xl:text-[28px]">
					About Us
				</h3>
				{aboutUsData.map((item) => (
					<Link
						to={item.path}
						key={uuid()}
						className="text-[#344054] font-normal  text-[16px] xl:text-[20px] py-[4px]"
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className="flex flex-col">
				<h3 className="font-medium text-[#101828] text-[18px] xl:text-[28px]">
					Resources
				</h3>
				{resourcesData.map((item) => (
					<Link
						key={uuid()}
						to={item.path}
						className="text-[#344054] font-normal text-[16px] xl:text-[20px] py-[4px]"
					>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	</footer>
);

export default Footer;