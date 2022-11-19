import React from 'react';
import { InputField } from '../contact-page/InputField/InputField';
import { TextareaField } from '../contact-page/TextareaField/TextareaField';
// import { Button } from './Button';

export function Form() {
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
			<InputField
				id="phone"
				type="tel"
				label="Phone number"
				name="phone number"
				placeholder="+2345456464"
				val="phone"
			/>

			<TextareaField id="message" label="Message" val="message" />

			<InputField
				id="checkbox"
				type="checkbox"
				label="You agree to our friendly privacy policy"
				name="phone number"
				val="permission"
			/>

			<button
				className=" w-full text-lg mt-4 h-[44px] rounded-lg text-white bg-dark-blue"
				type="submit"
				value="Send Message"
			>
				Send Message
			</button>
		</form>
	);
}

export default Form;
