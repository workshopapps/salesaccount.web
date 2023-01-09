import axios from 'axios';
import PropTypes from 'prop-types';

import { useContext, useState, createContext, useMemo } from 'react';
import { Navigate } from 'react-router-dom';

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [fileValidationError, setFileValidationError] = useState('');
	const [fileValidationError2, setFileValidationError2] = useState('');
	// Persisting data
	const AccountStatementsaved = JSON.parse(
		localStorage.getItem('localData') || '[]'
	);
	const SalesRecordsaved = JSON.parse(
		localStorage.getItem('localData2') || '[]'
	);
	const ReconciledRecordsSaved = JSON.parse(
		localStorage.getItem('localData3') || '[]'
	);

	const [progress, setProgress] = useState(0);
	const [saleAccountFiles, setSalesAccountFiles] = useState([]);
	const [bankStatementFile, setBankStatementFile] = useState([]);

	const [fileErr, setFileErr] = useState(false);

	const [localFile, setLocalFile] = useState([]);
	const [localFile2, setLocalFile2] = useState([]);

	const [localData, setLocalData] = useState(AccountStatementsaved);
	const [localData2, setLocalData2] = useState(SalesRecordsaved);

	// State for Response data, Error and loading
	const [localData3, setLocalData3] = useState(ReconciledRecordsSaved);
	const [loading, setLoading] = useState(true);
	const [uploadLoading, setUploadLoading] = useState(true);
	const [uploadLoading2, setUploadLoading2] = useState(true);
	const [rError, setRError] = useState('');
	const [error, setError] = useState('');

	// file user picked from thier machine
	const [fileDropped, setFileDropped] = useState([]);
	const [fileDropped2, setFileDropped2] = useState([]);

	// api endpoint
	const uploadUrl = 'https://api.reconcileai.hng.tech/upload';
	const reconcileUrl = `https://api.reconcileai.hng.tech/reconcile`;


	// upload bank statement function
	const getData = async () => {
		const formData = new FormData();
		formData.append('file', fileDropped);

		axios
			.post(uploadUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				// setLocalData(res?.data);
				// setUploadLoading(false);

				if (res?.data?.message) {
					setFileValidationError(res.data?.message);
					setLocalData([]);
					setUploadLoading(false);
					return;
				}
				setFileValidationError('');
				setLocalData(res?.data);
				setUploadLoading(false);
			})
			.catch((e) => setError(e.message));
	};

	//  Upload Sales Record  function
	const getSalesData = async () => {
		const formData = new FormData();
		formData.append('file', fileDropped2);
		axios
			.post(uploadUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				if (res?.data?.message) {
					setFileValidationError2(res.data?.message);
					setLocalData2([]);
					setUploadLoading2(false);
					return;
				}
				setFileValidationError2('');
				setLocalData2(res?.data);
				setUploadLoading2(false);
			})
			.catch((e) => setError(e.message));
	};

	// Reconcile  Function
	const reconcileData = async () => {
		const formData = new FormData();
		const files = [fileDropped, fileDropped2];

		files.forEach((item) => {
			formData.append('files', item);
		});

		axios
			.post(reconcileUrl, formData)
			.then((res) => {
				// console.log(res?.data);
				setLocalData3(res?.data);
				setRError('');
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
				setRError(e.message);
			});
	};

	// functions
	const dragHandler = (e) => {
		e.preventDefault();
	};

	const dropHandler = (e) => {
		e.preventDefault();
		const validFile =
			e.dataTransfer?.files[0].name.includes('.txt') ||
			e.dataTransfer?.files[0].name.includes('.csv') ||
			e.dataTransfer?.files[0].name.includes('.xls') ||
			e.dataTransfer?.files[0].name.includes('.pdf') ||
			e.dataTransfer?.files[0].name.includes('.xlsx');
		if (!validFile) {
			setFileErr(true);
		}
		setFileDropped(e.dataTransfer?.files[0]);
	};

	const dragHandlerFile2 = (e) => {
		e.preventDefault();
	};

	const dropHandlerFile2 = (e) => {
		e.preventDefault();
		const validFile =
			e.dataTransfer?.files[0].name.includes('.txt') ||
			e.dataTransfer?.files[0].name.includes('.csv') ||
			e.dataTransfer?.files[0].name.includes('.xls') ||
			e.dataTransfer?.files[0].name.includes('.pdf') ||
			e.dataTransfer?.files[0].name.includes('.xlsx');
		if (!validFile) {
			setFileErr(true);
		}
		setFileDropped2(e.dataTransfer?.files[0]);
	};

	const removeItem = () => {
		localStorage.clear();
		setLocalData([]);
		setLocalData2([]);
		setFileDropped([]);
		setFileDropped2([]);
		setLocalData3([]);
	};

	const value = useMemo(
		() => ({
			dragHandler,
			dropHandler,
			setBankStatementFile,
			bankStatementFile,
			saleAccountFiles,
			setSalesAccountFiles,
			localFile,
			setLocalFile,
			dropHandlerFile2,
			dragHandlerFile2,
			getData,
			fileDropped,
			setFileDropped,
			localData,
			setLocalData,
			fileDropped2,
			setFileDropped2,
			localFile2,
			setLocalFile2,
			localData2,
			setLocalData2,
			error,
			setError,
			getSalesData,
			reconcileData,
			localData3,
			setLocalData3,
			loading,
			rError,
			removeItem,
			progress,
			fileErr,
			uploadLoading,
			uploadLoading2,
			fileValidationError,
			setFileValidationError,
			fileValidationError2,
			setFileValidationError2,
		}),
		[
			localFile,
			fileDropped,
			setFileDropped,
			localData,
			setLocalData,
			localData2,
			fileDropped2,
			localFile2,
			setFileDropped2,
			setLocalData2,
			uploadLoading2,
			localData3,
			fileValidationError,
			setFileValidationError,
			fileValidationError2,
			setFileValidationError2,
		]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
