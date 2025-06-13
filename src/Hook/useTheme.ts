import { useEffect, useState } from "react";

// Create a custom event for theme changes
const THEME_CHANGE_EVENT = 'themeChange';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Dispatch custom event when theme changes
    window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT));
  }, [isDark]);

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme");
      setIsDark(newTheme === "dark");
    };

    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
}
