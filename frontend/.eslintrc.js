module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/react-in-jsx-scope': 'off',
		'jsx-quotes': 'off',
		'no-unused-vars': 'off',
		'no-console': 'warn',
		'func-names': 'off',
		'object-shorthand': 'off',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'react/function-component-definition': 'off',
		'arrow-body-style': ['error', 'as-needed'],
	},
};
