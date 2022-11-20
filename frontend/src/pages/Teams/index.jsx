import React from 'react';
import Navbar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import ourteam from '../../assets/images/teams/ourteam.png';
import one from '../../assets/images/teams/1.png';
import two from '../../assets/images/teams/2.png';
import three from '../../assets/images/teams/3.png';
import four from '../../assets/images/teams/4.png';
import five from '../../assets/images/teams/5.png';
import seven from '../../assets/images/teams/7.png';
import eight from '../../assets/images/teams/8.png';
import nine from '../../assets/images/teams/9.png';
import fb from '../../assets/images/teams/fb.png';
import ln from '../../assets/images/teams/ln.png';
import tw from '../../assets/images/teams/tw.png';

function Teams() {
	return (
		<div>
			<Navbar />
			<div className="px-[44px] xl:px-[72px] mt-8">
				<div className="lg:flex lg:flex-row md:flex md:flex-row  flex-col  grid justify-items-center">
					<div className="font-lexend lg:mt-24 md:mt-24">
						<button
							type="button"
							className="rounded-lg lg:ml-2 ml-16 md:ml-2 text-white bg-blue-500 text-lg px-4 py-2"
						>
							Meet the team
						</button>
						<h2 className="lg:text-5xl text-2xl font-semibold mt-4 lg:text-left md:text-left text-center">
							Meet our leadership <br className="lg:hidden" /> team, great{' '}
							<br className="" /> personalities who work
							<br className="lg:hidden" />
							hard to
							<br className="hidden lg:block" /> empower our{' '}
							<br className="lg:hidden" />
							teams.
						</h2>
					</div>
					<div>
						<img
							alt=""
							src={ourteam}
							className="ml-24 hidden lg:block md:block md:ml-8"
						/>
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center">
					<div className="flex flex-row lg:gap-36 gap-2">
						<div className=" flex flex-col items-center">
							<img alt="" src={one} className="w-40 h-40 " />
							<h3 className="font-medium">Oluwasegun Akinshola</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								cheif Drill-Master
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>

						<div className="flex flex-col items-center">
							<img alt="" src={two} className="w-40 h-40" />
							<h3 className="font-medium">Dorothy Nkatha</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Assist Drill-Master
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>
					</div>

					<div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-36 mt-12 gap-2">
						<div className="flex flex-col items-center">
							<img alt="" src={three} className="w-40 h-40" />
							<h3 className="">Maureen Ehiosun</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Design PM Lead
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>

						<div className="flex flex-col items-center">
							<img alt="" src={four} className="w-40 h-40" />
							<h3 className="">Olatunji David</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Frontend PM Lead
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>

						<div className="flex flex-col items-center lg:mt-0 mt-12">
							<img alt="" src={five} className="w-40 h-40" />
							<h3 className="">AbdulMuizz Ikumapayi</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Backend Track Lead
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>

						<div className="flex flex-col items-center lg:mt-0 mt-12">
							<img alt="" src={two} className="w-40 h-40" />
							<h3 className="">Amogbe Idowu Esther</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Sales and Marketing PM Lead
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>
					</div>
					<div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-36 mt-12 gap-2">
						<div className="flex flex-col items-center">
							<img alt="" src={seven} className="w-40 h-40" />
							<h3 className="">Emmanuel Job</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Design Track Lead
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>

						<div className="flex flex-col items-center">
							<img alt="" src={eight} className="w-40 h-40" />
							<h3 className="">Queenette oluchi</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Sales and Marketing Track Lead
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>

						<div className="flex flex-col items-center mb-8">
							<img alt="" src={nine} className="w-40 h-40" />
							<h3 className="">Abdhakeem Abdurahmon</h3>
							<h4 className="text-blue-400 font-normal text-sm">
								Frontend Track Lead
							</h4>
							<div className="mt-4 flex flex-row gap-6">
								<img alt="" src={tw} />
								<img alt="" src={ln} />
								<img alt="" src={fb} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Teams;
