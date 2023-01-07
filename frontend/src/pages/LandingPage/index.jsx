import React from 'react';
import Faq from 'react-faq-component';
import { BsPlusCircle } from 'react-icons/bs';
import { CiCircleMinus } from 'react-icons/ci';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import uploadIcon from '../../assets/images/landingPage/upload-icon-new.png';
import howItWorks from '../../assets/images/landingPage/howitworks.png';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const data = {
	rows: [
		{
			id: 0,
			title: 'What is ReconcileAI and how does it work?',
			content:
				'ReconcileAI is a web application that compares third-party and independent financial statements and records with internal financial records and ledgers. With the use of an AI Model and GPT -3, ReconcileAI automatically makes the accountant’s job easy and avoids errors. ReconcileAI automates tasks fast and easy for users who want to validate all transactions for the day, confirm payments and compare sales with the closing account statement.',
		},
		{
			id: 1,
			title:
				'Why should I make use of Account Pal to match my account statement to sales?',
			content:
				'ReconcileAI for SMES and SMBs saves time that would be spent if matching accounts to sales were done manually. With this web application, you can be sure to reduce human errors and fradulent risks associated with account reconciliation. ReconcileAI also ensures seamless and fast automation for users. We have put in place an amzing feature which allows users to track periodic net balance.',
		},
		{
			id: 2,
			title: 'How do I receive my report?',
			content:
				'On our ReconcileAI website, users can simply attach sales and bank statement files in a PDF file. With files uploaded, the document will be processed and returns with a file that contains the analysed and reconciled. The result can be downloaded as requested, or viewed right here on our website.',
		},
		{
			id: 3,
			title: 'Is ReconcileAI free for first time users?',
			content:
				'ReconcileAI has a 1-month trial period. When it expires, you can continue using the website for a small subscription fee.',
		},
		{
			id: 4,
			title:
				'Is there a cap on the maximum number of transactions I can do daily, weekly or monthly?',
			content:
				'There is no cap on on the number of transactions one can carry out using ReconcileAI.',
		},
		{
			id: 5,
			title: 'Can my accountants and I collaborate on ReconcileAI?',
			content:
				'Yes, you can collaborate with others on your ReconcileAI by sharing your sign-in details with them.',
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
				<div className="bg-white flex flex-col md:flex-row justify-between w-full md:w-[95%] lg:w-[80%] mt-[3em] mb-0  lg:my-[5em] h-[48vh] py-[2em] px-[1em] mx-auto  ">
					<div className="w-full md:w-[50%] md:mt-[3em] lg:mt-[2em] lg:w-[45%] space-y-[1em] leading-6">
						<h1 className="text-[#101828] text-3xl md:text-4xl lg:text-6xl font-semibold  leading-7 ">
							Account <br />
							<span className="text-[#1570EF]">Reconciliations</span> <br />
							Made Easy
						</h1>
						<p className="text-md font-light md:text-sm lg:text-lg">
							Run your business effectively with a simplified solution to
							reconcile your accounts & sales on a day-to-day basis
						</p>

						{/* CTA button  */}
						<div className="md:hidden w-full">
							<Link to="/dashboard/upload">
								<button
									type="button"
									className=" bg-[#2E90FA] text-white rounded flex justify-center align-center w-[90%] mx-auto py-[0.5em] mt-[3em]"
								>
									Upload Account Statement
								</button>
							</Link>
						</div>
					</div>

					{/* upload files here only visible in desktop */}
					<div className="hidden md:flex items-center justify-center h-max py-[2em] w-[40%] lg:w-[35%] bg-[#F9FAFB] rounded-2xl flex-col drop-shadow-xl">
						<img
							className="w-[60%] h-[60%] object-contain"
							src={uploadIcon}
							alt="uploadFile"
						/>
						<div className="w-full lg:w-[70%] mx-auto md:mt-[1em] ">
							<Link to="/dashboard/upload">
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

			{/* how it works with SCG lines  */}
			<div className="bg-[#F9FAFB] flex flex-col gap-y-[24px]  md:gap-y-[30px] md:mt-[0] md:z-50 md:relative">
				<div className="pt-[30px] flex flex-col gap-y-[1px] items-center px-[44px] md:px-0 ">
					<h2 className="font-semibold text-[#101828] md:text-4xl text-xl text-center">
						How it works
					</h2>
				</div>

				<div className="flex justify-center items-center px-4 my-[2em] md:my-[4em]">
					<img src={howItWorks} alt="how it works" />
				</div>
			</div>

			<div className=" bg-[#F9FAFB] md:mt-0  p-[1em] md:p-[3em] text-left md:text-center py-[3em] md:py-[5em] lg:py-[1em]">
				<h2 className="text-[#101828] text-left lg:text-center md:text-center font-semibold text-lg md:text-2xl lg:text-[36px] pt-[24px] md:pt-[48px] md:x-[44px] lg:x-[44px] md:px-0">
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

			{/* Frequently Asked Questions */}
			<div className="bg-[#F9FAFB] md:py-[3em] pb-[4em] md:pb-[5em] py-[1em] lg:max-w-full space-y-[5em]">
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
			</div>

			{/* Start Free Trial */}
			<div className="text-center bg-[#F2F4F7] py-[3em] md:py-[3em]  ">
				<p className="font-semibold text-xl md:text-3xl ">
					Start your free trial
				</p>
				<p className="text-[#667085] font-medium">
					Join over 4,000+ startups already growing with reconcile.
					<span className="text-[#2E90FA]">AI</span>
				</p>
				<div className="flex space-x-12 justify-center mt-[2em] md:mt-[3em]  pb-[1em] lg:pb-[3em]  ">
					<button
						type="button"
						className="bg-transparent text-[#2E90FA] font-medium  rounded px-[18px] py-[10px] shadow-sm"
					>
						Learn More
					</button>
					<Link to="/contact">
						<button
							type="button"
							className="text-white bg-[#2E90FA] font-medium rounded px-[18px] py-[10px]"
						>
							Get in Touch
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default LandingPage;
