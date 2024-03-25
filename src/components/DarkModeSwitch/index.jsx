import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import "./style.css";

const DarkModeSwitch = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <label htmlFor="switch" className="navbar_switch">
      <input
        className="switch-checkbox"
        id="switch"
        name="mode"
        type="checkbox"
        aria-label="enable or disable dark mode"
        onChange={toggleDarkTheme}
        checked={darkTheme}
      />
      <span className="switch-slider"></span>
    </label>
  );
};

export default DarkModeSwitch;
