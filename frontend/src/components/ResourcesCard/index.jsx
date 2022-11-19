import React from 'react';
import cardimg from '../../assets/card-img.png';
import arrowright from '../../assets/arrowright.svg';

function ResourcesCard() {
	return (
		<div className="flex flex-wrap justify-between">
			<div className=" w-36 pt-5">
				<img src={cardimg} alt="" />
				<p className=" text-xs text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>

			<div className=" w-36 pt-5">
				<img src={cardimg} alt="" />
				<p className=" text-xs text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>

			<div className=" w-36 pt-5">
				<img src={cardimg} alt="" />
				<p className=" text-xs text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>

			<div className=" w-36 pt-5">
				<img src={cardimg} alt="" />
				<p className=" text-xs text-blue-500 pt-2">On demand data sheet</p>
				<h1 className=" font-semibold py-3">
					How to use the Account Pal For Multiple SME’s{' '}
				</h1>
				<img src={arrowright} alt="" />
			</div>
		</div>
	);
}

export default ResourcesCard;
