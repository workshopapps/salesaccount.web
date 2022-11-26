import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../Store/Context';
import signedDocument from '../../../../assets/images/DashboardImages/upload/signed document.png';

function UploadReady() {
	const { files, setFiles } = useAuth();
	console.log(files);

	const url1 = 'http://accountpal.hng.tech:8000/upload_record'

	// const url = `https://dev-kcjp.onrender.com/upload`;

	const getData = async () => {
			const formData = new FormData();
			formData.append("file", files);

			axios
				.post(url1, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => console.log(res?.data))
				.catch((e) => console.log(e));
		
	}

	// 	const getData = async () => {
	// 		const formData = new FormData();
	// 		formData.append('file', files);
	// 
	// 		axios
	// 			.post(url, formData, {
	// 				headers: {
	// 					'Content-Type': 'multipart/form-data',
	// 				},
	// 			})
	// 			.then((res) => console.log(res))
	// 			.catch((e) => console.log(e));
	// 	};

	const navigate = useNavigate();
	const uploadHandler = () => {

		// getData();
		navigate('/dashboard/importpage');
	};

	return (
		<div className="space-y-[1em] w-full mt-[20%] lg:mt-[10%] flex flex-col items-center ">
			<h1 className="font-bold text-2xl ">Ready for Upload</h1>
			<div className="upload flex flex-col items-center p-[1em] space-y-[2em] w-full md:w-[60%] lg:w-[40%]">
				<img
					src={signedDocument}
					alt="document"
					className="w-[120px] h-[120px] object-fill"
				/>
				<div className="text-center  space-y-[0.5em]">
					<h2 className="font-semibold text-[#344054] text-lg">
						File Selected: &#34; {files[0]?.name} &#34;
					</h2>
					<div className="text-sm text-[#98A2B3]">
						<p>You are almost set</p>
						<p>
							<span
								className="text-[#53B1FD]"
								role="presentation"
								onClick={() => setFiles(null)}
							>
								click here
							</span>{' '}
							to upload a different file
						</p>
					</div>
				</div>
			</div>

			<button
				onClick={() => {
					uploadHandler();
					getData()
				}}
				className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
				type="submit"
			>
				Upload here
			</button>
		</div>
	);
}

export default UploadReady;
