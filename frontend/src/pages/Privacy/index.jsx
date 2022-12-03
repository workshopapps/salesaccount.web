import React from 'react';
// import Rectangle from '../../assets/images/Privacy/Rectangle 12.svg';

// import Key from '../../assets/images/Privacy/Key 2.svg';

// import Camera from '../../assets/images/Privacy/Add Photo Camera.svg';

// import Compliance from '../../assets/images/Privacy/Icon (1).svg';

// import Partnership from '../../assets/images/Privacy/Vector 1.svg';

import Footer from '../../components/Footer';

import Navbar from '../../components/NavigationBar';

const Privacy = () => (
	<div>
		<Navbar />
		<div className="p-5 md:p-10 mx-auto">
			<h2 className=" text-2xl font-bold  md:w-3/4 xl:mx-auto   ">
				Turn data privacy into an opportunity to enhance customer experiences
			</h2>
			<p className=" mt-5 text-black1 xl:mx-auto ">
				As one of the best platform, we provides companies like yours with the
				tools to build trust while enhancing customer experiences. Gain
				increased transparency and control of your customers’ data, all while
				harnessing the power of that data to connect with customers in new ways.
			</p>
			<div className="md:flex justify-between xl:w-9/12  xl:mx-auto ">
				<div className=" sm:mx-auto sm:text-center">
					<h2 className="mt-10 text-3xl  text-blue-700 font-semibold  xl:text-center">
						Privacy for every customer
					</h2>
					<p className=" mt-5 w-72 sm:text-center sm:w-full">
						No matter where your customers are located, we care about helping
						you protect their personal data.
					</p>
				</div>
				<div className="">
					<h2 className="mt-10 text-3xl text-blue-700 font-semibold xl:text-center sm:mx-auto sm:text-center ">
						Global privacy support
					</h2>
					<p className=" mt-5 w-72 sm:text-center sm:w-full">
						We safeguard our customers’ data with a robust, comprehensive, and
						transparent privacy and security program.
					</p>
				</div>
			</div>
			<h2 className="mt-5 text-2xl font-bold md: text-center md:p-6 ">
				We have five privacy principles that highlight our commitment to trust.
			</h2>
			<div className="md:grid gap-4 grid-cols-3 grid-rows-1">
				<div>
					<div className="p-6">
						<img className="  w-68 mx-auto " src="/" alt="" />
						<p className="text-2xl text-blue-600 text-center font-bold pt-6">
							Security
						</p>
					</div>
					<p className="mx-auto ">
						We protect your data at all times, using strong security measures
						that are regularly verified by internal safeguards and external
						auditors.
					</p>
				</div>
				<div>
					<div className="p-6">
						<img className=" w-68 mx-auto" src="/" alt="" />
						<p className="text-blue-600 text-center font-bold text-2xl pt-0">
							Control
						</p>
					</div>
					<p>
						We design our products to ensure you remain in control of your data,
						at all times.
					</p>
				</div>
				<div>
					<div className="p-6">
						<img className=" w-68 mx-auto" src="/" alt="" />
						<p className=" text-blue-600 text-center font-bold text-2xl pt-0">
							Transparency
						</p>
					</div>
					<p className="text-center">
						We are clear about our practices so that you can understand how your
						data is collected and used.
					</p>
				</div>
			</div>
			<div className="md:flex mx-auto w-100% justify-center">
				<div>
					<div className="p-6">
						<img className=" w-68 mx-auto" src="/" alt="" />
						<p className="text-blue-600 text-center font-bold text-2xl pt-0">
							Compliance
						</p>
					</div>
					<p className="text-left">
						We operate a high standard designed so you can operate around the
						world, including in regions with strict privacy rules for data
						handling.
					</p>
				</div>
				<div>
					<div className="p-6">
						<img className="content-center  w-68 mx-auto" src="/" alt="" />
						<h2 className="text-blue-600 text-center font-bold text-2xl pt-7">
							Partnership
						</h2>
					</div>
					<p className="text-left">
						Safeguarding data is a team effort. We listen to your feedback, and
						we provide information and customizable security and privacy tools
						to you.
					</p>
				</div>
			</div>
		</div>
		<Footer />
	</div>
);

export default Privacy;
