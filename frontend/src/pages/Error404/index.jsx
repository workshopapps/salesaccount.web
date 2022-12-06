import React from 'react'
import './404.css'
import NavigationBar from '../../components/NavigationBar/index'
import Pana from '../../assets/images/Error404/pana.webp'

export default function Error404 () {
    return (
			<div>
				<NavigationBar />
				<div className="error-container flex flex-col items-center">
					<img
						className="Pana w-[600px] h-[364.56px] mt-[25px] mb-[32px]"
						src={Pana}
						alt=""
					/>
					<h3 className="error-heading font-['Lexend] font-semibold text-[36px] leading-[49px] text-[#000] mb-[24px]">
						Oops! Something went wrong
					</h3>
					<p className=" error-text font-['Lexend] text-[28px] leading-[38px] text-[#000] mb-[40px]">
						We could not find what you searched for. Try searching again
					</p>
					<aext
						className="py-[16px] px-[28px] w-[150px] h-[60px] bg-[#2E90FA] text-[#fff] rounded-[8px] shadow-[0_1px_2px_rgba(16, 24, 40, 0.05)] text-center"
						href="https://reconcileai.hng.tech/"
					>
						Go to Home
					</aext>
				</div>
			</div>
		);
}
