import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import logoUpdate from '../../assets/logoUpdate.svg';

const aboutUsData = [
	{
<<<<<<< HEAD
		name: 'Our Mission',
		path: '/history',
	},
	{
		name: 'Our Vision',
		path: '/teams',
	},
	{
		name: 'Our Core Values',
=======
		name: 'Our Story',
		path: '/history',
	},
	{
		name: 'Work Environment',
		path: '/teams',
	},
	{
		name: 'Email Us',
>>>>>>> 72348311ac6830f2c7f123f1f70dc35c39376dde
		path: '/contact',
	},
];
const resourcesData = [
	{
<<<<<<< HEAD
		name: 'Support',
		path: '/privacyandhelp',
	},
	{
		name: 'Privacy',
		path: '/privacyandhelp',
	},
	{
		name: 'Blog',
=======
		name: 'Help Center',
		path: '/privacyandhelp',
	},
	{
		name: 'Support',
>>>>>>> 72348311ac6830f2c7f123f1f70dc35c39376dde
		path: '/privacyandhelp',
	},
	{
		name: 'FAQs',
		path: '/faqs',
	},
];
<<<<<<< HEAD


const Footer = () => (
	<footer className="bg-[#D1E9FF] py-[12em]">
		<div className='flex flex-col md:flex-row justify-between w-9/12 mx-auto'>


			<div>
				<figure className='flex flex-col max-md:max-w-[275px] items-start'>
					<img className='w-10/12' src={logoUpdate} alt="Company logo"/>					
				</figure>
				
				<div className="text-[#98A2B3] flex items-center gap-6 mt-6">
					<BsTwitter size={24} />
					<BsFacebook size={24} />
					<BsInstagram size={24} />
				</div>
			</div>

			{/* About us Tab */}
			<div className="flex flex-col pt-[10px] xl:pt-0">
				<h3 className="font-medium text-[#344054] md:text-[1.8em]">
					About Us
				</h3>

				<div className='flex flex-col gap-6 mt-6'>
					{aboutUsData.map((item) => (
						<Link
							key={uuid()}
							to={item.path}
							className="text-[#344054] md:text-[1.4em]"
						>
							{item.name}
						</Link>
					))}
				</div>
=======
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
>>>>>>> 72348311ac6830f2c7f123f1f70dc35c39376dde
			</div>

			{/* Resources Tab */}
			<div className="flex flex-col pt-[10px] xl:pt-0">
				<h3 className="font-medium text-[#344054] md:text-[1.8em]">
					Resources
				</h3>

				<div className='flex flex-col gap-6 mt-6'>
					{resourcesData.map((item) => (
						<Link
							key={uuid()}
							to={item.path}
							className="text-[#344054] md:text-[1.4em]"
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>

		</div>


	</footer>
);

export default Footer;
