/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				card: 'hsl(var(--card) / <alpha-value>)',
				border: 'hsl(var(--border) / <alpha-value>)',
				'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
				charcoal: 'hsl(var(--charcoal) / <alpha-value>)',
				primary: 'hsl(var(--primary) / <alpha-value>)',
				secondary: 'hsl(var(--secondary) / <alpha-value>)',
				tertiary: 'hsl(var(--tertiary) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['Nunito', 'Arial', 'sans-serif'],
			},
		},
	},
};
