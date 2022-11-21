import React from 'react';
import { PropTypes } from 'prop-types';

export const TextareaField = ({ id, resDesign, label, placeholder }) => (
	<div className={`form-control ${resDesign} pb-4`}>
		<label htmlFor={id} className="block pb-1 text-sm">
			{' '}
			{label}{' '}
		</label>
		<textarea
			id={id}
			className="w-full px-2.5 py-3.5 text-base rounded-lg border border-gray-300"
			rows={7}
			placeholder={placeholder}
		/>
	</div>
);

TextareaField.defaultProps = {
	placeholder: '',
	resDesign: 'w-full',
};

TextareaField.propTypes = {
	id: PropTypes.string.isRequired,
	resDesign: PropTypes.string,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};

export default TextareaField;
