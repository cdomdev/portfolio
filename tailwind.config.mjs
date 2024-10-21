/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
			"custom-color": "#70ff00",
			"shadow-color": "#2d2d2d;",
		  },
		backgroundImage: {
		  "custom-gradient":
			"linear-gradient(15deg, rgba(19,17,47,1) 25%, rgba(9,9,13,1) 63%, rgba(12,77,64,1) 100%)",
		  "white-gradient":
			"linear-gradient(15deg, rgba(255,255,255,1) 18%, rgba(250,250,250,1) 52%, rgba(254,254,254,1) 86%);",
		},
	  },
  
	  fontFamily: {
		"onest-variable": "Onest",
	  },
	},
	darkMode: "class",
	plugins: [],
  };
  