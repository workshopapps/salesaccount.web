// import PropTypes from 'prop-types';
// import { useContext, useState, createContext, useMemo } from 'react';

// const UserContext = createContext();
// export const useAuth = () => useContext(UserContext);

// const UserProvider = ({ children }) => {
// 	const [files, setFiles] = useState('');

// 	const dragHandler = (e) => {
// 		e.preventDefault();
// 	};
// 	const dropHandler = (e) => {
// 		e.preventDefault();
// 		setFiles(e.dataTransfer.files);
// 		console.log('active');
// 	};

// 	const value = {
// 		dragHandler,
// 		dropHandler,
// 		files,
// 		setFiles,
// 	};

// 	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// export default UserProvider;

// UserProvider.propTypes = {
// 	children: PropTypes.node.isRequired,
// };
