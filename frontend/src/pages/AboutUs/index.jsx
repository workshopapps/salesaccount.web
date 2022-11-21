import React from 'react';
import Footer from '../../components/Footer';
import heroImg from '../../assets/images/about-us/hero-img.svg';
import slack from '../../assets/images/about-us/Slack logo.svg';
import github from '../../assets/images/about-us/Github logo.svg';
import webflow from '../../assets/images/about-us/Webflow logo.svg';
import vision from '../../assets/images/about-us/vision.svg';
import blueSquare from '../../assets/images/about-us/blue-square.svg';
import mission from '../../assets/images/about-us/mission.svg';
import valueImg from '../../assets/images/about-us/values.svg';
import Adeleke from '../../assets/images/about-us/adeleke.svg';
import Dolapo from '../../assets/images/about-us/dolapo.svg';
import Michael from '../../assets/images/about-us/michael.svg';
import Olanike from '../../assets/images/about-us/olanike.svg';
import NavigationBar from '../../components/NavigationBar';

const AboutUs = () => (
	<div>
		<NavigationBar />
		<section className="px-6 md:mb-[90px] md:px-[120px] ">
			<div className="flex flex-col gap-x-[130px]  items-center mb-[70px] md:mt-[110px] md:mb-0 md:flex-row">
				<div className="">
					<h1 className="text-[#194185] mb-3 font-semibold text-center md:font-bold md:text-5xl md:text-left  md:mb-5">
						Who we are?
					</h1>
					<p className="text-sm text-[#1D2939] text-center mb-[38px] md:text-left md:mb-0 md:h-[180px] md:w-[535px] md:text-xl">
						We are a team of professionals whose aim is to give you and amazing
						user experience. We are not only professionals but a family where
						everybody works together with each other&apos;s interest of growth
						and succeeding at heart.
					</p>
				</div>
				<div className="relative">
					<img src={heroImg} alt="Hero" />
					<img
						className="absolute -z-10 -right-[43px] -top-[30px]"
						src={blueSquare}
						alt="blue-square"
					/>
					<img
						className="absolute -z-10 -left-[41px] -bottom-[49px]"
						src={blueSquare}
						alt="blue-square"
					/>
				</div>
			</div>
			<button
				type="button"
				className="w-[118px] h-[44px] mb-12 bg-[#2E90FA] rounded-lg font-semibold text-white md:hidden"
			>
				Try it Free
			</button>
		</section>
		<section className="w-full flex flex-col items-center justify-center bg-[#D1E9FF] h-[130px] md:h-[194px]">
			<h3 className="text-lg text-[#1D2939] mb-3 font-semibold text-center  md:text-[28px]">
				Inspired by
			</h3>
			<div className="flex items-center justify-between w-full gap-x-[36px] px-6 md:px-[120px] md:gap-x-[360px]">
				<img
					className="max-w-[78px] md:max-w-[140px]"
					src={slack}
					alt="slack"
				/>
				<img
					className="max-w-[78px] md:max-w-[140px]"
					src={github}
					alt="github"
				/>
				<img
					className="max-w-[78px] md:max-w-[140px]"
					src={webflow}
					alt="webflow"
				/>
			</div>
		</section>
		<section className=" px-6 pt-6 md:pt-0 md:pb-[138px] md:px-[120px]">
			<h3 className="text-[#194185]  text-lg font-medium mb-[30px] text-center md:text-left md:pt-[44px] md:mb-[20px] md:font-bold md:text-[48px]">
				Our Vision
			</h3>
			<div className="flex flex-col gap-y-5 md:gap-x-[146px] md:gap-y-0 md:items-center md:flex-row md:justify-between">
				<div className="relative w-full md:w-auto">
					<p className="bg-[#F9FAFB] text-center text-xs h-[82px] px-[31px] py-[18px] md:text-left md:w-[507px] md:text-xl md:h-[197px] md:px-[52px] md:py-[58px]">
						To make easy sales and accounting reconciliation across all business
						types.
					</p>
					<img
						className="absolute -top-[1rem] -left-[15px] -z-10 md:-top-[1.7rem] md:-left-[35px]"
						src={blueSquare}
						alt=""
					/>
				</div>
				<img
					className="mb-6 md:mb-0 md:max-w-[458px]"
					src={vision}
					alt="People holding hands in agreement"
				/>
			</div>
		</section>
		<section className=" px-6 pt-6 md:pt-0 relative md:pb-[138px] md:px-[120px]">
			<h3 className="text-[rgb(25,65,133)]  text-lg font-medium mb-[30px] text-center md:text-left md:absolute md:right-[120px] md:-top-24 md:pt-[44px] md:mb-[30px] md:font-bold md:text-[48px]">
				Our Mission
			</h3>
			<div className="flex flex-col gap-y-5 md:gap-x-[146px] md:gap-y-0 md:mt-6 md:items-center md:flex-row-reverse md:justify-between">
				<div className="relative w-full md:w-auto">
					<p className="bg-[#F9FAFB] text-center text-xs h-[114px] px-[31px] py-[18px] md:text-left md:w-[547px] md:text-xl md:h-[294px] md:px-[52px] md:py-[58px]">
						To continually create ease in business accounting processes through
						the use of technology enabled solutions and making them easily
						accessible for businesses.
					</p>
					<img
						className="absolute -top-[1rem] -left-[15px] -z-10 md:-top-[1.7rem] md:-left-[35px]"
						src={blueSquare}
						alt=""
					/>
				</div>
				<img
					className="mb-6 w-full max-h-[281px] md:mb-0 md:max-w-[458px] md:max-h-[316px]"
					src={mission}
					alt="Person working and writing on a notebook"
				/>
			</div>
		</section>
		<section className=" px-6 pt-6 md:pt-0 md:pb-[138px] md:px-[120px]">
			<h3 className="text-[#194185]  text-lg font-medium mb-[30px] text-center md:text-left md:pt-[44px] md:mb-[30px] md:font-bold md:text-[48px]">
				Our Core Values
			</h3>
			<div className="flex flex-col gap-y-5 md:gap-x-[146px] md:gap-y-0 md:mt-12 md:items-center md:flex-row md:justify-between">
				<div className="relative w-full flex justify-between bg-[#F9FAFB]  text-xs h-[104] px-[31px] py-[18px] md:block md:text-left md:w-[380px] md:text-xl md:h-[291px] md:px-[93px] md:py-[38px]">
					<ul className="list-disc">
						<li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
							Accountability
						</li>
						<li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
							Integrity
						</li>
					</ul>

					<ul className="list-disc">
						<li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
							Innovation
						</li>
						<li className="text-[#1D2939] font-medium text-xs md:font-normal md:text-xl ">
							Reliability
						</li>
					</ul>

					<img
						className="absolute -top-[1rem] -left-[15px] -z-10 md:-top-[1.7rem] md:-left-[35px]"
						src={blueSquare}
						alt=""
					/>
				</div>
				<img
					className="mb-6 w-full max-h-[281px] md:mb-0 md:max-w-[458px] md:max-h-[316px]"
					src={valueImg}
					alt="A hand building up small bricks"
				/>
			</div>
		</section>
		<section className="flex flex-col mt-[30px] pb-[30px] px-6 md:pb-[50px] md: md:px-[120px]">
			<div className="text-center my-0 mx-auto mb-6 md:max-w-[600px] md:mb-12">
				<h3 className="text-[#194185] text-xl font-semibold mb-3 md:text-5xl md:font-bold md:mb-[20px]">
					Meet our Team
				</h3>
				<p className="text-[#1D2939] text-sm md:text-xl">
					We are made up of energetic and passionate members who are creative
					and willing to improve our skills every day.
				</p>
			</div>
			<div className="flex flex-col gap-y-7 mb-6 md:mb-[60px] md:gap-y-0 md:flex-row md:justify-between md:gap-x-[104px]">
				<div className="flex gap-x-16 md:gap-x-[104px]">
					<div className="flex flex-col items-center ">
						<img className="mb-4" src={Adeleke} alt="Adeleke" />
						<h5 className="font-semibold text-sm text-[#101828]">
							Adeleke Mauteen
						</h5>
						<h6 className="text-[#2E90FA] text-xs font-medium">
							PRODUCT DESIGNER
						</h6>
					</div>
					<div className="flex flex-col items-center ">
						<img className="mb-4" src={Dolapo} alt="Dolapo" />
						<h5 className="font-semibold text-sm text-[#101828]">
							Adedolapo Opawale
						</h5>
						<h6 className="text-[#2E90FA] text-xs font-medium">
							PRODUCT DESIGNER
						</h6>
					</div>
				</div>
				<div className="flex gap-x-16 md:gap-x-[104px]">
					<div className="flex flex-col items-center ">
						<img className="mb-4" src={Michael} alt="Micheal Babajide" />
						<h5 className="font-semibold text-sm text-[#101828]">
							Micheal Babajide
						</h5>
						<h6 className="text-[#2E90FA] text-xs font-medium">
							PRODUCT DESIGNER
						</h6>
					</div>
					<div className="flex flex-col items-center ">
						<img className="mb-4" src={Olanike} alt="Olanike Margaret" />
						<h5 className="font-semibold text-sm text-[#101828]">
							Olanike Margaret
						</h5>
						<h6 className="text-[#2E90FA] text-xs font-medium">
							PRODUCT DESIGNER
						</h6>
					</div>
				</div>
			</div>
			<button
				type="button"
				className="bg-[#2E90FA] mx-auto shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg px-[18px] py-[10px] text-white whitespace-nowrap w-[121px] h-[44px] md:w-[128px] md:h-[60px] md:px-7 md:py-4 md:text-lg"
			>
				View more
			</button>
		</section>
		<section className=" w-full pb-7 flex flex-col justify-center items-center px-6 text-center md:bg-[#D1E9FF] md:pt-8 md:pb-7">
			<h2 className="text-[#194185] text-xl font-semibold mb-3 md:font-black md:mb-[20px] md:text-5xl">
				Our Work Environment
			</h2>
			<p className="text-[#1D2939] mb-6 text-sm md:mb-3 md:w-[700px] md:text-xl ">
				Our IT network and computer systems have shortened the time needed by
				accountants to prepare and present their financial information to
				management.
			</p>
			<button
				type="button"
				className="bg-white rounded-lg border border-[#D0D5DD] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[#344054] w-[96px] h-[44px] flex  items-center justify-center md:text-lg md:w-[164px] md:h-[60px]"
			>
				Join us now
			</button>
		</section>
		<section className=" w-full px-6 md:pt-[42px] md:px-[120px] ">
			<h2 className="text-[#194185] text-xl font-semibold mb-3 text-center my-0 mx-auto md:text-5xl md:font-bold md:mb-12">
				Benefits of Working at Account Pal
			</h2>
			<div className="flex flex-col md:flex-col">
				<div className=" flex flex-col justify-between md:mb-[52px] md:flex-row">
					<div className="flex justify-between mb-4 gap-x-4 md:mb-0">
						<h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
							01
						</h2>
						<div className="">
							<h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
								Professional environment
							</h3>
							<p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
								Collaboration with experienced professionals who are passionate
								about what they do.
							</p>
						</div>
					</div>
					<div className="flex justify-between mb-4 gap-x-4 md:mb-0">
						<h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
							02
						</h2>
						<div className="">
							<h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
								Team Bonding
							</h3>
							<p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
								We are about the welfare and mental health of our team members;
								hence extra curricular activities are organized from time to
								time for team bonding.
							</p>
						</div>
					</div>
				</div>
				<div className=" flex flex-col justify-between md:mb-[52px] md:flex-row">
					<div className="flex justify-between mb-4 gap-x-4 md:mb-0">
						<h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
							03
						</h2>
						<div className="">
							<h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
								Equality
							</h3>
							<p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
								There is a free and fair workspace where all meaningful ideas
								are welcomed on how to grow and do better.
							</p>
						</div>
					</div>
					<div className="flex justify-between mb-4 gap-x-4 md:mb-0">
						<h2 className="text-[#84CAFF] font-semibold text-xl md:text-[56px] ">
							04
						</h2>
						<div className="">
							<h3 className="text-[#1D2939] text-sm font-semibold md:text-xl">
								Paycheck and Allowance{' '}
							</h3>
							<p className="text-[#2E90FA] text-xs font-medium  md:text-xl md:max-w-[350px]">
								We encourage our team by giving generous and mouth watering
								allowances and salary for jobs well done.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="w-full bg-[#EFF8FF] text-center flex flex-col items-center justify-evenly md:text-left md:justify-between  h-[192px] px-6 pt-4 pb-[22px] gap-x-6 md:gap-x-[104px] md:px-[120px] md:h-[251px] md:flex-row">
			<div className="">
				<h5 className="text-[#194185] font-semibold text-xl md:mb-[20px] md:text-5xl">
					Begin that journey with us!!!
				</h5>
				<p className="text-[#1D2939] text-sm md:text-xl">
					Join us today so as to make a difference in your own career.
				</p>
			</div>
			<div className=" flex gap-x-[52px]">
				<button
					type="button"
					className="bg-[#2E90FA] text-center rounded-lg px-[18px] py-[10px] font-semibold"
				>
					Join us now
				</button>
				<button
					type="button"
					className="bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[#344054] rounded-lg px-[18px] py-[10px]"
				>
					Find out more
				</button>
			</div>
		</section>
		<Footer />
	</div>
);

export default AboutUs;
