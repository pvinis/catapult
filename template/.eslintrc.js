/* eslint-disable no-unused-vars */
const OFF = 0
const WARN = 1
const ERR = 2

module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	plugins: ['react'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		// shit that prettier fails to do well
		// https://itnext.io/how-to-replace-prettier-by-eslint-rules-21574359e041
		'semi': [ERR, 'never'],
		'indent': [ERR, 'tab'],
		'quotes': [ERR, 'single'],
		// 'max-len': [WARN, { 'code': 80 }],
		'comma-dangle': [ERR, 'always-multiline'],
		'object-curly-spacing': [ERR, 'always'],
		// jsxSingleQuote: true,
		'react/jsx-closing-bracket-location': [ERR, 'line-aligned'],

		// 'key-spacing': ERR,
		'no-console': OFF,
		// 'arrow-spacing': ERR,
		// 'no-multi-spaces': [ERR, { 'ignoreEOLComments': true }], // has exceptions too, if needed
		'no-multiple-empty-lines': [ERR ,  { max: 2, maxBOF: 0, maxEOF: 0 }],
	},
}
