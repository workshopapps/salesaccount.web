import React from 'react';
import Footer from '../../components/Footer';
import heroImg from '../../assets/images/about-us/hero-img.svg';
import vision from '../../assets/images/about-us/vision.svg';
import blueSquare from '../../assets/images/about-us/blue-square.svg';
import mission from '../../assets/images/about-us/mission.svg';
import valueImg from '../../assets/images/about-us/values.svg';
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
					<p className="text-sm font-normal text-[#101828] text-center lg:text-left lg:mb-[38px] mb-4 mt-4 md:text-center md:mb-0 md:h-[180px] md:w-[535px] md:text-xl">
						We are a team of professionals whose aim is to give you and amazing
						user experience. We are not only professionals but a family where
						everybody works together with each other&apos;s interest of growth
						and succeeding at heart.
					</p>
				</div>
				<div className=" relative mt-8 lg:mt-0 z-10">
					<img src={heroImg} alt="Hero" className="" />

					<img
						className=" absolute -z-10 -top-[2rem]  -right-[2rem] hidden lg:block "
						src={blueSquare}
						alt="blue-square"
					/>
					<img
						className="absolute -z-10 -ml-[2rem] -mt-[5rem] hidden lg:block "
						src={blueSquare}
						alt="blue-square"
					/>
				</div>
			</div>
		</section>
		
		<section className="lg:pl-36 lg:pr-36 lg:pt-16 lg:pb-12 p-8  z-0 ">
			<div className="flex lg:flex-row lg:gap-48  items-center flex-col justify-between">
				<div className="relative z-10  lg:mb-8">
					<h3 className="text-[#101828] md:flex text-center lg:mb-20 text-lg font-medium md:mb-6 md:mt-8  md:font-bold md:text-[48px]">
						Our Vision
					</h3>

					<p className="bg-[#F9FAFB] text-center text-xs h-[82px] px-[31px] py-[18px] md:text-left md:w-[507px] md:text-xl md:h-[180px] md:px-[52px] md:py-[58px]">
						To make easy sales and accounting reconciliation across all business
						types.
					</p>
					<img
						className="absolute top-[7rem] -left-[24px] -z-10 hidden lg:block"
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

					<div className='bg-[#F9FAFB] flex flex-col lg:pt-8 lg:pb-6 lg:pl-10 lg:pr-8 p-8 md:pl-12 md:pr-12'>
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

		
		<Footer />
	</div>
);

export default AboutUs;
