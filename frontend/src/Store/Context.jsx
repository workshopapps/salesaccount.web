import axios from 'axios';
import PropTypes from 'prop-types';

import { useContext, useState, createContext, useMemo } from 'react';

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [saleAccountFiles, setSalesAccountFiles] = useState([]);
	const [bankStatementFile, setBankStatementFile] = useState([]);
	const [error, setError] = useState(false);
	const [localFile, setLocalFile] = useState([]);
	const [localFile2, setLocalFile2] = useState([]);

	const [localData, setLocalData] = useState([]);
	const [localData2, setLocalData2] = useState([]);
	const [localData3, setLocalData3] = useState([]);

	const [fileDropped, setFileDropped] = useState([]);
	const [fileDropped2, setFileDropped2] = useState([]);

	const bankStatementUrl = 'http://107.20.248.3:8000/upload_statement';
	const salesRecordUrl = `http://107.20.248.3:8000/upload_record`;
	const reconcileUrl = `http://107.20.248.3:8000/reconcile_documents`;

	// ////////bank statement GET request
	const getData = async () => {
		const formData = new FormData();
		formData.append('file', fileDropped);

		axios
			.post(bankStatementUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setLocalData(JSON.parse(res?.data)))
			.catch((e) => setError(e));
	};

	// ////sales Record ///////
	const getSalesData = async () => {
		const formData = new FormData();
		formData.append('file', fileDropped2);

		axios
			.post(salesRecordUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setLocalData2(JSON.parse(res?.data)))
			.catch((e) => setError(e));
	};

	// reconcile get request
	const reconcileData = async () => {
		axios
			.get(reconcileUrl)
			.then((res) => {
				setLocalData3(JSON.parse(res?.data));
			})
			.catch((e) => setError(e));
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
			setLocalData3,
		]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
