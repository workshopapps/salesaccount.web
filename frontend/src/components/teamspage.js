import React from 'react';

import ourteam from '../assets/ourteam.png';

import leader from '../assets/leader.png';
import designer from '../assets/designer.png';
// import developer from '../assets/developer.png';
// import marketer from '../assets/marketer.png';
import twitterlogo from '../assets/twitterlogo.png';
import facebooklogo from '../assets/facebooklogo.png';
import linkedinlogo from '../assets/linkedinlogo.png';

const teamspage = () => (
	<div>
		<div className="flex lg:flex-row md:flex-row  flex-col">
			<div>
				<button
					className="rounded border  text-white bg-blue-700 font-normal px-4 py-2"
					type="button"
				>
					Meet the team
				</button>
				<h2 className=" sm:hidden lg:block ">
					Meet our team of creators,
					<br /> designers, and world class <br /> problem solvers
				</h2>
				<h2 className=" lg:hidden">
					Meet our team of <br /> creators, designers, <br />
					and world class <br />
					problem solvers
				</h2>
				<p className="">
					We are the company our customers want us to be, it takes an eclectic
					group <br /> of passionate operators. Get to know the people leading
					the way at <span>Account Pal</span>
				</p>
			</div>
			<div>
				<img src={ourteam} className="" alt="team" />
			</div>
		</div>
		<div>
			<div>
				<button
					className="rounded border  text-black bg-white font-normal px-4 py-2"
					type="button"
				>
					LEADERS
				</button>
				<div className="mt-2">
					<img src={leader} className="w-40 h-40" alt="leader" />
					<h3 className="">Adeleke Mauteen</h3>
					<h4 className="text-blue-400">CEO AND FOUNDER</h4>
					<div className="flex flex-row gap-4">
						<img src={twitterlogo} alt="logo" />
						<img src={linkedinlogo} alt="logo" />
						<img src={facebooklogo} alt="logo" />
					</div>
				</div>
			</div>
			<div className="mt-2">
				<button
					className="rounded border  text-black bg-white font-normal px-4 py-2"
					type="button"
				>
					DESIGNERS
				</button>
				<div className="mt-2">
					<img src={designer} className="w-40 h-40" alt="designer" />
					<h3 className="">Adeleke Mauteen</h3>
					<h4 className="text-blue-400">CEO AND FOUNDER</h4>
					<div className="flex flex-row gap-4">
						<img src={twitterlogo} alt="logo" />
						<img src={linkedinlogo} alt="logo" />
						<img src={facebooklogo} alt="logo" />
					</div>
				</div>
			</div>
			<div />
			<div />
		</div>
	</div>
);

export default teamspage;
