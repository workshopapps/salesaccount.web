/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import ProgressBar from '../ProgressBar';

export default function UploadingRecordModal({ show, setShow }) {
	const handleClose = () => {
		setShow(false);
	};

	return (
		<div
			className={`w-full h-full absolute z-20 top-0 right-0 bottom-0 left-0 bg-transparent ${
				show ? 'flex' : 'hidden'
			} items-center justify-center`}
		>
			<div className="w-[80%] p-16 bg-[#D0D5DD] flex items-center justify-center flex-col">
				<div className="bg-[#EAECF0] w-[80%] rounded-xl p-10 mb-10">
					<p className="text-[#101828] text-center font-semibold text-2xl mb-24">
						Uploading Sales Record
					</p>

					<ProgressBar />
				</div>

				<button
					onClick={handleClose}
					className="text-[#175CD3] text-sm font-semibold bg-transparent border border-[#175CD3] rounded-lg py-4 px-16 cursor-pointer hover:text-white hover:bg-[#175CD3]"
				>
					Cancel
				</button>
			</div>
		</div>
	);
}
