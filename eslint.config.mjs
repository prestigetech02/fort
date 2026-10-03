import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
	{ ignores: ['node_modules/**', 'dist/**'] },
	js.configs.recommended,
	{
		files: ['src/**/*.{js,jsx}'],
		plugins: { react, 'react-hooks': reactHooks, import: importPlugin },
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: { ecmaFeatures: { jsx: true } },
			globals: globals.browser,
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				node: { extensions: ['.js', '.jsx'] },
				alias: { map: [['@', './src']], extensions: ['.js', '.jsx'] },
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			...importPlugin.flatConfigs.recommended.rules,
			'react/prop-types': 'off',
			'react/no-unescaped-entities': 'off',
			'no-unused-vars': 'warn',
		},
	},
	{
		files: ['scripts/**/*.js', '*.config.{js,mjs}'],
		languageOptions: { globals: globals.node },
	},
];
