import { createContext, useState } from "react";

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(
    false || JSON.parse(localStorage.getItem("dark-theme"))
  );

  const toggleDarkTheme = (e) => {
    const isDarkTheme = e.currentTarget.checked;
    setDarkTheme(isDarkTheme);
    localStorage.setItem("dark-theme", isDarkTheme);
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
