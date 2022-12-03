import React from 'react';
import Faq from 'react-faq-component';
import { BsPlusCircle } from 'react-icons/bs';
import { CiCircleMinus } from 'react-icons/ci';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { requirePropFactory } from '@mui/material';
import { Link } from 'react-router-dom';
import uploadIcon from '../../assets/images/landingPage/upload-icon-new.png';
import howItWorks from '../../assets/images/landingPage/howitworks.png';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import getInTouch from '../../assets/images/landingPage/landingpage__intouch.png';
import userImage from '../../assets/images/landingPage/what_our_users_are_saying.png';
import companyLogo from '../../assets/images/landingPage/landingpage_company_img.png';
import headerImage from '../../assets/images/landingPage/recon-header-img.png';
import cuttingImage from '../../assets/images/landingPage/landingpage__cutting.png';
import mobileDashboard from '../../assets/images/landingPage/recon-mobile.png';
import mobileCompany from '../../assets/images/landingPage/mobile_company.png';
import iphoneScreen from '../../assets/images/landingPage/landingpage__iphone.png';

const data = {
	rows: [
		{
			id: 1,
			title: 'What is Account Pal and how does it work?',
			content: `Account Pal is a web application that compares third-party and independent financial statements and records with internal financial records and ledgers. `,
		},
		{
			id: 2,
			title:
				'Why should I make use of Account Pal to match my account statement to sales?',
			content: `Account Pal for SME'S and SMBs helps save time that would otherwise be spent manually matching accounts statements to sales. 
With this Web application, you can be sure to eliminate human errors and fraudulent risks associated with account reconciliation. 
`,
		},
		{
			id: 3,
			title: 'How do I receive an overview of my report?',
			content: `Account Pal allows users to import sales and bank statements. These documents will then be processed and you'll receive a file with the analysis and reconciliation.`,
		},
		{
			id: 4,
			title: 'What are account statements?',
			content: `It is a periodic summary of account activity within a defined period. `,
		},
		{
			id: 5,
			title: 'Is Account Pal free for first-time users?',
			content: `Account Pal has a free 1-month trial period. When this expires, you can continue using the site for a small subscription fee.`,
		},
		{
			id: 6,
			title:
				'Is there a cap on the maximum number of transactions I can do weekly or monthly?',
			content: `There is no cap on the number of transactions one can carry out using Account Pal.`,
		},
	],
};

const styles = {
	bgColor: '#F9FAFB',
	titleTextColor: '#101828',
	titleTextSize: '36px',
	rowTitleColor: '#101828',
	rowTitleTextSize: '18px',
	rowContentColor: '#667085',
	rowContentTextSize: '16px',
	arrowColor: '#1570EF',
	
};

const config = {
	animate: true,
	arrowIcon: 'V',
	openOnload: 0,
	expandIcon: <BsPlusCircle />,
	collapseIcon: <CiCircleMinus />,
};

const importantFeaturesData = [
	{
		number: '11',
		content:
			'Authenticate and balance account and sales statement automatically',
	},
	{
		number: '22',
		content:
			'Authenticate and balance account and sales statement automatically',
	},
	{
		number: '33',
		content:
			'Compare independent financial records to internal financial records and ledger',
	},
];

const whatAccountPalDoesData = [
	{
		id: 111,
		title: 'API Technology',
		content:
			'Create the stage for accurate account balance with our existing template. Add your sales or import them automatically from a spreadsheet.',
	},
	{
		id: 222,
		title: 'GPT-3',
		content:
			'Import ot upload your sales with our existing template. Add your sales or import them automatically from a spreadsheet',
	},
	{
		id: 333,
		title: 'SMEs and SMBs',
		content:
			'After the import and matching the sales record the system with the AI system Balanced your account statement and download',
	},
];

const pickPlanData = [
	{
		id: 11111,
		title: 'FREE',
		icon1: <AiOutlineCheck />,
		content1: '100 free downloads',
		icon2: <AiOutlineClose />,
		content2: '100 free downloads',
		icon3: <AiOutlineClose />,
		content3: '100 free downloads',
		icon4: <AiOutlineClose />,
		content4: '100 free downloads',
		button_content: 'Choose Free  Plan',
	},
	{
		id: 22222,
		title: 'BASIC',
		icon1: <AiOutlineCheck />,
		content1: '100 free downloads',
		icon2: <AiOutlineCheck />,
		content2: '100 free downloads',
		icon3: <AiOutlineClose />,
		content3: '100 free downloads',
		icon4: <AiOutlineClose />,
		content4: '100 free downloads',
		button_content: 'Choose Basic  Plan',
	},
	{
		id: 33333,
		title: 'PRO',
		icon1: <AiOutlineCheck />,
		content1: '100 free downloads',
		icon2: <AiOutlineCheck />,
		content2: '100 free downloads',
		icon3: <AiOutlineCheck />,
		content3: '100 free downloads',
		icon4: <AiOutlineCheck />,
		content4: '100 free downloads',
		button_content: 'Choose Pro  Plan',
	},
];

const trustedByFeaturesData = [
	{
		number: '1',
		title: 'Visit Account Pal',
		content:
			'Create the stage for accurate account balance with our exiting template. Add your sales or import them automatically from a spreadsheet . ',
	},
	{
		number: '2',
		title: 'Upload Sales Record',
		content:
			'Import or upload your sales Record with our exiting template. Add your sales or import them automatically from a spreadsheet. ',
	},
	{
		number: '3',
		title: 'Download File ',
		content:
			'After the import and matching the sales record the syatem with the AI system, balance your Account statement and Download ',
	},
];

function LandingPage() {
	return (
		<div>
			<NavigationBar />
			<div>
				<div className="bg-white flex flex-col md:flex-row justify-between w-full md:w-[95%] lg:w-[80%] my-[3em] lg:my-[5em] h-[40vh] py-[2em] px-[1em] mx-auto  ">
					<div className="w-full md:w-[50%] md:mt-[3em] lg:mt-[2em] lg:w-[45%] space-y-[1em] leading-6">
						<h1 className="text-[#101828] text-3xl md:text-4xl lg:text-6xl font-semibold  ">
							Account
							<span className="text-[#1570EF]"> Reconciliations</span> Made Easy
						</h1>
						<p className="text-md font-light md:text-sm lg:text-lg">
							Run your business effectively with a simplified solution to
							reconcile your accounts & sales on a day-to-day basis
						</p>
						{/* <Button title="Try it NOW" path="/dashboard/home" /> */}

						{/* CTA button  */}
						<div className="md:hidden w-full">
							<Link to="/dashboard/home">
								<button
									type="button"
									className=" bg-[#2E90FA] text-white rounded flex justify-center align-center w-[90%] mx-auto py-[0.5em] mt-[3em]"
								>
									Upload Account Statement
								</button>
							</Link>
						</div>
					</div>

					{/* <img
							src={headerImage}
							alt="Dashboard"
							className="hidden md:flex md:w-[350px] lg:w-[613px] md:h-[210px] lg:h-[387px]"
						/>
						<div className="flex justify-center">
							<img
								src={mobileDashboard}
								alt="Dashboard"
								className=" md:hidden"
							/>
						</div> */}

					{/* upload files here only in desktop */}
					<div className="hidden md:flex items-center justify-center w-[40%] lg:w-[35%] bg-[#F9FAFB] rounded-2xl flex-col shadow-xl">
						<img
							className="w-[60%] h-[60%] object-contain"
							src={uploadIcon}
							alt="uploadFile"
						/>
						<div className="w-full lg:w-[70%] mx-auto md:mt-[1em] ">
							<Link to="/dashboard/home">
								<button
									type="button"
									className=" bg-[#2E90FA] text-white text-xs py-2 w-[70%] mx-auto rounded border-[1px] border-[#2E90FA] flex justify-center align-center "
								>
									Upload Account Statement
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* how it works  */}
			<div className="bg-[#F9FAFB] flex flex-col gap-y-[24px]  md:gap-y-[30px] md:mt-[3em] md:z-50 md:relative">
				{/* <h2 className="md:pt-[25px] pt-[20px] font-semibold md:text-[20px] text-[12px] text-[#344054] text-center">
					Trusted By 100,000+ companies in 179 countries
				</h2> */}
				{/* <div className="w-full px-[44px] md:px-[110px] md:pt-[26px] pt-[24px] pb-[40px] md:pb-[66px]">
					<img
						src={companyLogo}
						alt="company"
						className="w-screen hidden md:flex"
					/>
					<img
						src={mobileCompany}
						alt="company"
						className="w-screen md:hidden"
					/>
				</div> */}

				<div className="bg-[#F9FAFB]">
					<div className="pt-[30px] flex flex-col gap-y-[1px] items-center px-[44px] md:px-0 ">
						<h2 className="font-semibold text-[#101828] md:text-4xl text-xl text-center">
							How it works
						</h2>
					</div>
					{/* <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[120px] px-[44px] md:px-[110px] pb-[34px] md:pb-[68px]">
						{trustedByFeaturesData.map((item) => (
							<div className="flex flex-col items-center w-full ">
								<h3 className="text-[#fff] font-bold text-[56px] md:text-[80px]">
									{item.number}
								</h3>
								<h3 className="text-[#fff] font-semibold text-center text-[16px] md:text-[20px]">
									{item.title}
								</h3>
								<div className="w-[300px] text-center">
									<p className="text-[#fff] font-normal text-[14px] md:text-[16px] ">
										{item.content}
									</p>
								</div>
							</div>
						))}
					</div> */}
					<div className="flex justify-center items-center px-4 my-[2em] md:my-[4em]">
						<img src={howItWorks} alt="how it works" />
					</div>
				</div>
			</div>

			{/* <div className="bg-[#F9FAFB]">
				<div className="pt-[48px] text-center">
					<h1 className="text-[#101828] font-semibold text-[28px] md:text-[36px]">
						Pick Your Plan
					</h1>
					<p className="text-[#667085] text-[16px]">
						Choose a plan that suits your Business
					</p>
				</div>
				<div className="flex flex-col xl:flex-row gap-[64px] pt-[60px] items-center px-[44px] xl:px-[110px]  pb-[57px] xl:pb-[92px]">
					{pickPlanData.map((item, i) => (
						<div
							className="flex flex-col border border-[#D0D5DD] items-center text-center "
							key={item.id}
						>
							<div className=" h-[330px] xl:h-[444px] xl:w-[350px]  w-[300px] md:h-[400px] flex flex-col items-center">
								<h2 className=" text-[#101828] font-semibold md:pt-[41px] pt-[30px] text-[21px] md:text-[24px]">
									{item.title}
								</h2>
								<div className=" font-normal text-[#858585] flex flex-col items-center gap-y-[20px] md:pt-[30px]">
									<div className="flex items-center ">
										<p className="pr-[8px]">{item.icon1}</p>
										<p className="text-[16px]">{item.content1}</p>
									</div>
									<div className="flex items-center">
										<p className="pr-[8px] ">{item.icon2}</p>
										<p className="text-[16px]">{item.content2}</p>
									</div>
									<div className="flex items-center">
										<p className="pr-[8px]">{item.icon3}</p>
										<p className="text-[16px]">{item.content3}</p>
									</div>
									<div className="flex items-center">
										<p className="pr-[8px] ">{item.icon4}</p>
										<p className="text-[16px]">{item.content4}</p>
									</div>
									<div className="cursor-pointer text-[#101828] font-semibold text-[14px] border border-[#858585] px-[28px] py-[16px] rounded-md mt-[8px] md:mt-[18px]">
										{item.button_content}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div> */}

			{/* <div className="bg-[#EFF8FF] flex flex-col items-center px-[44px] xl:px-0">
				<h2 className="text-[#101828] md:pt-[108px] text-center font-medium md:font-semibold text-[24px] xl:text-[36px]">
					Cutting-edge features for advanced analytics
				</h2>
				<div className="w-[289px] xl:w-[700px] pb-[64px]">
					<p className="font-normal text-[#667085] text-center text-[14px] md:text-[20px] pt-[8px]">
						Powerful, self-serve product and growth analytics to help you
						convert, match sales. Trusted by over 4,000 startups.
					</p>
				</div>
				<img
					src={cuttingImage}
					alt="Dashboard"
					className="hidden md:flex pb-[48px]"
				/>
				<img
					src={iphoneScreen}
					alt="Dashboard"
					className="md:hidden pb-[48px]"
				/>
			</div> */}

			<div className=" bg-[#F9FAFB] md:mt-0  p-[1em] md:p-[3em] text-left md:text-center py-[3em] md:py-[5em] lg:py-[7em]">
				<h2 className="text-[#101828] font-semibold text-lg md:text-2xl lg:text-[36px] pt-[24px] md:pt-[48px] px-[44px] md:px-0">
					Why Choose reconcile.<span className="text-[#2E90FA]">AI</span>?
				</h2>

				<div className="flex flex-col w-full md:flex-row justify-evenly md:text-center md:py-[2em]">
					{whatAccountPalDoesData.map((item) => (
						<div
							className=" w-full md:w-[30%] lg:w-[20%] mt-[2em]  "
							key={item.id}
						>
							<div className="md:text-center space-y-[1em]">
								<h2 className="font-semibold text-[#101828]  text-xl lg:text-2xl ">
									{item.title}
								</h2>
								<p className="text-[#667085] flex justify-center font-normal text-md  md:text-sm md:text-center sm:text-xs">
									{item.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <div className="bg-[#F2F4F7] hidden md:flex flex-col">
				<h1 className="text-[#101828] font-semibold text-center md:text-[24px] xl:text-[36px] pt-[48px]">
					Important Features
				</h1>
				<div className="flex md:flex-col xl:flex-row md:gap-[60px] xl:gap-[120px] xl:px-[110px] pt-[64px] pb-[82px]  items-center">
					{importantFeaturesData.map((item) => (
						<div
							className="flex flex-col items-center md:w-[300px] xl:w-[600px]"
							key={item.number}
						>
							<h3 className="text-[#101828] font-bold text-[80px]">
								{item.number}
							</h3>
							<h4 className="text-[#101828] font-normal text-center text-[16px] ">
								{item.content}
							</h4>
						</div>
					))}
				</div>
			</div> */}

			{/* <div className="bg-[#F9FAFB] flex flex-col items-center">
				<h1 className="text-[#101828] font-semibold text-[24px] md:text-[36px] text-center pb-[24px] md:pb-[32px] pt-[48px]">
					What our users are saying
				</h1>
				<div className="w-[276px] md:w-[540px] md:h-[206px] rounded-2xl border border-[#98A2B3] flex flex-col items-center gap-[6px]">
					<p className="text-[#667085] text-[16px] font-medium px-[8px] pt-[18px] text-center">
						As an account that struggles to balance account statement
						accurately, account Pal has made life better for me. Now I can sum
						all transaction easily, spot duplicate transactions reconcile
						transactions easily.
					</p>
					<p className="font-semibold text-[16px] text-[#101828] tracking-tighter pt-[15px]">
						Uche Donald
					</p>
					<span className="font-normal text-[14px] text-[#667085]">-Zuri</span>
				</div>
				<img
					src={userImage}
					alt="What our users are saying"
					className="hidden md:flex object-contain md:pt-[15px] md:px-[54px] xl:px-0 xl:py-[84px]"
				/>
				<img
					src={userImage}
					alt="What our users are saying"
					className=" md:hidden object-contain py-[24px] px-[44px]"
				/>
			</div> */}

			{/* <div className="bg-[#F2F4F7]">
				<div className="md:py-[84px] py-[24px]  flex flex-col items-center">
					<h2 className="text-[#101828] font-semibold text-center text-[24px] md:text-[36px]">
						Start your free trials
					</h2>
					<p className="pb-[60px] text-[#667085] text-[16px] md:text-[20px] text-center px-[44px] md:px-0">
						Join over 4,000+ startups already growing with Account Pal.
					</p>
					<div className="flex gap-[64px]">
						<Button path="/resources" isPrimary title="Learn More" />
						<Button path="/aboutus" title="Get in touch" />
					</div>
				</div>
			</div> */}

			<div className="bg-[#F9FAFB] md:py-[3em] md:pb-[5em] py-[1em] lg:max-w-full">
				<div className="lg:px-[50px]  px-[14px] ">
					<div className="leading-[20px] my-[2em]">
						<h2 className="font-semibold text-xl md:text-3xl text-center">
							Frequently Asked Questions
						</h2>
						<p className="text-[#667085] text-center py-4">
							Everything you need to know about the product and billing
						</p>
					</div>
					<div className="md:w-[80%] text-xs md:text-md leading-[200%] mx-auto">
						<Faq data={data} styles={styles} config={config} />
					</div>
				</div>

				<div className=" md:px-[54px] xl:px-[282px] mt-[50px]">
					<div className="bg-[#F2F4F7] rounded-3xl px-[44px] md:px-[217px] py-[26px] flex flex-col items-center">
						<img
							src={getInTouch}
							alt="Get in touch"
							className="max-w-[130px] h-[63px] object-contain"
						/>
						<p className="text-[#101828] text-[16px] md:text-[18px] font-medium">
							Still have questions?
						</p>
						<p className="font-normal text-[#667085] text-[10px] md:text-[18px] pb-[24px] text-center px-[44px] md:px-0">
							Can&apos;t find the answer you&apos;re looking for?
						</p>
						<Button path="/faqs" title="View more" />
					</div>
				</div>
			</div>
			<div className="text-center bg-[#F2F4F7] py-[2em] md:py-[3em] ">
				<p className="font-semibold text-xl md:text-3xl ">
					Start your free trial
				</p>
				<p className="text-slate-700">
					Join over 4,000 startups already growing with reconcileAI
				</p>
				<div className="flex space-x-12 justify-center mt-[20px] ">
					<button
						type="button"
						className="bg-white text-[#2E90FA] rounded px-[18px] py-[10px]"
					>
						Learn More
					</button>
					<Button path="/contact" title="Get in touch" />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default LandingPage;