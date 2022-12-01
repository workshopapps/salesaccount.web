import { useRef } from 'react';
import document from '../../../../assets/images/DashboardImages/upload/document.png';
import './upload.css';
import { useAuth } from '../../../../Store/Context';

function Upload() {
	const {
		dragHandler,
		dropHandler,
		setLocalFile,
		fileDropped,
		setFileDropped,
		localFile,
	} = useAuth();
	const inputRef = useRef();
	// const {  } = useAuth();

	// Just some comment

	return (
		<div className="space-y-[1em] w-full flex flex-col items-center  ">
			<h1 className="font-bold text-2xl ">Upload Account Statement</h1>
			<div
				onDrop={dropHandler}
				onDragOver={dragHandler}
				className="flex flex-col items-center p-[1em] space-y-[2em] w-full md:w-[60%] lg:w-[40%] border border-dashed border-black"
			>
				<img
					src={document}
					alt="document"
					className="w-[100px] h-[130px] object-fill"
				/>
				<div className="text-center  space-y-[0.5em]">
					<h2 className="font-semibold text-[#344054] text-lg">
						Drop your account statement in here
					</h2>
					<p className="text-sm text-[#98A2B3]">
						You can upload PDF and Word DOC files Only
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
				className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
				type="button"
			>
				Browse File Here
			</button>
		</div>
	);
}
export default Upload;
