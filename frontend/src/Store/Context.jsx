import PropTypes from 'prop-types';

import { useContext, useState, createContext, useMemo } from 'react';

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [files, setFiles] = useState(null);
	const [files2, setFiles2] = useState(null);
	// where file1 = bank statement
	// where file 2 = sales record

	const [fileState, setFileState] = useState(false);

	const dragHandler = (e) => {
		e.preventDefault();
	};
	const dropHandler = (e) => {
		e.preventDefault();
		setFiles(e.dataTransfer?.files);
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
		}),
		[files]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
