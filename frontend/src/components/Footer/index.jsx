import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import logoUpdate from '../../assets/logoUpdate.svg';

const aboutUsData = [
	{
		name: 'Our Mission',
		path: '/history',
	},
	{
		name: 'Our Vision',
		path: '/teams',
	},
	{
		name: 'Our Core Values',
		path: '/contact',
	},
];
const resourcesData = [
	{
		name: 'Support',
		path: '/privacyandhelp',
	},
	{
		name: 'Privacy',
		path: '/privacyandhelp',
	},
	{
		name: 'Blog',
		path: '/privacyandhelp',
	},
	{
		name: 'FAQs',
		path: '/faqs',
	},
];


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
