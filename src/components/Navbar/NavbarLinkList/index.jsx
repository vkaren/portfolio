import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "@context/themeContext";
import "./style.css";

const NavbarLinkList = ({ showMenu, toggleMenu }) => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <ul className={`navbar__links ${showMenu && "show"}`}>
      <li onClick={toggleMenu}>
        <XMarkIcon className="links__close-icon" />
      </li>

      <li className="link">
        <a href="#about">About me</a>
      </li>
      <li className="link">
        <a href="#skills">Skills</a>
      </li>
      <li className="link">
        <a href="#projects">Projects</a>
      </li>
      <li className="link">
        <a href="#contact">Contact</a>
      </li>
      <li>
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
      </li>
    </ul>
  );
};

export default NavbarLinkList;
