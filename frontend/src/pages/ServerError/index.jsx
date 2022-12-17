import React from 'react';
import { Link } from 'react-router-dom';
import SadBot from '../../assets/images/Error404/sadbot.webp';
import { useAuth } from '../../Store/Context';
import './server-error.css';

export default function ServerError() {
	const { removeItem } = useAuth();
	return (
		<div className="">
			<div className="mt-[15px] flex flex-col items-center">
				<img src={SadBot} alt="" className="w-[500px] h-[375px] sad-bot" />
				<h2 className="max-w-[800px] text-center h-[134px] server-text leading-[45px]">
					Ops! There seems to be a problem somewhere, please ensure your files
					are properly formatted.
				</h2>
				<Link to="/dashboard/upload" className="mt-[-10px]">
					<button
						onClick={removeItem}
						to="/dashboard/upload"
						type="button"
						className="bg-[#F9FAFB] text-[#2E90FA] active:bg-[#e8e8e9] border border-[#2E90FA] px-[1em] md:px-[2em] py-[0.8em] rounded-md"
					>
						Try Again
					</button>
				</Link>
			</div>
		</div>
	);
}
