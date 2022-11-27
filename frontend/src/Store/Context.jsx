import axios from 'axios';
import PropTypes from 'prop-types';

import { useContext, useState, createContext, useMemo, useEffect } from 'react';

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [saleAccountFiles, setSalesAccountFiles] = useState([]);
	const [bankStatementFile, setBankStatementFile] = useState([]);
	const [localFile, setLocalFile] = useState([]);
	const [localFile2, setLocalFile2] = useState([]);

	const [localData, setLocalData] = useState([]);
	const [localData2, setLocalData2] = useState([]);

	const [fileDropped, setFileDropped] = useState([]);
	const [fileDropped2, setFileDropped2] = useState([]);

	// const url1 = 'http://accountpal.hng.tech:8000/upload_statement';
	// where file1 = bank statement and file 2 = sales record

	// const [fileState, setFileState] = useState(false);

	const bankStatementUrl = 'http://localhost:81/upload_statement';

	// http://0.0.0.0:80

	const getData = async () => {
		const formData = new FormData();
		formData.append('file', localFile);

		axios
			.post(bankStatementUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					accept: 'application/json',
				},
			})
			.then((res) => setBankStatementFile(JSON.parse(res?.data)));
		// .catch((e) => console.log(e));
	};

	const dragHandler = (e) => {
		e.preventDefault();
	};

	const dropHandler = (e) => {
		e.preventDefault();
		setLocalFile(e.dataTransfer?.files);
		// getData();
		// setFileState(true);
	};

	const dragHandlerFile2 = (e) => {
		e.preventDefault();
	};

	const dropHandlerFile2 = (e) => {
		e.preventDefault();
		setLocalFile(e.dataTransfer?.files);
		// setFileState(true);
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
		]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
