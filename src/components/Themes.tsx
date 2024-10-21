import { useEffect, useState } from "react";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";


export const Themes = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const checkSistemTheme = () => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDarkMode(isDark)

        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.classList.toggle("light", !isDark);
    }

    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
        checkSistemTheme();
        matchMedia.addEventListener("change", checkSistemTheme);

        return () => {
            matchMedia.removeEventListener("change", checkSistemTheme);
        };
    }, []);

    return (
        <div className="relative">
            {isDarkMode ? <Moon /> : <Sun />}
        </div>
    )
}

export default Themes