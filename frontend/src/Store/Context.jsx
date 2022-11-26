import axios from 'axios';
import PropTypes from 'prop-types';

import { useContext, useState, createContext, useMemo, useEffect } from 'react';

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

	const [saleAccountFiles, setSalesAccountFiles] = useState([]);
	const [bankStatementFile, setBankStatementFile] = useState([]);
	const [localFile, setLocalFile] = useState([]);

	// const url1 = 'http://accountpal.hng.tech:8000/upload_statement';
	// where file1 = bank statement and file 2 = sales record

	// const [fileState, setFileState] = useState(false);

	const bankStatementUrl = 'http://accountpal.hng.tech:8000/upload_record'

	const getData = async () => {
		const formData = new FormData();
		formData.append("file", localFile);

		axios
			.post(bankStatementUrl, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => setBankStatementFile(JSON.parse(res?.data)))
			.catch ((e) => console.log(e));
	

			console.log(bankStatementFile)
}

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
		getData
	}),
	[localFile]
);

return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
