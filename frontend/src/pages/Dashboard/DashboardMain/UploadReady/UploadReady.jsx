import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../Store/Context';
import signedDocument from '../../../../assets/images/DashboardImages/upload/signed document.png';

function UploadReady() {
	const { localFile, setLocalFile, getData, fileDropped, localData, setLocalData, localFile2, setLocalFile2 } = useAuth();

	

	const navigate = useNavigate();
	const uploadHandler = () => {

		// getData();
		navigate('/dashboard/importpage');
	};

	const [csvArray, setCsvArray] = useState([]);

	const processCSV = (str, delim = ',') => {
		const headers = str.slice(0, str.indexOf('\n')).split(delim);
		const rows = str.slice(str.indexOf('\n') + 1).split('\n');

		const newArray = rows.map(row => {
			const values = row.split(delim);
			const eachObject = headers.reduce((obj, header, i) => {
				obj[header] = values[i];
				return obj;
			}, {})
			return eachObject;
		})

		setCsvArray(newArray)

		return newArray
	}

	const handleSubmit = () => {
		// e.preventDefault();

		const fileReader = new FileReader();

		fileReader.onload = (e) => {
			const text = e.target.result;
			const data = processCSV(text)
			setLocalData(data)
			console.log("File to Text: ", text)
			console.log("localData to Text: ", localData)
			console.log("Data to Text: ", data)
		}

		fileReader.readAsText(fileDropped)
	}

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
						File Selected: &#34; {localFile[0]?.name} &#34;
					</h2>
					<div className="text-sm text-[#98A2B3]">
						<p>You are almost set</p>
						<p>
							<span
								className="text-[#53B1FD]"
								role="presentation"
								onClick={() => setLocalFile(null)}
							>
								click here
							</span>{' '}
							to upload a different file
						</p>
					</div>
				</div>
			</div>

			<button
				onClick={(e) => {
					e.preventDefault()
					uploadHandler();
					getData()

					if (fileDropped) {
						handleSubmit()
					};
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
