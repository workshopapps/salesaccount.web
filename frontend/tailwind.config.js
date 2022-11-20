/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'very-light-blue': '#EFF8FF',
				'light-blue': '#D1E9FF',
				'dark-blue': '#2E90FA',
				'gray-300': '#D0D5DD',
				'gray-500': '#667085',
				'gray-700': '#344054',
			},
			fontFamily: {
				sans: ['Lexend', 'system-ui'],
			},
		},
	},
	plugins: [],
};
