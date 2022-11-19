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
		'react/function-component-definition': [
			'enabled',
			{
				namedComponents: [
					'function-declaration',
					'function-expression',
					'arrow-function',
				],
				unnamedComponents: ['function-expression', 'arrow-function'],
			},
		],
	},
};
