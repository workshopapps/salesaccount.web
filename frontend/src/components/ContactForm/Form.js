import React from 'react';
import { InputField } from '../InputField/InputField';
import { TextareaField } from '../TextareaField/TextareaField';
// import { Button } from './Button';

export const Form = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="pt-[30px] sm:flex sm:flex-wrap " onSubmit={onSubmit}>
			<InputField
				id="first-name"
				resDesign="sm:w-3/6 sm:pr-[8px]"
				type="input"
				label="First Name"
				name="first name"
				placeholder="First Name"
				val="firstName"
			/>
			<InputField
				id="last-name"
				resDesign="sm:w-3/6 sm:pl-[8px]"
				type="input"
				label="Last Name"
				name="last name"
				placeholder="Last Name"
				val="lastName"
			/>
			<InputField
				id="email"
				type="email"
				label="Email"
				name="email"
				placeholder="olivia@zuri.com"
				val="email"
			/>

			<TextareaField id="message" label="Message" val="message" />

			<button
				className=" w-full text-lg my-4 h-[44px] rounded-lg text-white bg-dark-blue"
				type="submit"
				value="Send Message"
			>
				Send Message
			</button>

			<InputField
				id="checkbox"
				type="checkbox"
				label="Subscribe to our newsletter"
				name="newsletter"
				val="permission"
			/>
		</form>
	);
};

export default Form;
