import { useRef } from 'react';
import document from '../../../../assets/images/DashboardImages/upload/document.png';
import './upload.css';
import { useAuth } from '../../../../Store/Context';

function Upload() {
	const { dragHandler, dropHandler, setLocalFile, setFileDropped } = useAuth();
	const inputRef = useRef();
	// const {  } = useAuth();

	// Just some comment

	return (
		<div className="w-full flex flex-col items-center  px-[1em] mt-[5em]">
			<h1 className="font-semibold text-[#344054] text-[40px] mb-14 max-md:text-3xl max-sm:text-2xl max-xl:mb-3">
				Upload Account Statement
			</h1>
			<div
				onDrop={dropHandler}
				onDragOver={dragHandler}
				className="flex flex-col items-center py-14 space-y-[2em] w-full md:w-[60%] lg:w-[40%] max-sm:py-4 rounded-xl border-[2px] border-dashed border-[#1D2939]"
			>
				<img
					src={document}
					alt="document"
					className="w-[100px] h-[130px] object-fill"
				/>
				<div className="text-center  space-y-[0.5em]">
					<h2 className=" font-normal text-[#344054] text-[28px] max-md:text-xl max-sm:text-base">
						Drop your account statement in here
					</h2>
					<p className="font-normal text-[20px] text-[#98A2B3] max-md:text-base max-sm:text-sm">
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
