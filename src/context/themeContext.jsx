import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const darkThemeStorage = JSON.parse(localStorage.getItem("dark_theme"));

    setDarkTheme(darkThemeStorage);
  }, []);

  const toggleDarkTheme = (e) => {
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
