"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "light",
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "system";
    setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    function applyTheme(t) {
      if (t === "dark") {
        root.classList.add("dark");
        setResolvedTheme("dark");
      } else {
        root.classList.remove("dark");
        setResolvedTheme("light");
      }
    }

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mq.matches ? "dark" : "light");

      const handler = (e) => applyTheme(e.matches ? "dark" : "light");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  function handleSetTheme(t) {
    setTheme(t);
    localStorage.setItem("theme", t);
  }

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: handleSetTheme, resolvedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
