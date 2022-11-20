import React from 'react';
import { PropTypes } from 'prop-types';

export const InputField = ({
	id,
	resDesign,
	type,
	label,
	name,
	placeholder,
}) => (
	<div
		className={`form-control ${resDesign} ${
			type === 'checkbox'
				? 'flex flex-row-reverse justify-end items-stretch gap-5 text-gray-500'
				: ''
		} pb-4`}
	>
		<label
			htmlFor={id}
			className={`block ${type === 'checkbox' ? '' : 'pb-1'} text-sm`}
		>
			{' '}
			{label}{' '}
		</label>

		<input
			id={id}
			className={`${
				type === 'checkbox' ? 'w-[18px]' : ''
			}  w-full px-2.5 py-3.5 rounded-lg border border-gray-300 text-base`}
			type={type}
			name={name}
			placeholder={placeholder}
		/>
	</div>
);

InputField.defaultProps = {
	placeholder: '',
	resDesign: 'w-full',
};

InputField.propTypes = {
	id: PropTypes.string.isRequired,
	resDesign: PropTypes.string,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};

export default InputField;
