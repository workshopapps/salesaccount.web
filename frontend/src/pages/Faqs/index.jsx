import React, { useState } from 'react';
import Faq from 'react-faq-component';
import { BsPlusCircle } from 'react-icons/bs';
import { CiCircleMinus } from 'react-icons/ci';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import faqArray from '../../components/Faqs/faqArray';
import Accordion from '../../components/Faqs/index';
import Footer from '../../components/Footer';
import NavigationBar from '../../components/NavigationBar';

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
		{
			id: 6,
			title: 'Can I access ReconcileAI on of my devices?',
			content:
				'ReconcileAI can be used on your PC and mobile devices. You only need to sign in using the device of your choice.',
		},
		{
			id: 7,
			title: 'Can I attach multiple files to a single transaction?',
			content:
				'Yes, ReconcileAI allows for upload of multiple files per transaction as needed.',
		},
		{
			id: 8,
			title: 'What are the advantages of using ReconcileAI?',
			content:
				'ReconcileAI has multiple features to help you with smooth financial transactions.',
		},
		{
			id: 9,
			title: 'Can everyone view my my report/account?',
			content:
				'The details in your account are your private information and can only be shared by you, unless access is granted to your collaborators..',
		},
		{
			id: 10,
			title: 'What are account statements?',
			content:
				'Account statements are periodic summaries of account activity within a defined period',
		},
		{
			id: 11,
			title: 'How do I get my income statement?',
			content:
				'ReconcileAI provides you with your income statement upon request.',
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

const Faqx = () => {
	const [currentPosts, setCurrentPosts] = useState(faqArray.slice(0, 9));
	const [nextDisplay, setNextDisplay] = useState(false);
	const [smallFAQ, setSmallFAQ] = useState(false); // Not working yet

	return (
		<div>
			<NavigationBar />
			<div className="bg-[#F9FAFB] w-full flex justify-center">
				<div className=" w-full font-body py-[3em] px-[1em]">
					<div className="flex-col w-full md:w-[80%] lg:w-[40%] mx-auto space-y-[25px] sm:space-y-[72px]">
						{smallFAQ ? (
							<h2 className="w-[35px] text-blue leading-[13px] sm:text-[28px]">
								{'<'}FAQ
							</h2>
						) : (
							<h2 className="text-2xl md:text-4xl  text-[#1570EF] font-semibold">
								Frequently Asked Questions
							</h2>
						)}

						{/* {currentPosts.map((qna) => (
							<div>
								<Accordion question={qna.title} answer={qna.content} />
							</div>
						))} */}

						<div className="md:w-[80%] text-xs md:text-md leading-[200%] mx-auto">
							<Faq data={data} styles={styles} config={config} />
						</div>

						{/* When on first page */}
						{/* {nextDisplay ? (
							''
						) : (
							<div className=" w-full">
								<div className="flex justify-between w-full ">
									<div className="flex space-x-1 item-center ">
										<button
											type="button"
											onClick={() => {
												setCurrentPosts(faqArray.slice(0, 9));
												setNextDisplay(false);
											}}
											className="text-blue w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-slate-300"
										>
											1
										</button>
										<button
											type="button"
											onClick={() => {
												setCurrentPosts(faqArray.slice(9, 13));
												setNextDisplay(true);
											}}
											className="text-gray w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-white"
										>
											2
										</button>
									</div>
									<button
										type="button"
										onClick={() => {
											setCurrentPosts(faqArray.slice(9, 13));
											setNextDisplay(true);
										}}
										className="flex justify-center items-center w-[100px] h-[50px] md:w-[120px] md:h-[70px] border-2 border-gray-800 rounded-lg text-md bg-white"
									>
										Next
										<i className="fa-solid fa-arrow-right" />
									</button>
								</div>
							</div>
						)} */}

						{/* When on next page */}
						{/* {nextDisplay ? (
							<div className="relative flex justify-center items-center  text-sm my-[3em] py-[48px]">
								<button
									type="button"
									onClick={() => {
										setCurrentPosts(faqArray.slice(0, 9));
										setNextDisplay(false);
									}}
									className="absolute left-0 w-[95px] h-[43px] sm:w-[161px] sm:h-[66px] border-2 rounded-2xl bg-white"
								>
									<i className="fa-solid fa-arrow-left" />
									Previous
								</button>
								<div className="flex space-x-1 absolute right-0">
									<button
										type="button"
										onClick={() => {
											setCurrentPosts(faqArray.slice(0, 9));
											setNextDisplay(false);
										}}
										className="text-blue  w-[50px] h-[50px] rounded-full bg-slate-300"
									>
										1
									</button>
									<button
										type="button"
										onClick={() => {
											setCurrentPosts(faqArray.slice(9, 13));
											setNextDisplay(true);
										}}
										className="text-gray w-[50px] h-[50px] rounded-full bg-white"
									>
										2
									</button>
								</div>
							</div>
						) : (
							''
						)} */}

						{/* {nextDisplay === true ? (
							<div className="justify-center flex ">
								<div className="w-[80%] mx-auto text-md text-center mt-16 space-y-[0.5em]">
									<p className="text-blue">Did you find this useful?</p>
									<div className="space-x-4 flex justify-center items-center  ">
										<input type="checkbox" className="w-[20px] h-[20px]" />
										Yes
										<input type="checkbox" className="w-[20px] h-[20px] " />
										No
									</div>
								</div>
							</div>
						) : (
							''
						)} */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Faqx;
