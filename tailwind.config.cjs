/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
	theme: {
		extend: {
			colors: {
				800: '#0E1116',
				700: '#1C222C',
				600: '#272F3A',
				200: '#5E6D83'
			},
			zIndex: {
				top: '9999'
			}
		}
	},
	plugins: []
}
