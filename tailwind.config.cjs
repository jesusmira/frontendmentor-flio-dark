/** @type {import('tailwindcss').Config} */
module.exports = {
	
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		screens:{
			sm: '375px',
			md: '1000px'
		},
		
		fontFamily: {
			'Raleway': ['"Raleway"', 'serif'],
			'Open-Sans': ['"Open Sans"', 'monospace'],
		},
		colors: {
			
			'dark-blue-intro': 'hsl(217, 28%, 15%)',
			'dark-blue-main': 'hsl(218, 28.4%, 13.1%)',
			'dark-blue-footer': 'hsl(216, 53%, 9%)',
			'dark-blue-testimonials': 'hsl(219, 30%, 18%)',
			'cyan-cta': 'hsl(176, 68%, 64%)',
			'blue-cta': 'hsl(198, 60%, 50%)',
			'light-red': 'hsl(0, 100%, 63%)',
			'white': 'hsl(0, 0%, 100%)'
		},
		
		extend: {},
	},
	plugins: [],
}
