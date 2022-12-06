import axios from 'axios';
import PropTypes from 'prop-types';

import { useContext, useState, createContext, useMemo, useEffect } from 'react';

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	// Persisting data
	const AccountStatementsaved = JSON.parse(localStorage.getItem("localData") || "[]");
	const SalesRecordsaved = JSON.parse(localStorage.getItem("localData2") || "[]");
	// const ReconciledRecordsSaved = JSON.parse(localStorage.getItem("localData3") || "[]");

	const [saleAccountFiles, setSalesAccountFiles] = useState([]);
	const [bankStatementFile, setBankStatementFile] = useState([]);
	const [error, setError] = useState('');
	const [localFile, setLocalFile] = useState([]);
	const [localFile2, setLocalFile2] = useState([]);

	const [localData, setLocalData] = useState(AccountStatementsaved);
	const [localData2, setLocalData2] = useState(SalesRecordsaved);

	// reconcile data
	const [localData3, setLocalData3] = useState([]);
	const [loading, setLoading] = useState(false);
	const [rError, setRError] = useState('');

	const [fileDropped, setFileDropped] = useState([]);
	const [fileDropped2, setFileDropped2] = useState([]);

	const uploadUrl = 'https://api.reconcileai.hng.tech/upload';
	const reconcileUrl = `https://api.reconcileai.hng.tech/reconcile`;
	const downloadUrl = '';

	// Persist Data on refresh


	// ////////bank statement GET request
	const getData = async () => {
		const formData = new FormData();
		formData.append('file', fileDropped);

		axios
			.post(uploadUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setLocalData(res?.data))
			.catch((e) => setError(e.message));
	};
	useEffect(() => {
		localStorage.setItem('localData2', JSON.stringify(localData2));
	}, [localData2]);

	// ////sales Record ///////
	const getSalesData = async () => {
		const formData = new FormData();
		formData.append('file', fileDropped2);

		axios
			.post(uploadUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setLocalData2(res?.data))
			.catch((e) => setError(e.message));
	};

	// reconcile get request
	const reconcileData = async () => {
		const formData = new FormData();
		const files = [fileDropped, fileDropped2];

		files.forEach((item) => {
			formData.append('files', item);
		});

		setLoading(true);
		axios
			.post(reconcileUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				setLocalData3(res?.data);
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false)
				setRError(e.message)
			});
	};

	const dragHandler = (e) => {
		e.preventDefault();
	};

	const dropHandler = (e) => {
		e.preventDefault();
		setLocalFile(e.dataTransfer?.files);
	};

	const dragHandlerFile2 = (e) => {
		e.preventDefault();
	};

	const dropHandlerFile2 = (e) => {
		e.preventDefault();
		setLocalFile(e.dataTransfer?.files);
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
			localData3,
			loading,
			rError,
		]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
