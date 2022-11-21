import React from 'react';
import BlogPreview from '../../components/BlogPreview';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

function BlogPost() {
	return (
		<>
			<NavigationBar />
			<div className=" px-[72px] max-[675px]:px-6">
				<div className="flex flex-col justify-center items-center mt-[102px] mb-[72px]">
					<h1 className=" font-semibold text-[56px] leading-[70px] text-[#101828] text-center max-w-[20ch] max-[675px]:text-[36px]">
						3 Effective Debt Management Practices
					</h1>
					<p className="font-semibold text-base leading-6 text-[#667085] text-center">
						Published 20 Jan 2022
					</p>
				</div>
				<div className=" mb-[67px]">
					<p className="font-normal text-[20px] leading-[35px] text-[#667085] mb-12 max-[675px]:text-base max-[675px]:leading-[25px]">
						Debt can be beneficial to your company when mamged properly.
						However,, if neglected or improperly managed, it may destroy you. We
						have worked with a variety of companies across a wide range of
						industries, and we have witnessed firsthand the potential
						effectiveness of the three debt management techniques exxplained in
						this piece.
					</p>
					<img src="../assets/images/blog/dummyBlogThumb.svg" alt="thumbnail" />
				</div>
				<div className="flex flex-col gap-12 mb-[30px]">
					<p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
						Effective use of and management of debt is a critical component of a
						business success. While it is true that there are &quot;good&quot;
						types of debt, all liabilities necessitate constant monitoring.
						Small businesses operating under a company structure should be aware
						that the directors have a legal responsibility to make sure that the
						company&apos;s debts can be paid as and when they become due. Those
						conducting business under an unincorporated structure are ultimately
						personally responsible for the debts of the business.
						<br />
						<br />
						When managed properly, debt can be advantageous to your company.
						Debt, if neglected or improperly managed, may destroy you.
						<br />
						<br />
						Here are three tested and effective debt management techniques that
						help you grow your business:
						<br />
						<br />
					</p>
					<div>
						<h3 className=" font-semibold text-[28px] text-[#101828] leading-snug max-[675px]:text-[20px] max-[675px]:leading-[25px] ">
							1. Reconsider your Company&apos;s Budget
						</h3>
						<p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
							Gather as much information as you can about your current financial
							status before attacking your company&quot;s debt. Business owners
							frequently take this action after falling behind on their monthly
							payments. To offer yourself extra room in your budget, take a look
							at your previous financial strategy. Your income streams, variable
							expenses, and fixed costs should all be listed in a business
							budget. A cash flow budget should also be included to account for
							anticipated transactions not covered by profit and loss, such as
							loan repayments, ATO responsibilities, and owner returns.
						</p>
					</div>
					<div>
						<h3 className=" font-semibold text-[28px] text-[#101828] leading-snug max-[675px]:text-[20px]">
							2. Increase Cash Flow
						</h3>
						<p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
							Poorly managed cash flow can result in serious issues, such as
							difficulty fulfilling obligations on time, even in a thriving
							business.
							<br />
							<br />
							What methods can you employ to increase your cash flow?
							<br />
							<br />
							<ul className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
								<li>
									&#x2022; Measurement and forecasting can help you stay on top
									of your company&apos;s cash flow and projected cash needs by
									comparing actual outcomes to your budget, comprehending and
									addressing any deviations, and regularly adjusting
									predictions.
								</li>
								<li>
									&#x2022; Improve the administration of payables and
									receivables by making sure that invoices for goods and
									services are sent out on time, and by reviewing the credit
									conditions that are offered to clients so that cash may be
									received for sales more quickly. To follow up on past-due
									monies, constantly review aged receivable records.
								</li>
							</ul>
						</p>
					</div>
					<div>
						<h3 className=" font-semibold text-[28px] text-[#101828] leading-snug max-[675px]:text-[20px]">
							3. Examine and Prioritise the Debts you Owe
						</h3>
						<p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
							Examine all of your existing debts, then begin to prioritize and
							make plans on how to reduce them.
							<br />
							<br />
							These could consist of, in no particular order:Suppliers; Revenue
							NSW (or other state OSR) liabilities, including payroll tax;
							Employer responsibilities, including Super Guarantee (SG); Bank
							loans, asset financing, or overdrafts;debts owed to the ATO, such
							as PAYGW, GST, and income tax.
							<br />
							<br />
							It&apos;s crucial to be aware that some obligations may have
							severe repercussions for late payment. For instance, employer
							Super Guarantee contributions are typically required to be made to
							each employee&apos;s chosen fund by 28 days following the end of
							each quarter, and there are heavy ATO penalties that apply for
							missing this deadline by even one day (via the Super Guarantee
							Charge).
						</p>
					</div>
					<div className="bg-[#F2F4F7] px-8 pt-8 pb-[40px] max-[675px]:px-1 max-[675px]:py-1">
						<h3 className=" font-semibold text-[28px] text-[#101828] leading-snug mb-6 max-[675px]:text-2xl max-[675px]:text-[20px]">
							Conclusion
						</h3>
						<p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
							In conclusion, don&apos;t wait until your business hits a
							financial crisis. If you feel that your debt has become unwieldy
							or worrisome, reach out to professionals to rescue the situation.
						</p>
					</div>
					<div>
						<hr className=" border-solid border-[1px] border-[#EAECF0] mb-6" />
						<div className="flex justify-between items-center max-[675px]:flex-col max-[675px]:items-start max-[675px]:gap-8">
							<div className="flex gap-3 mt-[34px]">
								<figure className=" w-10 h-10 ">
									<img
										className=" rounded-full w-full"
										src="../assets/images/avatar-full.svg"
										alt=""
									/>
								</figure>
								<div>
									<h5 className=" leading-[18px] text-sm font-semibold text-[#101828]">
										Olivia Rhye
									</h5>
									<p className="text-[#667085] leading-[23px] text-sm font-normal">
										Financial Analyst
									</p>
								</div>
							</div>
							<div className="flex gap-3">
								<button
									type="button"
									className=" text-[#344054] px-4 py-[10px] flex gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-solid  border-[1px] border-[#D0D5DD] whitespace-nowrap"
								>
									<img src="../assets/copy.svg" alt="" /> Copy Link
								</button>
								<div className=" w-10 h-10 cursor-pointer text-[#344054] px-[10px] py-[10px] flex gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-solid  border-[1px] border-[#D0D5DD]">
									<img
										className="w-full"
										src="../assets/images/blog/twitter.svg"
										alt=""
									/>
								</div>
								<div className=" w-10 h-10 cursor-pointer text-[#344054] px-[10px] py-[10px] flex gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-solid  border-[1px] border-[#D0D5DD]">
									<img
										className="w-full"
										src="../assets/images/blog/fb.svg"
										alt=""
									/>
								</div>
								<div className=" w-10 h-10 cursor-pointer text-[#344054] px-[10px] py-[10px] flex gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border-solid  border-[1px] border-[#D0D5DD]">
									<img
										className="w-full"
										src="../assets/images/blog/linkedin.svg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className=" border-solid border-[1px] border-[#EAECF0] mb-[30.5px]" />
						<div className="flex justify-between items-center mb-[10.5px] mx-[21px]">
							<div className=" cursor-pointer text-[#667085] flex gap-2">
								<img src="../assets/images/blog/arrow-left.svg" alt="" />
								Previous
							</div>
							<div className=" cursor-pointer text-[#667085] flex gap-2">
								Next
								<img src="../assets/images/blog/arrow-right.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-[#101828] font-semibold text-[40px] max-[675px]:text-[28px]">
						Other Posts You Should Read
					</h2>
				</div>
			</div>
			<div className="mt-14 mb-[25px]">
				<div className="px-8 max-w-7xl w-full  mx-auto max-[375px]:px-4">
					<div>
						<div className="flex flex-row flex-wrap gap-8 w-full justify-center items-center">
							<div className=" w-[30%] max-lg:w-[46%] max-md:w-full max-sm:w-full">
								<BlogPreview />
							</div>
							<div className=" w-[30%] max-lg:w-[46%] max-md:w-full max-sm:w-full">
								<BlogPreview />
							</div>
							<div className=" w-[30%] max-lg:w-[46%] max-md:w-full max-sm:w-full">
								<BlogPreview />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center mb-6">
				<div className=" bg-[#1570EF] border-[1px] border-solid border-[#1570EF] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-lg  py-3 px-5 text-[#FFFFFF]">
					View all posts
				</div>
			</div>
			<Footer />
		</>
	);
}

export default BlogPost;
