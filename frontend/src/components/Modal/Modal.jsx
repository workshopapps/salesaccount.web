import React from 'react';
import PropTypes from 'prop-types';

function Modal({ children }) {
	return (
		<div className="h-screen fixed w-full top-0 left-0 bg-[#98a2b3cc] flex justify-center items-center z-10">
			{children}
		</div>
	);
}

Modal.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Modal;
