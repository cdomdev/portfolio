import { useEffect, useState } from "react";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

export const LogoTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const checkSistemTheme = () => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);

    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    checkSistemTheme();
    matchMedia.addEventListener("change", checkSistemTheme);

    return () => {
      matchMedia.removeEventListener("change", checkSistemTheme);
    };
  }, []);

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="30"
      className="fill-black dark:fill-white -ml-3 w-20 h-10 md:w-28"
      viewBox="0 0 400 100.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
        fill=""
        stroke="none"
      >
        <path
          d="M921 949 c-359 -42 -569 -252 -523 -521 32 -187 168 -310 407 -370
    121 -30 361 -32 479 -5 80 19 183 59 226 88 l24 16 -78 55 -79 55 -49 -34
    c-74 -49 -145 -67 -273 -67 -147 0 -232 25 -303 89 -66 60 -92 125 -92 234 0
    111 21 173 79 231 76 75 135 94 306 95 159 0 213 -11 285 -61 l47 -33 76 52
    c42 29 76 55 77 59 0 12 -140 74 -205 91 -122 33 -264 42 -404 26z"
        ></path>
        <path
          d="M1045 456 l0 -196 80 0 c96 0 144 12 185 47 46 38 63 80 64 148 0 74
    -31 135 -84 168 -29 18 -53 22 -140 25 l-105 4 0 -196z m228 96 c29 -30 32
    -38 32 -96 0 -50 -4 -69 -20 -86 -27 -31 -76 -50 -125 -50 l-40 0 0 136 0 136
    60 -4 c52 -4 66 -9 93 -36z"
        ></path>
        <path
          d="M1503 503 c-36 -7 -81 -56 -88 -97 -16 -83 43 -150 130 -148 73 1
    125 54 125 127 0 77 -83 136 -167 118z m82 -78 c14 -13 25 -35 25 -49 0 -28
    -42 -66 -72 -66 -25 0 -68 44 -68 70 0 12 11 32 25 45 13 14 34 25 45 25 12 0
    32 -11 45 -25z"
        ></path>
        <path
          d="M1715 379 l0 -119 40 0 40 0 -3 73 c-3 60 0 77 15 96 14 17 25 22 41
    17 26 -9 35 -50 30 -130 l-3 -56 35 0 35 0 -3 67 c-3 77 12 116 45 121 33 5
    45 -29 41 -114 l-3 -74 40 0 40 0 -6 95 c-5 81 -10 99 -29 120 -28 30 -93 34
    -121 9 -15 -14 -20 -14 -41 -1 -16 11 -49 16 -108 16 l-85 0 0 -120z"
        ></path>
      </g>
    </svg>
  );
};

export default LogoTheme;
