/* eslint-disable */

import React from 'react';
import Navbar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
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
      <Navbar/>
		<div class="m-8">
			<div class="lg:flex lg:flex-row md:flex md:flex-row  flex-col  grid justify-items-center">
				<div class="font-lexend lg:mt-24 md:mt-24">
					<button class="rounded-lg lg:ml-2 ml-16 md:ml-2 text-white bg-blue-500 text-lg px-4 py-2">
						Meet the team
					</button>
					<h2 class="lg:text-5xl text-2xl font-semibold mt-4 lg:text-left md:text-left text-center">
						Meet our leadership <br class="lg:hidden" /> team, great{' '}
						<br class="" /> personalities who work
						<br class="lg:hidden" />
						hard to
						<br class="hidden lg:block" /> empower our <br class="lg:hidden" />
						teams.
					</h2>
				</div>
				<div>
					<img src={ourteam} class="ml-24 hidden lg:block md:block md:ml-8" />
				</div>
			</div>

			<div class="mt-12 flex flex-col items-center">
				<div class="flex flex-row lg:gap-36 gap-2">
					<div class=" flex flex-col items-center">
						<img src={one} class="w-40 h-40 " />
						<h3 class="font-medium">Oluwasegun Akinshola</h3>
						<h4 class="text-blue-400 font-normal text-sm">
							cheif Drill-Master
						</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>

					<div class="flex flex-col items-center">
						<img src={two} class="w-40 h-40" />
						<h3 class="font-medium">Dorothy Nkatha</h3>
						<h4 class="text-blue-400 font-normal text-sm">
							Assist Drill-Master
						</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>
				</div>

				<div class="lg:flex lg:flex-row grid grid-cols-2 lg:gap-36 mt-12 gap-2">
					<div class="flex flex-col items-center">
						<img src={three} class="w-40 h-40" />
						<h3 class="">Maureen Ehiosun</h3>
						<h4 class="text-blue-400 font-normal text-sm">Design PM Lead</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>

					<div class="flex flex-col items-center">
						<img src={four} class="w-40 h-40" />
						<h3 class="">Olatunji David</h3>
						<h4 class="text-blue-400 font-normal text-sm">Frontend PM Lead</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>

					<div class="flex flex-col items-center lg:mt-0 mt-12">
						<img src={five} class="w-40 h-40" />
						<h3 class="">AbdulMuizz Ikumapayi</h3>
						<h4 class="text-blue-400 font-normal text-sm">
							Backend Track Lead
						</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>

					<div class="flex flex-col items-center lg:mt-0 mt-12">
						<img src={two} class="w-40 h-40" />
						<h3 class="">Amogbe Idowu Esther</h3>
						<h4 class="text-blue-400 font-normal text-sm">
							Sales and Marketing PM Lead
						</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>
				</div>
				<div class="lg:flex lg:flex-row grid grid-cols-2 lg:gap-36 mt-12 gap-2">
					<div class="flex flex-col items-center">
						<img src={seven} class="w-40 h-40" />
						<h3 class="">Emmanuel Job</h3>
						<h4 class="text-blue-400 font-normal text-sm">Design Track Lead</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>

					<div class="flex flex-col items-center">
						<img src={eight} class="w-40 h-40" />
						<h3 class="">Queenette oluchi</h3>
						<h4 class="text-blue-400 font-normal text-sm">
							Sales and Marketing Track Lead
						</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>

					<div class="flex flex-col items-center">
						<img src={nine} class="w-40 h-40" />
						<h3 class="">Abdhakeem Abdurahmon</h3>
						<h4 class="text-blue-400 font-normal text-sm">
							Frontend Track Lead
						</h4>
						<div class="mt-4 flex flex-row gap-6">
							<img src={tw} />
							<img src={ln} />
							<img src={fb} />
						</div>
					</div>
				</div>
			</div>
		</div>
    <Footer/>
    </div>
	);
}

export default Teams;
