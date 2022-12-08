import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../Store/Context';
import signedDocument from '../../../../assets/images/DashboardImages/upload/signed document.png';

function UploadReady() {
	const { setFileDropped, getData, fileDropped } = useAuth();
	
	// const formData = new FormData();
	// formData.append('file', fileDropped);

	console.log("Uploaded: ", fileDropped)

	// console.group('formData', formData);

	const navigate = useNavigate();

	
	// useEffect(() => {
	// 	localStorage.setItem('fileDropped', JSON.stringify(fileDropped));
	// }, [fileDropped]);

	const uploadHandler = () => {
		getData();
		navigate('/dashboard/importpage');
		
	};
	return (
		<div className="space-y-[1em] w-full mt-[10%] lg:mt-[5%] flex flex-col items-center ">
			<h1 className="font-bold text-2xl ">Ready for Upload</h1>
			<div className=" flex flex-col items-center p-[1em] space-y-[2em] w-full md:w-[60%] lg:w-[40%] border-[2px] border-dashed border-[#1D2939]">
				<img
					src={signedDocument}
					alt="document"
					className="w-[120px] h-[120px] object-fill"
				/>
				<div className="text-center  space-y-[0.5em]">
					<h2 className="font-semibold text-[#344054] text-lg">
						File Selected: &#34; {fileDropped?.name} &#34;
					</h2>
					<div className="text-sm text-[#98A2B3]">
						<p>You are almost set</p>
						<p>
							<span
								className="text-[#53B1FD] cursor-pointer"
								role="presentation"
								onClick={() => setFileDropped([])}
							>
								click here
							</span>
							&nbsp; to upload a different file
						</p>
					</div>
				</div>
			</div>

			<div className="flex gap-[20px]">
				<button
					onClick={(e) => {
						e.preventDefault();
						setFileDropped([]);
					}}
					className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
					type="submit"
				>
					Refresh
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						if (fileDropped) {
							uploadHandler();
						}
					}}
					className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
					type="submit"
				>
					Upload
				</button>
			</div>
		</div>
	);
}

export default UploadReady;
