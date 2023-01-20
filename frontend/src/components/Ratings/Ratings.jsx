import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

function Ratings() {
	return (
		<div className="bg-[#F9FAFB] border-2 md:w-[90%] lg:w-[80%] mx-auto rounded-md text-center px-2 py-[3em] lg:py-[5em] my-[3em] md:my-[5em]">
			<h1 className=" text-[1.5em] md:text-[2em] font-medium">
				We appreciate feedback
			</h1>
			<p className="text-sm md:text-base">
				How was your experience on reconcile.AI?
			</p>
			<div className="my-[2em] flex justify-center items-center">
				<RatingStars />
				<div className="flex justify-center items-end mx-3">
					<div className="text-[#1570EF] font-semibold mx-2 text-2xl">4.9</div>
					<div className="text-[#667085] font-medium text-sm">
						&#40;160&#41;
					</div>
				</div>
			</div>
			<div className="w-full md:w-[70%] lg:w-[50%] mx-auto flex justify-between md:justify-center items-center">
				<input
					className="outline-none bg-[#EAECF0] rounded-md px-4 py-2 w-[65%] md:w-[60%]"
					type="text"
					placeholder="Tell us something more"
				/>
				<Link to="/contact">
					<button
						type="button"
						className="text-white bg-[#2E90FA] font-medium rounded w-max p-2 mx-2 lg:mx-4 text-xs md:text-base "
					>
						Get in touch
					</button>
				</Link>
				<p className="hidden md:block text-sm text-[#98A2B3] font-medium">
					&#40;optional&#41;
				</p>
			</div>
		</div>
	);
}

export default Ratings;
