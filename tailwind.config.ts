import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					green: 'rgb(var(--color-primary-green))',
					greenLight: 'rgb(var(--color-primary-green-light))',
				},
				secondary: {
					pink: 'rgb(var(--color-secondary-pink))',
					pinkMedium: 'rgb(var(--color-secondary-pink-medium))',
					pinkLight: 'rgb(var(--color-secondary-pink-light))'
				},
				tertiary: {
					white: 'rgb(var(--color-tertiary-white))'
				},
				title: 'rgb(var(--color-text-title))',
				subtitle: 'rgb(var(--color-text-subtitle))',
				header: 'rgb(var(--color-text-header))'

			},
			fontFamily: {
				roboto: [
					'var(--font-roboto)',
					'sans-serif'
				]
			},
			scrollBehavior: [
				'responsive'
			]
		},
		fontSize: {
			xs: 'var(--xs)',
			sm:'var(--sm)',
			md: 'var(--md)',
			lg: 'var(--lg)',
			xl: 'var(--xl)'
		}
	}
};
export default config;
