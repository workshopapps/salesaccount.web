import React from 'react';
import {
	BsTwitter,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsWhatsapp,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import logoUpdate from '../../assets/logoUpdate.svg';
import twitter from '../../assets/images/SocialLogos/twitter.svg';
import linkedin from '../../assets/images/SocialLogos/linkedin.svg';
import whatsapp from '../../assets/images/SocialLogos/whatsapp.svg';
import link from '../../assets/images/SocialLogos/Link.svg';

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
const socialLinks = [
	{
		link: 'https://twitter.com/reconcileai',
		image: twitter,
	},
	{
		link: 'https://www.linkedin.com/in/reconcile-ai-/',
		image: linkedin,
	},
	{
		link: 'https://wa.me/2347030546907',
		image: whatsapp,
	},
];

const Footer = () => (
	<>
		<div className="text-center space-y-[1em] bg-[#EFF8FF] py-[3em] md:py-[4em] my-[0.2em] ">
			<p className="font-medium lg:text-xl">
				Share reconcile.AI with your friends
			</p>
			<div className="flex justify-center items-center">
				{socialLinks.map((item) => (
					<a key={uuid()} href={item.link}>
						<img
							className="h-[30px] w-[30px] mx-1 md:mx-2 lg:mx-3 rounded-full object-contain drop-shadow-md"
							src={item.image}
							alt="logoIcon"
						/>
					</a>
				))}

				<a href="https://wa.me/2347030546907">
					<img
						className="h-[30px] w-[30px] bg-white p-1.5 mx-1 md:mx-2  lg:mx-3  rounded-full object-contain drop-shadow-md"
						src={link}
						alt="logoIcon"
					/>
				</a>
			</div>
		</div>

		<footer className="bg-[#D1E9FF] py-[5em] md:py-[7em]">
			<div className="flex flex-col-reverse justify-center items-center lg:items-start lg:flex-row lg:justify-between w-9/12 mx-auto gap-[4em] lg:gap-0 align-top">
				<div className="flex flex-col justify-center lg:max-w-[20%] align-center lg:justify-start gap-[0.5rem] lg:gap-0">
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
						<a href="https://twitter.com/reconcileai">
							<BsTwitter size={24} />
						</a>
						<a href="https://www.linkedin.com/in/reconcile-ai-/">
							<BsLinkedin size={24} />
						</a>
						<a href="https://wa.me/2347030546907">
							<BsWhatsapp size={24} />
						</a>
					</div>

					<div className="text-[#98A2B3] flex justify-center lg:justify-start items-center gap-6 mt-6 lg:hidden">
						<a href="https://twitter.com/reconcileai">
							<BsTwitter size={20} />
						</a>
						<a href="https://www.linkedin.com/in/reconcile-ai-/">
							<BsLinkedin size={20} />
						</a>
						<a href="https://wa.me/2347030546907">
							<BsWhatsapp size={20} />
						</a>
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
		</footer>
	</>
);

export default Footer;
