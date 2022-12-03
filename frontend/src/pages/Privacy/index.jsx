import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavigationBar';
import DataPrivacy from '../../assets/images/Privacy/dataprivacy.webp';
import PrivacyCustomer from '../../assets/images/Privacy/privacyforcustomer.webp';
import GlobalPrivacy from '../../assets/images/Privacy/globalprivacysupport.webp';
import SecurityIcon from '../../assets/images/Privacy/security.webp';
import Control from '../../assets/images/Privacy/control.webp';
import Transparent from '../../assets/images/Privacy/transparent.webp';
import Compliance from '../../assets/images/Privacy/compliance.webp';
import Partnership from '../../assets/images/Privacy/partnership.webp';
import './privacy.css'

const Privacy = () => (
	<div>
		<Navbar />
		<div className="p-5 md:p-10 mx-auto">
			<div className="flex justify-around items-center bg-[#F2F4F7] h-[511px] privacy-data">
				<div className="max-w-[571px]">
					<h2 className="font-['Lexend'] font-semibold text-[40px] leading-[50px] text-[#101828] mb-[24px]">
						Turn data privacy into an opportunity
					</h2>
					<p className="font-['Lexend'] text-[20px] leading-[35px] text-[#1D2939]">
						As one of the best platform, we provides companies like yours with
						the tools to build trust while enhancing customer experiences. Gain
						increased transparency and control of your customers’ data, all
						while harnessing the power of that data to connect with customers in
						new ways.
					</p>
				</div>
				<div className="right">
					<img className="w-[458px] h-[281px]" src={DataPrivacy} alt="" />
				</div>
			</div>
			<div className="flex justify-around items-center h-[466px] privacy-data">
				<div className="max-w-[571px] h-[114px]">
					<h2 className="font-['Lexend'] font-medium text-[36px] leading-[136.02%] text-[#101828] mb-[24px]">
						Privacy for every customer
					</h2>
					<p className="font-['Lexend'] text-[20px] leading-[136.52%] text-[#1D2939]">
						No matter where your customers are located, we care about helping
						you protect their personal data.
					</p>
				</div>
				<div className="right">
					<img className="w-[458px] h-[281px]" src={PrivacyCustomer} alt="" />
				</div>
			</div>
			<div className="flex justify-around items-center bg-[#F2F4F7] h-[466px] privacy-data">
				<div className="max-w-[571px] h-[94px]">
					<h2 className="font-['Lexend'] font-medium text-[36px] leading-[136.02%] text-[#101828] mb-[24px]">
						Global privacy support
					</h2>
					<p className="font-['Lexend'] text-[20px] leading-[136.52%] text-[#101828]">
						We safeguard our customers’ data with a robust, comprehensive, and
						transparent privacy and security program.
					</p>
				</div>
				<div className="right">
					<img className="w-[458px] h-[281px]" src={GlobalPrivacy} alt="" />
				</div>
			</div>
			<div className="privacy-section">
				<h2 className="font-['Lexend'] font-semibold text-[40px] leading-[50px] text-[#101828] max-w-[1163px] text-left mt-[72px] ml-[200px]">
					We have five privacy principles that highlight out commitment to
					trust:
				</h2>
				<div className="mt-[88px] principle">
					<div className="top-privacy flex justify-around items-center">
						<div className="privacy-box w-[445px] h-[400px] bg-[#F9FAFB] flex flex-col justify-center items-center">
							<img
								className="security w-[58.33px] h-[75px] mb-[36.5px]"
								src={SecurityIcon}
								alt=""
							/>
							<h3 className="font-['Lexend'] font-semibold text-[40px] leading-[50px] text-[#1570EF] max-w-[1163px] mb-[24px]">
								Security
							</h3>
							<p className="max-w-[390px] text-[20px] leading-[136.52%] text-center text-[#101828]">
								We protect your data at all times, using strong security
								measures that are regularly verified by internal safeguards and
								external auditors.
							</p>
						</div>
						<div className="privacy-box w-[445px] h-[400px] bg-[#F9FAFB] flex flex-col justify-center items-center">
							<img
								className="control w-[66.72px] h-[60.42px] mb-[36.5px]"
								src={Control}
								alt=""
							/>
							<h3 className="font-['Lexend'] font-semibold text-[40px] leading-[50px] text-[#1570EF] max-w-[1163px] mb-[24px]">
								Control
							</h3>
							<p className="max-w-[390px] text-[20px] leading-[136.52%] text-center text-[#101828]">
								We design our products to ensure you remain in control of your
								data, at all times.
							</p>
						</div>
					</div>
					<div className="top-privacy flex justify-around items-center h-[576px]">
						<div className="privacy-box w-[445px] h-[400px] bg-[#F9FAFB] flex flex-col justify-center items-center">
							<img
								className="transparent w-[75px] h-[66.67px] mb-[36.5px]"
								src={Transparent}
								alt=""
							/>
							<h3 className="font-['Lexend'] font-semibold text-[40px] leading-[50px] text-[#1570EF] max-w-[1163px] mb-[24px]">
								Transparency
							</h3>
							<p className="max-w-[390px] text-[20px] leading-[136.52%] text-center text-[#101828]">
								We are clear about our practices so that you can understand how
								your data is collected and used.
							</p>
						</div>
						<div className="privacy-box w-[445px] h-[400px] bg-[#F9FAFB] flex flex-col justify-center items-center">
							<img
								className="compliance w-[88.33px] h-[83.33px] mb-[36.5px]"
								src={Compliance}
								alt=""
							/>
							<h3 className="font-['Lexend'] font-semibold text-[40px] leading-[50px] text-[#1570EF] max-w-[1163px] mb-[24px]">
								Compliance
							</h3>
							<p className="compliance-text max-w-[390px] text-[20px] leading-[136.52%] text-center text-[#101828]">
								We operate a high standard designed so you can operate around
								the world, including in regions with strict privacy rules for
								data handling.
							</p>
						</div>
					</div>
					<div className="privacy-box top-privacy partnership w-[445px] h-[400px] bg-[#F9FAFB] flex flex-col justify-center items-center ml-[500px]">
						<img
							className="w-[75px] h-[58.33px] mb-[36.5px]"
							src={Partnership}
							alt=""
						/>
						<h3 className="font-['Lexend'] font-semibold text-[40px] leading-[50px] text-[#1570EF] max-w-[1163px] mb-[24px]">
							Partnership
						</h3>
						<p className="max-w-[390px] text-[20px] leading-[136.52%] text-center text-[#101828]">
							Safeguarding data is a team effort. We listen to your feedback,
							and we provide information and customizable security and privacy
							tools to you.
						</p>
					</div>
				</div>
			</div>
			</div>
		<Footer />
	</div>
);

export default Privacy;
