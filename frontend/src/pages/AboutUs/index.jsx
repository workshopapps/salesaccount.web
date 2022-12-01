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
		<section className="lg:pt-24 lg:pb-24 lg:pl-36 lg:pr-36 p-8 pb-12 bg-[#F2F4F7] z-0 ">
			<div className="flex lg:flex-row lg:gap-48  items-center flex-col justify-between">
				<div className="">
					<h1 className="text-[#101828] lg:mb-4  font-semibold text-center md:font-bold md:text-5xl md:text-left  md:mb-5">
						Who we are?
					</h1>
					<p className="text-sm font-normal text-[#101828] text-center lg:mb-[38px] mb-4 mt-4 md:text-center md:mb-0 md:h-[180px] md:w-[535px] md:text-xl">
						We are a team of professionals whose aim is to give you and amazing
						user experience. We are not only professionals but a family where
						everybody works together with each other&apos;s interest of growth
						and succeeding at heart.
					</p>
				</div>
				<div className="relative mt-8 lg:mt-0 z-10">
					<img src={heroImg} alt="Hero" className="" />

					<img
						className=" absolute -z-10 lg:ml-[22.5rem] lg:-mt-[18rem] hidden lg:block "
						src={blueSquare}
						alt="blue-square"
					/>
					<img
						className="absolute -z-10 lg:-ml-[2rem] lg:-mt-[5rem] hidden lg:block "
						src={blueSquare}
						alt="blue-square"
					/>
				</div>
			</div>
		</section>
		{/*
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
</section> */}
		<section className="lg:pl-36 lg:pr-36 lg:pt-16 lg:pb-12 p-8  z-0 ">
			<div className="flex lg:flex-row lg:gap-48  items-center flex-col justify-between">
				<div className="relative z-10  lg:mb-8">
					<h3 className="text-[#101828] md:flex text-center lg:mb-20 text-lg font-medium   md:font-bold md:text-[48px]">
						Our Vision
					</h3>

					<p className="bg-[#F9FAFB] text-center text-xs h-[82px] px-[31px] py-[18px] md:text-left md:w-[507px] md:text-xl md:h-[180px] md:px-[52px] md:py-[58px]">
						To make easy sales and accounting reconciliation across all business
						types.
					</p>
					<img
						className="absolute top-[5rem] -left-[24px] -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
					<img
						className="absolute -bottom-[1.5rem] -right-[22px] -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
				</div>

				<div>
					<img
						className="lg:ml-[36px] lg:mt-0 mt-4"
						src={vision}
						alt="People holding hands in agreement"
					/>
				</div>
			</div>
		</section>
		<section className=" lg:pl-36 lg:pr-36 lg:pb-20 z-0 bg-[#EFF8FF] p-8 ">
			<div className="flex lg:gap-48  items-center lg:flex-row-reverse flex-col md:justify-between">
				<div className="relative w-full md:w-auto z-10">
					<h3 className="text-[#101828] lg:ml-52 lg:mt-8 text-lg font-medium lg:mb-[30px] text-center md:text-left md:pt-[44px] md:mb-[20px] md:font-bold md:text-[48px]">
						Our Mission
					</h3>
					<div className="lg:mt-28 ">
						<p className="bg-[#F9FAFB] p-4 text-center text-xs items-center flex md:text-left md:w-[507px] md:text-xl md:h-[197px] md:px-[52px] md:py-[58px]">
							To continually create ease in business accounting processes
							through the use of technology enabled solutions and making them
							easily accessible for businesses.
						</p>
						<img
							className="absolute -z-10 top-[11.5rem] -left-[28px] hidden lg:block"
							src={blueSquare}
							alt=""
						/>
						<img
							className="absolute -bottom-[1.5rem] -right-[28px]  -z-10 hidden lg:block"
							src={blueSquare}
							alt=""
						/>
					</div>
				</div>
				<img
					className="lg:mt-12 mt-4"
					src={mission}
					alt="Person working and writing on a notebook"
				/>
			</div>
		</section>
		<section className=" lg:pl-36 lg:pr-36 lg:pb-20 lg:pt-10 z-0 p-8 ">
			<div className="flex lg:flex-row lg:gap-48  items-center flex-col justify-between">
				<div className='relative z-10'>
					<h3 className="text-[#101828] lg:pb-12 text-lg font-medium lg:mb-[30px] text-center md:text-left md:pt-[44px] md:mb-[30px] md:font-bold md:text-[48px]">
						Our Core Values
					</h3>

					<div className='bg-[#F9FAFB] flex flex-col pt-8 pb-6 pl-10 pr-8'>
						<ul className="list-disc flex flex-row gap-28">
							<li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
								Accountability
							</li>
							<li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
								Integrity
							</li>
						</ul>

						<ul className="list-disc flex flex-row gap-32 mt-8">
							<li className="text-[#1D2939] font-medium text-xs md:font-normal mb-4 md:text-xl ">
								Innovation
							</li>
							<li className="text-[#1D2939] font-medium text-xs md:font-normal md:text-xl ">
								Reliability
							</li>
						</ul>
					</div>

					<img
						className="absolute top-[7.5rem] -left-[24px] -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
					<img
						className="absolute -bottom-[1.5rem] -right-[22px] -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
				</div>
				<div>
					<img
						className="lg:ml-8 lg:mt-16 mt-4"
						src={valueImg}
						alt="A hand building up small bricks"
					/>
				</div>
			</div>
		</section>

		{/*
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
						<h5 className="font-semibold text-xs text-[#101828]">
							Adeleke Mauteen
						</h5>
						<h6 className="text-[#2E90FA] text-[15px] text-center font-medium">
							PROJECT MANAGER
						</h6>
					</div>
					<div className="flex flex-col items-center ">
						<img className="mb-4" src={Dolapo} alt="Dolapo" />
						<h5 className="font-semibold text-xs text-[#101828]">
							Adedolapo Opawale
						</h5>
						<h6 className="text-[#2E90FA] text-[15px] text-center font-medium">
							PROJECT TEAM LEAD
						</h6>
					</div>
				</div>
				<div className="flex gap-x-16 md:gap-x-[104px]">
					<div className="flex flex-col items-center ">
						<img className="mb-4" src={Michael} alt="Micheal Babajide" />
						<h5 className="font-semibold text-xs text-[#101828]">
							Micheal Babajide
						</h5>
						<h6 className="text-[#2E90FA] text-[15px] text-center font-medium">
							PRODUCT DESIGNER
						</h6>
					</div>
					<div className="flex flex-col items-center ">
						<img className="mb-4" src={Olanike} alt="Olanike Margaret" />
						<h5 className="font-semibold text-xs text-[#101828]">
							Olanike Margaret
						</h5>
						<h6 className="text-[#2E90FA] text-[15px] text-center font-medium">
							MARKETING MANAGER
						</h6>
					</div>
				</div>
			</div>
			<button
				type="button"
				className="bg-[#2E90FA] mx-auto shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg px-[18px] py-[10px] text-white whitespace-nowrap w-[121px] h-[44px] md:w-[150px] md:h-[60px] md:px-7 md:py-4 md:text-lg md:text-center"
			>
				View more
			</button>
		</section>
		<section className=" w-full pb-7 flex flex-col justify-center items-center px-6 text-center md:bg-[#D1E9FF] md:pt-8 md:pb-7">
			<h2 className="text-[#194185] text-xl font-semibold mt-5 mb-3 md:font-black md:mb-[20px] md:text-5xl">
				Our Work Environment
			</h2>
			<p className="text-[#1D2939] mb-6 text-sm md:mb-3 md:w-[700px] md:text-xl ">
				Our IT network and computer systems have shortened the time needed by
				accountants to prepare and present their financial information to
				management.
			</p>
			<button
				type="button"
				className="bg-white rounded-lg border border-[#D0D5DD] hover:bg-[#2E90FA] mb-7 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[#344054] w-[128px] h-[44px] flex  items-center justify-center md:text-lg md:w-[164px] md:h-[60px]"
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
				<p className="text-[#1D2939] mb-5 text-sm md:text-xl">
					Join us today so as to make a difference in your own career.
				</p>
			</div>
			<div className=" flex gap-x-[52px]">
				<button
					type="button"
					className="bg-[#2E90FA] h-[44px] text-[14px] w-[128px] text-center rounded-lg px-[18px] py-[10px] font-semibold hover:"
				>
					Join us now
				</button>
				<button
					type="button"
					className="bg-white h-[44px] text-[13px] w-[130px] font-semibold text-center shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[#344054] rounded-lg px-[18px] py-[10px] hover:bg-[#2E90FA]"
				>
					Find out more
				</button>
			</div>
		</section>
*/}
		<Footer />
	</div>
);

export default AboutUs;
