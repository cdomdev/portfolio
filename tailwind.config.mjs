/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#70ff00",
        "shadow-color": "#2d2d2d;",
      },
      width: {
        "vw-custom": "60vw",
      },
      maxWidth: {
        "mx-custom": "calc(100% - 2rem);",
      },
      dropShadow: {
        custom: "3px 0 3px #70ff00",
      },
    },

    fontFamily: {
      "onest-variable": ["Onest"],
    },
  },
  darkMode: "class",
  plugins: [],
};
