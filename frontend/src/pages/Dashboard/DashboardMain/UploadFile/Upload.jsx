import { useRef, useState } from 'react';
import document from '../../../../assets/images/DashboardImages/upload/document.png';
import './upload.css';
import { useAuth } from '../../../../Store/Context';
import ScrollToTop from '../../../../components/ScrollToTop';

function Upload() {
	const { dragHandler, dropHandler, setLocalFile, setFileDropped } = useAuth();
	const inputRef = useRef();
	// const {  } = useAuth();

	// Just some comment

	return (
		<div className="w-full flex flex-col items-center ">
			<ScrollToTop />
			<h1 className="font-semibold text-[#344054] text-[40px] mb-[1em]  md:text-2xl max-sm:text-2xl lg:mb-2">
				Upload Account Statement
			</h1>
			<div
				onDrop={dropHandler}
				onDragOver={dragHandler}
				className="flex flex-col items-center py-[2em] space-y-[2em] w-full md:w-[60%] lg:w-[40%]  rounded-xl border-[2px] border-dashed border-[#1D2939]"
			>
				<img
					src={document}
					alt="document"
					className="w-[100px] h-[130px] object-fill"
				/>
				<div className="text-center  space-y-[0.5em]  ">
					<h2 className=" font-bold text-[#344054] text-lg md:text-xl ">
						Drop your account statement in here
					</h2>
					<p className="font-normal text-[#98A2B3] md:text-base text-sm">
						Supported formats: PDF, Word DOCS, Excel
					</p>
				</div>
			</div>
			<input
				type="file"
				hidden
				accept=".csv"
				ref={inputRef}
				onChange={(e) => {
					setLocalFile(e.target.files);
					setFileDropped(e.target.files[0]);
				}}
			/>

			<button
				onClick={() => {
					inputRef.current.click();
				}}
				className="bg-[#2E90FA] font-semibold text-lg text-white px-[1.5em] py-[0.8em] rounded-md mt-12 max-md:mt-3 max-md:text-sm"
				type="button"
			>
				Upload Account Statement
			</button>
		</div>
	);
}
export default Upload;
