import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import logo from '../../assets/images/landingPage/logo.png';

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
		name: 'Privacy & Help',
		path: '/privacyandhelp',
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
];

const Footer = () => (
	<footer className="bg-[#D1E9FF] w-full flex flex-col md:flex-row justify-between py-[50px] xl:py-[100px] xl:pl-[110px] xl:pr-[307px] px-[44px]">
		<div>
			<img src={logo} alt="Company logo" />
			<div className="pt-[4px] mb-[18px] w-[230px]">
				<p className="text-[#344054] font-normal text-[16px] xl:text-[20px]">
					This is a website that can help you balance your sales account
				</p>
			</div>
			<div className="text-[#98A2B3] flex space-x-[10px] xl:space-x-[20px]">
				<BsTwitter size={32} />
				<BsFacebook size={32} />
				<BsInstagram size={32} />
			</div>
		</div>
		<div className="flex flex-col pt-[10px] xl:pt-0">
			<h3 className="font-medium text-[#344054] text-[18px] xl:text-[28px]">
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
		<div className="flex flex-col pt-[10px] xl:pt-0">
			<h3 className="font-medium text-[#344054] text-[18px] xl:text-[28px]">
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
		<div className="flex flex-col pt-[10px] xl:pt-0">
			<h3 className="font-medium text-[#344054] text-[18px] xl:text-[28px]">
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
	</footer>
);

export default Footer;
