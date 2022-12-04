import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import logoUpdate from '../../assets/logoUpdate.svg';

const aboutUsData = [
	{
		name: 'Our Mission',
		path: '/aboutus',
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
	<footer className='bg-[#D1E9FF] px-0 py-0'>
	<div className="w-full flex flex-col max-w-[1440px] mx-auto max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:py-8 md:flex-row justify-between xl:py-[136px] max-xl:py-[81px] max-xl:px-[80px] xl:px-[160px]">
		
		<div>
			<figure className='flex flex-col max-md:h-[25px] max-md:mt-10'>
			<img className='w-full h-full' src={logoUpdate}  alt="Company logo" />
			{/* <p className='font-semibold text-[40px] leading-[50px]'>reconcile.<span className='text-[#2E90FA]'>AI</span></p> */}
			</figure>
			{/* <div className="pt-[4px] mb-[18px] w-[230px]">
				<p className="text-[#344054] font-normal text-[16px] xl:text-[20px]">
					This is a website that can help you balance your sales account
				</p>
			</div> removed According to new design */ }
			<div className="text-[#98A2B3] flex items-center gap-6 mt-6 max-md:justify-center">
				<BsTwitter className='max-md:w-5' size={34} />
				<BsFacebook className='max-md:w-5' size={34} />
				<BsInstagram className='max-md:w-5' size={34} />
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
		
		{/* Removed according to new design <div className="flex flex-col pt-[10px] xl:pt-0">
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
		</div> */}
	</div>
	</footer>
);

export default Footer;