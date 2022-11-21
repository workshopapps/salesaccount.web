import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ question, answer, id }) => {
	const [setActive, setActiveState] = useState('');
	const [setHeight, setHeightState] = useState('max-h-0 overflow-hidden');
	const [rotate, setRotate] = useState('fa-chevron-down');

	const toggleAccordion = () => {
		setActiveState(setActive === '' ? 'text-[#1570EF] underline' : '');
		setHeightState(
			setActive === ''
				? 'max-h-96 transition-all overflow-visible'
				: 'max-h-0 overflow-hidden transition-all'
		);
		setRotate(
			setActive === ''
				? 'rotate-180 transition-all text-blue'
				: 'transition-all'
		);
	};

	const handleKeyDown = (e) => {
		// check keys if you want
		if (e.keyCode === 13) {
			toggleAccordion();
		}
	};
	return (
		<div className="pr-[25px] pl-[25px] sm:p-0 w-[375px] sm:w-[1000px] ">
			<div className="flex items-center relative " key={id}>
				<h3
					className={`sm:text-lg text-xs  ${setActive} sm:leading-9 leading-[25px] font-normal w-[247px] sm:w-[1141px]`}
				>
					{question}
				</h3>

				<i
					onClick={toggleAccordion}
					onKeyDown={handleKeyDown}
					role="presentation"
					className={`${rotate} text-[#1570EF] absolute right-0 fa-solid fa-chevron-down cursor-pointer `}
				/>
			</div>
			<p
				className={`overflow-hidden sm:text-lg text-[12px] w-[326px] text-gray 
           sm:w-[1000px] break-normal ${setHeight}`}
			>
				{answer}
			</p>
		</div>
	);
};

Accordion.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default Accordion;
