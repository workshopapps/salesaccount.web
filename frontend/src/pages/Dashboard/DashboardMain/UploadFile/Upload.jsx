import document from '../../../../assets/images/DashboardImages/upload/document.png';
import signedDocument from '../../../../assets/images/DashboardImages/upload/signed document.png';
import './upload.css';

export const Upload = () => (
	<div className="space-y-[1em] w-full mt-[20%] lg:mt-[10%] flex flex-col items-center ">
		<h1 className="font-bold text-2xl ">Upload Account Statement</h1>
		<div className="upload flex flex-col items-center p-[1em] space-y-[2em] w-full md:w-[60%] lg:w-[40%]">
			<img
				src={document}
				alt="document"
				className="w-[100px] h-[120px] object-fill"
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

		<button
			type="submit"
			className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
		>
			Browse File Here
		</button>
	</div>
);
export const UploadReady = () => (
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
					File Selected: &#34;LLC Account Statement 2022.pdf&#34;
				</h2>
				<div className="text-sm text-[#98A2B3]">
					<p>You are almost set</p>
					<p>
						<span className="text-[#53B1FD] ">click here</span> to upload a
						different file
					</p>
				</div>
			</div>
		</div>

		<button
			type="submit"
			className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
		>
			Upload here
		</button>
	</div>
);
