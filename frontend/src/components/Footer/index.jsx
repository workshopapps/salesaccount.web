import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import logoUpdate from '../../assets/logoUpdate.svg';

const aboutUsData = [
	{
		name: 'Our Story',
		path: '/history',
	},
	{
		name: 'Work Environment',
		path: '/teams',
	},
	{
		name: 'Email Us',
		path: '/contact',
	},
];
const resourcesData = [
	{
		name: 'Help Center',
		path: '/privacyandhelp',
	},
	{
		name: 'Support',
		path: '/privacyandhelp',
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
];

const Footer = () => (
	<footer className="bg-[#D1E9FF] w-full flex flex-col md:flex-row justify-between py-[50px] xl:py-[100px] xl:px-[100px] px-[44px]">
		<div>
			<figure className='flex flex-col max-md:max-w-[275px]'>
			<img className='w-full' src={logoUpdate}  alt="Company logo" />
			{/* <p className='font-semibold text-[40px] leading-[50px]'>reconcile.<span className='text-[#2E90FA]'>AI</span></p> */}
			</figure>
			{/* <div className="pt-[4px] mb-[18px] w-[230px]">
				<p className="text-[#344054] font-normal text-[16px] xl:text-[20px]">
					This is a website that can help you balance your sales account
				</p>
			</div> removed According to new design */ }
			<div className="text-[#98A2B3] flex items-center gap-6 mt-6">
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
