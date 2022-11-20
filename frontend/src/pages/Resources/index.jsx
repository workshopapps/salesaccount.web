import React from 'react';
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
	},
	{
		id: 2,
		image: Privacy,
		header: 'Privacy Policy',
		subtext: 'Turn data privacy to an opportunity to enhance',
	},
	{
		id: 3,
		image: Blogs,
		header: 'Blogs',
		subtext: 'Common Accounting Terms Explained',
	},
	{
		id: 4,
		image: FAQ,
		header: 'FAQ',
		subtext: 'Frequently Asked Questions',
	},
	{
		id: 5,
		image: Contact,
		header: 'Contact',
		subtext: 'Get in touch with us',
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

const Resources = () => {
  return (
    <div>Resources</div>
  )
}

export default Resources;
