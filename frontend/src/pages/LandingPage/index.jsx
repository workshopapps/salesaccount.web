import React from 'react';
import Faq from 'react-faq-component';
import { BsPlusCircle } from 'react-icons/bs';
import { CiCircleMinus } from 'react-icons/ci';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import getInTouch from '../../assets/images/landingPage/landingpage__intouch.png';
import userImage from '../../assets/images/landingPage/what_our_users_are_saying.png';
import companyLogo from '../../assets/images/landingPage/landingpage_company_img.png';
import headerImage from '../../assets/images/landingPage/landingpage__header.png';
import cuttingImage from '../../assets/images/landingPage/landingpage__cutting.png';
import mobileDashboard from '../../assets/images/landingPage/mobile_dashboard.png';
import mobileCompany from '../../assets/images/landingPage/mobile_company.png';
import iphoneScreen from '../../assets/images/landingPage/landingpage__iphone.png';

const data = {
	title: 'Frequently asked questions ',
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
		title: 'Spot Errors',
		content:
			'Now you can seamlessly compile account statement and sales effectively',
	},
	{
		id: 222,
		title: 'Balances your account statement',
		content:
			'Automate Your bookkeeping easier with Account Pal to focus on what matters most, Your business',
	},
	{
		id: 333,
		title: 'Track expenditure better',
		content:
			'Never worry about income vs expenditure sheets. Account Pal there for you',
	},
	{
		id: 444,
		title: 'Stuck with a business idea?',
		content:
			'Our Open AI model combined with your business data can forecast future cost and predict if a new product will be profitable',
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
			<div className="bg-[#EFF8FF] flex flex-col items-center justify-center gap-y-[8px] md:gap-y-[16px] z-40 relative w-full">
				<div className=" w-[273px] md:w-[573px] xl:w-[1085px] xl:leading-[92px] pt-[50px] ">
					<h1 className="text-[#101828] text-[28px] md:text-[72px] font-semibold text-center">
						An easy <span className="text-[#1570EF]">Sales and Accounting</span>{' '}
						system made for you
					</h1>
				</div>
				<div className="w-[273px] xl:w-[850px] pb-[24px]">
					<p className="text-[#101828] font-normal text-[12px] xl:text-[20px] text-center">
						Run your business effectively with a simplified solution to
						reconcile your accounts & sales on a day - to - day basis
					</p>
				</div>

				<Button title="Dashboard" path="/dashboard" />
				<img
					src={headerImage}
					alt="Dashboard"
					className=" hidden md:flex w-[500px]"
				/>
				<img src={mobileDashboard} alt="Dashboard" className=" md:hidden" />
			</div>

			<div className="bg-[#F9FAFB] flex flex-col gap-y-[24px]  md:gap-y-[30px] md:mt-[-160px] md:z-50 md:relative">
				<h2 className="md:pt-[25px] pt-[20px] font-semibold md:text-[20px] text-[12px] text-[#344054] text-center">
					Trusted By 100,000+ companies in 179 countries
				</h2>
				<div className="w-full px-[44px] md:px-[110px] md:pt-[26px] pt-[24px] pb-[40px] md:pb-[66px]">
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
				</div>

				<div className="flex flex-col gap-y-[1px] items-center px-[44px] md:px-0">
					<h1 className="font-semibold text-[#101828] md:text-[36px] text-[20px] text-center">
						Balance your account in 3 easy steps
					</h1>
					<p className="text-[#667085] md:text-[20px] text-[16px] font-normal">
						Balance your account in 3 Steps
					</p>
				</div>
				<div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[120px] px-[44px] md:px-[110px] pb-[34px] md:pb-[68px]">
					{trustedByFeaturesData.map((item) => (
						<div className="flex flex-col items-center w-full ">
							<h3 className="text-[#101828] font-bold text-[56px] md:text-[80px]">
								{item.number}
							</h3>
							<h3 className="text-[#101828] font-semibold text-center text-[16px] md:text-[20px]">
								{item.title}
							</h3>
							<div className="w-[300px] text-center">
								<p className="text-[#667085] font-normal text-[14px] md:text-[16px] ">
									{item.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-[#F9FAFB]">
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
			</div>

			<div className="bg-[#EFF8FF] flex flex-col items-center px-[44px] xl:px-0">
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
			</div>

			<div className=" bg-[#F9FAFB] relative mt-[-200px] md:mt-0">
				<h1 className="text-[#101828] font-semibold text-center text-[28px] md:text-[36px] pt-[24px] md:pt-[48px] px-[44px] md:px-0">
					What Account Pal Does for You
				</h1>
				<p className="text-[#667085] font-normal text-center text-[12px] md:text-[20px] pt-0 md:pt-[8px] pb-[24px]">
					Important Features
				</p>
				<div className="flex flex-col xl:flex-row items-center xl:gap-[100px] px-[44px] md:px-[110px]">
					{whatAccountPalDoesData.map((item) => (
						<div className="md:w-[400px]" key={item.id}>
							<h2 className="font-semibold text-[#101828] text-[16px] pb-[4px] text-center">
								{item.title}
							</h2>
							<p className="text-[#667085] font-normal text-[14px] text-center pb-[48px]">
								{item.content}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="bg-[#F2F4F7] hidden md:flex flex-col">
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
			</div>

			<div className="bg-[#F9FAFB] flex flex-col items-center">
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
			</div>

			<div className="bg-[#F2F4F7]">
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
			</div>

			<div className="bg-[#F9FAFB] md:py-[84px] py-[48px]">
				<div className="xl:px-[336px]  px-[44px]">
					<Faq data={data} styles={styles} config={config} />
				</div>

				<div className=" md:px-[54px] xl:px-[282px] mt-[120px]">
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
							Can&apos;t find the answer you&apos;re looking for? Please chat to
							our friendly team.
						</p>
						<Button path="/aboutus" title="Get in touch" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default LandingPage;
