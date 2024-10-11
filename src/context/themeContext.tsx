import React, { createContext, useEffect, useState } from "react";

interface ThemeProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({});

function ThemeProvider({ children }: ThemeProps) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  // useEffect(() => {
  //   const darkThemeStorage = JSON.parse(localStorage.getItem("dark_theme") ?? '');

  //   setDarkTheme(darkThemeStorage);
  // }, []);

  const toggleDarkTheme = (e: any) => {
    const isDarkTheme = e.currentTarget.checked;

    setDarkTheme(isDarkTheme);
    localStorage.setItem("dark_theme", isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
