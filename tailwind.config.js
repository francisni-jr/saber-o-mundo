import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'p': '#ffffff',
			's': '#5e18ea',
			't': '#ff914d',
		  },
		  fontFamily: {
			title: ["Londrina Solid", "sans-serif"],
			body: ["Comfortaa", "cursive"],
    },
	},
	plugins: [typography, forms, containerQueries]
};