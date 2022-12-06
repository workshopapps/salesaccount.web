import React, { useState } from 'react';
import faqArray from '../../components/Faqs/faqArray';
import Accordion from '../../components/Faqs/index';
import Footer from '../../components/Footer';
import NavigationBar from '../../components/NavigationBar';
import ScrollToTop from '../../components/ScrollToTop';

const Faq = () => {
	const [currentPosts, setCurrentPosts] = useState(faqArray.slice(0, 9));
	const [nextDisplay, setNextDisplay] = useState(false);
	const [smallFAQ, setSmallFAQ] = useState(false); // Not working yet

	return (
		<div>
			<ScrollToTop />
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

						{currentPosts.map((qna) => (
							<div>
								<Accordion question={qna.question} answer={qna.answer} />
							</div>
						))}

						{/* When on first page */}
						{nextDisplay ? (
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
						)}

						{/* When on next page */}
						{nextDisplay ? (
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
						)}

						{nextDisplay === true ? (
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
						)}
					</div>
				</div>
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default Faq;
