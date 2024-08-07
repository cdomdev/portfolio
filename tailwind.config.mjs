/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#70ff00",
        "shadow-color": "#2d2d2d;",
      },
      backgroundColor: {
        custom: "#333333",
      },
      boxShadow: {
        custom: "0 0 10px 2px rgb(44, 44, 44)",
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
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-20%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
    fontFamily: {
      "onest-variable": ["Onest"],
    },
  },
  plugins: [],
};


