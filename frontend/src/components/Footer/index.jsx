import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import footerLogo from '../../assets/footerLogo.svg';

const aboutUsData = [
	{
		name: 'History',
		path: '/history',
	},
	{
		name: 'Team',
		path: '/teams',
	},
	{
		name: 'Contact Us',
		path: '/contact',
	},
];
const resourcesData = [
	{
		name: 'Help',
		path: '/help',
	},
	{
		name: 'Careers',
		path: '/careers',
	},
	{
		name: 'FAQs',
		path: '/faqs',
	},
];
const ProductData = [
	{
		name: 'Pricing',
		path: '/pricing',
	},
	{
		name: 'How it works',
		path: '/guides',
	},
	{
		name: 'Features',
		path: '/resources',
	},
	{
		name: 'Documentation',
		path: '/documentation',
	},
	{
		name: 'Privacy',
		path: '/privacy',
	},
];

const Footer = () => (
	<footer className="bg-[#D1E9FF] w-full ">
		<div className="max-w-screen-xl text-center mx-auto flex flex-col md:flex md:flex-row md:justify-between">
			<div className="hidden text-center md:p-10 md:flex md:flex-col">
				<img src={footerLogo} alt="Company logo" />
				<div className="text-[#98A2B3] mx-auto flex space-x-[10px] xl:space-x-[20px]">
					<BsTwitter size={32} />
					<BsFacebook size={32} />
					<BsInstagram size={32} />
				</div>
			</div>
			<div className="flex flex-col pt-[10px] md:pt-0 xl:pt-0">
				<h3 className="font-medium text-[#344054] pt-4 text-[18px] xl:text-[28px]">
					About Us
				</h3>
				{aboutUsData.map((item) => (
					<Link
						to={item.path}
						key={uuid()}
						className="text-[#344054] font-normal  text-[16px] xl:text-[20px] py-[4px] "
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className="flex flex-col pt-[10px] md:pt-0">
				<h3 className="font-medium text-[#344054] pt-4 text-[18px] xl:text-[28px]">
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
			<div className="flex flex-col pt-[10px] md:pt-0">
				<h3 className="font-medium text-[#344054] pt-4 text-[18px] xl:text-[28px]">
					Product
				</h3>
				{ProductData.map((item) => (
					<Link
						to={item.path}
						key={uuid()}
						className="text-[#344054] font-normal text-[16px] xl:text-[20px] py-[4px]"
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className="md:hidden w-2/5 mx-auto flex flex-col">
				<img src={footerLogo} alt="Company logo" />
				<div className="text-[#98A2B3] flex space-x-[12px] xl:space-x-[20px]">
					<BsTwitter size={32} />
					<BsFacebook size={32} />
					<BsInstagram size={32} />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
