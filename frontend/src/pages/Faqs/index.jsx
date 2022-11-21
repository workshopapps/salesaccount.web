import React, { useState } from 'react';
import faqArray from '../../components/Faqs/faqArray';
import Accordion from '../../components/Faqs/index';
import Footer from '../../components/Footer';
import NavigationBar from '../../components/NavigationBar';

const Faq = () => {
	const [currentPosts, setCurrentPosts] = useState(faqArray.slice(0, 9));
	const [nextDisplay, setNextDisplay] = useState(false);
	const [smallFAQ, setSmallFAQ] = useState(false); // Not working yet

	return (
		<>
			<NavigationBar />
			<div className="bg-[#F9FAFB]">
				<div className=" min-w-[375px] sm:w-[1228px] justify-center flex font-body sm">
					<div className="flex-col space-y-[25px] sm:space-y-[72px]">
						{smallFAQ ? (
							<h2 className="w-[35px] text-blue leading-[13px] sm:text-[28px]">
								{'<'}FAQ
							</h2>
						) : (
							<h2 className="sm:text-5xl text-sm text-[#1570EF] sm:leading-[60px] leading-[25px] w-[279px] sm:w-[1000px] font-semibold pr-[25px] pl-[25px] sm:p-0">
								Frequently Asked Questions
							</h2>
						)}

						{currentPosts.map((qna) => (
							<div className="w-[375px] sm:w-[1000px]">
								<Accordion question={qna.question} answer={qna.answer} />
							</div>
						))}

						{/* When on first page */}
						{nextDisplay ? (
							''
						) : (
							<div className=" mb-96 py-[78px]">
								<div className="relative flex w-[375px] sm:w-[1000px] text-sm space-x-96">
									<div className="flex space-x-1">
										<button
											type="button"
											onClick={() => {
												setCurrentPosts(faqArray.slice(0, 9));
												setNextDisplay(false);
											}}
											className="text-blue  w-[73.27px] h-[73.27px] rounded-full bg-slate-300"
										>
											1
										</button>
										<button
											type="button"
											onClick={() => {
												setCurrentPosts(faqArray.slice(9, 13));
												setNextDisplay(true);
											}}
											className="text-gray w-[73.27px] h-[73.27px] rounded-full bg-white"
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
										className="absolute right-0 border-slate-800 w-[95px] h-[43px] sm:w-[161px] sm:h-[66px] border-2 border-gray-800 rounded-2xl bg-white"
									>
										Next
										<i className="fa-solid fa-arrow-right" />
									</button>
								</div>
							</div>
						)}

						{/* When on next page */}
						{nextDisplay ? (
							<div className="relative flex w-[375px] sm:w-[1000px] text-sm space-x-96 mb-96 py-[48px]">
								<button
									type="button"
									onClick={() => {
										setCurrentPosts(faqArray.slice(0, 9));
										setNextDisplay(false);
									}}
									className="absolute left-0 border-slate-800 w-[95px] h-[43px] sm:w-[161px] sm:h-[66px] border-2 border-gray-800 rounded-2xl bg-white"
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
										className="text-blue  w-[73.27px] h-[73.27px] rounded-full bg-slate-300"
									>
										1
									</button>
									<button
										type="button"
										onClick={() => {
											setCurrentPosts(faqArray.slice(9, 13));
											setNextDisplay(true);
										}}
										className="text-gray w-[73.27px] h-[73.27px] rounded-full bg-white"
									>
										2
									</button>
								</div>
							</div>
						) : (
							''
						)}

						{nextDisplay === true ? (
							<div className="justify-center flex">
								<div className="w-[223px] text-[12px] sm:w-[672px] sm:text-[36px] text-center mt-16">
									<p className="text-blue">Did you find this useful?</p>
									<div className="space-x-4 sm:space-x-14">
										<input
											type="checkbox"
											className="w-[20px] sm:w-[38.56px] h-[20px] sm:h-[38.56px]"
										/>
										Yes
										<input
											type="checkbox"
											className="w-[20px] sm:w-[38.56px] h-[20px] sm:h-[38.56px]"
										/>
										No
									</div>
								</div>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			<div className="">
				<Footer />
			</div>
		</>
	);
};

export default Faq;
