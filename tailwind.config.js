/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				// Using Tailwind's default sans-serif for body/general text
				sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
				// Define serif using Playfair Display + fallbacks
				serif: ['Playfair Display', 'serif']
				// Keep the specific keys if you prefer, or remove them
				// 'maelstromsans': ['TestMaelstromSans', 'sans-serif'],
				// 'maelstrom': ['TestMaelstrom', 'serif'],
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
