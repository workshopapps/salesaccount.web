import React from 'react';
import arrowright from '../../assets/arrowright.svg';
import Blogs from '../../assets/Blogs.png';
import Help from '../../assets/Help.png';
import Privacy from '../../assets/Privacy.png';
import FAQ from '../../assets/FAQ.png';
import Contact from '../../assets/Contact.png';

function ResourcesCard() {
	return (
		<div className="flex py-5 flex-wrap gap-4 justify-center px:10 md:px-11 lg:px-6 xl:px-36 ">
			<div className=" w-72 p-5 rounded-md drop-shadow border ">
				<img src={Help} alt="" />
				<p className=" text-md text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>

			<div className=" w-72 p-5 rounded-md drop-shadow border">
				<img src={Privacy} alt="" />
				<p className=" text-md text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>

			<div className=" w-72 p-5 rounded-md drop-shadow border">
				<img src={Blogs} alt="" />
				<p className=" text-md text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>

			<div className=" w-72 p-5 rounded-md drop-shadow border">
				<img src={FAQ} alt="" />
				<p className=" text-md text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>

			<div className=" w-72 p-5 rounded-md drop-shadow border">
				<img src={Contact} alt="" />
				<p className=" text-md text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>
		</div>
	);
}

export default ResourcesCard;
