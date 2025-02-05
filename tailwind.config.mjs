/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#3ac13a",
        "shadow-color": "#2d2d2d;",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
