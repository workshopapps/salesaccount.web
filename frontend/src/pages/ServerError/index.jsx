import React from 'react'
import SadBot from '../../assets/images/Error404/sadbot.webp'
import NavigationBar from '../../components/NavigationBar';
import './server-error.css'

export default function ServerError() {
    return (
        <div className="container">
            <NavigationBar />
			<div className="mt-[45px] flex flex-col items-center">
				<img src={SadBot} alt="" className="w-[500px] h-[375px] sad-bot" />
				<h2 className="max-w-[858.83px] text-center h-[134px] server-text">
					We’re sorry, but something went wrong on our end. Our team has been
					notified and is working to fix the problem. Please try again later or
					refresh the page.
				</h2>
				<a href="https://reconcileai.hng.tech/dashboard/home" className='mt-[-50px]'>
					<button
						href="https://reconcileai.hng.tech/dashboard/home"
						type="button"
						className="w-[224px] h-[48px] rounded-[8px] text-center bg-[#2E90FA] text-[#fff]"
					>
						Try Again
					</button>
				</a>
			</div>
        </div>
		);
}
