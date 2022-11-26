import axios from 'axios';
import PropTypes from 'prop-types';

import { useContext, useState, createContext, useMemo, useEffect } from 'react';

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [files, setFiles] = useState(null);
	const [files2, setFiles2] = useState(null);
	const url1 = 'http://accountpal.hng.tech:8000/upload_statement';
	// where file1 = bank statement and file 2 = sales record

	const [fileState, setFileState] = useState(false);

	// 	const getData = async () => {
	// 		useEffect(() => {
	// 			const formData = new FormData();
	// 			formData.append("file", files);
	//
	// 			axios
	// 				.post(url1, formData, {
	// 					headers: {
	// 						"Content-Type": "multipart/form-data",
	// 					},
	// 				})
	// 				.then((res) => console.log(res?.data))
	// 				.catch((e) => console.log(e));
	//
	// 		}, [])
	//
	//
	// 	}

	const dragHandler = (e) => {
		e.preventDefault();
	};

	const dropHandler = (e) => {
		e.preventDefault();
		setFiles(e.dataTransfer?.files);
		// getData();
		setFileState(true);
	};

	const dragHandlerFile2 = (e) => {
		e.preventDefault();
	};

	const dropHandlerFile2 = (e) => {
		e.preventDefault();
		setFiles(e.dataTransfer?.files);
		setFileState(true);
	};

	const value = useMemo(
		() => ({
			dragHandler,
			dropHandler,
			files,
			setFiles,
			fileState,
			files2,
			setFiles2,
			dropHandlerFile2,
			dragHandlerFile2,
			// getData
		}),
		[files]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
