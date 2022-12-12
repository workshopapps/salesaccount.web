import React from 'react'
import { Link } from 'react-router-dom';
import SadBot from '../../assets/images/Error404/sadbot.webp'
import { useAuth } from '../../Store/Context';
import './server-error.css'

export default function ServerError() {
	const {removeItem} = useAuth();
	return (
		<div className="">
			<div className="mt-[15px] flex flex-col items-center">
				<img src={SadBot} alt="" className="w-[500px] h-[375px] sad-bot" />
				<h2 className="max-w-[800px] text-center h-[134px] server-text leading-[45px]">
					Ops! There seems to be a problem somewhere, please ensure your files are properly formatted.
				</h2>
				<Link to="/dashboard/home" className='mt-[-10px]'>
					<button
					onClick={removeItem}
						href="https://reconcileai.hng.tech/dashboard/home"
						type="button"
						className="w-[224px] h-[48px] rounded-[8px] text-center bg-[#2E90FA] text-[#fff]"
					>
						Try Again
					</button>
				</Link>
			</div>
		</div>
	);
}
