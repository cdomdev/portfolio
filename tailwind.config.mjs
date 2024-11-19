/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"custom-color": "#3ac13a",
				"shadow-color": "#2d2d2d;",
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(15deg, rgba(19,17,47,1) 25%, rgba(9,9,13,1) 63%, rgba(12,77,64,1) 100%)",
				"white-gradient":
					"linear-gradient(to right bottom, #fdfffa, #fcfffc, #fcfffe, #fdffff, #feffff, #fdffff, #fbfeff, #fafeff, #f5fefe, #f0fefa, #effef4, #f2fcec);",
			},
		},

		fontFamily: {
			"onest-variable": "Onest",
		},
	},
	darkMode: "class",
	plugins: [],
};
