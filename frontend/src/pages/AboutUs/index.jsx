// import React from 'react';
import Footer from '../../components/Footer';
import heroImg from '../../assets/images/about-us/heroImg.png';
import vision from '../../assets/images/about-us/vision.png';
import blueSquare from '../../assets/images/about-us/blue-square.png';
import blueSquaremob from '../../assets/images/about-us/bluesquaremob.png';
import mission from '../../assets/images/about-us/mission.png';
import valueImg from '../../assets/images/about-us/values.png';
import NavigationBar from '../../components/NavigationBar';
import ScrollToTop from '../../components/ScrollToTop';

const AboutUs = () => (
	<div>
		<ScrollToTop />
		<NavigationBar />
		<section className="lg:pt-24 lg:pb-24 lg:pl-36 lg:pr-36 p-8 pb-16 bg-[#F2F4F7] z-0 ">
			<div className="flex lg:flex-row lg:gap-48  items-center flex-col justify-between">
				<div className="">
					<h1 className="text-[#101828]  lg:mt-8 font-semibold text-center lg:text-left md:font-medium text-2xl  md:text-5xl md:text-center  md:mb-5">
						Who we are?
					</h1>
					<p className="text-sm font-normal text-[#101828] text-left lg:text-left lg:mb-[38px] mb-4 mt-4 md:text-left md:mb-0 md:h-[180px] md:w-[535px] md:text-xl">
						We are a team of professionals whose aim is to give you and amazing
						user experience. We are not only professionals but a family where
						everybody works together with each other&apos;s interest of growth
						and succeeding at heart.
					</p>
				</div>
				<div className=" relative pl-8 pr-8 mt-6 lg:p-0 lg:-mt-12 z-10">
					<img src={heroImg} alt="Hero" className=" lg:w-full" />

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
					<img
						className=" absolute -z-10 -top-[1.5rem]  -right-[1rem] block lg:hidden "
						src={blueSquaremob}
						alt="blue-square"
					/>
					<img
						className="absolute -z-10 -ml-[3rem] -mt-[1.5rem]  block lg:hidden  "
						src={blueSquaremob}
						alt="blue-square"
					/>
				</div>
			</div>
		</section>

		<section className="lg:pl-36 lg:pr-36 lg:pt-16 lg:pb-12 lg:p-8 pl-11 pr-11 pt-12 pb-4 z-0 ">
			<div className="flex lg:flex-row lg:gap-48  items-center flex-col justify-between">
				<div className="relative z-10  lg:mb-8">
					<h3 className="text-[#101828] lg:mt-8 font-semibold text-center lg:text-left md:font-medium text-2xl  md:text-5xl md:text-center md:mb-12 lg:mb-0 mb-8">
						Our Vision
					</h3>

					<p className="bg-[#F9FAFB] mb-4 md:mt-14 text-center text-xs h-[82px] px-[31px] py-[18px] lg:text-left md:text-center md:w-[507px] md:text-xl md:h-[180px] md:px-[52px] md:py-[58px]">
						To make easy sales and accounting reconciliation across all business
						types.
					</p>
					<img
						className="absolute top-[7rem] -left-[24px] -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
					<img
						className="absolute -bottom-[0.5rem] -right-[22px]   -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
					<img
						className=" absolute -z-10 top-[7.5rem]  -right-[1.5rem] md:top-[16rem]  md:-right-[1.5rem] block lg:hidden "
						src={blueSquaremob}
						alt="blue-square"
					/>
					<img
						className="absolute -z-10 -ml-[1.5rem] -mt-[7.5rem]  md:-ml-[1.5rem] md:-mt-[13.5rem] block lg:hidden  "
						src={blueSquaremob}
						alt="blue-square"
					/>
				</div>

				<div className="m-4 lg:m-0">
					<img
						className="lg:ml-[36px]  lg:mt-0  mb-8"
						src={vision}
						alt="People holding hands in agreement"
					/>
				</div>
				{/* 
				<div>
					<img
						className="lg:ml-[36px] lg:mt-0 mt-4"
						src={vision}
						alt="People holding hands in agreement"
					/>
				</div> */}
			</div>
		</section>
		<section className=" lg:pl-36 lg:pr-36 lg:pb-20 z-0 bg-[#EFF8FF] pl-11 pr-11 pt-12 pb-8 ">
			<div className="flex lg:gap-48  items-center lg:flex-row-reverse flex-col md:justify-between">
				<div className="relative w-full md:w-auto z-10">
					
					<div className="relative z-10  lg:mb-8">
						<h3 className="text-[#101828] lg:mt-8 font-semibold text-center lg:text-right md:font-medium text-2xl  md:text-5xl md:text-center md:mb-12 lg:mb-0 mb-8">
						Our Mission
						</h3>

						<p className="bg-[#F9FAFB] mb-4 md:mt-14 text-center text-xs h-[120px] px-[31px] py-[18px] lg:text-left md:text-center md:w-[507px] md:text-xl md:h-[250px] md:px-[52px] md:py-[58px]">
							To continually create ease in business accounting processes
							through the use of technology enabled solutions and making them
							easily accessible for businesses.
						</p>
						<img
							className="absolute top-[5rem] -left-[24px] -z-10 hidden lg:block"
							src={blueSquare}
							alt=""
						/>
						<img
							className="absolute -bottom-[1.5rem] -right-[22px]   -z-10 hidden lg:block"
							src={blueSquare}
							alt=""
						/>
						<img
							className=" absolute -z-10 top-[9.8rem]  -right-[1.5rem] md:top-[20.5rem]  md:-right-[1.5rem] block lg:hidden "
							src={blueSquaremob}
							alt="blue-square"
						/>
						<img
							className="absolute -z-10 -ml-[1.5rem] -mt-[9.7rem]  md:-ml-[1.5rem] md:-mt-[18rem] block lg:hidden  "
							src={blueSquaremob}
							alt="blue-square"
						/>
					</div>
				</div>
				<div className="m-4 lg:m-0">
					<img
						className="lg:mt-12 "
						src={mission}
						alt="Person working and writing on a notebook"
					/>
				</div>
			</div>
		</section>
		<section className=" lg:pl-36 lg:pr-36 lg:pb-20 lg:pt-10 z-0 pl-11 pr-11  pb-28 pt-12">
			<div className="flex lg:flex-row lg:gap-48  items-center flex-col justify-between">
				<div className="relative z-10">
					<h3 className="text-[#101828] md:flex  text-center mb-8 text-2xl  lg:text-left md:center font-semibold md:font-medium md:mb-12 lg:mb-0   md:mt-8  md:text-[48px]">
						Our Core Values
					</h3>

					<div className="bg-[#F9FAFB] md:mt-16 lg:mt-20 pl-6 pr-6 flex flex-col  lg:pt-6 lg:pb-4 lg:pl-10 lg:pr-8 md:pl-12 md:pr-12">
						<ul className="list-disc mt-4 mb-4 ml-8 mr-6 flex flex-row gap-9 lg:gap-28">
							<li className="text-[#1D2939] font-medium text-xs md:font-normal lg:mb-4 md:text-xl ">
								Accountability
							</li>
							<li className="text-[#1D2939] font-medium text-xs md:font-normal lg:mb-4 md:text-xl ">
								Integrity
							</li>
						</ul>

						<ul className="list-disc mt-4 mb-4 ml-8 mr-6 flex flex-row gap-14 lg:gap-32">
							<li className="text-[#1D2939] font-medium text-xs md:font-normal lg:mb-4 md:text-xl ">
								Innovation
							</li>
							<li className="text-[#1D2939] font-medium text-xs md:font-normal lg:mb-4 md:text-xl ">
								Reliability
							</li>
						</ul>
					</div>

					<img
						className="absolute top-[7.7rem] -left-[24px] -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
					<img
						className="absolute -bottom-[1.5rem] -right-[22.5px] -z-10 hidden lg:block"
						src={blueSquare}
						alt=""
					/>
					<img
						className=" absolute -z-10 top-[8.4rem]  -right-[1.5rem] md:top-[14rem]  md:-right-[1.5rem] block lg:hidden "
						src={blueSquaremob}
						alt="blue-square"
					/>
					<img
						className="absolute -z-10 -ml-[1.5rem] -mt-[7.2rem] md:-ml-[1.5rem] md:-mt-[9rem] block lg:hidden  "
						src={blueSquaremob}
						alt="blue-square"
					/>
				</div>
				<div className="m-4 lg:m-0">
					<img
						className="lg:ml-8 lg:mt-16 mt-6"
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
