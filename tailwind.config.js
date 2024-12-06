import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'p': '#ffffff',
			's': '#ff3131',
			't': '#ff914d',
		  },
		  fontFamily: {
			title: ["Chau Philomene One", "sans-serif"],
			body: ["Comfortaa", "sans-serif"],
    },
	},
	plugins: [typography, forms, containerQueries]
};