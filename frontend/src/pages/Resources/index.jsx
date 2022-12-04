import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import resourcesheaderimg from '../../assets/images/resources/Capa 1.png';
import arrowright from '../../assets/images/resources/arrowright.svg';
import Footer from '../../components/Footer';
import Help from '../../assets/images/resources/Help.png';
import Privacy from '../../assets/images/resources/Privacy.png';
import Blogs from '../../assets/images/resources/Blogs.png';
import FAQ from '../../assets/images/resources/faq_img.png';
import Contact from '../../assets/images/resources/Contact.png';
import hero from './hero_design.png';
import hero1 from './hero_design1.png';

const data = [
	{
		id: 1,
		image: Help,
		header: 'Help Center/Support',
		subtext: 'The Corner Stone of Customer Support',
		to: `/help`,
	},
	{
		id: 2,
		image: Privacy,
		header: 'Privacy Policy',
		subtext: 'Turn data privacy to an opportunity to enhance',
		to: `/privacy`,
	},
	{
		id: 3,
		image: Blogs,
		header: 'Blogs',
		subtext: 'Common Accounting Terms Explained',
		to: `/blogs`,
	},
	{
		id: 4,
		image: FAQ,
		header: 'FAQ',
		subtext: 'Frequently Asked Questions',
		to: `/faqs`,
	},
	{
		id: 5,
		image: Contact,
		header: 'Contact',
		subtext: 'Get in touch with us',
		to: `/contact`,
	},
];

const Resources = () => (
	<div className="">
		<NavigationBar />
		<div className="relative px-4 bg-[#F2F4F7] overflow-hidden">
			<div>
				<img
					src={hero}
					alt=""
					className="w-2/12 top-[-5em] right-[-3em] absolute  "
				/>
			</div>

			<div>
				<img
					src={hero1}
					alt=""
					className="w-2/12 bottom-[-5em] left-[-3em] absolute  "
				/>
			</div>

			<div className="  pt-5 flex justify-center items-center flex-col ">
				<h1 className=" text-2xl md:text-[3.5em] font-semibold pt-9">
					Resources
				</h1>

				<p className="text-sm md:w-[40%] md:leading-[200%] mx-auto my-[1.2em]  md:text-xl text-center py-2 md:py-4">
					Get everything done with all our resources. Click on the resources
					you’d like to explore.
				</p>

				<div className=" text-center pt-4 md:pt-8">
					<img
						className=" mx-auto w-4/5 md:w-full "
						src={resourcesheaderimg}
						alt=""
					/>
				</div>
			</div>
		</div>

		<div className=" mx-auto px-7 flex flex-wrap py-8 gap-[5%] justify-center my-[1em] px:10 md:px-11 lg:px-6 xl:px-36">
			{data.map((item) => (
				<div key={item.id} className="my-[2em] ">
					<div className=" flex-grow">
						<div className=" w-72 p-5 rounded-md drop-shadow border ">
							<div className="w-full mb-4">
								<img src={item.image} alt="" className="w-[120%]" />
							</div>
							<p className=" text-md text-blue-500 pt-4">{item.header}</p>
							<h1 className=" font-semibold py-3">{item.subtext}</h1>
							<Link to={item.to} className="">
								<img src={arrowright} alt="" />
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
		<Footer />
	</div>
);

export default Resources;
