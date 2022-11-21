import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import resourcesheaderimg from '../../assets/images/resources/Capa 1.png';
import arrowright from '../../assets/images/resources/arrowright.svg';
import Footer from '../../components/Footer';
import Help from '../../assets/images/resources/Help.png';
import Privacy from '../../assets/images/resources/Privacy.png';
import Blogs from '../../assets/images/resources/Blogs.png';
import FAQ from '../../assets/images/resources/FAQ.png';
import Contact from '../../assets/images/resources/Contact.png';

const data = [
	{
		id: 1,
		image: Help,
		header: 'Help Center/Support',
		subtext: 'The Corner Stone of Customer Support',
		to: `/privacyandhelp`,
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
	<div>
		<NavigationBar />
		<div className=" px-4 bg-blue-200">
			<div className="  pt-5 flex justify-center items-center flex-col ">
				<h1 className=" text-2xl md:text-4xl font-semibold pt-9">Resources</h1>

				<p className=" text-sm text-center px-5 py-7">
					Get everything done with all our resources. Click on the resources
					you’d like to explore.
				</p>

				<div className=" text-center">
					<img
						className=" mx-auto max-h-20 md:max-h-32"
						src={resourcesheaderimg}
						alt=""
					/>
				</div>
			</div>
		</div>

		<div className=" px-7 flex py-5 flex-wrap gap-4 justify-center mb px:10 md:px-11 lg:px-6 xl:px-36">
			{data.map((item) => (
				<div key={item.id}>
					<div className=" ">
						<div className=" w-72 p-5 rounded-md drop-shadow border ">
							<img src={item.image} alt="" />
							<p className=" text-md text-blue-500 pt-2">{item.header}</p>
							<h1 className=" font-semibold py-3">{item.subtext}</h1>
							<Link to={item.to}>
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
