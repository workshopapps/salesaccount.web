// import React from 'react';
// import PropTypes from 'prop-types';
// import './button.css';

// /**
//  * Primary UI component for user interaction
//  */
// const Button = ({ primary, backgroundColor, size, label, text }) => {
// 	const mode = primary
// 		? 'storybook-button--primary'
// 		: 'storybook-button--secondary';
// 	return (
// 		<button
// 			type="button"
// 			className={['storybook-button', `storybook-button--${size}`, mode]}
// 			style={backgroundColor && { backgroundColor }}
// 			{text}
// 		>
// 			{label}
// 		</button>
// 	);
// };

// export default Button;

// Button.propTypes = {
// 	primary: PropTypes.bool,
// 	backgroundColor: PropTypes.string,
// 	size: PropTypes.oneOf(['small', 'medium', 'large']),
// 	label: PropTypes.string.isRequired,
// 	onClick: PropTypes.func,
// 	text: PropTypes.string
// };

// Button.defaultProps = {
// 	backgroundColor: null,
// 	primary: false,
// 	size: 'medium',
// 	onClick: undefined,
// 	text: ""
// };
